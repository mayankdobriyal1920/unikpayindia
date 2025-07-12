import React from 'react';
import {
    IonModal,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonLabel,
    IonInput,
    IonItem
} from '@ionic/react';

export default function ApplyProposalModal({ isOpen, onDismiss }) {
    return (
        <IonModal className="sheet_modal_header" isOpen={isOpen} onDidDismiss={onDismiss} breakpoints={[0, 0.5, 0.9]} initialBreakpoint={0.9}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Apply Proposal</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onDismiss}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonLabel>Scope of Work</IonLabel>
                <div className="scope-box">
                    <p>Development of a mobile application</p>
                    <div className="info-row">
                        <span>LOCATION</span>
                        <span>PRICE</span>
                        <span>VALIDITY</span>
                    </div>
                    <div className="info-row">
                        <span>Mumbai</span>
                        <span>₹5,00,000</span>
                        <span>3 months</span>
                    </div>
                </div>

                <IonLabel>Upload Profile</IonLabel>
                <IonItem>
                    <IonButton fill="outline" expand="block">profile.pdf</IonButton>
                </IonItem>

                <IonLabel>Financial Quote (₹)</IonLabel>
                <IonInput placeholder="Enter amount"></IonInput>

                <IonLabel>Upload Additional PDF (Optional)</IonLabel>
                <IonItem>
                    <IonButton fill="outline" expand="block">Upload PDF</IonButton>
                </IonItem>

                <IonButton expand="block" color="primary">Send Proposal</IonButton>
            </IonContent>
        </IonModal>
    );
}
