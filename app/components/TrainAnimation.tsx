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

            {/* train */}
            <div className={`${styles.train}`} />

            {/* road */}
            <div className={"w-1/2 absolute -bottom-1 left-1/2 -translate-x-1/2"}>
                <svg height="100%" width="100%" viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="black" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <polygon points="240,0 270,0 90,480 0,480" fill="#E8302E" />
                    <polygon points="270,0 300,0 180,480 90,480" fill="#F24A23" />
                    <polygon points="300,0 330,0 270,480 180,480" fill="#FBD30E" />
                    <polygon points="330,0 360,0 360,480 270,480" fill="#04944C" />
                    <polygon points="360,0 390,0 450,480 360,480" fill="#0E9CDC" />
                    <polygon points="390,0 420,0 540,480 450,480" fill="#633594" />
                    <polygon points="420,0 450,0 630,480 540,480" fill="#653D23" />
                    <polygon points="450,0 480,0 720,480 630,480" fill="#E795B4" />
                    <polygon points="240,0 480,0 720,480 0,480" fill="url(#fadeGradient)" />
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

export default TrainAnimation