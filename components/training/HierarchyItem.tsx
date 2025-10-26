'use client';

import React, { ReactNode, useState } from 'react';
import styles from "./HierarchyItem.module.css";
import Link from 'next/link';

import { subtopicChildren } from '@/constants/subtopics';

const HierarchyItem = ({name, slug}: {name: string, slug: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true&&(!isOpen));
  };

  if(slug in subtopicChildren) {
    const subsubs = subtopicChildren[slug];
    return (
      <div className={styles.container}>
        <div className={`${styles.row}`}>
          <Link 
            href={`/training/${slug}`}
            className={styles.bar}>
            <p className="text-base text-[#bdc2cb] font-[outfit] font-medium">{name}</p>
          </Link>
          <div 
            className={`${styles.caret}`}
            onClick={toggle} />
        </div>
        <div className={`${styles.menu} ${(isOpen)?"block":"hidden"}`}>
          {subsubs.map((subsubtopic,i) => (
            <HierarchyItem key={i} 
              name={subsubtopic.name} 
              slug={subsubtopic.subslug} />
          ))}
        </div>
      </div>
    );
  } 
  else {
    return (
      <div className={styles.container}>
        <Link 
          href={`/training/${slug}`}
          className={styles.bar}>
          <p className="text-base text-[#bdc2cb] font-[outfit] font-medium">{name}</p>
        </Link>
      </div>
    );
  }
};

export default HierarchyItem;