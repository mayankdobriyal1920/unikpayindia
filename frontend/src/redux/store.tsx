import { createStore, compose, applyMiddleware,combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import {
    licPaymentTransactionHistoryReducer,
    lpgBookingTransactionHistoryReducer,
    openCloseSideBarMenuReducer, paymentTransactionDetailsListReducer, paymentTransactionStatusModalReducer,
    signupSigninFormErrorReducer,
    userAuthDetailReducer,
    userOtpReducer,
    userSessionReducer
} from "./CommonReducers";

const initialState = {
    userSession: {loading: true, status:0},
    userAuthDetail: {userInfo: null, loading:false},
    userOtpDetails: {loading: false},
    signupSigninFormError: {},
    openCloseSideBarMenu: {isOpen:false},
    paymentTransactionStatusModal:{isOpen:false, transaction:null},
    paymentTransactionDetailsList:{loading:false, transactionDetails:[]},
    lpgBookingTransactionHistory:{isLoading:false, lpgTransactionBooking:[]},
    licPaymentTransactionHistory:{isLoading: false, licTransactionHistory:[]}
}
export const rootReducer = combineReducers({
    userSession: userSessionReducer,
    openCloseSideBarMenu: openCloseSideBarMenuReducer,
    signupSigninFormError: signupSigninFormErrorReducer,
    userAuthDetail: userAuthDetailReducer,
    userOtpDetails: userOtpReducer,
    paymentTransactionStatusModal:paymentTransactionStatusModalReducer,
    paymentTransactionDetailsList:paymentTransactionDetailsListReducer,
    lpgBookingTransactionHistory:lpgBookingTransactionHistoryReducer,
    licPaymentTransactionHistory:licPaymentTransactionHistoryReducer,
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancer =  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof rootReducer>
export default store;
