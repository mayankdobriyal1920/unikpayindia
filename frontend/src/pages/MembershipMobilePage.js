import React from 'react';
import {IonPage, IonContent} from '@ionic/react';

export default function MembershipMobilePage({handleScroll}) {
    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll} className="membership-content page-content">
                <div className="mobile-contain-membership">

                </div>
            </IonContent>
        </IonPage>
    );
}
