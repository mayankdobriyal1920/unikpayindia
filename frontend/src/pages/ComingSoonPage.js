import React from "react";
import {IonContent, IonHeader, IonIcon, IonPage} from "@ionic/react";
import {arrowBack} from "ionicons/icons";
import {useHistory} from "react-router";

export default function ComingSoonPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
        window.history.back();
    }

    return (
        <IonPage  className={"home_welcome_page_container"}>
            <IonHeader>
                <div className={"content-getbet content"}>
                    <div className="navbar">
                        <div className="navbar-fixed">
                            <div className="navbar__content">
                                <div onClick={goBack} className="navbar__content-left">
                                    <IonIcon icon={arrowBack} style={{ color: "#ffffff",width: "24px",height: "24px" }} />
                                </div>
                                <div className="navbar__content-center">
                                    <div className="navbar__content-title">
                                        <span>Coming soon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonHeader>
            <IonContent className={"content-theme-off-white-bg-color"}>
                <div className={"bet-content__box"}>
                    <div className={"infiniteScroll"}>
                        <div className={"infiniteScroll__loading"}>
                            <div className={"empty__container empty"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className={"svg-icon icon-empty"}
                                     fill="rgb(136, 136, 136)" version="1.1" id="XMLID_103_"
                                     viewBox="0 0 24 24">
                                        <g id="in-progress">
                                            <g>
                                                <path
                                                    d="M23,24H1v-2h2.4c-1.6-5,1.6-7,3.7-8.4C8,13,8.9,12.5,8.9,12S8,10.9,7.1,10.4C5,9,1.8,7.1,3.4,2H1V0h22v2h-2.4    c1.6,5-1.6,7-3.7,8.4c-1,0.5-1.9,1.1-1.9,1.6s0.9,1.1,1.8,1.6c2.1,1.4,5.3,3.4,3.7,8.4H23V24z M5.6,22h12.8c1.6-4-0.5-5.3-2.6-6.7    C14.4,14.5,13,13.6,13,12c0-1.6,1.4-2.5,2.8-3.3C17.9,7.3,20,6,18.4,2H5.6C4,6,6.1,7.3,8.2,8.7C9.6,9.5,11,10.4,11,12    c0,1.6-1.4,2.5-2.8,3.3C6.1,16.7,4,18,5.6,22z"/>
                                            </g>
                                            <g>
                                                <path
                                                    d="M16.8,23H7c-0.3-1.5,0.2-2.4,2.3-4.3c0.8-0.7,1.8-1.5,2.7-2.8c1,1.2,2,2.1,2.7,2.8C16.8,20.7,17.3,21,16.8,23z"/>
                                            </g>
                                            <g>
                                                <path
                                                    d="M9.4,6c-0.7,1.3-0.7,1.3,0.9,2.1c0.5,0.2,1.1,0.5,1.6,0.9c0.5-0.4,1.2-0.7,1.6-0.9c1.7-0.8,1.7-0.8,1-2.1"/>
                                            </g>
                                        </g>
                                        </svg>
                                <p>Work in progress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
