import React from 'react';
import {IonPage, IonContent, IonButton, IonIcon} from '@ionic/react';
import {calendarOutline, locationOutline} from "ionicons/icons";
import events1 from '../theme/images/events-1.png';
import events2 from '../theme/images/events-2.png';
import events3 from '../theme/images/events-3.png';
import events4 from '../theme/images/events-4.png';
import events5 from '../theme/images/events-5.png';
import EventsCard from "../components/EventsCard";

const mockEvents = [
    {
        id: 1,
        title: 'Summer Fest 2025',
        image: events1,
        description: 'Join us for a fun-filled summer festival with live music and food.',
        price: '49',
        dateTime: 'July 21, 2025 | 6:00 PM',
        location: 'Central Park, New York'
    },
    {
        id: 2,
        title: 'Winter Gala Night',
        image: events4,
        description: 'Dress up and dance the night away at our Winter Gala.',
        price: '99',
        dateTime: 'December 15, 2025 | 8:00 PM',
        location: 'Grand Ballroom, LA'
    },
    {
        id: 3,
        title: 'Tech Conference 2025',
        image: events3,
        description: 'Learn about the latest trends in tech and innovation.',
        price: '199',
        dateTime: 'March 3, 2025 | 10:00 AM',
        location: 'Tech Center, San Francisco'
    },
    {
        id: 4,
        title: 'Spring Music Festival',
        image: events2,
        description: 'Enjoy a day of music, food, and fun at the Spring Festival.',
        price: '59',
        dateTime: 'April 12, 2025 | 2:00 PM',
        location: 'Riverside Park, Chicago'
    },
    {
        id: 5,
        title: 'Autumn Art Expo',
        image: events5,
        description: 'Explore contemporary art by local and international artists.',
        price: '25',
        dateTime: 'October 8, 2025 | 11:00 AM',
        location: 'Art Museum, Seattle'
    },
    {
        id: 6,
        title: 'Charity Run 5K',
        image: events4,
        description: 'Run for a cause and support our local community.',
        price: '35',
        dateTime: 'September 5, 2025 | 7:00 AM',
        location: 'Downtown, Boston'
    },
    {
        id: 7,
        title: 'Food Truck Fiesta',
        image: events3,
        description: 'Taste delicious street food from the best local food trucks.',
        price: 'Free Entry',
        dateTime: 'August 18, 2025 | 12:00 PM',
        location: 'City Square, Austin'
    },
    {
        id: 8,
        title: 'Book Fair & Author Talk',
        image: events1,
        description: 'Meet your favorite authors and discover new reads.',
        price: '10',
        dateTime: 'May 22, 2025 | 1:00 PM',
        location: 'Community Library, Denver'
    },
    {
        id: 9,
        title: 'Startup Pitch Night',
        image: events2,
        description: 'Watch emerging startups pitch their ideas to investors.',
        price: '79',
        dateTime: 'June 30, 2025 | 5:00 PM',
        location: 'Innovation Hub, San Diego'
    },
    {
        id: 10,
        title: 'Outdoor Movie Night',
        image: events5,
        description: 'Bring your blanket and enjoy a movie under the stars.',
        price: '15',
        dateTime: 'July 10, 2025 | 8:30 PM',
        location: 'Sunset Park, Miami'
    }
];

export default function EventsDesktopPage({ handleScroll }) {
    return (
        <IonPage>
            <IonContent
                fullscreen
                scrollEvents={true}
                onIonScroll={handleScroll}
                className="events-content page-content"
            >
                <div className="desktop-contain-feed-newsletter">
                    <div className="mobile-contain-feed-events desktop-contain-feed">
                        {mockEvents.map(event => (
                            <EventsCard key={event?.id} event={event}/>
                        ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

