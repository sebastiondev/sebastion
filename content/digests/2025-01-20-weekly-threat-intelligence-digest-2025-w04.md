---
title: "Weekly threat intelligence digest — 2025-W04"
date: 2025-01-26T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 7 items, 5 CVEs. 1 high, 1 informational."
tags: [campaign, policy, supply-chain, threat-intelligence, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: January 20 - 26, 2025

## Executive summary
This week, cybersecurity threats highlight critical vulnerabilities across various sectors. A significant Mirai botnet campaign targeted Juniper routers using default credentials, enabling DDoS infrastructure. Multiple high-severity SQL injection flaws in the WeGIA application underscored the risks of open-source software. Additionally, a password reset vulnerability in IBM Security Verify Access and authentication bypass issues in WordPress plugins were reported. The week also saw CISA and FBI urging buffer overflow prevention through secure coding practices.

## Critical & high priority
### Mirai Botnet Targets Juniper Routers via Default Credentials
- **What happened**: A Mirai botnet variant exploited unpatched Juniper SSR routers using default SSH credentials, integrating them into DDoS networks.
- **Who's affected**: Organizations using Juniper Session Smart Router (SSR) with unchanged factory defaults are at risk.
- **What to do**: Immediately change default credentials, apply patches from Juniper, and monitor network traffic for Mirai signatures.

### IBM Security Verify Access Password Reset Vulnerability
- **CVE-2024-45647 (CVSS: 5.6)**: Unverified users could reset expired user passwords.
- **Who's affected**: Users of IBM Security Verify Access versions 10.0.0 to 10.0.8 and Docker versions up to 10.0.8.
- **What to do**: Apply updates from IBM and enforce multi-factor authentication for password resets.

### WordPress AdForest Theme Authentication Bypass
- **CVE-2024-12857 (CVSS: 9.8)**: Attackers bypass authentication via OTP login configuration.
- **Who's affected**: Sites using AdForest theme versions up to 5.1.8.
- **What to do**: Update to the latest version and disable OTP login unless necessary.

### Product Table by WBW SQL Injection
- **CVE-2024-13234 (CVSS: 7.5)**: Unauthenticated attackers can inject SQL commands via 'additionalCondition' parameter.
- **Who's affected**: Users of Product Table by WBW plugin up to 2.1.2.
- **What to do**: Update the plugin and use parameterized queries in future development.

### Xerox Workplace Suite File Manipulation Vulnerabilities
- **CVE-2024-55926 (CVSS: 7.6)**: Arbitrary file read, upload, and deletion via header manipulation.
- **Who's affected**: Users of Xerox Workplace Suite.
- **What to do**: Apply patches and enforce strict access controls on server files.

## Notable developments
### CISA and FBI Advisory on Buffer Overflow Prevention
- **Details**: Guidance emphasizes secure coding practices with memory-safe languages like Rust or Go.
- **Who's affected**: Software developers and manufacturers.
- **What to do**: Adopt best practices for buffer management and conduct regular code audits.

### SMA1000 Appliance Management Console Deserialization Vulnerability
- **CVE-2025-23006 (CVSS: 9.8)**: Pre-authentication deserialization allows OS command execution.
- **Who's affected**: Owners of SMA1000 and CMC appliances.
- **What to do**: Apply patches from the vendor and disable unnecessary services.

## Vulnerability landscape
This week, 10 new CVEs were reported:
- **Severity Distribution**: CVSS scores range from 5.6 to 9.8, with four at 9.8 (WeGIA, AdForest, Product Table, SMA1000).
- **Top Affected Vendors**: IBM, WordPress plugin developers, Xerox, HashiCorp, and Juniper.
- **Patterns**: Multiple high-severity issues in open-source tools like WeGIA and WordPress plugins.

## Recommended actions
1. Patch Juniper SSR routers immediately to address Mirai botnet risks.
2. Update AdForest theme to mitigate authentication bypass.
3. Secure WeGIA against SQL injection by applying patches.
4. Address buffer overflow vulnerabilities as per CISA/FBI guidelines.
5. Apply fixes for Product Table by WBW plugin's SQL injection.
6. Enforce access controls on Xerox Workplace Suite files.
7. Monitor network traffic for signs of Mirai botnet activity.

## Looking ahead
Next week, expect increased Mirai activity targeting unpatched IoT devices. Watch for new vulnerabilities in open-source tools and supply chain attacks leveraging component weaknesses. Stay vigilant for emerging DDoS campaigns using compromised routers.