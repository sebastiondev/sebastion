---
title: Weekly threat intelligence digest — 2025-W40
date: 2025-10-05T18:00:00.000Z
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
# Weekly threat intelligence digest: September 29 - October 5, 2025

## Executive summary
This week tracked 1 curated intelligence items and 2 newly published CVEs. The risk profile remained acute, with 2 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Critical Palo Alto Networks Expedition Vulnerability Enables Config and Credential Theft**
- **What happened**: Palo Alto Networks issued a critical security advisory for multiple vulnerabilities in Expedition, the company's migration and configuration tool. The most severe flaw allows unauthenticated access to the Expedition database, which typically contains firewall configurations, administrator credentials, API keys, and other sensitive data imported during migration projects. CISA confirmed active exploitation and urged organizations to check whether their Expedition instances contain sensitive data that may have been compromised.
- **Who's affected**: Organizations that have used or are currently using Palo Alto Networks Expedition for firewall migration, configuration analysis, or policy optimization. Since Expedition is used to import and process configurations from multiple firewall vendors, the compromised data may include credentials and configurations for non-Palo Alto devices as well. The tool is commonly used by managed security service providers serving multiple clients.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 2 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 2
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Palo (2)

Priority CVEs observed in this window included:
- **CVE-2025-41220** (Critical): Vendor advisory lists a high-priority issue requiring review.
- **CVE-2025-41221** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For October 6 - 12, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
