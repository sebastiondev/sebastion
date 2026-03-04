---
title: "Weekly threat intelligence digest — 2025-W20"
date: 2025-05-18T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 6 items, 12 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: May 12 - 18, 2025  

## Executive summary
This week, the cybersecurity landscape was dominated by critical vulnerabilities across major vendor products. Microsoft's Patch Tuesday addressed five actively exploited zero-day flaws in Windows components, including remote code execution and privilege escalation vectors. Additionally, Ivanti Endpoint Manager Mobile (EPMM) was found to have two chained vulnerabilities enabling unauthenticated remote code execution, with active exploitation targeting government and critical infrastructure sectors. Other notable issues included severe SQL injection flaws in PHPGurukul Apartment Visitors Management System, a high-severity deserialization vulnerability in SAP SRM, and multiple buffer overflow and improper file handling issues in Fortinet and Samsung products. The overall threat level remains critical, with attackers actively exploiting these vulnerabilities.  

## Critical & high priority
### Microsoft Patch Tuesday Addresses Five Actively Exploited Zero-Days  
**What happened:** Microsoft released its May 2025 Patch Tuesday updates, addressing over 70 vulnerabilities across Windows 10, Windows 11, and Windows Server versions from 2016 to 2025. Among these, five vulnerabilities were confirmed as zero-days under active exploitation. These flaws include:  
- **CVE-2025-30397:** A scripting engine memory corruption vulnerability that could lead to remote code execution (RCE).  
- **CVE-2025-30400:** A Windows kernel privilege escalation flaw.  
- **CVE-2025-32701, CVE-2025-32706, and CVE-2025-32709:** Vulnerabilities in the Desktop Window Manager (DWM) and Common Log File System driver, enabling RCE and privilege escalation.  

**Who's affected:** All users of Windows 10, Windows 11, and Windows Server 2016-2025 are at risk. These vulnerabilities are particularly dangerous due to their broad attack surface and potential for widespread exploitation.  

**What to do:** Apply Microsoft's May 2025 updates immediately. Organizations should prioritize patching systems running Windows 11 and the latest server versions, as these are more likely to be targeted by attackers. Monitor for any additional zero-day exploits that may emerge in unpatched environments.  

---

### Ivanti EPMM Chained Vulnerabilities Enable Unauthenticated Remote Code Execution  
**What happened:** Two vulnerabilities in Ivanti Endpoint Manager Mobile (EPMM) were disclosed and added to the CISA Known Exploited Vulnerabilities catalog. These flaws, **CVE-2025-4427** and **CVE-2025-4428**, can be chained to achieve unauthenticated RCE.  

**Who's affected:** Government agencies, critical infrastructure organizations, and enterprises using Ivanti EPMM are at risk. These vulnerabilities are particularly concerning due to the sensitive nature of the data handled by EPMM.  

**What to do:** Apply Ivanti's patches immediately. Organizations should also restrict access to EPMM endpoints and monitor for any signs of unauthorized code execution. Given the criticality, these updates should be treated as a top priority.  

---

### SAP SRM Live Auction Cockpit Java Applet Deserialization Vulnerability  
**What happened:** A severe deserialization vulnerability (**CVE-2025-30012**) was identified in the Live Auction Cockpit feature of SAP Supplier Relationship Management (SRM). This flaw allows unauthenticated attackers to send malicious payloads, leading to arbitrary OS command execution with the privileges of the SAP Admin user.  

**Who's affected:** Enterprises using SAP SRM versions prior to the update are at risk. This vulnerability is particularly dangerous due to its ability to bypass authentication and directly compromise sensitive systems.  

**What to do:** Apply updates for SAP SRM as soon as they become available. Organizations should also disable or deprecate any Java applets within their SAP environments, as they pose a significant security risk.  

---

### Fortinet FortiCamera Stack-Based Buffer Overflow Vulnerability  
**What happened:** A critical stack-based buffer overflow vulnerability (**CVE-2025-32756**) was discovered in Fortinet FortiCamera versions 2.1.0 through 2.1.3 and earlier releases. This flaw enables remote code execution, allowing attackers to gain full control over affected devices.  

**Who's affected:** Users of FortiCamera and related Fortinet products are at risk. This vulnerability is particularly concerning for organizations relying on Fortinet's security solutions.  

**What to do:** Update FortiCamera to version 2.1.4 or higher immediately. Network administrators should also implement network segmentation and restrict access to FortiCamera devices where possible.  

---

## Notable developments
### PHPGurukul Apartment Visitors Management System SQL Injection Flaws  
Two critical SQL injection vulnerabilities (**CVE-2025-4553** and **CVE-2025-4554**) were identified in the PHPGurukul Apartment Visitors Management System 1.0. These flaws affect the `/admin/bwdates-reports-details.php` and `/admin/bwdates-passreports-details.php` files, respectively, allowing attackers to manipulate `fromdate` and `todate` parameters for arbitrary SQL code execution.  

**What to do:** Apply patches from PHPGurukul developers and validate all user inputs in these endpoints. Developers should also consider implementing parameterized queries or prepared statements to mitigate similar risks in the future.  

---

### Cozy Vision Technologies SMS Alert Order Notifications – WooCommerce SQL Injection  
A critical SQL injection vulnerability (**CVE-2025-47682**) was found in Cozy Vision Technologies Pvt. Ltd.'s SMS Alert Order Notifications – WooCommerce plugin, affecting versions up to 3.8.2. This flaw enables attackers to inject malicious SQL commands, leading to unauthorized data access or manipulation.  

**What to do:** Update the plugin to a patched version and disable it if immediate updates are not possible. Developers should also review their input validation processes to prevent similar issues in the future.  

---

## Vulnerability landscape
This week, **7 new CVEs were tracked**, all classified as critical. The severity distribution highlights the following:  
- **Windows:** 5 vulnerabilities addressed in Microsoft's Patch Tuesday.  
- **Ivanti:** 2 chained vulnerabilities in EPMM.  
Other notable vendors affected include SAP, Fortinet, Samsung, and multiple open-source projects like Kirby CMS.  

The week saw a surge in critical vulnerabilities affecting enterprise software, with a particular focus on remote code execution (RCE) and privilege escalation flaws. This underscores the importance of timely patching and robust access controls.  

---

## Recommended actions
1. **Apply Microsoft's May 2025 Patch Tuesday updates immediately** to address five actively exploited zero-days in Windows components.  
2. **Update Ivanti EPMM** to patch the chained vulnerabilities (**CVE-2025-4427** and **CVE-2025-4428**) enabling unauthenticated RCE.  
3. **Patch SAP SRM** to mitigate the critical deserialization vulnerability (**CVE-2025-30012**) in the Live Auction Cockpit feature.  
4. **Update FortiCamera** to version 2.1.4 or higher to address the stack-based buffer overflow flaw (**CVE-2025-32756**).  
5. **Validate and patch PHPGurukul Apartment Visitors Management System** to fix SQL injection vulnerabilities (**CVE-2025-4553** and **CVE-2025-4554**).  
6. **Disable or deprecate Java applets in SAP environments** to reduce attack surfaces.  
7. **Monitor for additional zero-day exploits** in unpatched Windows systems and other enterprise software.  

---

## Looking ahead
Next week, organizations should remain vigilant for:  
- Additional zero-day exploits emerging from Microsoft's Patch Tuesday updates.  
- Exploitation attempts targeting the newly patched Ivanti EPMM vulnerabilities.  
- Further disclosures of critical vulnerabilities in widely used enterprise software.  
Defenders are encouraged to prioritize patching and implement robust monitoring and incident response strategies to mitigate these risks effectively.