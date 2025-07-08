import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsCardStack({ dummyNews, currentIndex }) {
    return (
        <div className="news-card-stack">
            <AnimatePresence>
                <motion.div
                    key={dummyNews[currentIndex].id}
                    className="news-card"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <img src={dummyNews[currentIndex].imageUrl} alt="" className="news-image" />
                    <div className="news-content">
                        <h2>{dummyNews[currentIndex].title}</h2>
                        <p>{dummyNews[currentIndex].description}</p>
                        <div className="news-footer">
                            <span>{dummyNews[currentIndex].time} | {dummyNews[currentIndex].source}</span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
