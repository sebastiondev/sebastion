---
title: "Weekly threat intelligence digest — 2025-W20"
date: 2025-05-18T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 9 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W20 (May 12 – 18, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Microsoft May 2025 Patch Tuesday Fixes Five Actively Exploited Zero-Days.

## Critical & high priority

### Microsoft May 2025 Patch Tuesday Fixes Five Actively Exploited Zero-days
**Critical** · Vulnerability · 2025-05-14

Microsoft's May 2025 Patch Tuesday addresses over 70 vulnerabilities including five zero-days under active exploitation across Windows kernel, scripting engine, and DWM components. (CVE-2025-30397, CVE-2025-30400, CVE-2025-32701, CVE-2025-32706, CVE-2025-32709) Affected: Windows 10, Windows 11, Windows Server 2016-2025.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Ivanti EPMM Vulnerabilities Chained for Unauthenticated Remote Code Execution
**Critical** · Vulnerability · 2025-05-15

Two vulnerabilities in Ivanti Endpoint Manager Mobile can be chained to achieve unauthenticated remote code execution, with active exploitation targeting government and critical infrastructure organizations. (CVE-2025-4427, CVE-2025-4428) Affected: Ivanti Endpoint Manager Mobile (EPMM).

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### 1. **Critical vulnerability CVE-2025-4254**
A vulnerability was found in PCMan FTP Server 2.0.7. It has been rated as critical. Affected by this issue is some unknown functionality of the component LIST Command Handler. The manipulation lead...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.

### 2. **Critical vulnerability CVE-2025-4255**
A vulnerability classified as critical has been found in PCMan FTP Server 2.0.7. This affects an unknown part of the component RMD Command Handler. The manipulation leads to buffer overflow. It is ...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 7 unique CVEs: CVE-2025-30397, CVE-2025-30400, CVE-2025-32701, CVE-2025-32706, CVE-2025-32709.... Severity distribution: 2 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Windows 11, Ivanti Endpoint Manager Mobile (EPMM), Windows 10.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to May 19 – 25, 2025: monitor vendors including Windows 10, Windows 11 for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.