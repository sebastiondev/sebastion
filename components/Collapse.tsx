"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapseProps {
  summary: string;
  children: ReactNode;
}

export default function Collapse({ summary, children }: CollapseProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-wrapper">
      <button
        onClick={() => setOpen(!open)}
        className="collapse-trigger"
        aria-expanded={open}
      >
        <span>{summary}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="collapse-content"
          >
            <div className="collapse-inner prose">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
