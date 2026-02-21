---
title: "Critical Palo Alto Networks Expedition Vulnerability Enables Config and Credential Theft"
date: 2025-10-03T08:45:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Multiple critical vulnerabilities in Palo Alto Networks Expedition migration tool allow unauthenticated attackers to access firewall configuration files, credentials, and API keys stored in the tool's database."
tags: [palo_alto, expedition, credentials, configuration, network_security]
cves: [CVE-2025-41220, CVE-2025-41221]
affected: [Palo Alto Networks Expedition]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/palo-alto-expedition-critical-vulnerabilities/
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/10/03/palo-alto-expedition-vulnerabilities
---

**What happened:** Palo Alto Networks issued a critical security advisory for multiple vulnerabilities in Expedition, the company's migration and configuration tool. The most severe flaw allows unauthenticated access to the Expedition database, which typically contains firewall configurations, administrator credentials, API keys, and other sensitive data imported during migration projects. CISA confirmed active exploitation and urged organizations to check whether their Expedition instances contain sensitive data that may have been compromised.

**Technical details:** CVE-2025-41220 is an authentication bypass in the Expedition web interface that allows unauthenticated access to administrative functions, including database queries. CVE-2025-41221 is a command injection vulnerability in the same interface that enables arbitrary OS command execution. When combined, these vulnerabilities allow an unauthenticated attacker to extract all data from the Expedition database — including plaintext firewall admin credentials, SSL/TLS certificates, VPN pre-shared keys, and complete firewall rule sets — and execute commands on the underlying system. Expedition is often deployed temporarily for migration projects and may be left running with sensitive data without ongoing security monitoring.

**Who is affected:** Organizations that have used or are currently using Palo Alto Networks Expedition for firewall migration, configuration analysis, or policy optimization. Since Expedition is used to import and process configurations from multiple firewall vendors, the compromised data may include credentials and configurations for non-Palo Alto devices as well. The tool is commonly used by managed security service providers serving multiple clients.

**What defenders should do:** Take Expedition instances offline immediately if not actively needed. If the tool must remain operational, restrict access to trusted management networks. Rotate all credentials that were ever imported into Expedition, including firewall admin passwords, API keys, VPN pre-shared keys, and SSL certificates. Audit firewall configurations for unauthorized changes that may indicate an attacker used stolen credentials. Apply Palo Alto patches when available or decommission the tool.

**Broader implications:** Security tooling itself is increasingly targeted by attackers who recognize that these tools aggregate sensitive credentials and configurations. Expedition's role as a migration tool means it inherently accumulates credentials from multiple systems, making it a high-value target. Organizations must apply the same security rigor to security and management tools as they do to production systems, including timely patching, access restrictions, and decommissioning when tools are no longer needed.
