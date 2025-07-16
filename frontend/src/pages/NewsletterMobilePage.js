import React, {useState} from 'react';
import {IonPage, IonContent, IonButton, IonIcon} from '@ionic/react';
import newsLetter1 from '../theme/images/news-letter-1.png';
import newsLetter2 from '../theme/images/news-letter-2.png';
import newsLetter3 from '../theme/images/news-letter-3.png';
import newsLetter4 from '../theme/images/news-letter-4.png';
import newsLetter5 from '../theme/images/news-letter-5.png';
import NewsLetterCard from "../components/NewsLetterCard";
import {funnelOutline} from "ionicons/icons";

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




export default function NewsletterMobilePage({handleScroll}) {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [filterOption, setFilterOption] = useState(2025);
    const callFunctionToHandleScroll = (event) => {
        handleScroll(event);
        const scrollTop = event.detail.scrollTop;

        if (scrollTop < lastScrollTop) {
            // Scrolling UP → stick
            setIsSticky(false);
        } else {
            // Scrolling DOWN → unstick
            setIsSticky(true);
        }

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    return (
        <IonPage>
            <div className={`filter-header-wrapper ${isSticky ? "sticky" : ""}`}>
                <div className="filter-header in_news_feeds">
                    <div className="tags">
                        <span className={`tag ${filterOption === 2025 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2025)}>2025</span>
                        <span className={`tag ${filterOption === 2024 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2024)}>2024</span>
                        <span className={`tag ${filterOption === 2023 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2023)}>2023</span>
                        <span className={`tag ${filterOption === 2022 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2022)}>2022</span>
                        <span className={`tag ${filterOption === 2021 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2021)}>2021</span>
                        <span className={`tag ${filterOption === 2020 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2020)}>2020</span>
                        <span className={`tag ${filterOption === 2019 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2019)}>2019</span>
                        <span className={`tag ${filterOption === 2018 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2018)}>2018</span>
                        <span className={`tag ${filterOption === 2017 ? 'active' : ''}`}
                              onClick={() => setFilterOption(2017)}>2017</span>
                    </div>
                </div>
            </div>
            <IonContent fullscreen scrollEvents={true} onIonScroll={callFunctionToHandleScroll}
                        className="feed-content page-content">
                <div className="feed-list">
                    {mockPosts.map(post => (
                        <NewsLetterCard key={post?.id} post={post}/>
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
}
