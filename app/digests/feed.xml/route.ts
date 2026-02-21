import { getAllDigests } from "@/lib/digests";

export function GET() {
  const digests = getAllDigests();

  const rssItems = digests
    .map(
      (digest) => `    <item>
      <title>${escapeXml(digest.title)}</title>
      <link>https://sebastion.dev/digests/${digest.slug}</link>
      <guid isPermaLink="true">https://sebastion.dev/digests/${digest.slug}</guid>
      <pubDate>${new Date(digest.date).toUTCString()}</pubDate>
      <description>${escapeXml(digest.description)}</description>
      <author>digest@sebastion.dev (${digest.author || "Sebastion"})</author>
      ${digest.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sebastion Weekly Digests</title>
    <link>https://sebastion.dev/digests</link>
    <description>Weekly threat intelligence digests — curated security briefings covering vulnerabilities, campaigns and trends.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://sebastion.dev/digests/feed.xml" rel="self" type="application/rss+xml" />
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
