import MainNav from '@/components/MainNav';
import React from 'react';
import styles from "./depot.module.css";

import ProblemList from '@/components/depot/ProblemList';
import { getAllProblemSlugs } from '@/utils/getSlugs';

const page = () => {
  return (
    <div className={styles.container}>
        <div className="relative">
          <MainNav />
        </div>

        <main className={styles.interface}>
          <ProblemList allProblemSlugs={getAllProblemSlugs()}/>
        </main>
    </div>
  );
};

export default page;