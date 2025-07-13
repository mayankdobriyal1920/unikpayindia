import React from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

export default function MembershipMobilePage({ handleScroll }) {

    const handleJoin = (type) => {
        console.log(`Joining as: ${type}`);
        // Integrate payment flow here
    };

    return (
        <IonPage>
            <IonContent
                fullscreen
                scrollEvents={true}
                onIonScroll={handleScroll}
                className="membership-content page-content"
            >
                <div className="mobile-contain-membership">
                    <h1 className="membership-title">Become a Member</h1>
                    <p className="membership-description">
                        Join us as a Life or Annual Member and support our mission. Contributions are subject to GST.
                    </p>

                    <IonCard className="membership-card">
                        <IonCardHeader>
                            <IonCardTitle>Life Member</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p className="membership-amount">₹25,000 + GST</p>
                            <IonButton expand="block" className="join-now-button" onClick={() => handleJoin('Life Member')}>
                                Join Now
                            </IonButton>
                        </IonCardContent>
                    </IonCard>

                    <IonCard className="membership-card">
                        <IonCardHeader>
                            <IonCardTitle>Annual Member</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p className="membership-amount">₹5,000 + GST</p>
                            <IonButton expand="block" className="join-now-button" onClick={() => handleJoin('Annual Member')}>
                                Join Now
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
}
