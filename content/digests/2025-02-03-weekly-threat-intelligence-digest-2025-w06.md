---
title: "Weekly threat intelligence digest — 2025-W06"
date: 2025-02-09T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 3 items, 4 CVEs. 2 high, 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly Threat Intelligence Digest: 2025-W06 (February 3 - February 9)

## executive summary
This week, active exploitation of high and critical vulnerabilities dominated the threat landscape. The Zyxel CPE series devices are under attack due to unpatched command injection flaws in end-of-life products, while Cisco addressed critical privilege escalation issues in their ISE. Additionally, Google patched an actively exploited kernel vulnerability in Android. Defenders should prioritize updates for patched systems and manage end-of-life devices carefully.

## critical & high priority

### zyxel cpe devices under active attack via command injection flaws
- **What happened**: Threat actors are exploiting command injection vulnerabilities (CVE-2024-40891) in Zyxel's CPE series devices, which remain unpatched for end-of-life products.
- **Who's affected**: Users of Zyxel CPE devices, particularly those with EOL status, face significant risks due to the lack of vendor support.
- **What to do**: Transition to supported devices if possible. If retention is necessary, implement network segmentation and monitoring.

### cisco patches critical privilege escalation vulnerabilities in ise
- **What happened**: Cisco patched two critical vulnerabilities (CVE-2025-20124, CVE-2025-20125) in Identity Services Engine that allow authenticated attackers to escalate privileges.
- **Who's affected**: Organizations using Cisco ISE are at risk if updates aren't applied promptly.
- **What to do**: Apply patches immediately and review ISE configurations for unauthorized access.

### google android february update patches actively exploited kernel vulnerability
- **What happened**: Google addressed a high-severity USB-video class vulnerability (CVE-2024-53104) in Android, which was being exploited.
- **Who's affected**: Users of Android devices relying on the Linux kernel are at risk if updates aren't applied.
- **What to do**: Update devices promptly and monitor for any additional exploits.

## notable developments
This week saw no new CVEs tracked, but existing vulnerabilities remain critical. The focus should be on patching known issues rather than identifying new ones.

## vulnerability landscape
- **Severity distribution**: All tracked vulnerabilities were high or critical, indicating a severe threat environment.
- **Top vendors**: Zyxel, Cisco, and Google dominated this week's updates, highlighting the importance of vendor patches for widely used products.

## recommended actions
1. **Apply Patches**: Immediately update systems with available patches for Cisco ISE and Android.
2. **Monitor EOL Devices**: Assess risks associated with end-of-life devices like Zyxel CPE and consider migration strategies.
3. **Kernel Updates**: Ensure all Android devices are updated to mitigate the USB-video class vulnerability.

## looking ahead
Next week, expect continued focus on kernel vulnerabilities and potential new exploits for EOL devices. Stay vigilant for updates and maintain proactive security measures.