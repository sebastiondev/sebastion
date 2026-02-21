---
title: "npm Supply Chain Attack Compromises Popular Event-Stream Successor Package"
date: 2025-08-18T15:40:00+00:00
severity: high
category: supply-chain
status: active
tldr: "A supply chain attack targeting a widely-used npm package injected cryptocurrency-stealing malware, affecting over 12 million weekly downloads before detection."
tags: [npm, supply_chain, javascript, cryptocurrency, malware, open_source]
cves: []
affected: [npm ecosystem, Node.js developers]
sources:
  - title: "The Record"
    url: https://therecord.media/npm-supply-chain-attack-cryptocurrency-stealer
  - title: "SecurityWeek"
    url: https://www.securityweek.com/npm-supply-chain-attack-12-million-downloads/
---

**What happened:** Security researchers discovered a supply chain compromise affecting a popular npm package with over 12 million weekly downloads. A social engineering campaign convinced the maintainer to transfer publishing rights to a threat actor, who then published a new version containing obfuscated code designed to steal cryptocurrency wallet credentials and private keys. The malicious version was available for approximately five days before detection and removal by the npm security team.

**Technical details:** The attacker built credibility over several months by submitting legitimate pull requests to the open-source project. After gaining the maintainer's trust, the attacker was granted publish access to the npm package. The malicious code was embedded in a post-install script that ran automatically when the package was installed. The payload targeted cryptocurrency wallet files, browser extension data for popular crypto wallets, and environment variables containing API keys. The malware exfiltrated data to a series of Cloudflare Workers endpoints that proxied data to attacker-controlled infrastructure. The obfuscation used multiple layers of encoding to evade automated scanning.

**Who is affected:** Any Node.js application or CI/CD pipeline that installed or updated the affected package during the five-day window. Developers working on cryptocurrency-related projects are at highest risk for credential theft. Organizations using the package in server-side applications may have had environment variables and secrets from build environments exfiltrated.

**What defenders should do:** Check dependency lock files for the compromised package version and roll back to the last known-good version. Rotate any secrets, API keys, or credentials that were accessible in environments where the package was installed. Audit cryptocurrency wallet files on developer machines. Implement npm package pinning and use lock files to prevent automatic updates to potentially compromised versions. Consider deploying supply chain security tools that verify package provenance.

**Broader implications:** This attack follows the classic playbook of social engineering open-source maintainers, echoing incidents like the event-stream compromise. The npm ecosystem's reliance on volunteer maintainers for critical packages remains a systemic vulnerability. The five-day detection window demonstrates that even popular packages can be compromised for significant periods. Industry initiatives around package provenance and signing, such as Sigstore, are making progress but are not yet widely adopted enough to prevent these attacks.
