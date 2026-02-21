export function GET() {
  const body = `Contact: mailto:security@sebastion.dev
Contact: https://sebastion.dev/about
Expires: 2027-02-21T00:00:00.000Z
Preferred-Languages: en
Canonical: https://sebastion.dev/.well-known/security.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
