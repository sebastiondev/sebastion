---
title: "Critical Next.js Middleware Authorization Bypass Vulnerability"
date: 2025-03-22T11:05:00+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "A critical authorization bypass vulnerability in the Next.js framework allows attackers to skip middleware-based security checks by manipulating request headers, potentially affecting millions of web applications."
tags: [nextjs, middleware, authorization_bypass, web_framework]
cves: [CVE-2025-29927]
affected: [Next.js applications using middleware for authorization]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/critical-next-js-vulnerability-allows-authorization-bypass/
  - title: "The Record"
    url: https://therecord.media/critical-nextjs-vulnerability-middleware-bypass
---

**What happened:** A critical authorization bypass vulnerability was disclosed in Next.js, one of the most popular React frameworks used for building web applications. CVE-2025-29927 allows attackers to bypass middleware-based authorization checks entirely by including a specific internal header in their requests, potentially gaining unauthorized access to protected routes and resources.

**Technical details:** The vulnerability exploits Next.js's use of the `x-middleware-subrequest` header, which is internally used to prevent infinite middleware recursion. By sending a request with this header set to match the middleware's module path, an attacker can cause the framework to skip middleware execution entirely. Since many Next.js applications implement authentication and authorization logic in middleware (a pattern recommended by the framework), this effectively bypasses all access controls. The vulnerability affects Next.js versions prior to 15.2.3, 14.2.25, 13.5.9, and 12.3.5.

**Who is affected:** Any web application built with Next.js that relies on middleware for authentication, authorization, security headers, or other request validation. Given Next.js is used by millions of websites including major enterprises, the potential impact is extensive. Applications using separate authentication services not integrated through middleware are less affected.

**What defenders should do:** Update Next.js to version 15.2.3, 14.2.25, 13.5.9, or 12.3.5 immediately. As a workaround, configure your reverse proxy or WAF to strip the `x-middleware-subrequest` header from incoming requests before they reach the Next.js application. Audit authorization patterns in your application to identify reliance on middleware-only checks and consider defense-in-depth approaches.

**Broader implications:** This vulnerability highlights the risks of relying solely on framework-level middleware for security-critical functions like authorization. The widespread adoption of Next.js means this disclosure affects a significant portion of the modern web application landscape, and it serves as a reminder that framework internals can introduce unexpected security boundaries that may be violated by knowledgeable attackers.
