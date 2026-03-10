import { getAllTags } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse writing by topic.",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="max-w-[680px] mx-auto px-6">
      <section className="pt-20 pb-14">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-5">
            Browse
          </p>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-4">
            Topics
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-[440px]">
            Everything I write about, loosely organised.
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-12" />

      <section className="pb-20">
        <div className="flex flex-wrap gap-3">
          {tags.map(({ tag, count }, i) => (
            <ScrollReveal key={tag} delay={i * 0.025}>
              <Link
                href={`/tags/${tag}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-muted)] hover:text-[var(--color-brand)] transition-all duration-300 text-[13px]"
              >
                <span>{tag}</span>
                <span className="text-[11px] text-[var(--color-text-tertiary)]">
                  {count}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
