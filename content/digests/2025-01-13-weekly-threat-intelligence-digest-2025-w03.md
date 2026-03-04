---
title: "Weekly threat intelligence digest — 2025-W03"
date: 2025-01-19T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 7 items, 12 CVEs. 3 critical, 1 high."
tags: [campaign, policy, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: January 13 - 19, 2025

## Executive summary
This week saw a surge in critical vulnerabilities across major enterprise products, with active exploitation targeting FortiOS/Proxy authentication bypass, Windows Hyper-V zero-days, and Ivanti Connect Secure flaws. Microsoft's Patch Tuesday addressed eight zero-day vulnerabilities, while PowerSchool faced a significant data breach affecting K-12 districts. CISA issued an emergency directive to mitigate Ivanti vulnerabilities exploited by nation-state actors.

## Critical & high priority
### [CRITICAL] Fortinet FortiOS Authentication Bypass Under Active Exploitation
**What happened:**  
A critical authentication bypass vulnerability (CVE-2024-55591) in FortiOS and FortiProxy was actively exploited. Attackers used crafted requests to the Node.js websocket module, gaining super-admin privileges on firewalls.

**Who's affected:**  
- **Products:** FortiOS 7.0.0-7.0.16, FortiProxy 7.0.0-7.0.19, FortiProxy 7.2.0-7.2.12
- **Sectors:** Enterprises relying on Fortinet's firewall solutions

**What to do:**  
Apply patches immediately and disable websocket services if not in use.

### [CRITICAL] Microsoft January 2025 Patch Tuesday Addresses Eight Zero-Day Vulnerabilities
**What happened:**  
Microsoft patched 159 vulnerabilities, including eight zero-days. Three were exploited in Windows Hyper-V (CVE-2025-21333, CVE-2025-21334, CVE-2025-21335).

**Who's affected:**  
- **Products:** Windows 10/11, Server 2022/2025, Microsoft Office
- **Sectors:** All Windows users

**What to do:**  
Install updates immediately and monitor for exploitation attempts.

### [HIGH] PowerSchool Data Breach Exposes Student and Staff Records
**What happened:**  
Attackers accessed PowerSchool's SIS platform via a customer support portal, exfiltrating student and staff data.

**Who's affected:**  
- **Products:** PowerSchool SIS
- **Sectors:** K-12 school districts in US/Canada

**What to do:**  
Review access controls and implement MFA for sensitive portals.

### [CRITICAL] CISA Issues Emergency Directive for Ivanti Connect Secure Vulnerabilities
**What happened:**  
CISA mandated action against CVE-2025-0282 in Ivanti Connect Secure, exploited by nation-state actors.

**Who's affected:**  
- **Products:** Ivanti Connect Secure and Policy Secure
- **Sectors:** US Federal agencies

**What to do:**  
Apply patches and monitor for additional exploitation attempts.

## Notable developments
### Additional Critical CVEs Identified
- **CVE-2025-22777 (GiveWP):** Deserialization flaw allowing object injection.
- **CVE-2025-22144 (NamelessMC):** Password reset code bypass via admin permissions.
- **CVE-2024-56323 (OpenFGA):** Authorization bypass under specific conditions.
- **CVE-2025-0061 (SAP BusinessObjects):** Session hijacking vulnerability.

### Fortinet's Ongoing Vulnerability Issues
Fortinet products saw multiple CVEs, including authentication weaknesses and weak encryption practices.

## Vulnerability landscape
### Analysis of This Week's CVE Trends
- **Total New CVEs:** 7
- **Severity Distribution:** All critical.
- **Top Affected Vendors:** Windows (5), Microsoft (5), FortiProxy/FortiOS (1 each).
- **Patterns:** Multiple zero-days in enterprise products, active exploitation across sectors.

## Recommended actions
1. **Patch FortiOS/Proxy Immediately:** Address CVE-2024-55591 to prevent super-admin access.
2. **Apply Microsoft Updates:** Prioritize fixes for Windows Hyper-V and other Patch Tuesday updates.
3. **Secure PowerSchool Access:** Review third-party integrations and implement MFA.
4. **Comply with CISA Directive:** Mitigate Ivanti vulnerabilities as per emergency guidelines.
5. **Monitor GiveWP/NamelessMC Flaws:** Apply patches to prevent deserialization and code bypass issues.
6. **Address SAP Session Hijacking:** Implement multi-factor authentication for sensitive applications.
7. **Investigate FortiManager Vulnerabilities:** Monitor for exploitation attempts and apply patches.

## Looking ahead
Next week may see increased activity around Fortinet vulnerabilities, further analysis of Microsoft's Patch Tuesday updates, potential supply chain attacks post-PowerSchool breach, and ongoing Ivanti exploits. Stay vigilant and prepare for coordinated response efforts.