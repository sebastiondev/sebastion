---
title: "Weekly threat intelligence digest — 2026-W08"
date: 2026-02-22T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 12 items, 15 CVEs. 1 medium, 10 critical, 1 informational."
tags: [policy, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly Threat Intelligence Digest: 2026-W08 (February 16-22)

## executive summary
This week saw a surge in critical vulnerabilities across multiple industries, with several flaws actively exploited in webmail systems and IoT devices. Notably, the integration of AI into security tools like Claude Code Security marked a significant advancement in automated vulnerability detection. Additionally, new certifications from EC-Council highlight the growing need for workforce reskilling to keep pace with AI adoption.

## critical & high priority
### RoundCube Webmail Critical Vulnerabilities (CVE-2025-49113, CVE-2025-68461)
CISA identified two critical vulnerabilities in RoundCube Webmail, including a deserialization flaw and an XSS vulnerability. These are actively exploited and pose significant risks to federal systems. **Action**: Immediate patching is essential for all affected versions.

### Jinan USR IOT Technology's USR-W610 (CVE-2026-25715, CVE-2026-24455, CVE-2026-26049, CVE-2026-26048)
The USR-W610 device has multiple critical vulnerabilities that allow credential theft, authentication bypass, and denial-of-service. **Action**: Update to version 3.1.1.0 or later.

### Valmet DNA Engineering Web Tools Arbitrary File Read (CVE-2025-15577)
Unauthenticated attackers can exploit this vulnerability to access arbitrary files. **Action**: Apply patches immediately and restrict unauthorized access.

### EnOcean SmartServer IoT Remote Code Execution (CVE-2026-20761, CVE-2026-22885)
Critical vulnerabilities in EnOcean SmartServer IoT versions up to 4.60.009 enable remote code execution and ASLR bypass. **Action**: Upgrade to patched versions.

### Welker OdorEyes System Unauthorized Control (CVE-2026-24790)
A critical vulnerability exposes unauthenticated access to critical functions, risking safety in smart building systems. **Action**: Implement authentication controls and monitor for updates.

## notable developments
### EC-Council Expands AI Certifications
EC-Council introduced four new AI certifications and updated its Certified CISO program to address workforce readiness. With 700,000 workers needing reskilling, this is a significant step toward bridging the AI skills gap.

## vulnerability landscape
This week tracked 240 new CVEs, with critical vulnerabilities accounting for 15 and high severity for 183. The top affected vendors include mjdm (4), Jinan (4), wavlink (3), and RoundCube (2). A notable trend is the rise in vulnerabilities affecting IoT devices and industrial control systems.

## recommended actions
- **Patch critical vulnerabilities**: Prioritize updates for RoundCube Webmail, USR-W610, Valmet DNA Tools, EnOcean SmartServer, Welker OdorEyes, Delta Electronics ASDA-Soft, GE Vernova Enervista UR Setup, Honeywell CCTV, and Traefik.
- **Monitor for exploits**: Stay updated on actively exploited vulnerabilities like those in RoundCube Webmail and Traefik's TLS bypass flaw.
- **Secure IoT devices**: Implement robust authentication and access controls for devices like the USR-W610 and EnOcean SmartServer.
- **Review access controls**: Address potential account takeovers in Honeywell CCTV products by securing recovery email addresses.
- **Leverage AI tools**: Consider using AI-powered tools like Claude Code Security for automated vulnerability detection and patching.

## looking ahead
Next week, expect continued focus on AI-driven security innovations and critical vulnerabilities in industrial control systems. Look out for potential zero-day exploits in widely used software and increased targeting of smart building infrastructure.