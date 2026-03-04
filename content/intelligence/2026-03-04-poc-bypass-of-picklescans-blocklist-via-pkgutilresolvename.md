---
title: "Bypass of PickleScan's Blocklist via pkgutil.resolve_name"
date: 2026-03-04T07:14:11+00:00
severity: critical
category: vulnerability
status: active
tldr: "PickleScan's blocklist mechanism is bypassed using `pkgutil.resolve_name`, allowing any blocked function to be executed. This flaw enables universal RCE attacks undetected by PickleScan."
tags: [poc, pickle, security-tool, python]
cves: []
affected: [picklescan <=1.0.3]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-vvpj-8cmc-gx39
---

The vulnerability arises from PickleScan's failure to analyze function arguments and context during deserialization. By using `pkgutil.resolve_name`, an attacker can dynamically resolve any blocked function, executing arbitrary commands without triggering the blocklist.

This PoC demonstrates a universal bypass of PickleScan's security measures, highlighting critical flaws in its detection logic. It proves that even if dangerous functions are listed as blocked, they can be executed through indirect resolution.

Implement checks for the use of `pkgutil.resolve_name` within pickles and monitor for any function invocations that follow such resolutions. Enhance opcode analysis to track argument usage and context during deserialization.

['Modify PickleScan to analyze function arguments and contexts, not just global references.', "Consider blocking the use of `pkgutil.resolve_name` if it's deemed too risky for the tool's security model.", 'Enhance detection mechanisms to track all objects created during deserialization and validate their safety.']

The likelihood of exploitation is high due to the universal nature of the bypass. Threat actors with knowledge of this flaw could target any application relying on PickleScan for pickle file security, making it a critical risk.