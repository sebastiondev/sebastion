---
title: "Weekly threat intelligence digest — 2025-W24"
date: 2025-06-15T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 5 CVEs. 1 critical, 1 high."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W24 (June 9 – 15, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: MOVEit Transfer Vulnerability Exploited Again by Cl0p Ransomware.

## Critical & high priority

### Moveit Transfer Vulnerability Exploited Again By Cl0p Ransomware
**Critical** · Vulnerability · 2025-06-15

A new critical SQL injection vulnerability in MOVEit Transfer is being exploited by the Cl0p ransomware group, echoing the devastating 2023 campaign that compromised thousands of organizations worldwide. (CVE-2025-34362) Affected: Progress MOVEit Transfer.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Microsoft June 2025 Patch Tuesday Fixes Actively Exploited Kernel Vulnerability
**High** · Vulnerability · 2025-06-10

Microsoft's June Patch Tuesday addresses over 50 vulnerabilities including a Windows kernel privilege escalation flaw being exploited in the wild by advanced threat actors. (CVE-2025-29824, CVE-2025-33053) Affected: Microsoft Windows, Microsoft Office.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-5430
- **What happened**: A vulnerability, which was classified as critical, has been found in AssamLook CMS 1.0. This issue affects some unknown processing of the file /product.php. The manipulation of the argument ID lead...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-5432
- **What happened**: A vulnerability has been found in AssamLook CMS 1.0 and classified as critical. Affected by this vulnerability is an unknown functionality of the file /view_tender.php. The manipulation of the argu...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 3 unique CVEs: CVE-2025-29824, CVE-2025-33053, CVE-2025-34362. Severity distribution: 1 critical, 1 high. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Progress MOVEit Transfer, Microsoft Office, Microsoft Windows.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to June 16 – 22, 2025: monitor vendors including Progress MOVEit Transfer for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.