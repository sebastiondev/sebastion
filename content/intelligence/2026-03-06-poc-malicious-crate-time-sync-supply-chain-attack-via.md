---
title: "Malicious Crate `time-sync`: Supply Chain Attack via Crate Repository"
date: 2026-03-06T07:06:22+00:00
severity: high
category: vulnerability
status: active
tldr: "The `time-sync` crate was used to exfiltrate `.env` files, highlighting a supply chain attack vector in Rust ecosystem. Defenders should focus on monitoring and securing package repositories."
tags: [poc, Rust, supply-chain, APT]
cves: []
affected: [crates.io/time-sync]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-mh23-rw7f-v5pq
---

The `time-sync` crate was found to contain malicious code that attempted to exfiltrate `.env` files to a server impersonating `timeapi.io`. This represents a supply chain attack where an attacker compromised a package in a trusted repository, potentially allowing access to sensitive development environment data. The root cause was unauthorized code added during the crate's publication. Impact includes potential exposure of credentials and other sensitive information stored in `.env` files.

The proof-of-concept demonstrates the feasibility of supply chain attacks targeting Rust crates. While no downloads occurred, the rapid removal suggests a low dwell time but high potential impact if exploited at scale. The reliability is high due to direct evidence from GitHub's security team. Precondition includes minimal scrutiny of new packages and reliance on third-party dependencies.

['Monitor crate repositories for unusual activity or package updates.', 'Implement supply chain monitoring tools (e.g., SAST/DAST) to detect malicious code in dependencies.', 'Log and analyze network traffic for data exfiltration attempts originating from development environments.']

['Adopt strict dependency management policies in CI/CD pipelines.', 'Verify the integrity of packages using cryptographic signatures or checksums.', 'Collaborate with Rust ecosystem maintainers to enhance package security and verification processes.']

High likelihood of exploitation due to the growing adoption of Rust and the demonstrated success of supply chain attacks. Attackers may target such vectors for long-term access or financial gain, making this a significant threat to software development pipelines.