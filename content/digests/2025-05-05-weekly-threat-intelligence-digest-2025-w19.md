---
title: "Weekly threat intelligence digest — 2025-W19"
date: 2025-05-11T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 6 items, 6 CVEs. 1 critical."
tags: [campaign, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: May 5 - 11, 2025

## Executive summary
This week, critical vulnerabilities dominated the threat landscape, with a severe flaw in Cisco IOS XE Wireless LAN Controllers taking center stage. The discovery of a hard-coded JWT token allowed unauthenticated attackers to execute arbitrary commands with root privileges, highlighting the importance of securing enterprise networking equipment. Additionally, multiple buffer overflow and SQL injection vulnerabilities were disclosed in PCMan FTP Server and PHPGurukul platforms, underscoring the risks associated with outdated software and poor input validation. The week also saw a surge in vulnerabilities affecting IoT devices and enterprise systems, emphasizing the need for proactive patching and threat monitoring.

## Critical & high priority
### [CRITICAL] Threat Actors Exploit Cisco IOS XE Wireless Controllers via Hard-Coded JWT
**What happened:**  
Cisco disclosed a maximum-severity vulnerability (CVE-2025-20188) in its IOS XE for Wireless LAN Controllers, affecting the Out-of-Band AP Image Download feature. The flaw arises from a hard-coded JSON Web Token (JWT), enabling unauthenticated attackers to upload arbitrary files and execute commands with root privileges. This vulnerability has been assigned a CVSS score of 10.0, indicating critical severity.

**Who's affected:**  
- **Products**: Cisco IOS XE Wireless LAN Controllers, Cisco Catalyst 9800 Series
- **Versions**: The vulnerability is present in versions where the Out-of-Band AP Image Download feature is enabled.

**What to do:**  
1. Apply patches provided by Cisco immediately.
2. Disable or restrict access to the Out-of-Band AP Image Download feature if it's not essential for operations.
3. Monitor network traffic for signs of unauthorized file uploads or command executions.
4. Conduct a thorough audit of all IoT and wireless devices to ensure no similar hard-coded credentials or tokens exist.

### [CRITICAL] PCMan FTP Server 2.0.7 Suffers from Critical Buffer Overflow Vulnerabilities
**What happened:**  
Two critical buffer overflow vulnerabilities (CVE-2025-4254 and CVE-2025-4255) were identified in PCMan FTP Server 2.0.7, affecting the LIST and RMD command handlers. Exploiting these flaws can lead to remote code execution, allowing attackers to gain control over affected servers.

**Who's affected:**  
- **Products**: PCMan FTP Server 2.0.7
- **Sectors**: Organizations relying on FTP services for file transfers.

**What to do:**  
1. Update to a newer version of PCMan FTP Server if available.
2. Disable the affected command handlers (LIST and RMD) until patches are applied.
3. Consider implementing input validation and sanitization measures for all FTP commands.
4. Segregate FTP servers in isolated network segments to minimize exposure.

### [CRITICAL] newbee-mall 1.0 Exposed to Unrestricted File Upload
**What happened:**  
A critical vulnerability (CVE-2025-4259) was found in the file upload functionality of newbee-mall 1.0, allowing attackers to upload arbitrary files. This could lead to remote code execution if successful.

**Who's affected:**  
- **Products**: newbee-mall 1.0
- **Functionality**: UploadController.java

**What to do:**  
1. Update to a newer version of newbee-mall if available.
2. Implement strict file type and size restrictions for uploads.
3. Use Web Application Firewalls (WAFs) to block suspicious upload requests.
4. Conduct regular security audits to identify and patch similar vulnerabilities.

### [CRITICAL] Multiple SQL Injection Vulnerabilities in PHPGurukul Platforms
**What happened:**  
Several critical SQL injection vulnerabilities were discovered in PHPGurukul Online DJ Booking Management System 1.0 and PHPGurukul Emergency Ambulance Hiring Portal 1.0. These flaws affect multiple files, including `/admin/user-search.php`, `/admin/booking-search.php`, and `/admin/edit-ambulance.php`.

**Who's affected:**  
- **Products**: PHPGurukul Online DJ Booking Management System 1.0, PHPGurukul Emergency Ambulance Hiring Portal 1.0
- **Sectors**: Entertainment and healthcare sectors relying on these platforms.

**What to do:**  
1. Apply patches provided by the vendors immediately.
2. Sanitize all user inputs in SQL queries.
3. Use parameterized queries to prevent SQL injection.
4. Conduct penetration testing to identify similar vulnerabilities in other parts of the application.

### [CRITICAL] Unrestricted File Upload Vulnerability in Multiple File Upload Add-on for OutSystems
**What happened:**  
The Multiple File Upload add-on component 3.1.0 for OutSystems was found to be vulnerable to unrestricted file upload (CVE-2025-28168). This occurs due to client-side-only validation, allowing attackers to bypass extension restrictions and upload arbitrary files.

**Who's affected:**  
- **Products**: Multiple File Upload add-on component 3.1.0 for OutSystems
- **Sectors**: Organizations using OutSystems for application development.

**What to do:**  
1. Update the add-on to a newer version if available.
2. Implement server-side validation for file uploads, including checking file types and sizes.
3. Monitor application logs for unauthorized file uploads.
4. Collaborate with vendors to ensure third-party components are secure.

### [CRITICAL] Command Injection Vulnerability in Tenda AC9 Router
**What happened:**  
A critical command injection vulnerability (CVE-2025-45042) was discovered in Tenda AC9 v15.03.05.14, affecting the Telnet function. This flaw allows attackers to execute arbitrary commands on the device.

**Who's affected:**  
- **Products**: Tenda AC9 v15.03.05.14
- **Sectors**: Home and enterprise users of Tenda routers.

**What to do:**  
1. Update the router firmware to a patched version.
2. Disable Telnet access if it's not required for management.
3. Use strong passwords and enable encryption for remote management interfaces.
4. Segregate IoT devices on a dedicated network segment to minimize exposure.

## Notable developments
- **Rise in Vulnerabilities Affecting Enterprise Networking Equipment**: This week saw multiple critical vulnerabilities in Cisco and Tenda products, highlighting the need for organizations to regularly update their networking infrastructure.
- **Focus on IoT Security**: The disclosure of command injection vulnerabilities in Tenda routers underscores the growing importance of securing IoT devices against remote attacks.
- **Public Disclosure of Exploits**: Several vulnerabilities, including those in PCMan FTP Server and PHPGurukul platforms, had public exploit disclosures. This emphasizes the need for defenders to act quickly to mitigate risks.

## Vulnerability landscape
This week, 1 new CVE was tracked, all classified as critical severity. The top affected vendor was Cisco (1). Notable patterns included:
- Hard-coded tokens and credentials in enterprise software.
- Buffer overflow vulnerabilities in legacy FTP servers.
- SQL injection flaws in web-based management systems.
- Unrestricted file upload issues in third-party components.

## Recommended actions
1. **Patch Cisco IOS XE Wireless LAN Controllers**: Apply updates immediately to address the hard-coded JWT vulnerability (CVE-2025-20188).
2. **Disable Unnecessary Services in PCMan FTP Server**: Temporarily disable the LIST and RMD commands until patches are applied.
3. **Update newbee-mall and PHPGurukul Systems**: Apply vendor-provided patches to mitigate file upload and SQL injection vulnerabilities.
4. **Review Third-Party Components**: Check for updates to the Multiple File Upload add-on component in OutSystems.
5. **Secure Tenda Routers**: Disable Telnet access and update firmware to patch command injection vulnerability (CVE-2025-45042).
6. **Monitor Exploit Activity**: Be vigilant for signs of exploitation in PCMan FTP Server, PHPGurukul platforms, and other affected systems.
7. **Adopt Zero-Trust Policies**: Implement strict access controls for network devices and IoT endpoints.
8. **Collaborate with Vendors**: Work with software and hardware vendors to ensure timely patches and updates.

## Looking ahead
The cybersecurity landscape remains challenging as attackers continue to exploit newly disclosed vulnerabilities. Next week, expect more details on exploits for this week's disclosures, as well as new findings in enterprise networking and IoT devices. Defenders must stay proactive, prioritize patching, and maintain robust threat monitoring practices.