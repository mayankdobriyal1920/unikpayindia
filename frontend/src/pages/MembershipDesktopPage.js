import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import MemberShipCard from "../components/MemberShipCard";

export default function MembershipDesktopPage({ handleScroll }) {

    return (
        <IonPage>
            <IonContent
                fullscreen
                scrollEvents={true}
                onIonScroll={handleScroll}
                className="membership-content page-content"
            >
                <div className="desktop-contain-membership">
                    <MemberShipCard/>
                </div>
            </IonContent>
        </IonPage>
    );
}
