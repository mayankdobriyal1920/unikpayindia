import React from 'react';
import { IonIcon } from '@ionic/react';
import { heartOutline, locationOutline, briefcaseOutline } from 'ionicons/icons';

export default function MatrimonyProfileCard({ profile }) {
    return (
        <div className="matrimony-card">
            <img src={profile.profilePic} alt={profile.name} className="matrimony-card-img" />

            <div className="matrimony-card-info">
                <h3 className="matrimony-card-name">{profile.name}</h3>
                <p className="matrimony-card-details">
                    {profile.age} yrs | {profile.height} | {profile.religion}, {profile.caste}
                </p>
                <p className="matrimony-card-occupation">
                    <IonIcon icon={briefcaseOutline} /> {profile.occupation}
                </p>
                <p className="matrimony-card-location">
                    <IonIcon icon={locationOutline} /> {profile.location}
                </p>
                <p className="matrimony-card-status">{profile.status}</p>
            </div>

            <IonIcon icon={heartOutline} className="matrimony-card-heart" />
        </div>
    );
}
