---
title: "Weekly threat intelligence digest — 2026-W09"
date: 2026-03-01T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 36 items, 57 CVEs. 29 critical, 1 low, 5 high, 1 medium."
tags: [campaign, malware, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: February 27 - March 5, 2026  

## Executive summary
This week saw a surge in critical vulnerabilities across multiple industries, including electric vehicle (EV) charging stations, industrial control systems, and AI gateways. Malicious actors demonstrated increased sophistication, targeting air-gapped networks and exploiting third-party software weaknesses. A notable data exposure incident in South Korea highlighted the risks of poor security practices in government agencies. Defenders must prioritize patching and monitoring to mitigate these threats.

---

## Critical & high priority
### 1. **Critical Vulnerabilities in EV Energy Charging Stations**  
- **What happened**: Multiple critical vulnerabilities were discovered in EV Energy's charging stations, allowing attackers to gain administrative control or disrupt services. These flaws pose significant risks to the growing EV infrastructure.  
- **Who’s affected**: EV charging networks and electric vehicle users relying on these stations.  
- **What to do**: Apply patches immediately and conduct thorough security audits of charging station firmware.  

### 2. **Multiple Critical Vulnerabilities in Copeland XWEB Devices**  
- **What happened**: Over 30 critical vulnerabilities were identified in Copeland’s XWEB and XWEB Pro devices, enabling attackers to bypass authentication, cause denial-of-service (DoS), and execute arbitrary code.  
- **Who’s affected**: Industrial facilities and critical infrastructure using these devices.  
- **What to do**: Update firmware to the latest version and disable unnecessary features or services.  

### 3. **APT37 Exploits New Malware for Air-Gap Network Attacks**  
- **What happened**: North Korean state-sponsored group APT37 is leveraging new malware to breach air-gapped networks, focusing on removable drives and covert surveillance.  
- **Who’s affected**: Industrial and government organizations with air-gapped systems.  
- **What to do**: Enforce strict policies around removable media and monitor for unusual network activity.  

### 4. **South Korea Tax Agency Crypto Wallet Seed Exposure**  
- **What happened**: The National Tax Service inadvertently exposed a cryptocurrency wallet seed in a press release, leading to a $4.8 million theft.  
- **Who’s affected**: South Korean taxpayers and cryptocurrency holders.  
- **What to do**: Strengthen internal security protocols and conduct regular audits of sensitive data disclosures.  

---

## Notable developments
### 1. **Windows 11 Enhances Batch File Security**  
- Microsoft introduced improvements in Windows 11 Insider Preview builds to mitigate script-based attacks via batch files and CMD scripts. This move addresses a common attack vector for malicious actors.  

### 2. **Third-Party Software Risks**  
- Third-party software, such as PDF readers and email clients, continues to pose significant risks. Organizations must prioritize consistent patching and consider adopting zero-trust principles for external tools.  

---

## Vulnerability landscape
This week saw a sharp increase in tracked CVEs, with 332 new vulnerabilities reported. The severity distribution highlights:  
- **Critical**: 57 (17%)  
- **High**: 185 (56%)  
- **Medium/Low/Unknown**: 90 (27%)  

The top affected vendors include:  
- Mozilla (44 CVEs)  
- Copeland (23 CVEs)  
- ImageMagick (8 CVEs)  
- Yokogawa (6 CVEs)  

The trend suggests a growing focus on industrial and IoT systems, with vulnerabilities in EV infrastructure, AI gateways, and industrial control systems dominating the landscape.  

---

## Recommended actions
1. **Patch Critical Vulnerabilities**: Prioritize updates for Copeland XWEB devices, EV Energy charging stations, and any other systems with known critical flaws.  
2. **Monitor Air-Gap Networks**: Implement additional security measures for air-gapped environments to counter APT37’s new malware capabilities.  
3. **Secure Third-Party Software**: Regularly update third-party tools like PDF readers and email clients, and consider adopting zero-trust policies.  
4. **Review Internal Security Practices**: Following the South Korea tax agency incident, ensure your organization has robust data handling protocols to prevent sensitive information exposure.  

---

## Looking ahead
Next week, expect:  
- More vulnerabilities in industrial control systems (ICS) as attackers target critical infrastructure.  
- Increased activity from APT37 and similar groups targeting air-gapped networks.  
- Potential exploitation of newly disclosed vulnerabilities in EV charging stations and AI gateways.  

Defenders should remain vigilant and prepare for a continued rise in sophisticated attacks targeting niche industries and emerging technologies.