import React, {useEffect, useState} from 'react';
import {
    IonApp,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel, IonPage
} from '@ionic/react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import HomePage from './HomePage';
import JobPortalPage from './JobPortalPage';
import MatrimonialPage from './MatrimonialPage';
import MagazinePage from './MagazinePage';
import {bookOutline, briefcaseOutline, heartOutline, homeOutline} from "ionicons/icons";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
import {IonReactRouter} from "@ionic/react-router";

const DashboardPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <IonReactRouter>
            <IonApp>
                <React.Fragment>
                    {/* Common header */}
                    <HeaderAfterLoginComponent />

                    {/* Main content Routing - Removed Switch since IonRouterOutlet handles this */}
                    <IonRouterOutlet>
                        <Route exact path="/dashboard/home" component={HomePage} />
                        <Route exact path="/dashboard/job-portal" component={JobPortalPage} />
                        <Route exact path="/dashboard/matrimonial" component={MatrimonialPage} />
                        <Route exact path="/dashboard/magazine" component={MagazinePage} />
                        <Redirect exact from="/dashboard" to="/dashboard/home" />
                        {/* Optional: Catch-all redirect for unknown routes */}
                        <Redirect to="/dashboard/home" />
                    </IonRouterOutlet>

                    {/* Bottom Tabs - Conditionally rendered */}
                    {isMobile && (
                        <IonTabBar
                            slot="bottom"
                            className="custom-tabbar"
                         >
                            <IonTabButton tab="home" href="/dashboard/home">
                                <IonIcon icon={homeOutline} />
                                <IonLabel>Home</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="job" href="/dashboard/job-portal">
                                <IonIcon icon={briefcaseOutline} />
                                <IonLabel>Job</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="matrimonial" href="/dashboard/matrimonial">
                                <IonIcon icon={heartOutline} />
                                <IonLabel>Matrimonial</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="magazine" href="/dashboard/magazine">
                                <IonIcon icon={bookOutline} />
                                <IonLabel>Magazine</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    )}
                </React.Fragment>
            </IonApp>
        </IonReactRouter>
    );
};

export default DashboardPage;