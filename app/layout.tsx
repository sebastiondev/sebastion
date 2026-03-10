import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/ui/header-3";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sebastion",
    template: "%s - Sebastion",
  },
  description:
    "Security research, verified by humans. Threat analysis, engineering and AI security - written for experts and machines.",
  metadataBase: new URL("https://sebastion.dev"),
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/logo.svg",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Sebastion",
    description:
      "Security research, verified by humans. Threat analysis, engineering and AI security.",
    type: "website",
    siteName: "Sebastion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sebastion"
          href="/feed.xml"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sebastion Intelligence"
          href="/intelligence/feed.xml"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sebastion Research"
          href="/posts/feed.xml"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sebastion Weekly Digests"
          href="/digests/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sebastion",
              url: "https://sebastion.dev",
              description:
                "Security research, verified by humans. Threat analysis, engineering and AI security.",
              publisher: {
                "@type": "Organization",
                name: "Sebastion",
                url: "https://sebastion.dev",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://sebastion.dev/tags/{search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ReadingProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
