'use client';

import { motion, useAnimationFrame } from "framer-motion";
import React, { useRef } from 'react';
import styles from './TrainHero.module.css';

const TrainHero = () => {
    const leftMts = Array.from({ length: 5 }).map((_, i) => ( {
        id: i, delay: i/5
    }));
    const rightMts = Array.from({ length: 5}).map((_, i) => ( {
        id: i, delay: i/5 + 0.1
    }));

    return (
        <div className={styles.container}> 
            {/* title 
            <h1 className="font-head font-extrabold text-[8vw] absolute top-1/2 left-1/2 -translate-y-1/1 -translate-x-1/2 z-1001">
                ...
            </h1>*/}
            <h1 className="font-head font-extrabold text-[8vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-1001">
                Algulus Line
            </h1>

            {/* left mountains */}
            <div className={`${styles.sceneLeft} top-1/2 left-0`}>
                {leftMts.map(({ id, delay }) => (
                    <Mountain key={id} delay={delay} flip={true} />
                ))}
            </div>

            {/* right mountains */}
            <div className={`${styles.sceneRight} top-1/2 left-1/2`}>
                {rightMts.map(({ id, delay }) => (
                    <Mountain key={id} delay={delay} flip={false} />
                ))}
            </div>

            {/* train 
            <div className={`${styles.train}`} />*/}

            {/* road */}
            <div className={"w-1/1 absolute -bottom-1 left-1/2 -translate-x-1/2"}>
                <svg height="100%" width="100%" viewBox="0 0 1440 480" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--background)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* colored lines */}
                    <polygon points="600,0 630,0 450,480 360,480" fill="#951b2d" />
                    <polygon points="630,0 660,0 540,480 450,480" fill="#d92632" />
                    <polygon points="660,0 690,0 630,480 540,480" fill="#DB67BE" />
                    <polygon points="690,0 720,0 720,480 630,480" fill="#f99f3e" />
                    <polygon points="720,0 750,0 810,480 720,480" fill="#3884ff" />
                    <polygon points="750,0 780,0 900,480 810,480" fill="#53A754" />
                    <polygon points="780,0 810,0 990,480 900,480" fill="#6D4BDC" />
                    <polygon points="810,0 840,0 1080,480 990,480" fill="#6A3A20" />

                    {/* fade into bg */}
                    <polygon points="600,0 840,0 1080,480 360,480" fill="url(#fadeGradient)" />

                    {/* separating lines */}
                    <line x1="600" y1="0" x2="360" y2="480" stroke="black" strokeWidth="9" />
                    <line x1="630" y1="0" x2="450" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="660" y1="0" x2="540" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="690" y1="0" x2="630" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="720" y1="0" x2="720" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="750" y1="0" x2="810" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="780" y1="0" x2="900" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="810" y1="0" x2="990" y2="480" stroke="black" strokeWidth="6" />
                    <line x1="840" y1="0" x2="1080" y2="480" stroke="black" strokeWidth="9" />
                </svg>
            </div>
        </div>
    );
}

const Mountain = ({ delay, flip }: {delay: number, flip: boolean}) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useAnimationFrame((t) => {
        if(!ref.current) return;

        const progress = ((t/5000) + delay) % 1;
        const y = -200*progress;
        const z = -1000*progress+550;
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

export default TrainHero