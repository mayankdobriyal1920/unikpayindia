import React, {useEffect} from 'react';
import {setupIonicReact, IonApp, IonRouterOutlet, IonLoading} from '@ionic/react';
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/additional.css';
import './theme/common-style.css';
import {useDispatch,useSelector} from "react-redux";
import {actionToConnectSocketServer, actionToGetUserSessionData} from "./redux/CommonAction";
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router";
import LoginPage from "./pages/LoginPage";
import WithoutLoginHomePage from "./pages/WithoutLoginHomePage";
import DashboardPage from "./pages/DashboardPage";
import SettingPage from "./pages/SettingPage";
import CommissionAndChargePage from "./pages/CommissionAndChargePage";
import ComplaintPage from "./pages/ComplaintPage";
import MoneyRequestPage from "./pages/MoneyRequestPage";
import PendingRefundsPage from "./pages/PendingRefundsPage";
import ManageFundsPage from "./pages/ManageFundsPage";
import ReportsPage from "./pages/ReportsPage";
import BusinessSummeryPage from "./pages/BusinessSummeryPage";
import StatementsPage from "./pages/StatementsPage";
import './css/common.css';
setupIonicReact();

const AppEnterMainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionToConnectSocketServer());
    }, []);

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/dashboard-home" component={DashboardPage}/>
                <Route path="/dashboard-business-summery" component={BusinessSummeryPage}/>
                <Route path="/dashboard-reports" component={ReportsPage}/>
                <Route path="/dashboard-manage-funds" component={ManageFundsPage}/>
                <Route path="/dashboard-pending-refunds" component={PendingRefundsPage}/>
                <Route path="/dashboard-money-request" component={MoneyRequestPage}/>
                <Route path="/dashboard-statements" component={StatementsPage}/>
                <Route path="/dashboard-complaint" component={ComplaintPage}/>
                <Route path="/dashboard-commission-and-charge" component={CommissionAndChargePage}/>
                <Route path="/dashboard-setting" component={SettingPage}/>

                <Redirect  exact from="/"  to="/dashboard-home" />
                <Route render={() => <Redirect to="/dashboard-home" />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

const PublicRoutes = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/login" exact={true} component={LoginPage} />
                <Route path="/home" exact={true} component={WithoutLoginHomePage} />
                <Redirect  exact from="/"  to="/home" />
                <Route render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

const App = () => {
    const dispatch = useDispatch();
    const userSession = useSelector((state) => state.userSession);
    const {userInfo} = useSelector((state) => state.userAuthDetail);

    useEffect(() => {
        dispatch(actionToGetUserSessionData());
    }, []);

    return (
        <IonApp>
            {(!userSession?.loading) ?
                <React.Fragment>
                    {userInfo?.id ? <AppEnterMainPage/> : <PublicRoutes/>}
                </React.Fragment>:''
            }
            <IonLoading className={"loading_loader_spinner_container"} isOpen={userSession?.loading} message={"Loading..."}/>
        </IonApp>
    );
}
export default App;