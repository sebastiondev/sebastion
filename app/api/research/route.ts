import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";
import { getAllIntel } from "@/lib/intelligence";

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const type = searchParams.get("type"); // "posts" | "intelligence" | null (both)
  const tag = searchParams.get("tag");
  const limit = Math.min(parseInt(searchParams.get("limit") || "50", 10), 100);
  const offset = parseInt(searchParams.get("offset") || "0", 10);

  const response: Record<string, unknown> = {
    meta: {
      site: "Sebastion",
      url: "https://sebastion.dev",
      description:
        "Security research, verified by humans. Threat analysis, engineering and AI security.",
      generated: new Date().toISOString(),
    },
  };

  if (type !== "intelligence") {
    let posts = getAllPosts();
    if (tag) {
      posts = posts.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      );
    }
    const total = posts.length;
    const sliced = posts.slice(offset, offset + limit);

    response.posts = {
      total,
      offset,
      limit,
      items: sliced.map((p) => ({
        slug: p.slug,
        url: `https://sebastion.dev/posts/${p.slug}`,
        title: p.title,
        date: p.date,
        description: p.description,
        author: p.author || "Lewis",
        tags: p.tags,
        contentType: p.contentType,
        readingTime: p.readingTime,
        keyFindings: p.keyFindings || [],
        artifacts: p.artifacts || [],
      })),
    };
  }

  if (type !== "posts") {
    let intel = getAllIntel();
    if (tag) {
      intel = intel.filter((i) =>
        i.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      );
    }
    const total = intel.length;
    const sliced = intel.slice(offset, offset + limit);

    response.intelligence = {
      total,
      offset,
      limit,
      items: sliced.map((i) => ({
        slug: i.slug,
        url: `https://sebastion.dev/intelligence/${i.slug}`,
        title: i.title,
        date: i.date,
        severity: i.severity,
        category: i.category,
        status: i.status,
        tldr: i.tldr,
        tags: i.tags,
        cves: i.cves,
        affected: i.affected,
        sources: i.sources,
      })),
    };
  }

  const origin = request.headers.get("origin") || "";
  const allowedOrigins = [
    "https://sebastion.dev",
    "https://www.sebastion.dev",
  ];

  const corsHeaders: Record<string, string> = {
    "Cache-Control": "s-maxage=600, stale-while-revalidate",
  };
  if (allowedOrigins.includes(origin)) {
    corsHeaders["Access-Control-Allow-Origin"] = origin;
  }

  return NextResponse.json(response, { headers: corsHeaders });
}
