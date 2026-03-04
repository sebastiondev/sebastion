---
title: Weekly threat intelligence digest — 2025-W24
date: 2025-06-15T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 2 items, 2 CVEs. 1 critical, 1
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: June 9 - 15, 2025

## Executive summary
This week tracked 2 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 1 critical and 1 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **MOVEit Transfer Vulnerability Exploited Again by Cl0p Ransomware**
- **What happened**: Progress Software disclosed a critical SQL injection vulnerability in MOVEit Transfer, and threat intelligence firms quickly confirmed active exploitation by the Cl0p (TA505) ransomware group. The attack mirrors the group's devastating 2023 MOVEit campaign that compromised over 2,500 organizations and exposed data belonging to tens of millions of individuals. Cl0p appears to be using automated mass exploitation tools to exfiltrate data from vulnerable instances before organizations can patch.
- **Who's affected**: Organizations running MOVEit Transfer on-premises for managed file transfer workflows. MOVEit is widely used in healthcare, financial services, government, and legal sectors for secure file exchange containing sensitive data. Many organizations that patched after the 2023 campaign may have been lulled into complacency, and the new vulnerability exists in code separate from the previously patched components.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Microsoft June 2025 Patch Tuesday Fixes Actively Exploited Kernel Vulnerability**
- **What happened**: Microsoft's June 2025 Patch Tuesday addressed over 50 security vulnerabilities across Windows, Office, Azure, and other products. The most critical fix addresses a Windows kernel privilege escalation vulnerability that Microsoft confirmed is being actively exploited in targeted attacks. Additionally, several remote code execution flaws in Office components were patched, including one triggered by opening specially crafted documents.
- **Who's affected**: All supported versions of Windows are affected by the kernel vulnerability, from Windows 10 through Windows 11 and Windows Server editions. The Office vulnerabilities affect Microsoft 365 Apps, Office 2019, and Office 2021. Organizations running unpatched Windows systems where attackers have already established a foothold are at immediate risk from the kernel flaw.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 1
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Microsoft (2), Progress (1)

Priority CVEs observed in this window included:
- **CVE-2025-34362** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-33053** (High): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For June 16 - 22, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
