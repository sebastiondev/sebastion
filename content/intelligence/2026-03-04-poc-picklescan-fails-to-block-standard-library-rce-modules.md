---
title: "PickleScan Fails to Block Standard Library RCE Modules"
date: 2026-03-04T07:12:16+00:00
severity: critical
category: vulnerability
status: active
tldr: "PickleScan v1.0.3 fails to block multiple Python stdlib modules enabling RCE, allowing bypass of security scans."
tags: [poc, python, rce, pickle, security-tool]
cves: []
affected: [picklescan]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-g38g-8gr9-h9xp
---

PickleScan does not block at least 8 Python standard library modules that provide direct arbitrary command execution or code evaluation. These modules include functions like `subprocess.Popen` and `os.system`, which can be exploited to execute arbitrary commands, leading to remote code execution (RCE). The vulnerability arises because PickleScan's blocking mechanism does not account for these modules, allowing malicious pickle files to bypass detection.

The proof-of-concept demonstrates that a malicious pickle file importing these unblocked modules is reported as CLEAN by PickleScan. This highlights the critical nature of the issue, as it allows attackers to execute arbitrary commands without any detection, making it highly reliable and dangerous for all affected deployments.

To detect this vulnerability, monitor for unexpected imports of the listed modules (`uuid`, `_osx_support`, etc.) within your environment. Additionally, inspect logs for subprocess or shell command executions originating from these modules. Implementing network monitoring to detect unusual command execution patterns could also be beneficial.

Upgrade to PickleScan version 1.0.4 or later, which addresses this vulnerability by blocking the identified modules. Apply patches provided by the vendor and ensure all instances are updated promptly. Consider implementing additional security measures such as restricting module imports or using alternative libraries that do not expose similar risks.

The likelihood of exploitation in the wild is high due to the critical severity and ease of exploit. Threat actors with interest in compromising systems relying on PickleScan, particularly those in HuggingFace Hub, are likely to target this vulnerability. The impact is severe, potentially leading to full system compromise.