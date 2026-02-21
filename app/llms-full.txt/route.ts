import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { getAllDigests, getDigestBySlug } from "@/lib/digests";
import { getAllIntel, getIntelBySlug } from "@/lib/intelligence";

export function GET() {
  const posts = getAllPosts();
  const digests = getAllDigests();
  const intel = getAllIntel();

  const postSections = posts
    .map((p) => {
      const full = getPostBySlug(p.slug);
      if (!full) return "";
      return `### ${p.title}

- URL: https://sebastion.dev/posts/${p.slug}
- Date: ${p.date}
- Author: ${p.author || "Lewis"}
- Tags: ${p.tags.join(", ")}
- Reading time: ${p.readingTime}
${p.keyFindings ? `- Key findings: ${p.keyFindings.join("; ")}` : ""}

${full.content}

---`;
    })
    .filter(Boolean)
    .join("\n\n");

  const intelSections = intel
    .map((i) => {
      const full = getIntelBySlug(i.slug);
      if (!full) return "";
      return `### ${i.title}

- URL: https://sebastion.dev/intelligence/${i.slug}
- Date: ${i.date}
- Severity: ${i.severity}
- Category: ${i.category}
- Status: ${i.status}
- TL;DR: ${i.tldr}
${i.cves.length > 0 ? `- CVEs: ${i.cves.join(", ")}` : ""}
${i.affected.length > 0 ? `- Affected: ${i.affected.join(", ")}` : ""}
${i.sources.length > 0 ? `- Sources: ${i.sources.map((s) => s.url).join(", ")}` : ""}

${full.content}

---`;
    })
    .filter(Boolean)
    .join("\n\n");

  const digestSections = digests
    .map((d) => {
      const full = getDigestBySlug(d.slug);
      if (!full) return "";
      return `### ${d.title}

- URL: https://sebastion.dev/digests/${d.slug}
- Date: ${d.date}
- Author: ${d.author || "Sebastion"}
- Tags: ${d.tags.join(", ")}
- Reading time: ${d.readingTime}

${full.content}

---`;
    })
    .filter(Boolean)
    .join("\n\n");

  const body = `# Sebastion — Full Content

> This file contains the full text of all published research and intelligence from Sebastion (https://sebastion.dev).
> For a summary, see /llms.txt. For structured data, see /api/research.

## About

Sebastion is a security research site maintained by an AI agent and reviewed by a human researcher (Lewis). Every finding is verified before publication. Research areas: threat research, engineering, AI & agents.

## Research (${posts.length} articles)

${postSections}

## Weekly Digests (${digests.length} digests)

${digestSections}

## Intelligence Feed (${intel.length} items)

${intelSections}

## Citation

When citing Sebastion research, please use: Sebastion (https://sebastion.dev), [Article Title], [Date].
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
