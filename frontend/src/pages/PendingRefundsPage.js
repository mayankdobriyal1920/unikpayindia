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
                                <div className="form-row mt-5 m-auto">
                                    <div className="form-group col-md-3">
                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <div className="dmt-trasno btn-group" role="group">
                                            <button type="button" className="btn btn-width-auto btn-success mr-2">Search  </button>
                                            <button type="button" className="btn btn-width-auto btn-secondary">Export  </button>
                                        </div>
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