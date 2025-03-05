// app/components/PriceRange.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from './PriceRange.module.css';


const PriceRange = ({
    min = 0,
    max = 500,
    step = 1,
    defaultMin = 52,
    defaultMax = 485
}) => {
    const [minPrice, setMinPrice] = useState(defaultMin);
    const [maxPrice, setMaxPrice] = useState(defaultMax);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice);
        setMaxPrice(value);
    };

    const getPercentage = (value) => ((value - min) / (max - min)) * 100;

    return (
        <div className={styles.priceRangeContainer}>
           

            <div className={styles.sliderContainer}>
                <div className={styles.track} />
                <div
                    className={styles.highlight}
                    style={{
                        left: `${getPercentage(minPrice)}%`,
                        right: `${100 - getPercentage(maxPrice)}%`
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minPrice}
                    onChange={handleMinChange}
                    className={styles.slider}
                    aria-label="Minimum price"
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className={styles.slider}
                    aria-label="Maximum price"
                />
            </div>
            <div className={styles.priceDisplay}>
                <span className='mx-2'>${minPrice}</span>
                <span>-</span>
                <span className='mx-2'>${maxPrice}</span>
            </div>
        </div>
    );
};

export default PriceRange;