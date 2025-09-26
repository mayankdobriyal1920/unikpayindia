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
import MoneyTransferPartPage from "../components/DashBoardPage/MoneyTransferPartPage";
import PPIWalletPartPage from "../components/DashBoardPage/PPIWalletPartPage";
import PPIDigiKhataPartPage from "../components/DashBoardPage/PPIDigiKhataPartPage";
import AEPSPartPage from "../components/DashBoardPage/AEPSPartPage";
import RechargePartPage from "../components/DashBoardPage/RechargePartPage";
import GASPartPage from "../components/DashBoardPage/GASPartPage";
import DTHPartPage from "../components/DashBoardPage/DTHPartPage";
import BillCmsOfflinePartPage from "../components/DashBoardPage/BillCmsOfflinePartPage";
import UPIPartPage from "../components/DashBoardPage/UPIPartPage";
import CreditCardPaymentPartPage from "../components/DashBoardPage/CreditCardPaymentPartPage";
import WalletPartPage from "../components/DashBoardPage/WalletPartPage";
import LicPartPage from "../components/DashBoardPage/LicPartPage";
import CMSPartPage from "../components/DashBoardPage/CMSPartPage";
import InsurancePartPage from "../components/DashBoardPage/InsurancePartPage";
import BBPSPartPage from "../components/DashBoardPage/BBPSPartPage";
import QRCodePartPage from "../components/DashBoardPage/QRCodePartPage";
import TravelPartPage from "../components/DashBoardPage/TravelPartPage";
import PGPartPage from "../components/DashBoardPage/PGPartPage";
import FastTagPartPage from "../components/DashBoardPage/FastTagPartPage";
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
                            <Route exact path={`${path}/money-transfer`} component={MoneyTransferPartPage} />
                            <Route exact path={`${path}/ppi-wallet`} component={PPIWalletPartPage} />
                            <Route exact path={`${path}/ppi-digikhata`} component={PPIDigiKhataPartPage} />
                            <Route exact path={`${path}/aeps`} component={AEPSPartPage} />
                            <Route exact path={`${path}/recharge`} component={RechargePartPage} />
                            <Route exact path={`${path}/gas`} component={GASPartPage} />
                            <Route exact path={`${path}/dth`} component={DTHPartPage} />
                            <Route exact path={`${path}/bill-cms-offline`} component={BillCmsOfflinePartPage} />
                            <Route exact path={`${path}/upi`} component={UPIPartPage} />
                            <Route exact path={`${path}/credit-card-payment`} component={CreditCardPaymentPartPage} />
                            <Route exact path={`${path}/wallet`} component={WalletPartPage} />
                            <Route exact path={`${path}/lic`} component={LicPartPage} />
                            <Route exact path={`${path}/cms`} component={CMSPartPage} />
                            <Route exact path={`${path}/insurance`} component={InsurancePartPage} />
                            <Route exact path={`${path}/bbps`} component={BBPSPartPage} />
                            <Route exact path={`${path}/qr-code`} component={QRCodePartPage} />
                            <Route exact path={`${path}/travel`} component={TravelPartPage} />
                            <Route exact path={`${path}/pg`} component={PGPartPage} />
                            <Route exact path={`${path}/fast-tag`} component={FastTagPartPage} />
                            <Redirect  exact from={path}  to={`${path}/action`} />
                        </Switch>
                    </div>
                </div>
                <PaymentTransactionSuccessModal />
            </IonContent>
        </IonPage>
    )
}