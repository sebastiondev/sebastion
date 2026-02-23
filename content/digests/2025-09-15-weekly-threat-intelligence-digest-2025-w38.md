---
title: "Weekly threat intelligence digest — 2025-W38"
date: 2025-09-21T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 3 CVEs. 1 critical, 1 high."
tags: [campaign, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W38 (September 15 – 21, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 2 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching and threat actor activity. Notable this week: Cisco Warns of Mass Exploitation of IOS XE Web UI Vulnerability.

## Critical & high priority

### Cisco Warns of Mass Exploitation of IOS XE Web UI Vulnerability
**Critical** · Vulnerability · 2025-09-15

Cisco disclosed a critical authentication bypass in IOS XE Web UI affecting thousands of enterprise network devices, with mass exploitation and web shell deployment observed within 48 hours of disclosure. (CVE-2025-39105) Affected: Cisco IOS XE devices with Web UI enabled.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Ransomware Attack Disrupts Major US Hospital Network Operations
**High** · Campaign · 2025-09-20

A ransomware attack forced a major US hospital network to divert ambulances and revert to paper records across multiple facilities, the largest healthcare disruption since the Change Healthcare incident. Affected: US hospital network, healthcare patients.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-10076
- **What happened**: A weakness has been identified in SourceCodester Online Polling System 1.0. This affects an unknown function of the file /manage-profile.php. This manipulation of the argument email causes sql inje...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-10077
- **What happened**: A security vulnerability has been detected in SourceCodester Online Polling System 1.0. This impacts an unknown function of the file /registeracc.php. Such manipulation of the argument email leads ...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 1 unique CVE: CVE-2025-39105. Severity distribution: 1 critical, 1 high. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** healthcare patients, US hospital network, Cisco IOS XE devices with Web UI enabled.
3. **Threat actor tracking** — review campaign items and map TTPs to your detection coverage.
4. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to September 22 – 28, 2025: monitor vendors including Cisco IOS XE devices with Web UI enabled for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.