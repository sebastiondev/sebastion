---
title: Weekly threat intelligence digest — 2026-W07
date: 2026-02-15T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 2 items, 12 CVEs. 4 critical, 4
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
  - policy
series: Weekly Digest
---
# Weekly threat intelligence digest: February 9 - 15, 2026

## Executive summary
This week tracked 2 curated intelligence items and 12 newly published CVEs. The risk profile remained acute, with 4 critical and 4 high severity disclosures in public reporting. Priority themes were vulnerability, policy and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Microsoft February 2026 Patch Tuesday Fixes Four Actively Exploited Flaws**
- **What happened**: Microsoft's February 2026 Patch Tuesday addressed over 55 security vulnerabilities, with four confirmed actively exploited zero-days. The exploited vulnerabilities include a Windows Ancillary Function Driver privilege escalation, an Office Excel remote code execution flaw, a .NET Framework deserialization vulnerability enabling code execution, and a Windows Installer elevation of privilege. The variety of exploited components continues the pattern of broad zero-day exploitation across the Microsoft ecosystem.
- **Who's affected**: All organizations running Microsoft Windows, Office, and .NET Framework applications. The Excel vulnerability is particularly impactful as it targets the most commonly used spreadsheet application. The .NET deserialization flaw affects web applications built on .NET Framework (not .NET Core/6+/7+/8+) that process untrusted serialized data.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
### 1. **CISA Releases Year-in-Review Highlighting Record Zero-Day Exploitation in 2025**
- CISA's 2025 cybersecurity year-in-review report documents a record 97 zero-day vulnerabilities exploited in the wild and identifies edge device exploitation and ransomware as the top threats to critical infrastructure.

## Vulnerability landscape
This week saw 12 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 4
- **High**: 4
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Microsoft (8), .NET (4), open5gs (1)

Priority CVEs observed in this window included:
- **CVE-2026-0301** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2026-0302** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2026-0303** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2026-0304** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For February 16 - 22, 2026, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
