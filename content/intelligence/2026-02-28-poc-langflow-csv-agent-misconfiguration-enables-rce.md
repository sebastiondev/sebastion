---
title: "Langflow CSV Agent Misconfiguration Enables RCE"
date: 2026-02-28T07:12:51+00:00
severity: critical
category: vulnerability
status: active
tldr: "The Langflow CSV Agent hardcodes a flag that enables arbitrary code execution, posing a severe security risk."
tags: [poc, langflow, csv-agent, rce]
cves: [CVE-2026-27966]
affected: [Langflow]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-3645-fxcv-hqr4
---

1. **Vulnerability Description**: The CSV Agent in Langflow has a hardcoded `allow_dangerous_code=True`, enabling the Python REPL tool (`python_repl_ast`). This allows attackers to inject and execute arbitrary OS commands, leading to RCE.
2. **PoC Significance**: The PoC demonstrates that an attacker can trigger RCE by sending specific prompts, highlighting critical security flaws in Langflow's default configuration.
3. **Detection Guidance**: Monitor for unauthorized use of `python_repl_ast` actions and unexpected system commands in logs. Implement strict access controls on the CSV Agent.
4. **Mitigation Steps**: Disable `allow_dangerous_code` by default, provide a toggle for it, and regularly audit Langflow configurations.
5. **Risk Assessment**: High likelihood of exploitation due to ease of attack vectors; critical risk as RCE can lead to full system compromise.