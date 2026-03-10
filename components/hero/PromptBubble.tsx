"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Conversation } from "@/lib/hero-conversations";

export default function PromptBubble({
  conversation,
  isTyping,
  charIndex,
}: {
  conversation: Conversation;
  isTyping: boolean;
  charIndex: number;
}) {
  return (
    <div className="pb-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={conversation.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="flex justify-end"
        >
          <div className="bg-[var(--color-bg-subtle)] rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
            <p className="text-[14px] text-[var(--color-text-primary)] leading-[1.6]">
              {isTyping
                ? conversation.prompt.slice(0, charIndex)
                : conversation.prompt}
              {isTyping && <span className="hero-chat-cursor" />}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
