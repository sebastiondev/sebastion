---
title: "Weekly threat intelligence digest — 2025-W16"
date: 2025-04-20T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 1 CVEs. 1 critical, 1 medium."
tags: [campaign, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W16 (April 14 – 20, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 2 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching and threat actor activity. Notable this week: Erlang/OTP SSH Server Vulnerability Scores Perfect CVSS 10.0.

## Critical & high priority

### Erlang/otp SSH Server Vulnerability Scores Perfect CVSS 10.0
**Critical** · Vulnerability · 2025-04-17

A critical vulnerability in the Erlang/OTP SSH library allows unauthenticated remote code execution with a perfect CVSS 10.0 score, affecting any application using the built-in SSH server. (CVE-2025-32433) Affected: Erlang/OTP SSH server implementations, CouchDB, RabbitMQ.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

## Notable developments

### 4chan Breached and Taken Offline After Source Code and Data Leak
**Medium** · Campaign · 2025-04-15

The imageboard 4chan was breached and taken offline after attackers exploited an outdated PHP installation, leaking source code, moderator information, and internal tools.

## Vulnerability landscape

This week tracked 1 unique CVE: CVE-2025-32433. Severity distribution: 1 critical, 1 medium. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Erlang/OTP SSH server implementations, CouchDB.
3. **Threat actor tracking** — review campaign items and map TTPs to your detection coverage.
4. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to April 21 – 27, 2025: monitor vendors including Erlang/OTP SSH server implementations, CouchDB for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.