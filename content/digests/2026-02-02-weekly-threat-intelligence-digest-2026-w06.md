---
title: Weekly threat intelligence digest — 2026-W06
date: 2026-02-08T18:00:00.000Z
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
# Weekly threat intelligence digest: February 2 - 8, 2026

## Executive summary
This week tracked 2 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 1 critical and 1 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Critical Cisco NX-OS Vulnerability Enables Remote Command Injection**
- **What happened**: Cisco disclosed a critical command injection vulnerability in NX-OS software affecting multiple Nexus series data center switches. The flaw allows an unauthenticated remote attacker to inject and execute arbitrary commands on the underlying operating system through the NX-API management interface. CISA added the vulnerability to the KEV catalog after threat intelligence firms reported exploitation attempts targeting large enterprise and cloud provider data centers running Cisco Nexus infrastructure.
- **Who's affected**: Data centers and cloud providers running Cisco Nexus switches with NX-API enabled for network automation. The Nexus platform is widely deployed in modern data centers for leaf-spine and core switching. Compromise of data center switches can enable traffic interception, network segmentation bypass, and lateral movement across the entire data center fabric.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Critical PostgreSQL Vulnerability Enables Authenticated RCE Through SQL Functions**
- **What happened**: The PostgreSQL Global Development Group released emergency patches for a critical vulnerability that allows authenticated database users to execute arbitrary operating system commands by exploiting a sandbox escape in the PL/pgSQL function handler. The vulnerability requires only CREATE FUNCTION privileges, which are commonly available to application database users. Security researchers identified active exploitation targeting internet-exposed PostgreSQL instances, particularly those used by web applications with SQL injection vulnerabilities that provide the initial authenticated access.
- **Who's affected**: Organizations running PostgreSQL 14 through 17 on any operating system. Web applications that use PostgreSQL as their backend database are at elevated risk, particularly if they have undiscovered SQL injection vulnerabilities. Cloud database services running managed PostgreSQL instances have been independently patching their platforms.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 1
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: 15 (12), 16 (12), 17 (12), Nexus (3)

Priority CVEs observed in this window included:
- **CVE-2026-0215** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2026-0190** (High): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For February 9 - 15, 2026, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
