---
title: "Weekly threat intelligence digest — 2025-W26"
date: 2025-06-29T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 2 CVEs. 1 critical, 1 high."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W26 (June 23 – 29, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: VMware ESXi Vulnerability Enables Hypervisor Escape from Guest VM.

## Critical & high priority

### Vmware Esxi Vulnerability Enables Hypervisor Escape From Guest VM
**Critical** · Vulnerability · 2025-06-24

A critical heap overflow vulnerability in VMware ESXi allows an attacker with local admin privileges on a guest VM to escape the sandbox and execute code on the hypervisor host. (CVE-2025-22230) Affected: VMware ESXi, VMware Workstation, VMware Fusion.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical Vulnerability in ASUS Router Firmware Enables Remote Takeover
**High** · Vulnerability · 2025-06-28

A critical authentication bypass in ASUS router firmware allows unauthenticated attackers to remotely take over affected routers, with botnets already scanning for and exploiting vulnerable devices. (CVE-2025-28703) Affected: ASUS RT-AX series routers, ASUS ROG Rapture series.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 2 unique CVEs: CVE-2025-22230, CVE-2025-28703. Severity distribution: 1 critical, 1 high. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** VMware ESXi, VMware Workstation, ASUS RT-AX series routers, ASUS ROG Rapture series.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to June 30 – July 6, 2025: monitor vendors including VMware ESXi, VMware Workstation for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.