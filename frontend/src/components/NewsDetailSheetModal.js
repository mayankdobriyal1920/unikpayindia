import React from 'react';
import {
    IonModal,
    IonContent,
    IonIcon,
} from '@ionic/react';
import {
    shareSocialOutline,
    chevronBackOutline, downloadOutline,
} from 'ionicons/icons';
import testNewsImageIcon from "../theme/images/img-nws-2.png";

const news = {
    title: 'Alexander wears modified helmet in road races',
    image: testNewsImageIcon,
    category: 'Sports',
    source: 'CNN Indonesia',
    time: '6 hours ago',
    content: `The younger brother of fugitive diamantaire Nirav Modi has been arrested in the United States based on extradition requests submitted by the Enforcement Directorate (ED) and the Central Bureau of Investigation (CBI), officials said on Saturday.

Nehal Modi, 46, was taken into custody on Friday, US authorities informed Indian officials, according to a report by news agency PTI. His next court appearance is scheduled for July 17, where he is expected to seek bail, a move that US prosecutors will oppose, PTI reported.

The extradition request pertains to two charges: one count of money laundering under Section 3 of the Prevention of Money Laundering Act (PMLA), 2002, and one count of criminal conspiracy under Sections 120-B (criminal conspiracy) and 201 (causing disappearance of evidence) of the Indian Penal Code.

The case stems from the massive ₹13,000 crore fraud at Punjab National Bank, one of the biggest in India’s banking history. The fraud was allegedly orchestrated by Nirav Modi, Nehal Modi, and their uncle Mehul Choksi.

Born and raised in Antwerp, Belgium, Nehal Modi is fluent in English, Gujarati, and Hindi. According to officials cited by PTI, he is wanted in India for laundering proceeds of crime on behalf of Nirav Modi, who is currently lodged in a London prison and fighting extradition to India.

Authorities said Nehal Modi helped conceal and transfer large sums of illicit funds through a network of shell companies and offshore transactions. He has been named in a charge sheet filed by the ED and has been accused of destroying evidence and “knowingly and intentionally” facilitating Nirav Modi’s illegal activities, PTI reported.

The ED also alleged that following the exposure of the PNB fraud, Nehal and Nirav’s top aide Mihir R Bhansali “took 50 kg gold and substantial cash from Dubai” and instructed dummy directors not to reveal his name to authorities, officials told PTI.`
};

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
                        <div className="news-detail-image-wrapper">
                            <img src={newsDetailsData.imageUrl} alt="News"/>
                            <div className="news-detail-top-buttons">
                                <button onClick={onDidDismiss} className="circle-btn">
                                    <IonIcon icon={chevronBackOutline}/>
                                </button>
                                <div className="right-buttons">
                                    <button className="circle-btn">
                                        <IonIcon icon={downloadOutline}/>
                                    </button>
                                    <button className="circle-btn">
                                        <IonIcon icon={shareSocialOutline}/>
                                    </button>
                                </div>
                            </div>

                            <div className="news-detail-overlay">
                                <div className="news-detail-category">{news.category}</div>
                                <h1 className="news-detail-title">{newsDetailsData.title}</h1>
                                <p className="news-detail-meta">Trending • {newsDetailsData.time}</p>
                            </div>
                        </div>

                        <div className="news-detail-content">
                            <div className="news-detail-source">
                                <strong>{newsDetailsData.source}</strong> <span>• {newsDetailsData.time}</span>
                            </div>
                            <p>{news.content}</p>
                            {/* Repeat or add more paragraphs */}
                        </div>
                    </IonContent>
                </>:''
            }
        </IonModal>
    );
}
