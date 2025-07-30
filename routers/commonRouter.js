import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import {
    actionToSendOtpApiCall,
    actionToVerifyLoginUserOtpApiCall,
    actionToGetCurrentUserProfileDataApiCall,
    actionToInsertOrderDetailsApiCall,
    actionToGetTransactionDetailsApiCall,
    actionToInsertDthOrderDetailsApiCall
} from "../models/commonModel.js";
import {
    callFunctionToSendOtp,
    createNewSessionWithUserDataAndRole,
    deleteOldSessionFileFromSessionStore, updateCommonApiCall
} from "../models/helpers/commonModelHelper.js";

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});




const commonRouter = express.Router();
let storeUserPhoneOtbObj = {};

commonRouter.post(
    '/actionToSendOtpApiCall',
    expressAsyncHandler(async (req, res) => {
        let responseToSend = {
            success:0,
        }
        const phone = req.body.phone;
        actionToSendOtpApiCall(req.body)
            .then(user => {
                if(user?.id) {
                    responseToSend = {
                        success:0,
                        error:'phone',
                        message:'Mobile no already registered'
                    }
                    res.status(200).send(responseToSend);
                }else{
                   // const otp = Math.floor(1000 + Math.random() * 9000);
                    const otp = 1234;
                    console.log(otp);

                    callFunctionToSendOtp(phone,otp);

                    storeUserPhoneOtbObj[phone] = otp;
                    responseToSend = {
                        success:1,
                    }
                    res.status(200).send(responseToSend);
                }
            }).catch(error => {
            res.status(500).send(error);
        })
    })
);

commonRouter.post(
    '/actionToSendOtpForLoginApiCall',
    expressAsyncHandler(async (req, res) => {
        let responseToSend = {
            success:0,
        }
        const phone = req.body.phone;
        actionToSendOtpApiCall(req.body)
            .then(user => {
                if(!user?.id) {
                    responseToSend = {
                        success:0,
                        error:'phone',
                        message:'Mobile not registered'
                    }
                    res.status(200).send(responseToSend);
                }else{
                    //const otp = Math.floor(1000 + Math.random() * 9000);
                    const otp = 1234;
                    console.log(otp);

                    callFunctionToSendOtp(phone,otp);

                    storeUserPhoneOtbObj[phone] = otp;
                    responseToSend = {
                        success:1,
                    }
                    res.status(200).send(responseToSend);
                }
            }).catch(error => {
            res.status(500).send(error);
        })
    })
);

commonRouter.post(
    '/actionToVerifyLoginUserOtpApiCall',
    expressAsyncHandler(async (req, res) => {
        let responseToSend = {
            success:0,
        }
        const otp = req.body.otp;
        const phone = req.body.phone;
        actionToVerifyLoginUserOtpApiCall(req.body.phone)
            .then(user => {
                if(user?.id) {
                    if (Number(storeUserPhoneOtbObj[phone]) === Number(otp)) {
                        createNewSessionWithUserDataAndRole(req, user).then(() => {
                            res.status(200).send({
                                success: 1,
                                userData: user,
                                message: 'Session data retrieved successfully',
                            });
                        })
                }else {
                        responseToSend = {
                            success: 0,
                            error:'otp',
                            message: 'OTP is not correct'
                        }
                        res.status(200).send(responseToSend);
                    }
                }else {
                    responseToSend = {
                        success:0,
                        error:'phone',
                        message:'Mobile not registered'
                    }
                    res.status(200).send(responseToSend);
                }
            }).catch(error => {
            res.status(500).send(error);
        })
    })
);

commonRouter.post(
    '/actionToGetCurrentUserSessionDataApiCall',
    expressAsyncHandler(async (req, res) => {
        if (req?.session?.userSessionData?.id) {
            actionToGetCurrentUserProfileDataApiCall(req?.session?.userSessionData?.id).then(responseData => {
                res.status(200).send({
                    success: true,
                    userData:responseData,
                    message: 'Session data retrieved successfully',
                });
            })
        } else {
            // If no session found, return unauthorized response
            res.status(200).send({
                success: false,
                message: 'No active session found. User is not logged in.',
            });
        }
    })
);

commonRouter.post(
    '/actionToGetCurrentUserProfileDataApiCall',
    expressAsyncHandler(async (req, res) => {
        // Check if the session exists and the user is logged in
        if (req?.session?.userSessionData?.id) {
            actionToGetCurrentUserProfileDataApiCall(req?.session?.userSessionData?.id).then(responseData => {
                res.status(200).send(responseData);
            })
        } else {
            // If no session found, return unauthorized response
            res.status(200).send({
                success: false,
                message: 'No active session found. User is not logged in.',
            });
        }
    })
);

commonRouter.post(
    '/actionToLogoutUserSessionApiCall',
    expressAsyncHandler(async (req, res) => {
        // Check if the session exists and the user is logged in
        const oldSessionId = req?.session?.id;
        deleteOldSessionFileFromSessionStore(oldSessionId).then(() => {
            req?.session?.destroy();
            res.status(200).send({
                success: true,
                message: 'User logged out',
            });
        });
    })
);

commonRouter.post('/actionToGetTransactionDetailsApiCall',
    expressAsyncHandler(async (req, res) => {
        const userId = req?.session?.userSessionData?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized access' });
        }

        const responseData = await actionToGetTransactionDetailsApiCall(userId);
        res.status(200).send(responseData);
    })
);

commonRouter.post('/actionToSendPaymentRequestApiCall', expressAsyncHandler(async (req, res) => {

    const { amount, mobileNumber, operator, circle,user_id} = req.body;

    const options = {
        amount: amount * 100,
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,
        notes: { mobile:mobileNumber, operator,circle }
    };

    try {
        const order = await razorpayInstance.orders.create(options);


        const dbRes = await actionToInsertOrderDetailsApiCall(order, user_id);
        res.json({ success: true, order ,dbRes}); // send back something for now
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}));

commonRouter.post(
    '/actionToVarifyRechargePaymentApiCall',
    expressAsyncHandler(async (req, res) => {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

            const generated_signature = crypto
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET) // Replace with process.env.SECRET_KEY in production
                .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                .digest('hex');

            if (generated_signature === razorpay_signature) {
                // ✅ Update DB on successful verification
                await updateCommonApiCall({
                    tableName: 'transaction',
                    column: ['transaction_id=?','signature_id=?', 'status=?','completed_at=?'],
                    value: [razorpay_payment_id, razorpay_signature,'success', new Date() ],
                    whereCondition: `order_id = '${razorpay_order_id}'`
                });
                return res.json({ success: true, message: 'Payment verified successfully' });
            } else {
                await updateCommonApiCall({
                    tableName: 'transaction',
                    column: ['transaction_id=?','signature_id=?', 'status=?','completed_at=?'],
                    value: [razorpay_payment_id, razorpay_signature,'failed', new Date()],
                    whereCondition: `order_id = '${razorpay_order_id}'`
                });
                return res.status(400).json({ success: false, message: 'Payment verification failed' });
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    })
);

commonRouter.post(
    '/actionToMakeDthPaymentRequestApiCall',
    expressAsyncHandler(async(req,res)=>{
        try{
            const { amount } = req.body;
            const options = {
                amount: parseInt(amount) * 100,
                currency: 'INR',
                receipt: 'order_rcpt_' + Date.now(),
            };
            const order = await razorpayInstance.orders.create(options);
            console.log('order',order)
            return res.json({success: true, order });
        }catch(e){
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    })
 )

commonRouter.post('/actionToVerifyDthPaymentApiCall',
    expressAsyncHandler(async(req, res) =>{
        try{
            const {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            } = req.body;

            const generatedSignature = crypto
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(razorpay_order_id + '|' + razorpay_payment_id)
                .digest('hex');

            if (generatedSignature !== razorpay_signature) {
                await actionToInsertDthOrderDetailsApiCall(req.body, 'failed');
                return res.status(400).json({ message: 'Payment failed due to invalid signature' , status:false});
            }

            // Save details to database (optional)
            await actionToInsertDthOrderDetailsApiCall(req.body, 'success');
            // Recharge logic will be added here later
            return res.status(200).json({
                message: 'Payment successful. Recharge will be processed soon.',
                details: "Payment successful",
                status: true
            });

        }catch(e){
            console.error(err);
            return res.status(500).json({ message: 'Recharge API error.' });
        }
    })
)
export default commonRouter;