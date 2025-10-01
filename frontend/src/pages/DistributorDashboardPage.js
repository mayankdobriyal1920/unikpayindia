import React from 'react';
import {IonContent,IonPage} from "@ionic/react";

import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
import {Redirect, Route, Switch} from "react-router";
import DistributorDashBoardEntryActionButtonPartPage from "../components/Distributor/DistributorDashBoardEntryActionButtonPartPage";
import DisCreateRetailer from "../components/Distributor/DisCreateRetailer";
import DistUpiFunds from "../components/Distributor/DistUpiFunds";
import DistAddFunds from "../components/Distributor/DistAddFunds";
import DistQrCode from "../components/Distributor/DistQrCode";
import DistWalletToWallet from "../components/Distributor/DistWalletToWallet";
import MasterWalletToWallet from "../components/MdDashboard/MasterWalletToWallet";
import PaymentTransactionSuccessModal from "../components/DashBoardPage/PaymentTransactionSuccessModal";
import {useDispatch, useSelector} from "react-redux";
import {actionToGetTransactionDetails} from "../redux/CommonAction";


export default function DistributorDashboardPage(){
    const path = `/distributor-dashboard`;
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state) => state.userAuthDetail)

    React.useEffect(()=>{
        dispatch(actionToGetTransactionDetails(userInfo.id))
    },[userInfo])

    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>
            <IonContent fullscreen>
                <LeftSideBarComponent/>
                <div className="upi-content-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0 align-items-center">
                                <h6 className="crypto mt-0">Live Updates</h6>
                                <p className="retailer_p pl-2 mb-0">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                            </div>


                        </div>
                        <div className="row">

                        </div>
                        <Switch>
                            <Route exact path={`${path}/action`} component={DistributorDashBoardEntryActionButtonPartPage} />
                            <Route exact path={`${path}/create-retailer`} component={DisCreateRetailer} />
                            <Route exact path={`${path}/distupi-funds`} component={DistUpiFunds} />
                            <Route exact path={`${path}/distadd-funds`} component={DistAddFunds} />
                            <Route exact path={`${path}/distqr-code`} component={DistQrCode} />
                            <Route exact path={`${path}/distwallet-towallet`} component={DistWalletToWallet} />
                            <Redirect  exact from={path}  to={`${path}/action`} />
                        </Switch>
                    </div>
                </div>
                <PaymentTransactionSuccessModal />
            </IonContent>
        </IonPage>
    )
}