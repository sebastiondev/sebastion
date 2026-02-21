import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { IntelMeta, Intel, IntelSeverity, IntelCategory, IntelStatus } from "./types";

const INTEL_DIR = path.join(process.cwd(), "content", "intelligence");

function ensureDir() {
  if (!fs.existsSync(INTEL_DIR)) {
    fs.mkdirSync(INTEL_DIR, { recursive: true });
  }
}

export function getAllIntel(): IntelMeta[] {
  ensureDir();

  const files = fs
    .readdirSync(INTEL_DIR)
    .filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(INTEL_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toISOString() : "",
        severity: (data.severity as IntelSeverity) || "informational",
        category: (data.category as IntelCategory) || "vulnerability",
        status: (data.status as IntelStatus) || "emerging",
        tldr: data.tldr || "",
        tags: data.tags || [],
        cves: data.cves || [],
        affected: data.affected || [],
        sources: data.sources || [],
      } satisfies IntelMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getIntelBySlug(slug: string): Intel | null {
  ensureDir();
  const filePath = path.join(INTEL_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : "",
    severity: (data.severity as IntelSeverity) || "informational",
    category: (data.category as IntelCategory) || "vulnerability",
    status: (data.status as IntelStatus) || "emerging",
    tldr: data.tldr || "",
    tags: data.tags || [],
    cves: data.cves || [],
    affected: data.affected || [],
    sources: data.sources || [],
    content,
  };
}

export function getAllIntelSlugs(): string[] {
  return getAllIntel().map((item) => item.slug);
}

export function getIntelByCategory(category: string): IntelMeta[] {
  return getAllIntel().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
}

export function getIntelBySeverity(severity: string): IntelMeta[] {
  return getAllIntel().filter(
    (item) => item.severity.toLowerCase() === severity.toLowerCase()
  );
}

export function getAllCves(): { cve: string; items: IntelMeta[] }[] {
  const cveMap = new Map<string, IntelMeta[]>();
  for (const item of getAllIntel()) {
    for (const cve of item.cves) {
      const existing = cveMap.get(cve) || [];
      existing.push(item);
      cveMap.set(cve, existing);
    }
  }
  return Array.from(cveMap.entries())
    .map(([cve, items]) => ({ cve, items }))
    .sort((a, b) => b.cve.localeCompare(a.cve));
}
