import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";

export default function ReportsPage(){
    return(
        <IonPage className="UnikPayIndia">
            <IonHeader>
                <div className="app-header">
                    <div className="main-header-container container-fluid">
                        <div className="header-content-left">
                            <div className="header-element">
                                {/* Start::header-link*/}
                                <a aria-label="Hide Sidebar"
                                   className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                                   data-bs-toggle="sidebar" href="#">
                                    <div className="hamburger">
                                        <span className="line"></span><span className="line"></span><span
                                        className="line"></span>
                                    </div>
                                </a>

                            </div>
                            {/*//  End::header-link*/}
                            <div className="d-inline-flex text-center ml-3 MainHeader-report ">
                                <div className="Opening-Balance">
                                    <h6 className="mb-0 blue-color">Opening Balance</h6>
                                    <h5 className="mt-0 red-color">₹ 14,5555.00</h5>
                                </div>
                                <div className="Opening-Balance ml-4">
                                    <h6 className="mb-0 blue-color">Available Balance</h6>
                                    <h5 className="mt-0 red-color">₹ 14,5555.00</h5>
                                </div>
                            </div>
                            <div className="main-header-center ms-3 my-auto d-none d-xl-block">
                                <input type="search" className="form-control" placeholder="Search..."/>
                                <button className="search-btn btn mr-0">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                        <div className="header-content-right ">
                            <div className="navbar-nav"></div>
                            <div className="nav-item dropdown notification_dropdown">
                                <a className="nav-link dropdown-toggle upi-toggle header-link" href="#"
                                   role="button" data-bs-toggle="dropdown">
                                    <i className="fa-regular fa-bell navbar-link-icon"></i>
                                    <span className="pulse"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right main-header-dropdown">
                                    <div className="p-3 menu-header-content rounded-top">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="mb-0 fs-17 text-fixed-white fw-semibold">7
                                                Notifications</p>
                                            <span className="badge bg-warning rounded-pill" id="notifiation-data">Mark All Aead</span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li className="dropdown-item p-3">
                                            <div className="d-flex align-items-start">
                                                <div className="pr-2"><span
                                                    className="avatar avatar-md bg-success-transparent avatar-rounded">
                                                                <i className="fa-solid fa-circle-exclamation text-success"></i></span>
                                                </div>
                                                <div
                                                    className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0 fs-14 fw-semibold notification-r">
                                                            <a href="#">New Order Received</a>
                                                        </p>
                                                        <span
                                                            className="text-muted fw-normal fs-12 header-notification-text">1 hour ago</span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="min-w-fit-content text-muted me-1">
                                                            <i className="fa-solid fa-angle-right fs-13 "></i>

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="p-2 empty-header-item border-top bg-primary-transparent">
                                        <div className="d-grid text-center">
                                            <a href="#" className="text-primary">VIEW ALL</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="nav-item dropdown header-profile header-element dropdown-menu-arrow">
                                <a className="nav-link" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="d-flex align-items-center">
                                        <div className="me-sm-2 mr-2 me-0">
                                            <img src={usericon} width="20" alt=""/>
                                        </div>
                                        <div className="d-sm-block d-none userprofile">
                                            <p className=" mb-0">Elizabeth Zane</p>
                                            <span className="op-7 fw-normal d-block fs-11 lh-1">Retailer</span>
                                        </div>
                                    </div>


                                </a>


                                <div className="dropdown-menu dropdown-menu-right pt-0 ">
                                    <div className="menu-header-content text-center rounded-top p-3">
                                        <div className="avatar avatar-xl rounded-circle">
                                            <img src={usericon} alt=""/>
                                        </div>
                                        <h6 className="drop-user mt-0 mb-0">Elizabeth Jane</h6>
                                        <span className="fs-13 text-fixed-white">Premium Member</span>

                                    </div>
                                    <a href="#" className="dropdown-item ai-icon">
                                        <i className="fa fa-user me-1"></i> My Profile
                                    </a>
                                    <a className="dropdown-item" href="#"><i
                                        className="fa fa-clock me-1"></i> Activity Logs
                                    </a>
                                    <a className="dropdown-item" href="#"><i
                                        className="fa fa-sliders-h me-1"></i> Account Settings
                                    </a>
                                    <a className="dropdown-item" href="#"><i
                                        className="fa fa-sliders-h me-1"></i>  Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonHeader>

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
                                                    <div className="col-xl-12">
                                                        <div className="d-flex ">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>                                                    </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>                                                    </div>

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
                                                                                <button className="dropdown-item" type="button">Money Transfer</button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Utility/Recharge
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">AEPS/MATM
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Credit Card
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>
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
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <button type="button" className="btn btn-success">Search</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill ">
                                                                <div className="dmt-trasno">
                                                                    <button type="button" className="btn btn-primary">Export</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Total Request</p>
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
                                                <div className="row">
                                                    <div className="col-md-3 text-center">
                                                        <h6 className="green-color">Fund Request</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h6 className="green-color">Money Credit</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h6 className="green-color">Money Debit</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h6 className="green-color">Quick Collect</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h6 className="green-color">Quick Paid</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="navpills-3" className="tab-pane" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="d-flex ">
                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>                                                    </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>                                                    </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-secondary businessSum-Cat dropdown-toggle"
                                                                                type="button"
                                                                                id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Category
                                                                        </button>
                                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Money Transfer</button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Utility/Recharge
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">AEPS/MATM
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Credit Card
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <button type="button" className="btn btn-success">Search</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill">
                                                                <div className="dmt-trasno">
                                                                    <button type="button" className="btn btn-primary">Export</button>
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
            </IonContent>
        </IonPage>
    )
}