---
title: "Weekly threat intelligence digest — 2026-W06"
date: 2026-02-08T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 4 CVEs. 1 critical, 1 high."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2026-W06 (February 2 – 8, 2026)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Critical Cisco NX-OS Vulnerability Enables Remote Command Injection.

## Critical & high priority

### Critical Cisco NX-OS Vulnerability Enables Remote Command Injection
**Critical** · Vulnerability · 2026-02-03

A critical command injection vulnerability in Cisco NX-OS allows unauthenticated attackers to execute arbitrary commands on Nexus data center switches, threatening core network infrastructure. (CVE-2026-0215) Affected: Cisco Nexus 3000, Nexus 5000, Nexus 7000.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical Postgresql Vulnerability Enables Authenticated RCE Through SQL Functions
**High** · Vulnerability · 2026-02-06

A critical vulnerability in PostgreSQL allows authenticated users with CREATE FUNCTION privileges to escape the SQL sandbox and execute arbitrary operating system commands on the database server. (CVE-2026-0190) Affected: PostgreSQL 14, 15, 16.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2026-1412
- **What happened**: A vulnerability has been found in Sangfor Operation and Maintenance Security Management System up to 3.0.12. The impacted element is an unknown function of the file /fort/audit/get_clip_img of the ...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2026-1413
- **What happened**: A vulnerability was found in Sangfor Operation and Maintenance Security Management System up to 3.0.12. This affects the function portValidate of the file /fort/ip_and_port/port_validate of the com...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2026-0190, CVE-2026-0215. Severity distribution: 1 critical, 1 high. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** 15, Nexus 5000, PostgreSQL 14, Cisco Nexus 3000.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to February 9 – 15, 2026: monitor vendors including Cisco Nexus 3000, Nexus 5000 for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.