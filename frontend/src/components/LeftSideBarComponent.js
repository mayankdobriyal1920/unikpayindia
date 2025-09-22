import React, {useEffect, useRef} from 'react';
import {useHistory} from "react-router";
import siteLogo from "../theme/images/UnikPayIndia-Logo.png";
import {useDispatch, useSelector} from "react-redux";
import {actionToOpenCloseSideBarMenu} from "../redux/CommonAction";


export default function LeftSideBarComponent(){
    const { userInfo } = useSelector((state) => state.userAuthDetail);
    const history = useHistory();
    const {isOpen} = useSelector((state) => state.openCloseSideBarMenu);
    const menuRef = useRef(null);
    const dispatch = useDispatch();

    const callToOpenCloseSideBarMenu = ()=>{
        dispatch(actionToOpenCloseSideBarMenu(false));
    }

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target) &&
                !event.target.closest('#login_icon_burger_in')) {
                callToOpenCloseSideBarMenu();
            }
        };

        if(isOpen)
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    const goToPage = (page)=>{
        history.replace(page);
    }

    return (
       <div ref={menuRef} className={`upi-side-nav bg-color after_login_sidebar_panel ${isOpen ? 'login_after_sidebar_open' : ''}`}>
        <div className="main-sidebar-header">
            <a onClick={() => goToPage('/dashboard-home')} className="header-logo">
                <img src={siteLogo} alt="logo" className="desktop-logo"/>
            </a>
        </div>
        <div className="upi-side-nav-scroll">
            <div className="simplebar-wrapper">
                <ul className="metismenu" id="menu">
                    {/*<li className="nav-label first">Main Menu</li>*/}
                    {userInfo.role === 2 && (
                        <li className="">
                            <a className="has-arrow" onClick={() => goToPage('/dashboard-home')} aria-expanded="false">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Dashboard</span>
                            </a>
                        </li>
                    )}
                    {userInfo.role === 2 && (
                        <li className="">
                            <a className="has-arrow" onClick={() => goToPage('/md-business-summery')} aria-expanded="false">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Business Summary</span>
                            </a>
                        </li>
                    )}
                    {userInfo.role === 2 && (
                        <li className="">
                            <a className="has-arrow" onClick={() => goToPage('/distributor-details')} aria-expanded="false">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Distributor Details</span>
                            </a>
                        </li>
                    )}
                    {userInfo.role === 2 && (
                        <li className="">
                            <a className="has-arrow" onClick={() => goToPage('/master-retailer-list')} aria-expanded="false">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Retailer List</span>
                            </a>
                        </li>
                    )}
                    {userInfo.role === 2 && (
                        <li className="">
                            <a className="has-arrow">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Manage Funds</span>
                            </a>
                            <ul aria-expanded="false" className="mm-collapse">
                                <li className="mm-active">
                                    <a onClick={()=>goToPage('/master-manage-fund')} className="mm-active">Credit Money</a>
                                </li>
                                <li><a onClick={()=>goToPage('/master-managefund-withdraw')}>Withdraw Money</a></li>
                            </ul>
                        </li>
                    )}

                    {userInfo.role === 2 && (
                        <li className="">
                            <a className="has-arrow" onClick={() => goToPage('/master-money-request')} aria-expanded="false">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Money Request</span>
                            </a>
                        </li>
                    )}


                    {userInfo.role === 3 && (
                        <li className="">
                            <a className="has-arrow" onClick={() => goToPage('/dashboard-home')} aria-expanded="false">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Dashboard</span>
                            </a>
                        </li>
                    )}
                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/distributor-agent-detail')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Agent Details</span>
                            </a>
                           {/* <ul aria-expanded="false" className="mm-collapse">
                                <li className="mm-active">
                                    <a onClick={()=>goToPage('/dashboard-home')} className="mm-active">Users Registration</a>
                                </li>
                                <li><a onClick={()=>goToPage('/dashboard-home')}>Agent List</a></li>
                                <li><a onClick={()=>goToPage('/dashboard-home')}>Request ON/OFF</a></li>
                            </ul>*/}
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/dashboard-manage-funds')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Manage Fund</span>
                            </a>
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/dashboard-money-request')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Money Request</span>
                            </a>
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/dashboard-statements')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Statements</span>
                            </a>
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/dashboard-business-summery')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Business Summary</span>
                            </a>
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/agent-manage-fund')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Agent Manage Fund</span>
                            </a>
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/distributor-agent-report')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Agent Report</span>
                            </a>
                        </li>
                    )}

                    {userInfo.role === 3 && (
                        <li>
                            <a className="ai-icon" onClick={()=>goToPage('/dashboard-setting')} aria-expanded="false">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="nav-text">Setting</span>
                            </a>
                        </li>
                    )}

                    <li className="">
                        <a className="has-arrow" onClick={() => goToPage('/dashboard-home')} aria-expanded="false">
                            <i className="fa-solid fa-house"></i>
                            <span className="nav-text">Dashboard</span>
                        </a>
                        <ul aria-expanded="false" className="mm-collapse">
                            <li className="mm-active">
                                <a onClick={()=>goToPage('/dashboard-home')} className="mm-active">Dashboard 1</a>
                            </li>
                            <li><a onClick={()=>goToPage('/dashboard-home')}>Dashboard 2</a></li>
                            <li><a onClick={()=>goToPage('/dashboard-home')}>Dashboard 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-business-summery')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Business Summary</span>
                        </a>
                    </li>

                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-reports')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Transactions</span>
                        </a>
                    </li>

                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-manage-funds')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Manage Fund</span>
                        </a>
                    </li>

                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-pending-refunds')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Refund Pending</span>
                        </a>
                    </li>
                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-money-request')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Money Request</span>
                        </a>
                    </li>
                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-statements')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Statements</span>
                        </a>
                    </li>
                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-complaint')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Complaint</span>
                        </a>
                    </li>
                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-commission-and-charge')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Commision & Charge</span>
                        </a>
                    </li>
                    <li>
                        <a className="ai-icon" onClick={()=>goToPage('/dashboard-setting')} aria-expanded="false">
                            <i className="fa-solid fa-file-pen"></i>
                            <span className="nav-text">Setting</span>
                        </a>
                    </li>
                </ul>
                <div className="LetsConnect pl-3">
                    <h6 className="mt-0 text-center">Lets Connect</h6>
                </div>
                <div className="LetsConnect text-center mt-2  green-Bg pl-3">
                    <h6 className="mt-0 ">Your Distributor</h6>
                </div>
                <div className="Your-Distri text-center">
                    <i className="fa-solid fa-user-tie"></i>
                    <p className="mb-0">Distributor</p>
                    <p>Phone: +91 99999 99999</p>
                </div>
                <div className="LetsConnect text-center green-Bg pl-3">
                    <h6 className="mt-0 ">Quick Support</h6>

                </div>
                <div className="Your-Distri text-center">
                    <p>Phone: +91 99999 99999</p>
                    <p>Email: info@unikpayindia.com</p>
                    <p>Whatsapp: +91 99999 99999</p>
                </div>
            </div>

        </div>

        </div>
    )
}