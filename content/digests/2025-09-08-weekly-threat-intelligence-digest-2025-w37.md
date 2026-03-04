---
title: Weekly threat intelligence digest — 2025-W37
date: 2025-09-14T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 1 items, 3 CVEs. 3 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: September 8 - 14, 2025

## Executive summary
This week tracked 1 curated intelligence items and 3 newly published CVEs. The risk profile remained acute, with 3 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Microsoft September 2025 Patch Tuesday Addresses Critical Windows TCP/IP Flaw**
- **What happened**: Microsoft's September 2025 Patch Tuesday addressed over 70 vulnerabilities, headlined by a critical wormable remote code execution vulnerability in the Windows TCP/IP stack. The flaw can be exploited by sending specially crafted IPv6 packets to a target system without any user interaction or authentication. Additionally, two Windows kernel privilege escalation vulnerabilities were patched that Microsoft confirmed are being actively exploited in targeted attacks.
- **Who's affected**: All Windows systems with IPv6 enabled are vulnerable to the TCP/IP flaw, which includes virtually all modern Windows installations. The wormable nature means internal networks could see rapid propagation if any system is compromised. The privilege escalation zero-days affect all supported Windows versions and are being used in post-compromise attack chains.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 3 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 3
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Microsoft (3)

Priority CVEs observed in this window included:
- **CVE-2025-37810** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-37811** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-37812** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For September 15 - 21, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
