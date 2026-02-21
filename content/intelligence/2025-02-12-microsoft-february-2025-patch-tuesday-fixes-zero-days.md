---
title: "Microsoft February 2025 Patch Tuesday Fixes Actively Exploited Zero-Days"
date: 2025-02-12T10:00:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Microsoft's February 2025 Patch Tuesday addresses over 55 vulnerabilities including multiple zero-days under active exploitation in Windows, with critical flaws in NTLMv2 and LDAP."
tags: [microsoft, patch_tuesday, zero-day, windows, ntlm]
cves: [CVE-2025-21391, CVE-2025-21418, CVE-2025-21376, CVE-2025-21377]
affected: [Windows 10, Windows 11, Windows Server 2022, Windows Server 2025]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/02/microsoft-patch-tuesday-february-2025/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/02/microsoft-patch-tuesday-february-2025.html
---

**What happened:** Microsoft released its February 2025 security updates, patching over 55 vulnerabilities across its product portfolio. The update addresses multiple zero-day vulnerabilities under active exploitation, including an elevation of privilege flaw in Windows Storage and a privilege escalation in the Windows Ancillary Function Driver for WinSock.

**Technical details:** CVE-2025-21391 is a Windows Storage elevation of privilege vulnerability that allows attackers to delete targeted files on a system, potentially leading to service disruption. CVE-2025-21418 is a privilege escalation in the WinSock AFD driver allowing SYSTEM-level access. CVE-2025-21377 is an NTLMv2 hash disclosure vulnerability that leaks credentials through minimal user interaction with a malicious file. CVE-2025-21376 is a critical RCE in Windows LDAP with a CVSS score of 8.1 that could be triggered by sending crafted LDAP requests.

**Who is affected:** All supported Windows desktop and server platforms. The NTLM hash disclosure vulnerability is particularly concerning for enterprise environments still relying on NTLM authentication, as leaked hashes can be used in relay attacks to authenticate to other services.

**What defenders should do:** Prioritize the two actively exploited zero-days for immediate patching. Organizations should accelerate their transition away from NTLMv2 authentication given the hash disclosure vulnerability. Monitor for NTLM relay attacks and implement Extended Protection for Authentication where possible. Test and deploy the LDAP patches urgently for domain controller environments.

**Broader implications:** The continued exploitation of Windows privilege escalation vulnerabilities indicates that attackers frequently combine these with other initial access vectors to achieve full system compromise. The NTLMv2 hash disclosure vulnerability adds further urgency to Microsoft's long-standing recommendation to deprecate NTLM in favor of Kerberos authentication.
