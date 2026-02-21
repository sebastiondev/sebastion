---
title: "Weekly threat intelligence digest — 2026-W08"
date: 2026-02-22T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 6 items, 7 CVEs. 1 medium, 4 critical, 1 informational."
tags: [policy, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2026-W08 (February 16-22)

## Executive summary  
This week saw a surge in critical vulnerabilities across multiple high-profile systems, including webmail platforms and IoT devices. The rapid adoption of AI-powered security tools like Claude Code Security highlights the growing role of artificial intelligence in vulnerability detection and remediation. However, defenders must remain vigilant as attackers exploit newly disclosed flaws in RoundCube Webmail and Valmet DNA Web Tools. Additionally, the expansion of AI certifications by EC-Council underscores the importance of upskilling the cybersecurity workforce to keep pace with advancing threats.

## Critical & high priority  

### 1. **Critical vulnerabilities in RoundCube Webmail**  
CISA added two critical vulnerabilities (CVE-2025-49113 and CVE-2025-68461) to its Known Exploited Catalog, both actively exploited in the wild. These flaws include a deserialization issue and an XSS vulnerability, posing severe risks to federal systems using RoundCube Webmail.  
**Impact:** Unpatched instances are at high risk of remote code execution and data manipulation.  
**Recommendation:** Apply patches immediately and monitor for additional updates.

### 2. **Critical flaws in Jinan USR IOT Technology's USR-W610 device**  
Four critical vulnerabilities (CVE-2026-25715, CVE-2026-24455, CVE-2026-26049, and CVE-2026-26048) were disclosed in the USR-W610 IoT device. These flaws allow attackers to steal credentials, disable authentication, or trigger denial-of-service conditions.  
**Impact:** Devices running versions <=3.1.1.0 are vulnerable to unauthorized access and service disruption.  
**Recommendation:** Update firmware immediately and isolate affected devices until patches are applied.

### 3. **Arbitrary file read vulnerability in Valmet DNA Web Tools**  
A critical vulnerability (CVE-2025-15577) in Valmet DNA Engineering Web Tools enables unauthenticated attackers to read arbitrary files, exposing sensitive data.  
**Impact:** This flaw could lead to unauthorized access to configuration files and other sensitive information.  
**Recommendation:** Apply patches and restrict access to web interfaces until vulnerabilities are addressed.

## Notable developments  

### 1. **AI-powered vulnerability scanning with Claude Code Security**  
Anthropic introduced Claude Code Security, an AI-powered tool that scans codebases for vulnerabilities and suggests patches. This marks a significant leap in automated security testing, potentially reducing the time-to-patch for critical issues.  
**Impact:** While not yet available to all users, this tool could revolutionize how developers handle vulnerability remediation.  
**Recommendation:** Security teams should explore integrating AI-powered tools like Claude Code Security into their workflows.

### 2. **EC-Council expands AI certifications**  
The EC-Council introduced four new AI certifications and updated its Certified CISO program to address workforce readiness in AI-driven security environments.  
**Impact:** With 700,000 U.S. workers needing reskilling, these certifications aim to bridge the gap between AI adoption and human expertise.  
**Recommendation:** Organizations should prioritize upskilling their teams with AI-focused certifications.

## Vulnerability landscape  

This week tracked **145 new CVEs**, with a notable rise in critical vulnerabilities (7). High-severity flaws dominated the landscape, highlighting the growing sophistication of attackers targeting webmail and IoT systems. The top affected vendors include:  
- **Jinan:** 4 vulnerabilities in USR-W610 devices.  
- **mjdm:** 4 vulnerabilities across multiple products.  
- **wavlink:** 3 vulnerabilities affecting network devices.  

The concentration of critical flaws underscores the need for proactive patch management and threat intelligence monitoring.

## Recommended actions  

1. **Patch critical vulnerabilities immediately**  
   - Apply updates for RoundCube Webmail, USR-W610, and Valmet DNA Web Tools to mitigate active exploits.  
2. **Adopt AI-powered security tools**  
   - Explore tools like Claude Code Security to accelerate vulnerability detection and remediation.  
3. **Invest in workforce training**  
   - Prioritize AI certifications for your team to stay ahead of emerging threats.  
4. **Monitor vulnerability databases**  
   - Regularly check CISA's Known Exploited Catalog and NVD for new entries impacting your environment.

## Looking ahead  

Next week, expect:  
- **More AI security tools:** Anthropic and other vendors may release additional AI-driven security solutions.  
- **Supply chain attacks:** With multiple vulnerabilities in mjdm and Jinan products, attackers may target third-party dependencies.  
- **IoT exploits:** The disclosure of USR-W610 flaws suggests continued focus on IoT devices as attack vectors.  

Defenders should remain agile to counter evolving threats and leverage emerging AI capabilities for defense. Stay tuned for more updates!