import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function MasterAccountStatements(){
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
                                <h3 className="content-title  mt-2">Account Statements</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/Master Distributor /Account Statements</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-xl-12">
                                <div className="card retailer-home-balance">

                                    <div className="card-body card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#account-statements" className="nav-link active" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">Account Statements</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#credit-money" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Credit Money</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#withdraw-money" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Withdraw Money</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#upi-funds" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">UPI Funds History</a>
                                            </li>

                                            <li className="nav-item" role="presentation">
                                                <a href="#money-request" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Money Request</a>
                                            </li>


                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="account-statements" className="tab-pane active show bsstdmt" role="tabpanel">
                                                <div className="">

                                                    <form>


                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>



                                                            <div className="form-group col-3">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                            <div className="form-group col-3">
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
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Credit Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Debit Amount</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Charge</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">0</h5>
                                                                <h6 className="white-color">TDS Amount</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>0</h5>
                                                                <h6>Commission</h6>
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
                                                                            <th scope="col" className="text-end">Added Date</th>
                                                                            <th scope="col" className="text-end">Naration</th>
                                                                            <th scope="col" className="text-end">Amount(CR)</th>
                                                                            <th scope="col" className="text-end"> Amount(DR) </th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">Commission</th>
                                                                            <th scope="col" className="text-end">TDS</th>
                                                                            <th scope="col" className="text-end">Balance</th>

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
                                            <div id="credit-money" className="tab-pane" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-3">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Select</option>
                                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>



                                                            <div className="form-group col-3">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">



                                                            <div className="form-group col-4 mx-auto">
                                                                <div className="dmt-trasno btn-group d-flex " role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2 pt-2 pb-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </form>
                                                    <div className="row m-auto">
                                                        {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Credit Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Debit Amount</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Charge</h6>
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
                                                                            <th scope="col" className="text-end">Txn Date</th>
                                                                            <th scope="col" className="text-end">Txn No. </th>
                                                                            <th scope="col" className="text-end">Paid By </th>
                                                                            <th scope="col" className="text-end"> Received By </th>
                                                                            <th scope="col" className="text-end">Remarks</th>
                                                                            <th scope="col" className="text-end">Amount(CR)</th>
                                                                            <th scope="col" className="text-end">Amount(DR)</th>
                                                                            <th scope="col" className="text-end">Charge</th>
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
                                                                            <td className="text-end">0.15</td>


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
                                            <div id="withdraw-money" className="tab-pane" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <div className="dmt-trasno btn-group d-flex " role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2 pt-2 pb-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>



                                                        </div>



                                                    </form>
                                                    <div className="row m-auto">

                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Credit Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Debit Amount</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Charge</h6>
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
                                                                            <th scope="col" className="text-end">Txn Date</th>
                                                                            <th scope="col" className="text-end">Txn No. </th>
                                                                            <th scope="col" className="text-end">Paid By </th>
                                                                            <th scope="col" className="text-end"> Received By </th>
                                                                            <th scope="col" className="text-end">Remarks</th>
                                                                            <th scope="col" className="text-end">Amount(CR)</th>
                                                                            <th scope="col" className="text-end">Amount(DR)</th>
                                                                            <th scope="col" className="text-end">Charge</th>
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
                                                                            <td className="text-end">0.15</td>


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

                                            <div id="upi-funds" className="tab-pane" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-3">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Select</option>
                                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>



                                                            <div className="form-group col-3">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>



                                                        </div>

                                                        <div className="form-row mt-5 m-auto">



                                                            <div className="form-group col-4 mx-auto">
                                                                <div className="dmt-trasno btn-group d-flex " role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2 pt-2 pb-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </form>
                                                    <div className="row m-auto">
                                                        {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">1</h5>
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Quick Collect</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Quick Paid</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Charge</h6>
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
                                                                            <th scope="col" className="text-end">Txn Date</th>
                                                                            <th scope="col" className="text-end">Txn No. </th>
                                                                            <th scope="col" className="text-end">Quick Paid </th>
                                                                            <th scope="col" className="text-end"> Quick Collect </th>
                                                                            <th scope="col" className="text-end">Remarks</th>
                                                                            <th scope="col" className="text-end">Amount(CR)</th>
                                                                            <th scope="col" className="text-end">Amount(DR)</th>
                                                                            <th scope="col" className="text-end">Charge</th>
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
                                                                            <td className="text-end">0.15</td>


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

                                            <div id="money-request" className="tab-pane  bsstdmt" role="tabpanel">
                                                <div className="">

                                                    <form>


                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>



                                                            <div className="form-group col-3">
                                                                <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                                            </div>
                                                            <div className="form-group col-3">
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
                                                                <h6 className="white-color">Transcation</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>₹ 28,500.00</h5>
                                                                <h6>Credit Amount</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">158.75</h5>
                                                                <h6 className="white-color">Debit Amount</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>14.25</h5>
                                                                <h6>Charge</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bg-purple ">
                                                                <h5 className="white-color">0</h5>
                                                                <h6 className="white-color">TDS Amount</h6>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="border rounded p-2 bgred-color">
                                                                <h5>0</h5>
                                                                <h6>Commission</h6>
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
                                                                            <th scope="col" className="text-end">Txn Date</th>
                                                                            <th scope="col" className="text-end">Description</th>
                                                                            <th scope="col" className="text-end">Amount(CR)</th>
                                                                            <th scope="col" className="text-end"> Amount(DR) </th>
                                                                            <th scope="col" className="text-end">Charge</th>
                                                                            <th scope="col" className="text-end">Commission</th>
                                                                            <th scope="col" className="text-end">TDS</th>
                                                                            <th scope="col" className="text-end">Balance</th>

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