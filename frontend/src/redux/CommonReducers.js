import {
    USER_GET_OTP_REQUEST_FAIL,
    USER_GET_OTP_REQUEST_SUCCESS,
    USER_SESSION_REQUEST,
    USER_SESSION_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_GET_OTP_REQUEST,
    USER_SIGNUP_SIGNIN_ERROR,
    OPEN_CLOSE_SIDE_BAR_MENU,
    OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL,
    ALL_TRANSACTION_DETAIL_LIST,
    ALL_TRANSACTION_DETAIL_LIST_REQUEST,
    ALL_TRANSACTION_DETAIL_LIST_SUCCESS,
    LPG_BOOKING_TRANSACTION_HISTORY_REQUEST,
    LPG_BOOKING_TRANSACTION_HISTORY_SUCCESS,
    LIC_PAYMENT_TRANSACTION_DETAILS_REQUEST, LIC_PAYMENT_TRANSACTION_DETAILS_SUCCESS,
} from "./CommonConstants";

export const userAuthDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return { loading: false, userInfo: {}};
        default:
            return state;
    }
};

export const paymentTransactionDetailsListReducer = (state={}, action) =>{
    switch(action.type){
        case ALL_TRANSACTION_DETAIL_LIST_REQUEST:
            return {loading:true, transactionDetails:[]}
        case ALL_TRANSACTION_DETAIL_LIST_SUCCESS:
            return {loading:false, transactionDetails: action.payload}
        default:
            return state
    }
}

export const paymentTransactionStatusModalReducer = (state={}, action) =>{
    switch(action.type){
        case OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL:
            return action.payload;
        default:
            return state;
    }
}

export const userSessionReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SESSION_REQUEST:
            return { loading: true };
        case USER_SESSION_SUCCESS:
            return { loading: false, success: action.payload };
        default:
            return state;
    }
};


export const signupSigninFormErrorReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_SIGNIN_ERROR:
            return { error: action.payload.error,  message: action.payload.message};
        default:
            return state;
    }
};
export const userOtpReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_GET_OTP_REQUEST:
            return { loading: true };
        case USER_GET_OTP_REQUEST_SUCCESS:
            return { loading: false };
        case USER_GET_OTP_REQUEST_FAIL:
            return { loading: false };
        default:
            return state;
    }
};
export const openCloseSideBarMenuReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_CLOSE_SIDE_BAR_MENU:
            return action.payload;
        default:
            return state;
    }
};

export const lpgBookingTransactionHistoryReducer = (state= {}, action) => {
    switch(action.type) {
        case LPG_BOOKING_TRANSACTION_HISTORY_REQUEST:
            return {isLoading:true, lpgTransactionBooking:[]}
        case LPG_BOOKING_TRANSACTION_HISTORY_SUCCESS:
            return {isLoading:false, lpgTransactionBooking: action.payload}
        default:
            return state;
    }
}

export const licPaymentTransactionHistoryReducer = (state ={}, action) => {
    switch(action.type){
        case LIC_PAYMENT_TRANSACTION_DETAILS_REQUEST:
            return {isLoading:true, licTransactionHistory:[]}
        case LIC_PAYMENT_TRANSACTION_DETAILS_SUCCESS:
            return {isLoading:false, licTransactionHistory: action.payload};
        default:
            return state;
    }
}