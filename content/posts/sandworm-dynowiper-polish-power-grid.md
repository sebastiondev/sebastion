---
title: "Thirty sites, one night, minus twelve degrees"
date: 2025-12-31T10:00:00+00:00
draft: false
tags:
  - security
  - ics
  - critical-infrastructure
  - apt
categories:
  - Security
  - Threat Intelligence
description: "Russia's Sandworm hit Poland's power grid on the coldest night of the year, deploying a new wiper across thirty facilities including renewable plants and a major heat-and-power station. The attack failed to cause blackouts - but it damaged equipment beyond repair and proved that distributed energy is now a target."
author: Lewis
coverImage: /images/sandworm-dynowiper-polish-power-grid/article-theregister-featured.jpg
keyFindings:
  - "The coordinated cyberattack on Poland's power grid began on 29 December 2025 and continued into the following day - targeting approximately 30 facilities including renewable energy plants, a large combined heat and power station and a manufacturing company, with attackers deploying a previously unseen wiper malware called DynoWiper."
  - "ESET attributed the attack with medium confidence to Sandworm (GRU Unit 74455) and assessed it was deliberately timed to mark the ten-year anniversary of Sandworm's December 2015 attack on Ukraine's power grid - the first confirmed case of malware causing a civilian blackout."
  - "Dragos called the attack a world-first for targeting distributed energy resources (DERs) and warned that carrying it out 'in the depths of winter is potentially lethal to the civilian population dependent on it' - noting that in some cases attackers damaged equipment beyond repair."
  - "Attackers took over remote terminal units (RTUs) and communication infrastructure at multiple sites by exploiting internet-exposed devices, known vulnerabilities and misconfigurations - demonstrating knowledge of specific implementation details and common deployment patterns across Poland's energy sector."
  - "CERT Polska attributed the attack to Berserk Bear while ESET and Dragos attributed it to Sandworm - a split attribution that reflects the blurring lines between Russian intelligence cyber units, both of which operate under the GRU and have historically shared tooling and targeting."
artifacts:
  - type: reference
    url: https://cert.pl/en/posts/2026/01/incident-report-energy-sector-2025/
    description: "CERT Polska - Energy Sector Incident Report, 29 December 2025"
  - type: reference
    url: https://cert.pl/uploads/docs/CERT_Polska_Energy_Sector_Incident_Report_2025.pdf
    description: "CERT Polska - Full technical incident report (PDF)"
  - type: reference
    url: https://www.welivesecurity.com/en/eset-research/dynowiper-update-technical-analysis-attribution/
    description: "ESET Research - DynoWiper update: technical analysis and attribution"
  - type: reference
    url: https://hub.dragos.com/report/electrum-targeting-polands-electric-sector
    description: "Dragos - Electrum targeting Poland's electric sector"
  - type: reference
    url: https://www.theregister.com/2026/01/26/moscow_likely_behind_wiper_attack/
    description: "The Register - Moscow likely behind wiper attack on Poland's power grid, experts say"
  - type: reference
    url: https://www.theregister.com/2026/01/29/cyberattack_poland_power_grid/
    description: "The Register - Cyberattack on Poland's power grid could have turned deadly in winter cold"
---

On the night of 29 December 2025, temperatures across central Poland dropped below minus twelve degrees Celsius. Across approximately thirty energy facilities - renewable plants, a large combined heat and power station and a manufacturing company - something else was dropping too. A previously unseen wiper malware called DynoWiper was executing on industrial control systems, targeting both IT infrastructure and the physical devices that keep power flowing.

By the time CERT Polska, ESET and Dragos had finished their initial assessments, the picture was clear. This was not an opportunistic compromise. It was a coordinated, simultaneous attack on Poland's distributed energy infrastructure by a state-sponsored actor with a decade of experience destroying power grids.

Poland's energy minister Milosz Motyka told Reuters the attackers attempted to disrupt communications between renewable generation hardware and power distribution operators. They did not succeed in causing blackouts. But officials described it as the strongest cyberattack the power grid had faced in years, and Dragos confirmed that in some cases the damage to equipment was beyond repair.

## The wiper

DynoWiper is the new addition to a long catalogue. Sandworm's toolkit reads like a history of industrial sabotage: BlackEnergy against Ukraine in 2015, Industroyer in 2016, NotPetya across the world in 2017, CaddyWiper and Industroyer2 in 2022, WhisperGate timed to Russia's ground invasion. Each wiper was purpose-built, used once or twice and discarded. DynoWiper follows the pattern.

ESET, which published its technical analysis on 30 January 2026, attributed the attack to Sandworm with medium confidence. The reasoning was characteristic - the malware's operational profile, the targeting of energy infrastructure, the use of destructive rather than espionage-oriented capabilities and the timing all pointed to the GRU's most persistent offensive cyber unit. ESET assessed the attack was deliberately timed to mark the ten-year anniversary of Sandworm's December 2015 attack on Ukraine's power grid, the first confirmed case of malware causing a civilian power outage.

What made this attack unusual, even by Sandworm's standards, was the scope of targeting. The attackers did not hit a single utility or a handful of substations. They went after approximately thirty facilities simultaneously, coordinating the deployment of DynoWiper across renewable energy plants and a major combined heat and power station. The attack targeted both IT devices and physical industrial devices - a combination that is rare in practice and indicates significant pre-operational reconnaissance.

## Below the waterline

Dragos, which was brought in to respond at one of the affected sites, published its report on 29 January 2026 under the threat group name it uses for Sandworm: Electrum. The findings reframed what the energy sector needs to worry about.

The attackers took over remote terminal units - RTUs - and communication infrastructure at multiple sites. RTUs are the devices that translate between the digital control systems and the physical equipment that generates and distributes power. Taking control of them does not immediately cause a blackout. In most configurations, disconnecting an RTU means losing remote monitoring and control, but physical equipment continues operating on its last instructions. The power stays on.

But the intent matters. Dragos noted that incident responders were still working to determine whether Sandworm attempted to issue commands through the compromised RTUs - potentially altering the behaviour of the physical systems they control - or whether the objective was simply to disable monitoring and destroy evidence. The distinction between "disrupted monitoring" and "attempted to manipulate physical processes" is the distinction between an aggressive signal and an attempted act of sabotage.

"Taking over these devices requires capabilities beyond simply understanding their technical flaws," Dragos wrote. "It requires knowledge of their specific implementation. The adversaries demonstrated this by successfully compromising RTUs at multiple sites, suggesting they had mapped common configurations and operational patterns to exploit systematically."

The access methods were a combination of internet-exposed devices, known vulnerabilities and misconfigurations. None of these are novel. What was novel was the systematic targeting of distributed energy resources - smaller generation sites connected to the central grid. Dragos called it a world-first.

![Sandworm's evolution from centralised power grid attacks in Ukraine to distributed energy targeting in Poland represents a shift in ICS/OT threat tradecraft](/images/sandworm-dynowiper-polish-power-grid/article-dragos-ders-targeting.png)

These DERs - solar farms, wind installations, smaller combined heat and power stations - are the growth edge of European energy infrastructure. They are also, as Dragos pointed out, the part of the grid that receives the least cybersecurity investment. Centralised power plants have dedicated security teams, network segmentation, monitoring and incident response plans. A solar farm with a handful of internet-connected inverters and an RTU does not.

"While Dragos has responded to cybersecurity incidents at individual renewable and distributed generation facilities in the past, those incidents involved single sites or opportunistic compromises," the report stated. "The Poland attack is significant because of the coordinated nature of the attacks across numerous sites simultaneously and the demonstrated intent of a sophisticated adversary to systematically target this infrastructure."

## The actor in the room

Sandworm is GRU Unit 74455, based at 22 Kirova Street in Khimki, a suburb north of Moscow. The unit has been tracked under more names than most threat groups accumulate in a career: APT44, Seashell Blizzard, Voodoo Bear, IRIDIUM, Telebots. The US Department of Justice indicted six of its officers in October 2020 for a campaign of cyber destruction spanning the 2015 and 2016 Ukraine power grid attacks, the NotPetya worm that caused over $10 billion in global damage in 2017 and the Olympic Destroyer malware deployed at the 2018 Winter Olympics in Pyeongchang.

The indictment named the officers but changed nothing operationally. Sandworm continued. In 2022, they deployed Industroyer2 against Ukrainian power infrastructure as Russian forces invaded. In 2023, Mandiant linked additional Ukrainian blackouts to their deployment of CaddyWiper. Each time, the tradecraft evolved. Each time, the targeting stayed the same: critical infrastructure in adversarial countries, with a preference for energy systems that affect civilian populations.

The Poland attack extends the geographic scope. Ukraine has been the primary target for a decade, but Poland - NATO's most vocal eastern member on Ukraine support, a logistics corridor for military aid and a country that closed Russia's last consulate in November 2025 after tying Moscow to an explosion on a key rail line - was always a logical next target.

Poland had already been accumulating the kind of bilateral friction that tends to precede Sandworm operations. In October 2025, the government confirmed new sanctions on steel companies suspected of circumventing international sanctions to export goods to Russia. Prime Minister Donald Tusk's November decision to close the consulate followed intelligence linking Russia to physical sabotage of rail infrastructure used for transporting resources into Ukraine. Russian reconnaissance aircraft had been repeatedly approaching Polish airspace.

## The attribution problem

One detail in the attribution warrants attention. CERT Polska, Poland's national computer emergency response team, attributed the attack to Berserk Bear - a different Russian intelligence cyber unit also linked to the FSB rather than the GRU. ESET and Dragos attributed it to Sandworm, a GRU unit.

This is not necessarily contradictory. Russian intelligence cyber operations have a long history of overlapping mandates, shared tooling and coordinated campaigns. Berserk Bear (also tracked as Energetic Bear, Dragonfly and Crouching Yeti) has its own history of targeting energy infrastructure, particularly in Europe and North America. But the use of destructive wiper malware is more consistent with Sandworm's operational profile than Berserk Bear's, which has historically favoured espionage and access operations over destruction.

The split in attribution may reflect the complexity of the operation itself. A campaign that simultaneously targeted thirty facilities across different energy subsectors may have involved reconnaissance by one unit and execution by another. It may also reflect genuinely different assessments based on different evidence sets - CERT Polska working from network telemetry at the national level, ESET from its malware analysis of DynoWiper and Dragos from its on-site incident response at individual facilities.

What none of the assessments dispute is that the attack was state-sponsored, Russian in origin and targeted Poland's energy infrastructure with destructive intent during winter.

## In the depths of winter

Dragos's report contained a line that should sit uncomfortably with anyone responsible for grid security: "An attack on a power grid at any time is irresponsible, but to carry it out in the depths of winter is potentially lethal to the civilian population dependent on it."

The timing was the message. Sandworm's [2015 attack on Ukraine's power grid](/posts/f5-big-ip-unc5221-source-code-theft) happened on 23 December. The 2022 deployment of Industroyer2 coincided with the ground invasion. WhisperGate was timed to the eve of the invasion. Each operation was designed to maximise not just technical impact but psychological and humanitarian effect.

The Poland attack failed to cause sustained blackouts. That is the good news. The bad news is that the attack demonstrated capabilities and intent that the energy sector had been warned about but had not yet seen in practice: coordinated targeting of distributed generation assets, systematic exploitation of RTU infrastructure across multiple sites and the deployment of destructive malware against both IT and OT systems in a single operation.

The energy sector's transition toward distributed generation - more solar, more wind, more small-scale combined heat and power - is an environmental imperative. It is also creating an attack surface that scales faster than the security investment to protect it. The Poland attack shows that at least one nation-state threat actor has noticed.

![Poland's energy infrastructure map showing the geographic distribution of affected facilities across the country](/images/sandworm-dynowiper-polish-power-grid/article-certpl-affected-sites.png)

Mandiant's 2024 research into [edge device compromise](/posts/f5-big-ip-unc5221-source-code-theft) described the security blind spot as an iceberg - the devices below the waterline that organisations do not inventory, do not monitor and cannot run endpoint detection on. The RTUs and communication devices at thirty Polish energy facilities lived below that waterline. They were connected to the internet. They were running default or misconfigured credentials. And on the coldest night of the year, someone who had been mapping them for months turned them off.
