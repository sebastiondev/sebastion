---
title: "Bybit Cryptocurrency Exchange Suffers Record-Breaking $1.5 Billion Theft"
date: 2025-02-21T16:40:00+00:00
severity: critical
category: campaign
status: active
tldr: "Cryptocurrency exchange Bybit lost approximately $1.5 billion in Ethereum from a cold wallet, in what is believed to be the largest cryptocurrency theft in history, attributed to North Korean state-sponsored hackers."
tags: [bybit, cryptocurrency, lazarus_group, north_korea, ethereum]
cves: []
affected: [Bybit exchange, Ethereum ecosystem]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/02/bybit-1-5-billion-crypto-heist/
  - title: "The Record"
    url: https://therecord.media/bybit-ethereum-theft-1-5-billion
---

**What happened:** Bybit, one of the world's largest cryptocurrency exchanges, disclosed that approximately 401,347 ETH (valued at roughly $1.5 billion at the time) was stolen from one of its cold wallets. The attack occurred during a routine transfer between cold and warm wallets, where the signing interface was manipulated to display the correct address while altering the underlying smart contract logic. Multiple blockchain analysts attributed the attack to North Korea's Lazarus Group.

**Technical details:** The attacker compromised the multi-signature signing process for an Ethereum cold wallet. During a scheduled transfer, the signing interface presented what appeared to be a legitimate transaction, but the underlying contract call was modified to change the wallet's implementation logic, granting the attacker full control. The stolen funds were quickly distributed across multiple wallets and began being laundered through cross-chain bridges and decentralized exchanges. On-chain analysis by ZachXBT and Arkham Intelligence linked the attack patterns to previous Lazarus Group operations.

**Who is affected:** Bybit exchange and its users who held Ethereum on the platform. The broader cryptocurrency ecosystem is impacted by the massive sell pressure and laundering activity. Bybit stated it would cover the losses and that customer assets remained backed 1:1.

**What defenders should do:** Cryptocurrency exchanges should review their cold wallet signing procedures and implement additional verification layers for large transfers. Consider hardware-enforced transaction verification that cannot be manipulated by compromised software interfaces. Monitor blockchain addresses associated with the theft and flag transactions accordingly. Implement time-delayed transfers for large amounts with additional human verification steps.

**Broader implications:** This theft surpasses the $620 million Ronin Network hack as the largest cryptocurrency heist in history. North Korea's continued success in cryptocurrency theft operations, which fund weapons programs, demonstrates the maturation of nation-state cyber capabilities in the financial sector. The attack's sophistication in manipulating multi-signature signing processes raises fundamental questions about the security assumptions of cold wallet infrastructure.
