'use client';

import MainNav from '@/components/MainNav';
import React, { useState } from 'react';
import styles from "./training.module.css";

import { topics } from "../../constants/topics";
import HierarchyItem from '@/components/HierarchyItem';
import GuideMarkdown from '@/components/GuideMarkdown';

// todo: if sidebar gets too short, collapse sections into one button

const page = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [topicID, setTopicID] = useState(-1);
  const [subtopicID, setSubtopicID] = useState(-1);
  const [subsub, setSubsub] = useState(-1);

  const handleSideOpen = (id: number) => {
    setPanelOpen(true);
    setTopicID(id);
    setSubtopicID(-1);
    setSubsub(-1);
  };

  const handleSubtopic = (id: number) => {
    setSubtopicID(id);
    setSubsub(-1);
  };

  const handleSubsub = (id: number) => {
    setSubsub(id);
  };

  const getCurrentSlug = () => {
    if(topicID<0) return "default";

    var slug = topics[topicID].slug;
    if(subtopicID<0) return slug+"/main";

    slug += "/" + topics[topicID].subtopicSlugs[subtopicID];
    if(subsub<0) return slug+"/main";

    slug += "/" + topics[topicID].subsub[subtopicID][subsub];
    return slug+"/main";
  };

  return (
    <div className={`${styles.container}`}>
        <div className="relative">
          <MainNav />
        </div>

        <main className={styles.interface}>

          <div className={styles.sidebar}>
            {[0,1,2,3,4,5,6,7].map((i) => (
              <button 
                key={i}
                className={styles.navButton}
                onClick={() => handleSideOpen(i)}>
                  <div className={`w-1/1 aspect-square`} style={{ backgroundColor: topics[i].color }}/>
                  <p className="text-sm text-white font-[outfit] font-semibold">{topics[i].short}</p>
              </button>
            ))}
          </div>

          <div className={`${styles.panel} ${panelOpen ? styles.panelOpen : styles.panelClosed}`}>
            <div className={styles.bar}>
              <p className="text-base text-gray-900 font-[chillax] font-bold">
                {(topicID>=0)?topics[topicID].name:""}
              </p>
              <button 
                className="h-1/1 aspect-square bg-red-700 hover:cursor-pointer"
                onClick={() => setPanelOpen(false)} />
            </div>
            
            <div className={styles.hierarchy}>
              {(topicID>=0)?
              topics[topicID].subtopics.map((subtopic, i) => (
                <HierarchyItem key={i} name={subtopic} isSelected={false} onClick={() => handleSubtopic(i)}>
                  {topics[topicID].subsub[i].map((concept, j) => (
                    <HierarchyItem key={j} name={concept} isSelected={false} onClick={() => handleSubsub(j)} />
                  ))}
                </HierarchyItem>
              ))
              :""}
            </div>
          </div>

          <div className={styles.board}>
            <GuideMarkdown slug={getCurrentSlug()} />
          </div>

        </main>
    </div>
  );
};

export default page;