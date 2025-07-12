import React from 'react';
import {
    IonButton,
    IonCol,
    IonContent, IonFooter,
    IonIcon,
    IonItem,
    IonLabel,
    IonList, IonRow, IonText,
} from "@ionic/react";
import {
    briefcaseOutline,
    cashOutline,
    informationCircleOutline,
    informationOutline,
    locationOutline, lockClosedOutline, star
} from "ionicons/icons";
import JobCard from "./JobCard";

export default function JobDetails({jobDetailsData}){
    return (
        <div className="job_detail_common_page">
            {/* Basic Job Info */}
            <div className="job-card">
                <div className="company-icon">
                    <img alt={"company"} src={jobDetailsData?.img_url}/>
                </div>
                <div className="job-info">
                    <h3>{jobDetailsData.title}</h3>
                    <div className="company-rating">
                        {jobDetailsData.company} <IonIcon icon={star}/> {jobDetailsData.rating}
                    </div>
                    <div className="job-meta">
                        <IonIcon icon={locationOutline}/> {jobDetailsData.location} &nbsp;|&nbsp;
                        <IonIcon icon={lockClosedOutline}/> {jobDetailsData.experience}
                        {jobDetailsData.salary && (
                            <>
                                &nbsp;|&nbsp; <IonIcon icon={cashOutline}/> {jobDetailsData.salary}
                            </>
                        )}
                    </div>
                    <div className="tags-row">
                        {jobDetailsData.tags.map((tag, i) => (
                            <span key={i} className="job-tag">{tag}</span>
                        ))}
                    </div>
                    <div className="posted">{jobDetailsData.posted}</div>
                </div>
            </div>
            {/* Job Description */}
            <div className="job-description">
                <IonText><h6>Job description</h6></IonText>
                <p>Frontend Web Developer with strong experience in Backbone.js, React.js, Bootstrap, HTML5,
                    JavaScript and jQuery.</p>
            </div>
            <div className="job-key-responsiblities">
                <IonText><h6>Key Responsibilities:</h6></IonText>
                <ul>
                    <li>Develop and maintain user interfaces using React.js, Backbone.js, and jQuery</li>
                    <li>Build responsive, cross-browser compatible UIs using HTML5, CSS3, Bootstrap</li>
                    <li>Refactor legacy codebases to modern frameworks</li>
                    <li>Collaborate with UX designers and backend developers</li>
                    <li>Optimize web applications for speed and scalability</li>
                    <li>Write clean, maintainable, and well-documented code</li>
                    <li>Debug and troubleshoot issues across browsers</li>
                </ul>
            </div>
            <div className="job-requirement">
                <IonText><h6>Requirements:</h6></IonText>
                <ul>
                    <li>5+ years of professional front-end development experience</li>
                    <li>Proficiency in HTML5, CSS3, and JavaScript</li>
                    <li>Strong hands-on experience with Backbone.js, JavaScript and jQuery</li>
                </ul>
            </div>
        </div>
    )
}