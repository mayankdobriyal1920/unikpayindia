import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";

import usericon from '../theme/images/user-icon.jpg';
import MoneTransfer from '../theme/images/retailer-icons/MoneyTransfer.svg';
import PPIWallet from '../theme/images/retailer-icons/PPI-Wallet.svg';
import AEpsIcon from '../theme/images/retailer-icons/AEPS.svg';
import RechargeIcon from '../theme/images/retailer-icons/Recharge.svg';
import GasIcon from '../theme/images/retailer-icons/GAS.svg';
import DTHIcon from '../theme/images/retailer-icons/DTH.svg';
import BillCMSIcon from '../theme/images/retailer-icons/Bill-CMS-Offlines.svg';
import UPIIcon from '../theme/images/retailer-icons/UPI.svg';
import CCPaymentIcon from '../theme/images/retailer-icons/CC-Payment.svg';
import QuickFundIcon from '../theme/images/retailer-icons/QuickFund.svg';
import LICIcon from '../theme/images/retailer-icons/LIC.svg';
import CMSIcon from '../theme/images/retailer-icons/CMS.svg';
import InsuranceIcon from '../theme/images/retailer-icons/Insurance.svg';
import QRCodeIcon from '../theme/images/retailer-icons/QR-Code.svg';
import TravelIcon from '../theme/images/retailer-icons/Travel.svg';
import PGIcon from '../theme/images/retailer-icons/PG.svg';
import FastagIcon from '../theme/images/retailer-icons/Fastag.svg';

import multiwallet from '../theme/images/retailer-icons/multi-wallet-icon.svg';

import myBusinessIcon from '../theme/images/retailer-icons/My-Business.svg';
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
export default function DashboardPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>
            <IonContent fullscreen>
                <LeftSideBarComponent/>
                <div className="upi-content-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0 align-items-center">
                                <h6 className="crypto mt-0">Live Updates</h6>
                                <p className="retailer_p pl-2 mb-0">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                            </div>
                            <div className="col-xl-12 col-md-12 col-lg-12 d-flex d-block  my-3 page-header-breadcrumb">
                                <div className="left-content">
                                    <h3 className="content-title  mt-2">Welcome back,</h3>
                                    <div className="d-flex p-0">
                                        <i className="fa-solid fa-house"></i>
                                        <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Dashboard </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-9 ">
                                <div className="upi-style-icon white-bgcolor boxShadow">
                                    <div className="row retailer-das ">
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={multiwallet} className=""/>
                                                </div>
                                                <p>Multi Wallet</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={MoneTransfer} className=""/>
                                                </div>
                                                <p>Money Transfer</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={PPIWallet} className=""/>
                                                </div>
                                                <p>PPI Wallet</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={multiwallet} className=""/>
                                                </div>
                                                <p>PPI Digikhata</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={AEpsIcon} className=""/>
                                                </div>
                                                <p>AEPS</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={RechargeIcon} className=""/>
                                                </div>
                                                <p>Recharge</p>
                                            </a>
                                        </div>


                                    </div>
                                    <div className="row retailer-das ">
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={GasIcon} className=""/>
                                                </div>
                                                <p>GAS</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={DTHIcon} className=""/>
                                                </div>
                                                <p>DTH</p>
                                            </a>
                                        </div>

                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={BillCMSIcon} className=""/>
                                                </div>
                                                <p>Bill & CMS offline</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={UPIIcon} className=""/>
                                                </div>
                                                <p>UPI</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={CCPaymentIcon} className=""/>
                                                </div>
                                                <p>Credit Card Payment</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={QuickFundIcon} className=""/>
                                                </div>
                                                <p>Quick Fund</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={LICIcon} className=""/>
                                                </div>
                                                <p>LIC</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={CMSIcon} className=""/>
                                                </div>
                                                <p>CMS</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={InsuranceIcon} className=""/>
                                                </div>
                                                <p>Insurance</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={MoneTransfer} className=""/>
                                                </div>
                                                <p>BBPS</p>
                                            </a>
                                        </div>

                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={QRCodeIcon} className=""/>
                                                </div>
                                                <p>QR Code</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={TravelIcon} className=""/>
                                                </div>
                                                <p>Travel</p>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="row retailer-das ">

                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={PGIcon} className=""/>
                                                </div>
                                                <p>PG</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={FastagIcon} className=""/>
                                                </div>
                                                <p>Fas Tag</p>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center ">
                                            <a href="#">
                                                <div className="retailer-das-icon animate-bel">
                                                    <img src={QRCodeIcon} className=""/>
                                                </div>
                                                <p>QR Code</p>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="card retailer-home-balance">

                                            <div className="card-body card-tabs-new">
                                                <ul className="nav nav-pills light" role="tablist">
                                                    <li className=" nav-item" role="presentation">
                                                        <a href="#navpills-1" className="nav-link active" data-bs-toggle="tab"
                                                           aria-expanded="false" aria-selected="true" role="tab">Balance</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                           aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Refund
                                                            Pending</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a href="#navpills-3" className="nav-link" data-bs-toggle="tab"
                                                           aria-expanded="true" aria-selected="false" role="tab" tabIndex="-1">Pending
                                                            Transactions</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="navpills-1" className="tab-pane active show" role="tabpanel">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="upi-home-right">
                                    <div className="underBox">
                                        <div className="my-buss-sum d-inline-flex align-items-center mb-3">
                                            <img src={myBusinessIcon} alt="icon" className="mr-2 "/>
                                            <div className="flex items-center">
                                                <h3 className="mb-0 mt-0 red-color">My Business</h3>
                                                <h4 className="mt-0">Summary</h4>
                                            </div>

                                        </div>

                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <div className="MoneyTransfer mr-2 text-center">
                                                        <h5>Money Transfer</h5>
                                                        <p className="yellow-color">₹ 43,565.00</p>
                                                    </div>
                                                </div>
                                                <div className="flex-fill align-items-end">
                                                    <div className="MoneyTransfer text-center">
                                                        <h5>Utilities/Bill</h5>
                                                        <p className="yellow-color">₹199.00</p>
                                                    </div>
                                                </div>

                                            </div>



                                        <div className="d-flex align-items-center">
                                            <div className="flex-fill text-center summary-cc mr-3">
                                                <h5>Credit Card Bill</h5>
                                                <p className="text-center">₹ 0</p>
                                            </div>

                                            <div className="flex-fill summary-cc">
                                                <h5 className="text-center">Flight</h5>
                                                <p className="text-center">₹ 565.00</p>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="MoneyTransfer text-center">
                                                <h5>AEPS/MATM/MPOS/ADDHAR</h5>
                                                <p className="yellow-color text-center">₹ 43,565.00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="retailer-recent-trans mt-2">
                                        <div className="flex text-center pb-2">
                                            <h5 className="mt-0">Recent Transaction</h5>
                                        </div>

                                        <div className="Recent-Trans">
                                            <div className="table-responsive">
                                                <table className="table border-dashed table-responsive-sm">
                                                    <thead>
                                                    <tr className="LightBlue-BgColor">
                                                        <th scope="col">Transaction No.</th>
                                                        <th scope="col" className="text-end">Amount</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row"><a href="#">101510100114692</a></th>
                                                        <td className="text-end">Rs. 18564</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="#">101510100114692</a></th>
                                                        <td className="text-end">Rs. 18564</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="#">101510100114692</a></th>
                                                        <td className="text-end">Rs. 18564</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="#">101510100114692</a></th>
                                                        <td className="text-end">Rs. 18564</td>
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
            </IonContent>
        </IonPage>
    )
}