import React from 'react';
import {IonButton, IonIcon} from '@ionic/react';
import {calendarOutline, locationOutline} from "ionicons/icons";


export default function EventsCard({ event }) {
    return (
        <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image"/>
            <div className="event-details">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>
                <p className="event-date-time"><IonIcon icon={calendarOutline}/> {event.dateTime}</p>
                <p className="event-location"><IonIcon icon={locationOutline}/> {event.location}</p>
                <div className="event-footer">
                    <span className="event-price">₹{event.price}</span>
                    <IonButton size="small" className="buy-now-button">
                        Buy Now
                    </IonButton>
                </div>
            </div>
        </div>
    );
}

