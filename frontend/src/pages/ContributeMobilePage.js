import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import ContributeCard from "../components/ContributeCard";

export default function ContributeMobilePage() {

    return (
        <IonPage>
            <IonContent
                fullscreen
                className="contribute-content page-content">
                <div className="mobile-contain-contribute">
                    <ContributeCard/>
                </div>
            </IonContent>
        </IonPage>
    );
}
