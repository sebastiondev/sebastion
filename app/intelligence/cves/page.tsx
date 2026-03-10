import { getAllCves } from "@/lib/intelligence";
import { formatDate } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

const severityColors: Record<string, string> = {
  critical: "text-red-600",
  high: "text-orange-600",
  medium: "text-yellow-600",
  low: "text-blue-600",
  informational: "text-gray-500",
};

export const metadata: Metadata = {
  title: "CVE Index",
  description:
    "Index of all CVEs covered in Sebastion intelligence reports. Search and browse vulnerability analysis by CVE identifier.",
};

export default function CvesPage() {
  const cves = getAllCves();

  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section className="pt-20 pb-14">
        <ScrollReveal>
          <Link
            href="/intelligence"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors mb-8 inline-flex items-center gap-2"
          >
            <span>&larr;</span>
            <span>Intelligence</span>
          </Link>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-4">
            CVE Index
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-[480px]">
            {cves.length} {cves.length === 1 ? "CVE" : "CVEs"} covered across
            our intelligence reports.
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-12" />

      {cves.length === 0 ? (
        <ScrollReveal>
          <div className="text-center py-20">
            <p className="text-[var(--color-text-tertiary)] text-sm">
              No CVEs indexed yet. They&apos;ll appear here as intelligence
              items reference them.
            </p>
          </div>
        </ScrollReveal>
      ) : (
        <section className="pb-20">
          <div className="space-y-3">
            {cves.map(({ cve, items }, i) => (
              <ScrollReveal key={cve} delay={i * 0.02}>
                <div className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-brand-muted)] transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <a
                      href={`https://nvd.nist.gov/vuln/detail/${cve}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-medium text-[var(--color-brand)] hover:underline"
                    >
                      {cve}
                    </a>
                    <span className="text-[10px] text-[var(--color-text-tertiary)] shrink-0">
                      {items.length} {items.length === 1 ? "report" : "reports"}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/intelligence/${item.slug}`}
                        className="group flex items-center gap-2 text-sm"
                      >
                        <span className={`text-[10px] font-semibold uppercase ${severityColors[item.severity] || "text-gray-500"}`}>
                          {item.severity}
                        </span>
                        <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand)] transition-colors truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-[var(--color-text-tertiary)] shrink-0">
                          {formatDate(item.date)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
