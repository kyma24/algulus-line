'use client';

import { motion, useAnimationFrame } from "framer-motion";
import React, { useRef } from 'react';
import styles from './TrainAnimation.module.css';

const TrainAnimation = () => {
    const leftMts = Array.from({ length: 5 }).map((_, i) => ( {
        id: i, delay: i/5
    }));
    const rightMts = Array.from({ length: 5}).map((_, i) => ( {
        id: i, delay: i/5 + 0.1
    }));

    return (
        <div className={styles.container}> 
            {/* left mountains */}
            <div className={`${styles.scene} top-1/2 left-0`}>
                {leftMts.map(({ id, delay }) => (
                    <Mountain key={id} delay={delay} flip={false} />
                ))}
            </div>

            {/* right mountains */}
            <div className={`${styles.sceneRight} top-1/2 left-1/2`}>
                {rightMts.map(({ id, delay }) => (
                    <Mountain key={id} delay={delay} flip={true} />
                ))}
            </div>

            {/* train */}
            <div className={`${styles.train}`} />
        </div>
    );
}

const Mountain = ({ delay, flip }: {delay: number, flip: boolean}) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useAnimationFrame((t) => {
        if(!ref.current) return;

        const progress = ((t/5000) + delay) % 1;
        const y = -200*progress;
        const z = -1000*progress;
        const zIndex = Math.round(1000+z);
        const opacity = 1-(progress**2);

        ref.current.style.transform = `translateY(${y}px) translateZ(${z}px)`;
        ref.current.style.zIndex = String(zIndex);
        ref.current.style.opacity = String(opacity);
    });

    const dir = flip ? "scale-x-[-1]" : "";

    return (
        <div ref={ref} className={`${styles.mountain}`+" "+dir} />
    );
};

export default TrainAnimation