"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Search, Terminal } from "lucide-react";
import type { ChatLine } from "@/lib/hero-conversations";

const ICON_MAP = {
  shield: Shield,
  brain: Brain,
  search: Search,
  terminal: Terminal,
} as const;

export default function ResponseLine({
  line,
  isTyping,
  displayedText,
  isCompleted,
  index,
}: {
  line: ChatLine;
  isTyping: boolean;
  displayedText: string;
  isCompleted?: boolean;
  index?: number;
}) {
  const Icon = line.icon ? ICON_MAP[line.icon] : null;

  const wrapper = (children: React.ReactNode) =>
    isCompleted ? (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: (index ?? 0) * 0.04 }}
      >
        {children}
      </motion.div>
    ) : (
      <>{children}</>
    );

  if (line.type === "action") {
    return wrapper(
      <div className="flex items-start gap-2.5 text-[14px] leading-[1.7] text-[var(--color-text-tertiary)] italic">
        {Icon && <Icon className="w-4 h-4 mt-[3px] shrink-0 opacity-50" />}
        <span>
          {displayedText}
          {isTyping && <span className="hero-chat-cursor" />}
        </span>
      </div>
    );
  }

  if (line.type === "finding") {
    return wrapper(
      <div className="flex items-start gap-2.5 text-[14px] leading-[1.7] pl-3.5 border-l-2 border-[var(--color-brand-muted)]">
        {Icon && (
          <Icon className="w-4 h-4 mt-[3px] shrink-0 text-[var(--color-brand)] opacity-60" />
        )}
        <span className="text-[var(--color-text-secondary)]">
          {displayedText}
          {isTyping && <span className="hero-chat-cursor" />}
        </span>
      </div>
    );
  }

  return wrapper(
    <div className="text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
      {displayedText}
      {isTyping && <span className="hero-chat-cursor" />}
    </div>
  );
}
