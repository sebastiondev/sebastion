import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Warm gradient transition from page bg into footer */}
      <div className="h-px bg-[var(--color-border)]" />

      {/* Upper section - newsletter CTA */}
      <div className="bg-[var(--color-bg)] pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="max-w-[540px] mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] mb-6">
            Stay informed
          </p>
          <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-[var(--color-text-primary)] mb-4 leading-[1.1]">
            Get the research first
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base max-w-[440px] mx-auto mb-8 leading-relaxed">
            Original security research, engineering and artefacts -
            delivered weekly. Verified by humans, structured for experts.
          </p>
          <NewsletterSignup context="page" />
        </div>
      </div>

      {/* Main footer - warm dark surface */}
      <div className="bg-[#1E1A16] text-[#C9BDA8]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-14">
            {/* Brand + Newsletter */}
            <div className="md:col-span-5">
              <p className="font-['Source_Serif_4',Georgia,serif] text-[1.35rem] font-semibold text-[#FAF7F2] mb-3 tracking-tight">
                Sebastion
              </p>
              <p className="text-[13px] text-[#8A7E72] leading-[1.7] max-w-[300px] mb-6">
                Original security research, maintained by AI, verified by
                humans. Threat analysis, engineering and AI&nbsp;security.
              </p>
              <NewsletterSignup context="footer" />
            </div>

            {/* Navigate */}
            <div className="md:col-span-2">
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#5C524A] mb-5">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/posts", label: "Research" },
                  { href: "/intelligence", label: "Intelligence" },
                  { href: "/digests", label: "Digests" },
                  { href: "/tags", label: "Topics" },
                  { href: "/about", label: "About" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-[#8A7E72] hover:text-[#FAF7F2] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div className="md:col-span-2">
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#5C524A] mb-5">
                Areas
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { href: "/tags/malware", label: "Threat Research" },
                  { href: "/tags/automation", label: "Engineering" },
                  { href: "/tags/ai", label: "AI Security" },
                  { href: "/tags/security", label: "Security" },
                  { href: "/intelligence/feed.xml", label: "Intel RSS Feed" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-[#8A7E72] hover:text-[#FAF7F2] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Elsewhere */}
            <div className="md:col-span-3">
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#5C524A] mb-5">
                Elsewhere
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    href: "https://github.com/lewiswigmore",
                    label: "GitHub",
                    ext: true,
                  },
                  {
                    href: "https://x.com/0xl3w1512058163",
                    label: "X",
                    ext: true,
                  },
                  {
                    href: "https://aka.ms/lewiswigmore",
                    label: "LinkedIn",
                    ext: true,
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-[13px] text-[#8A7E72] hover:text-[#FAF7F2] transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-40"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#2E2822] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-[#5C524A]">
              &copy; {new Date().getFullYear()} Sebastion
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sponsors/lewiswigmore"
                target="_blank"
                rel="noopener"
                className="text-[11px] text-[#5C524A] hover:text-[#8A7E72] transition-colors duration-300"
              >
                Support
              </a>
              <Link
                href="/sponsor"
                className="text-[11px] text-[#5C524A] hover:text-[#8A7E72] transition-colors duration-300"
              >
                Sponsor
              </Link>
              <p className="text-[11px] text-[#5C524A]">
                Maintained by Sebastion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
