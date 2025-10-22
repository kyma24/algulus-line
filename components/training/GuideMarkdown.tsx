import styles from "./GuideMarkdown.module.css";
import markdownComponents from "../markdownComponents";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";

import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export default async function GuideMarkdown({slug}: {slug: string}) {
    const suffix =  (slug=="default")?("default.md"):(`${slug}/main.md`);
    const filePath = path.join(process.cwd(), "content/guides", suffix);

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

    return (
        <article className={`${styles.container} prose`}>
            <h1>{data.title}</h1>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm,remarkMath]}
                rehypePlugins={[rehypeRaw,rehypeKatex]} 
                components={markdownComponents}>
                {content}
            </ReactMarkdown>
            <div className={styles.tags}></div>
        </article>
    );
}