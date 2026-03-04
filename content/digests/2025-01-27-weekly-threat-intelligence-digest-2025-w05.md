---
title: "Weekly threat intelligence digest — 2025-W05"
date: 2025-02-02T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 7 items, 7 CVEs. 2 high, 1 medium."
tags: [campaign, policy, threat-intelligence, tool, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: January 27 - February 2, 2025

## Executive summary
This week saw a surge in critical security events, with Apple addressing an actively exploited zero-day vulnerability across its entire product lineup. The CoreMedia framework flaw (CVE-2025-24085) poses significant risks to iOS and macOS users, while threat actors continue to exploit vulnerabilities in SimpleHelp RMM software to deploy backdoors on managed networks. Additionally, the rapid adoption of DeepSeek AI tools raised serious security and privacy concerns, including exposed databases and potential data misuse. The overall threat level remains high due to these actively exploited issues and the potential for broader impact.

## Critical & high priority
### [HIGH] Apple Patches Actively Exploited Zero-Day in CoreMedia Framework
**What happened:**  
Apple released emergency security updates to fix a zero-day vulnerability (CVE-2025-24085) in the CoreMedia framework, which was being actively exploited against devices running older iOS versions. The vulnerability is a use-after-free memory corruption issue that could allow attackers to execute arbitrary code and escalate privileges.

**Who's affected:**  
All Apple device users, including iPhone, iPad, Mac, Apple TV, Apple Watch, and Vision Pro models, are at risk if they are running versions of iOS prior to 17.2 or equivalent OS updates for other devices.

**What to do:**  
- Update all Apple devices immediately to the latest available OS versions (iOS 18.3, macOS Sequoia 15.3, etc.) to patch this critical vulnerability.
- Monitor for additional updates and apply them promptly to ensure continued protection against potential follow-on exploits.

---

### [HIGH] SimpleHelp RMM Vulnerabilities Exploited to Deploy Backdoors
**What happened:**  
Security researchers identified a chain of vulnerabilities (CVE-2024-57726, CVE-2024-57727, CVE-2024-57728) in SimpleHelp's Remote Monitoring and Management (RMM) software that are being exploited to gain unauthorized access to client networks. The exploitation chain involves path traversal, privilege escalation, and arbitrary file upload vulnerabilities.

**Who's affected:**  
SimpleHelp RMM server operators and their managed clients are at risk of having backdoors deployed on their networks, leading to potential data breaches and system compromise.

**What to do:**  
- Apply patches for the identified vulnerabilities immediately.
- Conduct a thorough review of network access controls and implement additional monitoring for any signs of unauthorized access or unusual activity.
- Consider implementing multi-factor authentication (MFA) for critical systems to mitigate the risk of lateral movement by attackers.

---

### [HIGH] DeepSeek AI Raises Security and Privacy Concerns After Rapid Adoption
**What happened:**  
The rapid rise of Chinese AI lab DeepSeek's open-source models has sparked significant security and data privacy concerns. Researchers discovered an exposed ClickHouse database containing sensitive information, including chat histories, API keys, and backend operational data. Additionally, the DeepSeek mobile app was found to transmit user data to servers in China, raising concerns about data sovereignty and user privacy.

**Who's affected:**  
All users of DeepSeek APIs and mobile apps are at risk of having their data exposed or misused. The scope of impact includes businesses and individuals leveraging DeepSeek's tools for AI-related tasks.

**What to do:**  
- Immediately secure any exposed databases by applying proper authentication mechanisms and access controls.
- Review data handling practices within DeepSeek's platforms to ensure compliance with relevant privacy regulations (e.g., GDPR, CCPA).
- For users of the DeepSeek mobile app, consider alternative solutions or implement additional layers of data encryption and anonymization.

---

## Notable developments
### [MEDIUM] Additional Critical CVEs Identified in Dolibarr and Other Systems
Security researchers identified multiple critical vulnerabilities in popular software:

1. **Dolibarr Events/Agenda Module (CVE-2024-55227)**: A cross-site scripting (XSS) vulnerability in the Events/Agenda module of Dolibarr v21.0.0-beta allows attackers to inject arbitrary web scripts or HTML via a crafted payload injected into the Title parameter.
   
2. **Dolibarr Product Module (CVE-2024-55228)**: Another XSS vulnerability in the Product module, similar to the one above.

These vulnerabilities could be exploited by attackers to steal session cookies, inject malicious scripts, or perform other actions that compromise user sessions.

**What to do:**  
- Update Dolibarr installations to the latest stable version and apply patches for these vulnerabilities.
- Conduct a security audit of web applications to identify and mitigate any remaining XSS vulnerabilities.

---

### [MEDIUM] Apple Addresses Account Fingerprinting Vulnerability
Apple patched another critical vulnerability (CVE-2024-54512) in its operating systems, which could allow attackers to fingerprint users' Apple Accounts by leveraging system binaries. The issue was fixed in watchOS 11.3, iOS 18.3, and iPadOS 18.3.

**What to do:**  
- Ensure all devices are updated to the latest OS versions to prevent potential misuse of account information.

---

## Vulnerability landscape
### Weekly CVE Statistics
- **Total new CVEs tracked**: 4
- **Severity distribution**: All four vulnerabilities were classified as "High" severity.
- **Top affected vendors**: 
  - SimpleHelp: 3 vulnerabilities (CVE-2024-57726, CVE-2024-57727, CVE-2024-57728)
  - Apple: 1 vulnerability (CVE-2025-24085)

### Notable Patterns
- The week saw a strong focus on vulnerabilities in widely used software and frameworks, with particular attention to those that could lead to privilege escalation or persistent backdoor deployments.
- Apple's zero-day patch highlights the importance of maintaining up-to-date operating systems to mitigate active exploits.
- The DeepSeek incident underscores the risks associated with rapid adoption of new technologies, particularly when data handling practices are not thoroughly vetted.

---

## Recommended actions
1. **Update Apple Devices Immediately**: Apply patches for CVE-2025-24085 across all Apple devices to prevent exploitation of the zero-day vulnerability.
2. **Patch SimpleHelp RMM Software**: Address the three vulnerabilities in SimpleHelp RMM (CVE-2024-57726, CVE-2024-57727, CVE-2024-57728) to prevent backdoor deployments on managed networks.
3. **Secure DeepSeek Infrastructure**: Implement immediate fixes for exposed databases and review data transmission practices in the DeepSeek mobile app.
4. **Monitor for Network Intrusions**: Increase vigilance for signs of unauthorized access or异常activity following the SimpleHelp RMM exploits.
5. **Update Dolibarr Instances**: Patch the identified XSS vulnerabilities (CVE-2024-55227 and CVE-2024-55228) to prevent web application attacks.
6. **Review Apple Account Security**: Ensure all devices are updated to the latest OS versions to mitigate the account fingerprinting vulnerability (CVE-2024-54512).

---

## Looking ahead
Next week is expected to bring further updates on the DeepSeek incident, as well as potential new vulnerabilities in widely used software. Organizations should remain vigilant and prepare for possible follow-on exploits related to this week's critical patches. Additionally, the focus on AI-related security risks is likely to intensify as adoption continues to grow.

Stay proactive, stay updated, and prioritize patches to mitigate these high-severity threats.