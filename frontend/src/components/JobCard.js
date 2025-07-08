// JobCard.tsx
import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, locationOutline, briefcaseOutline } from 'ionicons/icons';

export default function JobCard({ job }) {
    return (
        <div className="job-card-desktop">
            <div className="job-card-content">
                <h3>{job.title}</h3>
                <div className="company-rating">
                    {job.company} <IonIcon icon={star} /> {job.rating}
                </div>
                <div className="job-meta">
                    <IonIcon icon={briefcaseOutline} /> {job.experience}
                    {' '}|{' '}
                    <IonIcon icon={locationOutline} /> {job.location}
                </div>
                <div className="tags-row">
                    {job.tags?.map((tag, i) => (
                        <span key={i} className="job-tag">{tag}</span>
                    ))}
                </div>
                <div className="posted">{job.posted}</div>
            </div>
        </div>
    );
}
