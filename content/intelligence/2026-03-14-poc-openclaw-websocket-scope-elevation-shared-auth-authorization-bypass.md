---
title: "OpenClaw WebSocket Scope Elevation: Shared-Auth Authorization Bypass"
date: 2026-03-14T07:01:15+00:00
severity: high
category: vulnerability
status: active
tldr: "A logic flaw in OpenClaw's WebSocket authentication path allows shared-secret clients to self-declare elevated scopes (e.g., operator.admin) without server-side validation, enabling unauthorized admin operations. Defenders must patch immediately and audit existing shared-auth connections."
tags: [poc, authorization-bypass, scope-elevation, websocket, shared-authentication, logic-flaw, access-control]
cves: [GHSA-rqpp-rjj8-7wv8]
affected: [openclaw <= 2026.3.11]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-rqpp-rjj8-7wv8
---

## Vulnerability Class & Root Cause

This is an **authorization boundary bypass** stemming from improper scope validation in the WebSocket connection handler. The gateway failed to enforce server-side binding of client-declared scopes for device-less, shared-token/password-authenticated connections. Unlike Control UI connections (which are explicitly trusted), shared-secret clients could present arbitrary elevated scopes without cryptographic or identity proof. The flaw violates the principle of least privilege and trust-on-first-use security models.

## Impact & Attack Surface

A malicious or compromised backend service using the shared secret could escalate privileges to `operator.admin` and perform gateway administrative operations (user management, policy changes, audit log manipulation, system configuration). The attack requires only possession of the shared credential—no device identity, client certificate, or additional authentication factor is needed. This crosses the intended authorization boundary between shared-secret and elevated-privilege contexts.

## Detection Guidance

**Log Indicators:**
- WebSocket connection events from shared-auth clients declaring scopes containing `operator.` or `admin` prefixes
- Mismatch between authenticated principal type (shared-secret) and declared scope tier
- DeviceLess connection requests with elevated scope claims in authorization headers
- Successful admin operations (config changes, user creation, policy updates) originating from shared-auth session tokens

**Query pattern for SIEM:**
```
event.type:websocket_connect AND auth.method:shared_secret AND scope:operator.admin
```

## Mitigation & Patching

1. **Immediate:** Upgrade to `openclaw >= 2026.3.12` (fix clears unbound scopes for non-Control-UI shared-auth paths)
2. **Network isolation:** Restrict shared-auth client access to read-only or non-administrative gateway endpoints
3. **Credential rotation:** Rotate all shared secrets used by backend services; audit usage logs for privilege escalation patterns
4. **Access control review:** Validate that shared-secret clients only receive minimum necessary scopes at token issuance
5. **Regression testing:** Ensure your test suite covers device-less shared-auth connection paths (fix includes new regression tests)

## Risk Assessment

**Likelihood:** Moderate to high. Shared-secret authentication is common in backend-to-gateway architectures; if misconfigured or if secrets are leaked, exploitation requires minimal effort (standard WebSocket client + scope claim). **Threat actor interest:** High—privilege escalation to admin is a primary objective in lateral movement and persistence campaigns. Organizations running affected versions with internet-exposed gateways or untrusted backend services face elevated risk.