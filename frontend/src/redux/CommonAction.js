import Axios from 'axios';
import {
    USER_GET_OTP_REQUEST_SUCCESS,
    USER_SESSION_REQUEST,
    USER_SESSION_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_SIGNIN_ERROR,
    USER_GET_OTP_REQUEST,
    OPEN_CLOSE_SIDE_BAR_MENU,
    OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL,
    ALL_TRANSACTION_DETAIL_LIST_SUCCESS,
} from "./CommonConstants";
import createSocketConnection from "../socket/socket";
const api = Axios.create({
    baseURL: 'https://unikpayindia.com/api-call-unikpay/common/',
    withCredentials:true
})
let RAZORPAY_KEY_ID = 'rzp_test_ciDUUa1LW3H7NV'

export const actionToConnectSocketServer = () => async () => {
    const socket = createSocketConnection();
    socket.on('connect', () => {
        console.log('Connected to socket server:', socket.id);
    });

    socket.on('message', (data) => {
        let websocketData = JSON.parse(data);
        console.log('websocketData',websocketData)
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from socket server');
    });
}

export const actionToGetUserSessionData = () => async (dispatch) => {
    dispatch({type: USER_SESSION_REQUEST});
    try {
        api.post(`actionToGetCurrentUserSessionDataApiCall`, {},{ withCredentials: true }).then(responseData => {
            if(responseData?.data?.success){
                dispatch({ type: USER_SESSION_SUCCESS, payload: 1});
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: {...responseData?.data.userData}});
            }else{
                dispatch({type: USER_SESSION_SUCCESS, payload:0,});
            }
        })
    } catch (error) {
        dispatch({type: USER_SESSION_SUCCESS, payload:0,});
    }
}

export const actionToSendOtpForLogin = (phone,callFunctionToSendOtpTimeInterval) => async (dispatch) => {
    dispatch({ type: USER_GET_OTP_REQUEST});
    try {
        api.post(`actionToSendOtpForLoginApiCall`, {phone}).then(responseData => {
            dispatch({ type: USER_GET_OTP_REQUEST_SUCCESS});
            if(responseData?.data?.success){
                if(callFunctionToSendOtpTimeInterval)
                    callFunctionToSendOtpTimeInterval();
            }else{
                dispatch({ type: USER_SIGNUP_SIGNIN_ERROR, payload: {error: responseData?.data?.error, message: responseData?.data?.message}});
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const actionToLogoutUserSession = (setUserLogoutLoading) => async (dispatch) => {
    try {
        api.post(`actionToLogoutUserSessionApiCall`, {}).then(() => {
            if(setUserLogoutLoading){
                setUserLogoutLoading(false);
            }
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: {}});
        })
    } catch (error) {
        console.log('error',error)
    }
}
export const actionToGetTransactionDetails = (user_id) => async(dispatch) => {
    try{
        const {data} = await api.post('actionToGetTransactionDetailsApiCall', {user_id});
        dispatch({type:ALL_TRANSACTION_DETAIL_LIST_SUCCESS, payload:data})
    }catch(e){
        console.log(e)
    }
}
export const actionToSendPaymentRequest = (payload, resetCustomFields) => async (dispatch, getState) => {
    try {
        const { userInfo } = getState().userAuthDetail;
        const {transactionDetails} = getState().paymentTransactionDetailsList;
        payload.user_id = userInfo.id;

        // Call backend to create Razorpay order
        const { data } = await api.post(`actionToSendPaymentRequestApiCall`, payload);

        if (!data?.order?.id) throw new Error("Order creation failed");

        // Ensure Razorpay is available
        if (!window.Razorpay) {
            throw new Error("Razorpay SDK not loaded");
        }

        const options = {
            key: RAZORPAY_KEY_ID, // replace with your actual Razorpay key
            amount: data.order.amount,
            currency: "INR",
            name: "Mobile Recharge",
            description: "Recharge payment",
            order_id: data.order.id,
            prefill: {
                name: userInfo.name,
                email: "test@example.com",
                contact: payload.mobileNumber,
            },
            handler: async (response) => {
                try {
                    const verifyRes = await api.post('actionToVarifyRechargePaymentApiCall', {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    });
                    //// OBJECT FOR TRANSACTION MODAL /////
                    let details = {
                        status: "success",
                        message: "✅ Payment verified and successful!",
                        amount: data.order.amount / 100, // in ₹
                        transactionId: response?.razorpay_payment_id,
                        orderId: response?.razorpay_order_id,
                        date: new Date().toLocaleString(),
                        paidBy: userInfo.name,
                        mobile: payload.mobileNumber,
                    }
                    //// OBJECT FOR TRANSACTION MODAL /////

                    //// OBJECT FOR TRANSACTION LIST UPDATE /////
                    let transactionObj = {
                        amount: data.order.amount / 100,
                        end_user_phone: payload.mobileNumber,
                        operator: payload.operator,
                        circle: payload.circle,
                        order_id: response?.razorpay_order_id,
                        completed_at: new Date(),
                        transaction_id: response?.razorpay_payment_id,
                        signature_id: response.razorpay_signature
                    }
                    //// OBJECT FOR TRANSACTION LIST UPDATE /////
                    if (verifyRes.data.success) {
                        transactionObj.status = "success"
                        resetCustomFields(); // only reset on success
                    } else {
                        transactionObj.status = "failed"
                        details.message('❌ Payment verification failed.');
                        details.status = "failed"
                    }
                    resetCustomFields();

                    dispatch({type:OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL,payload:{isOpen:true, transaction:details}})

                    let transactionDetailsClone = [...transactionDetails];
                    transactionDetailsClone.push(transactionObj)
                    dispatch({type:ALL_TRANSACTION_DETAIL_LIST_SUCCESS, payload:transactionDetailsClone})
                } catch (error) {
                    console.error("Payment verification error:", error);
                    resetCustomFields();
                    alert('Error verifying payment. Please contact support.');
                }
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    } catch (error) {
        console.error("Payment process error:", error);
        alert("❌ Payment failed. Please try again.");
        resetCustomFields();
    }
};

export const actionToMakeDthRechargePayment = (payload,resetDthObject) => async(dispatch,getState) =>{
    try {
        const {transactionDetails} = getState().paymentTransactionDetailsList;
        const { userInfo } = getState().userAuthDetail;
        payload.user_id = userInfo.id;
        const { data } = await api.post(`actionToMakeDthPaymentRequestApiCall`, payload);
        if(data.success){
            const options = {
                key: RAZORPAY_KEY_ID,
                amount: data.order.amount,
                currency: 'INR',
                name: 'DTH Recharge',
                description: 'Payment for recharge',
                order_id: data.order.id,
                handler: async (response) => {
                    const res = await api.post('actionToVerifyDthPaymentApiCall', {
                        ...response,
                        ...payload
                    });

                    //// OBJECT FOR TRANSACTION MODAL /////
                    let details = {
                        status: "success",
                        message: `✅ ${res.data.message}`,
                        amount: data.order.amount / 100, // in ₹
                        transactionId: response?.razorpay_payment_id,
                        orderId: response?.razorpay_order_id,
                        date: new Date().toLocaleString(),
                        paidBy: userInfo.name,
                        customerId: payload.customerId,
                    }

                    //// OBJECT FOR TRANSACTION LIST UPDATE /////
                    let transactionObj = {
                        amount: data.order.amount / 100,
                        customerId: payload.customerId,
                        operator: payload.operator,
                        order_id: response?.razorpay_order_id,
                        completed_at: new Date(),
                        transaction_id: response?.razorpay_payment_id,
                        signature_id: response.razorpay_signature,
                        transactionType: 'dth_recharge'
                    }
                    console.log(res.data,"res.data")
                    if (res.data.status) {
                        transactionObj.status = "success"
                        resetDthObject(); // only reset on success
                    } else {
                        transactionObj.status = "failed"
                        details.status = "failed"
                    }
                    dispatch({type:OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL,payload:{isOpen:true, transaction:details}})

                    let transactionDetailsClone = [...transactionDetails];
                    transactionDetailsClone.push(transactionObj)
                    dispatch({type:ALL_TRANSACTION_DETAIL_LIST_SUCCESS, payload:transactionDetailsClone});
                },
                prefill: {
                    name: userInfo.name,
                    email: "test@example.com",
                    contact: payload.mobileNumber,
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        }
    }catch(e){
        console.log(e)
    }
}


export const actionToOpenCloseSideBarMenu = (action) => async (dispatch) => {
    dispatch({
        type: OPEN_CLOSE_SIDE_BAR_MENU,
        payload:{isOpen:action}
    });
}
export const actionToVerifyLoginUserOtp = (phone,otp) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST});
    try {
        api.post(`actionToVerifyLoginUserOtpApiCall`, {phone,otp}).then(responseData => {
            if(responseData?.data?.success){
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: {...responseData?.data.userData}});
            }else{
                dispatch({type: USER_SIGNIN_FAIL, payload:'Auth Fail!',});
                dispatch({ type: USER_SIGNUP_SIGNIN_ERROR, payload: {error: responseData?.data?.error, message: responseData?.data?.message}});
            }
        })
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
