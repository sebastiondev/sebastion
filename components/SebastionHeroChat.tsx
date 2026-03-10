"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

import type { HeroSeed, ChatLine } from "@/lib/hero-conversations";
import { generateConversations } from "@/lib/hero-conversations";
import ThinkingDots from "@/components/hero/ThinkingDots";
import ResponseLine from "@/components/hero/ResponseLine";
import PromptBubble from "@/components/hero/PromptBubble";
import ChatNavigation from "@/components/hero/ChatNavigation";
import ActionChips from "@/components/hero/ActionChips";

export type { HeroSeed };

const AUTO_ADVANCE_MS = 7000;

const HEADING_TEXT = "Hi, I'm Sebastion";
const SUBTITLE_TEXT =
  "Security researcher and autonomous agent. Let me show you what I'm working on.";

export default function SebastionHeroChat({ seed }: { seed: HeroSeed }) {
  const conversations = useMemo(() => generateConversations(seed), []);

  // Intro typing state
  const [introPhase, setIntroPhase] = useState<
    "waiting" | "heading" | "heading-pause" | "subtitle" | "done"
  >("waiting");
  const [headingCharIndex, setHeadingCharIndex] = useState(0);
  const [subtitleCharIndex, setSubtitleCharIndex] = useState(0);

  // Chat state
  const [convoIndex, setConvoIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<
    "idle" | "prompt-typing" | "thinking" | "typing" | "pausing" | "done"
  >("idle");
  const [completedLines, setCompletedLines] = useState<
    { line: ChatLine; text: string }[]
  >([]);
  const [promptCharIndex, setPromptCharIndex] = useState(0);
  const [promptDone, setPromptDone] = useState(false);
  const [advanceProgress, setAdvanceProgress] = useState(0);

  const responseRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number | null>(null);
  const conversation = conversations[convoIndex];
  const currentLine = conversation?.lines[lineIndex];

  const introDone = introPhase === "done";

  // Auto-scroll response area
  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [completedLines, charIndex, phase]);

  // Start intro after mount delay
  useEffect(() => {
    const t = setTimeout(() => setIntroPhase("heading"), 400);
    return () => clearTimeout(t);
  }, []);

  // Heading typing
  useEffect(() => {
    if (introPhase !== "heading") return;
    if (headingCharIndex < HEADING_TEXT.length) {
      const t = setTimeout(
        () => setHeadingCharIndex((c) => c + 1),
        45 + Math.random() * 25
      );
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIntroPhase("heading-pause"), 100);
    return () => clearTimeout(t);
  }, [introPhase, headingCharIndex]);

  // Pause after heading
  useEffect(() => {
    if (introPhase !== "heading-pause") return;
    const t = setTimeout(() => setIntroPhase("subtitle"), 500);
    return () => clearTimeout(t);
  }, [introPhase]);

  // Subtitle typing
  useEffect(() => {
    if (introPhase !== "subtitle") return;
    if (subtitleCharIndex < SUBTITLE_TEXT.length) {
      const t = setTimeout(
        () => setSubtitleCharIndex((c) => c + 1),
        28 + Math.random() * 15
      );
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIntroPhase("done"), 400);
    return () => clearTimeout(t);
  }, [introPhase, subtitleCharIndex]);

  // When intro finishes, kick off the chat
  useEffect(() => {
    if (!introDone || phase !== "idle") return;
    setPhase("prompt-typing");
  }, [introDone, phase]);

  // Prompt typing
  useEffect(() => {
    if (phase !== "prompt-typing") return;
    if (promptCharIndex < conversation.prompt.length) {
      const t = setTimeout(
        () => setPromptCharIndex((c) => c + 1),
        38 + Math.random() * 20
      );
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPromptDone(true);
      setPhase("thinking");
    }, 400);
    return () => clearTimeout(t);
  }, [phase, promptCharIndex, conversation.prompt.length]);

  // Thinking
  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => {
      setCharIndex(0);
      setPhase("typing");
    }, 700 + Math.random() * 500);
    return () => clearTimeout(t);
  }, [phase]);

  // Typing
  useEffect(() => {
    if (phase !== "typing" || !currentLine) return;
    const speed = currentLine.typeSpeed ?? 28;
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    setPhase("pausing");
  }, [phase, charIndex, currentLine]);

  // Pause
  useEffect(() => {
    if (phase !== "pausing" || !currentLine) return;
    const pause = currentLine.pauseAfter ?? 500;
    const t = setTimeout(() => {
      setCompletedLines((prev) => [
        ...prev,
        { line: currentLine, text: currentLine.text },
      ]);
      const next = lineIndex + 1;
      if (next < conversation.lines.length) {
        setLineIndex(next);
        setCharIndex(0);
        setPhase("thinking");
      } else {
        setPhase("done");
      }
    }, pause);
    return () => clearTimeout(t);
  }, [phase, currentLine, lineIndex, conversation.lines.length]);

  // Auto-advance with progress tracking
  useEffect(() => {
    if (phase !== "done") return;
    setAdvanceProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / AUTO_ADVANCE_MS, 1);
      setAdvanceProgress(pct);
      if (pct < 1) {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);
    const t = setTimeout(() => nextConversation(), AUTO_ADVANCE_MS);
    return () => {
      clearTimeout(t);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [phase]);

  const resetConvo = useCallback((index: number) => {
    setConvoIndex(index);
    setLineIndex(0);
    setCharIndex(0);
    setPromptCharIndex(0);
    setPromptDone(false);
    setCompletedLines([]);
    setAdvanceProgress(0);
    setPhase("prompt-typing");
  }, []);

  const nextConversation = useCallback(() => {
    resetConvo((convoIndex + 1) % conversations.length);
  }, [convoIndex, conversations.length, resetConvo]);

  const jumpTo = useCallback(
    (i: number) => {
      if (i !== convoIndex) resetConvo(i);
    },
    [convoIndex, resetConvo]
  );

  // Derived display strings
  const headingVisible = introPhase !== "waiting";
  const headingText = HEADING_TEXT.slice(0, headingCharIndex);
  const showHeadingCursor =
    introPhase === "heading" || introPhase === "heading-pause";
  const subtitleVisible =
    introPhase === "subtitle" || introPhase === "done";
  const subtitleText = SUBTITLE_TEXT.slice(0, subtitleCharIndex);
  const showSubtitleCursor = introPhase === "subtitle";

  // "Sebastion" starts at index 9 in "Hi, I'm Sebastion"
  const sebastionStart = 9;
  const showUnderline = headingCharIndex >= HEADING_TEXT.length;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Heading - typed out */}
      <div className="font-['Source_Serif_4',Georgia,serif] text-[clamp(1.8rem,4.5vw,2.8rem)] font-bold tracking-tight text-[var(--color-text-primary)] mb-5 text-center min-h-[1.3em]">
        {headingVisible && (
          <>
            {headingCharIndex <= sebastionStart ? (
              <>
                {headingText}
                {showHeadingCursor && <span className="hero-chat-cursor" />}
              </>
            ) : (
              <>
                {HEADING_TEXT.slice(0, sebastionStart)}
                <span className="relative inline-block">
                  {HEADING_TEXT.slice(sebastionStart, headingCharIndex)}
                  {showHeadingCursor && <span className="hero-chat-cursor" />}
                  {showUnderline && (
                    <svg
                      className="absolute w-[115%] h-[10px] -bottom-0.5 -left-[7%] text-[var(--color-accent)]"
                      viewBox="0 0 140 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M4 8 Q 70 14, 136 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                  )}
                </span>
              </>
            )}
          </>
        )}
      </div>

      {/* Subtitle - typed out after heading */}
      <div className="text-[var(--color-text-tertiary)] text-[15px] text-center max-w-md leading-relaxed mb-8 sm:mb-10 min-h-[1.6em]">
        {subtitleVisible && (
          <>
            {subtitleText}
            {showSubtitleCursor && <span className="hero-chat-cursor" />}
          </>
        )}
      </div>

      {/* Chat area - fades in after intro typing completes */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={introDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`w-full max-w-2xl mx-auto ${introDone ? "" : "opacity-0"}`}
      >
        <div className="flex flex-col">
          <PromptBubble
            conversation={conversation}
            isTyping={phase === "prompt-typing" && !promptDone}
            charIndex={promptCharIndex}
          />

          {/* Response area */}
          <div
            ref={responseRef}
            className="pb-4 space-y-2.5 max-h-[280px] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {promptDone && (
              <>
                {completedLines.map((cl, i) => (
                  <ResponseLine
                    key={`done-${conversation.id}-${i}`}
                    line={cl.line}
                    isTyping={false}
                    displayedText={cl.text}
                    isCompleted
                    index={i}
                  />
                ))}

                {phase === "typing" && currentLine && (
                  <ResponseLine
                    line={currentLine}
                    isTyping={true}
                    displayedText={currentLine.text.slice(0, charIndex)}
                  />
                )}

                {phase === "pausing" && currentLine && (
                  <ResponseLine
                    line={currentLine}
                    isTyping={false}
                    displayedText={currentLine.text}
                  />
                )}

                {phase === "thinking" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-[13px] text-[var(--color-text-tertiary)]"
                  >
                    <Brain className="w-3.5 h-3.5 opacity-40" />
                    <ThinkingDots />
                  </motion.div>
                )}

                {phase === "done" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="flex items-center gap-3 pt-3"
                  >
                    <Link
                      href={conversation.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-brand)] border border-[var(--color-brand-muted)] rounded-full hover:bg-[var(--color-brand)] hover:text-white transition-all duration-200"
                    >
                      Read full analysis
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      href={`/tags/${conversation.tag}`}
                      className="text-[12px] text-[var(--color-text-tertiary)] hover:text-[var(--color-brand)] transition-colors"
                    >
                      #{conversation.tag}
                    </Link>
                  </motion.div>
                )}
              </>
            )}
          </div>

          <ChatNavigation
            conversations={conversations}
            currentIndex={convoIndex}
            currentConversation={conversation}
            advanceProgress={advanceProgress}
            showNextButton={phase === "done"}
            onJumpTo={jumpTo}
            onNext={nextConversation}
          />
        </div>
      </motion.div>

      {/* Action chips */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={introDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex flex-wrap justify-center gap-2 mt-5 px-4 ${introDone ? "" : "opacity-0"}`}
      >
        <ActionChips />
      </motion.div>
    </div>
  );
}
