---
title: "Weekly threat intelligence digest — 2026-W10"
date: 2026-03-08T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 38 items, 5 CVEs. 31 critical, 5 high, 2 informational."
tags: [campaign, malware, policy, supply-chain, threat-intelligence, tool, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: March 2-8, 2026

## Executive summary
This week, cyber threats have intensified across multiple vectors, with critical vulnerabilities and campaigns highlighting the growing sophistication of attackers. The adoption of AI in cyberattacks has reached new levels, enabling more scalable and stealthy operations. Supply chain attacks continue to rise, with malicious crates and npm packages targeting developers. Critical vulnerabilities in Fortinet, Windows, and healthcare systems underscore the need for urgent patching. Defenders must prioritize incident response readiness and adopt proactive measures to mitigate emerging risks.

## Critical & high priority
### Fortinet breach leverages AI-powered tool
Fortinet's vulnerability was exploited using CyberStrikeAI, an AI-driven penetration testing tool. This attack highlights how attackers are increasingly adopting advanced tools to bypass traditional security measures. The breach affects Fortinet customers globally, potentially exposing sensitive network configurations. Immediate patching of Fortinet devices is critical.

### Google Workspace phishing campaign bypasses MFA
A new phishing campaign targeting Google Workspace users leverages a malicious Chrome extension to steal credentials despite multi-factor authentication (MFA). This attack underscores the need for robust endpoint security and user education to mitigate such threats.

### OpenClaw gateway vulnerabilities
Critical path traversal and insecure deserialization flaws in OpenClaw gateway software allow arbitrary file reads and remote code execution. These issues could expose sensitive data and system resources, posing a significant risk to IoT and industrial control systems.

## Notable developments
- **Bitwarden passkey login enhancement**: While the introduction of passkey-based authentication is a positive step for security, it also introduces new risks if not properly secured against phishing attempts.
- **Cisco FMC root access exploit**: A critical vulnerability in Cisco's Firepower Management Center (FMC) allows attackers to gain full system control. This issue highlights the importance of securing network management systems.

## Vulnerability landscape
This week saw 308 new CVEs tracked, with a majority classified as high severity (235). Critical vulnerabilities accounted for only 5 entries, indicating that most risks remain in the high-severity category. Top affected vendors include Tenda (7), D-Link (7), and Carmelo (7), suggesting ongoing issues with IoT devices and networking equipment.

The vulnerability database also revealed a concerning trend: supply chain attacks are on the rise, with multiple entries linked to malicious crates and npm packages targeting developers and CI/CD pipelines. This underscores the need for robust dependency management practices.

## Recommended actions
1. **Patch critical vulnerabilities**: Prioritize updates for Fortinet devices, Windows ACPX handling, and OpenClaw gateways.
2. **Monitor AI-driven attacks**: Stay alert to the use of AI tools like CyberStrikeAI in penetration testing and offensive operations.
3. **Secure supply chains**: Implement strict controls over package repositories and dependency management systems to mitigate supply chain risks.
4. **Enhance phishing defenses**: Deploy endpoint detection and response (EDR) solutions and educate users about advanced phishing tactics.

## Looking ahead
Next week, expect increased activity around:
- The impact of AI tools like ChatGPT-4 on cyberattack strategies.
- Potential escalations in state-sponsored attacks amid regional tensions in the Middle East and Eastern Europe.
- Further supply chain compromises in software development ecosystems.
- Patch releases for critical vulnerabilities in iOS and healthcare IT systems.

Defenders should remain vigilant and prepare for a potential surge in ransomware activity targeting SaaS providers and critical infrastructure.
