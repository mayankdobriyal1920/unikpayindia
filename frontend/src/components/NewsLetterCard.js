import React from 'react';
import {IonButton, IonIcon} from '@ionic/react';
import {downloadOutline} from "ionicons/icons";


export default function NewsLetterCard({post}) {
    return (
        <div className="feed-item" key={post.id}>
            <div className="feed-item-img-sec">
              <img src={post.image} alt={post.title} className="feed-image"/>
            </div>
            <div className="feed-text">
                <div className="feed-text-1-div">
                    <h2 className="feed-title">{post.title}</h2>
                    <p className="feed-caption">{post.caption}</p>
                </div>
                <IonButton expand="block" className="download-button">
                    <IonIcon icon={downloadOutline}/>
                </IonButton>
            </div>
        </div>
    );
}
