import { getPostBySlug, getAllSlugs, formatDate } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import ScrollReveal from "@/components/ScrollReveal";
import KeyFindings from "@/components/KeyFindings";
import ArtifactList from "@/components/ArtifactList";
import NewsletterSignup from "@/components/NewsletterSignup";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const placeholderColors = [
  "#C9BDA8", "#B8A992", "#A69882", "#D1C6B5",
  "#BEB0A0", "#C5B8A6", "#AFA193", "#D6CCBF",
];

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description || "",
    openGraph: {
      title: post.title,
      description: post.description || "",
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Lewis"],
      tags: post.tags,
    },
  };
}

const contentTypeLabels: Record<string, string> = {
  research: "Research",
  walkthrough: "Walkthrough",
  "field-notes": "Field Notes",
  tool: "Tool",
  editorial: "Editorial",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <h1 className="font-['Source_Serif_4',Georgia,serif] text-2xl font-semibold text-[var(--color-text-primary)]">
          Post not found
        </h1>
      </div>
    );
  }

  const html = await renderMarkdown(post.content);
  const colorIndex = post.slug.length % placeholderColors.length;

  return (
    <>
      <JsonLd post={post} />
      <article className="max-w-[680px] mx-auto px-6">
        {/* Header */}
        <header className="pt-20 pb-12">
          <ScrollReveal>
            <Link
              href="/posts"
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors mb-8 inline-flex items-center gap-2"
            >
              <span>←</span>
              <span>Research</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.03}>
            <div className="flex items-center gap-3 mb-5">
              {post.contentType && (
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-accent)]">
                  {contentTypeLabels[post.contentType] || post.contentType}
                </span>
              )}
              {post.tags && post.tags.length > 0 && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-tertiary)]">
                    {post.tags[0]}
                  </span>
                </>
              )}
              <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
              <span className="text-[11px] text-[var(--color-text-tertiary)]">
                {post.readingTime}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-6">
              {post.title}
            </h1>
          </ScrollReveal>

          {post.description && (
            <ScrollReveal delay={0.09}>
              <p className="text-[1.1rem] text-[var(--color-text-secondary)] leading-[1.7] max-w-[560px] mb-6">
                {post.description}
              </p>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.12}>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Author byline */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <span className="text-[10px] font-medium text-[var(--color-accent)]">
                    {(post.author || "L")[0].toUpperCase()}
                  </span>
                </div>
                <span className="text-[12px] text-[var(--color-text-secondary)]">
                  {post.author || "Lewis"}
                </span>
              </div>
              <span className="w-px h-3 bg-[var(--color-border)]" />
              <time className="text-[12px] text-[var(--color-text-tertiary)]">
                {formatDate(post.date)}
              </time>
              {post.tier && post.tier !== "free" && (
                <>
                  <span className="w-px h-3 bg-[var(--color-border)]" />
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {post.tier === "member" ? "Member" : "Preview"}
                  </span>
                </>
              )}
              {post.tags && post.tags.length > 1 && (
                <>
                  <span className="w-px h-3 bg-[var(--color-border)]" />
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(1).map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-all duration-300"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </ScrollReveal>
        </header>

        {/* Hero image - only shown when post has a cover */}
        {post.coverImage && (
          <ScrollReveal delay={0.15}>
            <div
              className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-14 relative"
              style={{ backgroundColor: placeholderColors[colorIndex] }}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 680px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/50 via-[#8B6914]/20 to-[#2C2520]/40" />
            </div>
          </ScrollReveal>
        )}

        {/* Key findings */}
        {post.keyFindings && post.keyFindings.length > 0 && (
          <KeyFindings findings={post.keyFindings} />
        )}

        {/* Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Artifacts */}
        {post.artifacts && post.artifacts.length > 0 && (
          <div className="mt-16">
            <ArtifactList artifacts={post.artifacts} />
          </div>
        )}

        {/* Newsletter signup */}
        <div className="mt-16 mb-8">
          <NewsletterSignup context="post" />
        </div>

        {/* Back link */}
        <div className="border-t border-[var(--color-border)] mt-12 pt-10 pb-20">
          <Link
            href="/posts"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to research</span>
          </Link>
        </div>
      </article>
    </>
  );
}
