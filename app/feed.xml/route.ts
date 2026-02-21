import { getAllPosts } from "@/lib/posts";
import { getAllDigests } from "@/lib/digests";
import { getAllIntel } from "@/lib/intelligence";

export function GET() {
  const posts = getAllPosts();
  const intel = getAllIntel();

  type FeedItem = {
    title: string;
    link: string;
    date: string;
    description: string;
    author: string;
    categories: string[];
  };

  const digests = getAllDigests();

  const allItems: FeedItem[] = [
    ...posts.map((p) => ({
      title: p.title,
      link: `https://sebastion.dev/posts/${p.slug}`,
      date: p.date,
      description: p.description,
      author: p.author || "Lewis",
      categories: p.tags,
    })),
    ...digests.map((d) => ({
      title: d.title,
      link: `https://sebastion.dev/digests/${d.slug}`,
      date: d.date,
      description: d.description,
      author: d.author || "Sebastion",
      categories: d.tags,
    })),
    ...intel.map((i) => ({
      title: i.title,
      link: `https://sebastion.dev/intelligence/${i.slug}`,
      date: i.date,
      description: i.tldr,
      author: "Sebastion",
      categories: [i.category, i.severity, ...i.tags],
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const rssItems = allItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
      <author>research@sebastion.dev (${item.author})</author>
      ${item.categories.map((c) => `<category>${escapeXml(c)}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sebastion</title>
    <link>https://sebastion.dev</link>
    <description>Original security research and threat intelligence, verified by humans. Threat analysis, engineering and AI security.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://sebastion.dev/feed.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
