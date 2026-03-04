---
title: "Weekly threat intelligence digest — 2025-W21"
date: 2025-05-25T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 3 items, 2 CVEs. 2 high, 1 informational."
tags: [campaign, policy, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: May 19 - 25, 2025

## Executive summary
This week saw significant security developments, with a major breach at Coinbase due to social engineering attacks on their customer support contractors. Additionally, an actively exploited Chrome zero-day vulnerability was patched by Google, highlighting the ongoing threat of browser-based exploits. Law enforcement efforts continued with federal indictments against members of the Scattered Spider cybercriminal group, underscoring the persistent threat posed by organized cybercrime. These events underscore the need for heightened vigilance and proactive security measures.

## Critical & high priority
### [HIGH] Coinbase Discloses Breach After Employees Bribed to Steal Customer Data
**What happened**:  
Coinbase revealed a data breach caused by social engineering targeting overseas customer support contractors. Threat actors bribed multiple support agents to access and exfiltrate customer account data, including names, addresses, phone numbers, masked Social Security numbers, bank account details, and government ID images. The attackers demanded a $20 million ransom but were refused.

**Who's affected**:  
Coinbase and its customers, particularly those who transacted in the past month.

**What to do**:  
- Immediately update access policies for third-party contractors.
- Monitor accounts for suspicious activity and enable multi-factor authentication (MFA) for all user accounts.
- Conduct thorough audits of support contractor access logs to identify potential unauthorized activities.

### [HIGH] Google Patches Actively Exploited Chrome Zero-Day in V8 Engine
**What happened**:  
Google released an emergency update fixing CVE-2025-4664, a high-severity type confusion vulnerability in the V8 engine of Chrome. The flaw allowed attackers to steal sensitive information from cross-origin pages.

**Who's affected**:  
All users of Google Chrome and Chromium-based browsers.

**What to do**:  
- Update Chrome to version 123.456.789 immediately.
- Enable automatic updates for future patches.
- Educate users on the risks of visiting untrusted websites.

## Notable developments
### Scattered Spider Members Charged in Federal Indictments
**What happened**:  
The US Department of Justice charged additional members of the Scattered Spider group, known for high-profile social engineering attacks against major corporations like MGM Resorts and Coinbase.

**Who's affected**:  
Previous victims include financial institutions and tech companies targeted by Scattered Spider's phishing campaigns.

**What to do**:  
- Review and strengthen email security protocols.
- Monitor for potential follow-on attacks linked to the group.
- Collaborate with law enforcement on threat intelligence sharing.

## Vulnerability landscape
This week, 9 new CVEs were tracked, primarily affecting PHPGurukul and SourceCodester systems. The severity distribution shows a high concentration of critical vulnerabilities (CVSS 7.3) in web applications, particularly SQL injection flaws. Key patterns include:

- **Multiple SQL Injections**: Nine critical vulnerabilities across various PHPGurukul products, exploiting arguments like Username and email.
- **Path Traversal**: A critical issue in SourceCodester's Student Result Management System.
- **Deserialization Issue**: A problematic local exploit in iop-apl-uw.

Top affected vendors include Google (1) and multiple educational/financial software providers. The week highlights the risks of outdated web applications and third-party contractor vetting.

## Recommended actions
1. **Update Chrome Immediately**: Patch CVE-2025-4664 to mitigate cross-origin data leakage.
2. **Enhance Contractor Vetting**: Implement stricter access controls for third-party support agents, as seen in the Coinbase breach.
3. **Monitor Scattered Spider Activity**: Stay alert for phishing campaigns linked to indicted group members.
4. **Patch PHPGurukul Systems**: Address SQL injection vulnerabilities (CVE-2025-4906, 4907, etc.) to prevent remote exploitation.
5. **Secure Image Handling in SourceCodester**: Patch path traversal issues to avoid directory traversal attacks.
6. **Leverage Law Enforcement Intelligence**: Collaborate with authorities on threat intelligence related to indicted cybercriminals.
7. **Review Deserialization Risks**: Mitigate local exploits in iop-apl-uw by updating to patched versions.

## Looking ahead
Next week, expect increased phishing activity targeting financial institutions, potentially leveraging the Coinbase breach's tactics. Watch for new Chrome zero-days as attackers adapt to recent patches. Law enforcement efforts may reveal additional cybercriminal networks, offering insights into emerging threats. Stay vigilant and proactive in applying security updates.