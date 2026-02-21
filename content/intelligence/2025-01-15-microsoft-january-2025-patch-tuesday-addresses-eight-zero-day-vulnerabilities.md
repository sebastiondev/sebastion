---
title: "Microsoft January 2025 Patch Tuesday Addresses Eight Zero-Day Vulnerabilities"
date: 2025-01-15T10:30:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Microsoft's January 2025 Patch Tuesday addresses 159 vulnerabilities including eight zero-days, three of which are under active exploitation in Windows Hyper-V and Windows components."
tags: [microsoft, patch_tuesday, zero-day, windows, hyper-v]
cves: [CVE-2025-21333, CVE-2025-21334, CVE-2025-21335, CVE-2025-21298, CVE-2025-21307]
affected: [Windows 10, Windows 11, Windows Server 2022, Windows Server 2025, Microsoft Office]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/01/3-actively-exploited-zero-days-fixed-in.html
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/01/microsoft-happy-2025-heres-159-security-updates/
---

**What happened:** Microsoft released its January 2025 Patch Tuesday updates addressing 159 security vulnerabilities, the largest January patch set in recent history. Eight of the vulnerabilities are zero-days, with three confirmed under active exploitation. The actively exploited flaws all exist in the Windows Hyper-V NT Kernel Integration VSP component.

**Technical details:** The three actively exploited zero-days (CVE-2025-21333, CVE-2025-21334, CVE-2025-21335) are elevation of privilege vulnerabilities in Windows Hyper-V that allow attackers who already have local access to gain SYSTEM-level privileges. Additionally, CVE-2025-21298 is a critical RCE in Windows OLE with a CVSS score of 9.8 triggered through specially crafted emails viewed in Outlook, and CVE-2025-21307 is a critical RCE in the Windows Reliable Multicast Transport Driver.

**Who is affected:** All supported versions of Windows desktop and server operating systems, including Windows 10, Windows 11, Windows Server 2022, and Windows Server 2025. Microsoft Office users are also affected by several remote code execution vulnerabilities in Access and Excel.

**What defenders should do:** Prioritize patching the three actively exploited Hyper-V vulnerabilities immediately. For CVE-2025-21298, configure Outlook to view emails in plain text as a temporary mitigation. Test and deploy the full patch set according to organizational patch management policies. Pay particular attention to the Windows OLE and RMTP driver vulnerabilities given their critical severity ratings.

**Broader implications:** The unusually high volume of patches, combined with three actively exploited zero-days on day one, signals an aggressive start to 2025 for threat actors targeting the Windows ecosystem. The focus on Hyper-V elevation of privilege suggests attackers are increasingly targeting virtualization layers to escalate from guest to host in cloud and enterprise environments.
