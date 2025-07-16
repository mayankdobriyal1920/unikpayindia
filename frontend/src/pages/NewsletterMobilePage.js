import React, {useState} from 'react';
import {IonPage, IonContent, IonButton, IonIcon, IonModal, IonDatetime} from '@ionic/react';
import newsLetter1 from '../theme/images/news-letter-1.png';
import newsLetter2 from '../theme/images/news-letter-2.png';
import newsLetter3 from '../theme/images/news-letter-3.png';
import newsLetter4 from '../theme/images/news-letter-4.png';
import newsLetter5 from '../theme/images/news-letter-5.png';
import NewsLetterCard from "../components/NewsLetterCard";
import {calendarOutline, funnelOutline} from "ionicons/icons";

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


const years = [];
for (let i = new Date().getFullYear(); i >= 2000; i--) {
    years.push(i);
}

export default function NewsletterMobilePage({handleScroll}) {
    const [isSticky, setIsSticky] = useState(false);
    const [isCustomYearPickerOpen, setIsCustomYearPickerOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [filterOption, setFilterOption] = useState(new Date().getFullYear());

    const callFunctionToHandleScroll = (event) => {
        handleScroll(event);
        const scrollTop = event.detail.scrollTop;

        if (scrollTop < lastScrollTop ) {
            // Scrolling UP → stick
            setIsSticky(false);
        } else {
            // Scrolling DOWN → unstick
            setIsSticky(true);
        }

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };


    const handleYearChange = (e) => {
        const value = e.detail.value;
        setFilterOption(new Date(value).getFullYear());
        setIsCustomYearPickerOpen(false);
    };

    return (
        <IonPage>
            <div className={`filter-header-wrapper ${isSticky ? "sticky" : ""}`}>
                <div className="filter-header in_news_feeds">
                    <IonButton fill="clear" size="small" onClick={() => setIsCustomYearPickerOpen(true)} className="filter-btn">
                        <IonIcon icon={calendarOutline} slot="start"/>
                    </IonButton>
                    <div className="tags">
                        {(years?.map((year)=> (
                            <span key={year} className={`tag ${filterOption === year ? 'active' : ''}`}
                                  onClick={() => setFilterOption(year)}>{year}</span>
                        )))}
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
            {/* ✅ Bottom Year Picker Slider */}
            <IonModal breakpoints={[0,0.3]} initialBreakpoint={0.3} isOpen={isCustomYearPickerOpen} onDidDismiss={() => setIsCustomYearPickerOpen(false)}>
                <IonDatetime
                    presentation="year"
                    className={"bottom_date_picker"}
                    min={2000}
                    onIonChange={handleYearChange}
                    value={filterOption.toString()}
                />
            </IonModal>
        </IonPage>
    );
}
