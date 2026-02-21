---
title: "Zyxel CPE Devices Under Active Attack via Command Injection Flaws"
date: 2025-02-04T08:30:00+00:00
severity: high
category: vulnerability
status: active
tldr: "Threat actors are actively exploiting command injection vulnerabilities in Zyxel CPE series devices, with no patches available from the vendor for affected end-of-life products."
tags: [zyxel, cpe, command_injection, botnet, end_of_life]
cves: [CVE-2024-40891]
affected: [Zyxel CPE Series devices]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/zyxel-cpe-devices-under-active-attack-no-patch-available/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/02/zyxel-cpe-devices-face-active.html
---

**What happened:** Threat actors are actively exploiting a command injection vulnerability in Zyxel CPE series networking devices. The most concerning aspect is that Zyxel has classified many of the affected models as end-of-life and has no plans to release patches, leaving thousands of deployed devices permanently vulnerable.

**Technical details:** CVE-2024-40891 is an authenticated command injection vulnerability in the management interface of Zyxel CPE devices. Attackers have been observed combining this with default credential exploitation to achieve unauthenticated remote code execution. Compromised devices are being recruited into botnets for DDoS attacks and used as proxy infrastructure for further attacks.

**Who is affected:** Organizations and individuals using Zyxel CPE series devices, particularly older models that have reached end-of-life status. ISPs and small businesses that deployed these devices as customer premises equipment are particularly at risk.

**What defenders should do:** Identify all Zyxel CPE devices in the network inventory. For EOL devices with no available patches, plan immediate replacement with supported alternatives. If replacement is not immediately possible, restrict management interface access to trusted networks only, change all default credentials, and monitor for unusual outbound traffic patterns.

**Broader implications:** The refusal to patch end-of-life devices with actively exploited vulnerabilities highlights a significant gap in the IoT and networking equipment lifecycle. This pattern of vendor abandonment leaves critical infrastructure exposed and reinforces the need for procurement policies that include long-term security support commitments from vendors.
