import React from 'react';
import {
    IonModal,
    IonContent,
} from '@ionic/react';
import NewsDetailCard from "./NewsDetailCard";

export default function NewsDetailSheetModal({ isOpen, onDidDismiss,newsDetailsData }) {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onDidDismiss}
            initialBreakpoint={1}
            breakpoints={[0, 1]}
            handleBehavior="cycle"
        >
            {(newsDetailsData?.id) ?
                <>
                    <IonContent fullscreen className="news-detail-page">
                        <NewsDetailCard newsDetailsData={newsDetailsData} onDidDismiss={onDidDismiss}/>
                    </IonContent>
                </>:''
            }
        </IonModal>
    );
}
