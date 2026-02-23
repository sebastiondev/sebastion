---
title: "Weekly threat intelligence digest — 2025-W47"
date: 2025-11-23T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 3 CVEs. 2 critical."
tags: [campaign, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W47 (November 17 – 23, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 2 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching and threat actor activity. Notable this week: Chinese Salt Typhoon Telecom Breaches Expand to Additional Carriers.

## Critical & high priority

### Chinese Salt Typhoon Telecom Breaches Expand To Additional Carriers
**Critical** · Campaign · 2025-11-17

US intelligence agencies revealed that the Chinese state-sponsored Salt Typhoon campaign has expanded beyond the initially reported telecom carriers, with evidence of persistent access in additional US and allied nation telecommunications networks. Affected: US telecommunications providers, allied nation telecom networks.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical Apache Struts Vulnerability Enables Remote Code Execution
**Critical** · Vulnerability · 2025-11-22

A critical OGNL injection vulnerability in Apache Struts allows unauthenticated remote code execution, with exploitation observed within days of the advisory publication. (CVE-2025-45301) Affected: Apache Struts 2.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-12925
- **What happened**: A security flaw has been discovered in rymcu forest up to de53ce79db9faa2efc4e79ce1077a302c42a1224. Impacted is the function getAll/addDic/getAllDic/deleteDic of the file src/main/java/com/rymcu/fo...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-12928
- **What happened**: A vulnerability was detected in code-projects Online Job Search Engine 1.0. This affects an unknown function of the file /login.php. Performing manipulation of the argument username/phone results i...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 1 unique CVE: CVE-2025-45301. Severity distribution: 2 critical. The concentration of campaign items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** allied nation telecom networks, Apache Struts 2, US telecommunications providers.
3. **Threat actor tracking** — review campaign items and map TTPs to your detection coverage.
4. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to November 24 – 30, 2025: monitor vendors including US telecommunications providers, allied nation telecom networks for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.