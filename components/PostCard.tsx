"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate, type PostMeta } from "@/lib/types";

interface PostCardProps {
  post: PostMeta;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link href={`/posts/${post.slug}`} className="group block py-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-sm text-[var(--color-text-tertiary)]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
            <span>{post.readingTime}</span>
          </div>

          <h3 className="font-['Source_Serif_4',Georgia,serif] text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-200 leading-snug">
            {post.title}
          </h3>

          {post.description && (
            <p className="text-[var(--color-text-secondary)] text-[0.9375rem] leading-relaxed line-clamp-2">
              {post.description}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-subtle)] px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
