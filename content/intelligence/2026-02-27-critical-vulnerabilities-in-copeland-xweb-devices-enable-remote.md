---
title: "Critical Vulnerabilities in Copeland XWEB Devices Enable Remote Code Execution"
date: 2026-02-27T07:08:01+00:00
severity: critical
category: vulnerability
status: active
tldr: "Multiple critical vulnerabilities in Copeland XWEB and XWEB Pro devices allow attackers to bypass authentication, cause denial-of-service, memory corruption, and execute arbitrary code, posing significant risks to affected systems."
tags: [copeland, xweb, ics]
cves: [CVE-2026-25085, CVE-2026-21718, CVE-2026-24663, CVE-2026-21389, CVE-2026-25111, CVE-2026-20742, CVE-2026-24517, CVE-2026-25195, CVE-2026-20910, CVE-2026-24689, CVE-2026-25109, CVE-2026-20902, CVE-2026-24695, CVE-2026-25105, CVE-2026-24452, CVE-2026-23702, CVE-2026-25721, CVE-2026-20764, CVE-2026-25196, CVE-2026-25037, CVE-2026-22877, CVE-2026-20797, CVE-2026-3037]
affected: [Copeland XWEB 300D PRO <=1.12.1, Copeland XWEB 500D PRO <=1.12.1]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-10
---

The Copeland XWEB and XWEB Pro devices are affected by multiple critical vulnerabilities, including authentication bypass, denial-of-service (DoS), memory corruption, and arbitrary code execution. These issues pose significant risks to industrial control systems (ICS) where these devices are deployed. The vulnerabilities could allow attackers to take full control of the affected systems, leading to potential disruptions or damages in critical infrastructure.

The vulnerabilities affect both XWEB 300D PRO and XWEB 500D PRO models up to version 1.12.1. Given the nature of these flaws, they could be exploited remotely, making them particularly dangerous for any organization relying on these devices. The presence of multiple CVEs indicates a wide attack surface, increasing the likelihood of exploitation.

Defenders should prioritize updating affected devices to patched versions as soon as possible. Additionally, network segmentation and monitoring for suspicious activities are crucial steps to mitigate risks. Given the critical nature of these vulnerabilities, immediate action is essential to prevent potential attacks on critical infrastructure.