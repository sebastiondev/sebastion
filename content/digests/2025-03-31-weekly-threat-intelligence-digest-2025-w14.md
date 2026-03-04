---
title: "Weekly threat intelligence digest — 2025-W14"
date: 2025-04-06T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 5 items, 4 CVEs. 1 high."
tags: [campaign, threat-intelligence, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: March 31 - April 6, 2025

## Executive summary
This week, Fortinet FortiGate devices emerged as a critical vector for persistent backdoor attacks, with threat actors maintaining unauthorized read-only access despite firmware updates. Additionally, multiple high-severity vulnerabilities were disclosed across various web frameworks and applications, including unrestricted file uploads in WCMS 11, Project Worlds Online Time Table Generator, and PHPGurukul e-Diary Management System. The week also saw the disclosure of an XSS vulnerability in Beego, a widely used Go web framework, and a patch for a SSRF issue in MobSF. Overall, the threat landscape remains highly active, with attackers targeting both enterprise infrastructure and open-source tools.

## Critical & high priority
### Fortinet FortiGate Persistent Backdoor Exploit
**What happened:**  
Fortinet and CISA disclosed that threat actors have been exploiting a vulnerability in FortiGate devices to maintain persistent read-only access. The attackers created symbolic links in the SSL-VPN language file directories, linking the user filesystem to the root filesystem. This allowed them to bypass remediation efforts and retain access even after firmware updates.

**Who's affected:**  
Organizations using Fortinet FortiGate devices with SSL-VPN enabled are at risk. While no specific exploit code has been released, the vulnerability is actively being exploited in the wild.

**What to do:**  
1. Apply the latest firmware patches immediately.  
2. Monitor network traffic for any unauthorized access attempts.  
3. Segment FortiGate devices from critical networks to mitigate potential lateral movement.  

---

### Multiple Critical Unrestricted File Upload Vulnerabilities
**What happened:**  
Several high-severity vulnerabilities were disclosed this week, all involving unrestricted file upload capabilities in various web applications:  

- **WCMS 11 (CVE-2025-2978):** Attackers can exploit a remote file inclusion vulnerability in the Article Publishing Page component.  
- **Project Worlds Online Time Table Generator (CVEs 2025-3040, 2025-3041, 2025-3042):** Multiple unrestricted file upload vulnerabilities exist across different administrative and user-facing interfaces.  
- **PHPGurukul e-Diary Management System (CVE-2025-3006):** A critical SQL injection vulnerability was found in the edit-category.php interface.  

**Who's affected:**  
Educational institutions, content management platforms, and academic software providers using these systems are at risk.  

**What to do:**  
1. Immediately patch all affected components with vendor-provided updates.  
2. Disable unnecessary file upload features or implement strict validation for uploaded files.  
3. Conduct thorough audits of web application permissions to prevent unauthorized access.  

---

### Beego Framework XSS Vulnerability
**What happened:**  
A critical XSS vulnerability (CVE-2025-30223) was disclosed in the Beego framework, affecting its RenderForm() function. The issue arises from improper HTML escaping of user-controlled data, allowing attackers to inject malicious scripts into victim browsers.

**Who's affected:**  
Developers and organizations using Beego for web application development are exposed to potential session hijacking and credential theft attacks.

**What to do:**  
1. Update to Beego version 2.3.6 or later.  
2. Review all user-facing forms and inputs for proper escaping mechanisms.  
3. Implement Content Security Policies (CSP) to mitigate XSS risks in production environments.  

---

## Notable developments
### MobSF SSRF Mitigation Released
**What happened:**  
The Mobile Security Framework (MobSF) released a patch for CVE-2024-29190, addressing an SSRF vulnerability that could be exploited via DNS rebinding attacks. The mitigation now uses `socket.gethostbyname()` to prevent unauthorized network requests.

**Who's affected:**  
Security researchers and organizations using MobSF for mobile app analysis are advised to update to version 4.3.2.

**What to do:**  
1. Apply the patch immediately.  
2. Test all custom scripts running on MobSF to ensure they function correctly after the update.  

---

## Vulnerability landscape
### CVE Statistics for the Week
- **Total CVEs Added:** 10  
- **Critical Vulnerabilities (CVSS ≥7.0):** 7  
- **High Vulnerabilities (CVSS ≥5.0):** 3  
- **Top Affected Vendors:** Fortinet, WCMS, Project Worlds Online, PHPGurukul, Azure Playwright, Beego  
- **Notable Patterns:**  
  - A surge in remote file upload vulnerabilities affecting web applications.  
  - Exploits targeting enterprise network devices and open-source frameworks.  
  - Publicly disclosed exploits for multiple CVEs, indicating active threat actor interest.  

---

## Recommended actions
1. **Urgent Patching of FortiGate Devices:** Apply the latest firmware updates to mitigate the persistent backdoor exploit. Monitor for any additional vulnerabilities in Fortinet products.  
2. **Secure File Upload Interfaces:** For all web applications, enforce strict file type validation and implement rate limiting on upload functions.  
3. **Beego Framework Update:** Ensure all Beego-based projects are updated to 2.3.6 or later to patch the XSS vulnerability.  
4. **Review Web Application Permissions:** Conduct a security audit of all administrative interfaces to prevent SQL injection and unauthorized access.  
5. **Disable Unused Features in WCMS and Project Worlds Online:** Remove unnecessary modules or features to reduce attack surfaces.  
6. **Monitor for Lateral Movement:** Given the FortiGate backdoor exploit, be vigilant for signs of internal network compromises.  
7. **Prepare for Next-gen Threats:** Start assessing potential vulnerabilities in open-source tools like Beego and MobSF, as these are likely targets for future attacks.  

---

## Looking ahead
Next week, expect increased activity around the FortiGate backdoor exploit as threat actors seek to expand their access. Additionally, researchers may disclose more vulnerabilities in widely used web frameworks like Beego, so staying updated on patch releases will be critical. Organizations should also prepare for potential follow-up attacks targeting other Fortinet products and similar network devices.

The ongoing surge in file upload vulnerabilities suggests that attackers are actively seeking out misconfigured web applications to exploit. Defenders should prioritize securing these interfaces and implementing robust validation mechanisms to mitigate risks.