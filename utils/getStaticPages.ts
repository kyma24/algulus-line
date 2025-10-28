import fs from "fs";
import path from "path";

import { topicChildren, subtopicChildren } from "@/constants/subtopics";
import {TopicInfo} from "@/utils/generateSubtopics";

// constructs static page constant files

const guidePath = path.join(process.cwd(),"constants/staticGuide.ts");
const probPath = path.join(process.cwd(),"constants/staticProbs.ts");

function getGuideStaticPages() {
    const guideSlugList:string[][] = [];
    for(const topic in topicChildren) {
        topicChildren[topic].forEach((subtopic:TopicInfo) => {
            const slug=subtopic.subslug;
            guideSlugList.push(slug.split('/'));
        });
    }
    for(const topic in subtopicChildren) {
        subtopicChildren[topic].forEach((subtopic:TopicInfo) => {
            const slug=subtopic.subslug;
            guideSlugList.push(slug.split('/'));
        });
    }
    fs.writeFileSync(guidePath,`export const guideStaticPages:string[][] = ${JSON.stringify(guideSlugList,null,4)};`)
}

import { getProblemSlugByPath, getAllProblemPaths } from "./getSlugs";

function getProbStaticPages() {
    const probSlugList:string[][] = [];
    const probPathList = getAllProblemPaths();
    probPathList.forEach((probPath:string) => {
        const slug=getProblemSlugByPath(probPath)
        probSlugList.push(slug.split('/'));
    });
    fs.writeFileSync(probPath,`export const problemStaticPages:string[][] = ${JSON.stringify(probSlugList,null,4)};`)
}

getGuideStaticPages();
getProbStaticPages();