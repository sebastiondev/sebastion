---
title: "What kind of hacker burns ninety million dollars"
date: 2025-06-20T10:00:00+00:00
draft: false
tags:
  - security
  - cyber-warfare
  - hacktivism
  - cryptocurrency
categories:
  - Security
  - Threat Intelligence
description: "A pro-Israel hacking group stole more than $90 million from Iran's largest crypto exchange - then destroyed it. The funds were sent to wallets nobody controls."
author: Lewis
coverImage: /images/predatory-sparrow-iran-financial-cyberwar/article-chainalysis-reactor-graph.png
keyFindings:
  - "Predatory Sparrow destroyed over $90 million in cryptocurrency stolen from Iran's Nobitex exchange by sending it to computationally infeasible vanity addresses on 18 June 2025."
  - "The Nobitex attack followed a strike on Bank Sepah one day earlier that took the state-owned bank's online services and ATMs offline across Iran."
  - "Blockchain analysis by Elliptic and Chainalysis confirmed Nobitex's on-chain links to IRGC-affiliated ransomware operators and Hamas-affiliated networks."
  - "Nobitex processed over $11 billion in total inflows - more than the next ten largest Iranian exchanges combined - making it central to Iran's sanctions evasion strategy."
  - "Iran's Central Bank responded by ordering all domestic crypto exchanges to restrict operations to daytime hours and increase cold storage safeguards."
artifacts:
  - type: reference
    url: https://www.wired.com/story/israels-predatory-sparrow-hackers-are-waging-cyberwar-on-irans-financial-system/
    description: "Wired - Israel-tied Predatory Sparrow hackers wage cyberwar on Iran's financial system"
  - type: reference
    url: https://cyberscoop.com/iran-nobitex-cyberattack-predatory-sparrow/
    description: "CyberScoop - Iran's financial sector takes another hit as largest crypto exchange is targeted"
  - type: reference
    url: https://cyberscoop.com/iran-bank-sepah-cyberattack/
    description: "CyberScoop - Iran's Bank Sepah disrupted by cyberattack"
  - type: reference
    url: https://www.elliptic.co/blog/iranian-crypto-exchange-nobitex-hacked-pro-israel-group
    description: "Elliptic - Iranian crypto exchange Nobitex hacked for over $90 million"
  - type: reference
    url: https://www.chainalysis.com/blog/nobitex-iranian-exchange-exploit-june-2025/
    description: "Chainalysis - Nobitex sanctions and the $90 million exploit"
  - type: reference
    url: https://www.securityweek.com/predatory-sparrow-burns-90-million-on-iranian-crypto-exchange-in-cyber-shadow-war/
    description: "SecurityWeek - Predatory Sparrow burns $90 million on Iranian crypto exchange in cyber shadow war"
  - type: reference
    url: https://arxiv.org/abs/2509.05104
    description: "Derbyshire et al. 2025 - From protest to power plant: interpreting the role of escalatory hacktivism in cyber conflict"
---

On 18 June 2025, someone stole more than $90 million in cryptocurrency from Nobitex, Iran's largest crypto exchange. Bitcoin, Ether, Dogecoin, Solana, Ripple - eight different coins in total, siphoned in a single operation. Then they burned it all.

Not metaphorically. The hackers transferred the funds to a series of blockchain addresses containing variations of the phrase "FuckIRGCterrorists" - vanity addresses generated through brute-force computation. According to Elliptic, the co-founder of which confirmed the analysis, creating addresses with text strings that long is computationally infeasible. Nobody holds the private keys. The money is gone.

"The hackers clearly have political rather than financial motivations," said Tom Robinson, Elliptic's co-founder. "The crypto they stole has effectively been burned."

It was the second attack on Iran's financial system in two days.

## Two strikes in forty-eight hours

The group behind both operations calls itself Predatory Sparrow - or Gonjeshke Darande in Farsi, a deliberate attempt to appear as a home-grown Iranian movement rather than what it almost certainly is: an arm of Israeli intelligence. The group has never confirmed its affiliation. Security researchers and intelligence analysts have drawn their own conclusions based on capability, targeting patterns and timing.

On 17 June, Predatory Sparrow announced it had attacked Bank Sepah, a state-owned Iranian bank with close ties to the Islamic Revolutionary Guard Corps. The group claimed to have destroyed the bank's data. Bank Sepah's website went offline. According to CyberScoop, Iran-focused media reported that branches closed, customers could not access accounts and payment processing went down. Iran's Fars News Agency confirmed the infrastructure was impacted.

![Nobitex crypto fund flow to vanity addresses](/images/predatory-sparrow-iran-financial-cyberwar/article-elliptic-nobitex-hack-flow.png)

The following day came the Nobitex strike. The exchange's website went dark. Predatory Sparrow threatened to leak its source code and internal network architecture by the next morning. Nobitex issued a public statement assuring users their funds were safe - but blockchain analysis told a different story.

## Following the money to nowhere

Chainalysis and Elliptic both published detailed analyses within hours. The picture they painted was unambiguous.

Nobitex's total inflows exceeded $11 billion - more than the next ten largest Iranian exchanges combined. It claimed over 7 million users. And its on-chain footprint stretched into territory that no legitimate exchange wants associated with its name.

Elliptic's blockchain tracing identified crypto addresses linked to two OFAC-sanctioned IRGC operatives - Ahmad Khatibi Aghada and Amir Hossein Niakeen Ravari - sending bitcoin directly to Nobitex accounts. Both individuals were sanctioned by the US Treasury in September 2022 for distributing BitLocker ransomware and targeting critical infrastructure. Chainalysis went further, mapping Nobitex transactions to wallets affiliated with Hamas, the Palestinian Islamic Jihad, Yemen's Houthi rebels and sanctioned Russian exchanges Garantex and Bitpapa.

This was not a random target.

"Nobitex is key to [Iran's] strategy" of using cryptocurrency to evade sanctions, Robinson told CyberScoop. Open-source investigations had previously identified relatives of Supreme Leader Ali Khamenei and IRGC-linked business partners connected to the exchange.

Iran's Central Bank responded by ordering every domestic crypto platform to restrict operating hours to between 10 AM and 8 PM, increase cold-storage safeguards and report large transfers in real time. The government publicly blamed foreign "sabotage cells" without naming Israel. The Tehran Stock Exchange website also went offline.

## The group that set a steel mill on fire

Predatory Sparrow's track record reads like a capabilities demonstration. The group first surfaced targeting Iran's railways with data-wiping malware. It then twice disabled payment systems at thousands of Iranian gas stations, triggering nationwide fuel shortages and splashing Ayatollah Khamenei's image across disabled pump displays.

In 2022, it carried out what may be the most physically destructive cyberattack ever documented. By hijacking industrial control systems at the Khouzestan steel mill, Predatory Sparrow caused a massive vat of molten steel to spill onto the factory floor. The resulting fire nearly killed workers. The group posted its own video of the attack to YouTube.

"This actor is very serious and very capable, and that's what separates them from many of the operations that we'll probably see in the coming weeks or months," said John Hultquist, chief analyst at Google's Threat Intelligence Group. "A lot of actors are going to make threats. This is one that can follow through on those threats."

![Chainalysis reactor graph showing Nobitex connections to illicit actors](/images/predatory-sparrow-iran-financial-cyberwar/article-chainalysis-reactor-graph.png)

The timing is not incidental. Israel had initiated a massive aerial bombing campaign targeting Iran's military systems and leadership on 13 June. Tehran responded with direct missile strikes on Tel Aviv two days later. Predatory Sparrow's financial attacks landed squarely within this window of escalation.

## When hacktivism stops being hacktivism

A September 2025 paper by Derbyshire, Selck-Paulsson, van der Walt and Burton examined exactly this phenomenon. "From Protest to Power Plant" - published through Orange Cyberdefense and the University of Waikato - argued that since 2022, hacktivist groups have escalated from DDoS attacks and document leaks to targeting operational technology in critical national infrastructure. By 2024, the researchers noted, attacks on OT had been linked to partisan hacktivist efforts in active geopolitical conflicts. The escalation, they argued, "raises critical questions about the classification of these groups and the appropriate state response."

The paper introduced a framework for interpreting hacktivists based on three dimensions: the impact of their actions, alignment to state ideology and the degree of host state involvement. Predatory Sparrow fits awkwardly into every category. Its operations exceed what any hacktivist collective should be able to pull off. Its targeting mirrors Israeli strategic objectives. And its operational security suggests state-level resources.

The question is whether the hacktivist label is cover, convenience or something in between. States have long found utility in plausible deniability. Hultquist noted to CyberScoop that groups like Volt Typhoon do "long-term probing on networks, prepositioning themselves to strike critical infrastructure at a time of military conflict." Predatory Sparrow's approach is louder, more theatrical - but the strategic logic is the same.

## What burning money tells us

The [Coinbase breach](/posts/coinbase-insider-breach-bribery) reported a month earlier demonstrated that crypto's intersection with traditional finance creates attack surfaces no one governs well. The Nobitex destruction demonstrates something different: that cryptocurrency infrastructure has become a legitimate target in interstate conflict, and that "burning" rather than stealing is itself a weapon.

Chainalysis confirmed this was "the first hack of this scale exclusively for geopolitical purposes." The destruction was the point. Not enrichment, not ransom pressure, not criminal enterprise. Just $90 million in digital assets sent to addresses no human will ever control, because the act of making them vanish carried more strategic value than keeping them.

## The cost of capability

The Nobitex attack required capabilities that most threat actors do not possess. Breaking into a major cryptocurrency exchange, exfiltrating assets across eight different blockchain networks simultaneously and executing the transfers before incident response teams could freeze wallets demands a level of technical preparation that measures in months, not days. The vanity address generation alone - creating computationally plausible addresses that embed readable text strings - required significant resources devoted to producing cryptographic output that served no operational purpose beyond messaging.

This is what separates state-backed operations from criminal enterprise. A financially motivated attacker would have laundered the funds through mixers and decentralised exchanges, converting them quietly over weeks. Predatory Sparrow spent computational resources making the money permanently inaccessible because the destruction itself was the deliverable. The audience was not Nobitex. It was Tehran.

Iran will rebuild its exchange infrastructure. The sanctions evasion networks mapped by Elliptic and Chainalysis exist because Iran needs them, and that need has not changed. But the Nobitex attack established something: that a sufficiently capable and motivated actor can impose real financial costs without deploying a single soldier or missile. The question now is who else is watching and learning.
