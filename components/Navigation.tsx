"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Research" },
  { href: "/intelligence", label: "Intel" },
  { href: "/digests", label: "Digests" },
  { href: "/tags", label: "Topics" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  // On home page: starts transparent, becomes solid on scroll
  // On other pages: always solid
  const showSolid = !isHome || scrolled;

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-500 hover:opacity-80"
        >
          <svg viewBox="0 0 512 512" className="w-8 h-8" aria-hidden="true">
            <rect width="512" height="512" rx="64" fill="#2C2520"/>
            <text
              x="256" y="370"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="400"
              fontSize="320"
              letterSpacing="-8"
              fill="#FAF7F2"
            >S</text>
            <rect x="48" y="48" width="416" height="416" rx="24" fill="none" stroke="#8B6914" strokeWidth="6" opacity="0.35"/>
          </svg>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.8125rem] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive
                    ? showSolid
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-primary)]"
                    : showSolid
                      ? "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[1.15rem] left-0 right-0 h-[1.5px] bg-[var(--color-brand)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-[var(--color-text-primary)]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-[var(--color-text-primary)]"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-[var(--color-text-primary)]"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[var(--color-bg)]/98 backdrop-blur-md border-t border-[var(--color-border)]"
      >
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex flex-col gap-3">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[0.9375rem] font-medium py-1 ${
                  isActive
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-tertiary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.header>
  );
}
