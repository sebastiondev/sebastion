---
title: Weekly threat intelligence digest — 2025-W47
date: 2025-11-23T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 2 items, 1 CVEs. 1 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
  - campaign
series: Weekly Digest
---
# Weekly threat intelligence digest: November 17 - 23, 2025

## Executive summary
This week tracked 2 curated intelligence items and 1 newly published CVEs. The risk profile remained acute, with 1 critical and 0 high severity disclosures in public reporting. Priority themes were campaign, vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Critical Apache Struts Vulnerability Enables Remote Code Execution**
- **What happened**: The Apache Software Foundation published a critical security advisory for Apache Struts 2 addressing an OGNL injection vulnerability that enables unauthenticated remote code execution. Within 72 hours of the advisory, security researchers observed active exploitation attempts in the wild, with attackers deploying cryptocurrency miners and web shells on vulnerable servers. The vulnerability follows the notorious pattern of Struts OGNL injection flaws that have led to major breaches including the 2017 Equifax data breach.
- **Who's affected**: Applications built on Apache Struts 2 running vulnerable versions. Struts remains widely deployed in enterprise Java applications, particularly in financial services, government, and large enterprise web applications. Many Struts applications run in environments with legacy dependencies that make rapid patching challenging.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Chinese Salt Typhoon Telecom Breaches Expand to Additional Carriers**
- **What happened**: US intelligence agencies disclosed that the Chinese state-sponsored group Salt Typhoon (also tracked as GhostEmperor) has compromised additional telecommunications carriers beyond the AT&T, Verizon, and T-Mobile breaches originally reported in 2024. The expanded campaign includes carriers in allied nations and smaller regional US carriers. The group maintained persistent access to lawful intercept systems and call detail records, potentially enabling surveillance of targeted individuals' communications. The scope of compromised data is described as the worst telecommunications breach in US history.
- **Who's affected**: US and allied nation telecommunications subscribers whose call records, text messages, and in some cases voice communications were accessible to the threat group. Government officials, intelligence personnel, and political figures were particularly targeted. The compromise of lawful intercept systems is especially concerning as it provides access to court-ordered surveillance capabilities and reveals which individuals are under lawful surveillance.
- **What to do**: Hunt for related indicators, tighten identity controls, and validate incident response playbooks for lateral movement and data theft scenarios.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 1 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Apache (1)

Priority CVEs observed in this window included:
- **CVE-2025-45301** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For November 24 - 30, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
