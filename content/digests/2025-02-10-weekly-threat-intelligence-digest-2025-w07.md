---
title: "Weekly threat intelligence digest — 2025-W07"
date: 2025-02-16T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 12 items, 12 CVEs. 3 critical."
tags: [campaign, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: February 10 - 16, 2025

## Executive summary
This week saw a surge in critical security updates and active exploitation of zero-day vulnerabilities. Microsoft's Patch Tuesday addressed over 55 vulnerabilities, including multiple actively exploited flaws in Windows components like NTLMv2 and LDAP. Palo Alto Networks disclosed a severe authentication bypass in PAN-OS that was quickly chained with other vulnerabilities to achieve remote code execution on firewalls. Additionally, a PostgreSQL SQL injection zero-day was exploited alongside a BeyondTrust Remote Support vulnerability to compromise US Treasury Department systems. Other notable vulnerabilities included critical flaws in SourceCodester and Mayuri K employee management systems, as well as FortiSandbox's cross-site scripting (XSS) issue. The overall threat level remains high due to the rapid exploitation of disclosed vulnerabilities.

---

## Critical & high priority
### [CRITICAL] Microsoft February 2025 Patch Tuesday Fixes Actively Exploited Zero-Days
**What happened:**  
Microsoft released its February 2025 security updates, patching over 55 vulnerabilities across its product portfolio. The update addresses multiple zero-day vulnerabilities under active exploitation, including an elevation of privilege flaw in Windows Storage and a privilege escalation in the Windows Ancillary Function Driver for WinSock.

**Technical details:**  
- **CVE-2025-21391**: A critical elevation of privilege vulnerability in Windows Storage that allows attackers to delete targeted files. This flaw was actively exploited before the patch was released.
- **CVE-2025-21418, CVE-2025-21376, CVE-2025-21377**: Additional critical vulnerabilities in Windows components, including NTLMv2 and LDAP, which were also under active exploitation.

**Who's affected:**  
Windows 10, Windows 11, Windows Server 2022, and Windows Server 2025 users are at risk. These updates impact a wide range of enterprise environments relying on Microsoft products.

**What to do:**  
- Apply the February Patch Tuesday updates immediately to all affected systems.
- Monitor for additional exploitation attempts targeting these vulnerabilities in unpatched environments.
- Consider implementing network segmentation and least privilege policies to mitigate potential attack vectors.

---

### [CRITICAL] Palo Alto PAN-OS Authentication Bypass Exploited in Chained Attacks
**What happened:**  
A critical authentication bypass vulnerability (CVE-2025-0108) was disclosed in Palo Alto Networks' PAN-OS management interface. Within days of the disclosure, threat actors began actively exploiting this flaw by chaining it with previously known vulnerabilities to achieve remote code execution on affected firewalls.

**Technical details:**  
- **CVE-2025-0108**: This vulnerability allows unauthenticated attackers to bypass authentication mechanisms in the PAN-OS web interface. The flaw has a CVSS score of 8.8, making it highly critical.
- Exploitation attempts were observed originating from multiple IP addresses, indicating widespread activity.

**Who's affected:**  
All versions of Palo Alto Networks PAN-OS are vulnerable. This includes firewalls used in enterprise and critical infrastructure environments.

**What to do:**  
- Apply the official PAN-OS updates provided by Palo Alto Networks immediately.
- Review firewall configurations for any signs of unauthorized access or unusual activity.
- Implement additional layers of authentication (e.g., multi-factor authentication) for PAN-OS interfaces to mitigate similar risks in the future.

---

### [CRITICAL] PostgreSQL Zero-Day Exploited Alongside BeyondTrust in Targeted Attacks
**What happened:**  
A previously unknown SQL injection zero-day in PostgreSQL's interactive tool was exploited alongside a known vulnerability in BeyondTrust Remote Support to compromise US Treasury Department systems. This attack highlights the dangers of chaining multiple vulnerabilities for advanced exploitation.

**Technical details:**  
- **CVE-2025-1094**: A critical SQL injection flaw in PostgreSQL's interactive terminal that enables remote code execution.
- The attack leveraged this zero-day alongside a previously disclosed BeyondTrust Remote Support vulnerability to gain unauthorized access to sensitive systems.

**Who's affected:**  
PostgreSQL users, BeyondTrust customers, and the US Treasury Department are at risk. This incident underscores the need for robust database security practices.

**What to do:**  
- Patch PostgreSQL instances with the official updates addressing CVE-2025-1094.
- Review and secure BeyondTrust Remote Support configurations to prevent unauthorized access.
- Conduct a thorough audit of database permissions and network segmentation to isolate critical systems from potential attack vectors.

---

## Notable developments
### [NOTABLE] Multiple Critical Vulnerabilities in Employee Management Systems
**What happened:**  
Several employee management systems were found to contain critical vulnerabilities, including SQL injection flaws that could lead to unauthorized access or data breaches. These include:

- **CVE-2025-1167**: A critical SQL injection vulnerability in Mayuri K Employee Management System up to version 192.168.70.3.
- **CVE-2025-1168**: A critical SQL injection flaw in SourceCodester Contact Manager with Export to VCF 1.0.
- **CVE-2025-1183**: Another critical SQL injection vulnerability in CodeZips Gym Management System 1.0.

**Who's affected:**  
Organizations using these employee management systems are at risk, particularly those in the healthcare and financial sectors where sensitive data is managed.

**What to do:**  
- Apply available patches for these vulnerabilities immediately.
- Conduct a security review of custom or third-party employee management systems to identify potential risks.

---

### [NOTABLE] SolarWinds Server-Side Request Forgery Vulnerability
**What happened:**  
A server-side request forgery (SSRF) vulnerability was identified in SolarWinds Platform, which could allow attackers to manipulate web requests and gain unauthorized access to sensitive data.

**Technical details:**  
- **CVE-2024-52606**: This medium-severity vulnerability has a CVSS score of 3.5 but could still be exploited to disrupt operations or gather sensitive information.

**Who's affected:**  
Organizations using SolarWinds Platform are at risk, particularly those in the energy, healthcare, and financial sectors.

**What to do:**  
- Apply the official patches provided by SolarWinds.
- Monitor for any signs of unauthorized access or异常 network traffic originating from SolarWinds instances.

---

## Vulnerability landscape
### [OVERVIEW] Critical Vulnerabilities in Enterprise Software
This week's updates highlight a concerning trend of critical vulnerabilities in widely used enterprise software. Microsoft's Patch Tuesday addressed multiple actively exploited flaws, while Palo Alto Networks and PostgreSQL faced severe issues that were quickly targeted by attackers. The rapid exploitation of these vulnerabilities underscores the importance of maintaining up-to-date security patches and implementing robust defensive measures.

**Key trends:**
- **Zero-day exploits**: Multiple zero-day vulnerabilities were disclosed and exploited in the wild, including those in Windows, PAN-OS, and PostgreSQL.
- **Chained attacks**: Attackers are increasingly combining multiple vulnerabilities to achieve remote code execution and gain unauthorized access to systems.
- **Enterprise focus**: The majority of critical vulnerabilities this week impacted enterprise-grade software, highlighting the need for stronger security practices in corporate environments.

---

## Recommended actions
### [RECOMMENDATION] Prioritize Patching Critical Vulnerabilities
1. **Microsoft Updates**: Apply February Patch Tuesday updates immediately to all Windows systems.
2. **Palo Alto PAN-OS**: Update PAN-OS firmware to address CVE-2025-0108 and other vulnerabilities.
3. **PostgreSQL**: Patch instances with the official updates for CVE-2025-1094.
4. **Employee Management Systems**: Apply patches for SQL injection vulnerabilities in SourceCodester, Mayuri K, and CodeZips systems.

### [RECOMMENDATION] Monitor Exploit Activity
- Set up monitoring tools to detect any signs of exploitation related to the disclosed vulnerabilities.
- Review network traffic for unusual patterns indicative of attack activity.

### [RECOMMENDATION] Strengthen Authentication Mechanisms
- Implement multi-factor authentication (MFA) for critical systems like PAN-OS and BeyondTrust Remote Support.
- Regularly review and update passwords for all system accounts.

---

## Looking ahead
### [PREDICTION] Increased Exploitation of PostgreSQL Zero-Day
The disclosed PostgreSQL zero-day (CVE-2025-1094) is likely to see widespread exploitation in the coming weeks. Attackers may develop custom tools or frameworks targeting this vulnerability, particularly in financial and government sectors.

### [PREDICTION] Targeted Attacks on Critical Infrastructure
Given the success of chained attacks against PAN-OS and BeyondTrust, threat actors may turn their attention to other enterprise systems used in critical infrastructure. Organizations should prepare for potential APT campaigns leveraging similar techniques.

### [ACTION] Prepare Defenses
- Conduct a security audit focusing on database and network security.
- Collaborate with industry peers to share intelligence on emerging threats.
- Consider implementing zero-trust architecture to minimize the impact of successful attacks.

---

This week's threat landscape serves as a stark reminder of the importance of proactive security measures. Organizations must prioritize patching, monitor for exploitation activity, and adopt defensive strategies to mitigate risks in an increasingly hostile cyber environment.