---
title: "Exposure of Host Capabilities in OneUptime Synthetic Monitors Leading to RCE"
date: 2026-03-07T07:09:27+00:00
severity: critical
category: vulnerability
status: active
tldr: "OneUptime's Synthetic Monitor allows untrusted Playwright code execution with access to host browser objects, enabling arbitrary executable spawning. This PoC highlights a direct RCE vector bypassing traditional sandbox escapes."
tags: [poc, RCE, Playwright, Synthetic Monitoring, Node.js]
cves: []
affected: [OneUptime/oneuptime]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-4j36-39gm-8vq8
---

The vulnerability arises from untrusted Playwright code execution in the `oneuptime-probe` service, where low-privileged users can access host browser objects. This exposure enables direct RCE via `browser.browserType().launch()`, bypassing traditional sandbox escape mechanisms.

The PoC demonstrates a novel RCE vector by leveraging exposed Playwright capabilities, proving that untrusted code can spawn arbitrary executables on the probe host. Its reliability is high due to direct object access, with preconditions being monitor creation/edit access.

{'monitor_playwright_calls': 'Detect unexpected `browser.browserType().launch()` calls in logs.', 'log_anomalies': 'Look for unusual spikes in monitor test runs or failed executions.'}

{'restrict_access': 'Isolate Playwright code execution and restrict access to host objects.', 'input_validation': 'Implement strict input validation and sanitization for monitor tests.', 'container_isolation': 'Run probe services in controlled environments with minimal privileges.'}

Critical risk due to direct RCE potential. High likelihood of exploitation by threat actors seeking system control, especially given low privilege requirements.