---
title: "Critical Citrix NetScaler ADC Vulnerability Exploited for Credential Harvesting"
date: 2025-11-04T08:30:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical zero-day vulnerability in Citrix NetScaler ADC and Gateway allows unauthenticated remote code execution, with threat actors injecting credential-harvesting JavaScript into login pages."
tags: [citrix, netscaler, adc, gateway, credential_harvesting, zero-day]
cves: [CVE-2025-44501]
affected: [Citrix NetScaler ADC, Citrix NetScaler Gateway]
sources:
  - title: "Mandiant Blog"
    url: https://www.mandiant.com/resources/blog/citrix-netscaler-exploitation-credential-harvesting
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/citrix-netscaler-zero-day-credential-harvesting/
---

**What happened:** Citrix published an emergency advisory for a critical vulnerability in NetScaler ADC and Gateway that is being actively exploited for credential harvesting. Mandiant identified the exploitation campaign, in which threat actors first gain code execution on the NetScaler appliance and then inject malicious JavaScript into the VPN login page. The injected code captures user credentials in real-time as employees authenticate, sending them to attacker-controlled infrastructure. The campaign has affected organizations across financial services, technology, and government sectors.

**Technical details:** CVE-2025-44501 is a stack buffer overflow in the NetScaler appliance's NSPPE (NetScaler Packet Processing Engine) triggered by specially crafted HTTP requests. Exploitation allows unauthenticated remote code execution as root on the appliance. Post-exploitation, attackers modify the NetScaler Gateway login page by injecting a JavaScript payload that hooks the authentication form submission, exfiltrating credentials to an external endpoint before allowing the legitimate authentication to proceed. This approach is invisible to end users, as they experience a normal login flow. The attackers also deploy persistent backdoors and SSH tunnels for continued access.

**Who is affected:** Organizations using Citrix NetScaler ADC and Gateway for application delivery, load balancing, and VPN access. NetScaler Gateway is commonly used for remote access VPN, making credential harvesting from its login page particularly dangerous — captured credentials provide legitimate VPN access to the corporate network.

**What defenders should do:** Apply Citrix patches immediately. Inspect NetScaler Gateway login page source code for unauthorized JavaScript injections. Review NetScaler appliance file system integrity for unauthorized modifications. Force password resets for all users who authenticated through the NetScaler Gateway during the vulnerability window. Enable MFA for VPN access if not already implemented, as stolen passwords alone would not grant access. Monitor for unusual VPN login activity using captured credentials.

**Broader implications:** NetScaler exploitation for credential harvesting represents a sophisticated attack that leverages the appliance's position as a trusted authentication endpoint. Unlike traditional exploitation that deploys malware or ransomware, this approach silently harvests credentials to enable future attacks through legitimate channels. The technique makes detection harder because the attacker's subsequent access uses valid credentials through normal authentication flows. This approach may become a preferred tactic for patient, espionage-focused threat actors.
