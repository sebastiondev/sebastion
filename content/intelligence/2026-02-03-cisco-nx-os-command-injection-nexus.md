---
title: "Critical Cisco NX-OS Vulnerability Enables Remote Command Injection"
date: 2026-02-03T09:15:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical command injection vulnerability in Cisco NX-OS allows unauthenticated attackers to execute arbitrary commands on Nexus data center switches, threatening core network infrastructure."
tags: [cisco, nx_os, nexus, command_injection, data_center, switches]
cves: [CVE-2026-0215]
affected: [Cisco Nexus 3000, Nexus 5000, Nexus 7000, Nexus 9000 series]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/cisco-nx-os-command-injection-nexus-switches/
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2026/02/03/cisco-nx-os-vulnerability
---

**What happened:** Cisco disclosed a critical command injection vulnerability in NX-OS software affecting multiple Nexus series data center switches. The flaw allows an unauthenticated remote attacker to inject and execute arbitrary commands on the underlying operating system through the NX-API management interface. CISA added the vulnerability to the KEV catalog after threat intelligence firms reported exploitation attempts targeting large enterprise and cloud provider data centers running Cisco Nexus infrastructure.

**Technical details:** CVE-2026-0215 is a command injection vulnerability in the NX-API HTTP/HTTPS management interface of Cisco NX-OS. The flaw exists due to insufficient input validation of user-supplied data in NX-API requests. An attacker can send crafted HTTP requests containing shell metacharacters that are passed to the underlying Linux shell, enabling arbitrary command execution as root. The NX-API feature, while not enabled by default, is commonly activated in data center environments for automation and orchestration integration. Exploitation provides complete control of the switch.

**Who is affected:** Data centers and cloud providers running Cisco Nexus switches with NX-API enabled for network automation. The Nexus platform is widely deployed in modern data centers for leaf-spine and core switching. Compromise of data center switches can enable traffic interception, network segmentation bypass, and lateral movement across the entire data center fabric.

**What defenders should do:** Apply Cisco patches immediately. Disable NX-API if not actively required. If NX-API must remain enabled, restrict access to trusted management networks and implement authentication. Monitor NX-API access logs for unauthorized requests. Verify switch configurations have not been modified by comparing against infrastructure-as-code baselines. Implement out-of-band management networks for all data center switching infrastructure.

**Broader implications:** Data center switching infrastructure is an increasingly targeted attack surface as organizations concentrate workloads in centralized facilities. Compromise of Nexus switches can undermine the network segmentation and microsegmentation strategies that many organizations rely on for security. The vulnerability highlights the risk of exposing management APIs on network infrastructure, even on isolated management networks that may not be as well-protected as assumed.
