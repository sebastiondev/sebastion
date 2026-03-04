---
title: "Weekly threat intelligence digest — 2025-W18"
date: 2025-05-04T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 5 items, 7 CVEs. 2 high."
tags: [campaign, malware, supply-chain, threat-intelligence, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: April 28 - May 4, 2025

## Executive summary
This week saw a surge in cyberattacks targeting major UK retailers, with both Marks & Spencer and The Co-op falling victim to sophisticated ransomware campaigns. These incidents, attributed to the DragonForce ransomware operation and Scattered Spider affiliates, disrupted critical business operations, including payment systems and supply chains. Additionally, multiple critical vulnerabilities were disclosed in various open-source and commercial software products, highlighting ongoing risks in web application security. Defenders should prioritize incident response readiness and vulnerability management to mitigate these emerging threats.

## Critical & high priority
### [HIGH] Marks and Spencer Hit by Major Cyberattack Disrupting Operations
**What happened:**  
Marks & Spencer (M&S), a leading UK retail giant, suffered a significant cyberattack that disrupted its operations. The attack targeted contactless payment terminals, click-and-collect services, online order fulfillment, and gift card processing across over 1,000 stores in the UK. The incident was attributed to the DragonForce ransomware operation, which collaborated with Scattered Spider threat actors known for their social engineering tactics.

**Who's affected:**  
- **Organization:** Marks & Spencer (M&S)  
- **Sectors Impacted:** Retail, Financial Services  
- **Geographic Scope:** UK  

**What to do:**  
1. **Isolate Infected Systems:** Immediately disconnect any compromised systems from the network to prevent further spread of ransomware.  
2. **Engage with Law Enforcement:** Report the incident to local law enforcement and consider working with the National Cyber Security Centre (NCSC) for incident response guidance.  
3. **Patch Known Vulnerabilities:** Ensure all systems are updated with the latest security patches, particularly focusing on known vulnerabilities in payment processing and supply chain management systems.  

---

### [HIGH] Co-op Forced to Shut Down IT Systems After Cyberattack
**What happened:**  
The Co-operative Group (Co-op), a major UK retailer and wholesaler, shut down significant portions of its IT infrastructure after detecting unauthorized access. The attack impacted back-office operations, supply chain systems, and customer-facing services. This incident occurred just days after the M&S attack, suggesting a coordinated campaign by the same threat actors.

**Who's affected:**  
- **Organization:** The Co-operative Group (Co-op)  
- **Sectors Impacted:** Retail, Food Supply Chain  
- **Geographic Scope:** UK  

**What to do:**  
1. **Conduct a Full Security Audit:** Identify and patch any vulnerabilities that may have been exploited during the attack.  
2. **Implement Multi-Factor Authentication (MFA):** Strengthen access controls for critical systems to prevent unauthorized access in the future.  
3. **Monitor for Ransomware Indicators:** Use advanced threat detection tools to monitor for signs of ransomware activity and isolate any suspicious files or processes.  

---

## Notable developments
### [MEDIUM] Surge in Critical SQL Injection Vulnerabilities in PHPGurukul Products
**What happened:**  
This week, multiple critical vulnerabilities were disclosed in various products from PHPGurukul, a provider of web-based management systems. These vulnerabilities include:

- **CVE-2025-3998 (CVSS: 7.3):** A SQL injection flaw in the CodeAstro Membership Management System 1.0, affecting the renew.php file.  
- **CVE-2025-4004 (CVSS: 7.3) and CVE-2025-4005 (CVSS: 7.3):** SQL injection vulnerabilities in the COVID19 Testing Management System 1.0, impacting password-recovery.php and patient-report.php files.  
- **CVE-2025-4013 (CVSS: 7.3) and CVE-2025-4014 (CVSS: 7.3):** SQL injection flaws in the Art Gallery Management System 1.0, affecting aboutus.php and manage-art-medium.php files.  
- **CVE-2025-4020 (CVSS: 7.3):** A critical SQL injection vulnerability in the Old Age Home Management System 1.0, impacting the contact.php file.  

These vulnerabilities allow remote attackers to inject malicious SQL commands, leading to unauthorized data access or manipulation.

**Who's affected:**  
- **Organization:** PHPGurukul  
- **Sectors Impacted:** Healthcare, Elderly Care, Art Gallery Management, Membership Services  

**What to do:**  
1. **Patch Affected Systems Immediately:** Users of these products should apply patches provided by PHPGurukul to mitigate the risks.  
2. **Conduct Penetration Testing:** Organizations using similar web-based management systems should perform regular penetration testing to identify and remediate similar vulnerabilities.  

---

### [NOTABLE] Remote Code Execution Vulnerability in IPW Systems Metazo
**What happened:**  
A critical Remote Code Execution (RCE) vulnerability was disclosed in IPW Systems Metazo, affecting versions up to 8.1.3. The vulnerability resides in smartyValidator.php and allows unauthenticated attackers to execute arbitrary code on the server by manipulating template expressions.

**Who's affected:**  
- **Organization:** IPW Systems  
- **Sectors Impacted:** Web Development, E-commerce  

**What to do:**  
1. **Apply Patches Provided by Vendor:** The supplier has already released patches for this vulnerability. Ensure your systems are updated immediately.  
2. **Monitor for Exploitation Attempts:** Use intrusion detection systems (IDS) and web application firewalls (WAFs) to detect and block potential exploitation attempts.  

---

## Vulnerability landscape
### Weekly CVE Analysis
- **Total CVEs Identified This Week:** 9  
- **Severity Distribution:**  
  - CVSS Score of 10.0: 1 (RCE in IPW Systems Metazo)  
  - CVSS Scores of 7.3: 6 (SQL injection vulnerabilities in PHPGurukul products)  
  - CVSS Score of 5.4: 2 (Improper Authorization and Missing Authentication in Novel-Plus)  

- **Top Affected Vendors:**  
  - IPW Systems Metazo  
  - PHPGurukul  
  - CodeAstro  
  - Novel-Plus  

- **Notable Patterns:**  
  - A cluster of critical SQL injection vulnerabilities in PHPGurukul products, indicating a potential coordinated attack campaign targeting healthcare and elderly care sectors.  
  - The disclosure of multiple high-severity vulnerabilities in open-source and commercial software, emphasizing the need for regular updates and patch management.  

---

## Recommended actions
1. **Patch Critical Vulnerabilities Immediately:** Focus on applying patches for CVE-2025-46661 (IPW Systems Metazo RCE) and all SQL injection vulnerabilities in PHPGurukul products.  
2. **Enhance Supply Chain Security:** Retailers and logistics companies should implement robust security measures to protect against ransomware attacks, including regular backups and MFA for critical systems.  
3. **Monitor for Ransomware Activity:** Organizations should deploy advanced threat detection tools to identify signs of ransomware activity, such as unusual network traffic or encrypted files.  
4. **Conduct a Security Audit for Web Applications:** Review web-based management systems for SQL injection vulnerabilities and implement input validation and parameterized queries.  
5. **Prepare for Potential Ransomware Incidents:** Develop and test incident response plans to minimize downtime and recovery time in case of a ransomware attack.  

---

## Looking ahead
Next week, cybersecurity professionals should watch for:  
- Further activity from the DragonForce ransomware group targeting other UK retailers or critical infrastructure sectors.  
- Exploitation attempts against the disclosed vulnerabilities in PHPGurukul and IPW Systems products.  
- Potential updates to the Scattered Spider toolkit, which may include new social engineering techniques or malware variants.  

The ongoing wave of retail sector attacks underscores the importance of proactive security measures and collaboration between industry players and law enforcement to combat these threats effectively.