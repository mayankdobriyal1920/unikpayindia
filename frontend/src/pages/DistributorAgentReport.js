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
                                                <a href="#DMT-report" className="nav-link active" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">DMT Report</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#recharge-utility" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Recharge/Utility</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#credit-card" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Credit Card</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#qr-code" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">QR Code</a>
                                            </li>

                                            <li className="nav-item" role="presentation">
                                                <a href="#AEPS-tr" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">AEPS Transaction</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#AEPS-st" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">AEPS Statement</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#account-st" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Account Statement</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="DMT-report" className="tab-pane active show bsstdmt" role="tabpanel">
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
                                                </div>
                                            </div>
                                            <div id="recharge-utility" className="tab-pane" role="tabpanel">
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
                                            <div id="credit-card" className="tab-pane" role="tabpanel">
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
                                                                            <th scope="col" className="text-end">Card No.</th>
                                                                            <th scope="col" className="text-end">Customer Details</th>
                                                                            <th scope="col" className="text-end"> Product </th>
                                                                            <th scope="col" className="text-end"> Card Type </th>
                                                                            <th scope="col" className="text-end">Amount</th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">RT Comm</th>
                                                                            <th scope="col" className="text-end">DL Comm</th>
                                                                            <th scope="col" className="text-end">Operator ID</th>
                                                                            <th scope="col" className="text-end">Status</th>
                                                                            <th scope="col" className="text-end">Created Date</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">8545844379</td>
                                                                            <td className="text-end">8545844379
                                                                                8860573786
                                                                                Delhi & NCR</td>
                                                                            <td className="text-end">Prepaid</td>
                                                                            <td className="text-end">Prepaid-Airtel</td>
                                                                            <td className="text-end">199.00</td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">0.00 </td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">160396495</td>
                                                                            <td className="text-end">Success</td>
                                                                            <td className="text-end">20/09/2025 12:07:36 PM</td>


                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="qr-code" className="tab-pane" role="tabpanel">
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

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-2">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

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
                                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>



                                                        </div>

                                                    </form>
                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S.R.</th>
                                                                            <th scope="col" className="text-end">Transaction#</th>
                                                                            <th scope="col" className="text-end">Date</th>
                                                                            <th scope="col" className="text-end">Type</th>
                                                                            <th scope="col" className="text-end"> Number </th>
                                                                            <th scope="col" className="text-end"> Ref Id </th>
                                                                            <th scope="col" className="text-end">Amount</th>
                                                                            <th scope="col" className="text-end">UTR</th>
                                                                            <th scope="col" className="text-end">Updated Date</th>

                                                                            <th scope="col" className="text-end">Status</th>
                                                                            <th scope="col" className="text-end">Remark</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">08-08-2025 06:49 PM</td>
                                                                            <td className="text-end">QR6</td>
                                                                            <td className="text-end">6204195516</td>
                                                                            <td className="text-end">982672763318</td>
                                                                            <td className="text-end">199.00</td>
                                                                            <td className="text-end">982672763318</td>
                                                                            <td className="text-end"> </td>

                                                                            <td className="text-end">Success</td>
                                                                            <td className="text-end"></td>


                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                </div>
                                            </div>

                                            <div id="AEPS-tr" className="tab-pane  bsstdmt" role="tabpanel">
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

                                                            <div className="form-group col-2">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Type of transaction</option>
                                                                    <option value="1">Transaction Number</option>
                                                                    <option value="2">Account Number</option>
                                                                    <option value="3">Phone Number</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Enter Txn" className="form-control form-control-md"/>
                                                            </div>
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



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">


                                                            <div className="form-group col-4">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-2">
                                                                <div className="dmt-trasno btn-group  d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>

                                                                </div>
                                                            </div>
                                                        </div>


                                                    </form>

                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S#</th>
                                                                            <th scope="col" className="text-end">Txn#</th>
                                                                            <th scope="col" className="text-end">Txn Date</th>
                                                                            <th scope="col" className="text-end">Customer No.</th>
                                                                            <th scope="col" className="text-end"> Aaddhar* </th>
                                                                            <th scope="col" className="text-end"> Bank </th>
                                                                            <th scope="col" className="text-end">Type</th>
                                                                            <th scope="col" className="text-end"> Transacation Amount </th>
                                                                            <th scope="col" className="text-end">RRN</th>

                                                                            <th scope="col" className="text-end">Status</th>
                                                                            <th scope="col" className="text-end">Message</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">8545844379</td>
                                                                            <td className="text-end">8545844379
                                                                                8860573786
                                                                                Delhi & NCR</td>
                                                                            <td className="text-end">Prepaid</td>
                                                                            <td className="text-end">Prepaid-Airtel</td>
                                                                            <td className="text-end">199.00</td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">0.00 </td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">160396495</td>



                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                </div>
                                            </div>


                                            <div id="AEPS-st" className="tab-pane" role="tabpanel">
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

                                                            <div className="form-group col-2">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Type of transaction</option>
                                                                    <option value="1">Transaction Number</option>
                                                                    <option value="2">Account Number</option>
                                                                    <option value="3">Phone Number</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Enter Txn" className="form-control form-control-md"/>
                                                            </div>
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



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">


                                                            <div className="form-group col-4">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-2">
                                                                <div className="dmt-trasno btn-group  d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>

                                                                </div>
                                                            </div>
                                                        </div>


                                                    </form>

                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S#</th>
                                                                            <th scope="col" className="text-end">Txn#</th>
                                                                            <th scope="col" className="text-end">Txn Date</th>
                                                                            <th scope="col" className="text-end">Customer No.</th>
                                                                            <th scope="col" className="text-end"> Aaddhar* </th>
                                                                            <th scope="col" className="text-end"> Bank </th>
                                                                            <th scope="col" className="text-end">Type</th>
                                                                            <th scope="col" className="text-end"> Transacation Amount </th>
                                                                            <th scope="col" className="text-end">Opening Balance</th>
                                                                            <th scope="col" className="text-end">Closing Balance</th>
                                                                            <th scope="col" className="text-end">RRN</th>
                                                                            <th scope="col" className="text-end">Status</th>

                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">19092521373358 </td>
                                                                            <td className="text-end">8545844379</td>
                                                                            <td className="text-end">8545844379
                                                                                8860573786
                                                                                Delhi & NCR</td>
                                                                            <td className="text-end">Prepaid</td>
                                                                            <td className="text-end">Prepaid-Airtel</td>
                                                                            <td className="text-end">199.00</td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">0.00 </td>
                                                                            <td className="text-end">7.43</td>
                                                                            <td className="text-end">160396495</td>
                                                                            <td className="text-end">Success</td>



                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                </div>
                                            </div>

                                            <div id="account-st" className="tab-pane" role="tabpanel">
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


                                                            <div className="form-group col-4">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-4">
                                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </form>
                                                    <div className="row m-auto">
                                                        {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Credit Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Debit Amount</h6>
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
                                                                <h6 className="white-color">TDS</h6>
                                                            </div>

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
                                                                            <th scope="col" className="text-end">TXN Date#</th>
                                                                            <th scope="col" className="text-end">Description </th>
                                                                            <th scope="col" className="text-end">Amount(CR) </th>
                                                                            <th scope="col" className="text-end"> Amount(DR) </th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">Commission</th>
                                                                            <th scope="col" className="text-end">TDS</th>
                                                                            <th scope="col" className="text-end">DI Comm</th>
                                                                            <th scope="col" className="text-end">Balance</th>
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


                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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