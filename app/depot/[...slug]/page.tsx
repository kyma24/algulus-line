import React from 'react';
import styles from "../depot.module.css";

import MainNav from '@/components/MainNav';
import TakeawayBar from '@/components/depot/TakeawayBar';
import { ProblemMarkdown, ProblemMeta } from '@/components/depot/ProblemMarkdown';

import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

import { problemStaticPages } from '@/constants/staticProbs';
export async function generateStaticParams() {
  return problemStaticPages.map(prob => ({slug: prob}));
}

export default async function Page(
    {params}: {params: Promise<{slug: string[]}>}
) {
  const { slug } = await params;
  const slugJoin = path.join(...slug);
  
  const filePath = path.join(process.cwd(), "content/problems", `${slugJoin}.md`);

  let raw="";
  try { 
      raw=await fs.readFile(filePath,"utf8");
  }
  catch { 
      return (
          <div className={styles.container}>
              404: Not found
          </div>
      ); 
  }

  const {data, content} = matter(raw);

  const metadata:ProblemMeta = {
    title: data.title,
    source: data.source,
    link: data.link,
    difficulty: data.difficulty,
    concept: data.concept,
    tags: data.tags,
  };

  const allContent = content.split("---TAKEAWAYS---");
  const mainContent=allContent[0];
  const takeaways=allContent[1];

  return (
    <div className={styles.container}>
      <MainNav />

      <main className={styles.article}>
        <TakeawayBar content={takeaways} />
        <ProblemMarkdown data={metadata} content={mainContent} />
      </main>
    </div>
  );
}