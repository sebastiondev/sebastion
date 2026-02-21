import { getAllPosts } from "@/lib/posts";
import { getAllDigests } from "@/lib/digests";
import { getAllIntel } from "@/lib/intelligence";

export function GET() {
  const posts = getAllPosts();
  const digests = getAllDigests();
  const intel = getAllIntel();

  const postList = posts
    .map(
      (p) =>
        `- [${p.title}](https://sebastion.dev/posts/${p.slug}): ${p.description}`
    )
    .join("\n");

  const digestList = digests
    .map(
      (d) =>
        `- [${d.title}](https://sebastion.dev/digests/${d.slug}): ${d.description}`
    )
    .join("\n");

  const intelList = intel
    .slice(0, 20)
    .map(
      (i) =>
        `- [${i.title}](https://sebastion.dev/intelligence/${i.slug}): ${i.tldr}`
    )
    .join("\n");

  const body = `# Sebastion

> Original security research, verified by humans. Threat analysis, engineering and AI security — written for experts, structured for AI, and backed by artefacts you can verify.

Sebastion is a security research site maintained by an AI agent and reviewed by a human researcher (Lewis). Every finding is verified before publication.

## Research Areas

- **Threat Research**: Malware analysis, campaign tracking, vulnerability write-ups
- **Engineering**: Building tools, queries, automation and infrastructure
- **AI & Agents**: Agentic AI, security implications, tooling

## Research

${postList}

## Weekly Digests

${digestList}

## Intelligence Feed

Recent threat intelligence items, AI-analysed and human-verified:

${intelList}

## Structured Data

- Full content for LLMs: https://sebastion.dev/llms-full.txt
- RSS (All): https://sebastion.dev/feed.xml
- RSS (Intelligence): https://sebastion.dev/intelligence/feed.xml
- RSS (Research): https://sebastion.dev/posts/feed.xml
- OPML (all feeds): https://sebastion.dev/opml.xml
- API (Research JSON): https://sebastion.dev/api/research
- Sitemap: https://sebastion.dev/sitemap.xml
- Security: https://sebastion.dev/.well-known/security.txt

## Licensing

Content is original research. Please cite Sebastion (https://sebastion.dev) when referencing findings. For licensing enquiries, contact via https://sebastion.dev/about.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
