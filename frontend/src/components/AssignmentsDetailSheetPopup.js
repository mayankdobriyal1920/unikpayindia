import React from 'react';
import {
    IonModal,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonIcon,
    IonFooter, IonRow, IonCol
} from '@ionic/react';
import {
    shareSocialOutline,
    arrowBack,
} from 'ionicons/icons';
import AssignmentDetail from "./AssignmentDetail";

export default function AssignmentsDetailSheetPopup({ isOpen, onDidDismiss,assignmentDetail }) {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onDidDismiss}
            initialBreakpoint={1}
            breakpoints={[0, 1]}
            handleBehavior="cycle"
        >
            {(assignmentDetail?.id) ?
                <>
                    <IonHeader className="job_detail_sheet_header sheet_modal_header">
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton className={"close_job_post_button"} onClick={onDidDismiss}>
                                    <IonIcon icon={arrowBack}/>
                                </IonButton>
                            </IonButtons>
                            <div className="job_detail_sheet_header_text">
                                <div className="job-basic-info-image">
                                    <span className="job-basic-info-text">{assignmentDetail.title}</span>
                                </div>
                            </div>
                            <IonButtons slot="end">
                                <IonButton className={"share_job_post_button"}>
                                    <IonIcon icon={shareSocialOutline}/>
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding job_detail_sheet_content">
                        <AssignmentDetail assignmentDetail={assignmentDetail}/>
                    </IonContent>
                    <IonFooter className="job_detail_sheet_footer ion-padding">
                        <IonRow>
                            <IonCol>
                                <IonButton className="close_job_detail_button" expand="block" onClick={onDidDismiss}>Close</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton className="apply_job_button" expand="block">Contact</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonFooter>
                </>:''
            }
        </IonModal>
    );
}
