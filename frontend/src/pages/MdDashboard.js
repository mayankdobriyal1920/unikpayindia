import React from 'react';
import {IonContent, IonHeader, IonPage, IonRouterOutlet} from "@ionic/react";

import usericon from '../theme/images/user-icon.jpg';
import CreateDistrubutorIcon from "../../src/theme/images/md-icons/create-distrubutor.svg";
import WithdrawalMoney from "../../src/theme/images/md-icons/withdrawal-money.svg";
import PPIWallet from '../theme/images/retailer-icons/PPI-Wallet.svg';
import MoneTransfer from '../theme/images/retailer-icons/MoneyTransfer.svg';
import AccountStatements from "../../src/theme/images/md-icons/account-statements.svg";
import QuickFundIcon from '../theme/images/retailer-icons/QuickFund.svg';
import QRCodeIcon from '../theme/images/retailer-icons/QR-Code.svg';
import PGIcon from '../theme/images/retailer-icons/PG.svg';
import PendingRequesticon from '../theme/images/md-icons/pending-request.svg';

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
import MasterWalletToWallet from "../components/MdDashboard/MasterWalletToWallet";
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
                            <Route exact path={`${path}/masterwallet-towallet`} component={MasterWalletToWallet} />
                            <Redirect  exact from={path}  to={`${path}/action`} />
                        </Switch>
                    </div>
                </div>
                <PaymentTransactionSuccessModal />
            </IonContent>
        </IonPage>
    )
}