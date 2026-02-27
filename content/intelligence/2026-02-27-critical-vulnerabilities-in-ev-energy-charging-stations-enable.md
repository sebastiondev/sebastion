---
title: "Critical Vulnerabilities in EV Energy Charging Stations Enable Unauthorized Control"
date: 2026-02-27T07:09:17+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Multiple critical vulnerabilities in EV Energy's ev.energy charging stations could allow attackers to gain administrative control or disrupt services, posing significant risks to electric vehicle infrastructure."
tags: [ev-energy, charging-stations, iot]
cves: [CVE-2026-27772, CVE-2026-24445, CVE-2026-26290, CVE-2026-25774]
affected: [EV Energy ev.energy]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-07
---

The vulnerabilities identified in EV Energy's ev.energy charging stations represent a critical risk to the growing ecosystem of electric vehicle infrastructure. These flaws, including missing authentication mechanisms (CVE-2026-24445), allow attackers to potentially take full control of affected devices or disrupt their operation through denial-of-service attacks. With CVSS scores as high as 9.4, these issues highlight a significant security gap in IoT-enabled energy systems.

The impact extends beyond individual users, as compromised charging stations could lead to cascading disruptions in public transportation and commercial EV operations. Attackers could exploit these flaws to target specific locations or create widespread outages, potentially undermining the reliability of electric vehicle adoption.

Defenders should prioritize updating affected firmware and implementing network segmentation for IoT devices. Given the critical nature of these vulnerabilities, operators must also monitor for signs of exploitation and consider proactive measures like micro-cut isolation for high-risk assets. The broader implication is a call to action for manufacturers to adopt more rigorous security practices in their IoT product development cycles.