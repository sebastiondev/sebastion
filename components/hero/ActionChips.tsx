"use client";

import Link from "next/link";
import { Pen, Radar, Code, BookOpen } from "lucide-react";

const CHIPS = [
  { label: "Research", icon: Pen, href: "/posts" },
  { label: "Intelligence", icon: Radar, href: "/intelligence" },
  { label: "Engineering", icon: Code, href: "/tags/automation" },
  { label: "About", icon: BookOpen, href: "/about" },
] as const;

export default function ActionChips() {
  return (
    <>
      {CHIPS.map(({ label, icon: ChipIcon, href }) => (
        <Link
          key={label}
          href={href}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] text-[var(--color-text-tertiary)] bg-transparent border border-[var(--color-border)] rounded-full hover:border-[var(--color-brand-muted)] hover:text-[var(--color-brand)] transition-all duration-200"
        >
          <ChipIcon className="w-3.5 h-3.5" />
          {label}
        </Link>
      ))}
    </>
  );
}
