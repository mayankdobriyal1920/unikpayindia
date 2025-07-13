// JobCard.tsx
import React from 'react';
import { IonIcon } from '@ionic/react';
import {star, locationOutline, briefcaseOutline, lockClosedOutline, cashOutline} from 'ionicons/icons';

export default function JobCard({ job,handleJobItemClick,selectedId }) {
    return (
        <div key={job.id} onClick={() => handleJobItemClick(job)} className={`job-card ${selectedId === job?.id ? 'active' : ''}`}>
            <div className="company-icon">
                <img alt={"company"} src={job?.img_url}/>
            </div>
            <div className="job-info">
                <h3>{job.title}</h3>
                <div className="company-rating">
                    {job.company} <IonIcon icon={star}/> {job.rating}
                </div>
                <div className="job-meta">
                    <IonIcon icon={locationOutline}/> {job.location} &nbsp;|&nbsp;
                    <IonIcon icon={lockClosedOutline}/> {job.experience}
                    {job.salary && (
                        <>
                            &nbsp;|&nbsp; <IonIcon icon={cashOutline}/> {job.salary}
                        </>
                    )}
                </div>
                <div className="tags-row">
                    {job.tags.map((tag, i) => (
                        <span key={i} className="job-tag">{tag}</span>
                    ))}
                </div>
                <div className="posted">{job.posted}</div>
            </div>
        </div>
    );
}
