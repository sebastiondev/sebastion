---
title: Weekly threat intelligence digest — 2025-W01
date: 2025-01-05T18:00:00.000Z
author: sebastion
description: >-
  Weekly security intelligence digest covering 7 items, 0 CVEs. 0 critical, 0
  high, 0 medium, 0 low.
tags:
  - threat-intelligence
  - weekly-digest
  - vulnerability
  - campaign
series: Weekly Digest
---
# Weekly threat intelligence digest: December 30 - January 5, 2024

## Executive summary
This week tracked 7 curated intelligence items and 0 newly published CVEs. The risk profile remained elevated, with 0 critical and 0 high severity disclosures in public reporting. Priority themes were vulnerability, malware|campaign, campaign, tool and active exploitation pressure around internet-exposed enterprise software.

## Critical & high priority
### 1. **Nuclei Vulnerability Allows Bypass of Signature Verification for Malicious Templates**
- **What happened**: A vulnerability in Nuclei, an open-source vulnerability scanner, allowed attackers to bypass signature verification and execute malicious code via templates on local systems.
- **Who's affected**: Nuclei
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 2. **Massive Outage of Nessus Agents Due to Buggy Plugin Updates**
- **What happened**: Tenable's buggy differential plugin updates caused global outages of Nessus vulnerability scanner agents, requiring manual upgrades for revival.
- **Who's affected**: Nessus Vulnerability Scanner
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 3. **State-Sponsored Chinese Actors Compromise U.S. Treasury Office**
- **What happened**: Chinese state-backed hackers breached the Office of Foreign Assets Control (OFAC), potentially gaining access to sensitive sanctions-related data.
- **Who's affected**: U.S. Treasury Department's Office of Foreign Assets Control
- **What to do**: Hunt for related indicators, tighten identity controls, and validate incident response playbooks for lateral movement and data theft scenarios.

### 4. **Brain Cipher Ransomware Gang Exploits RIBridges Social Services Platform**
- **What happened**: The Brain Cipher ransomware gang gained unauthorized access to Rhode Island's RIBridges social services platform, exfiltrated sensitive data, and encrypted files. They have now started leaking this data as part of their extortion tactics.
- **Who's affected**: Rhode Island residents who have interacted with RIBridges services are at risk of having their personal data exposed, including social security numbers, addresses, and other sensitive information.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

### 5. **DoubleClickjacking: A Novel Exploit Bypassing Existing Clickjacking Protections**
- **What happened**: Attackers have discovered a new technique called DoubleClickjacking that exploits the double-click feature of mouse inputs to bypass existing clickjacking protections. This allows them to trick users into authorizing sensitive actions without their knowledge.
- **Who's affected**: All users interacting with web applications through their browsers are potentially at risk. Websites and applications that rely heavily on user interactions, such as banking or financial services, are particularly vulnerable.
- **What to do**: Patch or mitigate affected systems on an expedited timeline, validate exposure from external attack paths, and add targeted detections for known exploitation behavior.

## Notable developments
### 1. **Google Chrome's Text Fragment Feature Enhances PDF Sharing Capabilities**
- Google is introducing the Text Fragment feature in Chrome's PDF reader, allowing users to share specific parts of long PDFs more easily. This could potentially lead to improved collaboration but may also introduce new attack vectors if not properly secured.

### 2. **Massive Mail Server Encryption Gap Exposes Users to Network Sniffing Attacks**
- Over three million mail servers are exposed without TLS encryption, allowing potential sniffing attacks and data interception.

## Vulnerability landscape
This week saw 0 newly published CVEs in NVD-aligned tracking for the reporting window.
- **Critical**: 0
- **High**: 0
- **Medium**: 0
- **Low**: 0

## Recommended actions
1. **Prioritize internet-facing patching**: Resolve critical and high-severity items first, with strict SLA enforcement for edge systems.
2. **Harden identity and admin pathways**: Require phishing-resistant MFA, reduce standing privileges, and audit privileged sessions.
3. **Operationalize detections**: Convert this week's CVEs and campaign behaviors into SIEM/SOAR detections and threat hunts.
4. **Protect recovery paths**: Isolate and test backups, then validate restoration workflows against ransomware and destructive attack scenarios.

## Looking ahead
For January 6 - 12, 2025, expect continued exploitation attempts against newly disclosed enterprise software flaws, plus copycat scanning after proof-of-concept publication. Teams should maintain elevated monitoring for externally exposed assets and review compensating controls where patch windows are delayed.
