// RfpFilterSheetModal.tsx
import React, { useState } from 'react';
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

const filters = [
    {
        name: "Assignment Type",
        options: [
            { label: "Retainership", count: 12 },
            { label: "One-Time Assignment", count: 8 },
            { label: "Ongoing", count: 5 },
        ],
    },
    {
        name: "Location",
        options: [
            { label: "New Delhi", count: 4 },
            { label: "Mumbai", count: 6 },
            { label: "Bengaluru", count: 5 },
            { label: "Hyderabad", count: 3 },
            { label: "Chennai", count: 2 },
        ],
    },
    {
        name: "Minimum Price",
        options: [
            { label: "Up to ₹25,000", count: 3 },
            { label: "₹25,000 - ₹50,000", count: 7 },
            { label: "₹50,000 - ₹75,000", count: 4 },
            { label: "Above ₹75,000", count: 2 },
        ],
    },
    {
        name: "Scope of Work",
        options: [
            { label: "Statutory Audit", count: 4 },
            { label: "Tax Compliance", count: 3 },
            { label: "Internal Audit", count: 2 },
            { label: "Due Diligence", count: 1 },
            { label: "Payroll", count: 1 },
        ],
    },
    {
        name: "Days Left",
        options: [
            { label: "1-7 Days", count: 4 },
            { label: "8-15 Days", count: 5 },
            { label: "16+ Days", count: 3 },
        ],
    },
    {
        name: "Sort By",
        options: [
            { label: "Price: Low to High", count: 0 },
            { label: "Price: High to Low", count: 0 },
            { label: "Deadline: Nearest First", count: 0 },
            { label: "Location A-Z", count: 0 },
        ],
    },
];

export default function AssignmentsFilterSheetModal({ isOpen, onDidDismiss }) {
    const [activeFilter, setActiveFilter] = useState(filters[0].name);

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
                    <IonTitle className="filter_sheet_header_text">Filter RFPs</IonTitle>
                    <IonButtons slot="end">
                        <IonButton className="filter_sheet_clear_all_btn">Clear all</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className="filter-content">
                    <div className="filter-menu">
                        <IonList>
                            {filters.map((filter, i) => (
                                <IonItem
                                    className={`filter_item_sheet_panel ${activeFilter === filter.name ? 'active' : ''}`}
                                    key={i}
                                    button
                                    lines="none"
                                    onClick={() => setActiveFilter(filter.name)}
                                >
                                    {filter.name}
                                </IonItem>
                            ))}
                        </IonList>
                    </div>

                    <div className="filter-options">
                        <IonList>
                            {filters.find(f => f.name === activeFilter)?.options.map((option, i) => (
                                <IonItem className="filter_item_sheet_panel" key={i}>
                                    <IonCheckbox slot="start" />
                                    <IonLabel>{option.label}</IonLabel>
                                    <div className="option-count">{option.count > 0 ? option.count : ''}</div>
                                </IonItem>
                            ))}
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
