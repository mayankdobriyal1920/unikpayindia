import React, {useEffect, useState} from 'react';
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
import './theme/common-style.css';
import './theme/common-responsive-desktop.css';
import './theme/common-responsive-mobile.css';
import {useDispatch,useSelector} from "react-redux";
import {actionToConnectSocketServer, actionToGetUserSessionData} from "./redux/CommonAction";
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";
import BecomeMember from "./pages/BecomeMember";
import NewsDetailPage from "./components/NewsDetailPage";
import {Capacitor} from "@capacitor/core";
import {NavigationBar} from "@mauricewegner/capacitor-navigation-bar";
import {StatusBar, Style} from "@capacitor/status-bar";
import appLogo from "./theme/images/site-small-logo-no-bg.png";

setupIonicReact();

const AppEnterMainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionToConnectSocketServer());
    }, []);


    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/become-member" component={BecomeMember}/>
                <Route path="/dashboard/*" component={DashboardPage}/>
                <Route exact path="/news-detail/:id" component={NewsDetailPage}/>
                <Redirect  exact from="/"  to="/dashboard/" />
                <Route render={() => <Redirect to="/dashboard/" />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

const PublicRoutes = () => {
    return (
        <IonReactRouter>
            {/*<AppBackButtonHandler/>*/}
            <IonRouterOutlet>
                <Route path="/login" exact={true} component={LoginPage} />
                <Route path="/signup" exact={true} component={RegisterPage} />
                <Route path="/forgot-password" exact={true} component={ForgotPassword} />
                <Route exact path="/news-detail/:id" component={NewsDetailPage}/>
                {/*<Redirect exact from="/"  to="/login" />*/}
                {/*<Route render={() => <Redirect to="/login" />} />*/}
                <Route path="/dashboard/*" component={DashboardPage}/>
                <Redirect  exact from="/"  to="/dashboard/" />
                <Route render={() => <Redirect to="/dashboard/" />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

const App = () => {
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const userSession = useSelector((state) => state.userSession);
    const {userInfo} = useSelector((state) => state.userAuthDetail);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        dispatch(actionToGetUserSessionData());
    }, []);

    useEffect(()=>{
        if(Capacitor.isNativePlatform()){
            NavigationBar.setColor({ color: '#ffffff' , darkButtons:true});
            StatusBar.setBackgroundColor({ color: '#ffffff' }).then(()=>{
                StatusBar.setStyle({ style:Style.Light });
            });
        }
    },[])

    useEffect(()=>{
        if(!Capacitor.isNativePlatform()){
            if(isMobile) {
                document.documentElement.style.setProperty('--font-size-1', `20px`);
                document.documentElement.style.setProperty('--font-size-2', `18px`);
                document.documentElement.style.setProperty('--font-size-3', `14px`);
                document.documentElement.style.setProperty('--font-size-4', `12px`);
                document.documentElement.style.setProperty('--font-size-5', `10px`);
                document.documentElement.style.setProperty('--font-size-6', `8px`);
                document.documentElement.style.setProperty('--font-size-7', `6px`);
            }
        }
    },[isMobile])

    return (
        <IonApp>
            {(!userSession?.loading) ?
                <React.Fragment>
                    {userInfo?.id ?
                        <AppEnterMainPage/>
                        :
                        <PublicRoutes/>
                    }
                    {/*//////// WHATSAPP BUTTON /////////*/}
                    <button className={"whatsapp_floating_button"}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" role="img" viewBox="0 0 512 512">
                            <rect width="512" height="512" rx="15%" fill="#25d366"/>
                            <path fill="#25d366" stroke="#ffffff" strokeWidth="26"
                                  d="M123 393l14-65a138 138 0 1150 47z"/>
                            <path fill="#ffffff"
                                  d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
                        </svg>
                    </button>
                    {/*//////// WHATSAPP BUTTON /////////*/}
                </React.Fragment>
                :
                <div className={"splash_loading_screen"}>
                    <div className={"splash_loading_screen_inner"}>
                        <img alt={'logo'} src={appLogo}/>
                    </div>
                </div>
            }
        </IonApp>
    );
}
export default App;