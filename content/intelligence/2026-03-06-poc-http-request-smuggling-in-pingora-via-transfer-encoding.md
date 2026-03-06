---
title: "HTTP Request Smuggling in Pingora via Transfer-Encoding Misparsing"
date: 2026-03-06T07:07:57+00:00
severity: critical
category: vulnerability
status: active
tldr: "Pingora improperly handles HTTP/1.0 request bodies and Transfer-Encoding headers, enabling HTTP request smuggling attacks that bypass security controls. The PoC highlights the importance of proper request parsing in reverse proxies."
tags: [poc, HTTP Request Smuggling, Transfer-Encoding, HTTP/1.0]
cves: [CVE-2026-2835]
affected: [Pingora]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-hj7x-879w-vrp7
---

The vulnerability arises from Pingora's incorrect parsing of HTTP/1.0 request bodies and mishandling of multiple Transfer-Encoding headers. This allows attackers to desynchronize Pingora's request framing with backend servers, enabling request smuggling attacks. The root cause is improper implementation of RFC 9112 guidelines, particularly the handling of message length headers and close-delimited request bodies.

The proof-of-concept demonstrates that an attacker can exploit this misparsing to bypass proxy-level access controls (ACLs) and WAF logic. It also shows how attackers can poison caches, hijack sessions, or perform cross-user attacks by manipulating the request framing. The PoC is reliable for standalone Pingora deployments but does not affect Cloudflare's infrastructure due to its robust ingress layers.

Defenders should implement network traffic monitoring to detect malformed HTTP requests with ambiguous framing or invalid Content-Length values. Log analysis can look for patterns of multiple Transfer-Encoding headers or close-delimited request bodies. Additionally, consider deploying signatures in intrusion detection systems (IDS) to flag such anomalies.

Upgrade Pingora to version 0.8.0 or higher to benefit from fixes that adhere strictly to RFC guidelines. Apply the provided patches to ensure correct parsing of message length headers and reject close-delimited request bodies. As a workaround, implement request filtering logic to reject non-HTTP/1.1 requests or disable support for HTTP/1.0 if not required.

The vulnerability is critical due to its potential to bypass essential security controls like WAFs and ACLs. The likelihood of exploitation in the wild is high, especially given the nature of request smuggling attacks. Attackers with interest in compromising backend services or performing advanced persistent threats (APTs) would find this vulnerability valuable.