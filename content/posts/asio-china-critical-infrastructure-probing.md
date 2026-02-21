---
title: "Twelve billion dollars and a diplomatic complaint"
date: 2025-11-17T10:00:00+00:00
draft: false
tags:
  - security
  - espionage
  - apt
  - critical-infrastructure
categories:
  - Security
  - Threat Intelligence
description: "Australia's spy chief named China's hacking units on a public stage, warned of infrastructure sabotage and put a dollar figure on espionage. Beijing called it a false narrative. The numbers suggest otherwise."
author: Lewis
coverImage: /images/asio-china-critical-infrastructure-probing/article-guardian-burgess-featured.jpg
keyFindings:
  - "ASIO Director-General Mike Burgess publicly named Salt Typhoon and Volt Typhoon as 'hackers working for Chinese government intelligence and their military' in a speech to an ASIC business forum in Melbourne on 12 November 2025 - the most explicit public attribution of Chinese cyber operations against Australian infrastructure by Australia's domestic intelligence agency."
  - "Burgess estimated espionage cost Australia A$12.5 billion ($8.1 billion USD) the previous year, including A$2 billion in stolen trade secrets and intellectual property - and warned that sabotage of critical infrastructure could cost A$1 billion initially, rising to A$6 billion if disruption lasted one week."
  - "China's foreign ministry spokesperson dismissed the remarks as spreading 'false narratives' that 'deliberately provoked confrontation' - while Burgess revealed Chinese officials had 'repeatedly complained' to both the Australian government and private sector about ASIO's public comments on China."
  - "Burgess disclosed previously unreported espionage cases: nation-state hackers stealing commercially sensitive information from a major Australian exporter for use in contract negotiations, stolen blueprints of an Australian innovation mass-produced as cheap knock-offs and a visiting academic with foreign government links breaking into a restricted technology laboratory."
  - "The speech followed Burgess's 4 November 2025 Lowy Lecture in which he warned that three countries were 'willing and capable' of assassinating political dissidents on Australian soil - making November 2025 the most publicly confrontational month in ASIO's 76-year history on the topic of state-sponsored threats."
artifacts:
  - type: reference
    url: https://www.theguardian.com/australia-news/2025/nov/12/asio-accuses-chinese-hackers-of-seeking-access-to-australias-criticial-infrastructure
    description: "The Guardian - Asio accuses Chinese hackers of seeking access to Australia's critical infrastructure"
  - type: reference
    url: https://www.reuters.com/world/china/australia-spy-chief-says-chinese-hackers-probing-telecommunications-critical-2025-11-12/
    description: "Reuters - Australian spy chief says Chinese hackers probing telecoms, key facilities"
  - type: reference
    url: https://www.asio.gov.au/director-generals-annual-threat-assessment-2024
    description: "ASIO - Director-General's Annual Threat Assessment 2024"
  - type: reference
    url: https://www.reuters.com/world/asia-pacific/australian-spy-chief-says-state-sanctioned-trolls-sowing-social-discord-2025-11-04/
    description: "Reuters - Australian spy chief warns of assassination threat, Lowy Lecture 2025"
  - type: reference
    url: https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/
    description: "Microsoft Threat Intelligence - Volt Typhoon targets US critical infrastructure with living-off-the-land techniques"
  - type: reference
    url: https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a
    description: "CISA - PRC State-Sponsored Actors Compromise and Maintain Persistent Access to US Critical Infrastructure"
---

On 12 November 2025, Mike Burgess stood in front of a room full of business executives at an Australian Securities and Investments Commission forum in Melbourne and said something that spy chiefs are not supposed to say. He named names.

Salt Typhoon and Volt Typhoon, he told the room, were "hackers working for Chinese government intelligence and their military." Salt Typhoon had penetrated American telecommunications networks for strategic espionage. Volt Typhoon had compromised American critical infrastructure to pre-position for potential sabotage. And both had been probing Australia.

"We have seen Chinese hackers probing our critical infrastructure as well," Burgess said.

Within hours, China's foreign ministry spokesperson Guo Jiakun dismissed the remarks as spreading "false narratives" that "deliberately provoked confrontation." China, he said, had made representations to Australia about the comments. The diplomatic machinery ground through its predictable motions. But the numbers Burgess put on the table were harder to dismiss.

## The price tag

Espionage cost Australia A$12.5 billion the previous year. That figure - roughly $8.1 billion USD - came directly from the Director-General of Security, the person with the broadest view of Australia's intelligence picture. Of that total, A$2 billion was attributed to stolen trade secrets and intellectual property.

Burgess had been building toward this number. In his earlier [Hawke Lecture](https://www.asio.gov.au/26th-annual-hawke-lecture-counting-and-countering-cost-espionage), he estimated that "espionage-enabled sabotage of critical infrastructure" could cost the Australian economy more than A$1 billion in a single event. If the disruption lasted a week, the cost could reach A$6 billion.

These are not theoretical numbers. They are derived from actual cases, most of which never become public. Burgess disclosed several at the Melbourne forum. In one, nation-state hackers stole commercially sensitive information from a major Australian exporter and used it to gain a significant advantage in subsequent contract negotiations. In another, they stole the blueprints of an Australian innovation and mass-produced cheap knock-offs that nearly bankrupted the innovator. In a third, a visiting academic with links to a foreign government broke into a restricted technology laboratory and filmed its contents.

None of these cases made headlines when they happened. They are the background radiation of espionage - constant, cumulative and corrosive.

## Two typhoons

To understand why Burgess chose this moment to go public, you have to understand what Salt Typhoon and Volt Typhoon represent.

Salt Typhoon was the espionage operation. Throughout 2024, the group infiltrated [dozens of US telecommunications companies](https://www.theguardian.com/world/2024/dec/13/democrats-republicans-condemn-salt-typhoon-hack) including AT&T, Verizon and T-Mobile. They accessed the communications metadata - and in some cases the content - of senior political figures including the then-president-elect Donald Trump, incoming vice-president JD Vance and defeated Democratic candidate Kamala Harris. Senator Mark Warner, chairman of the Senate Intelligence Committee, called it "the worst telecom hack in our nation's history."

Volt Typhoon was something different. First [documented by Microsoft in May 2023](https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/) and subsequently the subject of [joint CISA advisories](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a) involving all Five Eyes intelligence agencies, Volt Typhoon was not collecting intelligence. It was pre-positioning. The group compromised routers, firewalls and VPN appliances across US water systems, energy utilities, transportation networks and telecommunications infrastructure. They used living-off-the-land techniques - legitimate system tools rather than malware - to maintain access without triggering security alerts. The objective was not to steal information. It was to be inside the infrastructure and ready to act if the order came.

CISA's February 2024 advisory stated plainly that Volt Typhoon actors had "maintained access and footholds within some victim IT environments for at least five years." The purpose, the advisory concluded, was to "pre-position themselves on IT networks to enable lateral movement to OT assets to disrupt functions."

![ASIO Director-General Mike Burgess delivers the 2025 Lowy Lecture at the Lowy Institute in Sydney, 4 November 2025](/images/asio-china-critical-infrastructure-probing/article-reuters-burgess-lowy.jpg)

When Burgess said "we have seen Chinese hackers probing our critical infrastructure as well," he was connecting Australia to this pattern. He did not specify whether the probing came from Salt Typhoon, Volt Typhoon or a different unit. He did not say whether the probing had achieved persistent access. What he did say was that the capability, once established, made the next step "a matter of intent not capability."

"I don't think we - and I mean all of us - truly appreciate how disruptive, how devastating this could be," Burgess said.

## A spy chief who stopped whispering

This was not the first time Burgess had raised these issues. But the trajectory of his public statements through 2024 and 2025 shows a deliberate escalation.

In his [February 2024 Annual Threat Assessment](https://www.asio.gov.au/director-generals-annual-threat-assessment-2024), Burgess described espionage and foreign interference as having "surpassed terrorism as Australia's principal security concern." He disclosed that ASIO was aware of "one nation state" conducting "multiple attempts to scan critical infrastructure in Australia and other countries, targeting water, transport and energy networks." The reconnaissance, he said, used "top-notch tradecraft to map networks, test for vulnerabilities, knock on digital doors and check the digital locks." He did not name the nation state.

In the same speech, Burgess detailed the activities of what he called "the A-team" - a specific foreign intelligence service team dedicated to targeting Australia. He described their use of professional networking sites to approach Australians with access to privileged information, their use of anglicised fake personas and their offers of paid consulting work in exchange for reports on AUKUS, submarine technology, missile systems and other sensitive topics. He disclosed that a former Australian politician had been successfully recruited and had "sold out their country, party and former colleagues to advance the interests of the foreign regime." Again, he did not name the country.

By November 2025, the gloves were off. On 4 November, Burgess delivered the annual Lowy Lecture in Sydney, warning that three countries were "willing and capable" of assassinating political dissidents on Australian soil. Eight days later, he was in Melbourne naming Salt Typhoon and Volt Typhoon as Chinese government hackers and putting a dollar figure on the damage.

The shift from coded language to explicit attribution was not accidental. Other Five Eyes partners had already gone further - the United States had issued indictments, the United Kingdom's MI5 chief Ken McCallum had in October 2025 [described threats from states like China as "on a par with terrorists"](https://www.politico.eu/article/mi5-boss-threats-from-china-now-par-with-terror-ken-mccallum/) and Five Eyes agencies had jointly published detailed technical advisories. Australia, historically more cautious in its public statements about China given the scale of the bilateral trade relationship, was catching up.

![ASIO's 2024 Annual Threat Assessment identified espionage and foreign interference as having surpassed terrorism as Australia's principal security concern](/images/asio-china-critical-infrastructure-probing/article-asio-annual-threat-assessment.png)

## The diplomatic tension

The caution was not without reason. China is Australia's largest trading partner. The relationship has been through cycles of tension and repair - from the diplomatic freeze that began in 2020 over Australia's call for an independent COVID-19 inquiry, through the gradual thaw that saw trade restrictions lifted through 2023 and 2024. Burgess's November statements landed during a period of relative stability.

This is what makes the public attribution significant. Burgess was not speaking from the relatively sheltered position of a classified briefing to parliamentarians. He was standing in front of business executives - the people who manage the trade relationship day to day - and telling them that Chinese government hackers were probing the infrastructure their businesses depend on.

China's response followed the established template. The foreign ministry spokesperson called it a "false narrative." But Burgess had anticipated this. During the Lowy Lecture, he revealed that Chinese officials had "repeatedly complained" not just to the Australian government but also directly to Australian businesses about ASIO's public remarks on China.

"It won't stop my resolve," Burgess said.

The pattern of intelligence agencies across the Five Eyes increasingly going public with attribution reflects a strategic calculation. [Singapore's public attribution of UNC3886 in July 2025](/posts/singapore-unc3886-cyber-attribution) demonstrated one model - naming the threat cluster rather than the state to avoid triggering a diplomatic crisis while still sending a clear signal. Australia chose a different path. Burgess named the country, named the units and named the cost.

## The infrastructure problem

The infrastructure that Burgess warned about is not abstract. Australia's Critical Infrastructure Act - the Security of Critical Infrastructure Act 2018, substantially amended in 2021 and 2022 - designates eleven sectors as critical infrastructure: communications, data storage and processing, defence, energy, financial services, food and grocery, healthcare, higher education and research, space technology, transport and water and sewerage.

The challenge is the same one that [every defender of edge infrastructure faces](/posts/f5-big-ip-unc5221-source-code-theft). Much of Australia's critical infrastructure runs on the same equipment as everyone else's - routers, firewalls, VPN concentrators and load balancers manufactured by a small number of global vendors. When Volt Typhoon compromises a SOHO router in Virginia, the same techniques work on the same router in Victoria. The living-off-the-land approach makes detection harder still, because the attacker is using the tools that are supposed to be there.

CISA's 2024 advisory identified specific products that had been compromised by Volt Typhoon: Fortinet FortiGuard, Ivanti Connect Secure, Citrix NetScaler, Cisco routers and NETGEAR ProSAFE devices. These are not obscure products. They are the plumbing of enterprise and government networks worldwide, including in Australia.

The SOCI Act gives the Australian government powers to direct critical infrastructure entities to take specific actions in response to cyber incidents, and requires entities to report serious incidents within 12 hours. But legislation creates obligations, not capabilities. Whether Australian water utilities, energy distributors and telecommunications providers have the detection capability to identify a Volt Typhoon-style intrusion - one that uses no malware, leaves minimal forensic artifacts and operates through legitimate credentials and built-in system tools - is a different question.

## What changes

The November 2025 speeches represent a permanent shift in how Australia's intelligence community communicates about the China cyber threat. The coded language of "a particular nation state" has been replaced with named units and named consequences. The diplomatic cost of that shift has been absorbed. There is no going back to ambiguity.

For Australian organisations operating critical infrastructure, the implications are concrete. The probing that Burgess described is reconnaissance - the mapping phase that precedes action. Whether that action ever comes depends on geopolitical circumstances that no one can predict. But the access, once established, persists until it is found and removed.

The A$12.5 billion figure is the number that should concentrate minds. It is not the cost of a hypothetical future attack. It is the cost of espionage that has already happened - trade secrets already stolen, competitive advantages already lost, innovations already copied. The infrastructure probing adds a different dimension of risk on top of that baseline: not just theft, but the potential for disruption at scale.

Burgess put it simply: "These are not hypotheticals - foreign governments have elite teams investigating these possibilities right now."

The question for Australia is the same one facing every Five Eyes nation. The probing has been identified. The attribution has been made. The cost has been calculated. What remains is the harder work - finding the access that has already been established, hardening the infrastructure that has already been mapped and building the detection capability to identify an adversary that uses your own tools against you.

China will continue to call it a false narrative. The A$12.5 billion suggests otherwise.
