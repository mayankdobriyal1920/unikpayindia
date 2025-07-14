import React, {useEffect, useState,useRef} from 'react';
import {
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel, IonTabs, IonPage, IonModal, IonContent
} from '@ionic/react';
import {Route, Redirect,useLocation } from 'react-router-dom';


import HomeDesktopPage from './HomeDesktopPage';
import JobPortalMobilePage from './JobPortalMobilePage';
import MatrimonialMobilePage from './MatrimonialMobilePage';
import NewsletterMobilePage from './NewsletterMobilePage';
import {
    briefcaseOutline,
    briefcaseSharp, calendarOutline, calendarSharp, cashOutline, cashSharp,
    clipboardOutline,
    clipboardSharp,
    ellipsisHorizontalSharp,
    heartOutline,
    heartSharp,
    homeOutline,
    homeSharp, newspaperOutline, newspaperSharp
} from "ionicons/icons";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
import JobPortalDesktopPage from "./JobPortalDesktopPage";
import HomeMobilePage from "./HomeMobilePage";
import MatrimonialDesktopPage from "./MatrimonialDesktopPage";
import NewsletterDesktopPage from "./NewsletterDesktopPage";
import AssignmentMobilePage from "./AssignmentMobilePage";
import AssignmentDesktopPage from "./AssignmentDesktopPage";
import {useHistory} from "react-router-dom";
import EventsDesktopPage from "./EventsDesktopPage";
import EventsMobilePage from "./EventsMobilePage";
import ContributeDesktopPage from "./ContributeDesktopPage";
import ContributeMobilePage from "./ContributeMobilePage";
import MembershipDesktopPage from "./MembershipDesktopPage";
import MembershipMobilePage from "./MembershipMobilePage";

const DashboardPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [currentPath,setCurrentPath] = useState('/dashboard/home')
    const lastScrollTop = useRef(0);
    const [hideHeader, setHideHeader] = useState(false);
    const [showMoreSheet, setShowMoreSheet] = useState(false);
    const history = useHistory();
    const menuRef = useRef(null);
    const {pathname} = useLocation();

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

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
        } else {
            // Scrolling up
            setHideHeader(false);
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
        setHideHeader(false);
        closeMenu();
    }

    const callFunctionToSetCurrentPath = (path) =>{
        setCurrentPath(path);
        setShowMoreSheet(false);
        setHideHeader(false);
        closeMenu();
    }

    const closeMenu = () => {
        const menu = menuRef.current;
        if (menu) {
            menu.close()
        }
    };

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/dashboard/" render={() => (
                    <IonPage>
                        {/* Common header always visible */}
                        <HeaderAfterLoginComponent menuRef={menuRef} currentPath={currentPath} setCurrentPath={setCurrentPath} hideHeader={hideHeader} pageId={"main-menu-content"} />
                        {/* Nested outlet for tab pages */}
                        <IonRouterOutlet id="main-menu-content">
                            <Route exact path="/dashboard/home" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <HomeMobilePage />
                                        :
                                        <HomeDesktopPage handleScroll={handleScroll} />
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
                                        <MatrimonialMobilePage handleScroll={handleScroll} />
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

                            <Route exact path="/dashboard/newsletter" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <NewsletterMobilePage handleScroll={handleScroll} />
                                        :
                                        <NewsletterDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />

                            <Route exact path="/dashboard/events" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <EventsMobilePage handleScroll={handleScroll} />
                                        :
                                        <EventsDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />

                            <Route exact path="/dashboard/contribute" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <ContributeMobilePage handleScroll={handleScroll} />
                                        :
                                        <ContributeDesktopPage handleScroll={handleScroll} />
                                    }
                                </>
                            )} />

                            <Route exact path="/dashboard/membership" render={()=>(
                                <>
                                    {(isMobile) ?
                                        <MembershipMobilePage handleScroll={handleScroll} />
                                        :
                                        <MembershipDesktopPage handleScroll={handleScroll} />
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
                className={`custom-tabbar main-tab-bar`}
            >
                <IonTabButton tab="home" className={"custom-ripple-color"} onClick={()=>callFunctionToSetCurrentPath('/dashboard/home')} href="/dashboard/home">
                    <IonIcon icon={currentPath === '/dashboard/home' ? homeSharp : homeOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="job" className={"custom-ripple-color"} onClick={()=>callFunctionToSetCurrentPath('/dashboard/job-portal')} href="/dashboard/job-portal">
                    <IonIcon icon={currentPath === '/dashboard/job-portal' ? briefcaseSharp : briefcaseOutline} />
                    <IonLabel>Job</IonLabel>
                </IonTabButton>

                <IonTabButton tab="assignments" className={"custom-ripple-color"} onClick={()=>callFunctionToSetCurrentPath('/dashboard/assignments')} href="/dashboard/assignments">
                    <IonIcon icon={currentPath === '/dashboard/assignments' ? clipboardSharp : clipboardOutline} />
                    <IonLabel>Assignments</IonLabel>
                </IonTabButton>

                <IonTabButton tab="more" className={`custom-ripple-color ${(currentPath === '/dashboard/matrimonial' || currentPath === '/dashboard/events' || currentPath === '/dashboard/newsletter' || currentPath === '/dashboard/contribute') ? 'tab-selected' : ''}`} onClick={()=> callFunctionToOpenShowMoreSheet()}>
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
                                <div onClick={() => gotToPage('/dashboard/matrimonial', '/dashboard/matrimonial')}
                                     className={`more-sheet-item ${currentPath === '/dashboard/matrimonial' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={currentPath === '/dashboard/matrimonial' ? heartSharp: heartOutline}/>
                                        </div>
                                        <span>Matrimonial</span>
                                    </div>
                                <div onClick={() => gotToPage('/dashboard/events', '/dashboard/events')}
                                     className={`more-sheet-item ${currentPath === '/dashboard/events' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={currentPath === '/dashboard/events' ? calendarSharp: calendarOutline}/>
                                        </div>
                                        <span>Events</span>
                                    </div>
                                <div onClick={() => gotToPage('/dashboard/newsletter', '/dashboard/newsletter')}
                                     className={`more-sheet-item ${currentPath === '/dashboard/newsletter' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={currentPath === '/dashboard/newsletter' ? newspaperSharp: newspaperOutline}/>
                                        </div>
                                        <span>Newsletter</span>
                                    </div>
                                <div onClick={() => gotToPage('/dashboard/contribute', '/dashboard/contribute')}
                                     className={`more-sheet-item ${currentPath === '/dashboard/contribute' ? 'active' : ''}`}>
                                        <div className="more-tile">
                                            <IonIcon icon={currentPath === '/dashboard/contribute' ? cashSharp : cashOutline}/>
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