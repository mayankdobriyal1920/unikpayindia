import React from 'react';
import moment from 'moment-timezone';

export default function NewsSnippetItem({newsData,handleListClick,selectedId}) {

    return (
        <div onClick={()=>handleListClick(newsData)} className={`news-snippet-item ${selectedId === newsData?.id ? 'active' : ''}`}>
            <img
                src={newsData?.img_url}
                alt="News"
                className="news-thumbnail"
            />
            <div className="news-snippet-content">
                <div className="news-category">{newsData?.category}</div>
                <h3 className="news-title">
                    {newsData?.content}
                </h3>
                <div className="news-meta">
                    <span className="news-author-name">{newsData?.source}</span>
                    <span> • </span>
                    <span className="news-date">{moment(newsData?.created_at).format('MMM DD, YYYY')}</span>
                </div>
            </div>
        </div>
    );
}
