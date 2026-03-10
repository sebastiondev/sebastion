import { getDigestBySlug, getAllDigestSlugs } from "@/lib/digests";
import { renderMarkdown } from "@/lib/markdown";
import { formatDate } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllDigestSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const digest = getDigestBySlug(slug);
  if (!digest) return {};
  return {
    title: digest.title,
    description: digest.description || "",
    openGraph: {
      title: digest.title,
      description: digest.description || "",
      type: "article",
      publishedTime: digest.date,
      authors: [digest.author || "Sebastion"],
      tags: digest.tags,
    },
  };
}

export default async function DigestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const digest = getDigestBySlug(slug);

  if (!digest) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <h1 className="font-['Source_Serif_4',Georgia,serif] text-2xl font-semibold text-[var(--color-text-primary)]">
          Digest not found
        </h1>
      </div>
    );
  }

  const html = await renderMarkdown(digest.content);

  return (
    <article className="max-w-[680px] mx-auto px-6">
      {/* Header */}
      <header className="pt-20 pb-12">
        <ScrollReveal>
          <Link
            href="/digests"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors mb-8 inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Weekly digests</span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.03}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-brand)]">
              Weekly digest
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
            <span className="text-[11px] text-[var(--color-text-tertiary)]">
              {digest.readingTime}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-6">
            {digest.title}
          </h1>
        </ScrollReveal>

        {digest.description && (
          <ScrollReveal delay={0.09}>
            <p className="text-[1.1rem] text-[var(--color-text-secondary)] leading-[1.7] max-w-[560px] mb-6">
              {digest.description}
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.12}>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center">
                <span className="text-[10px] font-medium text-[var(--color-brand)]">
                  S
                </span>
              </div>
              <span className="text-[12px] text-[var(--color-text-secondary)]">
                {digest.author || "Sebastion"}
              </span>
            </div>
            <span className="w-px h-3 bg-[var(--color-border)]" />
            <time className="text-[12px] text-[var(--color-text-tertiary)]">
              {formatDate(digest.date)}
            </time>
            {digest.tags && digest.tags.length > 0 && (
              <>
                <span className="w-px h-3 bg-[var(--color-border)]" />
                <div className="flex flex-wrap gap-1.5">
                  {digest.tags.map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-brand-muted)] hover:text-[var(--color-brand)] transition-all duration-300"
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

      {/* Content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Newsletter signup */}
      <div className="mt-16 mb-8">
        <NewsletterSignup context="post" />
      </div>

      {/* Back link */}
      <div className="border-t border-[var(--color-border)] mt-12 pt-10 pb-20">
        <Link
          href="/digests"
          className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors inline-flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to weekly digests</span>
        </Link>
      </div>
    </article>
  );
}
