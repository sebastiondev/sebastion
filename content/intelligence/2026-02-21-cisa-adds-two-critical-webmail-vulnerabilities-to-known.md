---
title: "CISA Adds Two Critical Webmail Vulnerabilities to Known Exploited Catalog"
date: 2026-02-21T00:21:44+00:00
severity: critical
category: vulnerability
status: active
tldr: "CISA has identified two critical vulnerabilities in RoundCube Webmail, both actively exploited. These include a deserialization flaw and an XSS vulnerability, posing significant risks to federal systems."
tags: [webmail, serialization, cross-site scripting]
cves: [CVE-2025-49113, CVE-2025-68461]
affected: [RoundCube Webmail]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2026/02/20/cisa-adds-two-known-exploited-vulnerabilities-catalog
---

CISA has added two critical vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog, underscoring their active exploitation in the wild. The first vulnerability, CVE-2025-49113, is a deserialization of untrusted data issue in RoundCube Webmail, which could allow attackers to execute arbitrary code, leading to full system compromise. The second, CVE-2025-68461, is a cross-site scripting (XSS) vulnerability that could enable session hijacking or data theft.

Both vulnerabilities are critical due to their potential for widespread impact and ease of exploitation. RoundCube Webmail users are strongly advised to patch these issues immediately, as delay could expose systems to nation-state actors or other malicious groups. CISA's inclusion under BOD 22-01 emphasizes the urgency for federal agencies to address these vulnerabilities promptly.

The broader implication is that webmail platforms remain a prime target for attackers, highlighting the need for continuous monitoring and patching of open-source software. While RoundCube users are directly affected, other webmail systems should also be evaluated for similar vulnerabilities.