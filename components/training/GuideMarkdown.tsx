import styles from "./GuideMarkdown.module.css";
import markdownComponents from "../markdownComponents";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export default async function MarkdownSection({slug}: {slug: string}) {

    const filePath = path.join(process.cwd(), "content/guides", `${slug}/main.md`);
    console.log(filePath);

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
        <article className={`${styles.container} prose mx-auto`}>
            <h1>{data.title}</h1>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                {content}
            </ReactMarkdown>
            <div className={styles.tags}></div>
        </article>
    );
}