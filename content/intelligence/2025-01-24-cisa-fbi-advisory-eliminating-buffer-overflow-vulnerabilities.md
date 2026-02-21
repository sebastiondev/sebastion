---
title: "CISA and FBI Release Joint Advisory on Eliminating Buffer Overflow Vulnerabilities"
date: 2025-01-24T09:10:00+00:00
severity: informational
category: policy
status: active
tldr: "CISA and FBI publish joint guidance urging software manufacturers to adopt memory-safe programming languages and practices to eliminate buffer overflow vulnerabilities at their source."
tags: [cisa, fbi, memory_safety, secure_by_design, buffer_overflow]
cves: []
affected: [Software manufacturers and developers]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/resources-tools/resources/product-security-bad-practices
---

**What happened:** CISA and the FBI jointly published a Secure by Design Alert calling on software manufacturers to eliminate buffer overflow vulnerabilities from their products. The advisory highlights buffer overflows as one of the most dangerous and persistent vulnerability classes, responsible for numerous critical exploits over the past several decades.

**Technical details:** The advisory catalogs common buffer overflow vulnerability types including stack-based, heap-based, and integer overflows, and recommends transitioning to memory-safe languages such as Rust, Go, Java, and C# for new development. For existing codebases written in C/C++, the agencies recommend adopting compiler-level mitigations such as ASLR, stack canaries, and Control Flow Integrity (CFI), along with static and dynamic analysis tools to identify and remediate existing vulnerabilities.

**Who is affected:** Software manufacturers across all sectors, particularly those developing operating systems, network infrastructure software, embedded systems, and security products where C and C++ remain prevalent. End-user organizations are indirectly affected as consumers of these products.

**What defenders should do:** Evaluate procurement requirements to prioritize vendors demonstrating commitment to memory-safe practices. For internal development teams, begin roadmap planning for migration to memory-safe languages in critical components. Implement dependency scanning to identify third-party components with known buffer overflow vulnerabilities.

**Broader implications:** This advisory is part of CISA's broader Secure by Design initiative, pushing the responsibility for security upstream to manufacturers rather than placing it solely on end users. The emphasis on memory safety aligns with industry momentum, including the White House's 2024 report advocating for memory-safe languages in critical infrastructure software.
