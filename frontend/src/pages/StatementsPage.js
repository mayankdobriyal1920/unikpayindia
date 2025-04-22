import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function StatementsPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>

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
                                <h3 className="content-title  mt-2">Statements</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Statements</p>
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
                                                    <option>Account Statements</option>
                                                    <option>AEPS Statements</option>
                                                    <option>Credit Statements</option>
                                                    <option>Credit Balance List</option>
                                                    <option>Withdraw Balance List</option>
                                                    <option>Wallet Pay History</option>
                                                    <option>Security Deposit History</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <input type="date" className="form-control" value="2025-04-14"/>
                                            </div>
                                            <div className="col-md-2">
                                                <input type="date" className="form-control" value="2025-04-14" />
                                            </div>
                                            <div className="col-md-1" style={{marginRight:"100px"}}>
                                                <button className="btn btn-primary w-100">Search</button>
                                            </div>
                                            <div className="col-md-1"  style={{marginRight:"100px"}}>
                                                <button className="btn btn-warning w-100">Export</button>
                                            </div>

                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-5">
                                                <p><b>Your Available Balance</b></p>
                                                <h2 className="green-color">19.26</h2>
                                                <span>ninteen Point Two Six</span>
                                            </div>
                                            <div className="col-md-3 bggreen-color mr-2">
                                                <h2>0</h2>
                                                <p>Total Amount Credited</p>
                                            </div>

                                            <div className="col-md-3 bgred-color">
                                                <h2>0</h2>
                                                <p>Total Amount Debited</p>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped">
                                                <thead className="table-primary text-center">
                                                <tr>
                                                    <th>S.R.</th>
                                                    <th>Date</th>
                                                    <th>Narration</th>
                                                    <th>Amount</th>
                                                    <th>Charge</th>
                                                    <th>Commission</th>
                                                    <th>TDS</th>
                                                    <th>Balance</th>

                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                <tr>
                                                    <td>1</td>
                                                    <td>14-Apr-2024
                                                        12:00:00 AM
                                                    </td>

                                                    <td>opening Balance</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>19.260000001826</td>
                                                    <td></td>
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