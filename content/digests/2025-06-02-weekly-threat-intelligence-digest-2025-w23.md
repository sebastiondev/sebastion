---
title: "Weekly threat intelligence digest — 2025-W23"
date: 2025-06-08T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 7 items, 6 CVEs. 1 critical."
tags: [campaign, malware, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: June 2 - 8, 2025

## Executive summary
This week saw a surge in critical vulnerabilities with significant real-world impact. The most pressing issue is a critical OGNL injection flaw in Atlassian Confluence Server and Data Center, which enables unauthenticated remote code execution (RCE) and is actively exploited by ransomware groups. This vulnerability has been added to CISA's Known Exploited Vulnerabilities catalog, highlighting its severity. Additionally, multiple critical vulnerabilities were reported in AssamLook CMS and Linksys routers, with several allowing remote command injection or SQL injection attacks. The lack of vendor response from AssamLook further exacerbates the risk. Defenders should prioritize patches for Confluence instances and monitor for potential exploitation attempts across affected devices.

## Critical & high priority
### [CRITICAL] Critical Atlassian Confluence RCE Vulnerability Under Active Exploitation
**What happened:**  
A critical OGNL injection vulnerability (CVE-2025-31650) was disclosed in Atlassian Confluence Server and Data Center, enabling unauthenticated remote code execution. The flaw allows attackers to inject arbitrary commands into the application, leading to full control over affected systems. This vulnerability is actively exploited by ransomware groups as an initial access vector.

**Who's affected:**  
Organizations running internet-facing instances of Atlassian Confluence Server or Data Center are at highest risk. All versions prior to the patched releases are vulnerable.

**What to do:**  
- Immediately apply patches provided by Atlassian for CVE-2025-31650.
- Temporarily disable internet-facing access to Confluence instances until patched.
- Monitor network traffic for signs of exploitation attempts.
- Conduct a thorough inventory of all Confluence installations and prioritize patching.

### [CRITICAL] Multiple Critical Vulnerabilities in AssamLook CMS
**What happened:**  
Two critical vulnerabilities (CVE-2025-5430 and CVE-2025-5432) were reported in AssamLook CMS 1.0, both involving SQL injection flaws. These issues allow remote attackers to manipulate the `ID` argument in `/product.php` and `/view_tender.php`, leading to unauthorized database access.

**Who's affected:**  
Organizations using AssamLook CMS version 1.0 are at risk of data breaches and potential compromise through SQL injection attacks.

**What to do:**  
- Apply any available patches from the vendor or implement workarounds to mitigate the vulnerabilities.
- Restrict access to the affected pages (`/product.php` and `/view_tender.php`) to authorized users only.
- Monitor for signs of unauthorized database queries or data exfiltration attempts.

### [CRITICAL] Critical Command Injection Vulnerabilities in Linksys Routers
**What happened:**  
Multiple critical vulnerabilities (CVE-2025-5441 through CVE-2025-5446) were identified in several Linksys router models, including RE6500, RE6250, RE6300, RE6350, RE7000, and RE9000. These flaws allow remote command injection via various functions such as `setDeviceURL`, `RP_pingGatewayByBBS`, and `wirelessAdvancedHidden`. Attackers can exploit these issues to gain OS-level control over the devices.

**Who's affected:**  
Home and enterprise users of Linksys routers running versions 1.0.013.001, 1.0.04.001/002, 1.1.05.003, and 1.2.07.001 are at risk.

**What to do:**  
- Update router firmware to the latest available versions immediately.
- Disable remote management capabilities unless absolutely necessary.
- Conduct a network sweep to identify unpatched devices and isolate them if possible.
- Monitor for signs of unauthorized device activity or command execution attempts.

## Notable developments
### HPE StoreOnce Software Command Injection Vulnerability
A critical command injection RCE vulnerability (CVE-2025-37089, CVSS: 9.8) was reported in HPE StoreOnce Software. This issue enables attackers to execute arbitrary commands on the affected system, potentially leading to full control over the device. While no active exploitation has been reported yet, the severity of this flaw necessitates immediate attention from defenders.

### Lack of Vendor Response for AssamLook CMS
The vendor behind AssamLook CMS has failed to respond to initial disclosures regarding the critical vulnerabilities (CVE-2025-5430 and CVE-2025-5432). This lack of communication increases the risk of exploitation, as defenders may struggle to obtain official guidance or patches.

## Vulnerability landscape
### Weekly CVE Statistics
- **Total new CVEs tracked:** 1 (all critical)
- **Severity distribution:** All vulnerabilities reported this week were classified as critical.
- **Top affected vendors:** Atlassian (1), AssamLook CMS (2), Linksys (7).
- **Notable patterns:** Multiple vulnerabilities in enterprise software and IoT devices, with a focus on remote code execution and command injection flaws.

### Analysis of This Week's Vulnerabilities
This week's vulnerabilities underscore the growing trend of critical flaws in widely used enterprise software and consumer-grade devices. The Atlassian Confluence RCE flaw is particularly concerning due to its active exploitation by ransomware groups. Additionally, the cluster of vulnerabilities in Linksys routers highlights the ongoing risks associated with unpatched IoT devices.

## Recommended actions
1. **Patch Atlassian Confluence Instances Immediately:** Given the active exploitation and high severity, this should be a top priority for all organizations using Confluence.
2. **Disable Internet-Facing Access to Confluence:** Temporarily remove public access to Confluence instances until patched to mitigate immediate risks.
3. **Update Linksys Router Firmware:** All affected models should receive urgent updates to address the command injection vulnerabilities.
4. **Monitor for AssamLook CMS Exploitation:** Given the vendor's lack of response, defenders should actively monitor for signs of SQL injection attacks on their CMS instances.
5. **Review Network Perimeter Security:** Ensure that all internet-facing devices and services are properly secured and patched.
6. **Enhance Ransomware Defense Measures:** With ransomware groups exploiting Confluence vulnerabilities, implement additional layers of defense such as endpoint detection and response (EDR) solutions.
7. **Prepare for HPE StoreOnce Vulnerability Mitigation:** Although no active exploitation has been reported yet, prepare patches or mitigation strategies for this critical flaw.

## Looking ahead
Next week is expected to bring continued focus on the Atlassian Confluence RCE vulnerability as ransomware groups and other threat actors seek to exploit unpatched instances. Additionally, researchers may uncover more vulnerabilities in enterprise software and IoT devices, given the trend observed this week. Defenders should remain vigilant and prioritize proactive measures such as regular patching, network monitoring, and incident response preparedness.