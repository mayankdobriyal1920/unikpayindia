import pool from "./connection.js";
import {
    actionToGetTransactionDetailsApiCallQuery,
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
        column: ['order_id', 'amount', 'user_id', 'end_user_phone', 'operator', 'circle','status'],
        alias: ['?', '?', '?', '?', '?', '?','?'],
        tableName: 'transaction',
        values: [
            data.id,
            data.amount / 100,
            user_id,
            notes.mobile,
            notes.operator,
            notes.circle,
            'pending',
        ],
    };

    try {
        const insertRes = await insertCommonApiCall(orderData);
        return insertRes
    } catch (error) {
        console.error("Failed to insert order:", error);
    }
};

