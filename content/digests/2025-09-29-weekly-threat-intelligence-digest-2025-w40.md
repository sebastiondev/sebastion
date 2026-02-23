---
title: "Weekly threat intelligence digest — 2025-W40"
date: 2025-10-05T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 1 items, 4 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W40 (September 29 – October 5, 2025)

## Executive summary

This week's digest covers 1 intelligence items across 1 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Critical Palo Alto Networks Expedition Vulnerability Enables Config and Credential Theft.

## Critical & high priority

### Critical Palo Alto Networks Expedition Vulnerability Enables Config and Credential Theft
**Critical** · Vulnerability · 2025-10-03

Multiple critical vulnerabilities in Palo Alto Networks Expedition migration tool allow unauthenticated attackers to access firewall configuration files, credentials, and API keys stored in the tool's database. (CVE-2025-41220, CVE-2025-41221) Affected: Palo Alto Networks Expedition.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-10779
- **What happened**: A vulnerability was found in D-Link DCS-935L up to 1.13.01. The impacted element is the function sub_402280 of the file /HNAP1/. The manipulation of the argument HNAP_AUTH/SOAPAction results in sta...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-10781
- **What happened**: A vulnerability was identified in Campcodes Online Learning Management System 1.0. This impacts an unknown function of the file /admin/edit_class.php. Such manipulation of the argument class_name l...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2025-41220, CVE-2025-41221. Severity distribution: 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Palo Alto Networks Expedition.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to October 6 – 12, 2025: monitor vendors including Palo Alto Networks Expedition for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.