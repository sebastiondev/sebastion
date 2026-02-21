---
title: "Microsoft June 2025 Patch Tuesday Fixes Actively Exploited Kernel Vulnerability"
date: 2025-06-10T12:15:00+00:00
severity: high
category: vulnerability
status: contained
tldr: "Microsoft's June Patch Tuesday addresses over 50 vulnerabilities including a Windows kernel privilege escalation flaw being exploited in the wild by advanced threat actors."
tags: [microsoft, patch_tuesday, windows_kernel, privilege_escalation, zero-day]
cves: [CVE-2025-29824, CVE-2025-33053]
affected: [Microsoft Windows, Microsoft Office]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/06/microsoft-june-2025-patch-tuesday.html
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/06/microsoft-june-patch-tuesday/
---

**What happened:** Microsoft's June 2025 Patch Tuesday addressed over 50 security vulnerabilities across Windows, Office, Azure, and other products. The most critical fix addresses a Windows kernel privilege escalation vulnerability that Microsoft confirmed is being actively exploited in targeted attacks. Additionally, several remote code execution flaws in Office components were patched, including one triggered by opening specially crafted documents.

**Technical details:** The actively exploited CVE-2025-29824 is a use-after-free vulnerability in the Windows kernel's memory management subsystem. Successful exploitation allows a local attacker to escalate privileges from a standard user to SYSTEM. Microsoft attributed exploitation to an advanced persistent threat group using the flaw as part of post-compromise activity after gaining initial access through other means. The Office vulnerabilities involve memory corruption during document parsing that can lead to arbitrary code execution in the context of the current user.

**Who is affected:** All supported versions of Windows are affected by the kernel vulnerability, from Windows 10 through Windows 11 and Windows Server editions. The Office vulnerabilities affect Microsoft 365 Apps, Office 2019, and Office 2021. Organizations running unpatched Windows systems where attackers have already established a foothold are at immediate risk from the kernel flaw.

**What defenders should do:** Apply June patches through standard update channels as a priority. For the kernel vulnerability, ensure endpoint detection tools are configured to detect privilege escalation attempts. Monitor for unusual SYSTEM-level process creation from user-context processes. The Office vulnerabilities can be partially mitigated by blocking macros and running Office in Protected View for files from untrusted sources.

**Broader implications:** The continued exploitation of Windows kernel vulnerabilities by advanced threat actors highlights the value of privilege escalation flaws in attack chains. While initial access techniques vary, the ability to escalate to SYSTEM remains a critical enabler for ransomware deployment and persistent access. The pace of zero-day exploitation in Microsoft products shows no signs of slowing down through 2025.
