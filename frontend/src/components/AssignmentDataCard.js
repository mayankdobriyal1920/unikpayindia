import React from 'react';
import { IonIcon } from '@ionic/react';
import {briefcaseOutline, calendarOutline, mailOutline} from 'ionicons/icons';

export default function AssignmentDataCard({ assignment,handleDetailItemClick }) {
    return (
        <div className="rfp-card" onClick={()=>handleDetailItemClick(assignment)}>
            <div className="rfp-card-left">
                <h4>{assignment.title}</h4>
                <div className="rfp-details">
                    <span className="rfp-location"><IonIcon icon={briefcaseOutline}/> {assignment.location}</span>
                    <span className="rfp-days"><IonIcon icon={mailOutline}/> {assignment.email}</span>
                    <span className="rfp-days"><IonIcon icon={calendarOutline}/> {assignment.daysLeft}</span>
                </div>
            </div>
            <div className="rfp-card-right">
                <div className="rfp-price">{assignment.price}</div>
                <div className="rfp-min">Min. price</div>
            </div>
        </div>
    );
}
