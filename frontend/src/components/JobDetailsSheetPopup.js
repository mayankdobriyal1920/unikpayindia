import React from 'react';
import {
    IonModal,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonText, IonFooter, IonRow, IonCol
} from '@ionic/react';
import {
    briefcaseOutline,
    locationOutline,
    cashOutline,
    shareSocialOutline,
    arrowBack,
} from 'ionicons/icons';
import JobDetails from "./JobDetails";

export default function JobDetailsSheetPopup({ isOpen, onDidDismiss,jobDetailsData }) {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onDidDismiss}
            initialBreakpoint={1}
            breakpoints={[0, 1]}
            handleBehavior="cycle"
        >
            {(jobDetailsData?.id) ?
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
                                    <span className="job-basic-info-text">{jobDetailsData.company}</span>
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
                        <JobDetails jobDetailsData={jobDetailsData}/>
                    </IonContent>
                    <IonFooter className="job_detail_sheet_footer ion-padding">
                        <IonRow>
                            <IonCol>
                                <IonButton className="close_job_detail_button" expand="block" onClick={onDidDismiss}>Close</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton className="apply_job_button" expand="block">Apply</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonFooter>
                </>:''
            }
        </IonModal>
    );
}
