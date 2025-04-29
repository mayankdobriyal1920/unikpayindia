import React from 'react';

export default function AddNewRequestPartComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="bgred-color white-color pl-2 pt-2 pb-2">New Request</h3>
                    <form className="mt-3">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Amount</label>
                                <input type="text" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Payment Mode</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Cash/Stuck Amount</option>
                                    <option>CDM</option>
                                    <option>IMPS/UPI</option>
                                    <option>NEFT/RTGS</option>
                                    <option>Fund Transfer</option>
                                    <option>Cheque</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Bank Account</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Cash/Stuck Amount</option>
                                    <option>CDM</option>
                                    <option>IMPS/UPI</option>
                                    <option>NEFT/RTGS</option>
                                    <option>Fund Transfer</option>
                                    <option>Cheque</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Upload Deposit Slip Photo</label>
                                <input type="file" className="form-control" id="inputGroupFile01"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Deposit Date</label>
                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Remarks</label>
                                <input type="text" className="form-control" id="inputGroupFile01"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}