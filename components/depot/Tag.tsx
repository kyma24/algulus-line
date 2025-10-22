import React from 'react';
import styles from "./Tag.module.css";

import { tags, diffTags } from '@/constants/tags';

export const Tag = ({name}: {name: string}) => {
  const mapIndex = name as keyof typeof tags;

  const color = (name in tags)? tags[mapIndex].color : "#bdc2cb";
  const bg = color+"30";
  const brd = "2px solid "+color;

  return (
    <div 
      className={styles.tag} 
      style={{
        color: color, 
        backgroundColor: bg,
        border: brd}}>
      {name}
    </div>
  );
};

export const TextTag = ({name, nocomma}: {name: string, nocomma: boolean}) => {
  const mapIndex = name as keyof typeof tags;

  const txt = (name in tags)? tags[mapIndex].color+"ba" : "#bdc2cbba";

  if(nocomma) {
    return (
      <span style={{color: txt}}>
        {name}
      </span>
    );
  } else {
    return (
      <span>
        <span style={{color: "#bdc2cb"}}>, </span>
        <span style={{color: txt}}>{name}</span>
      </span>
    );
  }
};

export const DiffTag = ({diff}: {diff: number}) => {
  const mapIndex = diff as keyof typeof diffTags;

  const name = (diff in diffTags) ? diffTags[mapIndex].name : "N/A";
  const color = (diff in diffTags) ? diffTags[mapIndex].color : "text-[#bdc2cb]";
  const brd = (diff in diffTags) ? diffTags[mapIndex].border : "border-[#bdc2cb]";

  return (
    <div className={`${styles.tag} ${color} ${brd} border-2`}>
      {name}
    </div>
  );
}