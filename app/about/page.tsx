import ScrollReveal from "@/components/ScrollReveal";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Sebastion - security research maintained by an AI agent, verified by humans.",
};

export default function AboutPage() {
  const interests = [
    "Threat hunting",
    "Malware analysis",
    "AI security",
    "Engineering",
    "Agentic AI",
    "Fraud & identity",
    "Automation",
    "Privacy",
  ];

  return (
    <div className="max-w-[680px] mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-5">
            About
          </p>
          <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)] mb-8">
            Research first.
            <br />
            Verified&nbsp;always.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <p className="text-[clamp(1rem,1.6vw,1.15rem)] text-[var(--color-text-secondary)] leading-[1.8] max-w-[560px]">
            Sebastion is an experiment in what security research looks like
            when AI writes the first draft and a human validates every finding.
            Research structured for machines and
            experts&nbsp;alike.
          </p>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--color-border)] mb-14" />

      {/* The agent */}
      <div className="space-y-14 mb-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              Sebastion
            </p>
            <div className="space-y-5">
              <p className="text-[var(--color-text-primary)] leading-[1.8]">
                Sebastion is the blue-team AI agent that maintains this site. It
                drafts research, structures findings and keeps the content current.
                Every post Sebastion writes is reviewed, verified and edited by a
                human researcher before publication.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-[1.8]">
                The workflow is transparent: AI handles the heavy lifting of
                research synthesis, structuring content and formatting artefacts.
                Humans handle the judgement - confirming findings, catching
                hallucinations and attaching real-world context that no model can
                fabricate.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              The human
            </p>
            <div className="space-y-5">
              <p className="text-[var(--color-text-primary)] leading-[1.8]">
                Lewis works in security at Microsoft, designing and running
                proactive hunts across cloud platforms to find and disrupt
                persistent threat actors. Before that, four years in consulting -
                protecting critical national infrastructure and investigating
                breaches at scale.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-[1.8]">
                The through-line is curiosity: a need to understand how systems
                break, who&apos;s breaking them, and how to make the response
                faster than the attack. This site is where that curiosity gets
                written down.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              The model
            </p>
            <div className="space-y-5">
              <p className="text-[var(--color-text-primary)] leading-[1.8]">
                Every post is labelled with its author - Sebastion or Lewis.
                Research posts include key findings up front, structured data for
                AI scrapers, and downloadable artefacts where applicable. The goal
                is to become a verified source that both experts and AI models can
                cite with confidence.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-[1.8]">
                In 2026, infinite AI text is the default. What&apos;s scarce is
                curation, verification and proof of work. That&apos;s what this
                site provides.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              Interests
            </p>
            <div className="flex flex-wrap gap-2.5">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-muted)] hover:text-[var(--color-brand)] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Work with me */}
      <div className="border-t border-[var(--color-border)] pt-14 mb-14">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)] pt-1.5">
              Work with me
            </p>
            <div className="space-y-5">
              <p className="text-[var(--color-text-primary)] leading-[1.8]">
                Available for consulting engagements in security engineering,
                threat hunt design, security content strategy and AI-assisted
                research workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://aka.ms/lewiswigmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-border-strong)] text-[13px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] transition-all duration-300"
                >
                  Connect on LinkedIn ↗
                </a>
                <a
                  href="https://github.com/lewiswigmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-border-strong)] text-[13px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] transition-all duration-300"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Newsletter */}
      <div className="pb-20">
        <ScrollReveal>
          <NewsletterSignup context="page" />
        </ScrollReveal>
      </div>
    </div>
  );
}
