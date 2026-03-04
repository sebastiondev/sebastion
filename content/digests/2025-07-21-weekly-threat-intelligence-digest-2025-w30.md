---
title: Weekly threat intelligence digest — 2025-W30
date: 2025-07-27T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 1 items, 2 CVEs. 0 critical, 2
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: July 21 - 27, 2025

## Executive summary
This week tracked 1 curated intelligence items and 2 newly published CVEs. The risk profile remained elevated, with 0 critical and 2 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Apple Emergency Patches for WebKit Zero-Days Used in Targeted Spyware Attacks**
- **What happened**: Apple released emergency Rapid Security Response updates and subsequent full security updates for iOS 18.6.1, iPadOS 18.6.1, macOS Sequoia 15.6.1, and Safari 18.6.1 to address two WebKit zero-day vulnerabilities. Google's Threat Analysis Group and Project Zero discovered the flaws being used in an exploit chain deployed by a commercial spyware vendor to target journalists, human rights activists, and political dissidents. The exploit required no user interaction beyond clicking a malicious link.
- **Who's affected**: All users of iPhone, iPad, and Mac running versions prior to the patched releases. While the active exploitation targeted specific high-risk individuals, the vulnerabilities could theoretically be weaponized by additional threat actors now that their existence is known. Safari users on all platforms are affected by the WebKit component.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 0
- **High**: 2
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Apple (8)

Priority CVEs observed in this window included:
- **CVE-2025-31201** (High): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-31202** (High): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For July 28 - August 3, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
