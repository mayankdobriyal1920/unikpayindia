import React from 'react';
import {IonRow, IonCol} from '@ionic/react';

export default function EventsFilterTabs({eventTypeFilter,handleSetEventTypeFilter}) {
    return (
        <IonRow>
            <IonCol>
                <div onClick={()=>handleSetEventTypeFilter('upcoming')} className={`events_tab_button ${eventTypeFilter === 'upcoming' ? 'active' : ''}`}>Upcoming Events</div>
            </IonCol>
            <IonCol>
                <div onClick={()=>handleSetEventTypeFilter('past')} className={`events_tab_button ${eventTypeFilter === 'past' ? 'active' : ''}`}>Past Events</div>
            </IonCol>
        </IonRow>
    );
}

