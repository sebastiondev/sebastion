---
title: "Volt Typhoon Pre-Positions in US Critical Infrastructure Water Systems"
date: 2025-08-22T08:15:00+00:00
severity: critical
category: campaign
status: active
tldr: "US intelligence agencies released a joint advisory warning that Chinese state-sponsored group Volt Typhoon has expanded pre-positioning operations to water treatment facilities, maintaining persistent access for potential disruptive attacks."
tags: [volt_typhoon, china, critical_infrastructure, water_systems, apt, living_off_the_land]
cves: []
affected: [US water treatment facilities, US critical infrastructure]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/08/22/volt-typhoon-water-systems
  - title: "Mandiant Blog"
    url: https://www.mandiant.com/resources/blog/volt-typhoon-water-infrastructure-2025
---

**What happened:** CISA, NSA, and FBI published a joint advisory revealing that Volt Typhoon, a Chinese state-sponsored threat group, has expanded its pre-positioning campaign into US water treatment and distribution systems. The advisory details tactics, techniques, and procedures used by the group to maintain long-term persistent access to operational technology networks. Intelligence assessments indicate the access is intended for potential disruptive or destructive operations during a future geopolitical crisis rather than immediate espionage or data theft.

**Technical details:** Volt Typhoon continues to rely heavily on living-off-the-land techniques, using built-in operating system tools to avoid detection. The group has been observed exploiting outdated and unpatched network appliances — including end-of-life routers and firewalls — to maintain access to victim networks. In water treatment environments, the group has gained access to SCADA systems and human-machine interfaces (HMIs) controlling treatment processes. The group maintains persistence through scheduled tasks, modified service binaries, and compromised legitimate credentials. Network traffic is tunneled through compromised SOHO routers to blend with legitimate traffic patterns.

**Who is affected:** US water treatment facilities and water distribution systems, particularly small and medium-sized utilities that often lack dedicated cybersecurity staff. The advisory also reinforces ongoing concerns about Volt Typhoon access in energy, transportation, and communications sectors. The pre-positioning posture means no immediate disruption is occurring, but the capability for future disruption is in place.

**What defenders should do:** Water utilities should review the joint advisory's detailed IOCs and TTPs. Audit all network appliances for end-of-life status and known vulnerabilities. Implement network monitoring between IT and OT environments. Review SCADA and HMI access logs for unauthorized access. Replace default credentials on all operational technology systems. Engage with CISA's free services for critical infrastructure cybersecurity assessments. Develop and test manual override procedures for water treatment processes.

**Broader implications:** Volt Typhoon's expansion into water systems represents a strategic evolution in Chinese cyber operations against US critical infrastructure. The pre-positioning strategy — gaining and maintaining access without conducting destructive operations — creates a persistent latent threat that is difficult to detect and politically complex to respond to. The targeting of water systems, which directly affect public health and safety, escalates the potential impact of any future activation of these capabilities.
