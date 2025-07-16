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
    IonItem, IonFooter, IonRow, IonCol,
} from '@ionic/react';

export default function RaiseRFPModal({ isOpen, onDismiss }) {
    const [rfpType, setRfpType] = useState('Assignment');

    return (
        <IonModal className="sheet_modal_header" isOpen={isOpen} onDidDismiss={onDismiss} breakpoints={[0, 1]}
                  initialBreakpoint={1}>
            <IonHeader className="job_detail_sheet_header sheet_modal_header">
                <IonToolbar>
                    <IonTitle>Raise RFP</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding bottom-2">
                <IonLabel className={"size-2"}>RFP Type</IonLabel>
                <div className="rfp-type-toggle">
                    <button className={`rfp-type-toggle-btn ${rfpType === 'Retainership' ? 'active' : ''}`}
                            onClick={() => setRfpType('Retainership')}>Retainership
                    </button>
                    <button className={`rfp-type-toggle-btn  ${rfpType === 'Assignment' ? 'active' : ''}`}
                            onClick={() => setRfpType('Assignment')}>Assignment
                    </button>
                </div>

                <div className={"rfp_submit_form_item"}>
                    <IonLabel>Scope of Work</IonLabel>
                    <IonTextarea className={"rfp_form_input"} placeholder="Please describe the scope of work..."
                                 rows={3}
                                 maxlength={1000}></IonTextarea>
                </div>

                <div className={"rfp_submit_form_item"}>
                    <IonLabel>Location</IonLabel>
                    <IonInput className={"rfp_form_input"} placeholder="Enter location"></IonInput>
                </div>
                <div className={"rfp_submit_form_item"}>

                    <IonLabel>Minimum Price Offered</IonLabel>
                    <IonItem className={"ion-no-padding ion-margin-bottom"}>
                        <IonButton className={"attach-pdf"} fill="outline" expand="block">Attach PDF</IonButton>
                    </IonItem>
                </div>
                <div className={"rfp_submit_form_item"}>
                    <IonLabel>Email ID</IonLabel>
                    <IonInput type="email" className={"rfp_form_input"} placeholder="Enter email"></IonInput>
                </div>
                <div className={"rfp_submit_form_item"}>
                    <div className="validity-text">RFP valid for 15 days</div>
                </div>
            </IonContent>
            <IonFooter className="job_detail_sheet_footer ion-padding">
                <IonRow>
                    <IonCol>
                        <IonButton className="close_job_detail_button" expand="block" onClick={onDismiss}>Close</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton className="apply_job_button" expand="block">Submit</IonButton>
                    </IonCol>
                </IonRow>
            </IonFooter>
        </IonModal>
    );
}
