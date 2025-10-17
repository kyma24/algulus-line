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

  const getCurrentSlug = () => {
    /* if(IDs[0]<0) return ["default"];

    var slug = [topics[IDs[0]].slug];
    if(IDs[1]<0) return ["default"];

    slug.push(topics[IDs[0]].subtopicSlugs[IDs[1]]);
    if(IDs[2]<0) {
      slug.push("/main");
      return slug;
    }

    slug.push(topics[IDs[0]].subsubSlugs[IDs[1]][IDs[2]]);
    slug.push("/main");
    return slug; */

    if(IDs[0]<0) return "default";

    var slug = topics[IDs[0]].slug;
    if(IDs[1]<0) return "default";

    slug += '/'+topics[IDs[0]].subtopicSlugs[IDs[1]];
    if(IDs[2]<0) return slug+"/main";

    slug += '/'+topics[IDs[0]].subsubSlugs[IDs[1]][IDs[2]];
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
                  <p className="text-sm text-[#bdc2cb] font-[outfit] font-semibold">{topics[i].short}</p>
              </button>
            ))}
          </div>

          <div className={styles.board}>

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
                    <HierarchyItem key={i} name={subtopic} isSelected={(IDs[0]==topicID)&&(IDs[1]==i)&&(IDs[2]<0)} onClick={() => handleSubtopic(i)}>
                      {topics[topicID].subsub[i].map((concept, j) => (
                        <HierarchyItem key={j} name={concept} isSelected={(IDs[0]==topicID)&&(IDs[1]==i)&&(IDs[2]==j)} onClick={() => handleSubsub(i,j)} />
                      ))}
                    </HierarchyItem>
                  ))
                  :""}
                </div>
              </div>
            </div>

            <GuideMarkdown slug={getCurrentSlug()} />
          </div>

        </main>
    </div>
  );
};

export default page;