import React from 'react';
import { IonItem, IonLabel, IonCheckbox, IonRange } from '@ionic/react';

export default function AssignmentFilterSidebar() {
    return (
        <div className="filter-sidebar-content">
            <h3 className="filter_main_heading">All Filters</h3>

            {/* Assignment Type */}
            <div className="filter-section">
                <h4 className="filter_main_heading_2">Assignment Type</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Retainership (8)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>One-Time Assignment (12)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Ongoing (5)</IonLabel>
                </IonItem>
            </div>

            {/* Scope of Work */}
            <div className="filter-section">
                <h4 className="filter_main_heading_2">Scope of Work</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Statutory Audit (5)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Internal Audit (3)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Tax Compliance (4)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Due Diligence (2)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Payroll (1)</IonLabel>
                </IonItem>
            </div>

            {/* Location */}
            <div className="filter-section">
                <h4 className="filter_main_heading_2">Location</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>New Delhi (4)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Mumbai (5)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Bengaluru (3)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Hyderabad (2)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Chennai (1)</IonLabel>
                </IonItem>
            </div>

            {/* Minimum Price Offered */}
            <div className="filter-section">
                <h4 className="filter_main_heading_2">Minimum Price Offered (₹)</h4>
                <IonRange min={10000} max={100000} step={5000} pin snaps />
                <div className="range-labels">
                    <span>₹10,000</span>
                    <span>₹1,00,000</span>
                </div>
            </div>

            {/* Days Left */}
            <div className="filter-section">
                <h4 className="filter_main_heading_2">Days Left</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>1-7 Days (3)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>8-15 Days (4)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>16+ Days (5)</IonLabel>
                </IonItem>
            </div>

            {/* Has PDF */}
            <div className="filter-section">
                <h4 className="filter_main_heading_2">Attach PDF</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Has Attachment (PDF)</IonLabel>
                </IonItem>
            </div>
        </div>
    );
}
