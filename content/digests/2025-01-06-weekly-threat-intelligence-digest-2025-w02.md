---
title: "Weekly threat intelligence digest — 2025-W02"
date: 2025-01-12T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 5 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly Threat Intelligence Digest: 2025-W02 (January 6 - January 12)

## Executive Summary
This week, critical vulnerabilities dominated the threat landscape, with two significant issues impacting industrial and enterprise infrastructure. A zero-day vulnerability in Ivanti Connect Secure VPN appliances is actively exploited for unauthenticated remote code execution, while Moxa industrial networking devices face multiple critical flaws allowing root access to OT/ICS systems.

## Critical & High Priority

### Ivanti Connect Secure Zero-Day Exploitation
- **What Happened**: A critical zero-day vulnerability (CVE-2025-0282) in Ivanti Connect Secure VPN appliances enables unauthenticated remote code execution, giving attackers full system control.
- **Who's Affected**: Organizations using Ivanti Connect Secure are at immediate risk.
- **What to Do**: Apply patches immediately and monitor network traffic for exploitation attempts.

### Moxa Industrial Networking Vulnerabilities
- **What Happened**: Two critical vulnerabilities (CVE-2024-9138, CVE-2024-9140) in Moxa devices allow unauthenticated attackers to gain root access, compromising OT/ICS infrastructure.
- **Who's Affected**: Industrial and critical infrastructure sectors are at risk.
- **What to Do**: Patch affected devices, implement network segmentation, and monitor for unauthorized access.

### Critical vulnerability CVE-2024-13030
- **What happened**: A vulnerability was found in D-Link DIR-823G 1.0.2B05_20181207. It has been rated as critical. This issue affects the function SetAutoRebootSettings/SetClientInfo/SetDMZSettings/SetFirewallSettings...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2024-13035
- **What happened**: A vulnerability has been found in code-projects Chat System 1.0 and classified as critical. This vulnerability affects unknown code of the file /admin/update_user.php. The manipulation of the argum...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable Developments
- **Lack of New CVEs**: No new vulnerabilities were tracked this week, suggesting a potential shift in attacker focus or underreporting. This could indicate a strategic pause before targeting other sectors.

## Vulnerability Landscape
- **Severity Distribution**: All reported vulnerabilities this week were critical, highlighting the severity of targeted infrastructure.
- **Top Affected Vendors**: Ivanti and Moxa are prominent due to their roles in enterprise and industrial security.

## Recommended Actions
1. **Immediate Patching**: Prioritize updates for Ivanti Connect Secure and Moxa devices.
2. **Network Monitoring**: Use SIEM tools to detect exploitation patterns.
3. **Asset Review**: Inventory all devices to ensure no unpatched systems are exposed.

## Looking Ahead
Next week, expect potential new zero-days in healthcare or retail sectors. Stay vigilant for vulnerabilities impacting critical infrastructure and prepare mitigation strategies.

---

This digest provides actionable insights for defenders to address current threats and anticipate future risks.