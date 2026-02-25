---
title: "Node.js VM Sandbox Escape in OneUptime Leading to RCE"
date: 2026-02-25T07:09:15+00:00
severity: critical
category: vulnerability
status: active
tldr: "OneUptime's use of Node.js vm module for executing untrusted code allows sandbox escape and full cluster compromise, highlighting the risks of improper isolation mechanisms."
tags: [poc, nodejs, vm, rce, sandbox-escape]
cves: [CVE-2026-27574]
affected: [OneUptime/oneuptime]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-v264-xqh4-9xmm
---

The vulnerability arises from the use of Node.js's `vm` module to execute user-provided JavaScript code without proper validation or sandboxing. The `vm.runInContext()` method is not designed as a security mechanism, allowing malicious code to escape the sandbox and gain full process control. This leads to unauthorized access to sensitive environment variables and potential cluster-wide compromise.

The proof-of-concept demonstrates that any project member can inject arbitrary JavaScript, leading to complete system takeover. It underscores the importance of validating untrusted code inputs and using secure execution environments for such operations.

Monitor for unexpected process behavior, network traffic originating from probe instances, and unauthorized access attempts to sensitive resources. Implement logging and alerts for any changes in environment variable usage or unusual process activity within the probe.

Replace the use of `vm` module with a secure sandboxing solution designed for untrusted code execution. Enforce strict input validation on `customCode`, including AST analysis and keyword filtering to prevent malicious scripts from being executed.

The likelihood of exploitation is high due to the ease of achieving RCE and potential access to sensitive credentials. This makes it a critical vulnerability, especially for organizations managing clusters with valuable resources.