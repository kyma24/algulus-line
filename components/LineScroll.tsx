'use client';

import { motion, useAnimationFrame } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import styles from './LineScroll.module.css';
import Link from "next/link";

const LineScroll = () => {

      const lines = [{
            /*red*/
            d: "M405 0 L405 480 L-100 480 M0 1250 L500 1250",
            stroke: "#d92632", cx: "500", cy: "1250"}, {
            /*brown*/
            d: "M1035 0 L1035 480 L1540 480 M1440 2000 L940 2000",
            stroke: "#933310", cx: "940", cy: "2000"}, {
            /*orange*/
            d: "M495 0 L495 570 L-100 570 M0 2750 L500 2750",
            stroke: "#EC5809", cx: "500", cy: "2750"}, {
            /*purple*/
            d: "M945 0 L945 570 L1540 570 M1440 3500 L940 3500",
            stroke: "#6D4BDC", cx: "940", cy: "3500"}, {
            /*pink*/
            d: "M585 0 L585 660 L-100 660 M0 4250 L500 4250",
            stroke: "#DB67BE", cx: "500", cy: "4250"}, {
            /*green*/
            d: "M855 0 L855 660 L1540 660 M1440 5000 L940 5000",
            stroke: "#53A754", cx: "940", cy: "5000"}, {
            /*yellow*/
            d: "M675 0 L675 750 L-100 750 M0 5750 L500 5750",
            stroke: "#f99f3e", cx: "500", cy: "5750"}, {
            /*blue*/
            d: "M765 0 L765 750 L1540 750 M1440 6500 L940 6500",
            stroke: "#3884ff", cx: "940", cy: "6500"},
      ];

      const boxes = [{
            left: "left-[calc(1000/1440*100%)]", top: "top-[calc(1250/7000*100%)]"}, {
            left: "left-[calc(440/1440*100%)]", top: "top-[calc(2000/7000*100%)]"}, {
            left: "left-[calc(1000/1440*100%)]", top: "top-[calc(2750/7000*100%)]"}, {
            left: "left-[calc(440/1440*100%)]", top: "top-[calc(3500/7000*100%)]"}, {
            left: "left-[calc(1000/1440*100%)]", top: "top-[calc(4250/7000*100%)]"}, {
            left: "left-[calc(440/1440*100%)]", top: "top-[calc(5000/7000*100%)]"}, {
            left: "left-[calc(1000/1440*100%)]", top: "top-[calc(5750/7000*100%)]"}, {
            left: "left-[calc(440/1440*100%)]", top: "top-[calc(6500/7000*100%)]"},
      ];

      const topics = [{
            name: "Basic Concepts", href: "/basic-concepts", subtopics: ["Big O", "Logic"]}, {
            name: "Data Structures", href: "/data-structures", subtopics: ["Array", "List", "Set", "Stack", "Queue", "Map"]}, {
            name: "General Algorithms", href: "/general-algorithms", subtopics: ["Sorting", "Searching"]}, {
            name: "Math", href: "/math", subtopics: ["Bit Manipulation", "Combinatorics", "Geometry", "Modular Arithmetic", "Number Theory"]}, {
            name: "Dynamic Programming", href: "/dynamic-programming", subtopics: ["Optimization", "Approaches", "Knapsack", "Grid", "LIS", "Bitmask", "Range", "Digit"]}, {
            name: "Graph Theory", href: "/graph-theory", subtopics: ["Undirected", "Directed", "Traversal", "Connected Components", "Min/Max Spanning Tree", "Cycles", "Shortest Path", "Topological Order", "Bipartition", "Flow"]}, {
            name: "Trees", href: "/trees", subtopics: ["Traversal", "Diameter", "Subtrees", "Binary Tree", "Lowest Common Ancestor", "Decompositions"]}, {
            name: "Querying", href: "/querying", subtopics: ["Range Queries", "Point Update Point Query", "Point Update Range Query", "Range Update Point Query", "Range Update Range Query"]},
      ];

      return (
      <div className={`${styles.container} flex justify-center`}>
            <div className={"w-1/1 max-w-5xl"}>
                  <svg height="100%" width="100%" viewBox="0 0 1440 7000" xmlns="http://www.w3.org/2000/svg">
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
                        <rect width="300" height="7000" x="0" y="0" fill="url(#rightFade)" />
                        <rect width="300" height="7000" x="1140" y="0" fill="url(#leftFade)" />
                  </svg>
            </div>
            {boxes.map((box, i) => (
                  <div key={i} className={`${styles.topicBox} absolute ${box.top} ${box.left}`}>
                        <div>
                              <p className={`${styles.fontSmall} font-[chillax] font-bold`}>STATION {i}</p>
                              <h2 className={`${styles.fontBig} font-[outfit] font-semibold`}>{topics[i].name}</h2>
                        </div>
                        <div className="flex flex-row flex-wrap font-[outfit] font-medium">
                              {topics[i].subtopics.map((topic, j) => (
                                    (j<topics[i].subtopics.length-1) ? (topic + " • ") : (topic)
                              ))}
                        </div>
                        <Link className={`${styles.button} font-[chillax] font-bold rounded-3xl bg-[#A4ABB7]`} href={topics[i].href}>START</Link>
                  </div>
            ))}
      </div>
  );
}

export default LineScroll;