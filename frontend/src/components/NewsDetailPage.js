import React from 'react';
import {IonPage, IonContent} from '@ionic/react';
import NewsDetailCard from "./NewsDetailCard";


export default function NewsDetailPage() {
    return (
        <IonPage>
            <IonContent fullscreen className="news-detail-page">
                <NewsDetailCard/>
            </IonContent>
        </IonPage>
    );
}
