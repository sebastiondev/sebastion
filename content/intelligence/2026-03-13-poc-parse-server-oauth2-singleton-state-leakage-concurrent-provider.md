---
title: "Parse Server OAuth2 Singleton State Leakage - Concurrent Provider Token Validation Bypass"
date: 2026-03-13T07:01:54+00:00
severity: critical
category: vulnerability
status: active
tldr: "Parse Server's OAuth2 adapter uses a shared singleton instance across multiple providers, allowing concurrent authentication requests to cause token validation confusion where one provider's token may be validated against another provider's policy, potentially leading to unauthorized access."
tags: [poc, oauth2, singleton-pattern, race-condition, authentication-bypass, state-management, concurrent-execution]
cves: [CVE-2026-32242]
affected: [Parse Community/Parse Server (versions < 8.6.37 and < 9.6.0-alpha.11)]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-2cjm-2gwv-m892
---

## Vulnerability Analysis

### Root Cause & Impact
This vulnerability stems from the **Singleton Pattern Anti-Pattern** applied incorrectly to stateful components. Parse Server's OAuth2 adapter is instantiated once and reused across all configured OAuth2 providers. Each provider maintains distinct configuration (endpoints, keys, validation policies), but the singleton instance holds mutable state. Under concurrent load, race conditions occur where Thread A's token validation may execute within Thread B's provider context, causing authentication decisions based on mismatched configurations. The impact is **authentication bypass**: tokens that should fail validation against Provider A's policy may succeed when validated against Provider B's looser policy, granting unauthorized access.

### PoC Significance
The disclosure demonstrates this is a **real concurrency issue**, not theoretical. The PoC proves that with multiple configured OAuth2 providers and sufficient request concurrency, the race condition is reliably triggerable. Preconditions are minimal: (1) `oauth2: true` flag enabled, (2) 2+ distinct OAuth2 providers configured, (3) overlapping concurrent authentication requests. This is highly realistic in production environments with distributed users authenticating simultaneously across different identity providers.

### Detection Guidance
Monitor for:
- **Log anomalies**: Authentication success logs where the provider field differs between initial request and token validation logs, or inconsistent provider context in audit trails
- **Behavioral indicators**: Same user token accepted for Provider A then rejected when replayed against Provider A (indicating stale provider context)
- **Metrics**: Correlation spikes between failed validations for one provider and successful validations for another during high-concurrency periods
- **Code-level**: Search configuration for `oauth2: true` with multiple provider entries; audit OAuth2 adapter instantiation patterns

### Mitigation & Patching
**Immediate Actions**:
1. Upgrade Parse Server to 8.6.37+ (for v8) or 9.6.0-alpha.11+ (for v9)
2. If upgrade is delayed, reduce concurrency or disable all but one OAuth2 provider temporarily
3. Implement request queuing/serialization for OAuth2 token validation (temporary workaround)

**Long-term**:
- Enforce per-instance adapter creation in code reviews
- Replace singletons with dependency injection for stateful authentication components
- Add integration tests simulating concurrent multi-provider authentication

### Risk Assessment
**Likelihood**: HIGH in production. Multi-provider OAuth2 is common in enterprise deployments. High-concurrency environments (SaaS, social login platforms) create ideal triggering conditions.
**Threat Actor Interest**: MODERATE-HIGH. This is a reliable authentication bypass requiring no code injection; attackers need only craft timing-coordinated requests, which is feasible at scale.
**Exploitation in Wild**: Likely already exploited opportunistically by sophisticated attackers; the race window is small but predictable under load testing.