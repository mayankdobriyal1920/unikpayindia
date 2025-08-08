import pool from "./connection.js";
import {
    actionToGetLpgBookingTransactionDetailQuery,
    actionToGetTransactionDetailsApiCallQuery, actionToGetTransactionHistoryRequestQuery,
    checkMobNumberAlreadyExistQuery,
    getUserByIdQuery,
    loginUserQuery,
} from "../queries/commonQuries.js";
import {insertCommonApiCall} from "./helpers/commonModelHelper.js";

export const actionToSendOtpApiCall = (body) => {
    const {phone} = body;
    return new Promise(function(resolve, reject) {
        let userData = {};
        const query = checkMobNumberAlreadyExistQuery();
        pool.query(query,[phone], (error, results) => {
            if (error) {
                reject(error)
            }
            if(results?.length){
                userData = results[0];
            }
            resolve(userData);
        })
    })
}

export const actionToVerifyLoginUserOtpApiCall = (body) => {
    const phone = body;
    return new Promise(function(resolve, reject) {
        let userData = {};
        const query = loginUserQuery();
        pool.query(query,[phone], (error, results) => {
            if (error) {
                reject(error)
            }
            if(results?.length){
                userData = results[0];
            }
            resolve(userData);
        })
    })
}

export const actionToGetCurrentUserProfileDataApiCall = (userId) => {
    return new Promise(function (resolve, reject) {
        let userData = {};
        const query = getUserByIdQuery();

        pool.query(query, [userId], (error, results) => {
            if (error) {
                reject(error);
            }

            if (results?.length) {
                userData = results[0];
            }

            resolve(userData);
        });
    });
}
export const actionToGetTransactionDetailsApiCall = async(user_id) => {
    return new Promise(function(resolve, reject) {
        const query = actionToGetTransactionDetailsApiCallQuery();
        pool.query(query,[user_id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}
export const actionToInsertOrderDetailsApiCall = async (data, user_id) => {
    const notes = data.notes || {};

    const orderData = {
        column: ['order_id', 'amount', 'user_id', 'end_user_phone', 'operator', 'circle','status','transactionType'],
        alias: ['?', '?', '?', '?', '?', '?','?','?'],
        tableName: 'transaction',
        values: [
            data.id,
            data.amount / 100,
            user_id,
            notes.mobile,
            notes.operator,
            notes.circle,
            'pending',
            'mobile_recharge'
        ],
    };

    try {
        const insertRes = await insertCommonApiCall(orderData);
        return insertRes
    } catch (error) {
        console.error("Failed to insert order:", error);
    }
};


export const actionToInsertDthOrderDetailsApiCall = async(payload, status) => {
    const orderData = {
        column: ['order_id', 'amount', 'user_id', 'operator', 'status','transactionType', 'customer_id','transaction_id','signature_id','completed_at'],
        alias: ['?', '?', '?', '?', '?', '?','?','?','?','?'],
        tableName: 'transaction',
        values: [
            payload.razorpay_order_id,payload.amount, payload.user_id,payload.operator, status,'dth_recharge',payload.customerId, payload.razorpay_payment_id, payload.razorpay_signature, new Date()
        ],
    };

    try {
        return await insertCommonApiCall(orderData)
    } catch (error) {
        console.error("Failed to insert order:", error);
    }
}


export const actionToInsertLPGOrderDetailsApiCall = async(payload, status) => {
    const orderData = {
        column: ['order_id', 'amount', 'user_id', 'provider', 'payment_status','booking_type', 'consumer_number','transaction_id','signature_id','created_at','mobile_number', 'address','preferred_date','time_slot'],
        alias: ['?', '?', '?', '?', '?', '?','?','?','?','?','?','?','?','?'],
        tableName: 'lpg_bookings_transaction',
        values: [
            payload.razorpay_order_id,payload.amount, payload.user_id,payload.provider, status, payload.bookingType,payload.consumerNumber, payload.razorpay_payment_id, payload.razorpay_signature, new Date(), payload.mobile,payload.address, payload.preferredDate, payload.timeSlot
        ],
    };

    try {
        return await insertCommonApiCall(orderData)
    } catch (error) {
        console.error("Failed to insert order:", error);
    }
}

export const actionToInsertLicPaymentTransactionApi = async(payload, status) =>{
    const orderData = {
        column: ['order_id', 'amount', 'user_id', 'policy_number', 'status','transactionType','transaction_id','signature_id','completed_at',
            'email_id','dob'],
        alias: ['?', '?', '?', '?', '?', '?','?','?','?','?','?'],
        tableName: 'transaction',
        values: [
            payload.razorpay_order_id,payload.amount, payload.user_id,payload.policyNumber, status,'lic_policy', payload.razorpay_payment_id,
            payload.razorpay_signature, new Date(), payload.email,payload.dob
        ],
    };

    try {
        return await insertCommonApiCall(orderData)
    } catch (error) {
        console.error("Failed to insert order:", error);
    }
}

export const actionToGetLpgBookingTransactionDetailApiCall = async(user_id) => {
    return new Promise(function(resolve, reject) {
        const query = actionToGetLpgBookingTransactionDetailQuery();
        pool.query(query,[user_id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}
export const actionToGetTransactionHistoryApiCall = async(user_id, type) => {
    return new Promise(function(resolve, reject) {
        const query = actionToGetTransactionHistoryRequestQuery();
        pool.query(query,[user_id, type], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}