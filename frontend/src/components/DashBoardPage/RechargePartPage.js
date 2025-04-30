import React from 'react';
import {useHistory} from "react-router";

export default function RechargePartPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div className="ShowTrans moneytramsferservice">
            <div className={"header_with_back_button"}>
                <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                <div className={"row justify-content-center"}>
                    <div className={"col-12"}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 className="text-center"> Recharge </h3>
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
                                                   aria-expanded="false" aria-selected="true" role="tab">Mobile Recharge</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab"
                                                   tabIndex="-1">DTH Recharge</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content">
                                            <div id="navpills-1" className="tab-pane active show" role="tabpanel">
                                                <div className="row ">
                                                    <div className="col-md-12 pl-3 ">
                                                        <form>
                                                            <div className="card ml-3 mr-3">
                                                                <div className="card-body">
                                                                    <h3>Mobile Recharge</h3>
                                                                </div>
                                                                <div className="form-row">

                                                                    <div className="col-md-6 pl-3 pr-3 m-auto">
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Mobile Number</label>
                                                                            <input type="text" className="form-control" id="inputAddress"  placeholder="Mobile Number"/>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Operator</label>
                                                                            <select className="custom-select" id="validationDefault04" required>
                                                                                <option selected disabled value="">Choose...</option>
                                                                                <option>...</option>
                                                                            </select>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Circle</label>
                                                                            <select className="custom-select" id="validationDefault04" required>
                                                                                <option selected disabled value="">Choose...</option>
                                                                                <option>...</option>
                                                                            </select>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Amount</label>
                                                                            <input type="text" className="form-control" id="inputAddress"  placeholder="Amount"/>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 pt-3 pb-3 m-auto">
                                                                    <div
                                                                        className="Recent-Trans retailer-addfund align-items-center">
                                                                        <div className="table-responsive">
                                                                            <table className="table border-dashed table-responsive-sm">
                                                                                <thead>
                                                                                <tr className="LightBlue-BgColor">
                                                                                    <th scope="col">S#</th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Txn Date
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Txn No.
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Operator
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Amount
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Statuss
                                                                                    </th>

                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr className="table-bordered ">
                                                                                    <th scope="row">1</th>
                                                                                    <td className="text-end">24/02/2025</td>
                                                                                    <td className="text-end">24022025123842</td>
                                                                                    <td className="text-end">Cash</td>
                                                                                    <td className="text-end">AXIS CASH:- 923020064179135
                                                                                    </td>
                                                                                    <td className="text-end"></td>

                                                                                </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                                                                    <button type="button"
                                                                            className="btn btn-secondary mt-3">Search
                                                                    </button>
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