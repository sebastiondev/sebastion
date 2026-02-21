---
title: "Microsoft December 2025 Patch Tuesday Fixes Critical LDAP and Windows Kernel Flaws"
date: 2025-12-09T12:00:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "The final Patch Tuesday of 2025 addresses over 70 vulnerabilities including a critical Windows LDAP remote code execution flaw and an actively exploited Windows kernel zero-day."
tags: [microsoft, patch_tuesday, ldap, windows_kernel, zero-day, active_directory]
cves: [CVE-2025-48201, CVE-2025-48202]
affected: [Microsoft Windows, Windows Server, Active Directory]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/12/microsoft-december-2025-patch-tuesday.html
  - title: "SecurityWeek"
    url: https://www.securityweek.com/microsoft-december-patch-tuesday-ldap-zero-day/
---

**What happened:** Microsoft's final Patch Tuesday of 2025 addressed over 70 security vulnerabilities. The most critical is a remote code execution vulnerability in the Windows LDAP service that can be triggered by any client or server that processes LDAP responses, potentially enabling wormable network compromise. An actively exploited Windows kernel privilege escalation zero-day was also patched. The year ends with Microsoft having patched a record number of zero-day vulnerabilities across 12 monthly cycles.

**Technical details:** CVE-2025-48201 is a critical buffer overflow in the Windows LDAP client that occurs when processing specially crafted LDAP referral responses. An attacker who controls or can man-in-the-middle an LDAP connection can trigger the overflow, achieving arbitrary code execution in the context of the process making the LDAP query. Since Active Directory heavily relies on LDAP, a compromised domain controller could use referral responses to compromise any Windows system querying it, enabling potential worm-like spread across a domain. CVE-2025-48202 is a race condition in the Windows kernel's file system driver that enables SYSTEM privilege escalation from a standard user context.

**Who is affected:** All Windows environments using Active Directory are potentially affected by the LDAP vulnerability, which impacts both domain controllers and domain-joined clients. The severity is amplified in environments where LDAP traffic crosses network boundaries or where an attacker has already compromised a domain controller. The kernel zero-day affects all supported Windows versions.

**What defenders should do:** Apply December patches as a priority across all Windows systems, with domain controllers receiving first attention. Until patching is complete, ensure LDAP signing and channel binding are enforced to reduce the LDAP vulnerability's attack surface. Monitor for unusual LDAP referral activity in network traffic. Implement Active Directory tiering to limit domain controller exposure. Review endpoint detection alerts for indicators associated with the kernel zero-day exploitation chain.

**Broader implications:** 2025 concludes with Microsoft having patched a record number of actively exploited zero-day vulnerabilities — over 30 confirmed in-the-wild exploitations across the year's Patch Tuesday releases. The LDAP vulnerability is particularly concerning due to the central role of Active Directory in enterprise networking, and its potential for worm-like propagation within domains. The sustained pace of zero-day exploitation emphasizes that patching alone cannot serve as the sole defensive strategy, and organizations must invest in detection, segmentation, and zero-trust architectures to limit the impact of inevitable zero-day exploitation.
