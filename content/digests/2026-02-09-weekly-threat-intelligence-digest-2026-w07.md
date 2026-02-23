---
title: "Weekly threat intelligence digest — 2026-W07"
date: 2026-02-15T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 6 CVEs. 1 critical, 1 informational."
tags: [policy, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2026-W07 (February 9 – 15, 2026)

## Executive summary

This week's digest covers 2 intelligence items across 2 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching and policy and regulatory developments. Notable this week: Microsoft February 2026 Patch Tuesday Fixes Four Actively Exploited Flaws.

## Critical & high priority

### Microsoft February 2026 Patch Tuesday Fixes Four Actively Exploited Flaws
**Critical** · Vulnerability · 2026-02-10

Microsoft's February 2026 Patch Tuesday addresses over 55 vulnerabilities including four actively exploited zero-days in Windows, Office, and the .NET Framework. (CVE-2026-0301, CVE-2026-0302, CVE-2026-0303, CVE-2026-0304) Affected: Microsoft Windows, Microsoft Office, .NET Framework.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2022-50981
- **What happened**: An unauthenticated remote attacker can gain full access on the affected devices as they are shipped without a password by default and setting one is not enforced.
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2026-24936
- **What happened**: When a specific function is enabled while joining a AD Domain from ADM, an improper input parameters validation vulnerability in a specific CGI program allowing an unauthenticated remote attacker t...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

### CISA Releases Year-in-review Highlighting Record Zero-day Exploitation in 2025
**Informational** · Policy · 2026-02-14

CISA's 2025 cybersecurity year-in-review report documents a record 97 zero-day vulnerabilities exploited in the wild and identifies edge device exploitation and ransomware as the top threats to critical infrastructure.

## Vulnerability landscape

This week tracked 4 unique CVEs: CVE-2026-0301, CVE-2026-0302, CVE-2026-0303, CVE-2026-0304. Severity distribution: 1 critical, 1 informational. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Microsoft Office, Microsoft Windows.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to February 16 – 22, 2026: monitor vendors including Microsoft Windows, Microsoft Office for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.