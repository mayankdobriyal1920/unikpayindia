import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import MemberShipCard from "../components/MemberShipCard";

export default function MembershipMobilePage() {

    return (
        <IonPage>
            <IonContent
                fullscreen
                className="membership-content page-content"
            >
                <div className="mobile-contain-membership">
                    <MemberShipCard/>
                </div>
            </IonContent>
        </IonPage>
    );
}
