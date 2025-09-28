import React from 'react';
import {IonContent, IonHeader, IonPage, IonRouterOutlet} from "@ionic/react";

import usericon from '../theme/images/user-icon.jpg';
import MoneTransfer from '../theme/images/retailer-icons/MoneyTransfer.svg';
import PPIWallet from '../theme/images/retailer-icons/PPI-Wallet.svg';
import AEpsIcon from '../theme/images/retailer-icons/AEPS.svg';
import RechargeIcon from '../theme/images/retailer-icons/Recharge.svg';
import GasIcon from '../theme/images/retailer-icons/GAS.svg';
import DTHIcon from '../theme/images/retailer-icons/DTH.svg';
import BillCMSIcon from '../theme/images/retailer-icons/Bill-CMS-Offlines.svg';
import UPIIcon from '../theme/images/retailer-icons/UPI.svg';
import CCPaymentIcon from '../theme/images/retailer-icons/CC-Payment.svg';
import QuickFundIcon from '../theme/images/retailer-icons/QuickFund.svg';
import LICIcon from '../theme/images/retailer-icons/LIC.svg';
import CMSIcon from '../theme/images/retailer-icons/CMS.svg';
import InsuranceIcon from '../theme/images/retailer-icons/Insurance.svg';
import QRCodeIcon from '../theme/images/retailer-icons/QR-Code.svg';
import TravelIcon from '../theme/images/retailer-icons/Travel.svg';
import PGIcon from '../theme/images/retailer-icons/PG.svg';
import FastagIcon from '../theme/images/retailer-icons/Fastag.svg';

import multiwallet from '../theme/images/retailer-icons/multi-wallet-icon.svg';

import myBusinessIcon from '../theme/images/retailer-icons/My-Business.svg';
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
import {Redirect, Route, Switch, useRouteMatch} from "react-router";
import LoginPage from "./LoginPage";
import WithoutLoginHomePage from "./WithoutLoginHomePage";
import MdDashBoardEntryActionButtonPartPage from "../components/MdDashboard/MdDashBoardEntryActionButtonPartPage";
import MdDistributorCreateUser from "../components/MdDashboard/MdDistributorCreateUser";
import MdUpiFunds from "../components/MdDashboard/MdUpiFunds";
import MdAddFunds from "../components/MdDashboard/MdAddFunds";
import MdQrCode from "../components/MdDashboard/MdQrCode";

import PaymentTransactionSuccessModal from "../components/DashBoardPage/PaymentTransactionSuccessModal";
import {useDispatch, useSelector} from "react-redux";
import {actionToGetTransactionDetails} from "../redux/CommonAction";

export default function MdDashboard(){
    const path = `/md-dashboard`;
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
                            <Route exact path={`${path}/action`} component={MdDashBoardEntryActionButtonPartPage} />
                            <Route exact path={`${path}/create-user`} component={MdDistributorCreateUser} />
                            <Route exact path={`${path}/mdupi-funds`} component={MdUpiFunds} />
                            <Route exact path={`${path}/mdadd-funds`} component={MdAddFunds} />
                            <Route exact path={`${path}/mdqr-code`} component={MdQrCode} />
                            <Redirect  exact from={path}  to={`${path}/action`} />
                        </Switch>
                    </div>
                </div>
                <PaymentTransactionSuccessModal />
            </IonContent>
        </IonPage>
    )
}