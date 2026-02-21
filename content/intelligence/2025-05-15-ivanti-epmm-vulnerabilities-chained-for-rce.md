---
title: "Ivanti EPMM Vulnerabilities Chained for Unauthenticated Remote Code Execution"
date: 2025-05-15T09:35:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Two vulnerabilities in Ivanti Endpoint Manager Mobile can be chained to achieve unauthenticated remote code execution, with active exploitation targeting government and critical infrastructure organizations."
tags: [ivanti, epmm, mobile_device_management, zero-day]
cves: [CVE-2025-4427, CVE-2025-4428]
affected: [Ivanti Endpoint Manager Mobile (EPMM)]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/ivanti-epmm-vulnerabilities-exploited-in-attacks/
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/05/15/ivanti-epmm-vulnerabilities
---

**What happened:** Ivanti disclosed two vulnerabilities in Endpoint Manager Mobile (EPMM, formerly MobileIron Core) that are being chained by attackers for unauthenticated remote code execution. CISA confirmed active exploitation and added both vulnerabilities to the Known Exploited Vulnerabilities catalog. These flaws continue the pattern of critical security issues in Ivanti products that have been repeatedly targeted by sophisticated threat actors.

**Technical details:** CVE-2025-4427 is an authentication bypass in the EPMM API component that allows unauthenticated access to protected resources. CVE-2025-4428 is a remote code execution vulnerability allowing code injection through crafted API requests. When chained, the authentication bypass provides access to the vulnerable API endpoint, which is then exploited to execute arbitrary commands on the server. The root cause involves vulnerability in open-source libraries used within the EPMM product.

**Who is affected:** Organizations using Ivanti EPMM/MobileIron Core for mobile device management across government, healthcare, financial services, and enterprise environments. EPMM manages corporate mobile devices and often contains sensitive configuration data, certificates, and access credentials for managed devices.

**What defenders should do:** Patch to EPMM versions 11.12.0.5, 12.3.0.2, 12.4.0.2, or 12.5.0.1 immediately. Restrict access to the EPMM admin portal and API to trusted networks. Monitor for unauthorized API access and unusual administrative activity. Review managed device configurations for signs of compromise if the server was running an unpatched version.

**Broader implications:** This marks the fifth significant Ivanti vulnerability disclosure in 2025 alone, following previous critical flaws in Connect Secure, Policy Secure, and Cloud Services Appliance. The frequency of critical vulnerabilities across the Ivanti product portfolio is causing many organizations to reevaluate their dependence on Ivanti products and consider alternatives, particularly for government and critical infrastructure deployments.
