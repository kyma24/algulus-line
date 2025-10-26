'use client';

import React, { useState } from 'react';
import styles from "./TopicSidenav.module.css";

import HierarchyItem from './HierarchyItem';

import { topics } from '@/constants/topics';
import { topicChildren } from '@/constants/subtopics';

// todo: if sidebar gets too short, collapse sections into one button

export const TopicSidenav = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [topicID, setTopicID] = useState(-1);

  const handleSideOpen = (id: number) => {
    if(!panelOpen) setPanelOpen(true);
    setTopicID(id);
  };

  return (
    <div className={styles.container}>

      <div className={styles.sidebar}>
          {[0,1,2,3,4,5,6,7].map((i) => (
          <button 
              key={i}
              className={styles.navButton}
              onClick={() => handleSideOpen(i)}>
              <div className={`w-1/1 aspect-square`} style={{ backgroundColor: topics[i].color }}/>
              <p className="text-sm text-[#bdc2cb] font-[outfit] font-semibold">{topics[i].short}</p>
          </button>
          ))}
      </div>

      <div className={styles.maskWrapper}>
        <div className={`${styles.panel} ${panelOpen ? styles.panelOpen : styles.panelClosed}`}>
          <div className={styles.bar}>
            <p className="text-base text-[#989FAE] font-[chillax] font-bold">
              {(topicID>=0)?topics[topicID].name:""}
            </p>
            <button 
              className="h-1/1 aspect-square bg-red-700 hover:cursor-pointer"
              onClick={() => setPanelOpen(false)} />
          </div>
          
          <div className={styles.hierarchy}>
            {(topicID>=0)?
            topicChildren[topics[topicID].slug].map((subtopic, i) => (
              <HierarchyItem key={i} 
                name={subtopic.name} 
                slug={subtopic.subslug} />
            ))
            :""}
          </div>
        </div>
      </div>

    </div>
  );
};

export const JustSidenav = () => {
  return (
    <div className={styles.container}>

      <div className={styles.sidebar}>
          {[0,1,2,3,4,5,6,7].map((i) => (
          <button 
              key={i}
              className={styles.navButton}>
              <div className={`w-1/1 aspect-square`} style={{ backgroundColor: topics[i].color }}/>
              <p className="text-sm text-[#bdc2cb] font-[outfit] font-semibold">{topics[i].short}</p>
          </button>
          ))}
      </div>

    </div>
  );
}