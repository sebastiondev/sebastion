import { getAllIntel, getIntelByCategory } from "@/lib/intelligence";
import IntelCard from "@/components/IntelCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import type { IntelCategory } from "@/lib/types";

const categoryMeta: Record<string, { label: string; description: string }> = {
  vulnerability: {
    label: "Vulnerabilities",
    description: "CVE analysis, exploit assessments, and patch guidance for critical security vulnerabilities.",
  },
  malware: {
    label: "Malware",
    description: "Malware analysis, reverse engineering findings, and detection guidance.",
  },
  campaign: {
    label: "Campaigns",
    description: "Threat actor campaigns, intrusion sets, and coordinated attack activity.",
  },
  "supply-chain": {
    label: "Supply Chain",
    description: "Software supply chain compromises, dependency attacks, and ecosystem risks.",
  },
  policy: {
    label: "Policy",
    description: "Security policy changes, regulatory updates, and compliance-relevant developments.",
  },
  tool: {
    label: "Tools",
    description: "Security tooling releases, open-source projects, and defensive utilities.",
  },
};

const validCategories: IntelCategory[] = [
  "vulnerability", "malware", "campaign", "supply-chain", "policy", "tool",
];

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  return {
    title: `${meta.label} Intelligence`,
    description: meta.description,
    openGraph: {
      title: `${meta.label} — Sebastion Intelligence`,
      description: meta.description,
    },
  };
}

export default async function IntelCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const items = getIntelByCategory(category);
  const meta = categoryMeta[category];

  if (!meta) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <h1 className="font-['Source_Serif_4',Georgia,serif] text-2xl font-semibold text-[var(--color-text-primary)]">
          Category not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-8">
      <header className="pt-36 pb-16">
        <ScrollReveal>
          <Link
            href="/intelligence"
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors mb-8 inline-flex items-center gap-2"
          >
            <span>&larr;</span>
            <span>All Intelligence</span>
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-5 max-w-[640px]">
            {meta.label}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-[clamp(1rem,1.4vw,1.1rem)] text-[var(--color-text-secondary)] leading-[1.7] max-w-[520px] mb-6">
            {meta.description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </ScrollReveal>
      </header>

      {/* Category nav */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[var(--color-border)] pb-6">
          {validCategories.map((cat) => (
            <Link
              key={cat}
              href={`/intelligence/category/${cat}`}
              className={`text-[11px] px-3 py-1.5 rounded-full border transition-all duration-300 ${
                cat === category
                  ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5"
                  : "border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)]"
              }`}
            >
              {categoryMeta[cat]?.label || cat}
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {items.length === 0 ? (
        <ScrollReveal>
          <div className="text-center py-20">
            <p className="text-[var(--color-text-tertiary)] text-sm">
              No intelligence items in this category yet.
            </p>
          </div>
        </ScrollReveal>
      ) : (
        <section className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <IntelCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
