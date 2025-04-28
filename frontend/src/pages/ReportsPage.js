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
                                <h3 className="content-title  mt-2">Transaction</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Transaction</p>
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
                                                   aria-expanded="false" aria-selected="true" role="tab">Money Transfer</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">AEPS Transfer</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-3" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Recharge/Utility</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-4" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">AEPS Transactions</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-5" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Aadhar Pay</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-6" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Credit Card</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="navpills-1" className="tab-pane active show bsstdmt" role="tabpanel">
                                                <div className="">
                                                    <h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>
                                                    <div className="col-xl-12 align-items-center justify-content-center">
                                                        <div className="d-flex ">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <select
                                                                                    className="form-control form-select form-select-md">
                                                                                    <option disabled="">-Status- </option>
                                                                                    <option>Success</option>
                                                                                    <option>InProgress</option>
                                                                                    <option>Initated</option>
                                                                                    <option>Failed</option>
                                                                                    <option>Refund Pending</option>
                                                                                    <option>Refunded</option>

                                                                                </select>

                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-secondary businessSum-Cat dropdown-toggle"
                                                                                type="button"
                                                                                id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Category
                                                                        </button>
                                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">IMPS/NEFT</button>
                                                                            </li>


                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>



                                                            <div className="flex-grow-1 mr-2">
                                                                <button type="button" className="btn btn-md w-50" style={{backgroundColor:"#43A047"}} >
                                                                    <i className="bi bi-search"></i> Search
                                                                </button>
                                                            </div>


                                                            <div className="flex-grow-1 mr-2">
                                                                <button type="button" className="btn btn-md text-white w-50" style={{backgroundColor:"#5a65fa"}}>
                                                                    <i className="bi bi-box-arrow-up"></i> Export
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Total Transactions</p>
                                                                                <input type="text" className="form-control"  placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Total Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charges Paid</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Commission Received</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Refund Pending</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Refunded Transactions</p>
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
                                                </div>
                                            </div>
                                            <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <div className="">
                                                    <div className="col-xl-12">
                                                        <div className="d-flex flex-wrap align-items-end gap-2">
                                                            {/* Transaction No Input */}
                                                            <div className="mr-2">
                                                                <input type="text" className="form-control form-control-md" placeholder="Transaction No" />
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
                                                            {/* IMPS/NEFT Dropdown */}
                                                            <div className="mr-2">
                                                                <select className="form-control form-select form-select-md">
                                                                    <option selected disabled>-IMPS/NEFT-</option>
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
                                                                <button type="button" className="btn btn-dark btn-md w-100" style={{minWidth:'50%', backgroundColor:"#764ba3"}} >
                                                                    <i className="bi bi-search"></i> Search
                                                                </button>
                                                            </div>

                                                            {/* Export Button */}
                                                            <div>
                                                                <button type="button" className="btn btn-info btn-md text-white w-100" style={{ minWidth: '50%',backgroundColor:"#5a65fa" }}>
                                                                    <i className="bi bi-box-arrow-up"></i> Export
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 column-gap-0">
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2 bg-purple ">
                                                                    <h5 className="white-color">0</h5>
                                                                    <h6 className="white-color">Total Transcation</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2 bgred-color">
                                                                    <h5>₹ 0</h5>
                                                                    <h6>Total Amount</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2 bg-purple" >
                                                                    <h5 className="white-color">₹ 0</h5>
                                                                    <h6 className="white-color"> Charges Paid</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#fc885c"}}>
                                                                    <h5>₹ 0</h5>
                                                                    <h6 className=''>Commission Received</h6>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2 " style={{backgroundColor: "#1a227d"}}>
                                                                    <h5>0</h5>
                                                                    <h6>Refund Pending</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#8b5cf6"}}>
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



                                            <div id="navpills-3" className="tab-pane" role="tabpanel">
                                                <div className="">
                                                    <div className="col-xl-12">
                                                        <div className="d-flex flex-wrap align-items-end gap-2">
                                                            {/* Transaction No Input */}
                                                            <div className="mr-2">
                                                                <input type="text" className="form-control form-control-md" placeholder="Transaction No" />
                                                            </div>

                                                            {/* Status Dropdown */}
                                                            <div className="mr-2">
                                                                <select className="form-control form-select form-select-md">
                                                                    <option selected disabled>-Status-</option>
                                                                    <option>Success</option>
                                                                    <option>Pending</option>
                                                                    <option>Failed</option>
                                                                </select>
                                                            </div>

                                                            {/* Type Dropdown */}
                                                            <div className="mr-2">
                                                                <select className="form-control form-select form-select-md">
                                                                    <option selected disabled>-Type-</option>
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
                                                                <button type="button" className="btn btn-dark btn-md w-100"  style={{minWidth:'50%', backgroundColor:"#43A047"}} >
                                                                    <i className="bi bi-search"></i> Search
                                                                </button>
                                                            </div>

                                                            {/* Export Button */}
                                                            <div>
                                                                <button type="button" className="btn btn-info btn-md text-white w-100" style={{ minWidth: '50%',backgroundColor:"#5a65fa" }}>
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
                                                                <div className="border rounded p-2 " style={{backgroundColor: "#8b5cf6"}}>
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

                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2 " style={{backgroundColor: "#1a227d"}}>
                                                                    <h5>0</h5>
                                                                    <h6>Refund Pending</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-2">
                                                                <div className="border rounded p-2" style={{backgroundColor: "#8b5cf6"}}>
                                                                    <h5>0</h5>
                                                                    <h6 className='' >Refunded Transaction</h6>
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