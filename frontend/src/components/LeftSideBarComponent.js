import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import {Route, useHistory} from "react-router";
import unikPayLogo from '../theme/images/UnikPayIndia-Logo.png';

export default function LeftSideBarComponent(){
    const history = useHistory();
    const goToPage = (page)=>{
        history.replace(page);
    }
    return (

    <div className="upi-side-nav bg-color">
        <div className="main-sidebar-header">
            <a href="index.html" className="header-logo">
                <img src={unikPayLogo} alt="logo" className="desktop-logo"/>
            </a>
        </div>
        <div className="upi-side-nav-scroll mm-active">
            <div className="simplebar-wrapper">
                <ul className="metismenu" id="menu">
                    <li className="nav-label first">Main Menu</li>
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
                            <span className="nav-text">Reports</span>
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
                <div className="LetsConnect text-center  green-Bg pl-3">
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