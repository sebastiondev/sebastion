---
title: "Microsoft November 2025 Patch Tuesday Fixes Exchange Server Zero-Day"
date: 2025-11-11T11:45:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Microsoft's November Patch Tuesday addresses a critical Exchange Server vulnerability being exploited by a nation-state group to access email communications, along with three other actively exploited flaws."
tags: [microsoft, patch_tuesday, exchange_server, zero-day, email, espionage]
cves: [CVE-2025-45101, CVE-2025-45102, CVE-2025-45103, CVE-2025-45104]
affected: [Microsoft Exchange Server, Microsoft Windows]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/11/microsoft-november-2025-patch-tuesday.html
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/11/microsoft-november-patch-tuesday-exchange/
---

**What happened:** Microsoft's November 2025 Patch Tuesday addressed over 65 security vulnerabilities, including an actively exploited critical vulnerability in Exchange Server that a nation-state threat group has been using to access email communications. The Exchange flaw enables server-side request forgery (SSRF) leading to arbitrary mailbox access without authentication. Three additional zero-days in Windows components were also patched, affecting the kernel, Kerberos authentication, and the Windows Task Scheduler.

**Technical details:** CVE-2025-45101 is an SSRF vulnerability in Exchange Server's OWA (Outlook Web Access) component that allows an unauthenticated attacker to forge requests to internal Exchange services, ultimately enabling access to any mailbox on the server. The vulnerability chain involves SSRF to internal EWS (Exchange Web Services) endpoints, bypassing authentication controls that only apply to external requests. The nation-state group used this access to monitor email communications of targeted individuals. The Windows kernel zero-day (CVE-2025-45102) is a privilege escalation used in combination with initial access vectors. The Kerberos flaw (CVE-2025-45103) allows authentication bypass through forged service tickets.

**Who is affected:** Organizations running on-premises Exchange Server 2019 with OWA exposed to the internet. The espionage campaign targeted diplomatic, defense, and research institutions. The Windows kernel and Kerberos vulnerabilities affect all supported Windows versions and Active Directory environments respectively.

**What defenders should do:** Patch Exchange Server and all Windows systems immediately. For Exchange, restrict OWA access to require VPN or conditional access. Review Exchange server logs and mailbox access patterns for unauthorized access. For the Kerberos vulnerability, rotate the KRBTGT account password and monitor for unusual Kerberos ticket activity. Accelerate migration plans from on-premises Exchange to Exchange Online where possible.

**Broader implications:** Exchange Server continues to be a high-priority target for espionage-focused threat actors due to the sensitive nature of email communications. The recurring pattern of critical Exchange vulnerabilities reinforces Microsoft's push for organizations to migrate to Exchange Online (Microsoft 365), where Microsoft directly manages security patching. However, some organizations — particularly in government and defense — face regulatory or sovereignty requirements that mandate on-premises email, leaving them in a difficult security position.
