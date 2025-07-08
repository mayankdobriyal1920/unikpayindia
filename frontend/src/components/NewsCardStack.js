// NewsCardStack.jsx
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function NewsCardStack({ dummyNews, currentIndex, setCurrentIndex }) {
    const y = useMotionValue(0);

    const handleDragEnd = (event, info) => {
        if (info.offset.y < -100 && currentIndex < dummyNews.length - 1) {
            setCurrentIndex(currentIndex + 1);
            y.set(0);
        } else if (info.offset.y > 100 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            y.set(0);
        } else {
            y.set(0);
        }
    };

    return (
        <div className="news-card-stack">
            {dummyNews.map((item, index) => {
                if (index < currentIndex - 1 || index > currentIndex + 1) return null;

                const isActive = index === currentIndex;

                return (
                    <motion.div
                        key={item.id}
                        className={`news-card ${isActive ? 'active' : 'under'}`}
                        drag={isActive ? 'y' : false}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        style={isActive ? { y } : {}}
                        onDragEnd={handleDragEnd}
                    >
                        <img src={item.imageUrl} alt={item.title} className="news-image" />
                        <div className="news-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="news-footer">
                                <span>{item.time} | {item.source}</span>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
