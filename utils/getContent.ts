import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentPath = path.join(process.cwd(), "content/guides");

export type GuideContent = {
    title: string;
    tags?: string[];
    content: string;
}

export function getContentBySlug(slug: string) {
    try {
        const slugArray = Array.isArray(slug) ? slug : [slug];
        const filePath = path.join(contentPath, ...slugArray)+".md";
        const file = fs.readFileSync(filePath, "utf-8");
        
        const {data, content} = matter(file);
        return { title: data.title, tags: data.tags ?? [], content };
    } catch(err) {
        console.error("Error:", err);
        return null;
    }
}