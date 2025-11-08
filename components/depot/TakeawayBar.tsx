'use client';

import { useState } from "react";
import styles from "./TakeawayBar.module.css";
import markdownComponents from "../markdownComponents";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";

export default function TakeawayBar({content} : {content: string}) {
    const [noteOpen, setNoteOpen] = useState(false);

    const toggleNote = () => {
        setNoteOpen(!noteOpen);
    }
  
    return (
        <>
            <div className={styles.overlay}>
                <button 
                    className={styles.takeaways}
                    onClick={toggleNote}>
                    <div className={noteOpen ? styles.upCaret : styles.downCaret} />
                    <p>TAKE AWAYS</p>
                    <div className={noteOpen ? styles.upCaret : styles.downCaret} />
                </button>
                <div className={`${noteOpen ? styles.openContent : styles.closeContent}`}>
                    <div className={styles.popOut}>
                        <article className={`${styles.bodyText} prose`}>
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm,remarkMath]}
                                rehypePlugins={[rehypeRaw,rehypeKatex]} 
                                components={markdownComponents}>
                                {content}
                            </ReactMarkdown>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );

}