import React from 'react';
import Link from 'next/link';
import styles from "./ProblemList.module.css";

import { getProblemDataByPath, getProblemSlugByPath } from '@/utils/getSlugs';

import TagsFilter from './TagsFilter';
import { DiffCircle } from './DiffCircle';
import { SmallTag } from './Tag';

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
      <td className={`${styles.tagsCol} ${styles.centerTags}`}>
        {data.tags.map((tag:string, i:number) => (
          <SmallTag key={i} name={tag} />
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

export default ProblemList;