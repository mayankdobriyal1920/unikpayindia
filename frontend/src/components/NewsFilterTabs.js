import React from 'react';

export default function NewsFilterTabs() {
    return (
        <div className="news-tabs">
            <button className="tab active">Trending</button>
            <button className="tab">Opinion</button>
            <button className="tab">Finance</button>
            <button className="tab">Audit</button>
            <button className="tab">Industry</button>
        </div>
    );
}
