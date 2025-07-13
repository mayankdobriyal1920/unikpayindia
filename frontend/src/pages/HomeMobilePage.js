import React, {useLayoutEffect, useRef, useState} from 'react';
import {IonContent, IonIcon, IonPage, IonRefresher, IonRefresherContent} from '@ionic/react';
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence, motion } from 'framer-motion';
import imgNws1 from '../theme/images/img-nws-1.png';
import imgNws2 from '../theme/images/img-nws-2.png';
import imgNws3 from '../theme/images/img-nws-3.png';
import imgNws4 from '../theme/images/img-nws-4.png';
import imgNws5 from '../theme/images/img-nws-5.png';
import {bookmarkOutline, downloadOutline, eyeSharp} from "ionicons/icons";
import NewsDetailSheetModal from "../components/NewsDetailSheetModal";

const dummyNews = [
    {
        id: 1,
        title: 'Ahmedabad woman kills 6-year-old daughter by strangulation',
        description:
            'The younger brother of fugitive diamantaire Nirav Modi has been arrested in the United States based on extradition requests submitted by the Enforcement Directorate (ED) and the Central Bureau of Investigation (CBI), officials said on Saturday...',
        time: 'few hours ago',
        source: 'The CSR Journal',
        img_url: imgNws1,
    },
    {
        id: 2,
        title: 'Rising Inflation Hits Middle Class Families Hard',
        description:
            'Experts warn that the rising cost of essential goods is likely to affect household budgets The younger brother of fugitive diamantaire Nirav Modi has been arrested in the United States...',
        time: '1 day ago',
        source: 'The Financial Express',
        img_url: imgNws2,
    },
    {
        id: 3,
        title: 'Tech Giants Lay Off Thousands Amid Economic Slowdown',
        description:
            'Major technology companies announce massive layoffs as they struggle with declining revenues. Monsoon rains have led to severe flooding, displacing thousands of residents in multiple states. officials said on Saturday.\n\nNehal Modi, 46, was taken into custody on Friday, US authorities informed Indian officials, according to a report by news agency PTI. His next court appearance is scheduled for July 17, where he is expected to seek bail...',
        time: '3 days ago',
        source: 'Reuters',
        img_url: imgNws3,
    },
    {
        id: 4,
        title: 'Heavy Rains Cause Flooding in Several Indian States',
        description:
            'Monsoon rains have led to severe flooding, displacing thousands of residents in multiple states...',
        time: '5 hours ago',
        source: 'NDTV',
        img_url: imgNws4,
    },
    {
        id: 5,
        title: 'New Tax Rules to Impact Small Businesses',
        description:
            'The government\'s new tax reforms are expected to bring relief to some sectors but may add burden to small traders...',
        time: '2 days ago',
        source: 'Business Standard',
        img_url: imgNws5,
    },
    {
        id: 6,
        title: 'Indian Startup Raises $50M in Series B Funding',
        description:
            'A Bengaluru-based startup has secured $50 million in its latest funding round to expand operations. The younger brother of fugitive diamantaire Nirav Modi has been arrested in the United States based on extradition requests submitted by the Enforcement Directorate (ED) and the Central Bureau of Investigation (CBI), officials said on Saturday...',
        time: '10 hours ago',
        source: 'YourStory',
        img_url: imgNws3,
    },
    {
        id: 7,
        title: 'Health Experts Warn of New COVID-19 Variant',
        description:
            'Doctors urge people to stay cautious as new variants emerge, stressing the need for vaccination and masks. Doctors urge people to stay cautious as new variants emerge, stressing the need for vaccination and masks...',
        time: '1 day ago',
        source: 'The Hindu',
        img_url: imgNws3,
    },
    {
        id: 8,
        title: 'ISRO Prepares for Next Lunar Mission',
        description:
            'The younger brother of fugitive diamantaire Nirav Modi has been arrested in the United States based on extradition requests submitted by the Enforcement Directorate (ED) and the Central Bureau of Investigation (CBI), officials said on Saturday...',
        time: '3 days ago',
        source: 'Times of India',
        img_url: imgNws5,
    },
    {
        id: 9,
        title: 'Stock Markets Close Higher After Volatile Session',
        description:
            'Equity benchmarks ended higher amid market volatility, driven by gains in IT and auto stocks. Equity benchmarks ended higher amid market volatility, driven by gains in IT and auto stocks...',
        time: 'few hours ago',
        source: 'Economic Times',
        img_url: imgNws1,
    },
    {
        id: 10,
        title: 'Government Launches New Skill Development Program',
        description:
            'Aiming to boost employment, the government has launched a nationwide skill training initiative. Equity benchmarks ended higher amid market volatility, driven by gains in IT and auto stocks...',
        time: '2 days ago',
        source: 'Livemint',
        img_url: imgNws2,
    },
];

const categories = ['Trending', 'Opinion', 'Finance', 'Audit', 'Industry'];

export default function HomeMobilePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [direction, setDirection] = useState('up');
    const [newsDetailsData, setNewsDetailsData] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const newsContentRef = useRef(null);

    const handlers = useSwipeable({
        onSwipedUp: () => {
            if (currentIndex < dummyNews.length - 1) {
                setDirection('up');
                setCurrentIndex(currentIndex + 1);
            }
        },
        onSwipedDown: () => {
            if (currentIndex > 0) {
                setDirection('down');
                setCurrentIndex(currentIndex - 1);
            }
        },
        onSwipedLeft: () => {
            if (categoryIndex < categories.length - 1) {
                setCategoryIndex(categoryIndex + 1);
                setCurrentIndex(0);
            }
        },
        onSwipedRight: () => {
            if (categoryIndex > 0) {
                setCategoryIndex(categoryIndex - 1);
                setCurrentIndex(0);
            }
        },
        trackMouse: true,
    });

    const openDetailPanel = (jobDetail)=>{
        setNewsDetailsData(jobDetail);
        setIsDetailOpen(true);
    }

    const handleRefresh = (event) => {
        console.log('Refreshing...');
        setTimeout(() => {
            setCurrentIndex(0);
            event.detail.complete();
        }, 2000);
    };

    useLayoutEffect(() => {
        const element = newsContentRef.current;
        if (element) {
            // Delay to let layout settle
            setTimeout(() => {
                const computedStyles = getComputedStyle(element);
                const lineHeight = parseFloat(computedStyles.lineHeight);
                if (lineHeight) {
                    const heightLeft = element.clientHeight;
                    const lines = Math.floor(heightLeft / lineHeight);
                    element.style.display = "-webkit-box";
                    element.style.webkitBoxOrient = "vertical";
                    element.style.overflow = "hidden";
                    element.style.webkitLineClamp = lines.toString();
                }
            }, 50); // Small delay helps when fonts/images affect layout
        }
    }, [newsContentRef, currentIndex]);


    const news = dummyNews[currentIndex];

    return (
        <IonPage>
            <IonContent fullscreen className="page-content">
                <IonRefresher slot="fixed" disabled={currentIndex !== 0} onIonRefresh={handleRefresh}>
                    <IonRefresherContent pullingText="Pull to refresh" refreshingSpinner="circles" />
                </IonRefresher>

                <div className="news-feed-page" {...handlers}>
                    <div className="news-menu">
                        {categories.map((cat, index) => (
                            <button
                                key={cat}
                                onClick={()=>setCategoryIndex(index)}
                                className={`news-tab ${index === categoryIndex ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="news-card-stack">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={news.id}
                                className="news-card"
                                initial={{
                                    y: direction === 'up' ? 300 : -300
                                }}
                                animate={{
                                    y: 0
                                }}
                                transition={{ duration: 0.25 }}>
                                <img className="news-image" src={news.img_url} alt={news.title} />
                                <div className="news-content">
                                    <div className="news-sub-h-text">
                                        <div className="news-category">Finance</div>
                                        <div className="news-actions">
                                            <IonIcon icon={downloadOutline}></IonIcon>
                                            <IonIcon icon={bookmarkOutline}></IonIcon>
                                        </div>
                                    </div>
                                    <hr/>
                                    <h2>{news.title}</h2>
                                    <p ref={newsContentRef}>{news.description}</p>
                                    <div className="news-footer">
                                        <span>{news.time} | {news.source}</span>
                                        <button onClick={()=>openDetailPanel(news)} className="view_news_button"> <IonIcon icon={eyeSharp}/> Read more</button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </IonContent>
            <NewsDetailSheetModal isOpen={isDetailOpen}
                                  newsDetailsData={newsDetailsData}
                                  onDidDismiss={() => setIsDetailOpen(false)} />
        </IonPage>
    );
}

