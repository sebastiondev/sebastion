import { getAllDigests } from "@/lib/digests";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import { formatDate } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Weekly Digests",
  description:
    "Weekly threat intelligence digests — curated security briefings covering vulnerabilities, campaigns and trends.",
};

export default function DigestsPage() {
  const digests = getAllDigests();

  return (
    <div className="max-w-[900px] mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-14">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-5">
            Weekly briefing
          </p>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-4">
            Weekly Digests
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-[520px]">
            {digests.length} weekly threat intelligence{" "}
            {digests.length === 1 ? "digest" : "digests"} — curated briefings
            on the week&apos;s most significant security developments.
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-14" />

      {/* Digest list */}
      <div className="space-y-6 pb-20">
        {digests.map((digest, i) => (
          <ScrollReveal key={digest.slug} delay={i * 0.04}>
            <Link
              href={`/digests/${digest.slug}`}
              className="group block rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-accent-muted)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
                  Weekly digest
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
                <span className="text-[10px] text-[var(--color-text-tertiary)]">
                  {digest.readingTime}
                </span>
              </div>
              <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.1rem,2vw,1.4rem)] font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-2">
                {digest.title}
              </h2>
              {digest.description && (
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mb-2">
                  {digest.description}
                </p>
              )}
              <time className="text-[11px] text-[var(--color-text-tertiary)]">
                {formatDate(digest.date)}
              </time>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
