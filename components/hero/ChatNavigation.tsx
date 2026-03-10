"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import type { Conversation } from "@/lib/hero-conversations";

export default function ChatNavigation({
  conversations,
  currentIndex,
  currentConversation,
  advanceProgress,
  showNextButton,
  onJumpTo,
  onNext,
}: {
  conversations: Conversation[];
  currentIndex: number;
  currentConversation: Conversation;
  advanceProgress: number;
  showNextButton: boolean;
  onJumpTo: (i: number) => void;
  onNext: () => void;
}) {
  return (
    <div className="relative pt-3 mt-2">
      {/* Auto-advance progress bar */}
      {showNextButton && (
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
          <div
            className="h-full bg-[var(--color-brand)]/30 transition-none"
            style={{ width: `${advanceProgress * 100}%` }}
          />
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Navigation dots */}
        <div className="flex items-center gap-2">
          {conversations.map((_, i) => (
            <button
              key={i}
              onClick={() => onJumpTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-5 bg-[var(--color-brand)]"
                  : "w-1.5 bg-[var(--color-border-strong)] hover:bg-[var(--color-text-tertiary)]"
              }`}
              aria-label={`Topic ${i + 1}`}
            />
          ))}
        </div>

        {/* Topic label */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentConversation.id}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 4 }}
            transition={{ duration: 0.2 }}
            className="text-[11px] font-medium tracking-wide uppercase text-[var(--color-text-tertiary)] select-none"
          >
            {currentConversation.topicLabel}
          </motion.span>
        </AnimatePresence>

        <div className="flex-1" />

        {/* Next button */}
        {showNextButton && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onNext}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Next
          </motion.button>
        )}
      </div>
    </div>
  );
}
