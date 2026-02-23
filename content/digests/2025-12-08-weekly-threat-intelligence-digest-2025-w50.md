---
title: "Weekly threat intelligence digest — 2025-W50"
date: 2025-12-14T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 1 items, 4 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W50 (December 8 – 14, 2025)

## Executive summary

This week's digest covers 1 intelligence items across 1 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Microsoft December 2025 Patch Tuesday Fixes Critical LDAP and Windows Kernel Flaws.

## Critical & high priority

### Microsoft December 2025 Patch Tuesday Fixes Critical LDAP and Windows Kernel Flaws
**Critical** · Vulnerability · 2025-12-09

The final Patch Tuesday of 2025 addresses over 70 vulnerabilities including a critical Windows LDAP remote code execution flaw and an actively exploited Windows kernel zero-day. (CVE-2025-48201, CVE-2025-48202) Affected: Microsoft Windows, Windows Server, Active Directory.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### 1. **Critical vulnerability CVE-2025-13797**
A vulnerability was detected in ADSLR B-QE2W401 250814-r037c. Affected by this issue is the function parameterdel_swifimac of the file /send_order.cgi. Performing manipulation of the argument del_s...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.

### 2. **Critical vulnerability CVE-2025-13798**
A flaw has been found in ADSLR NBR1005GPEV2 250814-r037c. This affects the function ap_macfilter_add of the file /send_order.cgi. Executing manipulation of the argument mac can lead to command inje...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2025-48201, CVE-2025-48202. Severity distribution: 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Windows Server, Microsoft Windows.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to December 15 – 21, 2025: monitor vendors including Microsoft Windows, Windows Server for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.