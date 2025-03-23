import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";

export default function DashboardPage(){
    return(
        <IonPage>
            <IonHeader>Dashboard Header</IonHeader>
            <IonContent fullscreen>
                Dash board page
            </IonContent>
        </IonPage>
    )
}