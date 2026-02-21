---
title: "Massive Outage of Nessus Agents Due to Buggy Plugin Updates"
date: 2025-01-03T11:05:00+00:00
severity: high
category: tool
status: active
tldr: "Tenable's buggy differential plugin updates caused global outages of Nessus vulnerability scanner agents, requiring manual upgrades for revival."
tags: [tenable, nessus, vulnerability-scanning, outage]
cves: []
affected: [Nessus Vulnerability Scanner]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/bad-tenable-plugin-updates-take-down-nessus-agents-worldwide/
---

**What Happened:**

On December 31st, 2024, Tenable released buggy differential plugin updates for Nessus agents worldwide. These updates caused the agents to go offline, resulting in widespread outages.

**Technical Details:**

The issue lies within the differential plugin updates meant to improve scan performance. However, these updates contained a flaw that rendered agents unresponsive. Tenable has since pulled the problematic updates and released fixed versions.

**Who is Affected:**

All Nessus users who had automatic updates enabled are affected. This includes businesses, governments, and other organizations worldwide that rely on Nessus for vulnerability management.

**What Defenders Should Do:**

1. Manually upgrade Nessus agents to the latest version (10.4.2 or later) to revive offline agents.
2. Disable automatic updates temporarily to prevent further issues until Tenable provides clear guidance.
3. Contact Tenable support for assistance if needed.

**Broader Implications:**

This outage highlights the importance of thorough testing and quality assurance in software updates, especially for critical security tools like Nessus. It also serves as a reminder that relying solely on automatic updates can introduce risks. Organizations should consider implementing manual approval processes for critical updates.