import fs from "fs";
import path from "path";
import matter from "gray-matter";

const problemsDir = path.join(process.cwd(), "content/problems");

export function getProblemSlugByPath(filePath: string) {
    const base = path.relative(problemsDir,filePath);
    return base.replace(/.md$/,"").replace(/\\/g, '/');
}

export function getAllProblemPaths() {
    return getAllPathsHelper(problemsDir);
}

function getAllPathsHelper(dir: string) {
    let ret:string[] = [];
    const files = fs.readdirSync(dir, {withFileTypes: true});

    files.forEach((file) => {
        const filePath = path.join(dir,file.name);
        if(file.isDirectory()) ret=ret.concat(getAllPathsHelper(filePath));
        else if(file.name.endsWith(".md")) ret.push(filePath);
    });

    return ret;
}

export function getProblemPathsByTag(filterTags?: string[]) {
    const allProblemPaths = getAllProblemPaths();

    if((!filterTags)||(filterTags.length==0)) return allProblemPaths;

    const N = allProblemPaths.length;
    let included = new Array(N).fill(true);

    allProblemPaths.forEach((filePath, ind) => {
        const tags=getDataByPath(filePath).tags;

        for(const tag of filterTags) {
            if(!tags.includes(tag)) {
                included[ind] = false;
                break;
            }
        }
    });

    const paths:string[] = [];
    for(let i=0; i<N; i++) {
        if(included[i]) {
            paths.push(allProblemPaths[i]);
        }
    }

    return paths;
}

export function getDataByPath(filePath: string) {
    const fileContent = fs.readFileSync(filePath,"utf-8");
    const {data} = matter(fileContent);
    return data;
}