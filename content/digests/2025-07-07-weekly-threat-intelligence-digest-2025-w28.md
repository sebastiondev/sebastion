---
title: "Weekly threat intelligence digest — 2025-W28"
date: 2025-07-13T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 1 items, 4 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W28 (July 7 – 13, 2025)

## Executive summary

This week's digest covers 1 intelligence items across 1 categories, with 1 critical or high severity item requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: Microsoft July 2025 Patch Tuesday Addresses Critical Hyper-V Escape.

## Critical & high priority

### Microsoft July 2025 Patch Tuesday Addresses Critical Hyper-v Escape
**Critical** · Vulnerability · 2025-07-08

Microsoft's July Patch Tuesday fixes over 60 vulnerabilities including a critical Hyper-V guest-to-host escape being exploited by nation-state actors for cloud infrastructure attacks. (CVE-2025-33654, CVE-2025-33671) Affected: Microsoft Windows, Microsoft Hyper-V, Azure.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-0634
- **What happened**: Use After Free vulnerability in Samsung Open Source rLottie allows Remote Code Inclusion.This issue affects rLottie: V0.2.
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-53075
- **What happened**: Improper Input Validation vulnerability in Samsung Open Source rLottie allows Path Traversal.This issue affects rLottie: V0.2.
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2025-33654, CVE-2025-33671. Severity distribution: 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Microsoft Hyper-V, Microsoft Windows.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to July 14 – 20, 2025: monitor vendors including Microsoft Windows, Microsoft Hyper-V for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.