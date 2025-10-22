'use client';

import React, { useState } from 'react';
import styles from "./TagsFilter.module.css";

import { tags } from "../../constants/tags";

const TagsFilter = () => {
  let currentTags:string[] = ["under construction!"];

  return (
    <div className={styles.container}>
      <div className="font-semibold">
        Search Tags
      </div>
      <div className={styles.currentBox}>
        {currentTags.map((tag, i) => (
          <TagItem key={i} name={tag} />
        ))}
      </div>
      <div className={styles.selectBox}>
        {/* select tags */}
      </div>
      <div className={styles.filterButton}>
        {/* submit for filter */}
      </div>
    </div>
  );
};

const TagItem = ({name}: {name: string}) => {
  return (
    <div className={styles.tag}>
      {name}
    </div>
  );
};

const SelectDrop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>

    </div>
  );
};

export default TagsFilter;