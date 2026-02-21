import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { getAllDigests } from "./digests";

export type { PostMeta, Post, ContentTier, ContentType, Artifact } from "./types";
export { formatDate, CONTENT_PILLARS } from "./types";
import type { PostMeta, Post, ContentTier, ContentType } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "posts");

export function getAllPosts(): PostMeta[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const filePath = path.join(CONTENT_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toISOString() : "",
        description: data.description || "",
        tags: data.tags || [],
        categories: data.categories || [],
        readingTime: readingTime(content).text,
        draft: data.draft || false,
        coverImage: data.coverImage || undefined,
        tier: (data.tier as ContentTier) || "free",
        contentType: (data.contentType as ContentType) || "editorial",
        keyFindings: data.keyFindings || undefined,
        artifacts: data.artifacts || undefined,
        author: data.author || "Lewis",
        series: data.series || undefined,
      } satisfies PostMeta;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".md", ".mdx"];

  for (const ext of extensions) {
    const filePath = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toISOString() : "",
        description: data.description || "",
        tags: data.tags || [],
        categories: data.categories || [],
        readingTime: readingTime(content).text,
        draft: data.draft || false,
        coverImage: data.coverImage || undefined,
        tier: (data.tier as ContentTier) || "free",
        contentType: (data.contentType as ContentType) || "editorial",
        keyFindings: data.keyFindings || undefined,
        artifacts: data.artifacts || undefined,
        author: data.author || "Lewis",
        series: data.series || undefined,
        content,
      };
    }
  }

  return null;
}

export function getPostsByPillar(pillarId: string): PostMeta[] {
  const { CONTENT_PILLARS } = require("./types");
  const pillar = CONTENT_PILLARS.find((p: { id: string }) => p.id === pillarId);
  if (!pillar) return [];
  const pillarTags = pillar.tags.map((t: string) => t.toLowerCase());
  return getAllPosts().filter((post) =>
    post.tags.some((t) => pillarTags.includes(t.toLowerCase()))
  );
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }

  for (const digest of getAllDigests()) {
    for (const tag of digest.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
