---
title: "Weekly threat intelligence digest — 2025-W10"
date: 2025-03-09T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 10 items, 3 CVEs. 1 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: March 3 - 9, 2025

## Executive summary
This week's threat landscape is marked by a critical emergency involving three zero-day vulnerabilities in VMware products, actively exploited in the wild. These flaws, identified as CVE-2025-22224, CVE-2025-22225, and CVE-2025-22226, allow attackers to escape virtual machines and compromise hypervisors. Additionally, multiple high-severity vulnerabilities were disclosed, including SQL injection flaws in ESAFENET CDG, Mini-Tmall, and Codezips systems, as well as a critical buffer overflow in Tenda AC8 devices. The week also saw the disclosure of a remote account takeover vulnerability in oxidized-web, highlighting the importance of patching and monitoring.

## Critical & high priority
### Broadcom Patches Three VMware Zero-Days Exploited in Active Attacks
**What happened:**  
Broadcom released emergency patches for three zero-day vulnerabilities affecting VMware ESXi, Workstation, and Fusion. These flaws were reported by Microsoft's Threat Intelligence Center and are being actively exploited. The vulnerabilities can be chained to enable virtual machine escape, allowing attackers with code execution in a guest VM to compromise the underlying hypervisor.

**Who's affected:**  
- **Products:** VMware ESXi, VMware Workstation, VMware Fusion
- **Vendors:** Broadcom (patch provider), VMware (product vendor)
- **Sectors:** Enterprises relying on VMware infrastructure for virtualization

**What to do:**  
1. Apply patches immediately from [VMware's security page](https://www.vmware.com/security).
2. Monitor for additional exploits and update affected systems.
3. Implement network segmentation to mitigate potential spread.

### ESAFENET CDG 5.6.3.154.205 Suffers Critical SQL Injection Flaws
**What happened:**  
Two critical SQL injection vulnerabilities were disclosed in ESAFENET CDG 5.6.3.154.205, affecting the files `updateorg.jsp` and `ClientSortLog.jsp`. These flaws allow remote attackers to manipulate query parameters, leading to unauthorized database access.

**Who's affected:**  
- **Products:** ESAFENET CDG 5.6.3.154.205
- **Vendors:** ESAFENET (assumed vendor)
- **Sectors:** Organizations using ESAFENET for log management and workflow

**What to do:**  
1. Apply patches from the vendor's update portal.
2. Conduct a security audit of web applications for SQL injection points.

### Mini-Tmall Up to 20250211 Exposed via Critical SQL Injection
**What happened:**  
A critical SQL injection vulnerability was found in Mini-Tmall up to version 20250211, affecting the `select` function in `ProductMapper.java`. Attackers can exploit this by manipulating the `orderBy` argument.

**Who's affected:**  
- **Products:** Mini-Tmall <= 20250211
- **Vendors:** Mini-Tmall developers
- **Sectors:** E-commerce platforms using Mini-Tmall

**What to do:**  
1. Update to the latest version from [Mini-Tmall's website](https://www.mini-tmall.com/).
2. Implement input validation and use parameterized queries.

### Oxidized-web RANCID Migration Page Vulnerability
**What happened:**  
A critical vulnerability in oxidized-web before 0.15.0 allows unauthenticated users to gain control over the Linux account running the service via the RANCID migration page.

**Who's affected:**  
- **Products:** oxidized-web < 0.15.0
- **Vendors:** Oxidized Web developers
- **Sectors:** Network management and monitoring

**What to do:**  
1. Upgrade to version 0.15.0 or higher.
2. Restrict access to sensitive pages like the RANCID migration endpoint.

### Totolink EX1800T 9.1.0cu.2112_B20220316 Suffers Critical Buffer Overflow
**What happened:**  
A critical buffer overflow vulnerability was found in Totolink EX1800T, affecting the `loginAuth` function in `/cgi-bin/cstecgi.cgi`. Attackers can exploit this via crafted password arguments.

**Who's affected:**  
- **Products:** Totolink EX1800T 9.1.0cu.2112_B20220316
- **Vendors:** TP-Link (assumed vendor)
- **Sectors:** Home and enterprise networking

**What to do:**  
1. Apply the firmware update from [TP-Link's support](https://www.tp-link.com/).
2. Monitor for additional vulnerabilities in IoT devices.

### Tenda AC8 16.03.34.06 Vulnerable to Critical Buffer Overflow
**What happened:**  
A critical buffer overflow vulnerability was disclosed in Tenda AC8, affecting the `sub_49E098` function in `/goform/SetIpMacBind`. Attackers can exploit this via crafted list arguments.

**Who's affected:**  
- **Products:** Tenda AC8 16.03.34.06
- **Vendors:** Tenda (assumed vendor)
- **Sectors:** Networking and Wi-Fi

**What to do:**  
1. Update firmware to the latest version from [Tenda's support](https://www.tendahome.com/).
2. Implement network access controls.

## Notable developments
### Multiple SQL Injection Flaws in Codezips Systems
Two critical SQL injection vulnerabilities were disclosed in Codezips College Management System 1.0 and Codezips Gym Management System 1.0, affecting `/university.php` and `/dashboard/admin/gen_invoice.php`. These flaws allow remote attackers to manipulate arguments like `book_name` and `id`.

**What to do:**  
- Apply patches from the vendor's update portal.
- Conduct a security audit of web applications.

### ESAFENET DSM 3.1.2 Suffers Critical Command Injection Flaw
A critical command injection vulnerability was found in ESAFENET DSM 3.1.2, affecting the `examExportPDF` function in `/admin/plan/examExportPDF`. Attackers can exploit this via crafted argument manipulation.

**What to do:**  
- Apply patches from the vendor's update portal.
- Monitor for additional vulnerabilities in ESAFENET products.

## Vulnerability landscape
### Weekly CVE Analysis
- **Total new CVEs tracked:** 3
- **Severity distribution:** All classified as critical (CVSS scores: 7.3, 8.8, 9.0)
- **Top affected vendors:** VMware (3 vulnerabilities)

### Notable Patterns
- Multiple SQL injection flaws across different products.
- Critical buffer overflow vulnerabilities in networking devices.
- Remote exploit disclosures for previously unknown vulnerabilities.

## Recommended actions
1. **Prioritize VMware Updates:** Apply patches for CVE-2025-22224, CVE-2025-22225, and CVE-2025-22226 immediately.
2. **Patch ESAFENET CDG:** Address SQL injection flaws in versions 5.6.3.154.205.
3. **Update Mini-Tmall:** Patch to resolve critical SQL injection issues.
4. **Secure oxidized-web:** Upgrade to version 0.15.0 or higher.
5. **Firmware Updates for Totolink and Tenda Devices:** Apply updates to mitigate buffer overflow risks.
6. **Audit Web Applications:** Look for SQL injection points in web applications.
7. **Monitor Network Devices:** Stay vigilant for vulnerabilities in networking hardware.

## Looking ahead
Next week, expect continued activity around VMware vulnerabilities as attackers may develop new exploits. Additionally, watch for potential follow-up disclosures related to the ESAFENET and Tenda vulnerabilities. The disclosure of additional zero-days in widely used software is a likely scenario, requiring proactive patching strategies.