---
title: "OneUpTime Probe's Insecure VM Execution Leading to RCE"
date: 2026-03-07T07:10:55+00:00
severity: critical
category: vulnerability
status: active
tldr: "The OneUpTime probe executes untrusted user code in an insecure Node.js vm context, allowing attackers to bypass sandboxing and achieve RCE. This PoC highlights the risks of using `vm` for untrusted code execution."
tags: [poc, nodejs, rce, sandbox, vm]
cves: []
affected: [OneUpTime/oneuptime-probe]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-h343-gg57-2q67
---

The vulnerability arises from the use of Node.js's `vm` module to execute user-supplied JavaScript code without proper isolation. The `vm.runInContext()` method is not designed as a secure sandbox, making it trivial for attackers to escape the context and access system-level resources via prototype chain manipulation.

The PoC demonstrates that an attacker can exploit the lack of isolation in the `vm` module to execute arbitrary commands on the host system. This highlights critical flaws in handling untrusted code execution environments, emphasizing the need for secure alternatives like isolated containers or AST filtering.

Monitor for unusual process creations and system calls originating from the probe container. Implement logging of executed scripts and look for patterns indicative of RCE attempts. Consider deploying YARA rules to detect malicious JavaScript payloads targeting Node.js environments.

['Replace `vm.runInContext()` with a secure execution environment like Docker containers or isolated-vm.', 'Sanitize and validate user-provided code to prevent arbitrary code execution.', "Remove sensitive credentials from the probe's environment variables or implement strict access controls.", 'Apply rate limiting on API endpoints accepting user code inputs.']

The likelihood of exploitation is high due to the ease of bypassing the sandbox. Attackers with access to project member privileges could exploit this to compromise the entire cluster, making it a significant target for threat actors aiming for complete system takeover.