// MatrimonyFilterSidebar.tsx
import React from 'react';
import { IonItem, IonLabel, IonCheckbox, IonRange } from '@ionic/react';

export default function MatrimonyFilterSidebar() {
    return (
        <div className="filter-sidebar-content">
            <h3 className="filter_main_heading">All Filters</h3>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Religion</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Hindu (3,500)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Muslim (700)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Christian (300)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Sikh (150)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Caste</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Brahmin (1,200)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Kshatriya (800)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Vaishya (600)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Age Range</h4>
                <IonRange min={18} max={40} pin snaps step={1} />
                <div className="range-labels">
                    <span>18 yrs</span>
                    <span>40 yrs</span>
                </div>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Education</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Graduate (2,500)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Post Graduate (1,200)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Doctorate (300)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Profession</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Engineer (1,500)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Doctor (600)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Business (700)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Location</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Delhi NCR (800)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Mumbai (600)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Bangalore (400)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Marital Status</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Never Married (4,500)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Divorced (300)</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Widowed (100)</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Height Range (in cm)</h4>
                <IonRange min={140} max={200} pin snaps step={1} />
                <div className="range-labels">
                    <span>140 cm</span>
                    <span>200 cm</span>
                </div>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Manglik</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Manglik</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Non-Manglik</IonLabel>
                </IonItem>
            </div>

            <div className="filter-section">
                <h4 className="filter_main_heading_2">Language</h4>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Hindi</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Punjabi</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox slot="start" /> <IonLabel>Bengali</IonLabel>
                </IonItem>
            </div>
        </div>
    );
}
