import MainNav from '@/components/MainNav';
import React, { useState } from 'react';
import styles from "./training.module.css";

import { topics } from "../../constants/topics";
import GuideMarkdown from '@/components/training/GuideMarkdown';
import TopicSidenav from '@/components/training/TopicSidenav';

const page = () => {

  return (
    <div className={`${styles.container}`}>
        <div className="relative">
          <MainNav />
        </div>

        <main className={styles.interface}>

          <TopicSidenav />

          <div className={styles.board}>
            <GuideMarkdown slug={"default"} />
          </div>

        </main>
    </div>
  );
};

export default page;