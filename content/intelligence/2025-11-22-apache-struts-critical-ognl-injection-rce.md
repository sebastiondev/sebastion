---
title: "Critical Apache Struts Vulnerability Enables Remote Code Execution"
date: 2025-11-22T14:00:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical OGNL injection vulnerability in Apache Struts allows unauthenticated remote code execution, with exploitation observed within days of the advisory publication."
tags: [apache, struts, ognl_injection, rce, java, web_framework]
cves: [CVE-2025-45301]
affected: [Apache Struts 2]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/apache-struts-critical-rce-ognl-injection/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/11/apache-struts-critical-vulnerability.html
---

**What happened:** The Apache Software Foundation published a critical security advisory for Apache Struts 2 addressing an OGNL injection vulnerability that enables unauthenticated remote code execution. Within 72 hours of the advisory, security researchers observed active exploitation attempts in the wild, with attackers deploying cryptocurrency miners and web shells on vulnerable servers. The vulnerability follows the notorious pattern of Struts OGNL injection flaws that have led to major breaches including the 2017 Equifax data breach.

**Technical details:** CVE-2025-45301 is an OGNL injection vulnerability in the Struts file upload handling mechanism. When processing multipart file upload requests, user-supplied input is incorporated into an OGNL expression that is evaluated server-side. An attacker can embed arbitrary OGNL expressions in upload request parameters, which are executed in the Java application's context, enabling arbitrary command execution. The vulnerability affects the default Struts multipart parser and does not require the application to explicitly use file upload functionality — the vulnerable code path is triggered during request preprocessing.

**Who is affected:** Applications built on Apache Struts 2 running vulnerable versions. Struts remains widely deployed in enterprise Java applications, particularly in financial services, government, and large enterprise web applications. Many Struts applications run in environments with legacy dependencies that make rapid patching challenging.

**What defenders should do:** Update Apache Struts to the latest patched version immediately. If patching is not feasible, implement a WAF rule to block requests with OGNL expressions in multipart upload parameters. Monitor for unexpected process execution from Java application server processes. Review internet-facing Struts applications for signs of compromise, including web shells and unauthorized cron jobs. Consider application-level controls to restrict file upload functionality to authenticated users.

**Broader implications:** Apache Struts OGNL injection vulnerabilities have been amongst the most impactful web application flaws in cybersecurity history, and their continued discovery highlights the challenge of eliminating entire vulnerability classes from complex frameworks. The Equifax breach, which affected 147 million people, was caused by a Struts OGNL injection. Organizations running Struts applications should maintain heightened vigilance for this vulnerability class and evaluate whether modern framework alternatives could reduce their attack surface.
