'use client'

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Carousel.module.css';

const items = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
  { id: 4, content: 'Item 4' },
  { id: 5, content: 'Item 5' },
  { id: 6, content: 'Item 6' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create array with 3 sets of items to ensure smooth infinite scroll
  const extendedItems = [...items, ...items, ...items];

  const handleTransitionEnd = useCallback(() => {
    // If we've scrolled past the middle set
    if (currentIndex >= items.length * 2) {
      setIsTransitioning(true);
      // Jump back to the middle set
      setCurrentIndex(currentIndex - items.length);
      // Remove transition temporarily
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }
    // If we've scrolled before the middle set
    else if (currentIndex < items.length) {
      setIsTransitioning(true);
      // Jump forward to the middle set
      setCurrentIndex(currentIndex + items.length);
      // Remove transition temporarily
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }
  }, [currentIndex, items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const translateValue = currentIndex * (-100 / extendedItems.length);

  return (
    <div className={`${styles.container} 2xl:w-[1150px] overflow-hidden mx-auto my-6`}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: isTransitioning ? 'none' : 'transform 0.5s ease-in-out',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={styles.item}
          >
            <div className={`${styles.content}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;