---
title: "Microsoft October 2025 Patch Tuesday Fixes Actively Exploited RDP Vulnerability"
date: 2025-10-14T12:15:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Microsoft's October Patch Tuesday addresses a critical Remote Desktop Protocol vulnerability being exploited to gain initial access to enterprise networks without valid credentials."
tags: [microsoft, patch_tuesday, rdp, remote_desktop, zero-day, windows]
cves: [CVE-2025-42301, CVE-2025-42302]
affected: [Microsoft Windows, Windows Remote Desktop Services]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/10/microsoft-october-patch-tuesday-rdp/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/10/microsoft-october-2025-patch-tuesday.html
---

**What happened:** Microsoft released the October 2025 Patch Tuesday updates addressing approximately 75 security vulnerabilities, with the most critical being an actively exploited vulnerability in Windows Remote Desktop Services. CVE-2025-42301 allows an unauthenticated attacker to achieve remote code execution against RDP servers by sending specially crafted connection requests. A second zero-day, CVE-2025-42302, is a privilege escalation flaw in the Windows Print Spooler that continues the long history of Print Spooler security issues.

**Technical details:** The RDP vulnerability CVE-2025-42301 is a use-after-free in the Remote Desktop Gateway service that occurs during connection setup. An attacker can trigger the condition by sending a malformed RDP connection sequence, resulting in code execution in the context of the RDP service (SYSTEM). The vulnerability is pre-authentication and requires no valid credentials. The Print Spooler zero-day CVE-2025-42302 allows privilege escalation through a race condition in the spooler service, enabling local attackers to gain SYSTEM privileges from a standard user session.

**Who is affected:** Organizations exposing RDP services to the internet are at immediate risk from the RDP vulnerability. Despite longstanding guidance to avoid direct RDP exposure, scans show millions of RDP endpoints remain publicly accessible. The Print Spooler vulnerability affects all Windows versions with the Print Spooler service enabled, which includes most Windows installations by default.

**What defenders should do:** Patch all Windows systems immediately. Remove direct RDP exposure from the internet — require VPN or zero-trust network access for remote desktop connections. Implement Network Level Authentication (NLA) for RDP, which provides a partial mitigation by requiring authentication before the vulnerable code path is reached. Disable the Print Spooler service on systems that do not require printing. Deploy RDP connection monitoring to detect unusual connection patterns.

**Broader implications:** RDP remains one of the most commonly exploited initial access vectors for ransomware groups, and a pre-authentication RCE vulnerability in the service is particularly dangerous. Despite years of guidance to limit RDP exposure, the large number of internet-facing RDP endpoints suggests many organizations have not implemented basic network security hygiene. This vulnerability may serve as a catalyst for the adoption of zero-trust remote access solutions that eliminate the need for direct protocol exposure.
