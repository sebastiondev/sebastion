---
title: "Prompt Injection Vulnerabilities in AI Browser Agents: Comet Case Study Reveals Data Exfiltration Risks"
date: 2026-03-11T10:36:49+00:00
severity: high
category: vulnerability
status: resolved
tldr: "Trail of Bits discovered four prompt injection techniques that could extract private user data (Gmail contents) from Perplexity's Comet browser by exploiting inadequate input sanitization in AI assistant features. The vulnerabilities highlight systemic risks in AI agent design where external web content is processed as trusted input."
tags: [prompt-injection, ai-security, browser-security, data-exfiltration, perplexity, comet, threat-modeling, adversarial-testing]
cves: []
affected: [Perplexity Comet Browser]
sources:
  - title: "Trail of Bits"
    url: https://blog.trailofbits.com/2026/02/20/using-threat-modeling-and-prompt-injection-to-audit-comet/
---

## Technical Assessment

Trail of Bits conducted pre-launch security testing on Perplexity's Comet browser using TRAIL threat modeling methodology combined with adversarial prompt injection testing. The research identified four distinct prompt injection attack vectors capable of extracting sensitive user data from integrated services like Gmail. This represents a critical architectural flaw: the browser's AI assistant processed external web content without treating it as untrusted input, a fundamental principle in defense-in-depth security design.

## Attack Vector Analysis

The vulnerabilities exploit the trust boundary between web content and AI assistants. When users browse websites containing malicious prompts embedded in page content, these prompts execute within the AI assistant's context where they can access private user data. The fact that four separate techniques were discovered suggests prompt injection protection was not a primary consideration during initial development. This is particularly concerning because AI agents increasingly have access to sensitive user contexts (emails, documents, browser history) that traditional security models weren't designed to protect.

## Impact and Risk Assessment

The severity is heightened by the implicit user trust in AI features marketed as privacy-preserving. Users browsing with Comet may not anticipate that visiting a compromised or adversarial website could leak their Gmail contents to the attacker through the AI intermediary. The attack requires no user interaction beyond normal browsing behavior. However, Trail of Bits notes that Perplexity engaged responsibly with the findings and published detailed mitigation strategies.

## Defender Recommendations

Organizations building AI-powered products must: (1) Apply the principle of least privilege—AI agents should never have blanket access to sensitive user data; (2) Implement strict input validation and content filtering before processing external data; (3) Use sandboxing and capability-based security for AI components; (4) Conduct adversarial testing throughout development, not pre-launch; (5) Maintain clear audit logs of what data AI agents access and why.

## Broader Implications

This engagement represents responsible disclosure done correctly and highlights a growing architectural pattern: AI agents are becoming the weakest link in security stacks because they blur traditional trust boundaries. The disclosed recommendations from Trail of Bits and Perplexity's published mitigations should become baseline security requirements for any AI product. As AI-powered features become ubiquitous in applications with sensitive data access, prompt injection will rival SQL injection and XSS in severity—organizations need to treat it with equivalent rigor.