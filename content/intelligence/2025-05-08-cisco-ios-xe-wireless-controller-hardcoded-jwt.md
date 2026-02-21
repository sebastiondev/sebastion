---
title: "Threat Actors Exploit Cisco IOS XE Wireless Controllers via Hard-Coded JWT"
date: 2025-05-08T08:47:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A maximum-severity vulnerability in Cisco IOS XE for Wireless LAN Controllers allows unauthenticated attackers to upload arbitrary files and execute commands via a hard-coded JSON Web Token."
tags: [cisco, ios_xe, wireless, hardcoded_credentials, jwt]
cves: [CVE-2025-20188]
affected: [Cisco IOS XE Wireless LAN Controllers, Cisco Catalyst 9800 Series]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/cisco-patches-critical-ios-xe-vulnerability-cvss-10/
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/05/08/cisco-ios-xe-wireless-vulnerability
---

**What happened:** Cisco disclosed a maximum-severity vulnerability (CVSS 10.0) in IOS XE for Wireless LAN Controllers affecting the Out-of-Band AP Image Download feature. The flaw stems from a hard-coded JSON Web Token present in the software, which unauthenticated attackers can use to upload arbitrary files, perform path traversal attacks, and execute commands with root privileges. Cisco released patches and confirmed the feature must be enabled for the device to be vulnerable.

**Technical details:** CVE-2025-20188 exists because a static JWT secret is embedded in the Cisco IOS XE software for the Out-of-Band AP Image Download feature. An attacker can craft a valid JWT using this hard-coded secret to authenticate to the HTTPS-based AP image download interface. Once authenticated, the attacker can upload arbitrary files to the device, including to system directories, enabling root-level command execution. The vulnerability only affects devices with the Out-of-Band AP Image Download feature enabled, which is not the default configuration.

**Who is affected:** Organizations running Cisco Catalyst 9800 Series Wireless Controllers, Catalyst 9800 Embedded Wireless Controllers, and Embedded Wireless Controllers on Catalyst APs, provided the Out-of-Band AP Image Download feature is enabled. Large enterprises, universities, and service providers commonly deploy these controllers for campus and branch wireless infrastructure.

**What defenders should do:** Apply Cisco patches immediately. If patching is not feasible, disable the Out-of-Band AP Image Download feature as a workaround. Audit whether the feature was enabled and check for indicators of compromise, including unexpected file uploads or configuration changes. Segment wireless controller management interfaces away from general network access.

**Broader implications:** Hard-coded credentials in network infrastructure remain a persistent and dangerous class of vulnerability. While the feature is not enabled by default, organizations that have activated it for out-of-band provisioning are fully exposed to unauthenticated root access. This highlights the need for ongoing review of feature-specific security even on well-known vendor platforms.
