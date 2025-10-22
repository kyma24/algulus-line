import MainNav from '@/components/MainNav';
import React from 'react';
import styles from "./depot.module.css";

import ProblemList from '@/components/depot/ProblemList';
import { getAllProblemPaths } from '@/utils/getSlugs';

const page = () => {
  return (
    <div className={styles.container}>
        <div className="relative">
          <MainNav />
        </div>

        <main className={styles.interface}>
          <ProblemList allProblemPaths={getAllProblemPaths()}/>
        </main>
    </div>
  );
};

export default page;