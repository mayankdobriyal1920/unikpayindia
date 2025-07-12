// MatrimonialFilterSheetModal.tsx
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
    IonLabel,
} from '@ionic/react';

export default function MatrimonialFilterSheetModal({ isOpen, onDidDismiss }) {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onDidDismiss}
            initialBreakpoint={0.85}
            breakpoints={[0, 0.85, 1]}
            handleBehavior="cycle"
        >
            <IonHeader className="filter_sheet_header sheet_modal_header">
                <IonToolbar>
                    <IonTitle className="filter_sheet_header_text">Filter Matches</IonTitle>
                    <IonButtons slot="end">
                        <IonButton className="filter_sheet_clear_all_btn">Clear all</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className="filter-content">
                    <div className="filter-menu">
                        <IonList>
                            {[
                                "Religion",
                                "Caste",
                                "Community",
                                "Age Range",
                                "Education",
                                "Profession",
                                "Location",
                                "Marital Status",
                                "Height Range",
                                "Manglik",
                                "Language",
                                "Sort By",
                            ].map((item, i) => (
                                <IonItem className="filter_item_sheet_panel" key={i} button lines="none">
                                    {item}
                                </IonItem>
                            ))}
                        </IonList>
                    </div>

                    <div className="filter-options">
                        <IonList>
                            {/* Example Religion filter options */}
                            <IonItem className="filter_item_sheet_panel">
                                <IonCheckbox slot="start" />
                                <IonLabel>Hindu</IonLabel>
                                <div className="option-count">2,104</div>
                            </IonItem>
                            <IonItem className="filter_item_sheet_panel">
                                <IonCheckbox slot="start" />
                                <IonLabel>Muslim</IonLabel>
                                <div className="option-count">542</div>
                            </IonItem>
                            <IonItem className="filter_item_sheet_panel">
                                <IonCheckbox slot="start" />
                                <IonLabel>Christian</IonLabel>
                                <div className="option-count">231</div>
                            </IonItem>
                            <IonItem className="filter_item_sheet_panel">
                                <IonCheckbox slot="start" />
                                <IonLabel>Sikh</IonLabel>
                                <div className="option-count">120</div>
                            </IonItem>

                            {/* You can render dynamic filter options here for other filters */}
                        </IonList>
                    </div>
                </div>
            </IonContent>

            <div className="filter-footer">
                <IonButton fill="clear" color="medium">
                    Cancel
                </IonButton>
                <IonButton expand="block" color="primary">
                    Apply
                </IonButton>
            </div>
        </IonModal>
    );
}
