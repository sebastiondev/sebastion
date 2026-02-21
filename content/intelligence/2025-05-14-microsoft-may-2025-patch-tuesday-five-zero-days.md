---
title: "Microsoft May 2025 Patch Tuesday Fixes Five Actively Exploited Zero-Days"
date: 2025-05-14T10:00:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Microsoft's May 2025 Patch Tuesday addresses over 70 vulnerabilities including five zero-days under active exploitation across Windows kernel, scripting engine, and DWM components."
tags: [microsoft, patch_tuesday, zero-day, windows, dwm]
cves: [CVE-2025-30397, CVE-2025-30400, CVE-2025-32701, CVE-2025-32706, CVE-2025-32709]
affected: [Windows 10, Windows 11, Windows Server 2016-2025]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/05/microsoft-may-2025-patch-tuesday.html
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/05/microsoft-may-2025-patch-tuesday/
---

**What happened:** Microsoft released May 2025 security updates addressing over 70 vulnerabilities, including five that are confirmed under active exploitation. The exploited flaws span the Windows scripting engine, Desktop Window Manager, Common Log File System driver, and Ancillary Function Driver components, providing attackers with both remote code execution and privilege escalation capabilities.

**Technical details:** CVE-2025-30397 is a scripting engine memory corruption vulnerability allowing RCE through a specially crafted web page in Edge or Internet Explorer mode. CVE-2025-30400 is a use-after-free in the Desktop Window Manager (DWM) library enabling SYSTEM-level privilege escalation. CVE-2025-32701 and CVE-2025-32706 are CLFS driver vulnerabilities allowing privilege escalation, continuing the trend from April. CVE-2025-32709 is a use-after-free in the Ancillary Function Driver for WinSock allowing privilege escalation to administrator level.

**Who is affected:** All supported Windows desktop and server platforms. The scripting engine vulnerability can be triggered through web browsing, while the privilege escalation flaws require local access but are commonly chained with initial access exploits.

**What defenders should do:** Prioritize patching all five actively exploited vulnerabilities. Consider disabling Internet Explorer mode in Edge for environments where it is not required. Monitor for CLFS-related exploitation indicators as this is the second consecutive month with CLFS zero-days. Deploy endpoint detection rules targeting DWM and WinSock exploitation patterns.

**Broader implications:** The sustained pace of actively exploited Windows zero-days in 2025 is notable, with multiple flaws being weaponized each month. The repeated targeting of CLFS and DWM components suggests that threat actors have developed reliable exploitation pipelines for these subsystems, and the diversity of exploited components indicates multiple independent threat actors active simultaneously.
