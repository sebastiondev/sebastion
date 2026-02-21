import { getAllPosts } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { formatDate } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Research",
  description: "Original security research, threat analysis and engineering.",
};

const placeholderColors = [
  "#C9BDA8", "#B8A992", "#A69882", "#D1C6B5",
  "#BEB0A0", "#C5B8A6", "#AFA193", "#D6CCBF",
];

export default function PostsPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="max-w-[1100px] mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-14">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-5">
            Archive
          </p>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-4">
            Research
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-[480px]">
            {posts.length} {posts.length === 1 ? 'piece' : 'pieces'} of original security research, engineering
            and field notes.
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-16" />

      {/* Featured / latest post - full width hero */}
      {featured && (
        <ScrollReveal>
          <Link href={`/posts/${featured.slug}`} className="group block mb-16">
            <div className={`grid grid-cols-1 ${featured.coverImage ? "md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14" : "gap-4"} items-center`}>
              {featured.coverImage && (
                <div
                  className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative"
                  style={{ backgroundColor: placeholderColors[0] }}
                >
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/50 via-[#8B6914]/20 to-[#2C2520]/40" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-white/60 text-[9px] font-medium tracking-[0.2em] uppercase">
                      Latest
                    </span>
                  </div>
                </div>
              )}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
                    {featured.tags?.[0] || "Essay"}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
                  <span className="text-xs text-[var(--color-text-tertiary)]">{featured.readingTime}</span>
                </div>
                <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.12] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-4">
                  {featured.title}
                </h2>
                {featured.description && (
                  <p className="text-[var(--color-text-secondary)] leading-[1.7] mb-4 max-w-[400px]">
                    {featured.description}
                  </p>
                )}
                <time className="text-xs text-[var(--color-text-tertiary)]">
                  {formatDate(featured.date)}
                </time>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      )}

      {/* Remaining posts - consistent card grid */}
      {rest.length > 0 && (
        <>
          <div className="border-t border-[var(--color-border)] mb-12" />
          <div className={`grid grid-cols-1 gap-10 ${
            rest.length === 1
              ? "md:grid-cols-1 max-w-[540px]"
              : rest.length === 2
                ? "md:grid-cols-2 md:gap-12"
                : "md:grid-cols-3 md:gap-10"
          }`}>
            {rest.map((post, i) => {
              const color = placeholderColors[(i + 1) % placeholderColors.length];

              return (
                <ScrollReveal key={post.slug} delay={i * 0.08}>
                  <Link href={`/posts/${post.slug}`} className="group block">
                    {post.coverImage && (
                      <div
                        className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 relative"
                        style={{ backgroundColor: color }}
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes={
                            rest.length >= 3
                              ? "(max-width: 768px) 100vw, 33vw"
                              : "(max-width: 768px) 100vw, 50vw"
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35" />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
                        {post.tags?.[0] || "Essay"}
                      </span>
                      <span className="text-[10px] text-[var(--color-text-tertiary)]">{post.readingTime}</span>
                    </div>
                    <h3 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.05rem,1.8vw,1.35rem)] font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mb-2">
                        {post.description}
                      </p>
                    )}
                    <time className="text-[11px] text-[var(--color-text-tertiary)]">
                      {formatDate(post.date)}
                    </time>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </>
      )}

      <div className="pb-20" />
    </div>
  );
}
