import React from 'react';
import { IonContent, IonPage } from "@ionic/react";

export default function MagazinePage() {
    return (
        <IonPage>
            <IonContent fullscreen className="page-content">
                <div className="content-area">
                    <h1>Welcome to MagazinePage</h1>
                    <p>Your content here</p>
                </div>
            </IonContent>
        </IonPage>
    )
}