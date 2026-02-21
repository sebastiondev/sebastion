import { getAllTags, getPostsByTag } from "@/lib/posts";
import { getDigestsByTag } from "@/lib/digests";
import { formatDate } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const placeholderColors = [
  "#C9BDA8", "#B8A992", "#A69882", "#D1C6B5",
  "#BEB0A0", "#C5B8A6", "#AFA193", "#D6CCBF",
];

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `${tag}`,
    description: `Writing on the topic of ${tag}.`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const digests = getDigestsByTag(tag);
  const total = posts.length + digests.length;

  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section className="pt-20 pb-14">
        <ScrollReveal>
          <Link
            href="/tags"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors mb-6 inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>All topics</span>
          </Link>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-4">
            {tag}
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg">
            {total} {total === 1 ? "piece" : "pieces"} of writing
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-14" />

      <div className="space-y-14 pb-20">
        {posts.map((post, i) => {
          const color = placeholderColors[i % placeholderColors.length];
          const isWide = i % 3 === 0;

          return (
            <ScrollReveal key={post.slug} delay={i * 0.05}>
              <Link href={`/posts/${post.slug}`} className="group block">
                {isWide ? (
                  <div className={`grid grid-cols-1 ${post.coverImage ? "md:grid-cols-[1.1fr_1fr] gap-8" : "gap-4"} items-center`}>
                    {post.coverImage && (
                      <div
                        className="w-full aspect-[4/3] rounded-xl overflow-hidden relative"
                        style={{ backgroundColor: color }}
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
                          {post.tags?.[0] || "Essay"}
                        </span>
                        <span className="text-[10px] text-[var(--color-text-tertiary)]">{post.readingTime}</span>
                      </div>
                      <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.3rem,3vw,1.8rem)] font-bold leading-[1.15] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-3">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-3">
                          {post.description}
                        </p>
                      )}
                      <time className="text-[11px] text-[var(--color-text-tertiary)]">
                        {formatDate(post.date)}
                      </time>
                    </div>
                  </div>
                ) : (
                  <div className={`${post.coverImage ? "flex gap-6 items-start" : "block"}`}>
                    {post.coverImage && (
                      <div
                        className="flex-shrink-0 w-[100px] aspect-square rounded-lg overflow-hidden relative"
                        style={{ backgroundColor: color }}
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0 py-1">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
                          {post.tags?.[0] || "Essay"}
                        </span>
                        <span className="text-[10px] text-[var(--color-text-tertiary)]">{post.readingTime}</span>
                      </div>
                      <h2 className="font-['Source_Serif_4',Georgia,serif] text-[1.1rem] font-semibold leading-[1.25] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-1.5">
                        {post.title}
                      </h2>
                      <time className="text-[11px] text-[var(--color-text-tertiary)]">
                        {formatDate(post.date)}
                      </time>
                    </div>
                  </div>
                )}
              </Link>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Digests matching this tag */}
      {digests.length > 0 && (
        <>
          <div className="border-t border-[var(--color-border)] my-10" />
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] mb-6">
            Weekly digests
          </p>
          <div className="space-y-4 pb-20">
            {digests.map((digest, i) => (
              <ScrollReveal key={digest.slug} delay={i * 0.04}>
                <Link
                  href={`/digests/${digest.slug}`}
                  className="group flex items-center justify-between gap-4 py-3 border-b border-[var(--color-border)] hover:border-[var(--color-accent-muted)] transition-colors duration-300"
                >
                  <div>
                    <h3 className="font-['Source_Serif_4',Georgia,serif] text-[1rem] font-semibold leading-[1.25] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-0.5">
                      {digest.title}
                    </h3>
                    <time className="text-[11px] text-[var(--color-text-tertiary)]">
                      {formatDate(digest.date)}
                    </time>
                  </div>
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] flex-shrink-0">
                    Digest
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
