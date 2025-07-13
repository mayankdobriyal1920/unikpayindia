import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import ContributeCard from "../components/ContributeCard";

export default function ContributeDesktopPage() {

    return (
        <IonPage>
            <IonContent
                fullscreen
                className="contribute-content page-content">
                <div className="desktop-contain-contribute">
                    <ContributeCard/>
                </div>
            </IonContent>
        </IonPage>
    );
}
