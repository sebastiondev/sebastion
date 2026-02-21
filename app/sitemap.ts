import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllDigests } from "@/lib/digests";
import { getAllIntel } from "@/lib/intelligence";

const intelCategories = [
  "vulnerability", "malware", "campaign", "supply-chain", "policy", "tool",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sebastion.dev";

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const intel = getAllIntel().map((item) => ({
    url: `${baseUrl}/intelligence/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const categoryPages = intelCategories.map((cat) => ({
    url: `${baseUrl}/intelligence/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/digests`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intelligence`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/intelligence/cves`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const digests = getAllDigests().map((d) => ({
    url: `${baseUrl}/digests/${d.slug}`,
    lastModified: new Date(d.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...posts, ...digests, ...intel];
}
