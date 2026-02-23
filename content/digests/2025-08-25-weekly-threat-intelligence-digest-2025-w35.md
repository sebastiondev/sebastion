---
title: "Weekly threat intelligence digest — 2025-W35"
date: 2025-08-31T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 1 items, 3 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W35 (August 25 – 31, 2025)

## Executive summary

This week's digest covers 1 intelligence items across 1 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Critical GitLab Vulnerability Allows Account Takeover via Password Reset.

## Critical & high priority

### Critical Gitlab Vulnerability Allows Account Takeover via Password Reset
**Critical** · Vulnerability · 2025-08-28

A critical vulnerability in GitLab CE/EE allows attackers to hijack any account by manipulating the password reset flow, with exploitation already observed targeting internet-facing instances. (CVE-2025-39821) Affected: GitLab Community Edition, GitLab Enterprise Edition.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-27909
- **What happened**: IBM Concert Software 1.0.0 through 1.1.0 uses cross-origin resource sharing (CORS) which could allow an attacker to carry out privileged actions as the domain name is not being limited to only trus...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-55293
- **What happened**: Meshtastic is an open source mesh networking solution. Prior to v2.6.3, an attacker can send NodeInfo with a empty publicKey first, then overwrite it with a new key. First sending a empty key bypas...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 1 unique CVE: CVE-2025-39821. Severity distribution: 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** GitLab Enterprise Edition, GitLab Community Edition.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to September 1 – 7, 2025: monitor vendors including GitLab Community Edition, GitLab Enterprise Edition for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.