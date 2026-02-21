---
title: "Fortinet Devices Found With Persistent Backdoors Surviving Patches"
date: 2025-04-03T09:15:00+00:00
severity: high
category: campaign
status: active
tldr: "Threat actors maintained persistent read-only access to Fortinet FortiGate devices through symlinks in the SSL-VPN language files, surviving firmware updates and patches applied by defenders."
tags: [fortinet, fortigate, persistence, china, symlink]
cves: []
affected: [Fortinet FortiGate devices with SSL-VPN enabled]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/fortinet-warns-attackers-can-persist-through-patching-via-ssl-vpn-symlink/
  - title: "The Record"
    url: https://therecord.media/fortinet-hackers-persistence-post-patch
---

**What happened:** Fortinet and CISA disclosed that threat actors have been maintaining persistent read-only access to FortiGate devices even after organizations applied patches for previously exploited vulnerabilities. The attackers created symbolic links in the SSL-VPN language file directories that connected the user filesystem to the root filesystem, allowing continued access to device configurations and credentials after remediation.

**Technical details:** The persistence mechanism exploits the SSL-VPN web interface's language file serving functionality. Attackers who previously compromised FortiGate devices through vulnerabilities like CVE-2022-42475, CVE-2023-27997, or CVE-2024-21762 created symlinks in the language file directory pointing to the root filesystem. Because language files are served from a public-facing directory, the symlinks survived firmware upgrades and allowed attackers to read device configurations, including credentials, through the SSL-VPN portal after patching. This technique was used by suspected Chinese state-sponsored actors.

**Who is affected:** Organizations running FortiGate devices that had SSL-VPN enabled and were previously compromised through known vulnerabilities. The threat is particularly acute for organizations that patched but did not perform thorough forensic analysis to verify the absence of persistent access mechanisms.

**What defenders should do:** Update to FortiOS versions with the symlink mitigation (7.6.2, 7.4.7, 7.2.11, 7.0.17, 6.4.16). Run Fortinet's recommended verification commands to check for symlinks in the language file directories. Reset all device credentials. Conduct forensic review of configurations and consider factory resetting compromised devices before redeployment.

**Broader implications:** This technique demonstrates that patching alone is insufficient when dealing with sophisticated adversaries. Post-compromise persistence that survives firmware updates represents a significant evolution in how threat actors maintain footholds, and it necessitates that defenders treat patch application as just one step in a comprehensive remediation and verification process.
