---
title: "Orange Group Confirms Data Breach After Hacker Leaks Internal Documents"
date: 2025-02-25T12:10:00+00:00
severity: medium
category: campaign
status: active
tldr: "French telecommunications giant Orange confirmed a data breach after a threat actor leaked thousands of internal documents, source code, and customer records from the company's Romanian branch."
tags: [orange, telecommunications, data_breach, france]
cves: []
affected: [Orange Group, Orange Romania customers]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/orange-group-confirms-breach-after-hacker-leaks-company-documents/
---

**What happened:** Orange Group, one of Europe's largest telecommunications providers, confirmed a security breach after a threat actor published a large cache of stolen data on a hacking forum. The leaked data reportedly included internal documents, source code fragments, customer data, employee records, and email correspondence from the company's Romanian operations.

**Technical details:** The threat actor claimed to have gained access through compromised credentials and maintained persistence in Orange Romania's systems for over a month before being detected. The leaked dataset was approximately 6.5 GB and included Jira tickets, internal application source code, partial customer databases with PII, and network configuration details. The attacker reportedly used a combination of credential stuffing and exploitation of an unpatched internal application.

**Who is affected:** Orange Group employees and customers, particularly those associated with Orange Romania operations. The leaked source code and network configurations could potentially be leveraged for further attacks against the company's infrastructure.

**What defenders should do:** Orange customers should monitor their accounts for unauthorized activity and consider changing passwords. Telecommunications companies should treat this as a reminder to implement zero-trust principles for internal systems, enforce MFA on all employee accounts, and regularly audit for stolen credentials appearing in underground markets.

**Broader implications:** Telecommunications companies remain high-value targets due to the volume of customer data they hold and their critical infrastructure role. This breach adds to a growing list of major telecom compromises and underscores the need for the sector to adopt more aggressive security postures, particularly for international subsidiaries that may have different security maturity levels.
