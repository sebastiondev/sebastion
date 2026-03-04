---
title: Weekly threat intelligence digest — 2026-W02
date: 2026-01-11T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 2 items, 2 CVEs. 2 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: January 5 - 11, 2026

## Executive summary
This week tracked 2 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 2 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Critical Vulnerability in SonicWall SonicOS Allows Unauthenticated Access**
- **What happened**: SonicWall issued a critical advisory for an improper authentication vulnerability in the SonicOS SSLVPN component that allows unauthenticated remote attackers to hijack active VPN sessions. Mandiant identified exploitation by a suspected Chinese-nexus threat group targeting government agencies and defense organizations. The attackers used hijacked VPN sessions to gain internal network access without needing valid credentials, bypassing MFA controls in the process.
- **Who's affected**: Organizations using SonicWall firewalls with SSLVPN enabled for remote access. Government agencies, defense contractors, and enterprises are targeted in the active exploitation campaign. The session hijacking nature of the vulnerability means organizations that have implemented MFA are no less vulnerable, as the attack occurs post-authentication.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Fortinet FortiGate Firewalls Compromised via New Authentication Bypass Zero-Day**
- **What happened**: Fortinet disclosed a critical authentication bypass vulnerability in FortiOS that allows remote unauthenticated attackers to gain super-admin privileges on FortiGate firewalls through crafted requests to the Node.js websocket module. Mass exploitation was already underway before the advisory was published, with threat actors creating rogue admin accounts, modifying firewall policies, and establishing VPN tunnels for persistent network access. CISA issued an alert and added the vulnerability to the Known Exploited Vulnerabilities catalog on the same day.
- **Who's affected**: Any organization running FortiGate firewalls with the management interface exposed to the internet. FortiGate is one of the most widely deployed enterprise firewall platforms globally, with hundreds of thousands of internet-facing instances. The super-admin access allows complete control over the firewall and all its VPN, routing, and security functions.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 2
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: FortiGate (1), Fortinet (1), Gen (1), SonicWall (1)

Priority CVEs observed in this window included:
- **CVE-2026-0101** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2026-0150** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For January 12 - 18, 2026, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
