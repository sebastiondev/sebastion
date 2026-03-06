---
title: "HTTP Request Smuggling via Premature Upgrade in Pingora"
date: 2026-03-06T07:09:38+00:00
severity: critical
category: vulnerability
status: active
tldr: "Pingora versions prior to 0.8.0 are vulnerable to HTTP Request Smuggling due to improper handling of the Upgrade header, allowing attackers to bypass security controls."
tags: [poc, http, request-smuggling, upgrade-header]
cves: [CVE-2026-2833]
affected: [Pingora versions <0.8.0]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-xq2h-p299-vjwv
---

The vulnerability arises from Pingora's premature forwarding of bytes following a request with an Upgrade header, without waiting for the 101 Switching Protocols response. This allows attackers to inject malicious requests bypassing proxy security measures.

The PoC demonstrates how an attacker can exploit this flaw to smuggle requests, highlighting the need for proper handling of HTTP upgrade processes in Pingora.

Monitor network traffic for requests with Upgrade headers followed by unexpected data. Implement logging and alerts for such patterns to detect potential exploitation attempts.

Upgrade to Pingora v0.8.0 or higher to fix the issue. Temporarily block requests containing the Upgrade header as a workaround until an update is applied.

High risk for standalone deployments, with medium to high likelihood of exploitation in the wild due to potential access bypass and control over backend systems.