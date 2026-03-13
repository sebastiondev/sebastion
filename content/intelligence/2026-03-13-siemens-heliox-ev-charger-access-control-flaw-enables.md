---
title: "Siemens Heliox EV Charger Access Control Flaw Enables Unauthorized Service Access"
date: 2026-03-13T07:01:16+00:00
severity: medium
category: vulnerability
status: active
tldr: "Improper access control vulnerabilities in Siemens Heliox EV charging stations allow attackers to reach unauthorized services via the charging cable interface. Siemens has released patched versions."
tags: [siemens, ev-charging, iot, access-control, ot-security, cisa]
cves: []
affected: [Siemens Heliox Flex 180 kW EV Charging Station, Siemens Heliox Mobile DC 40 kW EV Charging Station]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-071-05
---

Siemens has released a critical security advisory addressing improper access control vulnerabilities in two Heliox EV charging station models. The vulnerability permits attackers to bypass authentication mechanisms and access unauthorized services through the charging cable interface, which serves as both a power delivery and data communication conduit in EV charging infrastructure.

The attack vector is noteworthy because it leverages the physical charging cable connection itself—the interface that legitimate users interact with daily. This suggests the vulnerability may relate to inadequate validation of requests arriving over the DC charging protocol (likely CCS or CHAdeMO implementations), allowing privilege escalation or lateral movement to administrative functions without proper authentication. The CVSS v3 score of 2.6 indicates low severity in scoring metrics, but this likely reflects restriction to local/adjacent network access or specific prerequisites; the operational context of grid-connected critical infrastructure warrants higher practical concern.

The affected products represent a range of deployment scenarios: the 180 kW stationary Flex model serves highway and fleet charging networks, while the 40 kW Mobile variant targets portable/temporary installations. Both are sold into European and international markets where Siemens maintains significant EV charging market presence. A compromised charger could enable data exfiltration from transactions, injection of malicious firmware, or denial of service affecting transportation electrification infrastructure.

Organizations operating these chargers should prioritize immediate patching to vendor-supplied versions, validate cable/connector physical integrity, and implement network segmentation isolating charger management interfaces from general network traffic. Monitor charging logs for unexplained service access attempts. The vulnerability underscores broader EV charging ecosystem risks as these devices move from isolated installations toward connected IoT infrastructure supporting grid integration and vehicle-to-grid (V2G) operations.

This advisory demonstrates the expanding attack surface in transportation electrification infrastructure—a domain previously considered lower-risk but increasingly targeted as smart grid integration advances. Organizations planning EV charger deployments should adopt defense-in-depth approaches including secure-by-design architecture, regular penetration testing, and firmware verification procedures.