---
title: "They stole the blueprints and the list of unlocked doors"
date: 2025-10-20T10:00:00+00:00
draft: false
tags:
  - security
  - apt
  - supply-chain
  - espionage
categories:
  - Security
  - Threat Intelligence
description: "A nation-state actor spent a year inside F5's network, stealing BIG-IP source code and a catalogue of unpatched vulnerabilities. The breach didn't just compromise one vendor - it handed an adversary a roadmap to every network running the product."
author: Lewis
coverImage: /images/f5-big-ip-unc5221-source-code-theft/article-resecurity-featured.jpg
keyFindings:
  - "UNC5221 maintained persistent access to F5's internal network for more than 12 months before discovery on 9 August 2025 - stealing BIG-IP source code across all modules, information on undisclosed vulnerabilities and engineering knowledge management data."
  - "CISA issued Emergency Directive ED-26-01 on 15 October 2025 calling it an 'imminent threat to federal networks' - the first emergency directive triggered by a vendor source code theft rather than an active exploitation campaign."
  - "F5's quarterly security advisory following the breach disclosed 44 vulnerabilities including 27 rated High severity - compared to just 6 in the previous quarter - as the company raced to patch flaws the attackers already knew about."
  - "Mandiant's September 2025 research found that BRICKSTORM-related intrusions averaged 393 days of dwell time, with the backdoor deployed on appliances that do not support traditional endpoint detection and response tools."
  - "The UK's NCSC and CISA both issued advisories warning that successful exploitation could enable access to embedded credentials and API keys, lateral movement, data exfiltration and persistent system access across all BIG-IP product lines."
artifacts:
  - type: reference
    url: https://www.resecurity.com/blog/article/f5-big-ip-source-code-leak-tied-to-state-linked-campaigns-using-brickstorm-backdoor
    description: "Resecurity - F5 BIG-IP source code leak tied to state-linked campaigns using BRICKSTORM backdoor"
  - type: reference
    url: https://cloud.google.com/blog/topics/threat-intelligence/brickstorm-espionage-campaign
    description: "Mandiant/GTIG - Another BRICKSTORM: stealthy backdoor enabling espionage into tech and legal sectors"
  - type: reference
    url: https://thehackernews.com/2025/10/f5-discloses-big-ip-source-code-theft.html
    description: "The Hacker News - F5 discloses BIG-IP source code theft by nation-state actor"
  - type: reference
    url: https://www.ncsc.gov.uk/news/compromise-of-f5-network
    description: "UK NCSC - Advisory on compromise of F5 network"
  - type: reference
    url: https://www.hackthebox.com/blog/f5-big-ip-breach-unc5221-brickstorm
    description: "HackTheBox - Anatomy of the F5 BIG-IP breach and BRICKSTORM backdoor"
  - type: reference
    url: https://arxiv.org/abs/2402.18401
    description: "Siadati et al. 2024 - Exploring social engineering in software supply chain attacks on developers"
---

F5 discovered on 9 August 2025 that someone had been living inside its network. The company engaged Mandiant and CrowdStrike, and what the investigation found changed the threat model for every organisation running BIG-IP. A nation-state actor - attributed by multiple research teams to the China-nexus cluster UNC5221 - had maintained persistent access for more than twelve months. They had stolen source code across all BIG-IP modules. They had stolen information about undisclosed vulnerabilities. And they had taken data from the engineering knowledge management platform - the internal documentation that describes how the product actually works.

On 15 October 2025, F5 filed an 8-K with the Securities and Exchange Commission. The same day, CISA issued Emergency Directive ED-26-01. The Department of Justice had previously allowed F5 to delay public disclosure under a provision reserved for breaches that pose "a substantial risk to national security or public safety."

## Not a typical breach

Source code theft is not new. What made this different was the combination of what was taken. Source code gives an attacker the ability to perform static analysis - reading through millions of lines of code to find logical flaws, memory corruption bugs and authentication bypasses. But F5's attackers also stole vulnerability information that had not yet been publicly disclosed. They did not need to find the flaws themselves. They had the list.

Michael Sikorski, CTO of Unit 42 at Palo Alto Networks, put it plainly to The Hacker News: "If an attacker steals source code, it takes time to find exploitable issues... they also stole information on undisclosed vulnerabilities... providing ability to exploit vulnerabilities that have no public patch."

The timing of F5's next quarterly security advisory underscored the urgency. It disclosed 44 vulnerabilities - 27 rated High severity - compared to just 6 in the previous quarter. F5 was racing to patch the flaws before the attackers could weaponise them. Whether that race was won is something only UNC5221 knows for certain.

![Resecurity's technical analysis of the BRICKSTORM backdoor - a statically linked Go ELF binary with embedded TLS, HTTP/2, WebSocket and Yamux multiplexing capabilities](/images/f5-big-ip-unc5221-source-code-theft/article-resecurity-brickstorm-analysis.png)

## The tool that stayed quiet

BRICKSTORM is the backdoor that made the dwell time possible. Written in Go, statically linked and compiled as a Linux ELF binary, it is designed for appliances - devices that run stripped-down operating systems and do not support traditional endpoint detection and response tools.

Resecurity's analysis - the first public breakdown of BRICKSTORM's internals - documented a self-contained executable that embeds its own TLS client, HTTP/1.1 and HTTP/2 support, WebSocket session handling and Yamux for multiplexing streams over a single socket. It includes a SOCKS proxy for pivoting into internal networks and a multipart/form-data stack that disguises exfiltration as ordinary web traffic using base64 encoding and compression. No hardcoded domains. No hardcoded credentials. The operator supplies the command-and-control parameters at runtime.

Mandiant's September 2025 research on BRICKSTORM campaigns across US companies in legal services, SaaS and technology sectors measured an average dwell time of 393 days. In multiple investigations, the attacker deployed BRICKSTORM on edge appliances before moving laterally to VMware vCenter servers - using captured credentials to clone virtual machines of domain controllers and credential vaults, extracting sensitive files without ever powering on the cloned systems. The security tools installed on those servers never executed.

The operational discipline was precise. Mandiant observed the attackers creating local accounts on vCenter, installing BRICKSTORM via SSH, then deleting the accounts within minutes. In at least one case, when a victim organisation began its incident response investigation, UNC5221 deployed a new BRICKSTORM sample with a delay timer - set to wait months before beaconing - onto an internal vCenter server. They were watching the defenders work.

## What sits at the edge

BIG-IP is not a niche product. F5's load balancers, web application firewalls and SSL/TLS termination devices sit at the boundary of enterprise networks - processing, inspecting and routing traffic before it reaches application servers. They often hold SSL certificates, API keys and session tokens. They see everything.

The UK's National Cyber Security Centre issued an advisory on 15 October confirming the compromise and listing every affected product: BIG-IP iSeries, rSeries, TMOS, VE, BIG-IP Next, BIG-IQ and BIG-IP Next for Kubernetes and CNF. The advisory warned that "successful exploitation could enable a threat actor to access embedded credentials and API keys, move laterally, exfiltrate data, and establish persistent system access."

![BRICKSTORM's SOCKS proxy capability allows attackers to tunnel through compromised BIG-IP appliances to reach internal networks, with exfiltration disguised as ordinary web traffic](/images/f5-big-ip-unc5221-source-code-theft/article-resecurity-brickstorm-socks.png)

This is the core problem with edge device compromise. These appliances are trusted by design - they terminate encrypted connections, hold privileged credentials and sit between the internet and everything else. When a nation-state steals the source code for one of the most widely deployed edge platforms, they are not just compromising a vendor. They are acquiring a detailed understanding of the security architecture that thousands of organisations depend on.

Mandiant's asset inventory guidance in the BRICKSTORM report captured the challenge with an iceberg metaphor. Traditional security tools cover what is visible - workstations, servers, cloud instances. Below the waterline sit the appliances, edge devices and network infrastructure that organisations often do not inventory, do not monitor and cannot run EDR on. These are the systems UNC5221 targets.

## The actor

UNC5221 is not new to this. The cluster has been [tracked by Mandiant since at least 2023](https://cloud.google.com/blog/topics/threat-intelligence/china-nexus-exploiting-critical-ivanti-vulnerability), with campaigns exploiting zero-day vulnerabilities in Ivanti Connect Secure VPN appliances in January 2024 and again through 2025. GTIG noted that while UNC5221 has been used synonymously with the actor publicly reported as Silk Typhoon, they do not currently consider the two clusters to be the same.

The targeting pattern is consistent: perimeter infrastructure and remote access appliances where security monitoring is weakest. In the BRICKSTORM campaigns documented by Mandiant, the actor targeted email mailboxes of individuals involved in matters aligning with PRC economic and espionage interests. They accessed internal code repositories by logging into web interfaces with legitimate credentials and downloading repositories as ZIP archives. The objective was not disruption. It was collection - quiet, sustained and strategically directed.

Resecurity's analysis found that portions of BRICKSTORM's codebase appeared to originate from repositories maintained in China. Some of these repositories, they noted, were "maliciously designed to attack user systems" - a finding that connects to [broader academic research](https://arxiv.org/abs/2402.18401) on how software supply chain attacks exploit trust relationships between developers and the open-source ecosystem.

The pattern of Chinese APT activity targeting critical infrastructure has been [increasingly visible across the Asia-Pacific region](/posts/singapore-unc3886-cyber-attribution). Singapore's public attribution of UNC3886 in July 2025 - a separate China-nexus cluster targeting telecom infrastructure with custom rootkits - demonstrated that these operations span multiple threat actors, multiple sectors and multiple continents.

## The emergency directive

CISA's Emergency Directive ED-26-01 described the breach as posing an "imminent threat to federal networks." It required all Federal Civilian Executive Branch agencies to inventory their F5 BIG-IP products, ensure management interfaces were not exposed to the internet, apply all available patches by 22 October and report compliance by 29 October.

The directive was notable for what triggered it. Previous emergency directives - for SolarWinds, Log4Shell, Microsoft Exchange - were issued in response to active exploitation of vulnerabilities. ED-26-01 was issued in response to stolen source code and vulnerability data. CISA was not responding to an attack that had happened. It was responding to attacks that were now possible.

F5 stated there was no evidence that the stolen source code had been modified - ruling out a supply chain backdoor scenario like the one that [compromised the tj-actions GitHub Action](/posts/tj-actions-supply-chain-attack) earlier in 2025. And they said there was no evidence that any undisclosed vulnerabilities had been exploited in the wild. But the absence of evidence is not evidence of absence, and the 44-vulnerability patch release suggested F5 was not taking chances.

By December 2025, CISA, the NSA and the Canadian Centre for Cyber Security released additional indicators of compromise including Rust-based BRICKSTORM samples - showing active development of the malware well after the breach was disclosed.

## What changes

The F5 breach sits at an uncomfortable intersection. It is not a vulnerability that can be patched. It is not a misconfiguration that can be corrected. It is a permanent transfer of knowledge - source code, vulnerability data and architectural documentation now in the hands of an adversary that has demonstrated the patience to sit inside a network for over a year before acting.

For organisations running BIG-IP, the immediate response is clear: inventory, isolate management interfaces, patch aggressively and hunt for BRICKSTORM indicators. Mandiant released a [scanner tool](https://github.com/mandiant/brickstorm-scanner) specifically for detecting the backdoor on appliances. The NCSC advisory laid out the same priorities - identify all F5 products, restrict exposure, engage F5's SIRT if compromise is suspected.

But the structural question is harder. Edge devices are the load-bearing walls of network security. They are trusted implicitly, monitored poorly and designed to be invisible when working correctly. When the vendor that builds those devices is compromised to this depth - source code, vulnerability data, internal documentation - the trust model that the entire architecture relies on is no longer intact.

The question after this breach is not whether UNC5221 will use what they stole. It is whether the defenders will change the architecture before they do.
