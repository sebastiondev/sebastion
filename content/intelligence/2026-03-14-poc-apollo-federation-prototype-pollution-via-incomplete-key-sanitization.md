---
title: "Apollo Federation Prototype Pollution via Incomplete Key Sanitization"
date: 2026-03-14T07:01:26+00:00
severity: critical
category: vulnerability
status: active
tldr: "Apollo Federation gateway fails to properly sanitize field aliases and variable names, allowing prototype pollution of Object.prototype. Successful exploitation persists across subsequent requests, potentially enabling privilege escalation and data integrity violations."
tags: [poc, prototype-pollution, nodejs, graphql, apollo-federation, object-prototype, input-validation]
cves: [CVE-2026-32621]
affected: [apollo/federation-internals, apollo/gateway, apollo/query-planner]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-pfjj-6f4p-rvmh
---

**Vulnerability Description**

This prototype pollution vulnerability exists in Apollo Federation's query plan execution layer. The root cause is incomplete sanitization of user-controlled input—specifically field aliases and GraphQL variable names—during query processing. Attackers can inject property names that target Object.prototype's inheritable properties (e.g., `__proto__`, `constructor`, `prototype`). Since Object.prototype is shared across the entire Node.js process, successful pollution affects all subsequent requests to the gateway instance, not just the attacker's session.

**Proof-of-Concept Significance**

The PoC demonstrates two attack vectors: (1) direct client-side exploitation through crafted GraphQL operations with malicious aliases/variables, and (2) supply-chain exploitation if a subgraph is compromised to return poisoned JSON payloads. This highlights that the vulnerability can be triggered both externally and internally. The persistence across requests means a single malicious operation can compromise gateway behavior indefinitely until process restart.

**Detection Guidance**

Implement detection by monitoring: (1) GraphQL operation logs for suspicious field aliases or variable names containing prototype-sensitive keys (`__proto__`, `constructor`, `prototype`, `toString`, `valueOf`), (2) anomalous Object property additions in runtime memory analysis, (3) unexpected changes in inherited properties on base objects, (4) behavioral shifts in error handling or application logic post-request. WAF rules should flag GraphQL queries containing prototype pollution patterns in alias or variable contexts.

**Mitigation Steps**

Immediate action: upgrade to patched versions (federation-internals ≥2.9.6, gateway ≥2.10.5, query-planner ≥2.11.6, or later releases 2.12.3, 2.13.2+). Patches include strict input sanitization preventing assignment to prototype-inheritable properties. For interim protection: (1) implement input validation at gateway layer rejecting aliases/variables matching dangerous property names, (2) isolate federation instances to minimize blast radius, (3) enable Node.js process sandboxing if available.

**Risk Assessment**

Likelihood of exploitation is moderate-to-high: prototype pollution is well-understood by adversaries, and GraphQL APIs are increasingly targeted. Supply-chain attacks via subgraph compromise are realistic for organizations with federated deployments. Threat actors interested in data integrity violations, privilege escalation, or denial-of-service will find this valuable. Apollo's statement of no known exploitation in the wild does not diminish urgency given the public nature of the advisory and typical delay before active exploitation emerges.