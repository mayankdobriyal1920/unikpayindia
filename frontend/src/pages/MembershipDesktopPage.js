import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import MemberShipCard from "../components/MemberShipCard";

export default function MembershipDesktopPage() {

    return (
        <IonPage>
            <IonContent
                fullscreen
                className="membership-content page-content"
            >
                <div className="desktop-contain-membership">
                    <MemberShipCard/>
                </div>
            </IonContent>
        </IonPage>
    );
}
