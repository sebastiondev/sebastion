---
title: "Critical Vulnerabilities in Jinan USR IOT Technology's USR-W610"
date: 2026-02-21T00:24:51+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Jinan USR IOT Technology's USR-W610 device has multiple critical vulnerabilities that could allow attackers to steal credentials, disable authentication, or cause denial-of-service. Affected versions include USR-W610 <=3.1.1.0."
tags: [iot, pusr, authentication, denial-of-service]
cves: [CVE-2026-25715, CVE-2026-24455, CVE-2026-26049, CVE-2026-26048]
affected: [Jinan USR IOT Technology Limited (PUSR) USR-W610]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-03
---

The Jinan USR IOT Technology's USR-W610 device has been found to have multiple critical vulnerabilities, including CVE-2026-25715, CVE-2026-24455, CVE-2026-26049, and CVE-2026-26048. These vulnerabilities could allow an attacker to steal valid user credentials, including administrator credentials, disable authentication entirely, or cause a denial-of-service condition. This is particularly concerning as it affects versions of the device up to 3.1.1.0.

The high CVSS score (9.8) for one of these vulnerabilities underscores its severity and potential impact on IoT infrastructure. Attackers could exploit these flaws to gain unauthorized access to critical systems, disrupt operations, or gather sensitive information. Given the nature of IoT devices, which are often deployed in industrial and enterprise environments, this vulnerability poses a significant risk to operational security.

Defenders should immediately update their USR-W610 devices to a patched version if available, implement strong authentication measures, and monitor for any signs of unauthorized access or system disruption. Given the critical nature of these vulnerabilities, organizations using this device should treat this as a high-priority issue and take action without delay.

The broader implication of this advisory highlights the growing need for robust security practices in IoT device manufacturing and deployment. Such vulnerabilities not only threaten individual systems but can have cascading effects on larger networks and critical infrastructure. Organizations relying on these devices must stay vigilant and proactive in addressing such issues to mitigate risks.