---
title: Weekly threat intelligence digest — 2025-W49
date: 2025-12-07T18:00:00.000Z
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
# Weekly threat intelligence digest: December 1 - 7, 2025

## Executive summary
This week tracked 1 curated intelligence items and 1 newly published CVEs. The risk profile remained acute, with 1 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Critical Ivanti Connect Secure Zero-Day Exploited in Mass Attacks**
- **What happened**: CISA issued an emergency directive in response to mass exploitation of a critical zero-day vulnerability in Ivanti Connect Secure VPN appliances. The vulnerability enables unauthenticated remote code execution through the appliance's web-based service. Multiple threat actors, including both nation-state groups and financially motivated attackers, are exploiting the flaw to deploy custom malware families. CISA's directive requires federal civilian agencies to disconnect Ivanti Connect Secure appliances from networks within 48 hours unless mitigations are verified.
- **Who's affected**: Organizations using Ivanti Connect Secure for remote access VPN, including federal agencies, defense contractors, healthcare organizations, and enterprises globally. The mass exploitation nature means any internet-facing Ivanti Connect Secure instance is at risk. The compromised appliance sits at the network perimeter and provides access to internal networks, making it an ideal pivot point.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 1 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Ivanti (2)

Priority CVEs observed in this window included:
- **CVE-2025-47801** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For December 8 - 14, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
