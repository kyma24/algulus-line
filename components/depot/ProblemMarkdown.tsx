import styles from "./ProblemMarkdown.module.css";
import markdownComponents from "../markdownComponents";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";

import {DiffTag, Tag} from "./Tag";

export interface ProblemMeta {
    title: string,
    source: string,
    link: string,
    difficulty: number,
    concept: string,
    tags: string[],
};

export async function ProblemMarkdown({data, content}: {data: ProblemMeta, content: string}) {

    return (
        <article className={`${styles.container} prose`}>
            <div className={styles.topInfo}>
                <div>
                    <p className={styles.source}>{data.source}</p>
                    <div className={styles.titleBox}>
                        <h1>{data.title}</h1>
                        <a 
                            href={data.link} target="_blank" rel="noopener noreferrer" 
                            className={styles.linkBox}>
                            <div className={styles.linkArrow} />
                        </a>
                    </div>
                </div>
                <div className={styles.metadata}>
                    <DiffTag diff={data.difficulty} />
                    <TagsDisplay tags={data.tags} />
                </div>
            </div>
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

const TagsDisplay = ({tags}: {tags: string[]}) => {
    return (
        <span className={styles.tagContainer}>
            {tags.map((name,i) => (
                <Tag key={i} name={name} />
            ))}
        </span>
    );
};