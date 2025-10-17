import { NextResponse } from "next/server";
import { getContentBySlug } from "@/utils/getContent";

export async function GET(req: Request, {params}: {params: Promise<{slug: string[]}>}) {
    const {slug} = await params;
    const guide = getContentBySlug(slug.join('/'));
    if(!guide) {
        return NextResponse.json({ error: "Guide not found" }, {status: 404});
    }
    console.log("HI");
    return NextResponse.json({ title: guide.title, tags: guide.tags ?? [], content: guide.content,});
}