---
title: "Weekly threat intelligence digest — 2025-W13"
date: 2025-03-30T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 3 items, 7 CVEs. 2 critical."
tags: [threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: March 24 - 30, 2025

## Executive summary
This week, cybersecurity threats reached a critical level with two major vulnerabilities dominating the landscape. The first, IngressNightmare, exposes Kubernetes clusters to potential takeover by exploiting four severe flaws in the ingress-nginx controller, affecting up to 40% of cloud workloads. The second, a critical authentication bypass in CrushFTP, is under active exploitation, allowing attackers to access administrative functions unauthenticated. Additionally, multiple SQL injection vulnerabilities were disclosed in PHPGurukul Bank Locker Management System, highlighting a concerning trend of financial software weaknesses. The overall threat level remains high due to the severity and widespread impact of these issues.

## Critical & high priority
### [CRITICAL] IngressNightmare: Critical Kubernetes Ingress-NGINX Vulnerabilities Expose Clusters
**What happened:** Researchers at Wiz disclosed four critical vulnerabilities in the ingress-nginx controller for Kubernetes, collectively dubbed "IngressNightmare." The most severe flaw, CVE-2025-1974 (CVSS 9.8), allows unauthenticated remote code execution within the ingress controller's network context, potentially enabling full Kubernetes cluster takeover. The ingress-nginx controller is used by approximately 40% of all Kubernetes clusters.

**Technical details:** The vulnerabilities exploit improper handling of configuration parameters and authentication mechanisms in the ingress-nginx controller. Attackers can send crafted HTTP requests to gain unauthorized access to the control plane, leading to potential pod manipulation, data exfiltration, or complete cluster compromise.

**Who's affected:** Organizations running Kubernetes clusters with ingress-nginx version 1.6.x and earlier are at risk. This includes a significant portion of cloud providers and enterprises relying on Kubernetes for container orchestration.

**What to do:**  
1. Immediately update the ingress-nginx controller to versions 1.7.0 or higher, which include patches for these vulnerabilities.  
2. Apply corresponding updates to Kubernetes distributions like Red Hat OpenShift, Google GKE, and Azure AKS, as they may be affected by these issues.  
3. Monitor cluster activity for signs of unauthorized access or异常 behavior, such as unexpected pod deletions or network configuration changes.  
4. Consider implementing additional network segmentation and access controls for ingress controllers to mitigate potential risks.

### [CRITICAL] CrushFTP Authentication Bypass Vulnerability Under Active Exploitation
**What happened:** A critical authentication bypass vulnerability was disclosed in CrushFTP versions prior to 10.8.4 and 11.3.1. The flaw, tracked as CVE-2025-2825 (CVSS 9.8), allows unauthenticated attackers to access administrative functions through crafted HTTP requests. Security monitoring organizations have reported widespread scanning activity targeting exposed CrushFTP instances following the public disclosure.

**Technical details:** The vulnerability resides in the authentication mechanism of CrushFTP, allowing attackers to bypass login requirements by exploiting a missing validation check. This enables unauthorized users to execute arbitrary commands and gain full control over the FTP server.

**Who's affected:** Any organization using CrushFTP versions 10.x.x prior to 10.8.4 or 11.x.x prior to 11.3.1 is at risk, particularly those with exposed FTP services on the internet.

**What to do:**  
1. Update CrushFTP to version 10.8.4 or 11.3.1 immediately to patch the vulnerability.  
2. Temporarily disable FTP services or restrict access to internal networks until updates are applied.  
3. Monitor for signs of unauthorized access, such as unusual login attempts or file modifications.  
4. Consider implementing multi-factor authentication (MFA) for administrative functions to add an additional layer of security.

## Notable developments
### Multiple SQL Injection Vulnerabilities in PHPGurukul Bank Locker Management System
**What happened:** A series of critical SQL injection vulnerabilities were disclosed in the PHPGurukul Bank Locker Management System 1.0, affecting various components of the application. These include CVE-2025-2674 to CVE-2025-2683, all classified as critical with a CVSS score of 7.3.

**Technical details:** The vulnerabilities stem from improper sanitization of user inputs in multiple files, including /aboutus.php, /add-lockertype.php, and /edit-subadmin.php. Attackers can exploit these flaws to inject malicious SQL commands, leading to unauthorized data access or manipulation.

**Who's affected:** Financial institutions and organizations using the PHPGurukul Bank Locker Management System are at risk, particularly those with internet-facing instances.

**What to do:**  
1. Apply patches provided by the vendor to address these vulnerabilities.  
2. Conduct a thorough audit of application inputs to ensure proper sanitization and validation.  
3. Monitor for any signs of unauthorized access or data manipulation in affected systems.

## Vulnerability landscape
This week, 5 new CVEs were tracked, all classified as critical. The top affected vendors are Kubernetes (4 vulnerabilities) and CrushFTP (1 vulnerability). Notably, the PHPGurukul Bank Locker Management System accounted for nine of the ten disclosed vulnerabilities, highlighting a concerning trend in financial software security. The majority of these flaws (9 out of 10) are SQL injection vulnerabilities, underscoring the persistent issue of improper input handling in web applications.

## Recommended actions
1. **Update Kubernetes ingress-nginx controller** to version 1.7.0 or higher to address IngressNightmare vulnerabilities.  
2. **Patch CrushFTP instances** to versions 10.8.4 or 11.3.1 to mitigate the authentication bypass flaw.  
3. **Apply patches for PHPGurukul Bank Locker Management System** to resolve multiple SQL injection vulnerabilities.  
4. **Monitor Kubernetes clusters** for signs of unauthorized access following IngressNightmare updates.  
5. **Disable or restrict access to CrushFTP services** temporarily until updates are applied.  
6. **Review and update application input validation** in financial software, particularly PHPGurukul, to prevent SQL injection attacks.  
7. **Stay informed about new exploits** related to this week's disclosed vulnerabilities, as active exploitation is ongoing.

## Looking ahead
Next week, cybersecurity professionals should remain vigilant for:
- Further exploitation of IngressNightmare and CrushFTP vulnerabilities, potentially leading to targeted attacks on critical infrastructure.
- Additional SQL injection exploits in financial software, which could result in data breaches or fraud.
- New vulnerabilities in Kubernetes-related tools, as attackers may pivot to exploit other components following the IngressNightmare disclosures.
- Increased scanning activity for exposed FTP services, leveraging the CrushFTP vulnerability.

The ongoing disclosure of critical flaws in widely used systems underscores the importance of proactive security measures and rapid patching. Organizations should prioritize updates for Kubernetes and financial software, while also enhancing monitoring capabilities to detect potential threats early.