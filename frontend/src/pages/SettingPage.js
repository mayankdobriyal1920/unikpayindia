import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function SettingPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>

            <IonContent fullscreen>
                <LeftSideBarComponent/>

                <div className="upi-content-body password ">
                    <div className="container-fluid">
                        <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0 align-items-center">
                            <h6 className="crypto mt-0">Live Updates</h6>
                            <p className="retailer_p pl-2 mb-0">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                        </div>
                        <div className="d-md-flex d-block align-items-center justify-content-between my-3 page-header-breadcrumb">
                            <div className="left-content">
                                <h3 className="content-title  mt-2">Setting</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Setting </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 col-lg-12 main-retailer-report ShowTrans">

                            <div className="card retailer-home-balance">
                                <div className="card-body card-tabs-new">
                                    <ul className="nav nav-pills light" role="tablist">

                                        <li className="nav-item" role="presentation"><a href="#navpills-2"
                                                                                        className="nav-link active"
                                                                                        data-bs-toggle="tab"
                                                                                        aria-expanded="false"
                                                                                        aria-selected="true" role="tab">Change Password </a></li>
                                        <li className="nav-item" role="presentation"><a href="#navpills-3"
                                                                                        className="nav-link"
                                                                                        data-bs-toggle="tab"
                                                                                        aria-expanded="true"
                                                                                        aria-selected="false" role="tab"
                                                                                        tabIndex="-1">Change MPIN
                                            Transactions</a></li>
                                    </ul>

                                    <div className="tab-content">
                                                                               <div id="navpills-2" className="tab-pane active show" role="tabpanel">
                                            <div className="row">
                                                <div className="container">
                                                    <div className="col-6 align-self-center">
                                                        <h5 className="bg-purple white-color p-2 mb-2">Verify OTP</h5>
                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="inputEmail4">Name</label>
                                                                <input type="email" className="form-control"
                                                                       id="inputEmail4"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputEmail4">PAN</label>
                                                                <input type="email" className="form-control"
                                                                       id="inputEmail4"/>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary">Verify </button>
                                                            <button type="submit" className="btn btn-primary">Resend OTP </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div id="navpills-3" className="tab-pane" role="tabpanel">
                                            <div className="row">
                                                <div className="container">
                                                    <div className="col-6 align-self-center">
                                                        <h5 className="bg-purple white-color p-2 mb-2">Reset MPIN </h5>
                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="inputEmail4">Name</label>
                                                                <input type="email" className="form-control"
                                                                       id="inputEmail4"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputEmail4">PAN</label>
                                                                <input type="email" className="form-control"
                                                                       id="inputEmail4"/>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary">Send OTP </button>

                                                        </form>
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


            </IonContent>
        </IonPage>
    )
}