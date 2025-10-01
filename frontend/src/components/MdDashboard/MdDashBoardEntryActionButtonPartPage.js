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

export default function MdDashBoardEntryActionButtonPartPage() {
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
                        <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;MD Dashboard </p>
                    </div>
                </div>
                <div className="upi-style-icon white-bgcolor boxShadow">
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/md-dashboard/create-user')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={CreateDistrubutorIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Create Distributor</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/master-managefund-withdraw')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={WithdrawalMoney} className=""/>
                                </div>
                                <h5 className="mt-0">Credit Money</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/master-managefund-withdraw')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={WithdrawalMoney} className=""/>
                                </div>
                                <h5 className="mt-0">Withdraw Money</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/md-dashboard/mdupi-funds')}>
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
                            <a onClick={()=>goToPage('/md-dashboard/mdadd-funds')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QuickFundIcon} className=""/>
                                </div>
                                <h5 className="mt-0">Add Fund</h5>
                            </a>
                        </div>




                    </div>
                    <div className="row retailer-das mb-4">
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/md-dashboard/mdqr-code')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QRCodeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">QR Code</h5>
                            </a>
                        </div>

                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/bill-cms-offline')}>
                                <div className="retailer-das-icon animate-bel">
                                    <img src={QRCodeIcon} className=""/>
                                </div>
                                <h5 className="mt-0">QR Code static 4</h5>
                            </a>
                        </div>
                        <div className="col-2 text-center ">
                            <a onClick={()=>goToPage('/dashboard-home/upi')}>
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
                            <a onClick={()=>goToPage('/md-dashboard/masterwallet-towallet')}>
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
                            <a onClick={()=>goToPage('/master-manage-fund')}>
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
        </div>
    )
}