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
                                <h3 className="content-title  mt-2">Manage Fund History</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Manage Fund History</p>
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
                                                   aria-expanded="false" aria-selected="true" role="tab">Credit History</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Debit History</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-3" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Wallet 2 Wallet</a>
                                            </li>





                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="navpills-1" className="tab-pane active show bsstdmt" role="tabpanel">
                                                <div className="">
                                                    {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                    <div className="col-xl-12 mt-2">
                                                        <div className="d-flex">
                                                            <form>
                                                                <div className="form-row">
                                                                    <div className="form-group col-md-3">
                                                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <input type="text" className="form-control form-control-md"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <div className="dmt-trasno d-flex">
                                                                            <button type="button" className="btn btn-success">Search  </button>
                                                                            <button type="button" className="btn btn-success">Export  </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>


                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Transactions </p>
                                                                                <input type="text" className="form-control"  placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Credit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Debit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charge</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
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
                                                    <div className="col-12 mt-3">
                                                        <div className="Recent-Trans retailer-addfund align-items-center">
                                                            <div className="table-responsive">
                                                                <table className="table border-dashed table-responsive-sm">
                                                                    <thead>
                                                                    <tr className="LightBlue-BgColor">
                                                                        <th scope="col">S#</th>
                                                                        <th scope="col" className="text-end">Txn Date</th>
                                                                        <th scope="col" className="text-end">Txn No.</th>
                                                                        <th scope="col" className="text-end">Paid By</th>
                                                                        <th scope="col" className="text-end">Received By</th>
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
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end"></td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end">Rs. 18564</td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end">Rs. 18564</td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>


                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <div className="">
                                                    {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                    <div className="col-xl-12 mt-2">
                                                        <div className="d-flex">
                                                            <form>
                                                                <div className="form-row">
                                                                    <div className="form-group col-md-3">
                                                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <input type="text" className="form-control form-control-md"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <div className="dmt-trasno d-flex">
                                                                            <button type="button" className="btn btn-success">Search  </button>
                                                                            <button type="button" className="btn btn-success">Export  </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>


                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Transactions </p>
                                                                                <input type="text" className="form-control"  placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Credit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Debit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charge</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
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
                                                    <div className="col-12 mt-3">
                                                        <div className="Recent-Trans retailer-addfund align-items-center">
                                                            <div className="table-responsive">
                                                                <table className="table border-dashed table-responsive-sm">
                                                                    <thead>
                                                                    <tr className="LightBlue-BgColor">
                                                                        <th scope="col">S#</th>
                                                                        <th scope="col" className="text-end">Txn Date</th>
                                                                        <th scope="col" className="text-end">Txn No.</th>
                                                                        <th scope="col" className="text-end">Paid By</th>
                                                                        <th scope="col" className="text-end">Received By</th>
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
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end"></td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end">Rs. 18564</td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end">Rs. 18564</td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>


                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div id="navpills-3" className="tab-pane" role="tabpanel">
                                                <div className="">
                                                    {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                    <div className="col-xl-12 mt-2">
                                                        <div className="d-flex">
                                                            <form>
                                                                <div className="form-row">
                                                                    <div className="form-group col-md-3">
                                                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <input type="text" className="form-control form-control-md"/>
                                                                    </div>

                                                                    <div className="form-group col-md-3">
                                                                        <div className="dmt-trasno d-flex">
                                                                            <button type="button" className="btn btn-success">Search  </button>
                                                                            <button type="button" className="btn btn-success">Export  </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>


                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Transactions </p>
                                                                                <input type="text" className="form-control"  placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Credit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Debit Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charge</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
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
                                                    <div className="col-12 mt-3">
                                                        <div className="Recent-Trans retailer-addfund align-items-center">
                                                            <div className="table-responsive">
                                                                <table className="table border-dashed table-responsive-sm">
                                                                    <thead>
                                                                    <tr className="LightBlue-BgColor">
                                                                        <th scope="col">S#</th>
                                                                        <th scope="col" className="text-end">Txn Date</th>
                                                                        <th scope="col" className="text-end">Txn No.</th>
                                                                        <th scope="col" className="text-end">Quick Paid</th>
                                                                        <th scope="col" className="text-end">Quick Collect</th>
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
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end"></td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end">Rs. 18564</td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24022025123842</td>
                                                                        <td className="text-end">24/02/2025</td>
                                                                        <td className="text-end">Cash</td>
                                                                        <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                                        <td className="text-end">Rs. 18564</td>
                                                                        <td className="text-end">1000</td>
                                                                        <td className="text-end">2224</td>
                                                                        <td className="text-end">24/02/2025 06:39 PM </td>
                                                                        <td className="text-end">24/02/2025 06:47 PM</td>


                                                                    </tr>


                                                                    </tbody>
                                                                </table>
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