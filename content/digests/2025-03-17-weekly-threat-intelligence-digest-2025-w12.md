---
title: "Weekly threat intelligence digest — 2025-W12"
date: 2025-03-23T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 10 items, 9 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: March 17 - 23, 2025

## Executive summary
This week has seen a surge in critical vulnerabilities affecting widely used software and devices, with active exploitation observed shortly after disclosure. The most significant threats include a remote code execution (RCE) vulnerability in Apache Tomcat and an authorization bypass flaw in Next.js middleware. Additionally, multiple critical issues were reported in D-Link routers, PHPGurukul systems, and TOTOLINK EX1800T devices. These vulnerabilities pose a high threat level, particularly for organizations relying on these technologies.

## Critical & high priority
### [CRITICAL] Critical Apache Tomcat RCE Vulnerability Under Active Exploitation
**What happened:** A critical remote code execution (RCE) vulnerability (CVE-2025-24813) was discovered in Apache Tomcat. Attackers can exploit this flaw by uploading malicious serialized session data via partial PUT requests, leading to arbitrary code execution on vulnerable servers.

**Who's affected:** This vulnerability impacts Apache Tomcat versions 9.0.0-M1 to 9.0.98, 10.1.0-M1 to 10.1.34, and 11.0.0-M1 to 11.0.4.

**What to do:** 
- Immediately apply the official security patches provided by Apache Tomcat.
- Temporarily disable or restrict access to affected services until patched.
- Monitor for any signs of exploitation in your environment.

### [CRITICAL] Critical Next.js Middleware Authorization Bypass Vulnerability
**What happened:** A critical authorization bypass vulnerability (CVE-2025-29927) was found in Next.js middleware. Attackers can manipulate the `x-middleware-subrequest` header to bypass security checks, granting unauthorized access to protected routes and resources.

**Who's affected:** All Next.js applications utilizing middleware for authorization are at risk.

**What to do:**
- Update to the latest version of Next.js that includes the fix.
- Review and reinforce your middleware-based security controls.
- Monitor logs for any suspicious activity related to header manipulation.

### [CRITICAL] D-Link DIR-823G Remote Exploitation Vulnerabilities
**What happened:** Two critical vulnerabilities (CVE-2025-2359 and CVE-2025-2360) in the D-Link DIR-823G router were disclosed. Both flaws allow remote attackers to manipulate SOAPAction arguments, leading to improper authorization and potential attacks.

**Who's affected:** Users of D-Link DIR-823G 1.0.2B05_20181207 firmware versions.

**What to do:**
- Apply the official firmware updates provided by D-Link.
- Disable unnecessary services or features exposed via SOAPAction.
- Conduct a security assessment of your IoT devices to identify and mitigate similar risks.

## Notable developments
### Rise in Apache Tomcat Exploitation
Security researchers have observed rapid exploitation attempts against CVE-2025-24813 within 30 hours of its disclosure. This highlights the importance of prompt patching for organizations using Apache Tomcat.

### Increased Focus on IoT Device Vulnerabilities
The vulnerabilities in TOTOLINK EX1800T (CVE-2025-2369 and CVE-2025-2370) underscore the growing threat landscape targeting IoT devices. Attackers are actively seeking to exploit these flaws for potential remote control or data breaches.

### SQL Injection Trends in Healthcare
Multiple critical SQL injection vulnerabilities were reported in PHPGurukul systems, including those affecting password recovery pages and visitor management systems (CVE-2025-2372, CVE-2025-2379, and CVE-2025-2380). These issues pose significant risks to healthcare data integrity.

### Importance of Patch Management
The disclosed vulnerabilities emphasize the criticality of robust patch management processes. Organizations must prioritize updates for their frameworks and devices to mitigate exposure to such threats.

## Vulnerability landscape
### Total New CVEs Tracked This Week: 2
- **Critical Severity:** 2 (100% of tracked CVEs)

### Top Affected Vendors:
- Next.js: 1 critical vulnerability
- Apache Tomcat: 1 critical vulnerability
- D-Link: 2 critical vulnerabilities

### Notable Patterns:
- Multiple vulnerabilities in widely used frameworks and IoT devices.
- Rapid exploitation attempts post-disclosure, particularly for Apache Tomcat.

## Recommended actions
1. **Patch Apache Tomcat Immediately:** Apply the latest security updates to mitigate CVE-2025-24813. Temporarily disable affected services if patches are not yet applied.
2. **Update Next.js Middleware:** Install the patched version of Next.js to address CVE-2025-29927 and review middleware configurations for any potential bypasses.
3. **Secure D-Link Routers:** Apply firmware updates for DIR-823G devices and disable unnecessary SOAP-based services.
4. **Monitor for Tomcat Exploitation:** Implement network monitoring to detect and block suspicious activity related to partial PUT requests targeting Apache Tomcat instances.
5. **Review PHPGurukul Systems:** Address SQL injection vulnerabilities by applying patches and conducting thorough code reviews, especially in password recovery and admin profile sections.
6. **Enhance IoT Device Security:** For TOTOLINK EX1800T users, apply firmware updates and consider network segmentation to isolate devices from critical systems.
7. **Strengthen Authorization Controls:** In light of the Next.js vulnerability, ensure that all middleware-based authorization mechanisms are robust and free from header manipulation vulnerabilities.

## Looking ahead
Next week is expected to see increased exploitation attempts against the disclosed vulnerabilities, particularly in Apache Tomcat and D-Link devices. Additionally, attackers may shift focus to other widely used frameworks or CMS systems. Organizations should remain vigilant, prioritize patches, and maintain a proactive security posture to mitigate emerging threats.