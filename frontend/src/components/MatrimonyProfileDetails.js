import React from 'react';
import {IonIcon, IonText} from "@ionic/react";
import {briefcaseOutline, cashOutline, heartOutline, locationOutline, lockClosedOutline, star} from "ionicons/icons";

export default function MatrimonyProfileDetails({matrimonialProfileDetail}){
    return (
        <div className="job_detail_common_page">
            {/* Basic Job Info */}
            <div className="matrimony-card">
                <img src={matrimonialProfileDetail.profilePic} alt={matrimonialProfileDetail.name} className="matrimony-card-img"/>

                <div className="matrimony-card-info">
                    <h3 className="matrimony-card-name">{matrimonialProfileDetail.name}</h3>
                    <p className="matrimony-card-details">
                        {matrimonialProfileDetail.age} yrs | {matrimonialProfileDetail.height} | {matrimonialProfileDetail.religion}, {matrimonialProfileDetail.caste}
                    </p>
                    <p className="matrimony-card-occupation">
                        <IonIcon icon={briefcaseOutline}/> {matrimonialProfileDetail.occupation}
                    </p>
                    <p className="matrimony-card-location">
                        <IonIcon icon={locationOutline}/> {matrimonialProfileDetail.location}
                    </p>
                    <p className="matrimony-card-status">{matrimonialProfileDetail.status}</p>
                </div>
            </div>
            {/* Job Description */}
            <div className="job-description">
                <IonText><h6>About Me</h6></IonText>
                <p>I am a warm-hearted and career-oriented person who loves reading books, traveling, and spending time with family. I believe in balancing modern thinking with traditional values.</p>
            </div>
            <div className="job-key-responsiblities">
                <IonText><h6>Family Details:</h6></IonText>
                <ul>
                    <li>Father: Retired Government Employee</li>
                    <li>Mother: Homemaker</li>
                    <li>Siblings: 1 younger sister (married)</li>
                </ul>
            </div>
            <div className="job-requirement">
                <IonText><h6>Partner Preferences:</h6></IonText>
                <ul>
                    <li>Age: 28–32 years</li>
                    <li>Religion/Caste: Hindu Brahmin</li>
                    <li>Education: Graduate or above</li>
                    <li>Location: Preferably Delhi NCR</li>
                </ul>
            </div>
        </div>
    )
}