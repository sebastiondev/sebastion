---
title: "NIST Publishes Final Post-Quantum Cryptography Migration Guidelines"
date: 2025-12-20T10:00:00+00:00
severity: informational
category: policy
status: resolved
tldr: "NIST released final guidelines for organizations to transition from classical to post-quantum cryptographic algorithms, establishing timelines and priorities for migration across different use cases."
tags: [nist, post_quantum, cryptography, pqc, migration, standards]
cves: []
affected: [All organizations using public-key cryptography]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/nist-post-quantum-cryptography-migration-guidelines/
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/12/nist-pqc-migration-guidelines/
---

**What happened:** NIST published its final post-quantum cryptography (PQC) migration guidelines, providing organizations with a structured framework for transitioning from vulnerable classical public-key algorithms (RSA, ECC, DH) to post-quantum alternatives. The guidelines establish prioritized migration timelines based on data sensitivity and cryptographic use case, with the most sensitive applications required to begin migration implementation by 2027. The document builds on NIST's finalized PQC standards (ML-KEM, ML-DSA, SLH-DSA) published in 2024.

**Technical details:** The migration guidelines address four primary areas: key encapsulation/key exchange (migrate to ML-KEM, formerly CRYSTALS-Kyber), digital signatures (migrate to ML-DSA, formerly CRYSTALS-Dilithium, or SLH-DSA for stateless hash-based signatures), hybrid approaches (combining classical and PQC algorithms during transition), and crypto agility architecture (designing systems to efficiently swap cryptographic algorithms). The guidelines prioritize migration based on the "harvest now, decrypt later" threat model, where long-lived secrets and data requiring decades of confidentiality should be protected first. TLS, VPN, and email encryption are identified as highest-priority migration targets.

**Who is affected:** All organizations that use public-key cryptography, which effectively means every organization that uses the internet. Government agencies, financial institutions, healthcare providers, and organizations handling classified or long-lived sensitive data face the most urgent migration timelines. Cryptographic library vendors and protocol implementors need to support PQC algorithms in their products.

**What defenders should do:** Conduct a cryptographic inventory to identify all uses of classical public-key algorithms across the organization. Prioritize migration of systems protecting data with long confidentiality requirements. Begin testing PQC algorithm support in TLS and VPN implementations. Ensure procurement processes require PQC capability in new infrastructure. Implement crypto-agility in application architectures to facilitate future algorithm transitions. Engage with vendors about their PQC roadmaps.

**Broader implications:** The PQC migration represents the largest coordinated cryptographic transition in the history of computing. Unlike previous algorithm transitions (DES to AES, SHA-1 to SHA-256), PQC migration affects nearly every internet protocol and security system simultaneously. The combination of larger key sizes, different performance characteristics, and the need for hybrid approaches during transition creates significant engineering challenges. Organizations that begin migration planning now will be better positioned than those who wait until quantum computing threatens become imminent.
