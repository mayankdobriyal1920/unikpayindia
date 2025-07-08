import React, { useState, useEffect, useRef } from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonMenu,
    IonContent, IonRow, IonCol, useIonAlert,
} from '@ionic/react';
import {
    searchOutline,
    menuOutline,
    closeOutline,
    homeSharp,
    briefcaseSharp,
    heartSharp,
    bookSharp,
    personSharp,
    settingsSharp,
    phonePortraitSharp,
    notificationsSharp,
} from 'ionicons/icons';
import appLogo from '../theme/images/logo-big.png';
import {useHistory, useLocation} from "react-router";
import {useDispatch} from "react-redux";
import {actionToLogoutUserSession} from "../redux/CommonAction";
import userInitialImg from '../theme/images/user_initial.png';


const menuItems = [
    { label: 'Home', icon: homeSharp,pathName:'/dashboard/home' },
    { label: 'Jobs', icon: briefcaseSharp ,pathName:'/dashboard/job-portal'},
    { label: 'Matrimonial', icon: heartSharp,pathName:'/dashboard/matrimonial' },
    { label: 'Magazine', icon: bookSharp,pathName:'/dashboard/magazine' },
    { label: 'Contact', icon: phonePortraitSharp,pathName:'/dashboard/contact' },
    { label: 'Settings', icon: settingsSharp,pathName:'/dashboard/contact' },
    { label: 'Profile', icon: personSharp,pathName:'/dashboard/contact' },
];

const HeaderAfterLoginComponent = ({pageId,hideHeader}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const menuRef = useRef(null);
    const {pathname} = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [presentAlert] = useIonAlert();

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

    const callFunctionToLogoutUser = ()=>{
        presentAlert({
            header: 'Confirm Logout',
            cssClass:"confirm_alert_custom",
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Yes',
                    handler: () => {
                        dispatch(actionToLogoutUserSession())
                    },
                },
            ],
        });
    }

    return (
        <>
            {/* Mobile/Tablet Slide Menu */}
            {isMobile && (
                <IonMenu side="start" menuId="main-menu" contentId={pageId}>
                    <IonContent>
                        <div className="with_login-mobile-menu">
                            {/* Close button at top of menu */}
                            <div className="with_login-menu-item">
                                <IonRow className={"with_login-menu-item-header-row"}>
                                    <IonCol size="3">
                                        <div className={"user_prof_initial"}>
                                            <div className={"user_name_initial"}>
                                                <img
                                                    src={userInitialImg}  // Replace with your user profile URL
                                                    alt="User Avatar"
                                                    className="avatar-img"
                                                />
                                            </div>
                                        </div>
                                    </IonCol>
                                    <IonCol size="8">
                                        <div className={"user_full_info"}>
                                            <div className="user_full_name">Mayank Dobriyal</div>
                                            <div className="user_full_email">mayankdobriyal1920@gmail.com</div>
                                            <div className="user_full_contact">+91-7017935899</div>
                                        </div>
                                    </IonCol>
                                    <IonCol size="1">
                                        <div className={"close_header_menu"}>
                                            <IonIcon onClick={toggleMenu} icon={closeOutline}/>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </div>

                            {menuItems.map((item, index) => (
                                <div onClick={() => goToPage(item?.pathName)}
                                     className={`with_login-menu-item menu-names ${pathname === item?.pathName ? 'active' : ''}`} key={index}>
                                    <IonIcon className={"top_header_icon"} icon={item.icon}/>
                                    <span>{item.label}</span>
                                </div>
                            ))}

                            <div className="with_login-menu-item available_on_menu">
                                <div>Also available on</div>
                                <IonRow className="available_on_menu_row">
                                    <IonCol size="2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px"
                                             viewBox="-1.5 0 20 20" version="1.1">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
                                               fillRule="evenodd">
                                                <g id="Dribbble-Light-Preview"
                                                   transform="translate(-102.000000, -7439.000000)" fill="#4d4d4d">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path
                                                            d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                                                            id="apple-[#173]">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </IonCol>

                                    <IonCol size="2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px"
                                             viewBox="0 0 24 24" fill="none">
                                            <g id="style=fill">
                                                <g id="web">
                                                    <g id="Vector">
                                                        <path
                                                            d="M15.3222 10.383C15.3796 10.9457 15.4125 11.4903 15.4125 12C15.4125 12.9541 15.2972 14.0315 15.1208 15.1208C14.0315 15.2972 12.9541 15.4125 12 15.4125C11.0502 15.4125 9.97313 15.2975 8.87911 15.1205C8.70281 14.0312 8.5875 12.954 8.5875 12C8.5875 11.4905 8.62039 10.9458 8.67789 10.383C9.82608 10.5668 10.9715 10.6875 12 10.6875C13.0286 10.6875 14.174 10.5668 15.3222 10.383Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M16.8752 10.0994C16.9462 10.7579 16.9875 11.399 16.9875 12C16.9875 12.8769 16.8997 13.8389 16.7599 14.8153C18.7425 14.4016 20.575 13.8731 21.5567 13.5722C21.8739 13.475 21.9986 13.4363 22.1658 13.3694C22.2494 13.336 22.326 13.302 22.4259 13.2543C22.4748 12.843 22.5 12.4244 22.5 12C22.5 10.878 22.324 9.79714 21.9982 8.78346L21.9133 8.81017C20.8868 9.12245 18.9652 9.6745 16.8752 10.0994Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M21.4017 7.31948C20.3698 7.63221 18.579 8.14039 16.6599 8.53603C16.2178 5.84926 15.443 3.16951 15.0702 1.95598C17.8422 2.80227 20.1273 4.76467 21.4017 7.31948Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M15.1117 8.82229C14.0253 8.99781 12.9513 9.1125 12 9.1125C11.0487 9.1125 9.97477 8.99781 8.88843 8.8223C9.30471 6.28005 10.0478 3.68306 10.4278 2.44333C10.525 2.12606 10.5637 2.00144 10.6306 1.83418C10.664 1.75062 10.698 1.67398 10.7457 1.57414C11.157 1.52518 11.5756 1.5 12 1.5C12.4434 1.5 12.8803 1.52748 13.3093 1.58083C13.3184 1.61564 13.3268 1.64679 13.3351 1.67626C13.3597 1.76333 13.3982 1.8857 13.4628 2.09104L13.4696 2.11261C13.7935 3.14223 14.6519 6.01401 15.1117 8.82229Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M7.34004 8.536C7.7801 5.86107 8.54986 3.19576 8.92192 1.98181L8.92983 1.95597C6.15777 2.80225 3.8727 4.76465 2.59835 7.31946C3.63018 7.63219 5.42095 8.14036 7.34004 8.536Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M2.00184 8.78345C1.67598 9.79714 1.5 10.878 1.5 12C1.5 12.4389 1.52693 12.8715 1.57923 13.2963L1.74471 13.3515L1.74603 13.3519L1.74765 13.3525L1.74879 13.3528C1.80205 13.3705 3.36305 13.886 5.41878 14.3975C5.99886 14.5418 6.61307 14.6844 7.24006 14.8151C7.10025 13.8388 7.0125 12.8769 7.0125 12C7.0125 11.3988 7.05374 10.7577 7.12472 10.0994C5.03428 9.67436 3.11218 9.12212 2.08597 8.80989L2.07883 8.80771L2.00184 8.78345Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M12 16.9875C12.8769 16.9875 13.8389 16.8997 14.8153 16.7599C14.4016 18.7425 13.8731 20.575 13.5722 21.5566C13.475 21.8739 13.4363 21.9985 13.3694 22.1658C13.336 22.2494 13.302 22.326 13.2543 22.4259C12.843 22.4748 12.4244 22.5 12 22.5C11.5756 22.5 11.157 22.4748 10.7457 22.4259C10.698 22.326 10.664 22.2494 10.6306 22.1658C10.5637 21.9986 10.525 21.8739 10.4278 21.5567C10.1269 20.5751 9.59846 18.7427 9.18478 16.7603C10.1579 16.8996 11.1201 16.9875 12 16.9875Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M5.0385 15.9259C3.73853 15.6024 2.63135 15.2775 1.95597 15.0702C2.97258 18.4002 5.59982 21.0274 8.92983 22.044L8.92192 22.0182C8.59705 20.9582 7.96897 18.7917 7.52191 16.4784C6.6525 16.3103 5.80722 16.1171 5.0385 15.9259Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M22.0182 15.0781C20.9582 15.403 18.7915 16.0311 16.4781 16.4781C16.0311 18.7915 15.403 20.9581 15.0781 22.0182L15.0702 22.044C18.4002 21.0274 21.0274 18.4002 22.044 15.0702L22.0182 15.0781Z"
                                                            fill="#4d4d4d"/>
                                                        <path
                                                            d="M1.6103 13.323C1.64665 13.3277 1.67628 13.3327 1.68611 13.3349C1.69472 13.337 1.70821 13.3406 1.7131 13.3419L1.72391 13.345L1.72973 13.3468L1.73585 13.3487L1.74098 13.3503C1.7381 13.3494 1.67976 13.3348 1.6103 13.323Z"
                                                            fill="#4d4d4d"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </IonCol>
                                </IonRow>
                            </div>
                            <div className="with_login-menu-item version_no_section">
                                <div className={"version_no_section"}>Version 0.0.1</div>
                            </div>

                            <div className="with_login-menu-item logout_button_section">
                                <IonButton className="logout_button_menu" onClick={()=>callFunctionToLogoutUser()}>Logout</IonButton>
                            </div>
                        </div>
                    </IonContent>
                </IonMenu>
            )}

            <IonHeader className={`with_login-header ${hideHeader ? 'hide_element' : ''}`}>
                <IonToolbar className="with_login-toolbar">
                    {isMobile && (
                        <IonButtons slot="start">
                            <IonButton
                                onClick={toggleMenu}
                                className={`with_login-menu-button ${menuOpen ? 'open' : ''}`}
                            >
                                <div className="profile-avatar">
                                    <img
                                        src={userInitialImg}  // Replace with your user profile URL
                                        alt="User Avatar"
                                        className="avatar-img"
                                    />
                                    <IonIcon icon={menuOutline} className="avatar-icon"/>
                                </div>
                            </IonButton>
                        </IonButtons>
                    )}

                    {isMobile ? (
                            <div className="sudo_search_div_place_holder_search">
                            <IonIcon icon={searchOutline}/>
                                Search...
                            </div>
                        )
                        : (
                            <IonTitle slot="start" className="with_login-title">
                                <img src={appLogo} alt="Logo" className="with_login-logo"/>
                            </IonTitle>
                        )}

                    {!isMobile && (
                        <IonButtons slot="start" className="with_login-desktop-menu">
                            {menuItems.map((item, index) => (
                                <div onClick={() => goToPage(item?.pathName)}
                                     className={`with_login-menu-item ${pathname === item?.pathName ? 'active' : ''}`}
                                     key={index}>
                                    <IonIcon className={"top_header_icon"} icon={item.icon}/>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </IonButtons>
                    )}
                    <IonButtons slot="end" className="with_login-icons">
                        {!isMobile ? (
                            <IonButton className="header_button">
                                <IonIcon icon={searchOutline}/>
                            </IonButton>
                            ):''
                        }
                        <IonButton className="header_button">
                            <div className="notification-icon">
                                <IonIcon icon={notificationsSharp} />
                                <span className="notification-badge">3</span>  {/* Replace 3 with your dynamic count */}
                            </div>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        </>
    );
};

export default HeaderAfterLoginComponent;