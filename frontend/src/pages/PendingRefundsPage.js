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
                        <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0 align-items-center">
                            <h6 className="crypto mt-0">Live Updates</h6>
                            <p className="retailer_p pl-2 mb-0">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                        </div>
                        <div className="d-md-flex d-block align-items-center justify-content-between my-3 page-header-breadcrumb">
                            <div className="left-content">
                                <h3 className="content-title  mt-2">Refund Pending</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Refund Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="ShowTrans">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="date" className="form-control" value="2025-04-14" />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="date" className="form-control" value="2025-04-14" />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control" placeholder="Global Search" />
                                    </div>

                                    <div className="form-group col-md-3 d-flex">
                                        <button className="btn btn-success btn-purple ">Search</button>
                                        <button className="btn btn-success btn-purple">Export</button>
                                    </div>
                                </div>
                            </form>
                            <div className="Recent-Trans table-responsive">
                                <table className="table border-dashed table-striped">
                                    <thead className="table-primary text-center">
                                    <tr className="LightBlue-BgColor">
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
            </IonContent>
        </IonPage>
    )
}