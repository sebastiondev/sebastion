import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-32 text-center">
      <ScrollReveal>
        <p className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.8rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
          Page not found
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-text-primary)] text-[var(--color-bg)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Go home
        </Link>
      </ScrollReveal>
    </div>
  );
}
