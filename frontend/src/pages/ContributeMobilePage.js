import React from 'react';
import {IonPage, IonContent} from '@ionic/react';

export default function ContributeMobilePage({handleScroll}) {
    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll} className="contribute-content page-content">
                <div className="mobile-contain-contribute">

                </div>
            </IonContent>
        </IonPage>
    );
}
