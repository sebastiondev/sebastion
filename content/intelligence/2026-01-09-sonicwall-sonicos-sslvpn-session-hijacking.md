---
title: "Critical Vulnerability in SonicWall SonicOS Allows Unauthenticated Access"
date: 2026-01-09T14:20:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical improper authentication vulnerability in SonicWall SonicOS SSLVPN allows unauthenticated attackers to hijack active VPN sessions, with exploitation observed against government and enterprise targets."
tags: [sonicwall, sonicos, sslvpn, authentication, session_hijacking]
cves: [CVE-2026-0150]
affected: [SonicWall Gen 6, Gen 7 firewalls]
sources:
  - title: "Mandiant Blog"
    url: https://www.mandiant.com/resources/blog/sonicwall-sonicos-sslvpn-exploitation
  - title: "SecurityWeek"
    url: https://www.securityweek.com/sonicwall-sonicos-critical-sslvpn-vulnerability/
---

**What happened:** SonicWall issued a critical advisory for an improper authentication vulnerability in the SonicOS SSLVPN component that allows unauthenticated remote attackers to hijack active VPN sessions. Mandiant identified exploitation by a suspected Chinese-nexus threat group targeting government agencies and defense organizations. The attackers used hijacked VPN sessions to gain internal network access without needing valid credentials, bypassing MFA controls in the process.

**Technical details:** CVE-2026-0150 is an improper authentication vulnerability in the SSLVPN session management of SonicOS. The flaw allows an attacker to send crafted requests to the SSLVPN interface that return valid session tokens for currently active VPN sessions. The attacker can then use these tokens to impersonate authenticated users and gain full VPN access with the victim's privileges. Because the session is already authenticated (including MFA), the hijacked session inherits all access rights without triggering additional authentication challenges. The vulnerability affects both Gen 6 and Gen 7 SonicWall hardware.

**Who is affected:** Organizations using SonicWall firewalls with SSLVPN enabled for remote access. Government agencies, defense contractors, and enterprises are targeted in the active exploitation campaign. The session hijacking nature of the vulnerability means organizations that have implemented MFA are no less vulnerable, as the attack occurs post-authentication.

**What defenders should do:** Apply SonicWall patches immediately. If patching is not possible, restrict access to the SSLVPN portal to known IP ranges. Implement session monitoring to detect multiple concurrent sessions from different IP addresses for the same user. Force re-authentication for VPN sessions at regular intervals. Review VPN access logs for anomalous session activity, including sessions that appear to originate from unexpected geolocations or IP addresses.

**Broader implications:** The ability to hijack authenticated VPN sessions represents a particularly dangerous attack pattern because it completely defeats multi-factor authentication. Organizations that invested in MFA as a primary defense for remote access may have a false sense of security. This vulnerability class — attacking session management rather than authentication — highlights the need for continuous session validation, including behavioral analysis of VPN traffic patterns, rather than relying solely on point-in-time authentication events.
