---
title: "Juniper Networks Patches Critical RCE in Junos OS Affecting Enterprise Routers"
date: 2026-01-27T10:15:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Juniper Networks released emergency patches for a critical out-of-bounds write vulnerability in Junos OS that enables unauthenticated remote code execution on MX and SRX series devices."
tags: [juniper, junos_os, rce, routers, network_infrastructure, out_of_bounds_write]
cves: [CVE-2026-0180]
affected: [Juniper MX Series, Juniper SRX Series]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2026/01/27/juniper-junos-os-vulnerability
  - title: "The Hacker News"
    url: https://thehackernews.com/2026/01/juniper-junos-os-critical-rce.html
---

**What happened:** Juniper Networks published emergency security patches for a critical out-of-bounds write vulnerability in Junos OS affecting MX Series routers and SRX Series firewalls. The vulnerability allows an unauthenticated attacker to send specially crafted packets that trigger memory corruption in the packet forwarding engine, leading to remote code execution with root privileges. CISA added the vulnerability to its Known Exploited Vulnerabilities catalog after confirmation of exploitation attempts targeting internet service provider backbone routers.

**Technical details:** CVE-2026-0180 is an out-of-bounds write in the Junos OS packet forwarding engine (PFE) triggered by processing malformed protocol packets. The vulnerability exists in the handling of specific routing protocol extensions, where insufficient bounds checking allows an attacker to write beyond an allocated buffer. Exploitation can result in code execution in the PFE process context, which operates with root privileges on the routing engine. Successful exploitation could allow an attacker to take complete control of the router, modify routing tables, intercept traffic, or pivot deeper into service provider networks.

**Who is affected:** Internet service providers, large enterprises, and data center operators running Juniper MX Series routers for backbone and peering connections, and SRX Series for network security. The MX Series is widely deployed as core and edge routers by major ISPs globally. Compromise of backbone routing infrastructure could enable large-scale traffic interception or routing manipulation.

**What defenders should do:** Apply Juniper patches immediately, prioritizing internet-facing router interfaces. Implement protocol-level access control lists to restrict which peers can send the affected protocol messages. Monitor routing behavior for unexpected route changes, prefix hijacking, or traffic black-holing that could indicate router compromise. Verify router configuration integrity by comparing running configurations against known-good baselines. Deploy out-of-band management for router access to maintain control even if the data plane is compromised.

**Broader implications:** Vulnerabilities in service provider routing infrastructure represent some of the most impactful flaws in the internet ecosystem, as core routers control the flow of traffic for millions of users and organizations. The compromise of ISP backbone routers could enable mass traffic interception at a scale that few other attack vectors can achieve. Network infrastructure vendors must prioritize memory-safe programming practices in packet processing code, as these components handle untrusted input at extremely high rates and cannot tolerate memory safety vulnerabilities.
