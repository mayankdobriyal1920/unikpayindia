import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL} from "../../redux/CommonConstants";

export default function PaymentTransactionSuccessModal({ setShowPaymentSuccessModal, paymentSuccessData }) {
    const paymentTransactionStatusModal = useSelector(state => state.paymentTransactionStatusModal);
    const dispatch = useDispatch();


    return (
        paymentTransactionStatusModal.isOpen && (
            <div className="payment-modal-overlay">
                <div className="payment-modal-content">
                    <h3 className="payment-modal-title">{paymentTransactionStatusModal.transaction?.message}</h3>
                    <div><strong>Amount:</strong> ₹{paymentTransactionStatusModal.transaction?.amount}</div>
                    <div><strong>Transaction ID:</strong> {paymentTransactionStatusModal.transaction?.transactionId}</div>
                    <div><strong>Order ID:</strong> {paymentTransactionStatusModal.transaction?.orderId}</div>
                    <div><strong>Date & Time:</strong> {paymentTransactionStatusModal.transaction?.date}</div>
                    <div className="payment-modal-footer">
                        <button className="payment-close-btn" onClick={() => dispatch({type:OPEN_CLOSE_PAYMENT_TRANSACTION_MODAL,payload:{isOpen:false, transaction:null}})}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )

    );
}
