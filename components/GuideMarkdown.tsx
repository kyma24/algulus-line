'use client';

import { useEffect, useState } from "react";
import { GuideContent } from "@/utils/getContent";

import styles from "./GuideMarkdown.module.css";

import ReactMarkdown from "react-markdown";

export default function MarkdownSection({slug}: {slug: string}) {
    const [content, setContent] = useState<GuideContent | null>(null);

    useEffect(() => {
        fetch(`/api/guides/${slug}`)
            .then((res) => res.json())
            .then(setContent)
            .catch((err) => console.error("Error: ", err));
    }, [slug]);

    if(!content) return (<p>Loading...</p>);

    return (
        <article className={`${styles.container} prose mx-auto`}>
            <h1>{content.title}</h1>
            <ReactMarkdown>
                {content.content}
            </ReactMarkdown>
        </article>
    );
}