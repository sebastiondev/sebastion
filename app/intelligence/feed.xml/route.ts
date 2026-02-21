import { getAllIntel } from "@/lib/intelligence";
import { formatDate } from "@/lib/types";

export function GET() {
  const items = getAllIntel();

  const rssItems = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>https://sebastion.dev/intelligence/${item.slug}</link>
      <guid isPermaLink="true">https://sebastion.dev/intelligence/${item.slug}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escapeXml(item.tldr)}</description>
      <category>${item.severity}</category>
      <category>${item.category}</category>
      ${item.cves.map((cve) => `<category>${escapeXml(cve)}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sebastion Intelligence</title>
    <link>https://sebastion.dev/intelligence</link>
    <description>AI-analysed security intelligence. Vulnerabilities, campaigns and threats — researched by Sebastion, verified by humans.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://sebastion.dev/intelligence/feed.xml" rel="self" type="application/rss+xml" />
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
