---
title: Weekly threat intelligence digest — 2025-W26
date: 2025-06-29T18:00:00.000Z
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
# Weekly threat intelligence digest: June 23 - 29, 2025

## Executive summary
This week tracked 2 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 1 critical and 1 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **VMware ESXi Vulnerability Enables Hypervisor Escape from Guest VM**
- **What happened**: Broadcom released critical security updates for VMware ESXi, Workstation, and Fusion to address a heap overflow vulnerability that enables virtual machine escape. An attacker with local administrator privileges within a guest virtual machine can exploit the flaw to execute arbitrary code on the host hypervisor, effectively breaking out of the virtualization sandbox. The vulnerability has a CVSS score of 9.3 and ransomware groups are known to actively target ESXi environments.
- **Who's affected**: Organizations running VMware ESXi hypervisors in data centers and cloud environments, VMware Workstation users on Windows and Linux, and VMware Fusion users on macOS. Enterprise environments using ESXi for server virtualization are at highest risk, as a hypervisor escape can compromise all virtual machines running on the same host.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Critical Vulnerability in ASUS Router Firmware Enables Remote Takeover**
- **What happened**: ASUS issued firmware updates for multiple router models to patch a critical authentication bypass vulnerability that allows remote attackers to gain administrative access without credentials. Security researchers confirmed that multiple botnets, including variants of Mirai and Gafgyt, are actively scanning for and exploiting vulnerable ASUS routers to conscript them into DDoS botnets. The vulnerability affects several popular consumer and prosumer router models in the RT-AX and ROG Rapture series.
- **Who's affected**: Owners of affected ASUS router models, which include several popular Wi-Fi 6 and Wi-Fi 6E models sold in consumer and small business markets. Router compromise can expose all devices on the connected network to DNS hijacking, traffic interception, and man-in-the-middle attacks. Small businesses using consumer-grade ASUS routers are particularly vulnerable as they often lack separate security monitoring.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 1
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: VMware (3), ASUS (2)

Priority CVEs observed in this window included:
- **CVE-2025-22230** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-28703** (High): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For June 30 - July 6, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
