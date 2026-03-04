---
title: Weekly threat intelligence digest — 2025-W46
date: 2025-11-16T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 1 items, 4 CVEs. 4 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: November 10 - 16, 2025

## Executive summary
This week tracked 1 curated intelligence items and 4 newly published CVEs. The risk profile remained acute, with 4 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Microsoft November 2025 Patch Tuesday Fixes Exchange Server Zero-Day**
- **What happened**: Microsoft's November 2025 Patch Tuesday addressed over 65 security vulnerabilities, including an actively exploited critical vulnerability in Exchange Server that a nation-state threat group has been using to access email communications. The Exchange flaw enables server-side request forgery (SSRF) leading to arbitrary mailbox access without authentication. Three additional zero-days in Windows components were also patched, affecting the kernel, Kerberos authentication, and the Windows Task Scheduler.
- **Who's affected**: Organizations running on-premises Exchange Server 2019 with OWA exposed to the internet. The espionage campaign targeted diplomatic, defense, and research institutions. The Windows kernel and Kerberos vulnerabilities affect all supported Windows versions and Active Directory environments respectively.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 4 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 4
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Microsoft (8)

Priority CVEs observed in this window included:
- **CVE-2025-45101** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-45102** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-45103** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-45104** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For November 17 - 23, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
