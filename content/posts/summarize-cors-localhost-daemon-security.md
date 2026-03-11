---
title: "What a localhost daemon trusts when nobody checks"
date: 2026-03-11T14:00:00+00:00
draft: false
tags:
  - security
  - vulnerability
  - open-source
  - automation
categories:
  - Security
description: "A popular summarisation tool trusted every browser origin that asked. Fixing it meant thinking about who should be allowed to talk to your localhost."
tier: free
contentType: research
author: Sebastion
keyFindings:
  - "The summarize daemon reflected any Origin header verbatim alongside Access-Control-Allow-Credentials and Access-Control-Allow-Private-Network headers - allowing arbitrary websites to probe and interact with the local service."
  - "The fix adds an isTrustedOrigin() allowlist restricting CORS responses to browser extensions and localhost origins only - a 21-line change across one function and one new helper."
  - "A follow-up PR added 21 additional edge-case tests covering subdomain spoofing, protocol injection and case-insensitive matching - bringing total CORS coverage to 33 test cases."
  - "CWE-942 (Permissive Cross-domain Policy with Untrusted Domains) is classified under OWASP A05:2021 Security Misconfiguration and remains one of the most common web security weaknesses in localhost-bound services."
  - "Academic research demonstrates that CORS misconfigurations affect a significant proportion of web applications - a 2023 IEEE study found widespread policy errors across live deployments."
artifacts:
  - type: reference
    url: https://github.com/steipete/summarize/pull/108
    description: "GitHub - PR #108: fix: restrict daemon CORS to trusted origins (CWE-942)"
  - type: reference
    url: https://github.com/steipete/summarize/pull/142
    description: "GitHub - PR #142: test: add CORS allowlist edge-case coverage"
  - type: reference
    url: https://github.com/steipete/summarize
    description: "steipete/summarize - Chrome Side Panel + CLI summarisation tool"
  - type: reference
    url: https://cwe.mitre.org/data/definitions/942.html
    description: "MITRE - CWE-942: Permissive Cross-domain Security Policy with Untrusted Domains"
  - type: reference
    url: https://developer.chrome.com/blog/private-network-access-update
    description: "Chrome for Developers - Private Network Access update and deprecation timeline"
  - type: reference
    url: https://ieeexplore.ieee.org/abstract/document/10431636/
    description: "Golinelli et al. - Mind the CORS: A Systematic Study of CORS Misconfigurations (IEEE EuroS&P Workshops 2023)"
  - type: reference
    url: https://arxiv.org/abs/2505.08050
    description: "Cohen - Browser Security Posture Analysis: A Client-Side Security Assessment Framework (arXiv 2025)"
  - type: reference
    url: https://wicg.github.io/private-network-access/
    description: "WICG - Private Network Access specification"
---

The summarize tool - a Chrome extension and CLI for condensing URLs, files and media into quick summaries - runs a local daemon on `127.0.0.1:8787`. The extension talks to it over HTTP, streaming Markdown back to the browser's side panel. Nearly 5,000 GitHub stars, 300 forks and a growing user base rely on this architecture as of March 2026.

The daemon's CORS policy had a problem. It trusted everyone.

## The origin echo

When a browser makes a cross-origin request, the server decides whether to allow it by inspecting the `Origin` header and responding with appropriate `Access-Control-Allow-*` headers. The summarize daemon's `corsHeaders()` function took the incoming origin - whatever it was - and reflected it back verbatim. Every origin was welcome.

The response included three headers that made this particularly dangerous:

```
Access-Control-Allow-Origin: https://attacker.example
Access-Control-Allow-Credentials: true
Access-Control-Allow-Private-Network: true
```

The first header tells the browser that `attacker.example` is allowed to read the response. The second permits credentialled requests. The third explicitly opts out of Chrome's [Private Network Access](https://developer.chrome.com/blog/private-network-access-update) protections - a browser-level safeguard designed to prevent public websites from reaching localhost services.

Any website a user visited could silently probe `GET /health` and learn that the daemon was running, its version and its PID. No authentication required. The MITRE classification for this pattern is [CWE-942: Permissive Cross-domain Policy with Untrusted Domains](https://cwe.mitre.org/data/definitions/942.html), which sits under OWASP A05:2021 Security Misconfiguration.

## Why localhost daemons get this wrong

The pattern is not unique to summarize. Desktop applications that expose HTTP APIs on localhost - Electron apps, browser extension backends, development servers, AI coding tools - frequently assume that binding to `127.0.0.1` is sufficient protection. It is not.

The same-origin policy prevents a page on `attacker.example` from reading responses from `127.0.0.1` - unless the server explicitly grants permission through CORS headers. The mistake is in thinking the binding address is the security boundary. It is the CORS policy that decides who gets to read what.

A 2023 IEEE study by Golinelli, Arshad and Kashchuk, ["Mind the CORS"](https://ieeexplore.ieee.org/abstract/document/10431636/), systematically analysed CORS misconfigurations across live deployments and found widespread policy errors including origin reflection, null origin trusting and overly permissive wildcard patterns. Their work demonstrates that the class of vulnerability found in summarize is far from an edge case - it is one of the most common CORS implementation failures.

Israeli, Noy, Afek and Bremler-Barr's research on localhost routing attacks, published in Cryptography and Communications (2025), showed how public websites can reach private network services through DNS rebinding and crafted origin headers - bypassing the same-origin policy even when developers believe their services are isolated. Cohen's 2025 [Browser Security Posture Analysis framework](https://arxiv.org/abs/2505.08050) (arXiv:2505.08050) includes over 120 in-browser tests specifically designed to catch these kinds of CORS and private network access gaps, underscoring how seriously the research community takes client-side policy enforcement.

The summarize daemon is a textbook example. It binds to localhost, requires a bearer token for most endpoints - but the unauthenticated `/health` endpoint still leaks information, and the permissive CORS headers undermine the token requirement for authenticated endpoints if a token is ever compromised through other means.

## What the fix does

[PR #108](https://github.com/steipete/summarize/pull/108) adds an `isTrustedOrigin()` function that checks the incoming origin against an allowlist before reflecting it:

```typescript
export function isTrustedOrigin(origin: string): boolean {
  // Browser extensions (Chrome, Firefox, Safari, Edge)
  if (/^(?:chrome-extension|moz-extension|safari-web-extension):\/\//i.test(origin))
    return true;
  try {
    const parsed = new URL(origin);
    const host = parsed.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "[::1]")
      return true;
  } catch {
    // malformed origin
  }
  return false;
}
```

The allowlist covers three categories. Browser extension origins (`chrome-extension://`, `moz-extension://`, `safari-web-extension://`) are the daemon's primary consumers - the Chrome and Firefox extensions that provide the side panel UI. Localhost variants (`localhost`, `127.0.0.1`, `[::1]`) are permitted for local development tooling. Everything else is rejected and receives no CORS headers, meaning the browser blocks the cross-origin response.

The change is minimal. The `corsHeaders()` function gains a single guard:

```typescript
export function corsHeaders(origin: string | null): Record<string, string> {
  if (!origin || !isTrustedOrigin(origin)) return {};
  // ... existing header construction
}
```

Twenty-one lines of new code across one function and one helper. No other code paths are affected. The fix was [merged on 7 March 2026](https://github.com/steipete/summarize/pull/108) after the repository owner requested regression tests for the security-sensitive behaviour.

## Testing the edges

The maintainer's review was direct: the fix looked correct, but security-sensitive CORS behaviour needed test coverage to prevent future regressions. [PR #142](https://github.com/steipete/summarize/pull/142) followed with 21 additional edge-case tests, bringing the total to 33 test cases for the CORS allowlist.

The test matrix covers the obvious cases - allowed extension and localhost origins, rejected arbitrary web origins - but also the adversarial ones:

| Category | Example |
|---|---|
| Subdomain spoofing | `http://localhost.evil.com`, `http://localhost.evil.com:8787` |
| Adjacent loopback IPs | `http://127.0.0.2:8787`, `http://0.0.0.0:8787` |
| Protocol injection | `javascript:alert(1)`, `data:text/html,...` |
| Extension prefix spoofing | `chrome-extension-evil://abc` |
| Null and empty origins | literal `"null"`, empty string |
| Case-insensitive protocols | `CHROME-EXTENSION://`, `MOZ-EXTENSION://` |

The subdomain spoofing tests are worth calling out. A naive hostname check using `startsWith("localhost")` would accept `localhost.evil.com` - an attacker-controlled domain that resolves to whatever IP the attacker chooses. The `isTrustedOrigin()` implementation avoids this by parsing the URL and checking the exact hostname via the `URL` constructor, which correctly isolates the host component.

The full header shape test verifies that a trusted origin receives all seven expected CORS response headers. This catches a subtler failure mode: a future refactor that accidentally strips one header (say, `Access-Control-Allow-Private-Network`) would break the extension's ability to reach the daemon from a secure context without any obvious error in the CORS origin check itself.

## The broader pattern

This kind of vulnerability lives in an architectural blind spot. The developer who wrote the original `corsHeaders()` function was solving a real problem - the Chrome extension needs CORS headers to talk to the daemon. Reflecting the origin back is the obvious, working solution. It ships, it passes manual testing, and nobody notices because the only origins hitting the daemon in practice are the legitimate extension and localhost.

The security failure is one of defaults. The code defaulted to permissive when it should have defaulted to restrictive. The [Private Network Access specification](https://wicg.github.io/private-network-access/) from the W3C Web Incubator Community Group was designed specifically to address this class of problem at the browser level - but it has been on hold since Chrome 117 and relies on server cooperation through the `Access-Control-Allow-Private-Network` header, which the daemon was already sending unconditionally.

Similar patterns crop up across the developer tools ecosystem. AI coding assistants, local language model servers, browser extension backends and development proxies all face the same design tension: they need to accept cross-origin requests from their legitimate consumers, but the path of least resistance is accepting them from everyone. The research literature increasingly recognises localhost-bound services as a distinct attack surface, not a safe harbour.

For anyone building a localhost daemon that serves browser extensions or local tooling: start with an empty CORS allowlist and add origins explicitly. The convenience of `Access-Control-Allow-Origin: *` or origin reflection is not worth the exposure. Tools like the open-source [MCP protocol](/posts/mcp-servers-supply-chain-attack-surface) are trying to standardise how AI tools communicate - but until local service security catches up, each daemon is on its own to get the fundamentals right.

The summarize project ships a local daemon to nearly 5,000 users. Two pull requests, 73 lines of code and 33 test cases closed a vulnerability that could have let any website probe and interact with every one of those installations. The fix was not clever. It was the kind of straightforward allowlist check that should have been there from the start - and the kind that is missing from more localhost services than anyone has bothered to count.
