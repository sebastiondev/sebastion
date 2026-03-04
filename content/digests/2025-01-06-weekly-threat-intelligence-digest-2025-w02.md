---
title: "Weekly threat intelligence digest — 2025-W02"
date: 2025-01-12T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 5 items, 6 CVEs. 2 critical."
tags: [campaign, policy, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: January 6 - 12, 2025

## Executive summary
This week, cybersecurity threats reached a critical level with the active exploitation of zero-day vulnerabilities in high-profile products. The most significant developments include a critical stack-based buffer overflow vulnerability in Ivanti Connect Secure VPN appliances, which is being exploited by a China-nexus threat actor. Additionally, Moxa industrial networking devices were found to be impacted by multiple critical flaws, potentially exposing OT and ICS infrastructure to root-level access. Other notable vulnerabilities include unrestricted file uploads in My-Blog 1.0, stored XSS in Grocy, and SQL injection flaws in code-projects Online Book Shop. The overall threat level remains high due to the combination of actively exploited zero-days and newly disclosed critical vulnerabilities.

## Critical & high priority
### [CRITICAL] Ivanti Connect Secure Zero-Day Actively Exploited in the Wild
**What happened:** A critical stack-based buffer overflow vulnerability (CVE-2025-0282) was discovered in Ivanti Connect Secure, Policy Secure, and Neurons for ZTA gateways. The flaw allows unauthenticated remote code execution, making it highly dangerous for any exposed device. Mandiant confirmed that this zero-day has been actively exploited since mid-December 2024 by UNC5337, a suspected Chinese espionage group.

**Who's affected:** Organizations using Ivanti Connect Secure (versions before 22.7R2.5), Policy Secure, and Neurons for ZTA gateways are at risk. These products are widely used in enterprise environments for secure remote access.

**What to do:** Immediately apply the patch provided by Ivanti (version 22.7R2.5 or later) and disable unnecessary services on affected devices. Conduct a thorough network sweep to identify any unpatched instances and implement temporary mitigations, such as restricting access to the vulnerable web interface.

### [CRITICAL] Moxa Industrial Networking Devices Impacted by Critical Vulnerabilities
**What happened:** Moxa issued urgent security advisories for two critical vulnerabilities in their EDS-508A, EDR-810, NAT-102, and OnCell series devices. The flaws include a hard-coded credentials vulnerability (CVE-2024-9138) and an OS command injection flaw (CVE-2024-9140), both of which can lead to root access and arbitrary command execution.

**Who's affected:** Industrial organizations relying on Moxa devices for networking and OT/ICS infrastructure are at significant risk. These vulnerabilities could enable attackers to disrupt or manipulate critical industrial processes.

**What to do:** Apply the patches provided by Moxa as soon as possible. Temporarily disable any exposed devices or isolate them from untrusted networks until patched. Conduct a security assessment of all industrial networking devices to identify and mitigate similar risks.

### [CRITICAL] Unrestricted File Upload Vulnerabilities in My-Blog 1.0
**What happened:** Two critical vulnerabilities (CVE-2024-13144 and CVE-2024-13145) were disclosed in the upload functionality of zhenfeng13 My-Blog 1.0. Both flaws allow remote attackers to upload arbitrary files, potentially leading to server compromise or data theft.

**Who's affected:** Blog administrators using My-Blog 1.0 are at risk, particularly those hosting public-facing sites without proper security measures.

**What to do:** Upgrade to a newer version of My-Blog if available. If no patch is available, implement strict file upload restrictions and use Web Application Firewalls (WAFs) to block malicious uploads. Conduct regular security audits to identify similar vulnerabilities in other web applications.

## Notable developments
### [MEDIUM] Stored XSS and Privilege Escalation in Grocy
**What happened:** A stored XSS vulnerability was discovered in the edit profile function of Grocy through version 4.3.0. The flaw allows attackers to upload crafted HTML or SVG files, leading to privilege escalation.

**Who's affected:** Users of Grocy versions prior to 4.3.1 are at risk, particularly those running community editions without proper security monitoring.

**What to do:** Upgrade to Grocy 4.3.1 or later and implement input validation for user-uploaded content. Conduct a thorough review of all file upload processes in your environment.

### [INFORMATIONAL] Redis Lua Script Remote Code Execution
**What happened:** A vulnerability (CVE-2024-55074) was found in Redis versions prior to 7.4.2, 7.2.7, and 6.2.17. An authenticated user could execute malicious Lua scripts to manipulate the garbage collector, potentially leading to remote code execution.

**Who's affected:** Organizations using Redis for in-memory database services are at risk if they allow untrusted users to execute Lua scripts.

**What to do:** Apply the official patches and restrict access to Lua scripting unless explicitly required. Consider alternative mitigation strategies, such as disabling the Lua module or implementing rate limiting on script execution.

## Vulnerability landscape
This week saw a sharp increase in critical vulnerabilities across multiple product lines. The NVD tracked **3 new CVEs**, all classified as critical:
- **Ivanti Connect Secure (CVE-2025-0282)**: CVSS 10.0, actively exploited.
- **Moxa EDS-508A/EDR-810/NAT-102 (CVE-2024-9138/CVE-2024-9140)**: Both CVSS 8.6, with active exploitation and significant impact on OT/ICS.
- **My-Blog 1.0 (CVE-2024-13144/CVE-2024-13145)**: CVSS 6.3 each, but with high exploitability due to public disclosure.

The top affected vendors were:
- **Moxa**: 2 critical vulnerabilities.
- **Ivanti**: 1 critical vulnerability.
- **US (unspecified vendor)**: 1 critical vulnerability.

Notable patterns include the rise of zero-day exploits in industrial control systems and the continued focus on web application vulnerabilities, particularly file upload flaws.

## Recommended actions
1. **Patch Ivanti Connect Secure immediately**: Apply Ivanti’s patch for CVE-2025-0282 to all affected gateways.
2. **Secure Moxa devices**: Apply patches for CVE-2024-9138 and CVE-2024-9140, isolate industrial networks, and conduct a security audit of OT/ICS infrastructure.
3. **Upgrade My-Blog 1.0**: Address the unrestricted file upload vulnerabilities (CVE-2024-13144/CVE-2024-13145) by upgrading or implementing temporary mitigations like WAFs.
4. **Mitigate Redis Lua script risks**: Apply patches and restrict access to the Lua module unless necessary for business operations.
5. **Review file upload processes**: Across all web applications, ensure that file uploads are properly constrained and validated.
6. **Monitor for zero-day activity**: Keep an eye on Ivanti Connect Secure exploitation attempts and prepare for potential incident response.
7. **Enhance OT/ICS security**: Implement network segmentation and monitoring for industrial devices to reduce the impact of Moxa vulnerabilities.

## Looking ahead
Next week, we should expect continued focus on critical infrastructure and zero-day exploits, particularly in industrial systems. Additionally, researchers may disclose additional vulnerabilities in widely used software like Redis or web applications, so staying updated with vendor advisories will be crucial. Organizations should also prepare for potential follow-up activity from UNC5337, the threat actor exploiting Ivanti’s zero-day.

In conclusion, this week underscored the importance of proactive vulnerability management and incident response planning. The combination of actively exploited zero-days and newly disclosed critical vulnerabilities highlights the need for continuous vigilance in cybersecurity.