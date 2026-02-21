---
title: "Juniper Routers Targeted by Mirai Botnet Campaign Using Default Credentials"
date: 2025-01-22T12:40:00+00:00
severity: high
category: campaign
status: active
tldr: "A Mirai botnet variant is actively scanning for and compromising Juniper SSR routers that still use factory-default credentials, incorporating them into DDoS infrastructure."
tags: [juniper, mirai, botnet, ddos, default_credentials]
cves: []
affected: [Juniper Session Smart Router (SSR)]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/01/juniper-session-smart-routers.html
  - title: "SecurityWeek"
    url: https://www.securityweek.com/juniper-warns-of-mirai-botnet-targeting-session-smart-routers/
---

**What happened:** Juniper Networks has issued a warning about a Mirai botnet campaign targeting its Session Smart Router (SSR) products. The campaign exploits devices that have not had their factory-default credentials changed, allowing attackers to gain remote access and incorporate the routers into a distributed denial-of-service (DDoS) botnet.

**Technical details:** The attack leverages the well-known Mirai malware framework, specifically scanning for Juniper SSR devices accessible via SSH using default username and password combinations. Once access is gained, the malware installs itself on the device, enrolling it in a botnet capable of launching various types of DDoS attacks. Juniper has observed multiple customer networks affected, with infected devices subsequently used for DDoS activity against other targets.

**Who is affected:** Organizations running Juniper Session Smart Router devices that have not changed default administrative credentials. This includes enterprise, service provider, and small business environments where SSR products have been deployed with minimal security hardening.

**What defenders should do:** Immediately change all default credentials on Juniper SSR devices. Implement SSH key-based authentication instead of password access. Monitor for unusual outbound traffic patterns that could indicate botnet participation. Review network logs for brute-force attempts against SSH services. Consider implementing network-level access controls to restrict management plane access.

**Broader implications:** The continued success of Mirai variants in compromising networking equipment through default credentials highlights a persistent gap in basic security hygiene across deployed infrastructure. This campaign reinforces the need for automated credential management and initial device provisioning security as fundamental deployment practices.
