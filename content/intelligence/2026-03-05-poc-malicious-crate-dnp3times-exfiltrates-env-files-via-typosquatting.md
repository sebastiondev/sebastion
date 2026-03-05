---
title: "Malicious Crate `dnp3times` Exfiltrates `.env` Files via Typosquatting"
date: 2026-03-05T07:09:57+00:00
severity: critical
category: vulnerability
status: active
tldr: "The `dnp3times` crate was a malicious, typosquatting attempt that attempted to exfiltrate sensitive `.env` files to a server impersonating `timeapi.io`. The incident highlights risks in Rust crate supply chains and the importance of verifying dependencies."
tags: [poc, supply-chain, malware, typosquatting, exfiltration]
cves: []
affected: [crates.io/dnp3times]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-xhw7-jhmp-j62j
---

The `dnp3times` crate was a malicious Rust package that attempted to exfiltrate `.env` files, likely containing sensitive credentials, to a server impersonating `timeapi.io`. This attack leveraged typosquatting by mimicking the legitimate `dnp3time` crate. The root cause was the presence of unauthorized code in the crate that communicated with a malicious server. The impact includes potential exposure of sensitive data and compromise of systems using this crate.

This PoC demonstrates the growing trend of supply chain attacks targeting Rust crates, particularly through typosquatting. It highlights the risks of unverified dependencies and the need for robust detection mechanisms. The reliability of this attack is high due to the direct exfiltration of sensitive data, with preconditions including crate usage in environments with `.env` files.

Monitor for unusual network traffic from crates, especially those handling sensitive operations. Use log analysis to detect outbound connections to suspicious domains like `timeapi.io`. Implement YARA rules to identify patterns indicative of exfiltration activities in crate code.

Enhance crate vetting processes, use SAST/DAST tools to scan dependencies, and educate developers on supply chain risks. Users should update dependencies regularly and monitor for malicious activity in their environments.

The likelihood of exploitation is high due to the nature of typosquatting attacks and the potential for credential theft. Attackers are likely motivated by financial gain or data espionage.