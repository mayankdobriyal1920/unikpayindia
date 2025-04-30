import React from 'react';
import {useHistory} from "react-router";

export default function PPIWalletPartPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div className="ShowTrans moneytramsferservice">
            <div className={"header_with_back_button"}>
                <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                <div className={"row justify-content-center"}>
                    <div className={"col-8"}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 className="text-center"> PPI Wallet </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="retailer-home-balance">
                                    <div className="card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#navpills-1" className="nav-link active"
                                                   data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">Mobile
                                                    Number</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab"
                                                   tabIndex="-1">Bank Account Number</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content">
                                            <div id="navpills-1" className="tab-pane active show" role="tabpanel">
                                                <div className="row ">
                                                    <div className="col-md-12 text-center">
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col-md-6 pt-3 pb-3 m-auto">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Mobile Number"/>
                                                                    <button type="button" className="btn btn-secondary mt-3">Search</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>


                                                </div>
                                            </div>
                                            <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <div className="row moneytramsferservice">
                                                    <div className="col-md-12 text-center">
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col-md-6 pt-3 pb-3 m-auto">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Account Number"/>
                                                                    <button type="button" className="btn btn-secondary mt-3">Search</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}