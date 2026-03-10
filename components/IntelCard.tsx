"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { formatDate } from "@/lib/types";
import type { IntelMeta } from "@/lib/types";

const severityColors: Record<string, { bg: string; text: string; border: string }> = {
  critical: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  high: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  medium: { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  low: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  informational: { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200" },
};

const statusLabels: Record<string, string> = {
  emerging: "Emerging",
  active: "Active",
  contained: "Contained",
  resolved: "Resolved",
};

const categoryLabels: Record<string, string> = {
  vulnerability: "Vulnerability",
  malware: "Malware",
  campaign: "Campaign",
  "supply-chain": "Supply Chain",
  policy: "Policy",
  tool: "Tool",
};

export default function IntelCard({
  item,
  index,
}: {
  item: IntelMeta;
  index: number;
}) {
  const sev = severityColors[item.severity] || severityColors.informational;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/intelligence/${item.slug}`}
        className="group block rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-brand-muted)] transition-all duration-300"
      >
        {/* Top row: severity + category + status */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full border ${sev.bg} ${sev.text} ${sev.border}`}
          >
            {item.severity}
          </span>
          <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-brand)]">
            {categoryLabels[item.category] || item.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
          <span className="text-[10px] text-[var(--color-text-tertiary)]">
            {statusLabels[item.status] || item.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Source_Serif_4',Georgia,serif] text-[1.1rem] font-semibold leading-[1.25] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">
          {item.title}
        </h3>

        {/* TLDR */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3 line-clamp-2">
          {item.tldr}
        </p>

        {/* CVEs */}
        {item.cves.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.cves.map((cve) => (
              <span
                key={cve}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-text-tertiary)]"
              >
                {cve}
              </span>
            ))}
          </div>
        )}

        {/* Footer: date + affected */}
        <div className="flex items-center gap-3 text-[11px] text-[var(--color-text-tertiary)]">
          <time>{formatDate(item.date)}</time>
          {item.affected.length > 0 && (
            <>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
              <span className="truncate">
                {item.affected.slice(0, 3).join(", ")}
                {item.affected.length > 3 && ` +${item.affected.length - 3}`}
              </span>
            </>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
