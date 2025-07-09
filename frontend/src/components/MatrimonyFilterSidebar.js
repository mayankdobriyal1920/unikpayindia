// FilterSidebar.tsx
import React from 'react';
import { IonItem, IonLabel, IonCheckbox, IonRange } from '@ionic/react';

export default function MatrimonyFilterSidebar() {
    return (
        <div className="filter-sidebar-content">
            <h3 className={"filter_main_heading"}>All Filters</h3>

            <div className="filter-section">
                <h4 className={"filter_main_heading_2"}>Work mode</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Work from office (10266)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Hybrid (207)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Remote (108)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Temp. WFH due to covid (9)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className={"filter_main_heading_2"}>Experience</h4>
                <IonRange min={0} max={20} pin snaps step={1}/>
                <div className="range-labels">
                    <span>0 Yrs</span>
                    <span>Any</span>
                </div>
            </div>

            <div className="filter-section">
                <h4 className={"filter_main_heading_2"}>Department</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Engineering - Software (8519)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>UX, Design & Arch. (630)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className={"filter_main_heading_2"}>Department</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Engineering - Software (8519)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>UX, Design & Arch. (630)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className={"filter_main_heading_2"}>Department</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>Engineering - Software (8519)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start"/> <IonLabel>UX, Design & Arch. (630)</IonLabel>
                </IonItem>
            </div>
        </div>
    );
}
