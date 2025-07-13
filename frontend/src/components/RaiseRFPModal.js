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
        <IonModal className="sheet_modal_header" isOpen={isOpen} onDidDismiss={onDismiss} breakpoints={[0, 0.9]} initialBreakpoint={0.9}>
            <IonHeader className="job_detail_sheet_header sheet_modal_header">
                <IonToolbar>
                    <IonTitle>Raise RFP</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onDismiss}><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path  d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#080341"/>
                        </svg></IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding bottom-2">
                <IonLabel className={"size-2"}>RFP Type</IonLabel>
                <div className="rfp-type-toggle">
                    <button className={rfpType === 'Retainership' ? 'active' : ''} onClick={() => setRfpType('Retainership')}>Retainership</button>
                    <button className={rfpType === 'Assignment' ? 'active' : ''} onClick={() => setRfpType('Assignment')}>Assignment</button>
                </div>

                <IonLabel>Scope of Work</IonLabel>
                <IonTextarea className={"ion-padding-bottom"} placeholder="Please describe the scope of work..." rows={3} maxlength={1000}></IonTextarea>

                <IonLabel>Location</IonLabel>
                <IonInput className={"ion-margin-bottom"} placeholder="Enter location"></IonInput>

                <IonLabel>Minimum Price Offered</IonLabel>
                <IonItem className={"ion-no-padding ion-margin-bottom"}>
                    <IonButton className={"attach-pdf"} fill="outline" expand="block">Attach PDF</IonButton>
                </IonItem>

                <IonLabel>Email ID</IonLabel>
                <IonInput type="email" placeholder="Enter email"></IonInput>

                <div className="validity-text">RFP valid for 15 days</div>

                <IonButton expand="block" className="submit-btn">Submit RFP</IonButton>
            </IonContent>
        </IonModal>
    );
}
