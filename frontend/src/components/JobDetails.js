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
import {briefcaseOutline, cashOutline, locationOutline} from "ionicons/icons";

export default function JobDetails({jobDetailsData}){
    return (
        <div className="job-detail-sidebar-content">
            <div className="job-basic-info">
                <IonList lines="none" className="job-basic-info-items">
                    <IonItem>
                        <IonIcon icon={briefcaseOutline} slot="start"/>
                        <IonLabel>5 - 10 Years</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={cashOutline} slot="start"/>
                        <IonLabel>₹ 15-27.5 Lacs P.A</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={locationOutline} slot="start"/>
                        <IonLabel>Noida, Hyderabad</IonLabel>
                    </IonItem>
                </IonList>
            </div>
            <hr/>
            {/* Must Have Key Skills */}
            <div className="job-skills">
                <IonText color="medium"><h6>Must have key skills</h6></IonText>
                <p>Typescript, Javascript, HTML, Backbone.js, React.js</p>

                <IonText color="medium"><h6>Other key skills</h6></IonText>
                <p>CSS, GIT, Rest APIs, JSON, JQuery</p>
            </div>
            <hr/>
            {/* Job Description */}
            <div className="job-description">
                <IonText><h6>Job description</h6></IonText>
                <p>Frontend Web Developer with strong experience in Backbone.js, React.js, Bootstrap, HTML5,
                    JavaScript and jQuery.</p>
                <hr/>
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
                <hr/>
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