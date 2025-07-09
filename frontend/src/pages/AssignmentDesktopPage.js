import React from 'react';
import {IonContent, IonPage} from "@ionic/react";

export default function AssignmentDesktopPage({handleScroll}){
    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll} className="job-portal-desktop page-content">
            </IonContent>
        </IonPage>
    )
}