"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  context?: "post" | "page" | "footer";
}

export default function NewsletterSignup({
  context = "page",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrorMsg("That doesn\u2019t look right. Try again.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.error || "Something went wrong. Try again later.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Connection failed. Try again later.");
      setStatus("error");
    }
  };

  const successModal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setStatus("idle")}
      />
      <div className="relative bg-[#1E1A16] border border-[#3A332C] rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl">
        <button
          onClick={() => setStatus("idle")}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-[#5C524A] hover:text-[#FAF7F2] hover:bg-[#2E2822] transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="w-12 h-12 rounded-full bg-[#8B6914]/20 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-['Source_Serif_4',Georgia,serif] text-xl font-semibold text-[#FAF7F2] mb-2">
          You&apos;re in
        </h3>
        <p className="text-sm text-[#8A7E72] leading-relaxed mb-6">
          The Weekly Threat Intelligence Digest lands every Sunday.
          Original research, verified by humans.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium rounded-lg bg-[#8B6914] text-[#FAF7F2] hover:bg-[#6B4F0E] transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );

  if (context === "footer") {
    return (
      <div>
        {status === "success" && successModal}
        <h3 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#8A7E72] mb-3">
          Newsletter
        </h3>
        <p className="text-sm text-[#8A7E72] mb-4 leading-relaxed">
          Weekly security research, engineering deep-dives and AI security
          insights — delivered every Sunday.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@example.com"
            className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-[#2C2520] border border-[#5C524A] text-[#FAF7F2] placeholder-[#5C524A] focus:outline-none focus:border-[#8B6914] transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 px-4 py-2 text-sm font-medium rounded-lg bg-[#8B6914] text-[#FAF7F2] hover:bg-[#6B4F0E] transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p className="text-sm text-red-400 mt-2">{errorMsg}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] p-6 ${
        context === "post"
          ? "bg-[var(--color-bg-subtle)]"
          : "bg-[var(--color-bg)]"
      }`}
    >
      {status === "success" && successModal}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <h3 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)]">
          Newsletter
        </h3>
      </div>
      <p className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed mb-4">
        One email a week. Security research, engineering deep-dives and AI
        security insights - written for practitioners. No noise.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@example.com"
          className="flex-1 min-w-0 px-3.5 py-2.5 text-sm rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-sm text-red-500 mt-3">{errorMsg}</p>
      )}
    </div>
  );
}
