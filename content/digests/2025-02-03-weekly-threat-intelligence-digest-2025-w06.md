---
title: "Weekly threat intelligence digest — 2025-W06"
date: 2025-02-09T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 7 items, 5 CVEs. 1 critical, 2 high."
tags: [campaign, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: February 3 - 9, 2025  

## Executive summary
This week, cybersecurity threats have reached a critical level, with multiple high-severity vulnerabilities actively exploited in the wild. The most concerning developments include unpatched command injection flaws in Zyxel CPE devices, which are being exploited despite the vendor classifying many models as end-of-life. Additionally, Cisco issued patches for two critical vulnerabilities in its Identity Services Engine (ISE), enabling authenticated attackers to escalate privileges and execute arbitrary commands. On the mobile front, Google addressed an actively exploited Linux kernel vulnerability in Android devices, marking it as the first zero-day patched in 2025. Other notable trends include multiple SQL injection flaws in WeGIA web applications and ongoing browser vulnerabilities affecting Firefox and Thunderbird. Defenders must act swiftly to mitigate these risks, as threat actors are already leveraging these weaknesses for targeted attacks.

---

## Critical & high priority
### [HIGH] Zyxel CPE Devices Under Active Attack via Command Injection Flaws  
**What happened:** Threat actors are actively exploiting a command injection vulnerability in Zyxel CPE series networking devices. The most concerning aspect is that Zyxel has classified many of the affected models as end-of-life and has no plans to release patches, leaving thousands of deployed devices permanently vulnerable.  

**Technical details:** CVE-2024-40891 is an authenticated command injection vulnerability in the management interface of Zyxel CPE devices. Attackers have been observed chaining this flaw with other vulnerabilities to gain full control over affected devices. This could allow them to execute arbitrary commands, including device reconfiguration and data exfiltration.  

**Who's affected:** The vulnerability impacts all Zyxel CPE series devices, including models listed as end-of-life (EOL). Affected organizations include businesses, ISPs, and telecom operators using these devices for network management.  

**What to do:**  
- If you are still using Zyxel CPE devices, assess your exposure and consider replacing them with patched alternatives.  
- Implement network segmentation to isolate vulnerable devices from critical networks.  
- Monitor dark web and threat intelligence feeds for active exploit campaigns targeting these devices.  

---

### [CRITICAL] Cisco Patches Critical Privilege Escalation Vulnerabilities in ISE  
**What happened:** Cisco released security advisories for two critical vulnerabilities in its Identity Services Engine (ISE), a widely deployed network access control and identity management platform. The vulnerabilities allow authenticated attackers with read-only admin privileges to escalate to root-level command execution and bypass authorization controls.  

**Technical details:**  
- **CVE-2025-20124 (CVSS 9.9):** Insecure Java deserialization vulnerability in a REST API endpoint. An authenticated attacker can exploit this flaw to execute arbitrary commands with root privileges.  
- **CVE-2025-20125 (CVSS 9.9):** Improper validation of user input leading to command injection, also exploitable by read-only admins.  

**Who's affected:** Organizations using Cisco ISE versions prior to the patched release are at risk. These include enterprises, educational institutions, and healthcare providers that rely on ISE for network access control.  

**What to do:**  
- Apply Cisco’s patches immediately to all ISE instances.  
- Restrict administrative privileges to only trusted users and implement multi-factor authentication (MFA) where possible.  
- Conduct a thorough audit of ISE configurations to identify unauthorized access points.  

---

### [HIGH] Google Android February Update Patches Actively Exploited Kernel Vulnerability  
**What happened:** Google released the February 2025 Android security bulletin addressing multiple vulnerabilities, including CVE-2024-53104, a Linux kernel vulnerability in the USB Video Class (UVC) driver that was being actively exploited in the wild. This is the first actively exploited Android zero-day patched in 2025, and Google indicated it may have been used in limited, targeted attacks.  

**Technical details:** CVE-2024-53104 is an out-of-bounds write vulnerability in the UVC driver's handling of USB video devices. Exploiting this flaw could lead to privilege escalation, allowing attackers to gain kernel-level access on affected devices.  

**Who's affected:** Android users running kernel versions prior to February 2025 security patch are at risk. This includes a wide range of devices, from smartphones to IoT gadgets, depending on their hardware and software configurations.  

**What to do:**  
- Update all Android devices to the latest version with the February 2025 security patches.  
- Enable automatic updates for over-the-air (OTA) patching to ensure devices receive future updates promptly.  
- Monitor for any additional zero-day exploits targeting Android kernel vulnerabilities.  

---

## Notable developments
### [MEDIUM] WeGIA Web Manager for Charitable Institutions Suffers Multiple SQL Injection Flaws  
**What happened:** Researchers discovered multiple SQL injection vulnerabilities in the WeGIA web application, affecting several endpoints including `get_codigobarras_cobranca.php`, `get_detalhes_cobranca.php`, and `get_detalhes_socio.php`. These flaws could allow attackers to execute arbitrary SQL queries, leading to unauthorized access or deletion of sensitive data.  

**Technical details:** The vulnerabilities were addressed in version 3.2.12 of the WeGIA application. Affected versions include all releases prior to this patch.  

**Who's affected:** Non-profit organizations and charitable institutions using WeGIA for financial management are at risk.  

**What to do:**  
- Update WeGIA to version 3.2.12 or later as soon as possible.  
- Conduct a security review of web applications to identify and patch similar vulnerabilities.  

---

### [INFORMATIONAL] Firefox and Thunderbird Users Face Multiple Memory Safety Bugs  
**What happened:** Mozilla released patches for several memory safety bugs in Firefox, Thunderbird, and their Extended Support Releases (ESR). These flaws could potentially lead to arbitrary code execution if exploited.  

**Technical details:** The vulnerabilities were discovered in versions prior to 135 for Firefox and 128.7 for Thunderbird. Exploiting these flaws would require convincing users to open a specially crafted file or visit a malicious website.  

**Who's affected:** Users of outdated Firefox, Thunderbird, and ESR versions are at risk.  

**What to do:**  
- Update to the latest stable version of Firefox (135+) or Thunderbird (128.7+).  
- Enable automatic updates to stay protected against future vulnerabilities.  

---

## Vulnerability landscape
### Key stats for the week:  
- **Total new CVEs identified:** 6 (including additional critical vulnerabilities from NVD).  
- **Critical vulnerabilities patched:** 3 (Zyxel, Cisco ISE, and Android kernel).  
- **High-severity flaws exploited in the wild:** 2 (Android kernel and Zyxel CPE command injection).  

### Patterns observed:  
1. **Enterprise software remains a prime target:** The exploitation of Cisco ISE vulnerabilities highlights the importance of securing critical network infrastructure.  
2. **Mobile devices under threat:** The Android zero-day underscores the ongoing risks associated with kernel-level vulnerabilities.  
3. **Web applications still vulnerable:** SQL injection flaws in WeGIA demonstrate the need for regular security audits and patching practices.  

---

## Recommended actions
1. **Patches for Zyxel CPE Devices:** If your organization is still using Zyxel CPE devices, consider replacing them with modern, supported alternatives.  
2. **Update Cisco ISE Instances:** Apply patches immediately to all ISE instances and audit configurations for unauthorized access points.  
3. **Apply Android February 2025 Patches:** Ensure all Android devices are updated to the latest version to mitigate the kernel vulnerability.  
4. **Patch WeGIA Applications:** Update WeGIA installations to version 3.2.12 or later to address SQL injection flaws.  
5. **Secure Modem Firmware:** Apply updates for Modem firmware to patch the critical remote code execution flaw (CVE-2024-2000).  
6. **Update Firefox and Thunderbird:** Ensure all users are running the latest versions of these browsers and email clients.  
7. **Monitor USB Device Access:** Implement network controls to restrict unauthorized access to USB devices following the Modem vulnerability disclosure.  

---

## Looking ahead
As we enter February 2025, cybersecurity threats continue to evolve rapidly. The exploitation of Android kernel vulnerabilities and Cisco ISE flaws suggests that attackers are increasingly targeting enterprise infrastructure and mobile platforms. Defenders should remain vigilant for:  
- Additional zero-day exploits in Android and other mobile operating systems.  
- Advanced persistent threat (APT) campaigns leveraging unpatched Zyxel devices.  
- New browser-based attacks exploiting memory safety bugs in Firefox and Thunderbird.  

Organizations must prioritize patching, network segmentation, and employee training to mitigate these risks effectively. Staying ahead of cyber threats requires a proactive approach to cybersecurity, with continuous monitoring and adaptation to emerging vulnerabilities.