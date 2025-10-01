import React from 'react';
import {useHistory} from "react-router";

export default function DistAddFunds() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div className="ShowTrans moneytramsferservice mt-3">
            <div className={"header_with_back_button"}>
                <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                <div className={"row justify-content-center"}>
                    <div className={"col-12"}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 className="text-center"> New Request </h3>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-12">
                                <form>
                                    <div className="form-row m-auto">

                                        <div className="form-group col-6">
                                            <input type="text" placeholder="Enter Amount" className="form-control form-control-md"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                <option>Payment Mode</option>
                                                <option value="1">CDM </option>
                                                <option value="2">IMPS/UPI</option>
                                                <option value="1">NEFT/RTGS </option>
                                                <option value="2">Fund Transfer</option>
                                                <option value="2">Cheque</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row mt-5 m-auto">
                                        <div className="form-group col-6">
                                            <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                <option>Bank Account</option>

                                            </select>
                                        </div>

                                        <div className="form-group form-check col-6">
                                            <label className="form-check-label" htmlFor="check1">Upload Deposit Slip Photo</label>
                                            <input className="form-control" type="file" id="formFile"/>

                                        </div>


                                    </div>
                                    <div className="form-row m-auto">

                                        <div className="form-group col-6">
                                            <input type="text" placeholder="Deposit Date" className="form-control form-control-md"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <input type="text" placeholder="Remarks" className="form-control form-control-md"/>
                                        </div>
                                    </div>
                                    <div className="form-row mt-5 m-auto">
                                        <div className="form-group col-3 mx-auto+">
                                            <div className="dmt-trasno btn-group d-flex" role="group">
                                                <button type="button" className="btn btn-width btn-success mr-2">Next </button>
                                                <button type="button" onClick={goBack} className="btn btn-width btn-danger"> Back</button>

                                            </div>
                                        </div>

                                    </div>



                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}