---
title: "Authenticated Remote Code Execution via SSTI in Craft CMS"
date: 2026-03-04T07:10:44+00:00
severity: critical
category: vulnerability
status: active
tldr: "Craft CMS suffers from an authenticated RCE vulnerability due to SSTI in Twig templates, allowing attackers to write malicious scripts to web-accessible directories."
tags: [poc, RCE, SSTI, Twig, Filesystem]
cves: [CVE-2026-28697]
affected: [Craft CMS]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-v47q-jxvr-p68x
---

The vulnerability arises from the exposure of filesystem operations (`craft.app.fs.write()`) in Twig templates, enabling authenticated admins to inject code that writes malicious scripts. The root cause is insufficient sanitization and proper access control around template evaluations.

The PoC demonstrates a direct path to RCE by leveraging SSTI, proving the feasibility of arbitrary code execution. It highlights the importance of securing dynamic content evaluation in administrative interfaces.

[{'type': 'signature', 'description': 'Monitor for unusual file creation/modification attempts in web-accessible directories via logs or file integrity monitoring tools.'}, {'type': 'log', 'description': 'Look for patterns indicating unauthorized writes to files, such as `write()` method calls in log entries from the filesystem module.'}]

[{'type': 'patch', 'description': 'Apply vendor-provided patches to restrict direct filesystem operations through templates and implement proper input validation.'}, {'type': 'configuration', 'description': 'Temporarily disable email template editing or restrict filesystem access in the admin panel until a patch is applied.'}]

High likelihood of exploitation due to RCE potential, especially by threat actors targeting specific installations. The requirement for admin access and knowledge of handles may limit widespread abuse but poses significant risks for targeted attacks.