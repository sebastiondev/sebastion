---
title: "Naming the ghost without saying its name"
date: 2025-07-21T10:00:00+00:00
draft: false
tags:
  - security
  - apt
  - attribution
  - espionage
categories:
  - Security
  - Threat Intelligence
description: "Singapore publicly named the threat group attacking its critical infrastructure. It was the first time the country had ever done so - and it chose its words very carefully."
author: Lewis
coverImage: /images/singapore-unc3886-cyber-attribution/article-mandiant-unc3886-attack-path.jpg
keyFindings:
  - "Singapore's Coordinating Minister K. Shanmugam publicly named UNC3886 as targeting the country's critical infrastructure on 18 July 2025 - the first time Singapore has ever attributed a cyber incident to a specific threat actor."
  - "All four major Singaporean telcos - M1, SIMBA Telecom, Singtel and StarHub - were targeted by UNC3886 in a campaign that used zero-day exploits and rootkits against telecom networks."
  - "Operation CYBER GUARDIAN - Singapore's largest coordinated cyber response - involved over 100 defenders across seven government agencies and lasted more than eleven months."
  - "Mandiant's March 2025 research documented six custom TINYSHELL-based backdoors deployed by UNC3886 on Juniper MX routers - including malware that disables logging before operator access and restores it afterwards."
  - "Singapore deliberately avoided naming China despite UNC3886's well-documented China nexus - a calibrated diplomatic choice that RUSI and RSIS analysts described as naming without fully naming."
artifacts:
  - type: reference
    url: https://www.rusi.org/explore-our-research/publications/commentary/what-singapores-first-public-cyber-attribution-tells-us
    description: "RUSI - What Singapore's first public cyber attribution tells us"
  - type: reference
    url: https://www.csa.gov.sg/news-events/press-releases/largest-multi-agency-cyber-operation-mounted-to-counter-threat-posed-by-advanced-persistent-threat--apt--actor-unc3886-to-singapore-s-telecommunications-sector/
    description: "CSA Singapore - Operation CYBER GUARDIAN press release"
  - type: reference
    url: https://rsis.edu.sg/rsis-publication/rsis/as-cyber-threats-grow-singapore-walks-a-careful-line-on-identifying-state-actors/
    description: "RSIS - As cyber threats grow, Singapore walks a careful line on identifying state actors"
  - type: reference
    url: https://cybersecuritynews.com/navigating-apts-singapores-cautious-response/
    description: "CybersecurityNews - Singapore's cautious response to state-linked cyber attacks"
  - type: reference
    url: https://cloud.google.com/blog/topics/threat-intelligence/china-nexus-espionage-targets-juniper-routers
    description: "Mandiant - Ghost in the Router: China-nexus espionage actor UNC3886 targets Juniper routers"
  - type: reference
    url: https://arxiv.org/abs/2510.18484
    description: "Adamov and Carlsson 2025 - The attribution story of WhisperGate: an academic perspective"
---

On 18 July 2025, at the Cyber Security Agency's tenth anniversary dinner, Singapore's Coordinating Minister for National Security K. Shanmugam did something the country had never done before. He named a threat actor.

"They are going after high value, strategic targets," Shanmugam said. "Vital infrastructure that delivers our essential services. If it succeeds, it can conduct espionage, and it can cause major disruption to Singapore and Singaporeans."

The group was UNC3886 - an Advanced Persistent Threat designation assigned by Google's Mandiant. Shanmugam did not say the word "China." But anyone who works in threat intelligence knew exactly what he meant.

## The group with deep access

UNC3886 is not a typical espionage operator. Mandiant has been [tracking the group since 2022](https://cloud.google.com/blog/topics/threat-intelligence/china-nexus-espionage-targets-juniper-routers), documenting a pattern of operations that target network devices and virtualisation technologies rather than traditional endpoints. Their focus is infrastructure that sits below the visibility of most security tools - the routers, firewalls and hypervisors that everything else runs on.

In March 2025, Mandiant published research on six custom backdoors UNC3886 had deployed across Juniper MX routers. Each was built on top of TINYSHELL, a lightweight open-source backdoor, then heavily modified with capabilities specific to Junos OS. One variant - lmpad - was designed to disable all logging on a compromised router before the operator connected for hands-on activity, then restore the logs afterwards. It patched the SNMP daemon's memory to suppress trap alerts and modified the Juniper Management Daemon to silence audit events. When the operator was finished, the malware put everything back the way it was.

![UNC3886 credential harvesting flow showing how the group moves through virtualised environments](/images/singapore-unc3886-cyber-attribution/article-mandiant-unc3886-credential-flow.png)

The sophistication matters for context. This is a group that writes custom code for proprietary operating systems, bypasses kernel-level integrity verification through process injection and routes command-and-control traffic through ORB networks of compromised devices. Mandiant noted at the time of publication that they had found no technical overlap between UNC3886 and the more widely known Volt Typhoon or Salt Typhoon campaigns.

## What Singapore revealed

The July speech was the signal. The details came seven months later. On 9 February 2026, CSA and IMDA jointly disclosed that all four of Singapore's major telecommunications operators - M1, SIMBA Telecom, Singtel and StarHub - had been targeted. The campaign, they said, was "deliberate, targeted, and well-planned."

In one instance, UNC3886 used a zero-day exploit to bypass a perimeter firewall and gain access to telco networks. They exfiltrated "a small amount of technical data" - believed to be network-related information useful for furthering their operations. In another, they deployed rootkits to maintain persistent access and evade detection. The attackers managed to reach limited access to critical systems but, according to CSA, did not get far enough to disrupt services.

The response was significant. Operation CYBER GUARDIAN - Singapore's largest coordinated cyber response to date - ran for more than eleven months. Over 100 cyber defenders across seven agencies participated: CSA, IMDA, the Centre for Strategic Infocomm Technologies, the Digital and Intelligence Service, GovTech and the Internal Security Department. Defenders closed off UNC3886's access points, expanded monitoring capabilities and implemented threat hunting across the targeted telcos.

## The language of not quite saying it

What makes Singapore's attribution distinctive is not that it happened but how carefully it was constructed. Dr Louise Marie Hurel at RUSI described it as "naming without fully naming" - a strategy where the message is clear to those who understand the threat intelligence lexicon, while leaving enough diplomatic room to avoid escalation.

Shanmugam used "UNC3886" - a Mandiant designation, not an official Singaporean one. When asked the following day about the group's alleged links to China, he called the connection "speculative." His exact words: "What Mandiant does is what Mandiant does. Who they are linked to and how they operate is not something I want to go into."

![Mandiant diagram showing UNC3886 lateral movement techniques across compromised network infrastructure](/images/singapore-unc3886-cyber-attribution/other-mandiant-unc3886-lateral-movement.png)

This was not evasion. Muhammad Faizal Abdul Rahman at RSIS argued that Singapore's approach reflects a deliberate preference for technical attribution over political attribution - forensic evidence over intelligence claims. By naming the threat cluster rather than the state, Singapore avoided triggering a diplomatic crisis with its largest trading partner while still sending a clear signal to multiple audiences: domestic constituents, international partners and the threat actors themselves.

Beijing's response confirmed the message was received. The Chinese Embassy in Singapore issued a statement directed not at the government but at Singaporean newspapers - saying "China is a major victim of cyberattacks" and expressing "strong dissatisfaction with these allegations." The lack of direct engagement with Singapore's government, as RUSI noted, suggests both sides understood the unspoken rules of this exchange.

## Why small states attribute differently

Singapore's hedging makes more sense when you consider the pressures on a small, digitally advanced nation-state that depends economically on its relationship with China. RSIS noted that direct state attribution carries risks beyond cybersecurity - it could fuel xenophobia in a multiethnic society, align Singapore with Western attribution coalitions it has historically stayed outside of and invite economic retaliation from a partner it cannot afford to alienate.

Adamov and Carlsson's 2025 research on APT attribution further underscores the difficulty. Their work on WhisperGate showed that even with extensive forensic evidence, attribution requires triangulating across multiple threat intelligence providers - and that competing taxonomies can obscure connections rather than clarify them. When Singapore chose to reference "UNC3886" specifically, it was selecting Mandiant's taxonomy as its framing device while maintaining distance from the conclusions others have drawn from it.

## What the telcos tell us

The targeting of telecommunications infrastructure is part of a larger pattern. UNC3886's earlier campaigns hit defence, technology and telecoms in the US and Asia. Volt Typhoon [breached Singtel](https://www.theregister.com/2024/11/06/chinas_volt_typhoon_breached_singtel/) in 2024, and reports suggested that intrusion may have been a precursor to broader campaigns against US telecoms.

As RUSI put it: "It is not just about spying. It is about using malicious code to gain access to a network or system in ways that blur the line between espionage and disruption."

The telcos were not the only sector affected but they were the sector Singapore chose to disclose. Whether UNC3886 also probed other critical infrastructure remains an open question. Operation CYBER GUARDIAN's scale - 100 defenders across seven agencies for eleven months - suggests the scope extended beyond four telecommunications companies.

Singapore named the ghost. It just chose not to say where the ghost lives.
