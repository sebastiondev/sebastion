---
title: Weekly threat intelligence digest — 2025-W38
date: 2025-09-21T18:00:00.000Z
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
# Weekly threat intelligence digest: September 15 - 21, 2025

## Executive summary
This week tracked 2 curated intelligence items and 1 newly published CVEs. The risk profile remained acute, with 1 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability, campaign and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Cisco Warns of Mass Exploitation of IOS XE Web UI Vulnerability**
- **What happened**: Cisco published an emergency advisory for a critical authentication bypass vulnerability in the IOS XE Web UI feature. Within 48 hours of disclosure, threat intelligence firms observed mass exploitation affecting thousands of internet-facing Cisco devices worldwide. Attackers are deploying Lua implants that provide persistent remote access even after the Web UI vulnerability is patched. The exploitation echoes the devastating CVE-2023-20198 campaign that compromised tens of thousands of Cisco devices in late 2023.
- **Who's affected**: Any organization running Cisco IOS XE-based switches, routers, or wireless controllers with the Web UI HTTP/HTTPS server feature enabled and accessible from the internet. Enterprise networks, ISPs, and managed service providers commonly deploy these devices. Initial scanning shows over 50,000 potentially vulnerable devices exposed to the internet.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Ransomware Attack Disrupts Major US Hospital Network Operations**
- **What happened**: A ransomware attack targeted a major US hospital network operating multiple medical facilities across several states, forcing emergency departments to divert ambulances and clinical staff to revert to paper-based record keeping. The attack encrypted critical clinical and administrative systems, including electronic health records (EHR), imaging systems, and laboratory information systems. The hospital network invoked its operational continuity protocols and the HHS Health Sector Cybersecurity Coordination Center (HC3) issued an alert to the broader healthcare sector.
- **Who's affected**: Patients and staff across the hospital network's facilities in multiple states. Ambulance diversions force patients to be transported to more distant hospitals, potentially affecting patient outcomes for time-sensitive emergencies. Surgical procedures were postponed, outpatient appointments cancelled, and pharmacy operations degraded to manual systems. The data exfiltration potentially exposes PHI for hundreds of thousands of patients.
- **What to do**: Hunt for related indicators, tighten identity controls, and validate incident response playbooks for lateral movement and data theft scenarios.

## Notable developments
Most tracked items this week were critical/high vulnerability stories, with no major medium or informational shifts requiring separate strategic treatment.

## Vulnerability landscape
This week saw 1 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 1
- **High**: 0
- **Medium**: 0
- **Low**: 0
- **Top affected vendors**: Cisco (1)

Priority CVEs observed in this window included:
- **CVE-2025-39105** (Critical): Vendor advisory lists a high-priority issue requiring review.

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For September 22 - 28, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
