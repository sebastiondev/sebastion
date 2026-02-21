---
title: "Fortinet FortiGate Firewalls Compromised via New Authentication Bypass Zero-Day"
date: 2026-01-06T09:00:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A new critical authentication bypass in Fortinet FortiOS allows unauthenticated attackers to gain super-admin privileges on FortiGate firewalls, with mass exploitation already underway targeting internet-exposed management interfaces."
tags: [fortinet, fortios, fortigate, authentication_bypass, zero-day, firewall]
cves: [CVE-2026-0101]
affected: [Fortinet FortiOS, FortiGate firewalls]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/fortinet-fortigate-zero-day-super-admin/
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2026/01/06/fortinet-fortios-authentication-bypass
---

**What happened:** Fortinet disclosed a critical authentication bypass vulnerability in FortiOS that allows remote unauthenticated attackers to gain super-admin privileges on FortiGate firewalls through crafted requests to the Node.js websocket module. Mass exploitation was already underway before the advisory was published, with threat actors creating rogue admin accounts, modifying firewall policies, and establishing VPN tunnels for persistent network access. CISA issued an alert and added the vulnerability to the Known Exploited Vulnerabilities catalog on the same day.

**Technical details:** CVE-2026-0101 is an authentication bypass in the FortiOS administrative interface's Node.js websocket handler. An attacker can send specially crafted websocket upgrade requests that bypass the authentication check, gaining access to administrative API endpoints with super-admin privileges. Post-exploitation, attackers create new administrative accounts, extract device configurations (which may contain VPN credentials and certificates), modify firewall rules to allow attacker traffic, and configure SSL-VPN tunnels for persistent access. Some attackers have been observed deploying firmware-level persistence that survives standard remediation steps.

**Who is affected:** Any organization running FortiGate firewalls with the management interface exposed to the internet. FortiGate is one of the most widely deployed enterprise firewall platforms globally, with hundreds of thousands of internet-facing instances. The super-admin access allows complete control over the firewall and all its VPN, routing, and security functions.

**What defenders should do:** Apply Fortinet patches immediately. If unable to patch, disable HTTP/HTTPS administrative access from the internet using local-in policies. Check for unauthorized admin accounts and configuration changes. Review SSL-VPN configurations for rogue tunnels. Export and diff current configuration against a known-good baseline. If compromise is confirmed, rebuild the firewall from scratch using a known-clean firmware image rather than updating in-place. Rotate all credentials that were stored on or transited the firewall.

**Broader implications:** Fortinet's recurring critical vulnerabilities — this is the fourth major FortiOS authentication bypass in three years — are forcing organizations to fundamentally reconsider their network perimeter architecture. The pattern of pre-advisory mass exploitation suggests that sophisticated threat actors are discovering or obtaining these vulnerabilities before patches are available. Organizations that cannot guarantee rapid patching of perimeter devices must implement out-of-band monitoring and zero-trust architectures that do not rely on the firewall as the sole security boundary.
