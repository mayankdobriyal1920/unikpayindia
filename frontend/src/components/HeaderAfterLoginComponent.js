import usericon from "../theme/images/user-icon.jpg";
import {IonHeader} from "@ionic/react";
import React from "react";
import {actionToOpenCloseSideBarMenu} from "../redux/CommonAction";
import {useDispatch, useSelector} from "react-redux";

export default function HeaderAfterLoginComponent(){
    const dispatch = useDispatch();
    const {isOpen} = useSelector((state) => state.openCloseSideBarMenu);

    const callToOpenCloseSideBarMenu = (action)=>{
        dispatch(actionToOpenCloseSideBarMenu(action));
    }

    return (
        <IonHeader>
            <div className="app-header">
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">
                        <div className="header-element">
                            {/* Start::header-link*/}
                            <a aria-label="Hide Sidebar"
                               id={"login_icon_burger_in"}
                               className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                               data-bs-toggle="sidebar" onClick={()=>callToOpenCloseSideBarMenu(!isOpen)}>
                                <div className="hamburger">
                                    <span className="line"></span><span className="line"></span><span
                                    className="line"></span>
                                </div>
                            </a>
                        </div>
                        {/*//  End::header-link*/}
                        <div className="d-inline-flex text-center ml-3 MainHeader-report">
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
    )
}

