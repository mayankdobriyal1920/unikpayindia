import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";

export default function DemoPage(){
    return(
        <IonPage style={{display: 'none'}}>
            <IonHeader>Dashboard Header</IonHeader>
            <IonContent fullscreen>
                Dash board page
            </IonContent>
        </IonPage>
    )
}