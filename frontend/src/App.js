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
import DistributorDashboardPage from "./pages/DistributorDashboardPage";
import DistributorAgentDetail from "./pages/DistributorAgentDetail";
import DistributorAgentReport from "./pages/DistributorAgentReport";
import AgentManageFund from "./pages/AgentManageFund";
import MDBusinessSummeryPage from "./pages/MDBusinessSummeryPage";
import DistributorDetails from "./pages/DistributorDetails";
import MasterRetailerList from "./pages/MasterRetailerList";
import MasterManageFund from "./pages/MasterManageFund";
import MasterMoneyRequest from "./pages/MasterMoneyRequest";
import MasterManageFundWithdraw from "./pages/MasterManageFundWithdraw";
import './css/common.css';
setupIonicReact();


// Define one router for each role
const SuperAdminRoutes = () => (
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
            <Redirect exact from="/" to="/dashboard-home" />
            <Route render={() => <Redirect to="/dashboard-home" />} />
        </IonRouterOutlet>
    </IonReactRouter>
);

const MasterDistributorRoutes = () => (
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/dashboard-home" component={DashboardPage}/>
            <Route path="/md-business-summery" component={MDBusinessSummeryPage}/>
            <Route path="/distributor-details" component={DistributorDetails}/>
            <Route path="/master-retailer-list" component={MasterRetailerList}/>
            <Route path="/master-manage-fund" component={MasterManageFund}/>
            <Route path="/master-managefund-withdraw" component={MasterManageFundWithdraw}/>
            <Route path="/master-money-request" component={MasterMoneyRequest}/>
            <Route path="/dashboard-reports" component={ReportsPage}/>
            <Route path="/dashboard-manage-funds" component={ManageFundsPage}/>
            <Route path="/dashboard-pending-refunds" component={PendingRefundsPage}/>
            <Route path="/dashboard-money-request" component={MoneyRequestPage}/>
            <Route path="/dashboard-statements" component={StatementsPage}/>
            <Route path="/dashboard-complaint" component={ComplaintPage}/>
            <Route path="/dashboard-commission-and-charge" component={CommissionAndChargePage}/>
            <Route path="/dashboard-setting" component={SettingPage}/>
            <Redirect exact from="/" to="/dashboard-home" />
            <Route render={() => <Redirect to="/dashboard-home" />} />
        </IonRouterOutlet>
    </IonReactRouter>
);

const LocalDistributorRoutes = () => (
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/dashboard-home" component={DistributorDashboardPage}/>
            <Route path="/distributor-agent-detail" component={DistributorAgentDetail}/>
            <Route path="/dashboard-manage-funds" component={ManageFundsPage}/>
            <Route path="/dashboard-money-request" component={MoneyRequestPage}/>
            <Route path="/dashboard-statements" component={StatementsPage}/>
            <Route path="/dashboard-business-summery" component={BusinessSummeryPage}/>
            <Route path="/distributor-agent-report" component={DistributorAgentReport}/>
            <Route path="/agent-manage-fund" component={AgentManageFund}/>
            <Route path="/dashboard-reports" component={ReportsPage}/>

            <Route path="/dashboard-setting" component={SettingPage}/>
            <Redirect exact from="/" to="/dashboard-home" />
            <Route render={() => <Redirect to="/dashboard-home" />} />
        </IonRouterOutlet>
    </IonReactRouter>
);

const RetailerRoutes = () => (
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
            <Redirect exact from="/" to="/dashboard-home" />
            <Route render={() => <Redirect to="/dashboard-home" />} />
        </IonRouterOutlet>
    </IonReactRouter>
);


// Main Component
const AppEnterMainPage = () => {
    const { userInfo } = useSelector((state) => state.userAuthDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionToConnectSocketServer());
    }, [dispatch]);

    if (!userInfo) return null; // Prevent rendering before userInfo is loaded

    switch (userInfo.role) {
        case 1:
            return <SuperAdminRoutes />;
        case 2:
            return <MasterDistributorRoutes />;
        case 3:
            return <LocalDistributorRoutes />;
        default:
            return <RetailerRoutes />;
    }
};


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