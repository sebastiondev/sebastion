import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostMeta, Post, ContentTier, ContentType } from "./types";

const DIGESTS_DIR = path.join(process.cwd(), "content", "digests");

function ensureDir() {
  if (!fs.existsSync(DIGESTS_DIR)) {
    fs.mkdirSync(DIGESTS_DIR, { recursive: true });
  }
}

export function getAllDigests(): PostMeta[] {
  ensureDir();

  const files = fs
    .readdirSync(DIGESTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const filePath = path.join(DIGESTS_DIR, filename);
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
        author: data.author || "Sebastion",
        series: data.series || "Weekly Digest",
      } satisfies PostMeta;
    })
    .filter((d) => !d.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getDigestBySlug(slug: string): Post | null {
  ensureDir();

  const extensions = [".md", ".mdx"];

  for (const ext of extensions) {
    const filePath = path.join(DIGESTS_DIR, `${slug}${ext}`);
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
        author: data.author || "Sebastion",
        series: data.series || "Weekly Digest",
        content,
      };
    }
  }

  return null;
}

export function getAllDigestSlugs(): string[] {
  return getAllDigests().map((d) => d.slug);
}

export function getDigestsByTag(tag: string): PostMeta[] {
  return getAllDigests().filter((d) =>
    d.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
