---
title: "Weekly threat intelligence digest — 2025-W13"
date: 2025-03-30T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 5 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W13 (March 24 – 30, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching. Notable this week: IngressNightmare: Critical Kubernetes Ingress-NGINX Vulnerabilities Expose Clusters.

## Critical & high priority

### Ingressnightmare: Critical Kubernetes Ingress-nginx Vulnerabilities Expose Clusters
**Critical** · Vulnerability · 2025-03-25

Four critical vulnerabilities in the Kubernetes ingress-nginx controller, collectively dubbed IngressNightmare, could allow unauthenticated attackers to take over Kubernetes clusters hosting 40% of cloud workloads. (CVE-2025-1097, CVE-2025-1098, CVE-2025-24514, CVE-2025-1974) Affected: Kubernetes clusters using ingress-nginx controller.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Crushftp Authentication Bypass Vulnerability Under Active Exploitation
**Critical** · Vulnerability · 2025-03-28

A critical authentication bypass in CrushFTP allows unauthenticated attackers to access administrative functions through crafted HTTP requests, with exploitation already observed in the wild. (CVE-2025-2825) Affected: CrushFTP versions prior to 10.8.4 and 11.3.1.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 5 unique CVEs: CVE-2025-1097, CVE-2025-1098, CVE-2025-1974, CVE-2025-24514, CVE-2025-2825. Severity distribution: 2 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** Kubernetes clusters using ingress-nginx controller, CrushFTP versions prior to 10.8.4 and 11.3.1.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to March 31 – April 6, 2025: monitor vendors including Kubernetes clusters using ingress-nginx controller for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.