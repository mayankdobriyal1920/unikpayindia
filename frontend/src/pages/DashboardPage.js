import React, {useEffect, useState,useRef} from 'react';
import {
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel, IonTabs, IonPage
} from '@ionic/react';
import {Route, Redirect } from 'react-router-dom';


import HomePage from './HomePage';
import JobPortalPage from './JobPortalPage';
import MatrimonialPage from './MatrimonialPage';
import MagazinePage from './MagazinePage';
import {
    bookOutline, bookSharp,
    briefcaseOutline, briefcaseSharp,
    heartOutline,
    heartSharp,
    homeOutline,
    homeSharp
} from "ionicons/icons";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
import JobPortalDesktopPage from "../components/JobPortalDesktopPage";
import HomeMobilePage from "./HomeMobilePage";

const DashboardPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [currentPath,useCurrentPath] = useState('home')
    const lastScrollTop = useRef(0);
    const [hideHeader, setHideHeader] = useState(false);
    const [hideTabBar, setHideTabBar] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = (event) => {
        const scrollTop = event.detail.scrollTop;

        if (scrollTop > lastScrollTop.current) {
            // Scrolling down
            setHideHeader(true);
            setHideTabBar(true);
        } else {
            // Scrolling up
            setHideHeader(false);
            setHideTabBar(false);
        }

        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/dashboard/" render={() => (
                    <IonPage>
                        {/* Common header always visible */}
                        <HeaderAfterLoginComponent hideHeader={hideHeader} pageId={"main-menu-content"} />
                        {/* Nested outlet for tab pages */}
                        <IonRouterOutlet id="main-menu-content">
                            <Route exact path="/dashboard/home" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <HomeMobilePage />
                                        :
                                        <HomePage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />
                            <Route exact path="/dashboard/job-portal" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <JobPortalPage handleScroll={handleScroll} />
                                        :
                                        <JobPortalDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />
                            <Route exact path="/dashboard/matrimonial" render={()=><MatrimonialPage handleScroll={handleScroll} />} />
                            <Route exact path="/dashboard/magazine" render={()=><MagazinePage handleScroll={handleScroll} />} />
                            <Redirect exact from="/dashboard" to="/dashboard/home" />
                        </IonRouterOutlet>
                    </IonPage>
                )} />
            </IonRouterOutlet>
            {/* Bottom Tabs - Conditionally rendered */}
            <IonTabBar
                slot="bottom"
                style={{display: !isMobile ? 'none' : ''}}
                className={`custom-tabbar main-tab-bar ${hideTabBar ? 'hide_element' : ''}`}
            >
                <IonTabButton tab="home" className={"custom-ripple-color"} onClick={()=>useCurrentPath('home')} href="/dashboard/home">
                    <IonIcon icon={currentPath === 'home' ? homeSharp : homeOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="job" className={"custom-ripple-color"} onClick={()=>useCurrentPath('job')} href="/dashboard/job-portal">
                    <IonIcon icon={currentPath === 'job' ? briefcaseSharp : briefcaseOutline} />
                    <IonLabel>Job</IonLabel>
                </IonTabButton>

                <IonTabButton tab="matrimonial" className={"custom-ripple-color"} onClick={()=>useCurrentPath('matrimonial')} href="/dashboard/matrimonial">
                    <IonIcon icon={currentPath === 'matrimonial' ? heartSharp : heartOutline} />
                    <IonLabel>Matrimonial</IonLabel>
                </IonTabButton>

                <IonTabButton tab="magazine" className={"custom-ripple-color"} onClick={()=>useCurrentPath('magazine')} href="/dashboard/magazine">
                    <IonIcon icon={currentPath === 'magazine' ? bookSharp : bookOutline} />
                    <IonLabel>Magazine</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default DashboardPage;