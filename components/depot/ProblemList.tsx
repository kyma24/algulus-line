import React from 'react';
import styles from "./ProblemList.module.css";

import { getProblemDataByPath, getProblemSlugByPath } from '@/utils/getSlugs';

import TagsFilter from './TagsFilter';
import Link from 'next/link';

// top: filters (tag, source, concept, ...)

// input: set of problems
// display: like lines of code: 
// problem index, name/title, source, concept, tags, difficulty

const ProblemList = ({allProblemPaths}: {allProblemPaths: string[]}) => {
  return (
    <div className={styles.container}>
      <TagsFilter />

      <table className={styles.list}>
        <thead>
          <ListHeader />
        </thead>
        <tbody>
          {allProblemPaths.map((path,i) => (
            <ProblemItem key={i} ind={i} path={path} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProblemItem = ({ind, path}: {ind: number, path: string}) => {

  const data = getProblemDataByPath(path);
  const slug = getProblemSlugByPath(path);

  return (
    <tr className={styles.item}>
      <td className={styles.indexCol}>
        {ind+1}
      </td>
      <td className={`${styles.titleCol} ${styles.titles}`}>
        <Link href={`/depot/${slug}`}>
          {data.title}
        </Link>
      </td>
      <td className={styles.sourceCol}>
        {data.source}
      </td>
      <td className={styles.diffCol}>
        <DiffCircle diff={data.difficulty} />
      </td>
      <td className={styles.tagsCol}>
        {data.tags.map((tag:string, i:number) => (
          (i==0) ? (
            <p key={i} className="inline">{tag}</p>
          ) : (
            <p key={i} className="inline">{`, ${tag}`}</p>
          )
        ))}
      </td>
    </tr>
  );
};

const ListHeader = () => {
  return (
    <tr className={styles.header}>
      <th className={styles.indexCol}>
        0
      </th>
      <th className={styles.titleCol}>
        Problem Name
      </th>
      <th className={styles.sourceCol}>
        Source
      </th>
      <th className={styles.diffCol} />
      <th className={styles.tagsCol}>
        Tags
      </th>
    </tr>
  );
};

const DiffCircle = ({diff}: {diff: number}) => {
  let color = "";

  switch(diff) {
    case(10): 
      color="bg-emerald-600";
      break;
    case(15):
      color="bg-emerald-800";
      break;
    case(20): 
      color="bg-amber-500";
      break;
    case(25):
      color="bg-amber-800";
      break;
    case(30): 
      color="bg-rose-500";
      break;
    case(35):
      color="bg-rose-800";
      break;
    default: 
      color="bg-neutral-600";
      break;
  }

  return (
    <div className={`w-1/1 aspect-square rounded-full ${color}`} />
  );
};

export default ProblemList;