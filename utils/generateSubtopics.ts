import fs from "fs";
import path from "path";
import matter from "gray-matter";

// CONSTRUCTS subtopics.js
// (npm run subtopicsetup)
// run when guides pages are updated -- automatically adjusts hierarchy

interface TopicInfo {
    name: string;
    subslug: string;
    order: number;
}

// slug: (name, subpath, subslug, order)...
export type TopicMap = Record<string,TopicInfo[]>;

let topicChildren:TopicMap = {};
let subtopicChildren:TopicMap = {};

const guidesDir = path.join(process.cwd(),"content/guides");
const outPath = path.join(process.cwd(),"constants/subtopics.ts");

function updateMaps() {
    const topics = fs.readdirSync(guidesDir, {withFileTypes: true});
    topics.forEach((topic) => {
        const topicDir = path.join(guidesDir,topic.name);

        const check=fs.statSync(topicDir);
        if(check.isDirectory()) {
            generateTopicsMap(topicDir,topic.name);
        }
    });

    const typeImport = "import {TopicMap} from \"@/utils/generateSubtopics\";";
    const topicOut = `\n\n export const topicChildren:TopicMap = ${JSON.stringify(topicChildren,null,4)};`;
    const subtopicOut = `\n\nexport const subtopicChildren:TopicMap = ${JSON.stringify(subtopicChildren,null,4)};`;

    fs.writeFileSync(outPath,typeImport+topicOut+subtopicOut);
}

function generateTopicsMap(dir: string, slug: string) {
    topicChildren[slug] = [];
    
    const subtopics = fs.readdirSync(dir, {withFileTypes: true});
    for(const subtopic of subtopics) {
        const subtopicDir = path.join(dir,subtopic.name);
        let subtopicInfo:TopicInfo = {
            name: "default",
            subslug: "default",
            order: 0,
        };

        let dataPath = "";
        const check=fs.statSync(subtopicDir);
        // expandable (has subsections)
        if(check.isDirectory()) {
            generateSubtopicsMap(subtopicDir,subtopic.name);
            dataPath = path.join(subtopicDir,"main.md");
        } 
        // single file
        else {
            dataPath = subtopicDir;
        }
        
        subtopicInfo.subslug = getSlugByPath(subtopicDir);
        
        const data = getDataByPath(dataPath);
        subtopicInfo.name = data.title;
        subtopicInfo.order = data.order;

        topicChildren[slug].push(subtopicInfo);
    };

    topicChildren[slug].sort((a,b) => {return a.order-b.order;});
}

function generateSubtopicsMap(dir: string, slug: string) {
    subtopicChildren[slug] = [];

    const subtopics = fs.readdirSync(dir, {withFileTypes: true});
    for(const subtopic of subtopics) {
        if(subtopic.name=="main.md") continue;
        
        const subtopicPath = path.join(dir,subtopic.name);
        
        const data = getDataByPath(subtopicPath);
        let subtopicInfo:TopicInfo = {
            name: data.title,
            subslug: getSlugByPath(subtopicPath),
            order: data.order,
        };
        subtopicChildren[slug].push(subtopicInfo);
    }

    subtopicChildren[slug].sort((a,b) => {return a.order-b.order;});
}

function getPathByPath(filePath: string) {
    return path.relative(guidesDir,filePath).replace(/\\/g, '/');
}

function getSlugByPath(filePath: string) {
    const base = getPathByPath(filePath);
    return base.replace(/.md$/,"");
} 

function getDataByPath(filePath: string) {
    const fileContent = fs.readFileSync(filePath,"utf-8");
    const {data} = matter(fileContent);
    return data;
}

updateMaps();