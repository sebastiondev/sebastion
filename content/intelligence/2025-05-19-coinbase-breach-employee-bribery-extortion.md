---
title: "Coinbase Discloses Breach After Employees Bribed to Steal Customer Data"
date: 2025-05-19T14:22:00+00:00
severity: high
category: campaign
status: active
tldr: "Coinbase revealed that threat actors bribed overseas customer support contractors to exfiltrate personal data of roughly 1% of monthly transacting users, then demanded a $20 million ransom."
tags: [coinbase, social_engineering, insider_threat, cryptocurrency, data_breach]
cves: []
affected: [Coinbase, Coinbase customers]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/05/coinbase-employee-bribery-data-breach/
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/coinbase-data-breach-extortion-employee-bribery/
---

**What happened:** Coinbase publicly disclosed a data breach caused by social engineering targeting overseas customer support contractors. Threat actors bribed multiple support agents to access and exfiltrate customer account data, including names, addresses, phone numbers, masked Social Security numbers, bank account details, and government ID images. The attackers then contacted Coinbase demanding a $20 million extortion payment in exchange for not leaking the stolen data. Coinbase refused to pay and instead offered a $20 million reward for information leading to the attackers' arrest.

**Technical details:** The attack leveraged insider access rather than technical exploitation. Bribed support staff used their legitimate access to customer support tools to pull account information for a subset of users. The breach did not compromise passwords, private keys, or crypto wallets, and Coinbase Prime accounts were unaffected. Coinbase detected anomalous data access patterns in its monitoring systems but only confirmed the full scope after receiving the extortion demand. The affected employees have been terminated and referred to law enforcement.

**Who is affected:** Approximately 1% of Coinbase monthly transacting users had personal information exposed. No customer funds were stolen. However, exposed users face elevated risk of sophisticated phishing attacks and SIM-swapping attempts using the stolen personal data, which is particularly dangerous for cryptocurrency holders.

**What defenders should do:** Cryptocurrency companies should implement stricter access controls with just-in-time provisioning for support staff. Behavioral analytics should monitor for anomalous data access volume. Off-shore support teams should be subject to enhanced vetting and monitoring. Coinbase users should enable hardware security keys for 2FA and be vigilant about phishing attempts referencing their account details.

**Broader implications:** This incident demonstrates that even well-resourced companies with strong technical security can be undermined through human compromise. The decision to refuse the ransom and instead offer a bounty sets an unusual precedent. The attack also highlights the growing risk of insider threats in the cryptocurrency industry, where customer data can be extremely valuable for targeted theft attacks.
