import React, { useState, useEffect, useRef } from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonMenu,
    IonContent,
} from '@ionic/react';
import {
    searchOutline,
    personOutline,
    menuOutline,
    closeOutline,
    homeOutline,
    briefcaseOutline,
    heartOutline,
    bookOutline
} from 'ionicons/icons';
import appLogo from '../theme/images/logo-big.png';
import {useHistory, useLocation} from "react-router";

const menuItems = [
    { label: 'Home', icon: homeOutline,pathName:'/dashboard/home' },
    { label: 'Jobs', icon: briefcaseOutline ,pathName:'/dashboard/job-portal'},
    { label: 'Matrimonial', icon: heartOutline,pathName:'/dashboard/matrimonial' },
    { label: 'Magazine', icon: bookOutline,pathName:'/dashboard/magazine' },
    { label: 'Contact', icon: personOutline,pathName:'/dashboard/contact' }
];

const HeaderAfterLoginComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const menuRef = useRef(null);
    const {pathname} = useLocation();
    const history = useHistory();

    const goToPage =(page)=>{
        history.replace(page);
        toggleMenu();
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);

        // Setup menu event listeners when component mounts
        const setupMenuListeners = () => {
            const menu = document.querySelector('ion-menu');
            if (menu) {
                menuRef.current = menu;
                menu.addEventListener('ionDidOpen', handleMenuOpen);
                menu.addEventListener('ionDidClose', handleMenuClose);
            }
        };

        const handleMenuOpen = () => setMenuOpen(true);
        const handleMenuClose = () => setMenuOpen(false);

        // Ionic components might not be ready immediately
        const timer = setTimeout(setupMenuListeners, 300);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
            if (menuRef.current) {
                menuRef.current.removeEventListener('ionDidOpen', handleMenuOpen);
                menuRef.current.removeEventListener('ionDidClose', handleMenuClose);
            }
        };
    }, []);

    const toggleMenu = () => {
        const menu = menuRef.current;
        if (menu) {
            menuOpen ? menu.close() : menu.open();
        }
    };

    return (
        <>
            {/* Mobile/Tablet Slide Menu */}
            {isMobile && (
                <IonMenu side="start" menuId="main-menu" contentId="main">
                    <IonContent>
                        <div className="with_login-mobile-menu">
                            {/* Close button at top of menu */}
                            <div className="with_login-menu-item" onClick={toggleMenu}>
                                <IonIcon icon={closeOutline} />
                                <span>Close</span>
                            </div>

                            {menuItems.map((item, index) => (
                                <div onClick={()=>goToPage(item?.pathName)} className="with_login-menu-item" key={index}>
                                    <IonIcon className={"top_header_icon"} icon={item.icon} />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </IonContent>
                </IonMenu>
            )}

            <IonHeader className="with_login-header">
                <IonToolbar className="with_login-toolbar">
                        {isMobile && (
                            <IonButtons slot="start">
                                <IonButton
                                    onClick={toggleMenu}
                                    className={`with_login-menu-button ${menuOpen ? 'open' : ''}`}
                                >
                                    <IonIcon className="top_header_icon" icon={menuOpen ? closeOutline : menuOutline} />
                                </IonButton>
                            </IonButtons>
                        )}

                        {isMobile ? (
                            <IonTitle className="with_login-title">
                                <img src={appLogo} alt="Logo" className="with_login-logo" />
                            </IonTitle>
                            )
                            :(
                            <IonTitle slot="start" className="with_login-title">
                                <img src={appLogo} alt="Logo" className="with_login-logo" />
                            </IonTitle>
                        )}

                        {!isMobile && (
                            <IonButtons slot="start" className="with_login-desktop-menu">
                                {menuItems.map((item, index) => (
                                    <div onClick={()=>goToPage(item?.pathName)} className={`with_login-menu-item ${pathname === item?.pathName ? 'active' : ''}`} key={index}>
                                        <IonIcon className={"top_header_icon"} icon={item.icon}/>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </IonButtons>
                        )}
                        <IonButtons slot="end" className="with_login-icons">
                            <IonButton>
                                <IonIcon icon={searchOutline}/>
                            </IonButton>
                            <IonButton>
                                <IonIcon icon={personOutline}/>
                            </IonButton>
                        </IonButtons>
                </IonToolbar>
            </IonHeader>
        </>
    );
};

export default HeaderAfterLoginComponent;