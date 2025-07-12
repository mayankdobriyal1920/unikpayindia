import React from 'react';
import { IonIcon, IonText } from "@ionic/react";
import {
    briefcaseOutline,
    mailOutline,
    documentOutline,
    calendarOutline
} from "ionicons/icons";

export default function AssignmentDetail({ assignmentDetail }) {
    return (
        <div className="job_detail_common_page">
            {/* Basic Job Info */}
            <div className="rfp-card">
                <div className="rfp-card-left">
                    <h4>{assignmentDetail.title}</h4>
                    <div className="rfp-details">
                        <span className="rfp-location"><IonIcon icon={briefcaseOutline}/> {assignmentDetail.location}</span>
                        <span className="rfp-days"><IonIcon icon={mailOutline}/> {assignmentDetail.email}</span>
                        <span className="rfp-days"><IonIcon icon={calendarOutline}/> {assignmentDetail.daysLeft}</span>
                    </div>
                </div>
                <div className="rfp-card-right">
                    <div className="rfp-price">{assignmentDetail.price}</div>
                    <div className="rfp-min">Min. price</div>
                </div>
            </div>

            {/* Job Description */}
            <div className="job-description">
                <IonText><h6>Scope of Work</h6></IonText>
                <p>{assignmentDetail.scopeOfWork}</p>
            </div>

            <div className="job-key-responsiblities">
                <IonText><h6>Attachment:</h6></IonText>
                <ul>
                    <li>
                        {assignmentDetail.attachPdf ? (
                            <>
                                <IonIcon icon={documentOutline}/>{" "}
                                <a href={assignmentDetail.attachPdf} target="_blank" rel="noopener noreferrer">
                                    View PDF
                                </a>
                            </>
                        ) : (
                            "No attachment"
                        )}
                    </li>
                </ul>
            </div>

            <div className="job-requirement">
                <IonText><h6>Contact:</h6></IonText>
                <ul>
                    <li>
                        <IonIcon icon={mailOutline}/> {assignmentDetail.email}
                    </li>
                </ul>
            </div>
        </div>
    );
}
