export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>Sebastion Feeds</title>
    <dateCreated>${new Date().toUTCString()}</dateCreated>
    <ownerName>Sebastion</ownerName>
    <docs>https://sebastion.dev/about</docs>
  </head>
  <body>
    <outline text="Sebastion" title="Sebastion">
      <outline text="All (Research + Intel)" title="All (Research + Intel)" type="rss" xmlUrl="https://sebastion.dev/feed.xml" htmlUrl="https://sebastion.dev" />
      <outline text="Research" title="Research" type="rss" xmlUrl="https://sebastion.dev/posts/feed.xml" htmlUrl="https://sebastion.dev/posts" />
      <outline text="Intelligence" title="Intelligence" type="rss" xmlUrl="https://sebastion.dev/intelligence/feed.xml" htmlUrl="https://sebastion.dev/intelligence" />
      <outline text="Weekly Digests" title="Weekly Digests" type="rss" xmlUrl="https://sebastion.dev/digests/feed.xml" htmlUrl="https://sebastion.dev/digests" />
    </outline>
  </body>
</opml>`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/x-opml; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
