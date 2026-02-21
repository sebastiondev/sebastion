---
title: "Microsoft January 2026 Patch Tuesday Addresses Eight Zero-Day Vulnerabilities"
date: 2026-01-13T12:30:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "The first Patch Tuesday of 2026 addresses a record eight actively exploited zero-day vulnerabilities spanning Hyper-V, Office, Windows kernel, and the Microsoft Access database engine."
tags: [microsoft, patch_tuesday, zero-day, hyper_v, office, windows]
cves: [CVE-2026-0201, CVE-2026-0202, CVE-2026-0203, CVE-2026-0204, CVE-2026-0205, CVE-2026-0206, CVE-2026-0207, CVE-2026-0208]
affected: [Microsoft Windows, Microsoft Office, Microsoft Hyper-V]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2026/01/microsoft-january-patch-tuesday-eight-zero-days/
  - title: "The Hacker News"
    url: https://thehackernews.com/2026/01/microsoft-january-2026-patch-tuesday.html
---

**What happened:** Microsoft started 2026 with a record-breaking Patch Tuesday addressing eight actively exploited zero-day vulnerabilities across multiple product families. The most severe include a Hyper-V guest-to-host escape, three Windows kernel privilege escalation flaws, two Office remote code execution vulnerabilities, a Windows Themes spoofing flaw, and a vulnerability in the Access database engine. Microsoft attributed different exploitation chains to both nation-state groups and financially motivated threat actors.

**Technical details:** The three kernel zero-days represent independent vulnerabilities in the Win32k, CLFS, and AFD (Ancillary Function Driver) subsystems, each enabling privilege escalation to SYSTEM from standard user accounts. The Office vulnerabilities are triggered by opening malicious documents — one through an RTF heap spray and another through an OLE object embedding flaw. The Hyper-V escape involves a use-after-free in the virtual PCI bus handler. The Windows Themes vulnerability enables NTLM credential relay through specially crafted .theme files. Multiple zero-days are being chained in sophisticated multi-stage attacks.

**Who is affected:** All organizations running Microsoft Windows, Office, and Hyper-V environments. The breadth of affected components means virtually every Microsoft customer is affected by at least some of these zero-days. The chaining of multiple zero-days in single attack campaigns indicates well-resourced threat actors with stockpiles of exploits.

**What defenders should do:** Apply January patches as the highest priority. For organizations unable to patch immediately, implement available mitigations: disable NTLM where possible to mitigate the Themes credential relay, block RTF documents in email gateways, restrict Hyper-V guest administrative access, and deploy application control to prevent execution of untrusted Office documents. Ensure EDR solutions are updated with IOCs from the exploitation campaigns.

**Broader implications:** Eight actively exploited zero-days in a single Patch Tuesday sets a concerning tone for 2026. The simultaneous exploitation of vulnerabilities in kernel, hypervisor, and application layers by multiple threat groups suggests that the zero-day market remains robust and that advanced adversaries maintain significant exploit inventories. The sustained volume of Microsoft zero-days may accelerate enterprise interest in platform diversification and zero-trust architectures that minimize reliance on OS-level security.
