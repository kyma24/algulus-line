'use client';

import { motion, useAnimationFrame } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import styles from './LineScroll.module.css';

const LineScroll = () => {

      const lines = [{
            /*brown*/
            d: "M1035 0 L1035 480 L1540 480 M1440 1750 L940 1750",
            stroke: "#6A3A20", cx: "940", cy: "1750"}, {
            /*purple*/
            d: "M945 0 L945 570 L1540 570 M1440 2750 L940 2750",
            stroke: "#6D4BDC", cx: "940", cy: "2750"}, {
            /*green*/
            d: "M855 0 L855 660 L1540 660 M1440 3750 L940 3750",
            stroke: "#53A754", cx: "940", cy: "3750"}, {
            /*blue*/
            d: "M765 0 L765 750 L1540 750 M1440 4750 L940 4750",
            stroke: "#3884ff", cx: "940", cy: "4750"}, {
            /*yellow*/
            d: "M675 0 L675 750 L-100 750 M0 4250 L500 4250",
            stroke: "#f99f3e", cx: "500", cy: "4250"}, {
            /*pink*/
            d: "M585 0 L585 660 L-100 660 M0 3250 L500 3250",
            stroke: "#DB67BE", cx: "500", cy: "3250"}, {
            /*orange*/
            d: "M495 0 L495 570 L-100 570 M0 2250 L500 2250",
            stroke: "#d92632", cx: "500", cy: "2250"}, {
            /*red*/
            d: "M405 0 L405 480 L-100 480 M0 1250 L500 1250",
            stroke: "#951b2d", cx: "500", cy: "1250"}
      ];

      return (
      <div className={`${styles.container} flex justify-center`}>
            <div className={"w-1/1 max-w-5xl"}>
                  <svg height="100%" width="100%" viewBox="0 0 1440 5250" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                              <linearGradient id="downFade" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="var(--background)" />
                                    <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                              <linearGradient id="rightFade" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--background)" />
                                    <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                              <linearGradient id="leftFade" x1="100%" y1="0%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="var(--background)" />
                                    <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                        </defs>

                        {lines.map((line, i) => (
                              <g key={i}>
                              <path d={line.d}
                                    stroke="var(--background)" strokeWidth="84" strokeLinejoin="round" strokeLinecap="round"
                                    fill="none" />
                              <path d={line.d} 
                                    stroke={line.stroke} strokeWidth="72" strokeLinejoin="round" strokeLinecap="round"
                                    fill="none" />
                              <g className={styles.stop}>
                                    <circle className={styles.ripple} cx={line.cx} cy={line.cy} r="100" fill="white" />
                                    <circle className={styles.ripple} cx={line.cx} cy={line.cy} r="100" fill="white" />
                                    <circle cx={line.cx} cy={line.cy} r="75" fill="var(--background)" />
                                    <circle cx={line.cx} cy={line.cy} r="50" fill="white" />
                                    <circle className={styles.core} cx={line.cx} cy={line.cy} r="25" fill="none" stroke="var(--background)" strokeWidth="15"  />
                              </g>
                              </g>
                        ))}
                        
                        {/* fades */}
                        <rect width="1440" height="500" x="0" y="0" fill="url(#downFade)" />
                        <rect width="300" height="5250" x="0" y="0" fill="url(#rightFade)" />
                        <rect width="300" height="5250" x="1140" y="0" fill="url(#leftFade)" />
                  </svg>
            </div>
            {/* red */}
            <div className={`${styles.topicBox} absolute top-[calc(1250/5250*100%)] left-[calc(1000/1440*100%)]`}>
            </div>
      </div>
  );
}

export default LineScroll;