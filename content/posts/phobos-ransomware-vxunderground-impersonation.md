---
title: "When ransomware borrows a trusted name"
date: 2025-01-06T12:00:00+00:00
draft: false
tags:
  - ransomware
  - malware
  - phobos
  - vx-underground
categories:
  - Security
  - Threat Intelligence
coverImage: /images/vxunderground/vxundergound_logo.png
description: "Phobos ransomware dressed itself up as Vx-Underground - ransom notes, file extensions and all. Here's what the impersonation looked like under the hood."
tier: free
contentType: research
author: Lewis
keyFindings:
  - "The Phobos variant appended .VXUG file extensions and dropped ransom notes referencing Vx-Underground's email, Twitter handle and book title."
  - "Phobos accounted for roughly 4% of all submissions to ID Ransomware in 2023 despite receiving far less attention than operations like LockBit or REvil."
  - "The sample showed no network traffic at all - no C2 communication - meaning it could operate entirely offline in air-gapped environments."
  - "Windows Firewall was disabled via netsh, Volume Shadow Copies deleted through vssadmin and WMIC, and boot recovery suppressed using bcdedit."
  - "The ransomware used AdjustTokenPrivilege for privilege escalation and SetWindowsHookEx for input monitoring - combining encryption with spyware behaviour."
artifacts:
  - type: reference
    url: https://bazaar.abuse.ch/browse/
    description: "MalwareBazaar - Malware sample repository"
  - type: reference
    url: https://malshare.com/
    description: "MalShare - Free malware sample repository"
---

Phobos is one of those ransomware families that does significant damage without ever becoming a household name. It accounted for roughly 4% of all submissions to the ID Ransomware identification service in 2023, but it doesn't carry the notoriety of LockBit or REvil. That gap says less about the malware itself and more about the economics of Ransomware-as-a-Service - platforms that have made launching a ransomware campaign about as technically demanding as setting up a Shopify store.

This particular variant caught my attention because of who it was pretending to be. Vx-Underground is a well-known malware research collective that maintains one of the largest publicly available malware repositories. The Phobos operators borrowed their name, their branding and their contact details to dress up the ransom notes. It's an odd choice for impersonation - a bit like a burglar leaving a calling card with a locksmith's name on it.

## What landed on the host

The sample was analysed in a cloud sandbox environment to replicate what a SOC analyst would see during triage. The file arrived as a 48KB zip archive and executed from the user's temp directory.

| Property | Value |
|----------|-------|
| **Family** | Phobos |
| **MD5** | 5f3689f795c7111c259d76bd19c509d3 |
| **SHA-256** | 35c01c9613c4f96a634ecebac702bdef8e1e194b96c3fc2d0b1bd997c2d8c98c |
| **File size** | 48KB |

Once running, the ransomware immediately set about dismantling the host's safety nets. It used `netsh.exe` to disable Windows Firewall, then turned to `vssadmin.exe` and `WMIC.exe` to delete all Volume Shadow Copies - the backup mechanism most users never think about until it's gone. Boot recovery was suppressed using `bcdedit.exe`, which altered the configuration to ignore failures and prevent automatic repair.

That sequence is methodical. Disable the firewall, destroy the backups, lock out recovery. By the time the encryption starts, the victim's options have already been removed.

## The impersonation

The Vx-Underground branding was woven through the entire attack chain. Multiple `.hta` files - HTML applications rendered by `mshta.exe` - were placed across the host, each displaying a ransom note that referenced Vx-Underground's official support email and Twitter handle alongside a unique victim ID.

![Vx-Underground HTA ransom note displayed via mshta.exe](/images/vxunderground/vx-undergroundhta.webp)

The encrypted files themselves were given a `.VXUG` extension, reinforcing the false attribution. The ransom note offered to decrypt five files for free - a common tactic to prove the attackers hold the decryption key and nudge the victim towards payment.

![Encrypted documents with .VXUG extension](/images/vxunderground/encrypted_docs.png)

The best detail sits in the accompanying text file. The ransomware dropped a note titled "Buy Black Mass Volume I.txt" - Black Mass being the name of Vx-Underground's own research and malware compendium. The note helpfully informed victims that the decryption password is not "infected", which is the password Vx-Underground uses across their entire malware repository. Whether this was a joke, a taunt or a genuine attempt at misdirection is hard to say, but it's one of the more self-aware touches I've seen in a ransomware campaign.

![Buy Black Mass Volume I ransom note](/images/vxunderground/Buy_Black_Mass_Volume_I.png)

## No phone home

One of the more operationally interesting findings was the complete absence of network traffic. The sample made no attempt to contact a command and control server. No DNS lookups, no HTTP callbacks, no exfiltration channels. It arrived, encrypted and waited.

That characteristic makes Phobos harder to detect through network monitoring and more dangerous in isolated environments. If your detection strategy relies heavily on spotting suspicious outbound connections, this variant slips through cleanly.

## The API calls worth noting

Two Windows API functions stood out during analysis, both repurposed from their intended use:

**AdjustTokenPrivilege** manages permissions in a process token. Here it was used to escalate the ransomware's process privileges, granting it the access level needed to modify system configurations and encrypt protected files.

**SetWindowsHookEx** installs hook procedures to monitor system events - keystrokes, mouse input, window messages. Its presence suggests the malware had spyware capabilities alongside the encryption payload, potentially capturing user input before or during the attack.

## ATT&CK mapping

The variant maps cleanly across several MITRE ATT&CK techniques:

- **Execution** - User execution via phishing attachment (T1204.002)
- **Persistence** - System process creation and registry modification for startup persistence (T1543.003, T1547.001)
- **Privilege escalation** - Token manipulation to run with elevated privileges (T1543.003, T1547.001)
- **Defence evasion** - Shadow copy deletion, registry modification and audit log clearing (T1070.004, T1112)
- **Credential access** - Targeting stored browser data and insecurely stored credentials (T1555.001, T1005)
- **Discovery** - Host fingerprinting including OS and hardware enumeration (T1082)
- **Impact** - File encryption across local and remote drives with backup destruction (T1486, T1490)

## Indicators of compromise

The following IoCs have been defanged to prevent accidental execution.

### Files and commands

| File | Command | PIDs |
|------|---------|------|
| `AppData\Local\Temp\763b...dbdeb.exe` | — | 1276, 2128 |
| `system32\cmd.exe` | — | 628, 2376, 1640 |
| `system32\vssadmin.exe` | `vssadmin delete shadows /all /quiet` | 2660, 1488 |
| `System32\Wbem\WMIC.exe` | `wmic shadowcopy delete` | 2328, 1616 |
| `system32\bcdedit.exe` | `bcdedit /set {default} bootstatuspolicy ignoreallfailures` | 2592, 472, 2180, 328 |
| `system32\netsh.exe` | `netsh advfirewall set currentprofile state off` | 2720, 2964 |
| `SysWOW64\mshta.exe` | Rendered `.hta` ransom notes | 2972, 692, 3004, 2968 |

### Contact and network indicators

- staff@vx-underground[.]org (impersonated)
- hxxps://bazaar[.]abuse[.]ch/browse/
- hxxps://malshare[.]com/

Phobos sits in a strange space. It's capable enough to do real damage, quiet enough to avoid the spotlight and brazen enough to wear someone else's name while doing it. The Vx-Underground impersonation adds a layer of dark comedy to an otherwise routine encryption-and-extortion playbook - but the underlying mechanics are sound, the defence evasion is thorough and the offline capability makes it a genuine headache for environments that rely on network-based detection.

The operators behind this variant understood the tools at their disposal. They just had an unusual sense of humour about attribution.
