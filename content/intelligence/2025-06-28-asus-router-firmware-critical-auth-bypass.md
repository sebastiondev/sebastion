---
title: "Critical Vulnerability in ASUS Router Firmware Enables Remote Takeover"
date: 2025-06-28T15:20:00+00:00
severity: high
category: vulnerability
status: active
tldr: "A critical authentication bypass in ASUS router firmware allows unauthenticated attackers to remotely take over affected routers, with botnets already scanning for and exploiting vulnerable devices."
tags: [asus, router, firmware, authentication_bypass, botnet, iot]
cves: [CVE-2025-28703]
affected: [ASUS RT-AX series routers, ASUS ROG Rapture series]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/06/asus-router-vulnerability-remote-takeover.html
  - title: "SecurityWeek"
    url: https://www.securityweek.com/asus-router-firmware-critical-auth-bypass/
---

**What happened:** ASUS issued firmware updates for multiple router models to patch a critical authentication bypass vulnerability that allows remote attackers to gain administrative access without credentials. Security researchers confirmed that multiple botnets, including variants of Mirai and Gafgyt, are actively scanning for and exploiting vulnerable ASUS routers to conscript them into DDoS botnets. The vulnerability affects several popular consumer and prosumer router models in the RT-AX and ROG Rapture series.

**Technical details:** CVE-2025-28703 is an authentication bypass in the ASUS router web administration interface caused by improper session validation. An attacker can craft HTTP requests that bypass the authentication check, granting full administrative access to the router management panel. From there, the attacker can modify DNS settings, enable remote management, upload malicious firmware, or configure the router as a proxy for further attacks. The vulnerability is exploitable from the WAN side if remote management is enabled, and always exploitable from the LAN side.

**Who is affected:** Owners of affected ASUS router models, which include several popular Wi-Fi 6 and Wi-Fi 6E models sold in consumer and small business markets. Router compromise can expose all devices on the connected network to DNS hijacking, traffic interception, and man-in-the-middle attacks. Small businesses using consumer-grade ASUS routers are particularly vulnerable as they often lack separate security monitoring.

**What defenders should do:** Update ASUS router firmware to the latest version through the router's web interface or the ASUS Router mobile app. Disable remote management (WAN access to the admin panel) if not required. Change the default admin password. Enable automatic firmware updates where supported. Consider implementing DNS over HTTPS on endpoint devices to mitigate DNS hijacking even if the router is compromised.

**Broader implications:** Consumer and SOHO router vulnerabilities continue to present a significant challenge, as many users never update router firmware and manufacturers eventually discontinue support for older models. The rapid weaponization of this vulnerability by botnets demonstrates how quickly router flaws are incorporated into automated exploitation toolkits. This contributes to the growing problem of IoT botnets capable of generating massive DDoS attacks.
