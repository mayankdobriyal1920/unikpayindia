import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from '../theme/images/user-icon.jpg';
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
export default function DistributorAgentRequestOnOff(){
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
                                <h3 className="content-title  mt-2">Request ON/OFF </h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Request ON/OFF</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">

                            <div className="col-6 mx-auto">
                                <h3 className="bgred-color white-color pl-2 pt-2 pb-2">Request ON/OFF</h3>
                                <form className="mt-3">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <select id="inputState" className="form-control">
                                                <option>Select Member</option>
                                                <option>CDM</option>
                                                <option>IMPS/UPI</option>
                                                <option>NEFT/RTGS</option>
                                                <option>Fund Transfer</option>
                                                <option>Cheque</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="text" placeholder="Remark" className="form-control" id="inputGroupFile01"/>
                                        </div>

                                    </div>

                                    <div className="form-row ">
                                       <div className="col-4 mx-auto" >
                                           <button type="button" className="btn btn-width-auto btn-success mr-2">Disable Money Request
                                           </button>
                                       </div>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}