---
title: "GE Vernova Enervista UR Setup Critical Vulnerabilities Enable Remote Code Execution"
date: 2026-02-22T15:51:53+00:00
severity: critical
category: vulnerability
status: active
tldr: "Critical vulnerabilities in GE Vernova Enervista UR Setup versions below 8.70 allow remote code execution with elevated privileges, posing significant risks to industrial control systems."
tags: [ge vernova, enervista ur setup, industrial control system, software vulnerability, critical infrastructure]
cves: [CVE-2026-1762, CVE-2026-1763]
affected: [GE Vernova Enervista UR Setup <8.70]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-048-03
---

The GE Vernova Enervista UR Setup software, versions below 8.70, are exposed to critical vulnerabilities (CVE-2026-1762 and CVE-2026-1763) that enable uncontrolled search path manipulation and directory traversal attacks. These flaws allow attackers to execute arbitrary code with elevated privileges, potentially leading to system compromise or disruption of industrial processes. The vulnerabilities stem from improper handling of file paths, specifically through the '.../...//' pattern, which can be exploited to bypass intended access restrictions.

Industrial control systems (ICS) like those managed by GE Vernova are critical to energy production and distribution. Successful exploitation could lead to cascading failures in power generation facilities, posing significant risks to public safety and economic stability. Given the nature of these vulnerabilities, attackers with moderate technical skill could potentially target these systems, making this a pressing concern for operators.

Defenders should immediately update affected software to version 8.70 or higher. If updates are not feasible, implementing network segmentation, restricting access to ICS networks, and enhancing monitoring capabilities are critical steps to mitigate risks. Given the potential impact on critical infrastructure, this vulnerability highlights the need for greater focus on securing industrial control systems against remote exploitation threats.