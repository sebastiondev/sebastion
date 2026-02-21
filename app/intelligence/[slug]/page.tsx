import { getIntelBySlug, getAllIntelSlugs } from "@/lib/intelligence";
import { renderMarkdown } from "@/lib/markdown";
import { formatDate } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

const severityColors: Record<string, string> = {
  critical: "bg-red-50 text-red-700 border-red-200",
  high: "bg-orange-50 text-orange-700 border-orange-200",
  medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  low: "bg-blue-50 text-blue-700 border-blue-200",
  informational: "bg-gray-50 text-gray-600 border-gray-200",
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

export async function generateStaticParams() {
  return getAllIntelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getIntelBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.tldr,
    openGraph: {
      title: item.title,
      description: item.tldr,
      type: "article",
      publishedTime: item.date,
      tags: item.tags,
    },
  };
}

export default async function IntelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getIntelBySlug(slug);

  if (!item) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <h1 className="font-['Source_Serif_4',Georgia,serif] text-2xl font-semibold text-[var(--color-text-primary)]">
          Intelligence item not found
        </h1>
      </div>
    );
  }

  const html = await renderMarkdown(item.content);
  const sevClass = severityColors[item.severity] || severityColors.informational;

  return (
    <article className="max-w-[680px] mx-auto px-6">
      <header className="pt-20 pb-10">
        <ScrollReveal>
          <Link
            href="/intelligence"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors mb-8 inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Intelligence</span>
          </Link>
        </ScrollReveal>

        {/* Severity + Category + Status bar */}
        <ScrollReveal delay={0.03}>
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${sevClass}`}
            >
              {item.severity}
            </span>
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)]">
              {categoryLabels[item.category] || item.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
            <span className="text-[10px] text-[var(--color-text-tertiary)]">
              {statusLabels[item.status] || item.status}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.8rem,4.5vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-5">
            {item.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.09}>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] leading-[1.7] max-w-[560px] mb-5">
            {item.tldr}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="flex items-center gap-4 flex-wrap text-[12px] text-[var(--color-text-tertiary)]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[10px] font-medium text-[var(--color-accent)]">S</span>
              </div>
              <span>Sebastion</span>
            </div>
            <span className="w-px h-3 bg-[var(--color-border)]" />
            <time>{formatDate(item.date)}</time>
          </div>
        </ScrollReveal>
      </header>

      {/* CVEs */}
      {item.cves.length > 0 && (
        <ScrollReveal delay={0.15}>
          <div className="rounded-xl border border-[var(--color-border)] p-4 mb-10">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-2">
              CVE References
            </p>
            <div className="flex flex-wrap gap-2">
              {item.cves.map((cve) => (
                <a
                  key={cve}
                  href={`https://nvd.nist.gov/vuln/detail/${cve}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-accent)] hover:border-[var(--color-accent-muted)] transition-colors"
                >
                  {cve}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Affected products */}
      {item.affected.length > 0 && (
        <ScrollReveal delay={0.18}>
          <div className="rounded-xl border border-[var(--color-border)] p-4 mb-10">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-2">
              Affected
            </p>
            <div className="flex flex-wrap gap-2">
              {item.affected.map((a) => (
                <span
                  key={a}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Analysis content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Sources */}
      {item.sources.length > 0 && (
        <div className="mt-14 rounded-xl border border-[var(--color-border)] p-5">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] mb-3">
            Sources
          </p>
          <ul className="space-y-2">
            {item.sources.map((source, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[var(--color-text-tertiary)] text-xs mt-0.5">
                  {i + 1}.
                </span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent)] hover:underline break-all"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-8">
          {item.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* Back link */}
      <div className="border-t border-[var(--color-border)] mt-12 pt-10 pb-20">
        <Link
          href="/intelligence"
          className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to intelligence</span>
        </Link>
      </div>
    </article>
  );
}
