import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function ReportsPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>

            <IonContent fullscreen>
                <LeftSideBarComponent/>

                <div className="upi-content-body">
                    <div className="container-fluid">
                        <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0 align-items-center">
                            <h6 className="crypto mt-0">Live Updates</h6>
                            <p className="retailer_p pl-2 mb-0">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                        </div>
                        <div className="d-md-flex d-block align-items-center justify-content-between my-3 page-header-breadcrumb">
                            <div className="left-content">
                                <h3 className="content-title  mt-2">Agent Report</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Agent Report</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-xl-12">
                                <div className="card retailer-home-balance">

                                    <div className="card-body card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#navpills-1" className="nav-link active" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">DMT Report</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Recharge/Utility</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-3" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Credit Card</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-4" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">QR Code</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-5" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Manage Fund</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-6" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">AEPS Transaction</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-6" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Account Statement</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="navpills-1" className="tab-pane active show bsstdmt" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-4">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Select</option>
                                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Type of transaction</option>
                                                                    <option value="1">Transaction Number</option>
                                                                    <option value="2">Account Number</option>
                                                                    <option value="3">Phone Number</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Transaction No" className="form-control form-control-md"/>
                                                            </div>



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-2">
                                                                <select
                                                                    className="form-control form-select form-select-md">
                                                                    <option>-Status-</option>
                                                                    <option>Success</option>
                                                                    <option>InProgress</option>
                                                                    <option>Initated</option>
                                                                    <option>Failed</option>
                                                                    <option>Refund Pending</option>
                                                                    <option>Refunded</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                        </div>


                                                    </form>
                                                    <div className="row m-auto">
                                                        {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Charge</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Commission</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">0</h5>
                                                                <h6 className="white-color">Refund Pending</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>0</h5>
                                                                <h6>Refunded</h6>
                                                            </div>

                                                        </div>
                                                        {/* <div className=" mt-2">
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col-3">
                                                                                <blockquote className="text-center">
                                                                                    <p className="mb-0 total-request">Transactions </p>
                                                                                    <h4>4</h4>
                                                                                </blockquote>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Credit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Debit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charge</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        Pagination


                                                    </div>*/}
                                                    </div>

                                                    <div className="row d-flex pagination_retailer mt-3 m-auto">
                                                        <div className="col-6 d-flex pt-2">
                                                            <p className="mr-2 pb-0">Show result:</p>
                                                            <select className="form-select"  aria-label="Default select example">
                                                                <option selected>1
                                                                </option>
                                                                <option value="1">2</option>
                                                                <option value="2">3</option>
                                                                <option value="3">4</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-6 text-end retailer-pagination">
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination float-right">
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#" aria-label="Previous">
                                                                            <span aria-hidden="true">&laquo;</span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#">1</a>
                                                                    </li>
                                                                    <li className="page-item"><a
                                                                        className="page-link" href="#">2</a>
                                                                    </li>
                                                                    <li className="page-item"><a
                                                                        className="page-link" href="#">3</a>
                                                                    </li>
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#"
                                                                           aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                            <span
                                                                                className="sr-only">Next</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>

                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S#</th>
                                                                            <th scope="col" className="text-end">Transaction#</th>
                                                                            <th scope="col" className="text-end">Created Date</th>
                                                                            <th scope="col" className="text-end">Sender</th>
                                                                            <th scope="col" className="text-end"> Beneficiary </th>
                                                                            <th scope="col" className="text-end">Amount</th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">Commision</th>
                                                                            <th scope="col" className="text-end">DL Comm</th>
                                                                            <th scope="col" className="text-end">UTR</th>
                                                                            <th scope="col" className="text-end">Status</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">19/09/2025 05:11:22 PM</td>
                                                                            <td className="text-end">Alam Singh 9211562672</td>
                                                                            <td className="text-end">ANURAG LUTHRA
                                                                                42220193215
                                                                                SBIN0000001
                                                                                IMPS</td>
                                                                            <td className="text-end">2,753.00</td>
                                                                            <td className="text-end">15.14</td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">0.00 </td>
                                                                            <td className="text-end">526217019495</td>
                                                                            <td className="text-end">Success</td>


                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-4">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Select</option>
                                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Type of transaction</option>
                                                                    <option value="1">Transaction Number</option>
                                                                    <option value="2">Account Number</option>
                                                                    <option value="3">Phone Number</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Transaction No" className="form-control form-control-md"/>
                                                            </div>



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-2">
                                                                <select
                                                                    className="form-control form-select form-select-md">
                                                                    <option>-Status-</option>
                                                                    <option>Success</option>
                                                                    <option>InProgress</option>
                                                                    <option>Initated</option>
                                                                    <option>Failed</option>
                                                                    <option>Refund Pending</option>
                                                                    <option>Refunded</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                        </div>


                                                    </form>
                                                    <div className="row m-auto">
                                                        {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Charge</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Commission</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">0</h5>
                                                                <h6 className="white-color">Refund Pending</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>0</h5>
                                                                <h6>Refunded</h6>
                                                            </div>

                                                        </div>
                                                        {/* <div className=" mt-2">
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col-3">
                                                                                <blockquote className="text-center">
                                                                                    <p className="mb-0 total-request">Transactions </p>
                                                                                    <h4>4</h4>
                                                                                </blockquote>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Credit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Debit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charge</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        Pagination


                                                    </div>*/}
                                                    </div>

                                                    <div className="row d-flex pagination_retailer mt-3 m-auto">
                                                        <div className="col-6 d-flex pt-2">
                                                            <p className="mr-2 pb-0">Show result:</p>
                                                            <select className="form-select"  aria-label="Default select example">
                                                                <option selected>1
                                                                </option>
                                                                <option value="1">2</option>
                                                                <option value="2">3</option>
                                                                <option value="3">4</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-6 text-end retailer-pagination">
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination float-right">
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#" aria-label="Previous">
                                                                            <span aria-hidden="true">&laquo;</span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#">1</a>
                                                                    </li>
                                                                    <li className="page-item"><a
                                                                        className="page-link" href="#">2</a>
                                                                    </li>
                                                                    <li className="page-item"><a
                                                                        className="page-link" href="#">3</a>
                                                                    </li>
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#"
                                                                           aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                            <span
                                                                                className="sr-only">Next</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>

                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S#</th>
                                                                            <th scope="col" className="text-end">Transaction#</th>
                                                                            <th scope="col" className="text-end">Customer No. </th>
                                                                            <th scope="col" className="text-end">Ref Mobile No. </th>
                                                                            <th scope="col" className="text-end"> Product </th>
                                                                            <th scope="col" className="text-end">Operator Name</th>
                                                                            <th scope="col" className="text-end">Amount</th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">Commission</th>
                                                                            <th scope="col" className="text-end">DL Comm</th>
                                                                            <th scope="col" className="text-end">Operator</th>
                                                                            <th scope="col" className="text-end">Created Date</th>
                                                                            <th scope="col" className="text-end">Status</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">6204195516</td>
                                                                            <td className="text-end"></td>
                                                                            <td className="text-end">Prepaid</td>
                                                                            <td className="text-end">Prepaid-Jio</td>
                                                                            <td className="text-end">299.00</td>
                                                                            <td className="text-end">0.00</td>
                                                                            <td className="text-end">1.35 </td>
                                                                            <td className="text-end">0.15</td>
                                                                            <td className="text-end">151223239</td>
                                                                            <td className="text-end">14/08/2025 02:23:31 PM</td>
                                                                            <td className="text-end">Success</td>

                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div id="navpills-3" className="tab-pane" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-4">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Select</option>
                                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Type of transaction</option>
                                                                    <option value="1">Transaction Number</option>
                                                                    <option value="2">Account Number</option>
                                                                    <option value="3">Phone Number</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Transaction No" className="form-control form-control-md"/>
                                                            </div>



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-2">
                                                                <select
                                                                    className="form-control form-select form-select-md">
                                                                    <option>-Status-</option>
                                                                    <option>Success</option>
                                                                    <option>InProgress</option>
                                                                    <option>Initated</option>
                                                                    <option>Failed</option>
                                                                    <option>Refund Pending</option>
                                                                    <option>Refunded</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                        </div>


                                                    </form>
                                                    <div className="row m-auto">
                                                        {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Charge</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Commission</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">0</h5>
                                                                <h6 className="white-color">Refund Pending</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>0</h5>
                                                                <h6>Refunded</h6>
                                                            </div>

                                                        </div>
                                                        {/* <div className=" mt-2">
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col-3">
                                                                                <blockquote className="text-center">
                                                                                    <p className="mb-0 total-request">Transactions </p>
                                                                                    <h4>4</h4>
                                                                                </blockquote>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Credit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Debit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charge</p>
                                                                                <input type="text" className="form-control" placeholder="0.00"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        Pagination


                                                    </div>*/}
                                                    </div>

                                                    <div className="row d-flex pagination_retailer mt-3 m-auto">
                                                        <div className="col-6 d-flex pt-2">
                                                            <p className="mr-2 pb-0">Show result:</p>
                                                            <select className="form-select"  aria-label="Default select example">
                                                                <option selected>1
                                                                </option>
                                                                <option value="1">2</option>
                                                                <option value="2">3</option>
                                                                <option value="3">4</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-6 text-end retailer-pagination">
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination float-right">
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#" aria-label="Previous">
                                                                            <span aria-hidden="true">&laquo;</span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#">1</a>
                                                                    </li>
                                                                    <li className="page-item"><a
                                                                        className="page-link" href="#">2</a>
                                                                    </li>
                                                                    <li className="page-item"><a
                                                                        className="page-link" href="#">3</a>
                                                                    </li>
                                                                    <li className="page-item">
                                                                        <a className="page-link" href="#"
                                                                           aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                            <span
                                                                                className="sr-only">Next</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>

                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S#</th>
                                                                            <th scope="col" className="text-end">Transaction#</th>
                                                                            <th scope="col" className="text-end">Created Date</th>
                                                                            <th scope="col" className="text-end">Sender</th>
                                                                            <th scope="col" className="text-end"> Beneficiary </th>
                                                                            <th scope="col" className="text-end">Amount</th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">Commision</th>
                                                                            <th scope="col" className="text-end">DL Comm</th>
                                                                            <th scope="col" className="text-end">UTR</th>
                                                                            <th scope="col" className="text-end">Status</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">19/09/2025 05:11:22 PM</td>
                                                                            <td className="text-end">Alam Singh 9211562672</td>
                                                                            <td className="text-end">ANURAG LUTHRA
                                                                                42220193215
                                                                                SBIN0000001
                                                                                IMPS</td>
                                                                            <td className="text-end">2,753.00</td>
                                                                            <td className="text-end">15.14</td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">0.00 </td>
                                                                            <td className="text-end">526217019495</td>
                                                                            <td className="text-end">Success</td>


                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="navpills-4" className="tab-pane" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="d-flex ">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <select
                                                                                    className="form-control form-select form-select-md">
                                                                                    <option disabled="">-Status-</option>
                                                                                    <option>Success</option>
                                                                                    <option>Pending</option>
                                                                                    <option>Failed</option>
                                                                                </select>
                                                                            </div>

                                                                            <div className="col">
                                                                                <select
                                                                                    className="form-control form-select form-select-md">
                                                                                    <option disabled="">-Type-</option>
                                                                                    <option>Money Transfer</option>
                                                                                    <option>Utility/Recharge</option>
                                                                                    <option>AEPS/MATM</option>
                                                                                    <option>Credit Card</option>
                                                                                </select>
                                                                            </div>

                                                                            <div className="col">
                                                                                <input type="date"
                                                                                       className="form-control form-control-md"
                                                                                       value="2025-04-14"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <button type="button" className="btn btn-dark btn-md w-100">
                                                                                    <i className="bi bi-search"></i> Search
                                                                                </button>
                                                                            </div>

                                                                            <div className="col">
                                                                                <button type="button" className="btn btn-dark btn-md w-100">
                                                                                    <i className="bi bi-search"></i> Export
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                                <div className="row mt-3 column-gap-0">
                                                    <div className="col-md-2 mb-2">
                                                        <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                            <h5>0</h5>
                                                            <h6>Total Transcation</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 mb-2">
                                                        <div className="border rounded p-2" style={{backgroundColor: "#1a227d"}}>
                                                            <h5>₹ 0</h5>
                                                            <h6>Total Amount</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 mb-2">
                                                        <div className="border rounded p-2" style={{backgroundColor: "#8b5cf6"}} >
                                                            <h5>₹ 0</h5>
                                                            <h6>Total Charges</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 mb-2">
                                                        <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                            <h5>₹  0</h5>
                                                            <h6>Total Commission</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 mb-2">
                                                        <div className="border rounded p-2" style={{backgroundColor: "#1a227d"}}>
                                                            <h5>0</h5>
                                                            <h6>APES</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 mb-2">
                                                        <div className="border rounded p-2 " style={{backgroundColor: "#8b5cf6"}}>
                                                            <h5>0</h5>
                                                            <h6>MATH</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 mb-2">
                                                        <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                            <h5>0</h5>
                                                            <h6>MPOS</h6>
                                                        </div>
                                                    </div>

                                                </div>


                                                {/*Pagination*/}
                                                <div className="row pagination_retailer mt-3">
                                                    <div className="col-6 d-flex pt-2">
                                                        <p className="mr-2 pb-0">Show result:</p>
                                                        <select className="form-select"
                                                                aria-label="Default select example">
                                                            <option selected>1
                                                            </option>
                                                            <option value="1">2</option>
                                                            <option value="2">3</option>
                                                            <option value="3">4</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-6 text-end retailer-pagination">
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination float-right">
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#" aria-label="Previous">
                                                                        <span aria-hidden="true">&laquo;</span>
                                                                        <span className="sr-only">Previous</span>
                                                                    </a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#">1</a>
                                                                </li>
                                                                <li className="page-item"><a
                                                                    className="page-link" href="#">2</a>
                                                                </li>
                                                                <li className="page-item"><a
                                                                    className="page-link" href="#">3</a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#"
                                                                       aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                        <span
                                                                            className="sr-only">Next</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>

                                                </div>
                                            </div>

                                            <div id="navpills-5" className="tab-pane  bsstdmt" role="tabpanel">
                                                <div className="">
                                                    <div className="col-xl-12">
                                                        <div className="d-flex flex-wrap align-items-center w-100 gap-2">
                                                            {/* Transaction No Input */}
                                                            <div className="flex-grow-1 mr-2">
                                                                <input type="text" className="form-control form-control-md w-100" placeholder="Transaction No" />
                                                            </div>

                                                            {/* Status Dropdown */}
                                                            <div className="flex-grow-1 mr-2">
                                                                <select className="form-control form-select form-select-md w-100">
                                                                    <option selected disabled>-Status-</option>
                                                                    <option>Success</option>
                                                                    <option>Pending</option>
                                                                    <option>Failed</option>
                                                                </select>
                                                            </div>

                                                            {/* From Date */}
                                                            <div className="flex-grow-1 mr-2">
                                                                <input type="date" className="form-control form-control-md w-100" defaultValue="2025-04-14" />
                                                            </div>

                                                            {/* To Date */}
                                                            <div className="flex-grow-1 mr-2">
                                                                <input type="date" className="form-control form-control-md w-100" defaultValue="2025-04-14" />
                                                            </div>

                                                            {/* Search Button */}
                                                            <div className="flex-grow-1 mr-2">
                                                                <button type="button" className="btn btn-dark btn-md w-50" style={{backgroundColor:"#43A047"}}>
                                                                    <i className="bi bi-search"></i> Search
                                                                </button>
                                                            </div>

                                                            {/* Export Button */}
                                                            <div className="flex-grow-1 mr-2">
                                                                <button type="button" className="btn btn-info btn-md text-white w-50" style={{backgroundColor:"#5a65fa"}}>
                                                                    <i className="bi bi-box-arrow-up"></i> Export
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-3 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                                    <h5>0</h5>
                                                                    <h6>Total Transcation</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#1a227d"}}>
                                                                    <h5>₹ 0</h5>
                                                                    <h6>Total Amount</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor:"#8b5cf6"}}>
                                                                    <h5>₹ 0</h5>
                                                                    <h6>Total Charges</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                                    <h5>₹  0</h5>
                                                                    <h6>Total Commission</h6>
                                                                </div>
                                                            </div>

                                                        </div>



                                                        {/*Pagination*/}
                                                        <div className="row pagination_retailer mt-3">
                                                            <div className="col-6 d-flex pt-2">
                                                                <p className="mr-2 pb-0">Show result:</p>
                                                                <select className="form-select"
                                                                        aria-label="Default select example">
                                                                    <option selected>1
                                                                    </option>
                                                                    <option value="1">2</option>
                                                                    <option value="2">3</option>
                                                                    <option value="3">4</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-6 text-end retailer-pagination">
                                                                <nav aria-label="Page navigation example">
                                                                    <ul className="pagination float-right">
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                                <span aria-hidden="true">&laquo;</span>
                                                                                <span className="sr-only">Previous</span>
                                                                            </a>
                                                                        </li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#">1</a>
                                                                        </li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">2</a>
                                                                        </li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">3</a>
                                                                        </li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                                <span
                                                                                    className="sr-only">Next</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div id="navpills-6" className="tab-pane" role="tabpanel">
                                                <div className="">
                                                    <div className="col-xl-12">
                                                        <div className="d-flex flex-wrap align-items-end gap-2">
                                                            {/* Transaction No Input */}
                                                            <div className="mr-2">
                                                                <input type="text" className="form-control form-control-md" placeholder="Transaction No" />
                                                            </div>

                                                            {/* Mobile Input */}
                                                            <div className="mr-2">
                                                                <input type="text" className="form-control form-control-md"
                                                                       placeholder="Mobile No" />
                                                            </div>

                                                            {/* Type Dropdown */}
                                                            <div className="mr-2">
                                                                <select className="form-control form-select form-select-md">
                                                                    <option selected disabled>-Status-</option>
                                                                    <option>Money Transfer</option>
                                                                    <option>Utility/Recharge</option>
                                                                    <option>AEPS/MATM</option>
                                                                    <option>Credit Card</option>
                                                                </select>
                                                            </div>

                                                            {/* From Date */}
                                                            <div className="mr-2">
                                                                <input type="date" className="form-control form-control-md" defaultValue="2025-04-14" />
                                                            </div>

                                                            {/* To Date */}
                                                            <div className="mr-2">
                                                                <input type="date" className="form-control form-control-md" defaultValue="2025-04-14" />
                                                            </div>

                                                            {/* Search Button */}
                                                            <div className="mr-2">
                                                                <button type="button" className="btn btn-dark btn-md w-100"  style={{minWidth:'50%' ,backgroundColor:"#43A047" }} >
                                                                    <i className="bi bi-search"></i> Search
                                                                </button>
                                                            </div>

                                                            {/* Export Button */}
                                                            <div>
                                                                <button type="button" className="btn btn-info btn-md text-white w-100 " style={{ minWidth: '50%', backgroundColor:"#5a65fa" }}>
                                                                    <i className="bi bi-box-arrow-up"></i> Export
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 column-gap-0">
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                                    <h5>0</h5>
                                                                    <h6>Total Transcation</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#1a227d"}}>
                                                                    <h5>₹ 0</h5>
                                                                    <h6>Total Amount</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor:"#8b5cf6"}} >
                                                                    <h5>₹ 0</h5>
                                                                    <h6> Charges Paid</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                                    <h5>₹ 0</h5>
                                                                    <h6 className=''>Commission Received</h6>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#1a227d"}}>
                                                                    <h5>0</h5>
                                                                    <h6>Refund Pending</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor:"#8b5cf6"}}>
                                                                    <h5>0</h5>
                                                                    <h6 className=''>Refunded Transaction</h6>
                                                                </div>
                                                            </div>

                                                        </div>


                                                        {/*Pagination*/}
                                                        <div className="row pagination_retailer mt-3">
                                                            <div className="col-6 d-flex pt-2">
                                                                <p className="mr-2 pb-0">Show result:</p>
                                                                <select className="form-select"
                                                                        aria-label="Default select example">
                                                                    <option selected>1
                                                                    </option>
                                                                    <option value="1">2</option>
                                                                    <option value="2">3</option>
                                                                    <option value="3">4</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-6 text-end retailer-pagination">
                                                                <nav aria-label="Page navigation example">
                                                                    <ul className="pagination float-right">
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                                <span aria-hidden="true">&laquo;</span>
                                                                                <span className="sr-only">Previous</span>
                                                                            </a>
                                                                        </li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#">1</a>
                                                                        </li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">2</a>
                                                                        </li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">3</a>
                                                                        </li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                                <span
                                                                                    className="sr-only">Next</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
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
            </IonContent>
        </IonPage>
    )
}