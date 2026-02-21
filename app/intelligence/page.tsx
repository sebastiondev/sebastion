import { getAllIntel } from "@/lib/intelligence";
import IntelCard from "@/components/IntelCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Intelligence",
  description:
    "AI-analysed security intelligence. Vulnerabilities, campaigns and threats — researched by Sebastion, verified by humans.",
};

export default function IntelligencePage() {
  const items = getAllIntel();

  const critical = items.filter((i) => i.severity === "critical" || i.severity === "high");
  const rest = items.filter((i) => i.severity !== "critical" && i.severity !== "high");

  return (
    <div className="max-w-[1100px] mx-auto px-8">
      {/* Header */}
      <header className="pt-36 pb-16">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-6">
            Intelligence · Updated daily
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-5 max-w-[640px]">
            Security Intelligence
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-[clamp(1rem,1.4vw,1.1rem)] text-[var(--color-text-secondary)] leading-[1.7] max-w-[520px] mb-6">
            AI-analysed threats, vulnerabilities and campaigns. Not just what
            happened — what it means, who&apos;s affected, and what to do about it.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/intelligence/feed.xml"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--color-accent)] hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="6.18" cy="17.82" r="2.18" />
                <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
              </svg>
              Subscribe via RSS
            </Link>
            <span className="w-px h-4 bg-[var(--color-border)]" />
            <Link
              href="/intelligence/cves"
              className="text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            >
              CVE Index
            </Link>
          </div>
        </ScrollReveal>

        {/* Category filters */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              { id: "vulnerability", label: "Vulnerabilities" },
              { id: "malware", label: "Malware" },
              { id: "campaign", label: "Campaigns" },
              { id: "supply-chain", label: "Supply Chain" },
              { id: "policy", label: "Policy" },
              { id: "tool", label: "Tools" },
            ].map((cat) => (
              <Link
                key={cat.id}
                href={`/intelligence/category/${cat.id}`}
                className="text-[11px] px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-all duration-300"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </header>

      {items.length === 0 ? (
        <ScrollReveal>
          <div className="text-center py-20">
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Intelligence feed initialising. First entries will appear after the
              next daily research cycle.
            </p>
          </div>
        </ScrollReveal>
      ) : (
        <>
          {/* Critical / High severity items */}
          {critical.length > 0 && (
            <section className="mb-16">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8 border-b border-[var(--color-border)] pb-4">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)]">
                    Priority
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {critical.map((item, i) => (
                  <IntelCard key={item.slug} item={item} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* All other items */}
          {rest.length > 0 && (
            <section className="pb-20">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8 border-b border-[var(--color-border)] pb-4">
                  <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)]">
                    All Intelligence
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rest.map((item, i) => (
                  <IntelCard key={item.slug} item={item} index={i} />
                ))}
              </div>
            </section>
          )}

        </>
      )}

      {/* Subscribe CTA */}
      <ScrollReveal>
        <section className="border-t border-[var(--color-border)] mt-8 pt-12 pb-20">
          <div className="max-w-[480px]">
            <h2 className="font-['Source_Serif_4',Georgia,serif] text-xl font-semibold text-[var(--color-text-primary)] mb-3">
              Stay ahead of threats
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              Subscribe to the Sebastion intelligence feed in your RSS reader
              of choice. New entries are published daily as our AI pipeline
              analyses security feeds and produces structured assessments.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/intelligence/feed.xml"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#2C2520] text-[13px] font-medium text-[#FAF7F2] hover:bg-[var(--color-accent)] transition-colors w-fit"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6.18" cy="17.82" r="2.18" />
                  <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                </svg>
                Copy feed URL
              </Link>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Feed URL: <code className="text-[var(--color-text-secondary)]">sebastion.dev/intelligence/feed.xml</code>
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
