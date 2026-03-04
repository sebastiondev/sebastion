---
title: Weekly threat intelligence digest — 2025-W50
date: 2025-12-14T18:00:00.000Z
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
# Weekly threat intelligence digest: December 8 - 14, 2025

## Executive summary
This week tracked 1 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 2 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Microsoft December 2025 Patch Tuesday Fixes Critical LDAP and Windows Kernel Flaws**
- **What happened**: Microsoft's final Patch Tuesday of 2025 addressed over 70 security vulnerabilities. The most critical is a remote code execution vulnerability in the Windows LDAP service that can be triggered by any client or server that processes LDAP responses, potentially enabling wormable network compromise. An actively exploited Windows kernel privilege escalation zero-day was also patched. The year ends with Microsoft having patched a record number of zero-day vulnerabilities across 12 monthly cycles.
- **Who's affected**: All Windows environments using Active Directory are potentially affected by the LDAP vulnerability, which impacts both domain controllers and domain-joined clients. The severity is amplified in environments where LDAP traffic crosses network boundaries or where an attacker has already compromised a domain controller. The kernel zero-day affects all supported Windows versions.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 2
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Active (2), Microsoft (2), Windows (2)

Priority CVEs observed in this window included:
- **CVE-2025-48201** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-48202** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For December 15 - 21, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
