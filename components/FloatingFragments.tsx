"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { PostMeta } from "@/lib/types";

/**
 * Three-layer parallax floating fragments built from real post data.
 *
 * Near layer  — post titles + categories (moderate blur, fast drift)
 * Mid layer   — tag clusters, truncated descriptions, image placeholders (heavy blur)
 * Far layer   — image blocks + category/tag chips (very heavy blur, slow drift)
 *
 * Fragments span the full viewport width. On mobile they scale down and
 * reposition to stay decorative without fighting the hero text.
 */

/* ── Placeholder colours (matches EditorialGrid) ─────────────── */
const placeholderColors = [
  "#C9BDA8", "#B8A992", "#A69882", "#D1C6B5",
  "#BEB0A0", "#C5B8A6", "#AFA193", "#D6CCBF",
];

/* ── Slot positions — full-width spread ──────────────────────── */
// Desktop positions use the entire 0-95% horizontal range.
// Each slot also has a mobile override (mTop / mLeft) that pushes
// fragments to the edges and below the hero text column.

interface Slot {
  top: string;
  left: string;
  mTop: string;   // mobile top
  mLeft: string;  // mobile left
  delay: string;
}

const nearSlots: Slot[] = [
  { top: "4%",  left: "3%",  mTop: "5%",  mLeft: "55%", delay: "0s" },
  { top: "18%", left: "68%", mTop: "15%", mLeft: "60%", delay: "1.8s" },
  { top: "38%", left: "12%", mTop: "55%", mLeft: "5%",  delay: "3.6s" },
  { top: "58%", left: "78%", mTop: "65%", mLeft: "58%", delay: "0.9s" },
  { top: "12%", left: "88%", mTop: "25%", mLeft: "72%", delay: "2.7s" },
  { top: "74%", left: "28%", mTop: "80%", mLeft: "10%", delay: "4.5s" },
];

const midSlots: Slot[] = [
  { top: "8%",  left: "42%", mTop: "8%",  mLeft: "65%", delay: "0.5s" },
  { top: "30%", left: "82%", mTop: "35%", mLeft: "68%", delay: "2.3s" },
  { top: "50%", left: "6%",  mTop: "50%", mLeft: "2%",  delay: "4.1s" },
  { top: "68%", left: "56%", mTop: "72%", mLeft: "50%", delay: "1.4s" },
  { top: "16%", left: "22%", mTop: "20%", mLeft: "70%", delay: "3.2s" },
  { top: "82%", left: "72%", mTop: "85%", mLeft: "55%", delay: "5s" },
];

const farSlots: Slot[] = [
  { top: "6%",  left: "52%", mTop: "3%",  mLeft: "45%", delay: "1s" },
  { top: "26%", left: "2%",  mTop: "30%", mLeft: "5%",  delay: "2.8s" },
  { top: "46%", left: "90%", mTop: "48%", mLeft: "70%", delay: "0.2s" },
  { top: "64%", left: "18%", mTop: "62%", mLeft: "8%",  delay: "3.8s" },
  { top: "22%", left: "38%", mTop: "22%", mLeft: "50%", delay: "1.6s" },
  { top: "80%", left: "48%", mTop: "78%", mLeft: "40%", delay: "4.6s" },
];

/* ── Helpers ─────────────────────────────────────────────────── */

function truncate(str: string, len: number) {
  if (str.length <= len) return str;
  return str.slice(0, len).replace(/\s+\S*$/, "") + "…";
}

function pickColor(i: number) {
  return placeholderColors[i % placeholderColors.length];
}

/* ── Component ───────────────────────────────────────────────── */

interface Props {
  posts: PostMeta[];
}

export default function FloatingFragments({ posts }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nearY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const midY  = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const farY  = useTransform(scrollYProgress, [0, 1], [0, -25]);

  // Gather real data
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const allCategories = Array.from(new Set(posts.flatMap((p) => p.categories)));

  // Near items: titles + content types
  const nearItems = nearSlots.map((slot, i) => {
    const post = posts[i % posts.length];
    return { ...slot, label: post.title, sub: post.contentType, i };
  });

  // Mid items: tag clusters, descriptions, image placeholders
  const midItems = midSlots.map((slot, i) => {
    const variant = i % 3;
    if (variant === 0) {
      const start = (i * 2) % allTags.length;
      const tagChunk = allTags.slice(start, start + 3);
      if (tagChunk.length === 0) tagChunk.push(...allTags.slice(0, 3));
      return { ...slot, type: "tags" as const, tags: tagChunk, i };
    }
    if (variant === 1) {
      const post = posts[i % posts.length];
      return { ...slot, type: "desc" as const, text: truncate(post.description, 60), i };
    }
    return { ...slot, type: "image" as const, color: pickColor(i), i };
  });

  // Far items: image blocks + category/tag chips
  const farItems = farSlots.map((slot, i) => {
    if (i % 2 === 0) {
      return { ...slot, type: "image" as const, color: pickColor(i + 3), i };
    }
    const chips = [...allCategories, ...allTags].slice(i, i + 2);
    return { ...slot, type: "chips" as const, chips, i };
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* ── Far layer — very heavy blur, crawling parallax ──── */}
      <motion.div style={{ y: farY }} className="absolute inset-0">
        {farItems.map((item) => (
          <div
            key={`far-${item.i}`}
            className="absolute fragment-float fragment-slot"
            style={{
              "--dt": item.top,
              "--dl": item.left,
              "--mt": item.mTop,
              "--ml": item.mLeft,
              animationDelay: item.delay,
              filter: "blur(12px)",
              opacity: 0.14,
            } as React.CSSProperties}
          >
            {item.type === "image" ? (
              <div
                className="w-24 h-16 md:w-28 md:h-20 rounded-xl"
                style={{ backgroundColor: item.color }}
              />
            ) : (
              <div className="flex gap-1.5">
                {item.chips.map((c) => (
                  <span
                    key={c}
                    className="text-[8px] md:text-[9px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] bg-white/60"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* ── Mid layer — heavy blur ───────────────────────────── */}
      <motion.div style={{ y: midY }} className="absolute inset-0">
        {midItems.map((item) => (
          <div
            key={`mid-${item.i}`}
            className="absolute fragment-float fragment-slot"
            style={{
              "--dt": item.top,
              "--dl": item.left,
              "--mt": item.mTop,
              "--ml": item.mLeft,
              animationDelay: item.delay,
              filter: "blur(7px)",
              opacity: 0.18,
            } as React.CSSProperties}
          >
            {item.type === "tags" ? (
              <div className="flex gap-1.5 flex-wrap max-w-[140px] md:max-w-[180px]">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] md:text-[10px] px-2 md:px-2.5 py-0.5 rounded-full border border-[var(--color-accent-muted)] text-[var(--color-accent)] bg-white/70 whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : item.type === "desc" ? (
              <p className="text-[10px] md:text-[11px] text-[var(--color-text-tertiary)] max-w-[140px] md:max-w-[200px] leading-snug font-['Source_Serif_4',Georgia,serif] italic">
                {item.text}
              </p>
            ) : (
              <div
                className="w-20 h-14 md:w-28 md:h-18 rounded-xl"
                style={{ backgroundColor: item.color }}
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* ── Near layer — moderate blur, fastest parallax ──────── */}
      <motion.div style={{ y: nearY }} className="absolute inset-0">
        {nearItems.map((item) => (
          <div
            key={`near-${item.i}`}
            className="absolute fragment-float fragment-slot"
            style={{
              "--dt": item.top,
              "--dl": item.left,
              "--mt": item.mTop,
              "--ml": item.mLeft,
              animationDelay: item.delay,
              filter: "blur(3px)",
              opacity: 0.24,
            } as React.CSSProperties}
          >
            <div className="max-w-[160px] md:max-w-[220px]">
              <span className="block text-[8px] md:text-[9px] font-medium tracking-[0.2em] uppercase text-[var(--color-accent)] mb-1">
                {item.sub}
              </span>
              <span className="block text-[11px] md:text-[14px] font-semibold text-[var(--color-text-primary)] leading-tight font-['Source_Serif_4',Georgia,serif]">
                {truncate(item.label, 40)}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
