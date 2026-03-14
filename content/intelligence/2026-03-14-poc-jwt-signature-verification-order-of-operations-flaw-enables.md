---
title: "JWT Signature Verification Order-of-Operations Flaw Enables Unauthenticated SSRF in Centrifugo"
date: 2026-03-14T07:01:41+00:00
severity: critical
category: vulnerability
status: active
tldr: "Centrifugo performs JWT claim extraction and dynamic URL interpolation before cryptographic signature verification, allowing unauthenticated attackers to trigger SSRF requests to arbitrary destinations via crafted JWT claims."
tags: [poc, ssrf, jwt, order-of-operations, unauthenticated, network-access, cwe-427, cwe-918]
cves: [CVE-2026-32301]
affected: [Centrifugo]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-j77h-rr39-c552
---

## Vulnerability Description

This vulnerability stems from a critical logical flaw in JWT token validation workflow. Centrifugo processes JWT tokens using template-interpolated JWKS endpoint URLs (e.g., `https://auth.example.com/jwks/{{tenant}}`). The root cause is **premature claim extraction**: the `iss` (issuer) and `aud` (audience) claims are extracted from an **unverified JWT** via `jwt.ParseNoVerify()`, then used to populate template variables that are directly interpolated into the JWKS fetch URL. Signature verification happens afterward, after the outbound HTTP request has already been initiated. This violates the fundamental security principle: *never trust or act upon unverified user-supplied data*. The impact is severe: any unauthenticated network-adjacent attacker can force Centrifugo to make HTTP requests to internal services, cloud metadata endpoints, or external attacker infrastructure, potentially exfiltrating data or compromising internal systems.

## Proof-of-Concept Significance

The PoC demonstrates that this flaw requires minimal preconditions: the attacker needs only network access to send a malformed JWT to Centrifugo's token endpoint—no valid credentials or prior authentication required. The vulnerability is highly reliable because the exploit path is deterministic: craft a JWT with malicious `iss`/`aud` claims matching the configured regex patterns, send it to the endpoint, and Centrifugo will unconditionally fetch from the attacker-controlled URL derived from those claims. The false `//nolint:gosec` comment suppressing linter warnings is a red flag indicating developers misunderstood the threat model.

## Detection Guidance

**Log Indicators:**
- Outbound HTTP GET requests to unexpected or suspicious destinations originating from Centrifugo process
- JWT parsing operations followed immediately by HTTP requests without intervening signature validation logs
- Requests to internal IP ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) or cloud metadata endpoints (169.254.169.254)
- Malformed or syntactically invalid JWTs preceding outbound network activity

**Network Monitoring:**
- Monitor egress traffic from Centrifugo instances for anomalous destinations
- Flag connections to AWS metadata, GCP metadata, Kubernetes API servers, or internal service discovery endpoints
- Correlate inbound malformed JWT submissions with outbound HTTP requests via request/response timing

**Metrics:**
- Track JWT parsing failure rates and correlate with outbound connection counts
- Alert on repeated requests to same external JWKS-like URLs

## Mitigation Steps

1. **Immediate Patch:** Upgrade to patched Centrifugo version (consult GHSA-j77h-rr39-c552 for fixed release)
2. **Code-level fix (if patching delayed):** Reorganize token verification to perform **signature verification first** on the raw JWT before any claim extraction or interpolation
3. **Network Hardening:** Implement egress firewall rules restricting Centrifugo's outbound connections to a whitelist of legitimate JWKS provider hostnames only
4. **Configuration Review:** Audit all dynamic JWKS URL templates; prefer static URLs where possible to eliminate interpolation entirely
5. **Credential Isolation:** Ensure Centrifugo runs with minimal IAM/network permissions; restrict access to internal service discovery, cloud metadata endpoints, and privileged networks
6. **Remove Security Linter Suppression:** Delete the incorrect `//nolint:gosec` comment and re-run static analysis tools

## Risk Assessment

**Likelihood:** High. The vulnerability requires only an unauthenticated network message; exploitation is trivial and requires no platform-specific knowledge. Any organization running Centrifugo with dynamic JWKS URLs and external ingress access is at risk.

**Threat Actor Interest:** High. SSRF vulnerabilities are consistently sought by threat actors for lateral movement, internal reconnaissance, and metadata exfiltration (AWS, GCP, Azure credentials). This vulnerability is attractive because it's unauthenticated, deterministic, and impacts a messaging/protocol gateway frequently deployed in distributed architectures.

**Wild Exploitation:** Given the simplicity and high impact, expect active exploitation post-disclosure. Legacy/unpatched instances are likely targets for cloud infrastructure reconnaissance.