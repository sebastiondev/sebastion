---
title: "Co-op Forced to Shut Down IT Systems After Cyberattack"
date: 2025-05-02T14:20:00+00:00
severity: high
category: malware
status: active
tldr: "UK retailer Co-op shut down parts of its IT infrastructure after detecting unauthorized access, becoming the second major British retailer hit by cyberattack in weeks following Marks & Spencer."
tags: [co-op, dragonforce, retail, uk, ransomware]
cves: []
affected: [Co-op UK retail and food supply operations]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/co-op-shuts-down-it-systems-after-cyberattack/
  - title: "The Record"
    url: https://therecord.media/co-op-cyberattack-systems-shutdown
---

**What happened:** The Co-operative Group (Co-op), a major UK retail and wholesale operator, shut down significant portions of its IT systems after detecting unauthorized access to its network. The attack impacted back-office operations, supply chain systems, and some customer-facing services. The incident followed the Marks & Spencer attack by just days, suggesting a coordinated campaign by the same threat actors targeting UK retail.

**Technical details:** The attackers reportedly leveraged VPN access and social engineering tactics similar to those used in the M&S breach. Co-op's IT team proactively shut down systems to contain the threat after detecting the intrusion, which limited the overall damage but disrupted operations. The DragonForce ransomware group later claimed responsibility, stating they had exfiltrated data from millions of Co-op members. Co-op confirmed that member data including names and contact details was accessed.

**Who is affected:** Co-op's millions of members and customers across its 2,500 food stores. Staff were impacted by operational disruptions, and supply chain partners experienced delivery scheduling issues. Member loyalty data and personal details were compromised.

**What defenders should do:** Retail organizations should conduct urgent reviews of their VPN and remote access security. Implement strict identity verification procedures for administrative access requests. Enhance endpoint detection on point-of-sale and supply chain management systems. Establish communication protocols for coordinating with sector peers during concurrent attacks.

**Broader implications:** The sequential targeting of M&S and Co-op by the same threat operation demonstrates how ransomware groups can execute sector-wide campaigns, hitting multiple organizations in rapid succession. This pattern exploits the fact that sector peers often have similar technology stacks and security gaps, making successful techniques repeatable across targets.
