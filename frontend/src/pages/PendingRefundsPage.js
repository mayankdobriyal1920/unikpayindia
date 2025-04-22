import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function PendingRefundsPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>

            <IonContent fullscreen>
                <LeftSideBarComponent/>

                <div className="upi-content-body">
                    <div className="container-fluid">

                        <div className="card">
                            <div className="card-header bg-purple text-white">
                                <strong>Refund Pending</strong>
                            </div>
                            <div className="card-body">
                                <div className="row g-2 align-items-end mb-3">
                                    <div className="col-md-2">
                                        <input type="date" className="form-control" value="2025-04-14" />
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
                                    <div className="col-md-3 ms-auto">
                                        <input type="text" className="form-control" placeholder="Global Search" />
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="table-primary text-center">
                                        <tr>
                                            <th>S.R.</th>
                                            <th>Txn Id</th>
                                            <th>Txn Date</th>
                                            <th>Updated On</th>
                                            <th>Name/Mobile</th>
                                            <th>Beneficiary</th>
                                            <th>Tran Amount</th>
                                            <th>Charge</th>
                                            <th>Service</th>
                                            <th>Status</th>
                                            <th>UTR</th>
                                            <th>Response</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        <tr>
                                            <td colSpan="12">No records found.</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}