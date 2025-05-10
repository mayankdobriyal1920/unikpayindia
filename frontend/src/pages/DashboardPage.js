import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function DashboardPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>
            <IonContent fullscreen>
                Dashboard
            </IonContent>
        </IonPage>
    )
}