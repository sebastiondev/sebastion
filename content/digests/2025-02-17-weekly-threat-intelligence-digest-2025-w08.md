---
title: "Weekly threat intelligence digest — 2025-W08"
date: 2025-02-23T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 5 items, 8 CVEs. 1 critical, 1 high."
tags: [campaign, malware, threat-intelligence, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: February 17 - 23, 2025

## Executive summary
This week saw a significant escalation in cyber threats, with two major incidents dominating the threat landscape. The Ghost (Cring) ransomware group, operating from China, has emerged as a critical threat to critical infrastructure and other sectors by exploiting known vulnerabilities in internet-facing services. Additionally, a record-breaking $1.5 billion cryptocurrency theft occurred when North Korean state-sponsored hackers targeted Bybit exchange, highlighting the growing sophistication of cybercriminal activities. The week also revealed several new critical vulnerabilities across various industries, underscoring the need for immediate action to mitigate risks.

## Critical & high priority
### [HIGH] CISA FBI and MS-ISAC Warn of Ghost Ransomware Targeting Critical Infrastructure
**What happened:**  
The Ghost (Cring) ransomware group has been actively exploiting known vulnerabilities in internet-facing services across multiple industries. The group, operating from China, has targeted organizations in over 70 countries, including critical infrastructure, healthcare, government, education, and technology sectors. The advisory highlights the exploitation of N-day vulnerabilities, emphasizing that Ghost actors avoid phishing campaigns in favor of direct attacks on exposed systems.

**Technical details:**  
The advisory lists several CVEs associated with the exploited vulnerabilities:  
- **CVE-2018-13379**: A vulnerability in a third-party library used by multiple internet-facing services.  
- **CVE-2021-34473, CVE-2021-34523, and CVE-2021-31207**: Known vulnerabilities in various networking and internet services that have been exploited by Ghost actors.

**Who's affected:**  
Critical infrastructure, healthcare, government, education, and technology sectors across 70+ countries.  

**What to do:**  
1. Patch all systems with available updates for the listed CVEs.  
2. Monitor network traffic for signs of lateral movement or unusual activity indicative of ransomware attacks.  
3. Isolate infected devices immediately upon detection and follow established incident response protocols.  
4. Conduct regular vulnerability scans to identify and mitigate exposed internet-facing services.  

---

### [CRITICAL] Bybit Cryptocurrency Exchange Suffers Record-Breaking $1.5 Billion Theft
**What happened:**  
Bybit, one of the world's largest cryptocurrency exchanges, fell victim to a massive theft involving approximately 401,347 ETH ($1.5 billion at the time). The attack occurred during a routine transfer between cold and warm wallets, where attackers manipulated the signing interface to display the correct address while altering the underlying smart contract logic.

**Technical details:**  
The Lazarus Group, a North Korean state-sponsored hacking group known for previous cryptocurrency heists, is believed to be responsible. The attack exploited a manipulation of the signing interface during a transfer process, highlighting the need for robust security measures in blockchain transactions.

**Who's affected:**  
Bybit exchange and the Ethereum ecosystem.  

**What to do:**  
1. Review and enhance security protocols for cold wallet transfers, ensuring that all interfaces are validated before executing transactions.  
2. Collaborate with law enforcement and cryptocurrency exchanges to track and potentially recover stolen assets.  
3. Implement multi-factor authentication (MFA) and other layered security controls for critical systems.  

---

## Notable developments
### [HIGH] New Critical Vulnerabilities Identified in Various Web Applications
This week, several new critical vulnerabilities were disclosed across various web applications, including:  
- **CVE-2025-1379**: A SQL injection vulnerability in the Code-projects Real Estate Property Management System 1.0, affecting the `/Admin/CustomerReport.php` endpoint.  
- **CVE-2025-1380**: Another SQL injection vulnerability in the Codezips Gym Management System 1.0, impacting the `/dashboard/admin/del_plan.php` endpoint.  

Both vulnerabilities allow remote exploitation and could lead to unauthorized access or data breaches if left unpatched.

**What to do:**  
1. Identify and patch systems running these applications as soon as updates become available.  
2. Conduct thorough penetration testing to identify similar vulnerabilities in other web applications.  

---

## Vulnerability landscape
### Weekly CVE Analysis
- **Total new CVEs tracked this week:** 4  
- **Severity distribution:** All newly identified CVEs are classified as "High" severity, with CVSS scores ranging from 6.3 to 9.8.  
- **Top affected vendors:** Technology, healthcare, government, education, and critical infrastructure sectors each reported vulnerabilities.  

### Notable Patterns
1. **SQL Injection Vulnerabilities:** Multiple CVEs this week (e.g., CVE-2025-1379, CVE-2025-1380) highlight the persistence of SQL injection flaws in web applications.  
2. **Heap Buffer Overflow in Exiv2 Library:** A critical vulnerability (CVE-2025-26623) was disclosed in the Exiv2 library, affecting versions 0.28.0 to 0.28.4. This underscores the importance of regular library updates.  
3. **PHP Object Injection in WordPress Plugins:** The Affiliate Links plugin for WordPress (CVE-2024-13556) remains a concern, as it allows unauthenticated attackers to inject PHP objects.  

---

## Recommended actions
1. **Prioritize Patching for Ghost Ransomware Vulnerabilities**  
   Immediately apply updates for the listed CVEs (CVE-2018-13379, CVE-2021-34473, etc.) to mitigate the risk of Ghost ransomware attacks.

2. **Enhance Cryptocurrency Exchange Security**  
   Bybit's theft serves as a wake-up call for the cryptocurrency industry. Implement multi-layered security controls and conduct regular audits of cold wallet protocols.

3. **Monitor for SQL Injection Flaws**  
   Given this week's disclosures, scan all web applications for SQL injection vulnerabilities and patch accordingly.

4. **Update Exiv2 Library to v0.28.5 or Later**  
   Users of the Exiv2 library should update to versions 0.28.5 or higher to address the heap buffer overflow vulnerability (CVE-2025-26623).

5. **Review WordPress Plugin Security**  
   Check if any instances of the Affiliate Links plugin are in use and apply updates to mitigate PHP object injection risks.

6. **Prepare for Potential Lazarus Group Activity**  
   Given the North Korean group's increasing focus on cryptocurrency, monitor for additional attacks targeting blockchain infrastructure.

7. **Conduct Regular Red Team/Blue Team Exercises**  
   Use this week's incidents as a reminder to test your organization's incident response plans and security protocols.

---

## Looking ahead
As we enter next week (February 24 - March 2, 2025), the following trends are expected to persist:  
- **Ransomware Activity:** Ghost ransomware is likely to continue targeting exposed internet-facing services. Defenders should remain vigilant for new campaigns leveraging known vulnerabilities.  
- **State-Sponsored Cyberattacks:** The Lazarus Group's activities suggest a growing focus on high-value targets in the financial sector, particularly cryptocurrency exchanges.  
- **Vulnerability Exploitation:** Expect increased activity around this week's disclosed CVEs, especially those impacting critical infrastructure and web applications.  

Organizations should maintain a proactive approach to threat intelligence gathering and incident response planning to mitigate these emerging risks.

--- 

This concludes the weekly threat intelligence digest for February 17 - 23, 2025. Stay safe and remain vigilant!