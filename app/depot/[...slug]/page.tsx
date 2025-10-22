import React from 'react';
import styles from "../depot.module.css";

import MainNav from '@/components/MainNav';
import ProblemMarkdown from '@/components/depot/ProblemMarkdown';

import path from 'path';

export default async function Page(
    {params}: {params: Promise<{slug: string[]}>}
) {
  const { slug } = await params;
  const slugJoin = path.join(...slug);

  return (
    <div className={styles.container}>
      <MainNav />

      <main className={styles.article}>
        <ProblemMarkdown slug={slugJoin} />
      </main>
    </div>
  );
}