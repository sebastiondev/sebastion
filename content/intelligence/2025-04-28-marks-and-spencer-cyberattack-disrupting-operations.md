---
title: "Marks and Spencer Hit by Major Cyberattack Disrupting Operations"
date: 2025-04-28T11:40:00+00:00
severity: high
category: malware
status: active
tldr: "UK retail giant Marks & Spencer suffered a significant cyberattack that disrupted contactless payments, click-and-collect services, and online ordering, attributed to the DragonForce ransomware operation working with Scattered Spider affiliates."
tags: [marks_and_spencer, dragonforce, scattered_spider, retail, ransomware]
cves: []
affected: [Marks and Spencer UK operations]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/marks-spencer-cyberattack-linked-to-dragonforce-ransomware/
  - title: "The Record"
    url: https://therecord.media/marks-spencer-cyberattack-disruption
---

**What happened:** Marks & Spencer (M&S), one of the UK's largest retailers, confirmed a significant cyberattack that disrupted multiple operational systems. The attack impacted contactless payment terminals, click-and-collect services, online order fulfillment, and gift card processing across its 1,000+ UK stores. The attack was attributed to the DragonForce ransomware operation, reportedly aided by Scattered Spider threat actors who specialize in social engineering for initial access.

**Technical details:** The initial compromise reportedly involved social engineering attacks against M&S's IT help desk and managed service provider staff, a technique characteristic of Scattered Spider operations. The attackers gained access to the Active Directory environment and deployed VMware ESXi encryptors to target the virtualized server infrastructure. The DragonForce ransomware encrypted critical systems including those supporting payment processing, logistics, and online retail operations. Some customer data may have been stolen prior to encryption.

**Who is affected:** M&S customers across the UK, employees, and the company's operational supply chain. Online shopping was suspended for several days, and in-store payment disruptions affected millions of customers. The company's share price dropped significantly following the disclosure.

**What defenders should do:** Retail organizations should strengthen help desk verification procedures to resist social engineering attacks. Implement MFA on all administrative accounts, particularly those with AD management capabilities. Deploy ESXi-specific security monitoring. Ensure business continuity plans account for ransomware scenarios affecting payment and logistics systems. Test incident response procedures for retail-specific disruption scenarios.

**Broader implications:** The M&S attack is part of a broader wave of DragonForce ransomware incidents targeting major UK retailers in 2025. The collaboration between ransomware operators and specialized initial access groups like Scattered Spider demonstrates the increasing sophistication of the criminal ransomware ecosystem, where different threat actors contribute specialized capabilities to maximize impact.
