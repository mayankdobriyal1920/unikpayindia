import React from 'react';
import { IonContent, IonPage } from "@ionic/react";

export default function HomePage() {
    return (
        <IonPage>
            <IonContent fullscreen className="page-content">
                <div className="content-area">
                    <h1>Welcome to HomePage</h1>
                    <p>Your content here</p>
                </div>
            </IonContent>
        </IonPage>
    )
}