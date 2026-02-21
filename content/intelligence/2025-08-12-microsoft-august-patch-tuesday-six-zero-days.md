---
title: "Microsoft August 2025 Patch Tuesday Fixes Six Actively Exploited Vulnerabilities"
date: 2025-08-12T12:00:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Microsoft's August Patch Tuesday addresses over 80 vulnerabilities with six confirmed actively exploited zero-days spanning Windows kernel, Office, and the SmartScreen security feature."
tags: [microsoft, patch_tuesday, zero-day, windows, office, smartscreen]
cves: [CVE-2025-34710, CVE-2025-34711, CVE-2025-34712, CVE-2025-34713, CVE-2025-34714, CVE-2025-34715]
affected: [Microsoft Windows, Microsoft Office, Microsoft SmartScreen]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/08/microsoft-august-2025-patch-tuesday.html
  - title: "SecurityWeek"
    url: https://www.securityweek.com/microsoft-august-patch-tuesday-six-zero-days/
---

**What happened:** Microsoft released its August 2025 Patch Tuesday updates fixing over 80 security vulnerabilities, including six that are confirmed to be under active exploitation. The zero-days span multiple attack surfaces: two Windows kernel privilege escalation flaws, two Office remote code execution vulnerabilities triggered by document opening, a SmartScreen security feature bypass, and a Windows Scripting Engine memory corruption flaw. This represents one of the most significant Patch Tuesday releases of 2025 in terms of active exploitation.

**Technical details:** The kernel vulnerabilities involve use-after-free conditions in the Win32k subsystem, enabling SYSTEM privilege escalation from a standard user. The Office flaws are memory corruption bugs triggered during RTF and DOCX parsing, leading to arbitrary code execution in the context of the current user. The SmartScreen bypass allows attackers to craft files that evade the reputation-based warning system, enabling seamless execution of malicious downloads. Multiple threat actors appear to be using various combinations of these vulnerabilities in different attack chains.

**Who is affected:** All supported versions of Windows and Microsoft Office. The combination of privilege escalation and code execution zero-days creates complete attack chains: initial access via malicious documents (Office flaws), bypassed security warnings (SmartScreen), and full system compromise (kernel escalation). Enterprise and consumer environments are both targeted.

**What defenders should do:** Apply August patches as the highest priority across all Windows and Office deployments. For organizations unable to patch immediately, implement application whitelisting to prevent execution of untrusted files and restrict macro execution in Office. Ensure endpoint detection and response solutions are updated with indicators associated with the exploitation campaigns. Review email gateway rules to block or quarantine the document types being used in exploitation.

**Broader implications:** Six actively exploited zero-days in a single Patch Tuesday release demonstrates the intensity of zero-day exploitation in 2025. The diversity of attack surfaces — kernel, Office, and security feature bypass — suggests multiple independent threat actors are discovering or purchasing zero-day exploits. The cadence of Microsoft zero-days throughout 2025 is on track to exceed previous years, reinforcing the need for defense-in-depth strategies that do not rely solely on patching.
