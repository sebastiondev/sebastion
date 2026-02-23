---
title: "Weekly threat intelligence digest — 2025-W12"
date: 2025-03-23T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 4 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W12 (March 17 – 23, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Critical Apache Tomcat RCE Vulnerability Under Active Exploitation.

## Critical & high priority

### Critical Apache Tomcat RCE Vulnerability Under Active Exploitation
**Critical** · Vulnerability · 2025-03-18

A critical remote code execution vulnerability in Apache Tomcat allows attackers to upload and execute arbitrary code via partial PUT requests, with active exploitation observed within 30 hours of disclosure. (CVE-2025-24813) Affected: Apache Tomcat 9.0.0-M1 to 9.0.98, 10.1.0-M1 to 10.1.34, 11.0.0-M1 to 11.0.4.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical Next.js Middleware Authorization Bypass Vulnerability
**Critical** · Vulnerability · 2025-03-22

A critical authorization bypass vulnerability in the Next.js framework allows attackers to skip middleware-based security checks by manipulating request headers, potentially affecting millions of web applications. (CVE-2025-29927) Affected: Next.js applications using middleware for authorization.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### 1. **Critical vulnerability CVE-2025-1945**
picklescan before 0.0.23 fails to detect malicious pickle files inside PyTorch model archives when certain ZIP file flag bits are modified. By flipping specific bits in the ZIP file headers, an att...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.

### 2. **Critical vulnerability CVE-2025-1497**
A vulnerability, that could result in Remote Code Execution (RCE), has been found in PlotAI. Lack of validation of LLM-generated output allows attacker to execute arbitrary Python code.
Vendor comm...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2025-24813, CVE-2025-29927. Severity distribution: 2 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Apache Tomcat 9.0.0-M1 to 9.0.98, 10.1.0-M1 to 10.1.34, Next.js applications using middleware for authorization.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to March 24 – 30, 2025: monitor vendors including Apache Tomcat 9.0.0-M1 to 9.0.98, 10.1.0-M1 to 10.1.34 for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.