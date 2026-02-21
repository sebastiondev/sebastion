---
title: "One vendor, one Friday night"
date: 2025-09-25T10:00:00+00:00
draft: false
tags:
  - security
  - ransomware
  - infrastructure
  - supply-chain
categories:
  - Security
  - Threat Intelligence
description: "A piece of ransomware described as 'incredibly basic' hit a single software platform and grounded five European airports overnight. The problem wasn't the malware - it was the architecture."
author: Lewis
coverImage: /images/collins-aerospace-muse-airport-ransomware/article-cyfirma-featured.jpg
keyFindings:
  - "Collins Aerospace's MUSE check-in platform was hit by HardBit ransomware at approximately 22:45 GMT on Friday 19 September 2025 - encrypting over 500,000 passenger itineraries and forcing manual check-ins at Heathrow, Brussels, Berlin Brandenburg and Dublin airports."
  - "Security researcher Kevin Beaumont described HardBit as 'incredibly basic' - yet the ransomware caused 60 flight cancellations at Brussels Airport alone and reduced operations to 50% capacity three days after the attack."
  - "CYFIRMA's dark web research found that Heathrow Airport infrastructure data - including hostnames, IP addresses and technology details - had been leaked on Telegram in December 2024, nine months before the attack."
  - "A Thales report published in June 2025 documented a 600% year-on-year increase in ransomware attacks targeting the aviation sector, with 27 major attacks by 22 different ransomware groups between January 2024 and April 2025."
  - "Münster Osnabrück Airport transitioned to independent systems within hours of the attack - a resilience outcome that most affected airports could not replicate due to their total dependence on MUSE."
artifacts:
  - type: reference
    url: https://breached.company/collins-aerospace-airport-cyberattack-2025/
    description: "Breached.company - Collins Aerospace airport cyberattack analysis"
  - type: reference
    url: https://www.cyfirma.com/research/from-muse-to-manual-cyberattack-analysis-on-european-airport-operations/
    description: "CYFIRMA - From MUSE to Manual: cyberattack analysis on European airport operations"
  - type: reference
    url: https://www.weforum.org/stories/2025/09/european-airports-cyber-incident-critical-infrastructure/
    description: "World Economic Forum - European airports and cyber resilience: latest wake-up call"
  - type: reference
    url: https://gcn.com/hardbit-ransomware-tied-to-europe-airport-disruption/9999/
    description: "GCN - HardBit ransomware tied to Europe airport disruption"
  - type: reference
    url: https://www.aerotime.aero/articles/european-airports-recover-after-cyberattack-on-collins-aerospace-check-in-software
    description: "AeroTime - Cyberattack on Collins Aerospace disrupts European airports"
  - type: reference
    url: https://www.cybereason.com/blog/hardening-of-hardbit
    description: "Cybereason - Hardening of HardBit: threat analysis of HardBit 4.0"
  - type: reference
    url: https://arxiv.org/abs/2501.01318
    description: "Trump et al. 2025 - Threat-agnostic resilience: framing and application for critical infrastructure"
---

On Friday 19 September 2025, at approximately 22:45 GMT, a piece of ransomware encrypted the check-in and boarding platform used by several of Europe's busiest airports. By Saturday morning, Heathrow, Brussels, Berlin Brandenburg and Dublin were processing passengers by hand - paper boarding passes, manual ID checks, queues stretching through terminals. The platform was MUSE, built and operated by Collins Aerospace, a subsidiary of RTX. One vendor. One system. One Friday night.

## What MUSE does

MUSE - Multi-User System Environment - handles passenger check-in, boarding pass issuance and baggage tagging at airline counters. It sits between the airline's reservation system and the physical desk where a passenger hands over a passport. When it works, nobody thinks about it. When it goes down, there is no graceful fallback. Agents revert to writing boarding passes and bag tags by hand, which takes roughly four times longer per passenger.

Collins Aerospace provides MUSE to airlines operating across multiple European airports. The precise list of affected carriers expanded through the weekend, but the core problem was concentration - a single platform failure cascading across an entire continent's passenger processing infrastructure.

## The timeline

HardBit ransomware encrypted over 500,000 passenger itineraries within four hours of initial access, according to Breached.company's analysis. By 02:00 GMT on Saturday the system was functionally dead.

Brussels Airport cancelled 60 flights and operated at 50% capacity through Monday 22 September. At Heathrow, 38 departures and 33 arrivals were scrapped outright, with over 200 additional flights delayed. Berlin Brandenburg and Dublin reported similar disruptions. ENISA, the EU's cybersecurity agency, confirmed the ransomware nature of the attack on Sunday 21 September.

Recovery was messy. Over 1,000 computers were reportedly affected. Devices that had been wiped and rebuilt became reinfected - suggesting the attackers still had a presence in the network even as remediation teams worked. Collins Aerospace described the incident as a "cyber-related disruption," and by Sunday said recovery was "improving" - though AeroTime reported passengers posting on social media that flights were still being cancelled into the following week, contradicting the airlines' reassurances.

On 25 September, UK law enforcement arrested a 40-year-old suspect in connection with the attack. The individual was released on bail. In October, the Everest ransomware group claimed responsibility, though the relationship between HardBit - the malware deployed - and Everest remains unclear.

## "Incredibly basic"

Security researcher Kevin Beaumont described HardBit as "incredibly basic." First observed in October 2022, HardBit operates without a public data leak site and communicates with victims primarily through Tox, an encrypted messaging service. Cybereason's analysis of version 4.0 documented new features - passphrase protection to hinder analysis, a GUI build alongside the CLI version and an optional wiper mode - but the [underlying approach remains straightforward](https://www.cybereason.com/blog/hardening-of-hardbit). No custom exploits. No kernel-level rootkits. No nation-state craftsmanship.

That is the uncomfortable part. The malware that grounded five European airports for a weekend was not advanced. It was a tool available to anyone with access to the right criminal forums. The vulnerability it found was not a zero-day in Collins Aerospace's code - it was the architecture itself. One system, shared across multiple airports, with no independent fallback.

CrowdStrike's outage in July 2024 exposed exactly this pattern. That incident was accidental - a faulty update pushed to millions of endpoints. This one was deliberate. But the failure mode was identical: a single vendor update path, a single platform dependency, a cascading disruption with no local override. Accidental or deliberate, the root cause is the same concentration of risk. It is the same structural weakness that enables [supply chain attacks in software](/posts/tj-actions-supply-chain-attack) - a single compromised dependency propagating through every system that relies on it.

## The intelligence was visible

CYFIRMA's research into the attack's context uncovered something that should have prompted earlier action. In December 2024 - nine months before the MUSE attack - Heathrow Airport infrastructure data appeared on Telegram. An Excel file containing hostnames, IP addresses and technology details was posted via the Hydra Market 2 channel, linked to the Babuk Medieval group.

![An Excel file containing Heathrow Airport infrastructure details - hostnames, IP addresses and technology listings - was shared on Telegram in December 2024, nine months before the September attack](/images/collins-aerospace-muse-airport-ransomware/article-cyfirma-heathrow-infrastructure-excel.jpg)

Separately, the pro-Palestinian hacktivist group Alixsec published [threats against UK aviation infrastructure](https://www.cyfirma.com/research/from-muse-to-manual-cyberattack-analysis-on-european-airport-operations/) on Telegram that same month. CYFIRMA's attribution assessment placed Alixsec at "intent only" - lacking the capability to execute at this scale - but the threat intelligence picture was clear. Aviation infrastructure was being actively discussed, mapped and targeted across criminal and hacktivist channels well before September.

![Alixsec published threats against UK aviation infrastructure on Telegram in December 2024](/images/collins-aerospace-muse-airport-ransomware/article-cyfirma-alixsec-telegram.jpg)

Whether the actors behind the MUSE attack used the leaked Heathrow data directly is unknown. But the existence of that data on public channels, combined with the known exposure of MUSE as a shared check-in platform, made European airport infrastructure a visible target for anyone looking.

## The airport that kept working

Not every airport failed the same way. Münster Osnabrück Airport in Germany transitioned to independent systems within hours of the MUSE disruption. Their operations continued with minimal delay while larger airports were still processing passengers by hand.

The difference was architecture. Münster Osnabrück maintained the ability to fall back to systems that did not depend on MUSE. Most other affected airports did not.

Filipe Beato and Tal Goldstein, writing for the World Economic Forum's Centre for Cybersecurity, framed the failure in structural terms. The WEF's Global Cybersecurity Outlook 2025 found that 54% of large organisations identify supply-chain challenges as their biggest hurdle to cyber resilience. The MUSE incident showed what that statistic looks like when it hits an airport terminal - a single vendor failure propagating across an entire sector because resilience was never architected in. Beato and Goldstein drew a parallel with the 2017 NotPetya attack on Maersk, which cost $300 million and disrupted 76 ports worldwide. The pattern repeats: a critical business system, one vendor, no tested fallback and malware that succeeds not because it is advanced but because the architecture is brittle.

## The numbers in context

A Thales report published in June 2025 - three months before the MUSE attack - documented a 600% year-on-year increase in ransomware attacks targeting the aviation sector. Between January 2024 and April 2025, the report counted 27 major attacks by 22 different ransomware groups. Seventy-one per cent involved credential theft or unauthorised access. Collins Aerospace itself was previously targeted by BianLian in 2023.

Trump et al.'s 2025 research on threat-agnostic resilience for critical infrastructure identifies five foundational principles: modularity, distributedness, redundancy, diversity and plasticity. The MUSE architecture, as exposed by this incident, failed on at least three. A single platform with no modular boundaries. A centralised service with no distributed operation. No redundant fallback at most airports.

The aviation cybersecurity market was valued at $5.32 billion in 2025, with projected annual growth of 8.7% through 2029. The spending is increasing. Whether it is being directed at architectural resilience rather than perimeter defence is what the MUSE incident forces the industry to answer.

## What remains

The malware was basic. The impact was not. A suspect is on bail. Everest claimed the attack weeks later. RTX filed its SEC disclosure. Airports returned to normal operations. The familiar rhythm of incident, response and quiet normalisation played out as expected.

But the architecture that allowed it - a single vendor platform embedded so deeply in passenger processing that its failure sent an entire continent back to pen and paper - that has not changed yet. The question is not whether aviation will face another ransomware attack. The Thales numbers suggest it is a question of frequency, not probability. The question is whether the next one hits a system designed to fail gracefully or one that was designed not to fail at all.
