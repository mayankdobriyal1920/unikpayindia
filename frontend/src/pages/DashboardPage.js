import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import unikPayLogo from '../theme/images/UnikPayIndia-Logo.png';
import usericon from '../theme/images/user-icon.jpg';
import multiwallet from '../theme/images/retailer-icons/multi-wallet-icon.svg';
export default function DashboardPage(){
    return(
        <IonPage>
            <IonHeader>
                <div className="app-header">
                    <div className="nav-header upi-header-position">
                        <a href="#" className="upi-logo">
                            <img src={unikPayLogo} className="#"/>
                        </a>
                        <div className="nav-control">
                            <div className="hamburger">
                                <span className="line"></span><span className="line"></span><span
                                className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="header upi-header-position">
                        <div className="header-content">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse justify-content-between">
                                    <div className="header-left ">
                                        <div className="Opening-Balance mr-5">
                                            <p className="mb-1 mt-2 retailer_p">Opening Balance</p>
                                            <h4 className="sub-color mt-0">₹ 24,000</h4>
                                        </div>

                                        <div className="Opening-Balance">
                                            <p className="mb-1 mt-2 retailer_p">Available Balance</p>
                                            <h4 className="sub-color mt-0">₹ 24,000</h4>
                                        </div>
                                    </div>

                                    <ul className="navbar-nav header-right">
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a className="nav-link dropdown-toggle " href="#"
                                               role="button" data-bs-toggle="dropdown">
                                                <i className="fa-regular fa-bell navbar-link-icon"></i>
                                                <span className="pulse"></span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right main-header-dropdown">
                                                <div className="p-3 menu-header-content rounded-top">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="mb-0 fs-17 text-fixed-white fw-semibold">7
                                                            Notifications</p><span
                                                        className="badge bg-warning rounded-pill" id="notifiation-data">Mark All Aead</span>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="dropdown-item p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="pe-2"><span
                                                                className="avatar avatar-md bg-success-transparent avatar-rounded">
                                                                <i className="la la-shopping-basket text-success fs-21 fa-regular fa-square-pen"></i></span>
                                                            </div>
                                                            <div
                                                                className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                                <div><p className="mb-0 fs-14 fw-semibold"><a
                                                                    href="notifications.html">New Order Received</a></p>
                                                                    <span
                                                                        className="text-muted fw-normal fs-12 header-notification-text">1 hour ago</span>
                                                                </div>
                                                                <div><a href="#" className="min-w-fit-content text-muted me-1">
                                                                    <i className="las la-angle-right fs-13 fa-regular fa-arrow-right"></i></a></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <a className="all-notification" href="#">See all
                                                    notifications <i className="ti-arrow-right"></i></a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown header-profile dropdown-menu-arrow">
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
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/*<div className="main-header-container container-fluid">
                        <div className="header-content-left">
                            <div className="header-element">
                                <a aria-label="" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" href="#">
                                    <span></span>
                                </a>
                                <div className="main-header-center">
                                    <span>
                                        <p className="mb-1 mt-2 retailer_p">Opening Balance</p>
                                        <h4 className="sub-color">₹ 24,000</h4>
                                    </span>
                                </div>
                                <div className="main-header-center">
                                    <p className="mb-1 mt-2 retailer_p">Account Balance</p>
                                    <h4 className="sub-color">₹ 24,000</h4>
                                </div>
                            </div>
                        </div>
                        <div className="header-content-right">
                            <div className="header-element notifications-dropdown">
                                <a href="#" className="header-link dropdown-toggle"
                                   data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown"
                                   aria-expanded="false"> <i className="fe fe-bell header-link-icon"></i>
                                    <span className=" bg-danger rounded-pill  pulse pulse-danger"
                                    id="notification-icon-badge"></span>
                                </a>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </IonHeader>
            <IonContent fullscreen>
                <div className="upi-side-nav">
                    <div className="upi-side-nav-scroll mm-active">
                        <ul className="metismenu" id="menu">
                            <li className="nav-label first">Main Menu</li>
                            <li className="">
                                <a className="has-arrow" href="#" aria-expanded="false">
                                    <i className="fa-solid fa-house"></i>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                                <ul aria-expanded="false" className="mm-collapse">
                                    <li className="mm-active">
                                        <a href="index.html" className="mm-active">Dashboard 1</a>
                                    </li>
                                    <li><a href="index-2.html">Dashboard 2</a></li>
                                    <li><a href="index-3.html">Dashboard 3</a></li>
                                </ul>
                            </li>
                            <li><a className="ai-icon" href="event-management.html" aria-expanded="false">
                                <i className="la la-calendar"></i>
                                <span className="nav-text">Event Management</span>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="upi-content-body">
                    <div className="container-fluid">
                        <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0">
                            <h6 className="crypto mt-0">Live Updates</h6>
                            <p className="retailer_p pl-2">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                        </div>
                        <div className="d-md-flex d-block align-items-center justify-content-between my-3 page-header-breadcrumb">
                            <div className="left-content">
                                <h3 className="content-title mb-2">Welcome back,</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Dashboard </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row retailer-das ">
                                    <div className="col-2 text-center ">
                                        <a href="#">
                                            <div className="retailer-das-icon animate-bell">
                                                <img src={multiwallet} className=""/>
                                            </div>
                                            <p>Multi Wallet</p>
                                        </a>
                                    </div>
                                    <div className="col-2 text-center ">
                                        <a href="#">
                                            <div className="retailer-das-icon animate-bell">
                                                <img src={multiwallet} className=""/>
                                            </div>
                                            <p>Money Transfer</p>
                                        </a>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-2"></div>
                                    <div className="col-2"></div>
                                    <div className="col-2"></div>
                                </div>
                            </div>
                            <div className="col-lg-9"> </div>
                            </div>
                        </div>
                    </div>
            </IonContent>
        </IonPage>
    )
}