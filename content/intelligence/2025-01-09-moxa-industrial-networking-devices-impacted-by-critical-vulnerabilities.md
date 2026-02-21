---
title: "Moxa Industrial Networking Devices Impacted by Critical Vulnerabilities"
date: 2025-01-09T11:22:00+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Multiple critical vulnerabilities in Moxa industrial networking devices could allow attackers to gain root access to OT and ICS infrastructure."
tags: [moxa, ics, ot_security, industrial_control_systems]
cves: [CVE-2024-9138, CVE-2024-9140]
affected: [Moxa EDS-508A, Moxa EDR-810, Moxa NAT-102, Moxa OnCell series]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/moxa-warns-of-critical-vulnerabilities-in-industrial-networking-devices/
---

**What happened:** Moxa issued urgent security advisories for critical vulnerabilities affecting multiple industrial networking devices. The flaws include a hard-coded credentials vulnerability (CVE-2024-9138) and an OS command injection vulnerability (CVE-2024-9140) that could allow attackers to escalate privileges or execute arbitrary commands on affected devices.

**Technical details:** CVE-2024-9138 (CVSS 8.6) involves hard-coded credentials that allow an authenticated user to escalate privileges to root. CVE-2024-9140 (CVSS 9.8) is an OS command injection flaw that enables remote attackers to execute arbitrary commands without authentication by exploiting improperly restricted input. Both vulnerabilities affect firmware versions across multiple Moxa product lines.

**Who is affected:** Organizations using Moxa industrial networking equipment in OT/ICS environments, including energy, transportation, manufacturing, and critical infrastructure sectors. The affected devices are commonly deployed in industrial Ethernet switches, routers, and cellular gateways.

**What defenders should do:** Apply firmware updates provided by Moxa immediately. If patching is not immediately possible, restrict network access to affected devices using firewall rules and network segmentation. Ensure that management interfaces are not exposed to the internet. Review network logs for suspicious activity targeting these devices.

**Broader implications:** Vulnerabilities in industrial networking equipment continue to pose significant risks to critical infrastructure. The combination of hard-coded credentials and command injection flaws in OT devices highlights the ongoing challenges of securing legacy industrial environments where patching cycles are typically longer than in enterprise IT.
