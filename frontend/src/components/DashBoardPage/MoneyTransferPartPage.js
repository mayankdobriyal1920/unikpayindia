import React from 'react';
import {useHistory} from "react-router";

export default function MoneyTransferPartPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div className="ShowTrans">
            <div className={"header_with_back_button"}>
                <div className={"row"}>
                    <div onClick={goBack} className={"col-2"}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className={"col"}>
                        <div className="ShowTrans">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="retailer-home-balance">
                                        <div className="card-tabs-new">
                                            <ul className="nav nav-pills light" role="tablist">
                                                <li className=" nav-item" role="presentation">
                                                    <a href="#navpills-1" className="nav-link active" data-bs-toggle="tab"
                                                       aria-expanded="false" aria-selected="true" role="tab">Mobile Number</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                       aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Bank Account Number</a>
                                                </li>

                                            </ul>
                                            <div className="tab-content">
                                                <div id="navpills-1" className="tab-pane active show" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-md-12 text-center">
                                                            <form>
                                                                <div className="form-row">
                                                                    <div className="col-md-8 m-auto">
                                                                        <input type="text" className="form-control" placeholder="Mobile Number"/>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-md-12 text-center">
                                                            <form>
                                                                <div className="form-row">
                                                                    <div className="col-md-8 m-auto">
                                                                        <input type="text" className="form-control" placeholder="Account Number"/>
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
        </div>
    )
}