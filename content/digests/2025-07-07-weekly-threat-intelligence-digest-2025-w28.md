---
title: Weekly threat intelligence digest — 2025-W28
date: 2025-07-13T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 1 items, 2 CVEs. 2 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: July 7 - 13, 2025

## Executive summary
This week tracked 1 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 2 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Microsoft July 2025 Patch Tuesday Addresses Critical Hyper-V Escape**
- **What happened**: Microsoft released its July 2025 Patch Tuesday updates addressing over 60 security vulnerabilities. The most critical fix resolves a Hyper-V guest-to-host escape vulnerability that Microsoft acknowledged is under active exploitation. The company attributed the exploitation to a nation-state threat actor targeting cloud service provider infrastructure. A second zero-day in the Windows MSHTML platform was also patched, which was being used in phishing campaigns to bypass Mark-of-the-Web protections.
- **Who's affected**: Organizations running Hyper-V for on-premises virtualization and cloud service providers using Hyper-V-based infrastructure. The MSHTML vulnerability affects all Windows users who may receive malicious HTML files via email or web downloads. Azure customers benefit from Microsoft's accelerated patching of their own infrastructure.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 2
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Azure (24), Microsoft (4)

Priority CVEs observed in this window included:
- **CVE-2025-33654** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-33671** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For July 14 - 20, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
