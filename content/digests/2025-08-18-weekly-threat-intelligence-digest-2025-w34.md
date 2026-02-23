---
title: "Weekly threat intelligence digest — 2025-W34"
date: 2025-08-24T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 2 CVEs. 1 critical, 1 high."
tags: [campaign, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W34 (August 18 – 24, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 2 categories, with 2 critical or high severity items requiring immediate attention. Key themes include threat actor activity and supply chain risks. Notable this week: Volt Typhoon Pre-Positions in US Critical Infrastructure Water Systems.

## Critical & high priority

### Volt Typhoon Pre-positions in US Critical Infrastructure Water Systems
**Critical** · Campaign · 2025-08-22

US intelligence agencies released a joint advisory warning that Chinese state-sponsored group Volt Typhoon has expanded pre-positioning operations to water treatment facilities, maintaining persistent access for potential disruptive attacks. Affected: US water treatment facilities, US critical infrastructure.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Npm Supply Chain Attack Compromises Popular Event-stream Successor Package
**High** · Supply Chain · 2025-08-18

A supply chain attack targeting a widely-used npm package injected cryptocurrency-stealing malware, affecting over 12 million weekly downloads before detection. Affected: npm ecosystem, Node.js developers.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-8854
- **What happened**: Stack-based buffer overflow in LoadOFF in bulletphysics bullet3 before 3.26 on all platforms allows remote attackers to execute arbitrary code via a crafted OFF file with an overlong initial token ...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-8660
- **What happened**: Privilege escalation occurs when a user gets access to more resources or functionality than they are normally allowed.
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

No CVE identifiers were linked to this week's items. Severity distribution: 1 critical, 1 high. The concentration of campaign items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Audit third-party dependencies** — supply chain items this week indicate active targeting of software supply chains.
3. **Threat actor tracking** — review campaign items and map TTPs to your detection coverage.
4. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to August 25 – 31, 2025: monitor vendors including US water treatment facilities, US critical infrastructure for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.