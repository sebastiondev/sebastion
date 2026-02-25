---
title: "Critical Vulnerabilities in InSAT MasterSCADA BUK-TS Enable Remote Code Execution"
date: 2026-02-25T07:02:05+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "InSAT MasterSCADA BUK-TS suffers from critical vulnerabilities (CVE-2026-21410, CVE-2026-22553) enabling SQL injection and OS command injection, potentially allowing remote code execution. This poses significant risks to industrial control systems."
tags: [insat, scada, sql-injection, os-command-injection]
cves: [CVE-2026-21410, CVE-2026-22553]
affected: [InSAT MasterSCADA BUK-TS]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-055-01
---

The InSAT MasterSCADA BUK-TS system is exposed to two critical vulnerabilities, CVE-2026-21410 and CVE-2026-22553, which allow SQL injection and OS command injection. These flaws enable attackers to execute arbitrary commands on the affected systems, leading to potential remote code execution (RCE). Such vulnerabilities are particularly dangerous in industrial control system (ICS) environments, where compromise could lead to operational disruption or physical harm. The exploitation vectors suggest that attackers with moderate technical skill could target these systems, making this a pressing concern for critical infrastructure operators. Immediate action is required by affected organizations to patch the software and implement mitigations. Given the nature of these vulnerabilities, they represent a significant risk to industrial security and underscore the need for robust ICS security practices.