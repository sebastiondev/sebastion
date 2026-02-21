---
title: "FBI and CISA Issue Joint Advisory on Medusa Ransomware Threat"
date: 2025-03-13T08:50:00+00:00
severity: high
category: malware
status: active
tldr: "FBI, CISA, and MS-ISAC warn that the Medusa ransomware-as-a-service operation has impacted over 300 organizations across critical infrastructure sectors since 2021."
tags: [medusa, ransomware, raas, critical_infrastructure, phishing]
cves: []
affected: [Healthcare, education, legal, insurance, technology, manufacturing sectors]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-071a
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/fbi-cisa-warn-of-medusa-ransomware-attacks-on-critical-infrastructure/
---

**What happened:** The FBI, CISA, and MS-ISAC released a joint cybersecurity advisory warning organizations about the Medusa ransomware, a ransomware-as-a-service (RaaS) variant that has impacted over 300 known victims since its emergence in June 2021. The advisory details the group's tactics, techniques, and procedures, and urges organizations in critical infrastructure sectors to implement recommended mitigations.

**Technical details:** Medusa actors typically gain initial access through phishing emails and exploitation of unpatched internet-facing vulnerabilities. They employ legitimate tools like Advanced IP Scanner, SoftPerfect Network Scanner, and PsExec for discovery and lateral movement. The group uses double extortion tactics, operating a data leak site where victims' data is published if ransom demands are not met. Ransom demands have ranged from $100,000 to $15 million. Recently, the group has been observed recruiting initial access brokers (IABs) on dark web forums, offering payments of $100 to $1 million for access to target networks.

**Who is affected:** Organizations across healthcare, education, legal, insurance, technology, and manufacturing sectors, primarily in the United States. The advisory notes that Medusa affiliates specifically target organizations with high-value data and limited cybersecurity resources.

**What defenders should do:** Implement phishing-resistant multi-factor authentication on all services. Maintain offline backups with regular testing of recovery procedures. Apply security patches within documented risk-informed timelines. Segment networks to restrict lateral movement. Audit accounts with administrative privileges and enforce least-privilege access controls.

**Broader implications:** The Medusa advisory reinforces the continued growth of the RaaS ecosystem, where the use of initial access brokers creates an increasingly efficient and specialized criminal supply chain. The broad range of targeted sectors and growing victim count demonstrates that no industry vertical is exempt from ransomware risk.
