"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { formatDate, type PostMeta } from "@/lib/types";

/**
 * Editorial magazine-style grid layout.
 * Mixed compositions: hero cards spanning full width, side-by-side pairings,
 * and offset layouts with generous whitespace - like a mixed-media editorial spread.
 */

// Muted placeholder colors for image containers
const placeholderColors = [
  "#C9BDA8", "#B8A992", "#A69882", "#D1C6B5",
  "#BEB0A0", "#C5B8A6", "#AFA193", "#D6CCBF",
];

function EditorialCard({
  post,
  variant,
  index,
}: {
  post: PostMeta;
  variant: "hero" | "standard" | "compact";
  index: number;
}) {
  const color = placeholderColors[index % placeholderColors.length];
  const tag = post.tags?.[0] || "essay";

  if (variant === "hero") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="col-span-full"
      >
        <Link href={`/posts/${post.slug}`} className="group block">
          {/* Large hero image - only rendered when post has a cover */}
          {post.coverImage ? (
            <div
              className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 relative"
              style={{ backgroundColor: color }}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/50 via-[#8B6914]/20 to-[#2C2520]/40" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white/60 text-xs font-medium tracking-[0.2em] uppercase">
                  Featured
                </span>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-brand)]">
                Featured
              </span>
            </div>
          )}
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium text-[var(--color-brand)] uppercase tracking-[0.15em]">
                {tag}
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
              <span className="text-xs text-[var(--color-text-tertiary)]">{post.readingTime}</span>
            </div>
            <h3 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-3">
              {post.title}
            </h3>
            {post.description && (
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-[520px]">
                {post.description}
              </p>
            )}
            <time className="block mt-3 text-xs text-[var(--color-text-tertiary)]">
              {formatDate(post.date)}
            </time>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "standard") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: "easeOut" }}
      >
        <Link href={`/posts/${post.slug}`} className="group block">
          {post.coverImage && (
            <div
              className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 relative"
              style={{ backgroundColor: color }}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35" />
            </div>
          )}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-medium text-[var(--color-brand)] uppercase tracking-[0.15em]">
              {tag}
            </span>
            <span className="text-[10px] text-[var(--color-text-tertiary)]">{post.readingTime}</span>
          </div>
          <h3 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.1rem,2vw,1.4rem)] font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">
            {post.title}
          </h3>
          <time className="text-xs text-[var(--color-text-tertiary)]">
            {formatDate(post.date)}
          </time>
        </Link>
      </motion.article>
    );
  }

  // compact - image to the left, text to the right
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
    >
      <Link href={`/posts/${post.slug}`} className={`group ${post.coverImage ? "flex gap-5 items-start" : "block"}`}>
        {post.coverImage && (
          <div
            className="flex-shrink-0 w-[120px] aspect-[1/1] rounded-lg overflow-hidden relative"
            style={{ backgroundColor: color }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="120px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35" />
          </div>
        )}
        <div className="flex-1 min-w-0 py-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-medium text-[var(--color-brand)] uppercase tracking-[0.15em]">
              {tag}
            </span>
            <span className="text-[10px] text-[var(--color-text-tertiary)]">{post.readingTime}</span>
          </div>
          <h3 className="font-['Source_Serif_4',Georgia,serif] text-[1rem] font-semibold leading-[1.25] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-1 line-clamp-2">
            {post.title}
          </h3>
          <time className="text-[11px] text-[var(--color-text-tertiary)]">
            {formatDate(post.date)}
          </time>
        </div>
      </Link>
    </motion.article>
  );
}

interface EditorialGridProps {
  posts: PostMeta[];
}

export default function EditorialGrid({ posts }: EditorialGridProps) {
  if (posts.length === 0) return null;

  // Layout strategy:
  // Row 1: Hero card (latest post, full width)
  // Row 2: Two standard cards side by side
  // Row 3: Three compact cards in a row
  // Row 4: Offset - one standard left + two compact stacked right
  // Repeat pattern for remaining posts

  const hero = posts[0];
  const pair = posts.slice(1, 3);
  const compactRow = posts.slice(3, 6);
  const offsetStandard = posts[6];
  const offsetCompact = posts.slice(7, 9);
  const remaining = posts.slice(9);

  return (
    <section className="relative bg-white">
      <div className="max-w-[1100px] mx-auto px-6 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 border-b border-[var(--color-border)] pb-6"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-2">
              Research
            </p>
            <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-[var(--color-text-primary)]">
              Latest Research
            </h2>
          </div>
          <Link
            href="/posts"
            className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors pb-1"
          >
            View all →
          </Link>
        </motion.div>

        {/* Row 1: Hero */}
        <div className="mb-20">
          <EditorialCard post={hero} variant="hero" index={0} />
        </div>

        {/* Row 2: Two standard side-by-side */}
        {pair.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {pair.map((post, i) => (
              <EditorialCard key={post.slug} post={post} variant="standard" index={i + 1} />
            ))}
          </div>
        )}

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-t border-[var(--color-border)] mb-20 origin-left"
        />

        {/* Row 3: Three compact cards */}
        {compactRow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {compactRow.map((post, i) => (
              <EditorialCard key={post.slug} post={post} variant="compact" index={i + 3} />
            ))}
          </div>
        )}

        {/* Row 4: Offset layout - standard left + stack right */}
        {offsetStandard && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-20">
            <div className="md:col-span-3">
              <EditorialCard post={offsetStandard} variant="standard" index={6} />
            </div>
            {offsetCompact.length > 0 && (
              <div className="md:col-span-2 flex flex-col gap-8">
                {offsetCompact.map((post, i) => (
                  <EditorialCard key={post.slug} post={post} variant="compact" index={i + 7} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Remaining posts as compact cards */}
        {remaining.length > 0 && (
          <>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="border-t border-[var(--color-border)] mb-16 origin-left"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {remaining.map((post, i) => (
                <EditorialCard key={post.slug} post={post} variant="compact" index={i + 9} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
