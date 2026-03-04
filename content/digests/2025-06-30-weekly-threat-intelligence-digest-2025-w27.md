---
title: Weekly threat intelligence digest — 2025-W27
date: 2025-07-06T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 1 items, 1 CVEs. 1 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
series: Weekly Digest
---
# Weekly threat intelligence digest: June 30 - July 6, 2025

## Executive summary
This week tracked 1 curated intelligence items and 1 newly published CVEs. The risk profile remained acute, with 1 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Critical OpenSSH Vulnerability Allows Remote Code Execution on Linux Servers**
- **What happened**: Security researchers disclosed a critical remote code execution vulnerability in OpenSSH server, informally dubbed "regreSSHion 2" as it shares similarities with the CVE-2024-6387 signal handler race condition disclosed in 2024. The vulnerability allows an unauthenticated attacker to achieve remote code execution as root on affected Linux systems running glibc-based distributions. Given that OpenSSH is the most widely deployed remote access tool on Linux servers, the vulnerability has an enormous potential attack surface.
- **Who's affected**: Linux servers running vulnerable versions of OpenSSH with sshd exposed to the network. Major distributions including Ubuntu, Debian, RHEL, and Fedora have released patched packages. Servers with SSH exposed to the internet are at highest risk, and Shodan data indicates over 25 million OpenSSH instances are publicly accessible. BSD-based systems and those using musl libc appear unaffected.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 1 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: OpenSSH (1)

Priority CVEs observed in this window included:
- **CVE-2025-31890** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For July 7 - 13, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
