import React, {useState} from 'react';
import {IonPage, IonContent} from '@ionic/react';
import NewsFilterTabs from '../components/NewsFilterTabs';
import NewsSnippetItem from '../components/NewsSnippetItem';
import imgNws1 from '../theme/images/img-nws-1.png';
import imgNws2 from '../theme/images/img-nws-2.png';
import imgNws3 from '../theme/images/img-nws-3.png';
import imgNws4 from '../theme/images/img-nws-4.png';
import imgNws5 from '../theme/images/img-nws-5.png';
import NewsDetailCard from "../components/NewsDetailCard";

const sampleData = [
    {
        id: 1,
        img_url: imgNws2, // Use your own image import
        created_at: '2025-07-06T08:00:00Z',
        category: 'Finance',
        source: 'Internal',
        content: 'Global markets rally as investors expect interest rate cuts later this year.'
    },
    {
        id: 2,
        img_url: imgNws3,
        created_at: '2025-07-05T14:30:00Z',
        category: 'Audit',
        source: 'Internal',
        content: 'Big Four accounting firms face tighter regulations under new audit quality framework.'
    },
    {
        id: 3,
        img_url: imgNws4,
        created_at: '2025-07-04T11:15:00Z',
        category: 'Trending',
        source: 'Internal',
        content: 'AI startup hits $10B valuation after Series D funding round.'
    },
    {
        id: 4,
        img_url: imgNws5,
        created_at: '2025-07-03T09:00:00Z',
        category: 'Industry',
        source: 'Internal',
        content: 'Automotive industry shifts focus to solid-state batteries for next-gen EVs.'
    },
    {
        id: 5,
        img_url: imgNws3,
        created_at: '2025-07-02T18:45:00Z',
        category: 'Opinion',
        source: 'Internal',
        content: 'Opinion: Why the rise of remote work is reshaping the urban housing market.'
    },
    {
        id: 6,
        img_url: imgNws1,
        created_at: '2025-07-01T12:00:00Z',
        category: 'Finance',
        source: 'Internal',
        content: 'Central bank warns of inflation risks despite signs of economic slowdown.'
    },
    {
        id: 7,
        img_url: imgNws2,
        created_at: '2025-06-30T16:20:00Z',
        category: 'Audit',
        source: 'Media',
        content: 'New ESG audit guidelines push companies to disclose more about sustainability.'
    },
    {
        id: 8,
        img_url: imgNws4,
        created_at: '2025-06-29T10:00:00Z',
        category: 'Trending',
        source: 'Union',
        content: 'Social media trend sparks debate on digital privacy for Gen Z.'
    },
    {
        id: 9,
        img_url: imgNws5,
        created_at: '2025-06-28T15:30:00Z',
        category: 'Industry',
        source: 'Aaj Tak',
        content: 'Construction industry adopts 3D printing for faster, eco-friendly housing.'
    },
    {
        id: 10,
        img_url: imgNws3,
        created_at: '2025-06-27T08:30:00Z',
        category: 'Opinion',
        source: 'Media',
        content: 'Opinion: How small businesses can thrive in an AI-driven economy.'
    }
];

export default function HomeDesktopPage({handleScroll}) {
    const [newsDetailsData,setNewsDetailsData] = useState(sampleData[0]);

    const handleListClick = (news)=>{
        setNewsDetailsData(news);
    }

    return (
        <IonPage>
            <IonContent onIonScroll={handleScroll} scrollEvents={true} fullscreen className="news-page page-content off-white-background-content">
                <div className="news-wrapper two-grid-panel">
                    <div className="news-snippets-list-outer">
                        <NewsFilterTabs />
                        <div className="news-snippets-list">
                            {sampleData.map((item) => (
                                <NewsSnippetItem key={item.id} selectedId={newsDetailsData?.id} newsData={item} handleListClick={handleListClick} />
                            ))}
                        </div>
                    </div>
                    <div className="news-snippets-detail">
                        <div className="news-snippets-detail-inner">
                            <NewsDetailCard newsDetailsData={newsDetailsData}/>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
