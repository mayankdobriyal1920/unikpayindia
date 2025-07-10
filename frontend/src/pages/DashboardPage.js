import React, {useEffect, useState,useRef} from 'react';
import {
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel, IonTabs, IonPage, IonModal, IonContent, IonButton
} from '@ionic/react';
import {Route, Redirect } from 'react-router-dom';


import HomePage from './HomePage';
import JobPortalMobilePage from './JobPortalMobilePage';
import MatrimonialPage from './MatrimonialPage';
import MagazinePage from './MagazinePage';
import {
    briefcaseOutline,
    briefcaseSharp, calendarOutline, calendarSharp, cashOutline, cashSharp,
    clipboardOutline,
    clipboardSharp,
    ellipsisHorizontalOutline, ellipsisHorizontalSharp,
    heartOutline,
    heartSharp,
    homeOutline,
    homeSharp, newspaperOutline, newspaperSharp
} from "ionicons/icons";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
import JobPortalDesktopPage from "./JobPortalDesktopPage";
import HomeMobilePage from "./HomeMobilePage";
import MatrimonialDesktopPage from "./MatrimonialDesktopPage";
import MagazineDesktopPage from "./MagazineDesktopPage";
import AssignmentMobilePage from "./AssignmentMobilePage";
import AssignmentDesktopPage from "./AssignmentDesktopPage";
import {useHistory} from "react-router-dom";

const DashboardPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [currentPath,setCurrentPath] = useState('home')
    const lastScrollTop = useRef(0);
    const [hideHeader, setHideHeader] = useState(false);
    const [hideTabBar, setHideTabBar] = useState(false);
    const [showMoreSheet, setShowMoreSheet] = useState(false);
    const history = useHistory();

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
    }

    const callFunctionToOpenShowMoreSheet = ()=>{
        setShowMoreSheet(!showMoreSheet);
    }
    
    const gotToPage = (path,type)=>{
        setCurrentPath(type)
        history.replace(path);
        setShowMoreSheet(false);
    }

    const callFunctionToSetCurrentPath = (path) =>{
        setCurrentPath(path);
        setShowMoreSheet(false);
    }

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
                                        <JobPortalMobilePage handleScroll={handleScroll} />
                                        :
                                        <JobPortalDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />

                            <Route exact path="/dashboard/matrimonial" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <MatrimonialPage handleScroll={handleScroll} />
                                        :
                                        <MatrimonialDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />

                            <Route exact path="/dashboard/assignments" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <AssignmentMobilePage handleScroll={handleScroll} />
                                        :
                                        <AssignmentDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />

                            <Route exact path="/dashboard/magazine" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <MagazinePage handleScroll={handleScroll} />
                                        :
                                        <MagazineDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />
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
                <IonTabButton tab="home" className={"custom-ripple-color"} onClick={()=>callFunctionToSetCurrentPath('home')} href="/dashboard/home">
                    <IonIcon icon={currentPath === 'home' ? homeSharp : homeOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="job" className={"custom-ripple-color"} onClick={()=>callFunctionToSetCurrentPath('job')} href="/dashboard/job-portal">
                    <IonIcon icon={currentPath === 'job' ? briefcaseSharp : briefcaseOutline} />
                    <IonLabel>Job</IonLabel>
                </IonTabButton>

                <IonTabButton tab="assignments" className={"custom-ripple-color"} onClick={()=>callFunctionToSetCurrentPath('assignments')} href="/dashboard/assignments">
                    <IonIcon icon={currentPath === 'assignments' ? clipboardSharp : clipboardOutline} />
                    <IonLabel>Assignments</IonLabel>
                </IonTabButton>

                <IonTabButton tab="more" className={`custom-ripple-color ${(currentPath === 'matrimonial' || currentPath === 'events' || currentPath === 'newsletter' || currentPath === 'contribute') ? 'tab-selected' : ''}`} onClick={()=> callFunctionToOpenShowMoreSheet()}>
                    <IonIcon icon={ellipsisHorizontalSharp} />
                    <IonLabel>More</IonLabel>
                    <IonModal
                        isOpen={showMoreSheet}
                        onDidDismiss={() => setShowMoreSheet(false)}
                        breakpoints={[0, 0.17]}
                        initialBreakpoint={0.17}
                        className="more-sheet-modal">
                        <IonContent className="ion-padding">
                            <div className="more-sheet-grid">
                                <div onClick={() => gotToPage('/dashboard/matrimonial', 'matrimonial')}
                                     className={`more-sheet-item ${currentPath === 'matrimonial' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={heartOutline}/>
                                        </div>
                                        <span>Matrimonial</span>
                                    </div>
                                <div onClick={() => gotToPage('/dashboard/events', 'events')}
                                     className={`more-sheet-item ${currentPath === 'events' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={calendarOutline}/>
                                        </div>
                                        <span>Events</span>
                                    </div>
                                <div onClick={() => gotToPage('/dashboard/newsletter', 'newsletter')}
                                     className={`more-sheet-item ${currentPath === 'newsletter' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon
                                                icon={newspaperOutline}/>
                                        </div>
                                        <span>Newsletter</span>
                                    </div>
                                <div onClick={() => gotToPage('/dashboard/contribute', 'contribute')}
                                     className={`more-sheet-item ${currentPath === 'contribute' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={cashOutline}/>
                                        </div>
                                        <span>Contribute</span>
                                    </div>
                                </div>
                        </IonContent>
                    </IonModal>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default DashboardPage;