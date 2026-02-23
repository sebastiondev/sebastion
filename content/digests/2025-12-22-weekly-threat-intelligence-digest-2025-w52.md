---
title: "Weekly threat intelligence digest — 2025-W52"
date: 2025-12-28T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 1 items, 3 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W52 (December 22 – 28, 2025)

## Executive summary

This week's digest covers 1 intelligence items across 1 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Log4Shell Successor: Critical RCE in Apache Commons Text Exploitation Surges.

## Critical & high priority

### Log4shell Successor: Critical RCE in Apache Commons Text Exploitation Surges
**Critical** · Vulnerability · 2025-12-28

A critical vulnerability in Apache Commons Text string interpolation is being mass-exploited at year's end, with attackers deploying cryptominers and ransomware through the widely-embedded Java library. (CVE-2025-49301) Affected: Apache Commons Text, Java applications.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### 1. **Critical vulnerability CVE-2025-67906**
In MISP before 2.5.28, app/View/Elements/Workflows/executionPath.ctp allows XSS in the workflow execution path.
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.

### 2. **Critical vulnerability CVE-2025-14704**
A vulnerability was found in Shiguangwu sgwbox N3 2.0.25. The impacted element is an unknown function of the file /eshell of the component API. The manipulation results in path traversal. It is pos...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 1 unique CVE: CVE-2025-49301. Severity distribution: 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Java applications, Apache Commons Text.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to December 29 – January 4, 2026: monitor vendors including Apache Commons Text, Java applications for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.