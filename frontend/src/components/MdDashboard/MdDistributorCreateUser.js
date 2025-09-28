import React from 'react';
import {useHistory} from "react-router";

export default function MoneyTransferPartPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return(
            <div className="ShowTrans moneytramsferservice mt-3">
                <div className={"header_with_back_button"}>
                    <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                    <div className={"row justify-content-center"}>
                        <div className={"col-12"}>
                            <div className="row">
                                <div className="col-xl-12 col-12 left-content">
                                    <h3 className="text-center content-title mt-2"> Create User </h3>
                                </div>
                            </div>
                            <div className="row main-retailer-report ShowTrans">
                                <div className="col-12">
                                    <form>
                                        <div className="form-row m-auto">
                                            <div className="form-group col-4">
                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                    <option>User Type</option>
                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-4">
                                                <input type="text" placeholder="Name" className="form-control form-control-md"/>
                                            </div>

                                            <div className="form-group col-4">
                                                <input type="text" placeholder="Outlet Name" className="form-control form-control-md"/>
                                            </div>
                                        </div>

                                        <div className="form-row mt-5 m-auto">
                                            <div className="form-group col-4">
                                                <input type="text" placeholder="Mobile No." className="form-control form-control-md"/>
                                            </div>

                                            <div className="form-group col-4">
                                                <input type="text" placeholder="Email id" className="form-control form-control-md"/>
                                            </div>

                                            <div className="form-group col-4">
                                                <input type="text" placeholder="PAN" className="form-control form-control-md"/>
                                            </div>
                                        </div>

                                        <div className="form-row mt-5 m-auto">
                                            <div className="form-group col-4">
                                                <input type="text" placeholder="Aadhar Number" className="form-control form-control-md"/>
                                            </div>



                                            <div className="form-group col-4">
                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                    <option>GST Type</option>
                                                    <option value="1">UnRegistered</option>
                                                    <option value="2">Registered</option>

                                                </select>
                                            </div>

                                            <div className="form-group col-4">
                                                <input type="text" placeholder="GSTIN" className="form-control form-control-md"/>
                                            </div>
                                        </div>

                                        <h3 className="mb-3">Bank Information</h3>

                                        <div className="form-row mt-5 m-auto">
                                            <div className="form-group col-6">
                                                <input type="text" placeholder="Bank Account Number" className="form-control form-control-md"/>
                                            </div>

                                            <div className="form-group col-6">
                                                <input type="text" placeholder="Bank IFSC Code" className="form-control form-control-md"/>
                                            </div>
                                        </div>
                                        <div className="form-row mt-5 m-auto">
                                            <div className="form-group col-6">
                                                <input type="text" placeholder="Bank Name*" className="form-control form-control-md"/>
                                            </div>

                                            <div className="form-group col-6">
                                                <input type="text" placeholder="Account Type*" className="form-control form-control-md"/>
                                            </div>
                                        </div>
                                        <div className="form-row mt-5 m-auto">
                                            <div className="form-group col-3">
                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                    <button type="button" className="btn btn-width btn-success mr-2">Save Changes </button>
                                                    <button type="button" onClick={goBack} className="btn btn-width btn-secondary"> Close</button>

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