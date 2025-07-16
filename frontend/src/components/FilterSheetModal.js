// FilterSheetModal.tsx
import React from 'react';
import {
    IonModal,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonList,
    IonItem,
    IonCheckbox,
    IonLabel, IonRow, IonCol, IonFooter,
} from '@ionic/react';

export default function FilterSheetModal({ isOpen, onDidDismiss }) {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onDidDismiss}
            initialBreakpoint={1}
            breakpoints={[0, 1]}
            handleBehavior="cycle"
        >
            <IonHeader className="filter_sheet_header sheet_modal_header">
                <IonToolbar>
                    <IonTitle className="filter_sheet_header_text">Filter jobs</IonTitle>
                    <IonButtons slot="end">
                        <IonButton  className="filter_sheet_clear_all_btn">Clear all</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className="filter-content">
                    <div className="filter-menu">
                        <IonList>
                            {[
                                "Work mode",
                                "Department",
                                "Experience",
                                "Salary",
                                "Top Companies",
                                "Industry",
                                "Role",
                                "Education",
                                "Posted by",
                                "Location",
                                "Freshness",
                                "Sort By",
                            ].map((item, i) => (
                                <IonItem className={"filter_item_sheet_panel"} key={i} button lines="none">
                                    {item}
                                </IonItem>
                            ))}
                        </IonList>
                    </div>

                    <div className="filter-options">
                        <IonList>
                            <IonItem className={"filter_item_sheet_panel"}>
                                <IonCheckbox slot="start" />
                                <IonLabel>Work from office</IonLabel>
                                <div className="option-count">10,269</div>
                            </IonItem>
                            <IonItem className={"filter_item_sheet_panel"}>
                                <IonCheckbox slot="start" />
                                <IonLabel>Hybrid</IonLabel>
                                <div className="option-count">205</div>
                            </IonItem>
                            <IonItem className={"filter_item_sheet_panel"}>
                                <IonCheckbox slot="start" />
                                <IonLabel>Remote</IonLabel>
                                <div className="option-count">108</div>
                            </IonItem>
                            <IonItem className={"filter_item_sheet_panel"}>
                                <IonCheckbox slot="start" />
                                <IonLabel>Temp. WFH due to covid</IonLabel>
                                <div className="option-count">9</div>
                            </IonItem>
                        </IonList>
                    </div>
                </div>
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
        </IonModal>
    );
}
