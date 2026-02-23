---
title: "Weekly threat intelligence digest — 2026-W02"
date: 2026-01-11T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 4 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2026-W02 (January 5 – 11, 2026)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Fortinet FortiGate Firewalls Compromised via New Authentication Bypass Zero-Day.

## Critical & high priority

### Fortinet Fortigate Firewalls Compromised via New Authentication Bypass Zero-day
**Critical** · Vulnerability · 2026-01-06

A new critical authentication bypass in Fortinet FortiOS allows unauthenticated attackers to gain super-admin privileges on FortiGate firewalls, with mass exploitation already underway targeting internet-exposed management interfaces. (CVE-2026-0101) Affected: Fortinet FortiOS, FortiGate firewalls.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical Vulnerability in Sonicwall Sonicos Allows Unauthenticated Access
**Critical** · Vulnerability · 2026-01-09

A critical improper authentication vulnerability in SonicWall SonicOS SSLVPN allows unauthenticated attackers to hijack active VPN sessions, with exploitation observed against government and enterprise targets. (CVE-2026-0150) Affected: SonicWall Gen 6, Gen 7 firewalls.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-15165
- **What happened**: A vulnerability has been found in itsourcecode Online Cake Ordering System 1.0. The impacted element is an unknown function of the file /updatecustomer.php?action=edit. The manipulation of the argu...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-15166
- **What happened**: A vulnerability was found in itsourcecode Online Cake Ordering System 1.0. This affects an unknown function of the file /updatesupplier.php?action=edit. The manipulation of the argument ID results ...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2026-0101, CVE-2026-0150. Severity distribution: 2 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Gen 7 firewalls, FortiGate firewalls, SonicWall Gen 6, Fortinet FortiOS.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to January 12 – 18, 2026: monitor vendors including Fortinet FortiOS, FortiGate firewalls for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.