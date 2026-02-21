---
title: "CISA Releases Year-in-Review Highlighting Record Zero-Day Exploitation in 2025"
date: 2026-02-14T10:00:00+00:00
severity: informational
category: policy
status: resolved
tldr: "CISA's 2025 cybersecurity year-in-review report documents a record 97 zero-day vulnerabilities exploited in the wild and identifies edge device exploitation and ransomware as the top threats to critical infrastructure."
tags: [cisa, year_in_review, zero-day, statistics, critical_infrastructure, threat_landscape]
cves: []
affected: [All organizations, critical infrastructure operators]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/reports/2025-cybersecurity-year-in-review
  - title: "SecurityWeek"
    url: https://www.securityweek.com/cisa-2025-year-review-record-zero-days/
---

**What happened:** CISA published its comprehensive 2025 cybersecurity year-in-review report, documenting a record 97 zero-day vulnerabilities that were actively exploited in the wild during the year. The report identifies three dominant threat themes: exploitation of network edge devices (VPNs, firewalls, load balancers) as the primary initial access vector; ransomware attacks with increasing operational impact on critical infrastructure; and Chinese state-sponsored pre-positioning in critical infrastructure networks for potential future disruptive operations.

**Technical details:** The 97 zero-day exploitation count represents a 40% increase over the previous record. Network edge device vendors accounted for the largest share of exploited zero-days, with Ivanti, Fortinet, Cisco, Palo Alto, and SonicWall collectively representing 35% of all exploited vulnerabilities. Microsoft products accounted for another 30%, primarily through Windows kernel, Office, and Exchange Server flaws. The report notes that the median time from vulnerability disclosure to first observed exploitation decreased to under 5 days, with some vulnerabilities exploited before vendors could release patches.

**Who is affected:** All organizations that rely on the affected technology products, effectively spanning the entire enterprise market. The report highlights that small and mid-sized organizations face disproportionate risk due to limited patching resources and security staff. Critical infrastructure sectors including healthcare, water, energy, and telecommunications were specifically called out as experiencing increased targeting.

**What defenders should do:** Review the report's prioritized recommendations: reduce attack surface by minimizing internet-exposed services, implement rapid patching processes for edge devices, deploy network detection for exploitation attempts, adopt zero-trust architectures that limit the impact of perimeter device compromise, and participate in CISA's free cybersecurity services for critical infrastructure organizations. Use the report's vulnerability data to validate that all 97 exploited zero-days from 2025 have been patched in your environment.

**Broader implications:** The record zero-day exploitation count challenges the assumption that increased cybersecurity investment is outpacing offensive capabilities. The concentration of exploitation in network edge devices suggests a structural problem: the security of the devices designed to protect networks is itself a major attack vector. CISA's report implicitly supports the growing industry consensus that traditional perimeter-based security is insufficient and that zero-trust, defense-in-depth approaches are essential for modern threat environments.
