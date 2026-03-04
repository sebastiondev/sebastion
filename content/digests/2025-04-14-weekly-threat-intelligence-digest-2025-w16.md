---
title: "Weekly threat intelligence digest — 2025-W16"
date: 2025-04-20T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 4 items, 6 CVEs. 1 critical, 1 medium."
tags: [campaign, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: April 14 - 20, 2025

## Executive summary
This week, cybersecurity threats reached a critical level with two major incidents dominating the landscape. The first was the breach of the popular imageboard platform 4chan, which was taken offline after attackers exploited an outdated PHP installation to leak sensitive data, including moderator information and internal tools. The second was the disclosure of a CVSS 10.0-rated vulnerability in the Erlang/OTP SSH server library, affecting multiple high-profile products like RabbitMQ, CouchDB, and Plesk. Additionally, several other critical vulnerabilities were reported, underscoring the importance of proactive security measures.

## Critical & high priority
### [MEDIUM] 4chan Breached and Taken Offline After Source Code and Data Leak
**What happened:**  
The imageboard platform 4chan was hacked and taken offline after attackers exploited an outdated PHP installation. The breach resulted in the leakage of source code, moderator email addresses, internal tools, and database contents. This incident highlights the risks associated with running legacy software for extended periods without updates.

**Who's affected:**  
- Platform: 4chan
- Users: Registered users and moderators

**What to do:**  
1. **Update PHP Installation:** Ensure all instances of PHP are updated to the latest stable version, as outdated versions can leave systems vulnerable to exploitation.
2. **Review Access Controls:** Strengthen access controls for internal tools and sensitive data to prevent unauthorized access in case of future breaches.
3. **Monitor Logs:** Continuously monitor server logs for any signs of suspicious activity or potential attacks.

---

### [CRITICAL] Erlang/OTP SSH Server Vulnerability Scores Perfect CVSS 10.0
**What happened:**  
A critical vulnerability (CVE-2025-32433) was disclosed in the Erlang/OTP SSH library, allowing unauthenticated remote code execution with a perfect CVSS base score of 10.0. Attackers can send specially crafted SSH messages to execute arbitrary commands on systems running the Erlang/OTP SSH daemon before authentication completes.

**Who's affected:**  
- Products: RabbitMQ, CouchDB, Plesk
- Vendors: Erlang/OTP

**What to do:**  
1. **Patch Immediately:** Apply updates provided by the vendor to mitigate this vulnerability.
2. **Disable Unnecessary Services:** If not required, disable the SSH server functionality in Erlang/OTP-based applications.
3. **Monitor for Exploitation:** Be vigilant for signs of unauthorized access or system behavior changes that may indicate exploitation.

---

## Notable developments
### Additional Critical CVEs from NVD
Several other critical vulnerabilities were reported this week:

1. **CVE-2025-3553 (CVSS: 6.3):**  
   - **Product:** phpshe 1.8  
   - **Issue:** Remote SQL injection via the `pe_delete` function in `/admin.php?mod=brand&act=del`.  
   - **Recommendation:** Update to a newer version of phpshe or apply patches to mitigate the vulnerability.

2. **CVE-2025-3558 (CVSS: 6.3):**  
   - **Product:** ghostxbh uzy-ssm-mall 1.0.0  
   - **Issue:** Unrestricted file upload via manipulation of the `File` argument in `/mall/user/uploadUserHeadImage`.  
   - **Recommendation:** Restrict file uploads to approved formats and implement size limits.

3. **CVE-2025-3559 (CVSS: 6.3):**  
   - **Product:** ghostxbh uzy-ssm-mall 1.0.0  
   - **Issue:** Remote SQL injection via the `orderBy` parameter in `/mall/product/0/20`.  
   - **Recommendation:** Sanitize and validate all user inputs to prevent SQL injection.

4. **CVE-2025-3277 (CVSS: 9.8):**  
   - **Product:** SQLite  
   - **Issue:** Integer overflow leading to heap buffer overflow in the `concat_ws()` function, potentially allowing arbitrary code execution.  
   - **Recommendation:** Update SQLite to the latest version to patch this critical vulnerability.

5. **CVE-2025-3589 (CVSS: 6.3):**  
   - **Product:** SourceCodester Music Class Enrollment System 1.0  
   - **Issue:** Remote SQL injection via manipulation of the `ID` parameter in `/manage_class.php`.  
   - **Recommendation:** Apply patches or update to a newer version if available.

---

## Vulnerability landscape
### Analysis of This Week's CVE Trends:
- **Total New CVEs Tracked:** 1 (Critical)
- **Severity Distribution:** All critical vulnerabilities (CVSS scores ranging from 6.3 to 9.8).
- **Top Affected Vendors:** RabbitMQ, Plesk, Erlang/OTP, CouchDB.
- **Notable Patterns:**  
  - Multiple vulnerabilities in Chinese-developed CMS and e-commerce platforms (e.g., phpshe, ghostxbh uzy-ssm-mall).  
  - A significant number of remote code execution and SQL injection flaws.  
  - Legacy software (e.g., PHP, SQLite) remains a primary attack vector.

---

## Recommended actions
1. **Update Erlang/OTP and Related Products:** Immediately patch Erlang/OTP to address CVE-2025-32433, especially if RabbitMQ, CouchDB, or Plesk is in use.
2. **Review 4chan-like Platforms:** If your organization uses similar platforms, conduct a security audit to identify outdated software and implement updates.
3. **Patch phpshe and uzy-ssm-mall:** Apply available patches for CVE-2025-3553, -3558, and -3559 to mitigate SQL injection and file upload risks.
4. **Secure SQLite Instances:** Update SQLite to the latest version to prevent heap buffer overflow attacks (CVE-2025-3277).
5. **Monitor for PCMan FTP Server Issues:** Apply patches or disable the HOST and HELP command handlers if using PCMan FTP Server 2.0.7.
6. **Disable Unnecessary SSH Services:** If not required, disable Erlang/OTP's built-in SSH server to reduce attack vectors.
7. **Implement Input Validation:** For web applications, ensure all user inputs are properly sanitized to prevent SQL injection and other attacks.

---

## Looking ahead
Next week, expect increased activity around the disclosed vulnerabilities, particularly CVE-2025-32433 in Erlang/OTP, as attackers may start leveraging proof-of-concept exploits. Additionally, watch for potential supply chain attacks targeting outdated software like PHP and SQLite. Organizations should also remain vigilant for new vulnerabilities in popular open-source projects, such as RabbitMQ and CouchDB, which are critical to many enterprise infrastructures.

---

This week's incidents serve as a stark reminder of the importance of proactive security measures, including regular updates, input validation, and disabling unnecessary services. Cybercriminals are increasingly targeting legacy systems and supply chains, making it imperative for organizations to stay ahead of threats with robust security practices.