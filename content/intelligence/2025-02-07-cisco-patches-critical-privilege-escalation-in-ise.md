---
title: "Cisco Patches Critical Privilege Escalation Vulnerabilities in ISE"
date: 2025-02-07T13:15:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Cisco has released patches for multiple critical vulnerabilities in Identity Services Engine that could allow authenticated attackers to execute arbitrary commands as root."
tags: [cisco, ise, privilege_escalation, authentication]
cves: [CVE-2025-20124, CVE-2025-20125]
affected: [Cisco Identity Services Engine (ISE)]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/cisco-ise-vulnerabilities-allow-root-level-command-execution/
---

**What happened:** Cisco released security advisories for two critical vulnerabilities in its Identity Services Engine (ISE), a widely deployed network access control and identity management platform. The vulnerabilities allow authenticated attackers with read-only admin privileges to escalate to root-level command execution and bypass authorization controls.

**Technical details:** CVE-2025-20124 (CVSS 9.9) is an insecure Java deserialization vulnerability in a REST API endpoint. An authenticated attacker can send crafted serialized Java objects to execute arbitrary commands as root. CVE-2025-20125 (CVSS 9.1) is an authorization bypass vulnerability in a different API that allows an attacker with read-only privileges to obtain sensitive information, change node configurations, and restart the ISE node. Both flaws affect ISE versions 3.1, 3.2, and 3.3.

**Who is affected:** Organizations running Cisco ISE for network access control, 802.1X authentication, guest access management, or BYOD policy enforcement. Given ISE's role as a central authentication and authorization platform, compromise could provide attackers with deep insight into network topology and user credentials.

**What defenders should do:** Update Cisco ISE to patched versions immediately: 3.1P10, 3.2P7, or 3.3P4. There are no workarounds available. Review ISE admin accounts for any unauthorized access or configuration changes. Monitor API access logs for suspicious activity, particularly unusual deserialization patterns or read-only accounts accessing write endpoints.

**Broader implications:** Vulnerabilities in identity and access management platforms are particularly dangerous because they manage the trust boundaries of the entire network. Compromising ISE could give an attacker the ability to authorize their own devices, modify access policies, and move laterally across network segments with full authentication coverage.
