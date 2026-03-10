import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor",
  description:
    "Reach security professionals, threat researchers and engineers through Sebastion.",
};

export default function SponsorPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6">
      <section className="pt-20 pb-16">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-5">
            Sponsor
          </p>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-8">
            Support the&nbsp;research.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <p className="text-[clamp(1rem,1.6vw,1.15rem)] text-[var(--color-text-secondary)] leading-[1.8] max-w-[560px]">
            Sebastion publishes security research for threat hunters,
            engineers and security leaders. Sponsorship helps keep this work
            free, independent and&nbsp;ad&#8209;free.
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-14" />

      <div className="space-y-14 mb-20">
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              What&apos;s available
            </p>
            <div className="space-y-5">
              <div className="space-y-4">
                {[
                  {
                    title: "Newsletter sponsor",
                    desc: 'A single "presented by" line at the top of the weekly research email.',
                  },
                  {
                    title: "Sponsored research",
                    desc: "Fund a deep-dive post on a topic relevant to your product or domain. Clearly labelled, editorially independent.",
                  },
                  {
                    title: "Site sponsor",
                    desc: "A small, tasteful mention in the site footer for a set period. No tracking scripts, no pop-ups.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[var(--color-border)] p-5"
                  >
                    <p className="text-[var(--color-text-primary)] font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              Principles
            </p>
            <ul className="space-y-3 text-[var(--color-text-secondary)] leading-[1.8]">
              <li>No programmatic ads, pop-ups or tracking pixels.</li>
              <li>Sponsored content is always labelled transparently.</li>
              <li>Editorial independence is non-negotiable.</li>
              <li>Only products relevant to security professionals.</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              Get in touch
            </p>
            <div className="space-y-5">
              <p className="text-[var(--color-text-primary)] leading-[1.8]">
                Reach out via LinkedIn to discuss sponsorship options, rates
                and availability.
              </p>
              <a
                href="https://aka.ms/lewiswigmore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-border-strong)] text-[13px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] transition-all duration-300"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
