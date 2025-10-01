import React from 'react';
import CreateDistrubutorIcon from "../../theme/images/md-icons/create-distrubutor.svg";
import WithdrawalMoney from "../../theme/images/md-icons/withdrawal-money.svg";
import PPIWallet from "../../theme/images/retailer-icons/PPI-Wallet.svg";
import AccountStatements from "../../theme/images/md-icons/account-statements.svg";
import QuickFundIcon from "../../theme/images/retailer-icons/QuickFund.svg";
import QRCodeIcon from "../../theme/images/retailer-icons/QR-Code.svg";
import PGIcon from '../../theme/images/retailer-icons/PG.svg';

import MoneTransfer from "../../theme/images/retailer-icons/MoneyTransfer.svg";
import PendingRequesticon from '../../theme/images/md-icons/pending-request.svg';

import {useHistory} from "react-router";


export default function DistributorDashBoardEntryActionButtonPartPage() {
    const history = useHistory();
    const goToPage = (page)=>{
        history.push(page);
    }
    return (
        <div className="row">
            <div className="col-lg-12 col-12 ">
                <div className="left-content mt-4 mb-3">
                    <h3 className="content-title  mt-2">Welcome Back,</h3>
                    <div className="d-flex p-0">
                        <i className="fa-solid fa-house"></i>
                        <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Distributor Dashboard </p>
                    </div>
                </div>
                <div className="upi-style-icon white-bgcolor boxShadow">
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/create-retailer')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={CreateDistrubutorIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Create Retailer</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dist-managefund-credit')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={WithdrawalMoney} className=""/>
                                </div>
                                <h5 className="mt-0">Credit Money</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dist-managefund-withdraw')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={WithdrawalMoney} className=""/>
                                </div>
                                <h5 className="mt-0">Withdraw Money</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/distupi-funds')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={PPIWallet} className=""/>
                                </div>
                                <h5 className="mt-0">UPI Funds</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/master-account-statements')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={AccountStatements} className=""/>
                                </div>
                                <h5 className="mt-0">Account Statement</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/distadd-funds')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QuickFundIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Add Fund</h5>
                            </a>
                        </div>




                    </div>
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/distqr-code')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QRCodeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">QR Code</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/distqr-code')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QRCodeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">QR Code static 4</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/distqr-code')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QRCodeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">QR Code 6</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/credit-card-payment')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={PGIcon} className=""/>
                                </div>
                                <h5 className="mt-0">PG</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/distributor-dashboard/distwallet-towallet')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={PGIcon} className=""/>
                                </div>
                                <h5 className="mt-0">PG5</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/lic')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={MoneTransfer} className=""/>
                                </div>
                                <h5 className="mt-0">Virtual Transaction</h5>
                            </a>
                        </div>

                    </div>

                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dist-managefund-credit')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={PendingRequesticon} className=""/>
                                </div>
                                <h5 className="mt-0">Pending Requests</h5>
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
            {/*<div className="col-lg-3">
                <div className="left-content mt-4 mb-3">
                    <h3 className="content-title  mt-2">My Business</h3>
                    <div className="d-flex p-0">

                        <p className="text-muted mb-0 hover-cursor"> Summary </p>
                    </div>
                </div>
                <div className="upi-home-right">
                    <div className="underBox">
                        <div className="row ">
                            <div className="col-12 ">
                                <div className="my-buss-sum d-inline-flex align-items-center mb-3">
                                    <img src={myBusinessIcon} alt="icon" className="mr-2 "/>
                                    <div className="flex items-center">
                                        <h3 className="mb-0 mt-0 red-color">My Business</h3>
                                        <h4 className="mt-0">Summary</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
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
                        <div className="row">
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

                        </div>
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
            </div>*/}
        </div>
    )
}