import type { Post } from "@/lib/types";

interface JsonLdProps {
  post: Post;
}

export default function JsonLd({ post }: JsonLdProps) {
  const schemaType =
    post.contentType === "walkthrough" ? "HowTo" : "TechArticle";

  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": post.author === "Sebastion" ? "Organization" : "Person",
      name: post.author || "Lewis",
      ...(post.author === "Sebastion"
        ? { url: "https://sebastion.dev/about" }
        : { url: "https://sebastion.dev/about" }),
    },
    publisher: {
      "@type": "Organization",
      name: "Sebastion",
      url: "https://sebastion.dev",
    },
    url: `https://sebastion.dev/posts/${post.slug}`,
    ...(post.coverImage
      ? { image: `https://sebastion.dev${post.coverImage}` }
      : {}),
    keywords: post.tags.join(", "),
    about: post.categories.map((cat) => ({
      "@type": "Thing",
      name: cat,
    })),
    ...(post.artifacts && post.artifacts.length > 0
      ? {
          citation: post.artifacts
            .filter((a) => a.type === "reference")
            .map((a) => ({
              "@type": "CreativeWork",
              name: a.description,
              url: a.url,
            })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
