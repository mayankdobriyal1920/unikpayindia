import React, { useState } from 'react';
import {
    IonModal,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonTextarea,
    IonInput,
    IonLabel,
    IonItem,
} from '@ionic/react';

export default function RaiseRFPModal({ isOpen, onDismiss }) {
    const [rfpType, setRfpType] = useState('Assignment');

    return (
        <IonModal className="sheet_modal_header" isOpen={isOpen} onDidDismiss={onDismiss} breakpoints={[0, 0.5, 0.9]} initialBreakpoint={0.9}>
            <IonHeader className="job_detail_sheet_header sheet_modal_header">
                <IonToolbar>
                    <IonTitle>Raise RFP</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onDismiss}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonLabel>RFP Type</IonLabel>
                <div className="rfp-type-toggle">
                    <button className={rfpType === 'Retainership' ? 'active' : ''} onClick={() => setRfpType('Retainership')}>Retainership</button>
                    <button className={rfpType === 'Assignment' ? 'active' : ''} onClick={() => setRfpType('Assignment')}>Assignment</button>
                </div>

                <IonLabel>Scope of Work</IonLabel>
                <IonTextarea placeholder="Please describe the scope of work..." rows={6} maxlength={1000}></IonTextarea>

                <IonLabel>Location</IonLabel>
                <IonInput placeholder="Enter location"></IonInput>

                <IonLabel>Minimum Price Offered</IonLabel>
                <IonItem>
                    <IonButton fill="outline" expand="block">Attach PDF</IonButton>
                </IonItem>

                <IonLabel>Email ID</IonLabel>
                <IonInput type="email" placeholder="Enter email"></IonInput>

                <div className="validity-text">RFP valid for 15 days</div>

                <IonButton expand="block" className="submit-btn">Submit RFP</IonButton>
            </IonContent>
        </IonModal>
    );
}
