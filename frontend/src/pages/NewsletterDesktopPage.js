import React from 'react';
import {IonPage, IonContent, IonButton, IonIcon} from '@ionic/react';
import newsLetter1 from '../theme/images/news-letter-1.png';
import newsLetter2 from '../theme/images/news-letter-2.png';
import newsLetter3 from '../theme/images/news-letter-3.png';
import newsLetter4 from '../theme/images/news-letter-4.png';
import newsLetter5 from '../theme/images/news-letter-5.png';
import {downloadOutline} from "ionicons/icons";
import NewsLetterCard from "../components/NewsLetterCard";

const mockPosts = [
    {
        id: 1,
        title: 'July Newsletter',
        image: newsLetter1,
        caption: 'Check out what’s new this month!',
        downloadLink: '#'
    },
    {
        id: 2,
        title: 'June Newsletter',
        image: newsLetter2,
        caption: 'Highlights from June in this edition.',
        downloadLink: '#'
    },
    {
        id: 3,
        title: 'May Newsletter',
        image: newsLetter3,
        caption: 'Read our May wrap-up.',
        downloadLink: '#'
    },
    {
        id: 4,
        title: 'April Newsletter',
        image: newsLetter5,
        caption: 'Catch up on April’s exciting updates.',
        downloadLink: '#'
    },
    {
        id: 5,
        title: 'March Newsletter',
        image: newsLetter4,
        caption: 'Discover what happened in March.',
        downloadLink: '#'
    },
    {
        id: 6,
        title: 'February Newsletter',
        image: newsLetter3,
        caption: 'All the highlights from February.',
        downloadLink: '#'
    },
    {
        id: 7,
        title: 'January Newsletter',
        image: newsLetter1,
        caption: 'Kickstarting the new year with fresh news!',
        downloadLink: '#'
    },
    {
        id: 8,
        title: 'December Newsletter',
        image: newsLetter5,
        caption: 'Year-end highlights you shouldn’t miss.',
        downloadLink: '#'
    },
    {
        id: 9,
        title: 'November Newsletter',
        image: newsLetter4,
        caption: 'November’s insights and updates.',
        downloadLink: '#'
    },
    {
        id: 10,
        title: 'October Newsletter',
        image: newsLetter2,
        caption: 'Take a look back at October.',
        downloadLink: '#'
    }
];


export default function NewsletterDesktopPage() {
    return (
        <IonPage>
            <IonContent fullscreen className="feed-content page-content">
                <div className="desktop-contain-feed-newsletter">
                    <div className="feed-list desktop-contain-feed">
                        {mockPosts.map(post => (
                            <NewsLetterCard key={post?.id} post={post}/>
                        ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
