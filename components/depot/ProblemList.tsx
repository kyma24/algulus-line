import React from 'react';
import styles from "./ProblemList.module.css";

import TagsFilter from './TagsFilter';

// top: filters (tag, source, concept, ...)

// input: set of problems
// display: like lines of code: 
// problem index, name/title, source, concept, tags, difficulty

const ProblemList = ({allProblemSlugs}: {allProblemSlugs: string[]}) => {
  return (
    <div className={styles.container}>
      <TagsFilter />
    </div>
  );
};

export default ProblemList;