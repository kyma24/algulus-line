import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllProblemSlugs() {
    const problemsDir = path.join(process.cwd(), "content/problems");
    const files = fs.readdirSync(problemsDir);

    return files.filter(file => file.endsWith(".md")).map(file => file.replace(/\.md$/,""));
}

export function getProblemSlugsByTag(filterTags?: string[]) {
    const allProblemSlugs = getAllProblemSlugs();

    if((!filterTags)||(filterTags.length==0)) return allProblemSlugs;

    const N = allProblemSlugs.length;
    let included = new Array(N).fill(true);

    allProblemSlugs.forEach((slug, ind) => {
        const filePath = path.join(process.cwd(), "content/problems", `${slug}.md`);
        const fileContent = fs.readFileSync(filePath,"utf-8");
        const {data} = matter(fileContent);

        for(const tag of filterTags) {
            if(!data.tags.includes(tag)) {
                included[ind] = false;
                break;
            }
        }
    });

    const slugs:string[] = [];
    for(let i=0; i<N; i++) {
        if(included[i]) {
            slugs.push(allProblemSlugs[i]);
        }
    }

    return slugs;
}