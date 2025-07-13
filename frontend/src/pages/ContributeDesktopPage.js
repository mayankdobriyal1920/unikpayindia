import React from 'react';
import {IonPage, IonContent} from '@ionic/react';

export default function ContributeDesktopPage({handleScroll}) {
    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll} className="contribute-content page-content">
                <div className="desktop-contain-contribute">

                </div>
            </IonContent>
        </IonPage>
    );
}
