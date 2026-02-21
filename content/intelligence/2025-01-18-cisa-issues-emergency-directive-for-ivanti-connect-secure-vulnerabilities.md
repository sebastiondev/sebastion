---
title: "CISA Issues Emergency Directive for Ivanti Connect Secure Vulnerabilities"
date: 2025-01-18T07:55:00+00:00
severity: critical
category: policy
status: active
tldr: "CISA has issued an emergency directive ordering federal agencies to mitigate Ivanti Connect Secure vulnerabilities amid widespread exploitation by nation-state actors."
tags: [cisa, ivanti, emergency_directive, federal_agencies]
cves: [CVE-2025-0282, CVE-2025-0283]
affected: [US Federal agencies running Ivanti Connect Secure]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/emergency-directive-25-01
---

**What happened:** The Cybersecurity and Infrastructure Security Agency (CISA) issued Emergency Directive 25-01, requiring all federal civilian executive branch agencies to take immediate action against actively exploited vulnerabilities in Ivanti Connect Secure and Ivanti Policy Secure. The directive comes as exploitation of CVE-2025-0282 has expanded significantly since its initial disclosure.

**Technical details:** The emergency directive mandates that agencies run the latest version of Ivanti's Integrity Checker Tool (ICT) and report results to CISA. Agencies with clean ICT results must apply the available patches by specified deadlines. Agencies showing signs of compromise must immediately disconnect affected products, conduct forensic analysis, and report findings to CISA. The directive applies to all instances of Ivanti Connect Secure and Policy Secure in federal networks.

**Who is affected:** All US federal civilian executive branch agencies running Ivanti Connect Secure or Policy Secure appliances. The broader directive also serves as a warning to private sector organizations and state and local governments to take similar action.

**What defenders should do:** Even non-federal organizations should follow the directive's guidance: run the ICT tool, patch to the latest versions, and disconnect compromised appliances for forensic analysis. Implement enhanced monitoring for post-exploitation activity including lateral movement, new account creation, and unusual VPN tunneling behavior.

**Broader implications:** This is the second consecutive year CISA has issued an emergency directive for Ivanti products, following ED-24-01 in January 2024. The recurring nature of these critical vulnerabilities in perimeter security devices is driving discussion about the security posture of VPN and network access products and the need for architectural alternatives.
