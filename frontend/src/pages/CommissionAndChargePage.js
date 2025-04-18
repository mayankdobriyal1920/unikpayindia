import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";

export default function CommissionAndChargePage(){
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
                                <h3 className="content-title  mt-2">Commission & Charge</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Commission & Charge</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row g-2 align-items-end mb-3">
                                            <div className="col-md-3 ms-auto">
                                                <select className="form-control form-select form-select-md">
                                                    <option disabled="">-Type-</option>
                                                    <option>Aadhar Pay</option>
                                                    <option>AEPS</option>
                                                    <option>AEPS Payment</option>
                                                    <option>CMS</option>
                                                    <option>Credit Card</option>
                                                    <option>MATM</option>
                                                    <option>Money Transfer</option>
                                                    <option>MPOS</option>
                                                    <option>OTT</option>
                                                    <option>PART Bill Pay</option>
                                                    <option> Payment Gateway</option>
                                                    <option>Payout Transfer</option>
                                                    <option>Paytm Wallet</option>
                                                    <option>UPI Transfer</option>
                                                    <option>Utility</option>
                                                    <option>Wallet to Wallet</option>
                                                </select>
                                            </div>


                                        </div>

                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped">
                                                <thead className="table-primary text-center">
                                                <tr>
                                                    <th>S.R.</th>
                                                    <th>From Amount</th>
                                                    <th>To Amount</th>
                                                    <th>Charges</th>
                                                    <th>Commission</th>
                                                    <th>Adon Charge</th>

                                                </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                <tr>
                                                    <td>1</td>
                                                    <td>100</td>
                                                    <td>1001</td>
                                                    <td>Rs.8</td>
                                                    <td>Rs.0</td>
                                                    <td>Rs.0</td>

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
            </IonContent>
        </IonPage>
    )
}