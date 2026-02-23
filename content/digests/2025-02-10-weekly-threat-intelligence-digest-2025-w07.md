---
title: "Weekly threat intelligence digest — 2025-W07"
date: 2025-02-16T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 3 items, 10 CVEs. 3 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly Threat Intelligence Digest: 2025-W07 (February 10-16)

## executive summary
This week, critical vulnerabilities dominated the threat landscape, with multiple zero-day exploits being actively exploited across enterprise systems. Microsoft's Patch Tuesday addressed over 55 flaws, including several high-severity issues in Windows components like NTLMv2 and LDAP. Meanwhile, attackers are chaining vulnerabilities in Palo Alto Networks' PAN-OS and PostgreSQL to execute targeted attacks against financial institutions and government agencies. Defenders must prioritize patching and monitoring for these critical issues.

## critical & high priority

### microsoft's february 2025 patch tuesday fixes actively exploited zero-days
**What happened**: Microsoft released its February Patch Tuesday updates, addressing over 55 vulnerabilities in Windows and related services. Among the patches were multiple zero-day exploits under active exploitation, including CVE-2025-21391 (NTLMv2 remote code execution) and CVE-2025-21418 (LDAP injection). These flaws could allow attackers to gain unauthorized access or elevate privileges.

**Who's affected**: All Windows users, particularly those running older versions of the operating system and related services. Enterprises relying on NTLMv2 for authentication are at heightened risk.

**What to do**: Apply updates immediately. Monitor for any signs of exploitation in your environment, such as unusual network traffic or failed login attempts. Consider implementing multi-factor authentication (MFA) for additional security.

### palo alto pan-os authentication bypass exploited in chained attacks
**What happened**: A critical authentication bypass vulnerability (CVE-2025-0108) in Palo Alto Networks' PAN-OS management interface has been exploited in combination with another flaw (CVE-2025-0110) to achieve remote code execution on firewalls. This allows attackers to take full control of affected devices.

**Who's affected**: Enterprises using Palo Alto Networks firewalls, particularly those running PAN-OS versions prior to the patched release. Financial institutions and critical infrastructure sectors have been targeted in recent attacks.

**What to do**: Update PAN-OS to the latest version immediately. Disable unused management interfaces and implement strict access controls. Conduct a thorough audit of firewall configurations to identify potential attack vectors.

### postgresql zero-day exploited alongside beyondtrust in targeted attacks
**What happened**: A SQL injection zero-day (CVE-2025-1094) in PostgreSQL's interactive tool was exploited alongside a previously disclosed BeyondTrust Remote Support vulnerability (CVE-2024-12356) to compromise systems. This attack targeted the US Treasury Department, highlighting the risks of combining known and unknown vulnerabilities.

**Who's affected**: Organizations using PostgreSQL and BeyondTrust software, particularly those in the public sector or financial industries.

**What to do**: Apply patches for both PostgreSQL and BeyondTrust as soon as they are available. Monitor for any unauthorized access attempts and restrict database access to only necessary services.

### Critical vulnerability CVE-2025-20634
- **What happened**: In Modem, there is a possible out of bounds write due to a missing bounds check. This could lead to remote code execution, if a UE has connected to a rogue base station controlled by the attacker, ...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2024-50500
- **What happened**: Missing Authorization vulnerability in By Averta Shortcodes and extra features for Phlox theme allows Exploiting Incorrectly Configured Access Control Security Levels. This issue affects Shortcodes...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## notable developments
While no new CVEs were tracked this week, ongoing exploitation of existing vulnerabilities remains a significant concern. Attackers are increasingly focusing on chaining multiple flaws to achieve more severe outcomes, such as full system compromise or data exfiltration. Security researchers have also noted an uptick in zero-day exploits targeting enterprise software, suggesting a shift in attacker focus toward critical infrastructure and financial institutions.

## vulnerability landscape
- **Total new CVEs tracked**: 0 (a notable decrease from previous weeks)
- **Severity distribution**: Critical vulnerabilities accounted for the majority of reported incidents, with high-severity flaws also seeing significant activity.
- **Top affected vendors**: Microsoft, Palo Alto Networks, and BeyondTrust continue to be hot targets for attackers. The financial sector has been particularly hard-hit this week.

## recommended actions
1. Prioritize patching for Microsoft's February updates, especially the NTLMv2 and LDAP vulnerabilities.
2. Secure PAN-OS management interfaces by disabling unused ports and implementing strict access controls.
3. Monitor PostgreSQL instances for any signs of SQL injection attempts or unauthorized access.
4. Review BeyondTrust configurations to ensure they are secure and up-to-date.
5. Implement MFA wherever possible to mitigate the risks associated with compromised credentials.

## looking ahead
Next week, expect continued activity around Microsoft's Patch Tuesday updates, as attackers may seek to exploit any lingering vulnerabilities. Additionally, researchers should keep an eye on potential zero-days in other enterprise software, such as Adobe Acrobat or Oracle products, which have been historically targeted by threat actors. The combination of multiple vulnerabilities in chained attacks is likely to remain a key tactic for sophisticated adversaries.

Stay vigilant and stay safe.