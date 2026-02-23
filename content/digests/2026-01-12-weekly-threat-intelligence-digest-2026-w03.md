---
title: "Weekly threat intelligence digest — 2026-W03"
date: 2026-01-18T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 1 items, 10 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2026-W03 (January 12 – 18, 2026)

## Executive summary

This week's digest covers 1 intelligence items across 1 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Microsoft January 2026 Patch Tuesday Addresses Eight Zero-Day Vulnerabilities.

## Critical & high priority

### Microsoft January 2026 Patch Tuesday Addresses Eight Zero-day Vulnerabilities
**Critical** · Vulnerability · 2026-01-13

The first Patch Tuesday of 2026 addresses a record eight actively exploited zero-day vulnerabilities spanning Hyper-V, Office, Windows kernel, and the Microsoft Access database engine. (CVE-2026-0201, CVE-2026-0202, CVE-2026-0203, CVE-2026-0204, CVE-2026-0205, CVE-2026-0206, CVE-2026-0207, CVE-2026-0208) Affected: Microsoft Windows, Microsoft Office, Microsoft Hyper-V.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### 1. **Critical vulnerability CVE-2025-15457**
A vulnerability was found in bg5sbk MiniCMS up to 1.8. The impacted element is an unknown function of the file /minicms/mc-admin/post.php of the component Trash File Restore Handler. Performing a m...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.

### 2. **Critical vulnerability CVE-2025-15458**
A vulnerability was determined in bg5sbk MiniCMS up to 1.8. This affects an unknown function of the file /mc-admin/post-edit.php of the component Article Handler. Executing a manipulation can lead ...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 8 unique CVEs: CVE-2026-0201, CVE-2026-0202, CVE-2026-0203, CVE-2026-0204, CVE-2026-0205.... Severity distribution: 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Microsoft Office, Microsoft Windows.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to January 19 – 25, 2026: monitor vendors including Microsoft Windows, Microsoft Office for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.