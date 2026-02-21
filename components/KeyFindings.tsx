"use client";

import { motion } from "framer-motion";

interface KeyFindingsProps {
  findings: string[];
}

export default function KeyFindings({ findings }: KeyFindingsProps) {
  if (!findings || findings.length === 0) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6 mb-12"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)]">
          Key findings
        </h2>
      </div>
      <ul className="space-y-3">
        {findings.map((finding, i) => (
          <li key={i} className="flex gap-3 text-[0.9375rem] leading-[1.7]">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[11px] font-medium flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span className="text-[var(--color-text-primary)]">{finding}</span>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
