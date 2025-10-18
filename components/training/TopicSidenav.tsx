'use client';

import React, { useState } from 'react';
import styles from "./TopicSidenav.module.css";

import HierarchyItem from './HierarchyItem';

import { topics } from '@/constants/topics';

// todo: if sidebar gets too short, collapse sections into one button

const TopicSidenav = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [IDs, setIDs] = useState([-1, -1, -1]);
  const [topicID, setTopicID] = useState(-1);

  const handleSideOpen = (id: number) => {
    if(!panelOpen) setPanelOpen(true);
    setTopicID(id);
  };

  const handleSubtopic = (id: number) => {
    setIDs([topicID, id, -1]);
  };

  const handleSubsub = (parent: number, id: number) => {
    setIDs([topicID, parent, id]);
  };

  const getSubtopicSlug = (i: number) => {
    return topics[topicID].slug + '/' + topics[topicID].subtopicSlugs[i];
  };

  const getSubsubSlug = (i: number, j: number) => {
    return getSubtopicSlug(i) + '/' + topics[topicID].subsubSlugs[i][j];
  }

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
            topics[topicID].subtopics.map((subtopic, i) => (
              <HierarchyItem key={i} 
                name={subtopic} 
                slug={getSubtopicSlug(i)}
                isSelected={(IDs[0]==topicID)&&(IDs[1]==i)&&(IDs[2]<0)} 
                onClick={() => handleSubtopic(i)}>

                {topics[topicID].subsub[i].map((concept, j) => (
                  <HierarchyItem key={j} 
                    name={concept} 
                    slug={getSubsubSlug(i,j)}
                    isSelected={(IDs[0]==topicID)&&(IDs[1]==i)&&(IDs[2]==j)} 
                    onClick={() => handleSubsub(i,j)} />
                ))}

              </HierarchyItem>
            ))
            :""}
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopicSidenav;