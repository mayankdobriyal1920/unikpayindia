import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function CommissionAndChargePage(){
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