import React from 'react';
import { IonContent, IonPage } from "@ionic/react";

export default function NewsletterDesktopPage() {
    return (
        <IonPage>
            <IonContent fullscreen className="page-content">
                <div className="content-area">
                    <h1>Welcome to MagazineDesktopPage</h1>
                    <p>Your content here</p>
                </div>
            </IonContent>
        </IonPage>
    )
}