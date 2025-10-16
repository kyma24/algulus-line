'use client';

import { useEffect, useState } from "react";
import { GuideContent } from "@/utils/getContent";

import styles from "./GuideMarkdown.module.css";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function MarkdownSection({slug}: {slug: string}) {
    const [content, setContent] = useState<GuideContent | null>(null);

    useEffect(() => {
        fetch(`/api/guides/${slug}`)
            .then((res) => res.json())
            .then(setContent)
            .catch((err) => console.error("Error: ", err));
    }, [slug]);

    console.log(slug);

    if(!content) return (
        <div className={`${styles.container}`}>
            <p>Loading...</p>
        </div>
    );

    return (
        <article className={`${styles.container} prose mx-auto`}>
            <h1>{content.title}</h1>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content.content}
            </ReactMarkdown>
        </article>
    );
}