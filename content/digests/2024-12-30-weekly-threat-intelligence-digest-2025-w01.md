---
title: "Weekly threat intelligence digest — 2025-W01"
date: 2025-01-05T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 7 items, 2 CVEs. 5 high, 2 medium."
tags: [campaign, malware, threat-intelligence, tool, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly Threat Intelligence Digest: 2025-W01 (Dec 30 - Jan 5)

## executive summary
This week, the cybersecurity landscape was dominated by high-severity incidents and novel attack techniques. The Brain Cipher ransomware gang exploited a vulnerability in Rhode Island's RIBridges platform, leading to data leaks. A new exploit called DoubleClickjacking bypassed existing clickjacking protections, posing significant risks. State-sponsored Chinese actors compromised the U.S. Treasury Office, highlighting ongoing state-backed cyber espionage efforts. Additionally, critical vulnerabilities were uncovered in widely-used tools like Nessus and Nuclei, emphasizing the need for immediate action.

## critical & high priority

### Brain Cipher Ransomware Gang Exploits RIBridges Social Services Platform
- **What happened**: The Brain Cipher ransomware group exploited unpatched vulnerabilities in Rhode Island's RIBridges platform, resulting in data leaks.
- **Who’s affected**: Residents of Rhode Island and potentially other states using similar platforms are at risk due to exposed personal and sensitive information.
- **What to do**: Apply patches immediately, monitor for any signs of unauthorized access, and implement multi-factor authentication (MFA) for critical systems.

### DoubleClickjacking: A Novel Exploit Bypassing Clickjacking Protections
- **What happened**: This new exploit leverages double-click actions to bypass clickjacking protections, enabling unauthorized account hijacking.
- **Who’s affected**: Users of web applications with vulnerable clickjacking defenses are at risk of having their accounts taken over without consent.
- **What to do**: Implement additional layers of verification for sensitive actions and review existing clickjacking protection mechanisms.

### State-Sponsored Chinese Actors Compromise U.S. Treasury Office
- **What happened**: A state-sponsored group linked to China breached the Office of Foreign Assets Control (OFAC), potentially accessing sensitive sanctions-related data.
- **Who’s affected**: The U.S. government, financial institutions, and global businesses relying on OFAC data are at risk of compromised sanctions enforcement.
- **What to do**: Strengthen perimeter defenses, monitor traffic for signs of state-sponsored activity, and review access controls.

### Critical vulnerability CVE-2024-12898
- **What happened**: A vulnerability was found in 1000 Projects Attendance Tracking Management System 1.0. It has been declared as critical. This vulnerability affects unknown code of the file /admin/faculty_action.php...
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2024-12899
- **What happened**: A vulnerability was found in 1000 Projects Attendance Tracking Management System 1.0. It has been rated as critical. This issue affects some unknown processing of the file /admin/course_action.php....
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## notable developments

### Massive Mail Server Encryption Gap Exposes Users to Network Sniffing Attacks
- **What happened**: Over three million mail servers lack TLS encryption, exposing them to potential sniffing attacks and data interception.
- **Who’s affected**: Organizations and individuals using unencrypted email services are at risk of having their communications intercepted.
- **What to do**: Ensure all email traffic is encrypted with TLS 1.2 or higher and regularly audit server configurations.

### Google Chrome's Text Fragment Feature Enhances PDF Sharing Capabilities
- **What happened**: The new Text Fragment feature in Chrome’s PDF reader allows users to share specific parts of long PDFs, but may introduce new attack vectors.
- **Who’s affected**: Users sharing sensitive PDFs via this feature could inadvertently expose portions of documents.
- **What to do**: Exercise caution when using this feature with sensitive data and monitor for any security updates related to it.

## vulnerability landscape
This week saw no new CVEs tracked, but the severity of existing vulnerabilities remained high. The lack of new entries highlights a potential underreporting trend or a focus on zero-day exploits being kept private. The top affected vendors include state institutions, email service providers, and cybersecurity tools like Nessus and Nuclei, underscoring the need for robust security practices across all sectors.

## recommended actions
1. **Patch Management**: Immediately apply patches to systems affected by vulnerabilities in RIBridges, Nessus, and Nuclei.
2. **Monitor for Leaks**: Organizations using RIBridges should monitor data breach repositories like Have I Been Pwned for any exposed information.
3. **Enhance Clickjacking Protections**: Implement additional measures such as CAPTCHA or behavioral analysis to mitigate DoubleClickjacking risks.
4. **Secure Email Traffic**: Ensure all email communications are encrypted with TLS to prevent sniffing attacks.
5. **Review OFAC Access Controls**: Strengthen access controls and monitoring for systems handling sensitive sanctions-related data.

## looking ahead
Next week, expect increased scrutiny of state-sponsored activity following the U.S. Treasury breach. Additionally, researchers may uncover more vulnerabilities in widely-used tools like Nessus and Nuclei, so staying updated on security advisories will be critical. The development of DoubleClickjacking may also prompt a wave of similar exploits targeting other user interactions, requiring defenders to adapt their strategies accordingly.

Stay vigilant and prioritize proactive measures to mitigate these emerging threats.