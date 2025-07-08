import React from 'react';
import imgNws2 from "../theme/images/img-nws-2.png";
import imgNws3 from "../theme/images/img-nws-3.png";
import imgNws4 from "../theme/images/img-nws-4.png";
import imgNws5 from "../theme/images/img-nws-5.png";
import moment from "moment-timezone";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';           // Core Swiper styles
import 'swiper/css/pagination'; // Optional: for dots
import 'swiper/css/navigation'; // Optional: for arrows
import { Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Pagination]);

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
];
export default function TopFeaturedNews() {

    return (
        <div className="featured-news-scroller">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={1}          // One slide at a time
                spaceBetween={20}          // Space between slides
                loop={true}
                className="featured-news-carousel"
            >
                {sampleData.map((news, index) => (
                    <SwiperSlide key={index}>
                        <div className="featured-news-card">
                            <img
                                src={news.img_url}
                                alt="Featured"
                                className="featured-news-img"
                            />
                            <div className="featured-news-content">
                                <div className="featured-category">{news.category}</div>
                                <h2 className="featured-title">{news.content}</h2>
                                <div className="featured-meta">
                                    <span>{moment(news.created_at).format('MMM DD, YYYY')}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}
