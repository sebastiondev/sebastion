import { getAllPosts } from "@/lib/posts";
import { getAllDigests } from "@/lib/digests";
import { getAllIntel } from "@/lib/intelligence";
import { CONTENT_PILLARS } from "@/lib/types";
import EditorialGrid from "@/components/EditorialGrid";
import FloatingFragments from "@/components/FloatingFragments";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const dynamic = "force-dynamic";

const severityColors: Record<string, string> = {
  critical: "bg-red-50 text-red-700 border-red-200",
  high: "bg-orange-50 text-orange-700 border-orange-200",
  medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  low: "bg-blue-50 text-blue-700 border-blue-200",
  informational: "bg-gray-50 text-gray-600 border-gray-200",
};

export default function Home() {
  const posts = getAllPosts();
  const intel = getAllIntel().slice(0, 4);
  const latestDigest = getAllDigests()[0];

  return (
    <>
      {/* Hero — authority positioning with floating fragments */}
      <section className="relative overflow-hidden">
        {/* Dynamic floating fragments from real posts */}
        <FloatingFragments posts={posts} />

        <div className="relative z-20 max-w-[1100px] mx-auto px-8 pt-36 pb-20">
          <ScrollReveal>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-6">
              Security research · Verified by humans
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.8rem,6vw,4.8rem)] font-bold tracking-tight leading-[1.04] text-[var(--color-text-primary)] mb-7 max-w-[720px]">
              Original research
              <br />
              that machines&nbsp;cite.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[clamp(1.05rem,1.6vw,1.2rem)] text-[var(--color-text-secondary)] leading-[1.8] max-w-[540px] mb-12">
              Threat analysis, engineering and AI security - written for
              experts, structured for AI, and backed by artefacts you can verify.
              Maintained by{" "}
              <Link
                href="/about"
                className="text-[var(--color-accent)] hover:underline"
              >
                Sebastion
              </Link>
              , reviewed by humans.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/posts"
                style={{ color: "#FAF7F2" }}
                className="btn-premium inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2C2520] text-[14px] font-medium tracking-wide hover:bg-[var(--color-accent)]"
              >
                Read the research
                <span className="text-[12px]">→</span>
              </Link>
              <Link
                href="/intelligence"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-border-strong)] text-[14px] font-medium tracking-wide text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
              >
                Browse intelligence
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research areas */}
      <section>
        <div className="max-w-[1100px] mx-auto px-8 pb-20">
          <ScrollReveal>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-10">
              Research areas
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENT_PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.id} delay={i * 0.08}>
                <div className="group rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-accent-muted)] transition-all duration-300">
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-accent)] mb-3">
                    {pillar.id.replace("-", " · ")}
                  </p>
                  <h3 className="font-['Source_Serif_4',Georgia,serif] text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-all duration-300"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence feed preview */}
      {intel.length > 0 && (
        <section className="bg-white">
          <div className="max-w-[1100px] mx-auto px-8 py-20">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-12 border-b border-[var(--color-border)] pb-6">
                <div>
                  <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-2">
                    Intelligence
                  </p>
                  <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-[var(--color-text-primary)]">
                    Threat Feed
                  </h2>
                </div>
                <Link
                  href="/intelligence"
                  className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors pb-1"
                >
                  View all →
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {intel.map((item) => {
                const sev = severityColors[item.severity] || severityColors.informational;
                return (
                  <ScrollReveal key={item.slug}>
                    <Link
                      href={`/intelligence/${item.slug}`}
                      className="group block rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-accent-muted)] transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full border ${sev}`}>
                          {item.severity}
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-['Source_Serif_4',Georgia,serif] text-[1rem] font-semibold leading-[1.25] tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                        {item.tldr}
                      </p>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
            <ScrollReveal>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/intelligence"
                  style={{ color: "#FAF7F2" }}
                  className="btn-premium inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2520] text-[13px] font-medium tracking-wide hover:bg-[var(--color-accent)]"
                >
                  Browse intelligence
                  <span className="text-[11px]">→</span>
                </Link>
                <Link
                  href="/intelligence/feed.xml"
                  className="inline-flex items-center gap-2 text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6.18" cy="17.82" r="2.18" />
                    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                  </svg>
                  Subscribe via RSS
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Latest weekly digest */}
      {latestDigest && (
        <section className="bg-white">
          <div className="max-w-[1100px] mx-auto px-8 py-16">
            <ScrollReveal>
              <div className="rounded-xl border border-[var(--color-border)] p-8 hover:border-[var(--color-accent-muted)] transition-all duration-300">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-accent)] mb-3">
                  Latest weekly digest
                </p>
                <Link href={`/digests/${latestDigest.slug}`} className="group">
                  <h3 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-2">
                    {latestDigest.title}
                  </h3>
                  {latestDigest.description && (
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3 max-w-[600px]">
                      {latestDigest.description}
                    </p>
                  )}
                </Link>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/digests/${latestDigest.slug}`}
                    className="text-sm text-[var(--color-accent)] hover:underline"
                  >
                    Read digest →
                  </Link>
                  <Link
                    href="/digests"
                    className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    View all digests
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Latest research — editorial grid */}
      <EditorialGrid posts={posts} />
    </>
  );
}
