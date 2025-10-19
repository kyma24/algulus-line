import MainNav from '@/components/MainNav';
import React from 'react';
import styles from "../training.module.css";

import GuideMarkdown from '@/components/training/GuideMarkdown';
import {TopicSidenav} from '@/components/training/TopicSidenav';
import path from 'path';

// todo: if sidebar gets too short, collapse sections into one button

export default async function Page(
    {params}: {params: Promise<{slug: string[]}>}
) {
  const { slug } = await params;
  const slugJoin = path.join(...slug);

  return (
    <div className={`${styles.container}`}>
        <div className="relative">
          <MainNav />
        </div>

        <main className={styles.interface}>

            <TopicSidenav />

            <div className={styles.board}>
                <GuideMarkdown slug={slugJoin} />
            </div>

        </main>
    </div>
  );
};