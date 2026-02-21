---
title: "Chinese Salt Typhoon Telecom Breaches Expand to Additional Carriers"
date: 2025-11-17T09:20:00+00:00
severity: critical
category: campaign
status: active
tldr: "US intelligence agencies revealed that the Chinese state-sponsored Salt Typhoon campaign has expanded beyond the initially reported telecom carriers, with evidence of persistent access in additional US and allied nation telecommunications networks."
tags: [salt_typhoon, china, telecommunications, espionage, lawful_intercept, wiretapping]
cves: []
affected: [US telecommunications providers, allied nation telecom networks]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/11/17/salt-typhoon-expanded-telecom-compromise
  - title: "The Record"
    url: https://therecord.media/salt-typhoon-additional-telecom-carriers-compromised
---

**What happened:** US intelligence agencies disclosed that the Chinese state-sponsored group Salt Typhoon (also tracked as GhostEmperor) has compromised additional telecommunications carriers beyond the AT&T, Verizon, and T-Mobile breaches originally reported in 2024. The expanded campaign includes carriers in allied nations and smaller regional US carriers. The group maintained persistent access to lawful intercept systems and call detail records, potentially enabling surveillance of targeted individuals' communications. The scope of compromised data is described as the worst telecommunications breach in US history.

**Technical details:** Salt Typhoon exploited a combination of edge device vulnerabilities in telecom network equipment and compromised legitimate administrator credentials to maintain long-term persistent access. The group specifically targeted systems used for lawful intercept (wiretapping) compliance, signaling infrastructure, and call detail record databases. Their persistence mechanisms included modified firmware on network equipment, compromised VPN appliances, and custom implants designed to mimic legitimate telecom network management traffic. The group demonstrated deep understanding of telecommunications network architecture and protocols.

**Who is affected:** US and allied nation telecommunications subscribers whose call records, text messages, and in some cases voice communications were accessible to the threat group. Government officials, intelligence personnel, and political figures were particularly targeted. The compromise of lawful intercept systems is especially concerning as it provides access to court-ordered surveillance capabilities and reveals which individuals are under lawful surveillance.

**What defenders should do:** Telecommunications operators should implement the CISA Enhanced Visibility and Hardening Guidance for Communications Infrastructure. Deploy out-of-band monitoring for network management systems. Implement hardware-rooted firmware verification for network equipment. Segment lawful intercept systems with enhanced access controls and monitoring. Use end-to-end encrypted communications for sensitive discussions, as telecom-level interception cannot decrypt properly implemented E2E encryption.

**Broader implications:** The Salt Typhoon campaign represents a strategic intelligence failure at the national level, demonstrating that critical communication infrastructure was compromised for an extended period. The targeting of lawful intercept systems is particularly alarming, as it provides both intelligence collection capability and insight into US law enforcement activities. The incident has accelerated bipartisan Congressional interest in telecommunications security regulation and is reshaping the relationship between government agencies and telecom carriers regarding cybersecurity investment and accountability.
