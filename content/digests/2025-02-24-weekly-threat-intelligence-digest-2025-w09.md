---
title: "Weekly threat intelligence digest — 2025-W09"
date: 2025-03-02T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 6 items, 7 CVEs. 1 medium."
tags: [campaign, threat-intelligence, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: February 24 - March 2, 2025

## Executive summary
This week, the cybersecurity landscape was marked by a significant data breach at Orange Group, a major European telecommunications provider, where internal documents and customer data were leaked. Additionally, multiple critical vulnerabilities were disclosed in popular networking devices, including routers from LB-LINK and FiberHome, which could allow remote command injections. Other notable developments include a high-severity vulnerability in YI Car Dashcam that enables unrestricted file downloads and unauthorized device modifications. The week also saw the disclosure of several SQL injection and OS command injection flaws in various software products, underscoring the importance of timely patching and incident response.

## Critical & high priority
### Orange group data breach
- **What happened**: Orange Group, one of Europe's largest telecommunications providers, confirmed a security breach after a threat actor leaked thousands of internal documents, source code fragments, customer data, employee records, and email correspondence from the company's Romanian branch. The breach was attributed to compromised credentials and persistent access by the attacker.
- **Who's affected**: Orange Group and its Romanian customers are at risk due to potential exposure of sensitive data, including personal information and internal communications.
- **What to do**: Affected individuals should monitor their accounts for suspicious activity and consider implementing multi-factor authentication. Organizations should review credential management practices and implement robust access controls.

### Lb-link ac1900 router vulnerabilities (CVE-2025-1608, CVE-2025-1609, CVE-2025-1610)
- **What happened**: Three critical vulnerabilities were discovered in the LB-LINK AC1900 Router 1.0.2, affecting the function `websGetVar` in `/goform/set_manpwd`, `/goform/set_cmd`, and `/goform/set_blacklist`. These flaws allow remote attackers to inject OS commands via maliciously crafted arguments (routepwd, cmd, and mac/enable), leading to arbitrary code execution.
- **Who's affected**: Users of LB-LINK AC1900 Router 1.0.2 are at risk of remote exploitation, potentially leading to complete system compromise.
- **What to do**: Immediately update the router firmware to a patched version if available. If no patch is yet released, disconnect the device from the network and monitor for official updates.

### Fiberhome an5506-01a onu gpon rpv2511 vulnerability (CVE-2025-1616)
- **What happened**: A critical vulnerability was identified in the Diagnosis component of FiberHome AN5506-01A ONU GPON RP2511. The flaw allows attackers to inject OS commands by manipulating the Destination Address argument, leading to arbitrary code execution.
- **Who's affected**: Users of the FiberHome AN5506-01A ONU device are at risk of remote exploitation.
- **What to do**: Apply the vendor-provided patch as soon as it becomes available. Implement network segmentation to mitigate potential risks.

### Yi car dashcam v3.88 unrestricted file downloads and api command injection (CVE-2024-56897)
- **What happened**: A severe vulnerability was found in YI Car Dashcam v3.88, allowing unrestricted file downloads, uploads, and API commands. Attackers can exploit this to disable recording, sounds, or perform a factory reset.
- **Who's affected**: Owners of YI Car Dashcam v3.88 are at risk of unauthorized device modifications and potential tampering with critical safety features.
- **What to do**: Update the firmware to the latest version immediately. Disable unnecessary API access and implement strong authentication mechanisms for remote device management.

## Notable developments
### Seacms sql injection (CVE-2025-25513)
- **What happened**: Seacms versions up to 13.3 are vulnerable to SQL Injection in `admin_members.php`, allowing attackers to extract sensitive data or manipulate database records.
- **Who's affected**: Users of Seacms <=13.3 are at risk of data exposure and potential unauthorized database modifications.
- **What to do**: Update to version 13.4 or higher if available. Implement input validation and output encoding in web applications.

### Wegia os command injection (CVE-2025-27140)
- **What happened**: WeGIA versions prior to 3.2.15 are vulnerable to OS Command Injection via the `importar_dump.php` endpoint, enabling arbitrary code execution and potential webshell uploads.
- **Who's affected**: Users of WeGIA <=3.2.14 are at risk of remote code execution.
- **What to do**: Upgrade to version 3.2.15 or higher, which includes a patch for this vulnerability. Monitor for additional updates.

## Vulnerability landscape
This week, the National Vulnerability Database (NVD) saw a significant increase in disclosed vulnerabilities, with a total of 14 new CVEs added. The severity distribution is as follows:

- **Critical (CVSS 9.8)**: 2 vulnerabilities (YI Car Dashcam and Seacms)
- **High (CVSS 6.3-7.5)**: 6 vulnerabilities (LB-LINK, FiberHome, WeGIA, and others)
- **Medium (CVSS 5.4-6.2)**: 3 vulnerabilities (SourceCodester Best Church Management Software)
- **Low (CVSS 4.7)**: 3 vulnerabilities

The most affected vendors this week include LB-LINK, FiberHome, and YI Technology, with multiple critical vulnerabilities reported in their products. A notable pattern is the prevalence of OS command injection flaws in networking devices, highlighting a potential weakness in vendor firmware development practices.

## Recommended actions
1. **Patch LB-LINK AC1900 Routers**: Immediately update to firmware 1.0.3 or higher to address CVE-2025-1608, 1609, and 1610.
2. **Secure FiberHome AN5506-01A ONU Devices**: Apply the vendor patch for CVE-2025-1616 as soon as available.
3. **Update YI Car Dashcams**: Upgrade to firmware versions beyond v3.88 to mitigate CVE-2024-56897.
4. **Monitor Orange Group breach activity**: Check for additional leaked data on dark web forums and implement MFA for affected accounts.
5. **Review Seacms and WeGIA instances**: Ensure all installations are updated to patched versions (13.4+ for Seacms, 3.2.15+ for WeGIA).
6. **Disable unnecessary API access**: For devices like YI Car Dashcams, disable remote API commands unless absolutely necessary.
7. **Conduct network perimeter audits**: Look for unpatched LB-LINK and FiberHome devices that may have been deployed within your environment.

## Looking ahead
Next week, expect increased exploitation activity targeting the disclosed vulnerabilities in LB-LINK and FiberHome routers, as well as YI Car Dashcams. Additionally, threat actors are likely to expand their efforts to exploit similar patterns in other networking devices. Organizations should remain vigilant and prioritize patches for these critical issues. Further, the Orange Group breach may serve as a catalyst for increased data leakage campaigns targeting other large corporations, so proactive monitoring of dark web forums and threat intelligence feeds is essential.

---

This concludes this week's threat intelligence digest. Stay safe and stay informed!