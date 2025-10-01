import React from 'react';
import MoneTransfer from "../../theme/images/retailer-icons/MoneyTransfer.svg";
import PPIWallet from "../../theme/images/retailer-icons/PPI-Wallet.svg";
import multiwallet from "../../theme/images/retailer-icons/multi-wallet-icon.svg";
import AEpsIcon from "../../theme/images/retailer-icons/AEPS.svg";
import RechargeIcon from "../../theme/images/retailer-icons/Recharge.svg";
import GasIcon from "../../theme/images/retailer-icons/GAS.svg";
import DTHIcon from "../../theme/images/retailer-icons/DTH.svg";
import BillCMSIcon from "../../theme/images/retailer-icons/Bill-CMS-Offlines.svg";
import UPIIcon from "../../theme/images/retailer-icons/UPI.svg";
import CCPaymentIcon from "../../theme/images/retailer-icons/CC-Payment.svg";
import QuickFundIcon from "../../theme/images/retailer-icons/QuickFund.svg";
import LICIcon from "../../theme/images/retailer-icons/LIC.svg";
import CMSIcon from "../../theme/images/retailer-icons/CMS.svg";
import InsuranceIcon from "../../theme/images/retailer-icons/Insurance.svg";
import QRCodeIcon from "../../theme/images/retailer-icons/QR-Code.svg";
import TravelIcon from "../../theme/images/retailer-icons/Travel.svg";
import PGIcon from "../../theme/images/retailer-icons/PG.svg";
import FastagIcon from "../../theme/images/retailer-icons/Fastag.svg";
import {useHistory} from "react-router";

export default function DashBoardEntryActionButtonPartPage() {
    const history = useHistory();
    const goToPage = (page)=>{
        history.push(page);
    }
    return (
        <div className="row">
            <div className="col-lg-9 ">
                <div className="left-content mt-4 mb-3">
                    <h3 className="content-title  mt-2">Welcome Back,</h3>
                    <div className="d-flex p-0">
                        <i className="fa-solid fa-house"></i>
                        <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Dashboard </p>
                    </div>
                </div>
                <div className="upi-style-icon white-bgcolor boxShadow">
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/money-transfer')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={MoneTransfer} className=""/>
                                </div>
                                <h5 className="mt-0">Money Transfer</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/ppi-wallet')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={PPIWallet} className=""/>
                                </div>
                                <h5 className="mt-0">PPI Wallet</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/ppi-digikhata')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={multiwallet} className=""/>
                                </div>
                                <h5 className="mt-0">PPI Digikhata</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/aeps')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={AEpsIcon} className=""/>
                                </div>
                                <h5 className="mt-0">AEPS</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/recharge')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={RechargeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Recharge</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/gas')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={GasIcon} className=""/>
                                </div>
                                <h5 className="mt-0">GAS</h5>
                            </a>
                        </div>


                    </div>
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/dth')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={DTHIcon} className=""/>
                                </div>
                                <h5 className="mt-0">DTH</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/bill-cms-offline')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={BillCMSIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Bill & CMS offline</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/upi')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={UPIIcon} className=""/>
                                </div>
                                <h5 className="mt-0">UPI</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/credit-card-payment')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={CCPaymentIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Credit Card Payment</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/wallet')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QuickFundIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Wallet</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/lic')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={LICIcon} className=""/>
                                </div>
                                <h5 className="mt-0">LIC</h5>
                            </a>
                        </div>
                    </div>
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/cms')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={CMSIcon} className=""/>
                                </div>
                                <h5 className="mt-0">CMS</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/insurance')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={InsuranceIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Insurance</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/bbps')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={MoneTransfer} className=""/>
                                </div>
                                <h5 className="mt-0">BBPS</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/qr-code')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QRCodeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">QR Code</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/travel')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={TravelIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Travel</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/pg')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={PGIcon} className=""/>
                                </div>
                                <h5 className="mt-0">PG</h5>
                            </a>
                        </div>

                    </div>
                    <div className="row retailer-das ">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/fast-tag')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={FastagIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Fas Tag</h5>
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
                                                <h6 className="green-color">DMT</h6>
                                                <p>$24.00</p>
                                            </div>
                                            <div className="col-md-2">
                                                <h6 className="green-color">Utility/Bills</h6>
                                                <p>$24.00</p>
                                            </div>
                                            <div className="col-md-2">
                                                <h6 className="green-color">Credit Card</h6>
                                                <p>$24.00</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="navpills-3" className="tab-pane" role="tabpanel">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <h6 className="green-color">DMT</h6>
                                                <p>$24.00</p>
                                            </div>
                                            <div className="col-md-2">
                                                <h6 className="green-color">Utility/Bills</h6>
                                                <p>$24.00</p>
                                            </div>
                                            <div className="col-md-2">
                                                <h6 className="green-color">Credit Card </h6>
                                                <p>$24.00</p>
                                            </div>
                                            <div className="col-md-2">
                                                <h6 className="green-color">AEPS/MATM/MPOS/ADDHAR Pay</h6>
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
                <div className="left-content mt-4 mb-3">
                    <h3 className="content-title  mt-2">My Business</h3>
                    <div className="d-flex p-0">

                        <p className="text-muted mb-0 hover-cursor"> Summary </p>
                    </div>
                </div>
                <div className="upi-home-right">
                    <div className="underBox">
                        {/*<div className="row ">
                            <div className="col-12 ">
                                <div className="my-buss-sum d-inline-flex align-items-center mb-3">
                                    <img src={myBusinessIcon} alt="icon" className="mr-2 "/>
                                    <div className="flex items-center">
                                        <h3 className="mb-0 mt-0 red-color">My Business</h3>
                                        <h4 className="mt-0">Summary</h4>
                                    </div>

                                </div>
                            </div>
                        </div>*/}
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="bg-white rounded-xl newstyle-dashome border-purple-500">
                                    <p className="text-gray-500">Money Transfer</p>
                                    <h3 className="text-lg font-bold">₹43,565</h3>
                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="bg-white p-2 pl-3 pr-3 rounded-xl newstyle-dashome border-purple-500">
                                    <p className="text-gray-500">Utilities/Bill</p>
                                    <h3 className="text-lg font-bold">₹199</h3>
                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="bg-white p-2 pl-3 pr-3 rounded-xl newstyle-dashome border-purple-500">
                                    <p className="text-gray-500">Flight</p>
                                    <h3 className="text-lg font-bold">₹565</h3>
                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="bg-white p-2 pl-3 pr-3 rounded-xl newstyle-dashome border-purple-500">
                                    <p className="text-gray-500">Credit Card Bill</p>
                                    <h3 className="text-lg font-bold">₹199</h3>
                                </div>
                            </div>

                        </div>
                        {/*<div className="row">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                        <div className="MoneyTransfer mr-2 text-center">
                                            <h5>Money Transfer</h5>
                                            <p className="yellow-color">₹ 43,565.00</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-6">
                                <div className="flex-fill align-items-end">
                                    <div className="MoneyTransfer text-center">
                                        <h5>Utilities/Bill</h5>
                                        <p className="yellow-color">₹199.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="flex-fill text-center summary-cc mr-3">
                                    <h5>Credit Card Bill</h5>
                                    <p className="text-center">₹ 0</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="flex-fill summary-cc">
                                    <h5 className="text-center">Flight</h5>
                                    <p className="text-center">₹ 565.00</p>
                                </div>
                            </div>

                        </div>*/}
                    </div>
                </div>
                <div className="upi-home-right">
                    <div className="underBox">


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
    )
}