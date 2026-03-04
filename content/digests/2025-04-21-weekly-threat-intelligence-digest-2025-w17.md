---
title: "Weekly threat intelligence digest — 2025-W17"
date: 2025-04-27T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 4 items, 7 CVEs. 1 critical."
tags: [campaign, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: April 21 - 27, 2025

## Executive summary
This week, cybersecurity threats have reached a critical level due to the discovery and exploitation of a zero-day vulnerability in SAP NetWeaver Application Server Java. The vulnerability (CVE-2025-31324) is being actively exploited by threat actors to upload webshells, enabling full remote control over enterprise SAP servers. This attack poses significant risks to businesses relying on SAP systems for critical operations. Additionally, several other vulnerabilities were disclosed this week, including issues in Traefik, GoBGP, and multiple flaws in the LibRaw library, though none matched the severity of the SAP zero-day.

## Critical & high priority
### [CRITICAL] SAP NetWeaver Zero-Day Exploited to Deploy Webshells on Enterprise Servers
- **What happened**: A critical zero-day vulnerability (CVE-2025-31324, CVSS 10.0) in SAP NetWeaver Visual Composer has been exploited in the wild. The flaw resides in the metadata uploader component, allowing unauthenticated file uploads that enable arbitrary command execution on affected servers.
- **Who's affected**: Enterprises using SAP NetWeaver Application Server Java with Visual Composer are at risk. This includes businesses across multiple industries relying on SAP for enterprise resource planning (ERP) and other critical operations.
- **What to do**: 
  - Apply patches provided by SAP as soon as possible.
  - Monitor logs for signs of unauthorized file uploads or webshell activity.
  - Conduct a thorough audit of SAP server configurations to ensure no unauthenticated access points are exposed.
  - Consider implementing additional layers of authentication and network segmentation for SAP environments.

## Notable developments
### Traefik Path-Based Routing Vulnerability Exposes Potential Misconfiguration Risks
- **What happened**: A vulnerability (CVE-2025-32431, CVSS 9.1) was disclosed in Traefik versions prior to 2.11.24 and 3.3.6. The issue arises when routing requests using path-based matchers, potentially allowing attackers to bypass intended routing policies if URLs contain `/../` sequences.
- **Who's affected**: Users of Traefik in environments where path-based routing is configured are at risk, particularly those handling sensitive APIs or web applications.
- **What to do**: Update Traefik to the latest stable version and review routing configurations for any potential misconfigurations.

### GoBGP RTR Message Handling Flaw Could Enable Remote Code Execution
- **What happened**: A vulnerability (CVE-2025-43973, CVSS 6.8) was identified in GoBGP versions prior to 3.35.0. The issue lies in the handling of RTR messages, where input validation is insufficient, potentially allowing attackers to inject malicious data.
- **Who's affected**: Network administrators and operators using GoBGP for Border Gateway Protocol (BGP) routing are at risk.
- **What to do**: Upgrade GoBGP to version 3.35.0 or later to mitigate this vulnerability.

### Multiple Vulnerabilities in LibRaw Library Expose Image Processing Risks
- **What happened**: Several vulnerabilities (CVE-2025-43961, CVE-2025-43962, CVE-2025-43963, and CVE-2025-43964) were disclosed in LibRaw versions prior to 0.21.4. These flaws expose out-of-bounds read issues in the processing of certain image metadata tags.
- **Who's affected**: Users of software or libraries that depend on LibRaw for image processing, including photographers and developers using affected tools.
- **What to do**: Update LibRaw to version 0.21.4 or later to address these vulnerabilities.

## Vulnerability landscape
This week saw a significant increase in critical vulnerabilities, with one new CVE tracked (CVE-2025-31324) and several others disclosed from previous weeks. The severity distribution highlights the risks associated with enterprise software and infrastructure tools:

- **Total new CVEs tracked**: 1
- **By severity**:
  - Critical: 1 (SAP NetWeaver)
  - High: None this week
  - Medium/Low: Several disclosed but not actively exploited.
- **Top affected vendors**:
  - SAP: 1 critical vulnerability
  - Traefik: 1 high-severity issue
  - GoBGP: 1 medium-severity flaw
  - LibRaw: Multiple low-to-medium severity vulnerabilities

The week also saw a notable increase in zero-day exploits, with the SAP vulnerability being actively exploited in the wild. This underscores the importance of patching critical systems promptly.

## Recommended actions
1. **Prioritize SAP NetWeaver Patches**: Immediately apply patches for CVE-2025-31324 to mitigate the risk of webshell deployments on enterprise servers.
2. **Review Traefik Configurations**: Ensure all instances of Traefik are updated to versions 2.11.24 or later to prevent path-based routing misconfigurations.
3. **Upgrade GoBGP Instances**: Update GoBGP to version 3.35.0 or higher to address the RTR message handling flaw.
4. **Patch LibRaw Dependencies**: For users of software relying on LibRaw, update to version 0.21.4 or later to resolve multiple image processing vulnerabilities.
5. **Monitor for Webshell Activity**: Implement logging and monitoring solutions to detect unauthorized webshell uploads in SAP environments.
6. **Conduct a Security Audit of Critical Systems**: Review all enterprise systems for unpatched vulnerabilities and misconfigurations, particularly those exposed to the internet.
7. **Educate Employees on Phishing Attempts**: Given the potential for supply chain attacks, ensure teams are aware of phishing attempts targeting software vendors.

## Looking ahead
Next week, cybersecurity defenders should remain vigilant for:
- Further exploits of the SAP NetWeaver zero-day as threat actors seek to compromise more enterprise systems.
- Additional vulnerabilities in widely used tools like Traefik and GoBGP, which could be exploited if not patched promptly.
- Potential supply chain attacks leveraging recently disclosed vulnerabilities in third-party libraries.
- Increased activity from APT groups targeting critical infrastructure after the discovery of such high-severity flaws.

The cybersecurity landscape continues to evolve rapidly, with attackers increasingly focusing on zero-day exploits in enterprise software. Defenders must prioritize patching and monitoring to stay ahead of these threats.