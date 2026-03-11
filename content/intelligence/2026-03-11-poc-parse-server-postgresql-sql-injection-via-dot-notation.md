---
title: "Parse Server PostgreSQL SQL Injection via Dot-Notation Sub-key"
date: 2026-03-11T07:10:51+00:00
severity: critical
category: vulnerability
status: active
tldr: "Parse Server's PostgreSQL adapter fails to escape sub-key names in Increment operations, allowing SQL injection. The PoC highlights the need for immediate patching to prevent database compromise."
tags: [poc, sql-injection, parse-server, postgreSQL]
cves: [CVE-2026-31871]
affected: [Parse Community/Parse Server]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-gqpp-xgvh-9h7h
---

The vulnerability arises from unescaped sub-key names in Increment operations, enabling SQL injection. Attackers can inject arbitrary commands by crafting keys with quotes or other special characters.

The PoC demonstrates that maliciously crafted sub-keys can execute unauthorized SQL commands, bypassing security measures like CLPs and ACLs. It underscores the critical need for immediate patching to prevent exploitation.

{'signatures': ['Monitor for requests with keys containing single quotes or other SQL injection vectors'], 'log_indicators': ['Look for unusual database queries in logs that suggest unauthorized access attempts']}

{'patches': ['Update to Parse Server versions 9.6.0-alpha.5 or 8.6.31 which escape sub-key names'], 'workarounds': ['No known workarounds; patching is the only solution']}

{'likelihood': 'high', 'threat_interest': 'High interest from attackers due to potential data breaches'}