---
title: "Four hundred thousand reasons to reconsider the front door"
date: 2026-01-13T10:00:00+00:00
draft: false
tags:
  - security
  - healthcare
  - data-breach
  - ransomware
categories:
  - Security
  - Privacy
description: "A group calling itself Kazu walked into New Zealand's largest patient portal with valid credentials, stole 400,000 medical documents and demanded US$60,000. The breach exposed referrals, lab results and discharge summaries for 120,000 patients - many from practices that had stopped using the platform years earlier."
author: Lewis
coverImage: /images/managemyhealth-nz-healthcare-breach/article-rnz-featured.jpg
keyFindings:
  - "Attackers exfiltrated more than 400,000 medical documents from ManageMyHealth - New Zealand's largest patient-facing health portal with 1.8 million registered users - including specialist referrals, lab results, hospital discharge summaries, imaging reports and clinical correspondence dating back to 2017."
  - "ManageMyHealth CEO Vino Ramayah told Radio New Zealand that attackers entered 'through the front door' using valid credentials - a characterisation that drew sharp criticism from security commentators who argued it downplayed a fundamental failure in access control and credential management."
  - "A group calling itself Kazu claimed responsibility and demanded a ransom of US$60,000, publishing samples of stolen data online. ManageMyHealth obtained an urgent High Court injunction on 5 January 2026 ordering unknown defendants and any third parties to delete the data."
  - "Patient data was still being uploaded to the ManageMyHealth platform by practices that had ended their contractual relationships years earlier - meaning the breach exposed records of patients who had no reason to believe their information remained on the system."
  - "WellSouth Primary Health Network's chief executive publicly stated he had 'less than zero percent confidence' in ManageMyHealth's handling of the breach, while Health Minister Simeon Brown commissioned an urgent Ministry of Health review and the Privacy Commissioner launched a formal investigation."
artifacts:
  - type: reference
    url: https://www.rnz.co.nz/news/national/582969/managemyhealth-confirms-cyber-breach
    description: "Radio New Zealand - ManageMyHealth confirms cyber breach"
  - type: reference
    url: https://www.rnz.co.nz/news/national/583319/manage-my-health-ceo-trust-us-even-though-we-have-dropped-the-ball
    description: "Radio New Zealand - Manage My Health CEO: Trust us 'even though we have dropped the ball'"
  - type: reference
    url: https://www.rnz.co.nz/news/political/583207/government-orders-review-into-managemyhealth-data-breach
    description: "Radio New Zealand - Government orders review into ManageMyHealth data breach"
  - type: reference
    url: https://www.courtsofnz.govt.nz/assets/cases/2026/2026-NZHC-2.pdf
    description: "High Court of New Zealand - Manage My Health Ltd v Unknown Defendants (2026 NZHC 2)"
  - type: reference
    url: https://www.rnz.co.nz/news/national/583486/patient-data-still-being-uploaded-to-manage-my-health-two-years-after-contract-ended
    description: "Radio New Zealand - Patient data still being uploaded to Manage My Health after contract ended"
  - type: reference
    url: https://www.rnz.co.nz/news/national/584627/privacy-commissioner-announces-inquiry-into-manage-my-health-cybersecurity-breach
    description: "Radio New Zealand - Privacy Commissioner announces inquiry into Manage My Health cybersecurity breach"
---

On 30 December 2025, ManageMyHealth - the privately operated patient portal used by general practices across New Zealand - discovered that someone had been inside its systems. The company notified the New Zealand Police, the Privacy Commissioner and Health New Zealand the same day. A public holding statement went up on 1 January 2026. By then, the damage was already measured in six figures.

More than 400,000 medical documents had been exfiltrated. Specialist referrals. Hospital discharge summaries. Laboratory results. Medical imaging reports. Clinical correspondence between doctors and patients. Some records dated back to 2017. A group calling itself Kazu claimed responsibility and demanded US$60,000 to not release the data publicly.

ManageMyHealth had 1.8 million registered users, making it the largest patient-facing health information portal in New Zealand. The breach touched approximately 120,000 to 127,000 of them - about six to seven per cent - across 45 general practices in the Northland Region and 355 referral-originating practices in other regions.

The platform operates independently of Health New Zealand (Te Whatu Ora), which confirmed its own systems and national clinical databases were unaffected. This distinction mattered politically but was cold comfort to the patients whose lab results were now in the hands of extortionists.

## Through the front door

In an interview with Radio New Zealand, ManageMyHealth CEO Vino Ramayah offered a characterisation of the breach that became its own story. The attackers, he said, had come in "through the front door" using valid credentials. He also acknowledged that the company had "dropped the ball."

Both statements drew immediate criticism. Security commentators and sector representatives argued that describing credential-based access as a front-door entry downplayed the company's responsibility. If an attacker authenticates with valid credentials and exfiltrates 400,000 documents, the question is not how clever the attacker was. The question is why a single set of credentials provided access to that volume of sensitive data, why the exfiltration was not detected in progress and what monitoring - if any - was in place on the document storage module.

The breach was limited to a specific document storage component rather than the core patient database or clinical systems. ManageMyHealth stated there was no evidence that usernames, passwords or core clinical data were compromised. The vulnerability used to gain access had been identified, remediated and independently verified. But the documents that were taken contained exactly the kind of information that makes healthcare breaches devastating: diagnoses, treatment histories, referral letters between specialists, imaging results and the clinical narrative that follows a patient through the healthcare system.

## The data that should not have been there

One of the most troubling findings was that patient data was still being uploaded to ManageMyHealth by practices that had ended their contractual relationships with the platform years earlier. This meant the breach exposed records belonging to patients who had no active relationship with ManageMyHealth and no reason to believe their medical information was still being stored on its systems.

Radio New Zealand reported that in some cases, patient records continued to be uploaded despite practices having moved to other platforms. The mechanism - whether automated feeds, residual system integrations or configuration oversights - was not publicly clarified. But the effect was clear: the attack surface included data that should have been deleted or migrated under any reasonable data retention policy.

This is a pattern that recurs in healthcare data breaches. Medical systems accumulate data over years and decades. Decommissioning a platform means more than ending a subscription - it requires migrating or purging every record, severing every integration point and verifying that no residual data flows remain active. In practice, this rarely happens completely. The result is ghost data - records that belong to patients who have moved on, sitting on systems that no one is actively managing, waiting to be discovered by someone with the right credentials and the wrong intentions.

## Sixty thousand dollars

The ransom demand was modest by the standards of healthcare extortion. The 2024 Change Healthcare attack reportedly involved a $22 million ransom payment. The Kazu group asked for US$60,000 - less than the cost of a single incident response engagement.

The low figure raises its own questions. Professional ransomware groups calibrate demands to what they believe the victim can pay. A US$60,000 demand against a platform holding 1.8 million health records suggests either an unsophisticated actor, one unfamiliar with the New Zealand market, or one that was using ManageMyHealth primarily as a proof of capability rather than a revenue target.

Kazu published samples of the stolen data online to substantiate its claim. The ransom deadline shifted multiple times through early January 2026. ManageMyHealth declined to comment on whether it engaged with the attackers or considered payment, citing ongoing police involvement and legal proceedings.

![The ManageMyHealth breach notification page advised patients to monitor for suspicious communications](/images/managemyhealth-nz-healthcare-breach/article-rnz-managemyhealth-notice.png)

On 5 January 2026, ManageMyHealth took the unusual step of applying to the High Court of New Zealand for urgent injunctive relief. The court granted interim orders restraining unknown defendants and any third parties from publishing, distributing or otherwise dealing with the stolen information. Anyone in possession of the data was ordered to delete it. The presiding judge stated that the documents contained "highly sensitive and confidential medical information" and that further disclosure posed a serious risk to affected individuals.

Following the injunction, online posts associated with the Kazu group referencing the data were removed. No further large-scale public release was reported after the initial deadlines passed.

The legal strategy was pragmatic. A court injunction cannot stop a determined attacker from leaking data, but it provides a legal basis for takedown requests against hosting providers and a framework for prosecuting anyone who redistributes the information. It is a damage-limitation tool, not a prevention mechanism.

## The response that compounded the breach

The technical breach was one failure. The response was another.

General practices across New Zealand reported being overwhelmed with patient enquiries while lacking clear information about which individuals were affected. Many patients first learned of the breach through news coverage rather than direct notification from ManageMyHealth. The company had stated it would notify affected patients by email under the Privacy Act 2020, but the process was slow enough that the information vacuum was filled by media reports, speculation and anxiety.

Patients who tried to access the ManageMyHealth platform to check their records or read messages from their practices found themselves locked out, logged out repeatedly or unable to view communications. ManageMyHealth attributed the problems to high traffic volumes. The effect was that at the precise moment patients needed reassurance and information, the platform was functionally unavailable.

The WellSouth Primary Health Network's chief executive publicly stated he had "less than zero percent confidence" in ManageMyHealth's handling of the breach. Media reporting highlighted frustrations that patient names and details were being released incrementally rather than through comprehensive disclosure. The drip-feed approach - understandable from a legal perspective, maddening from a patient perspective - eroded whatever trust remained.

CEO Ramayah subsequently told media he was "not unprepared to step down" if a more suitable leader could take over. It was a notably passive construction for a moment that called for decisive action.

## The institutional response

Health Minister Simeon Brown commissioned an urgent Ministry of Health review on 5 January 2026, examining both ManageMyHealth's handling of the breach and Health New Zealand's response. The review was positioned as both a post-incident assessment and a broader evaluation of cybersecurity in the health sector.

The Public Service Association used the breach to highlight what it described as broader risks associated with reduced investment in digital and IT expertise in the public health sector. The argument was structural: New Zealand's health system increasingly depends on privately operated digital platforms, but the cybersecurity oversight and funding have not kept pace with that dependency.

On 21 January 2026, Privacy Commissioner Michael Webster announced a formal investigation into the breach. The scope would include whether ManageMyHealth's security measures were adequate, why they failed and how to prevent similar incidents. It was the regulatory equivalent of confirming what everyone already suspected - that the security was not adequate, and the reasons were likely mundane.

Cybersecurity experts warned that affected individuals faced risks including identity theft, extortion and targeted phishing. Netsafe advised ManageMyHealth users to be suspicious of emails containing personal details. Advocacy organisations for survivors of sexual violence and family harm highlighted that the breach could be re-traumatising for individuals whose medical records contained sensitive information about abuse or mental health treatment.

## The comparison that nobody wanted

New Zealand has been here before. The [2021 Waikato District Health Board ransomware attack](https://en.wikipedia.org/wiki/Waikato_District_Health_Board_ransomware_attack) disrupted hospital services across the Waikato region for weeks, forced the cancellation of surgeries and led to patient data being published online. The ManageMyHealth breach was different in mechanism - credential theft and data exfiltration rather than ransomware deployment - but the underlying vulnerabilities were familiar. Insufficient access controls. Inadequate monitoring. Data retention practices that exceeded any operational need.

The international parallel is the [Vastaamo data breach](https://en.wikipedia.org/wiki/Vastaamo_data_breach) in Finland, where attackers breached a private psychotherapy provider in 2018, stole therapy session notes for tens of thousands of patients and then individually extorted patients by threatening to publish their records. The Vastaamo case demonstrated that healthcare data breaches carry a unique cruelty - the information is not just personally identifiable, it is personally devastating.

![General practices across New Zealand reported receiving high volumes of patient enquiries while lacking clear information about which individuals were affected](/images/managemyhealth-nz-healthcare-breach/article-rnz-gp-practices.jpg)

The ManageMyHealth breach sits between these precedents. The ransom demand was small. The data was not individually weaponised as in Vastaamo. The platform was not encrypted into paralysis as in Waikato. But 400,000 medical documents for 120,000 people is a significant exposure in a country of five million.

The broader question is whether New Zealand's regulatory and security frameworks are adequate for a health sector increasingly reliant on privately operated digital platforms. ManageMyHealth was not a government system. It was a private company that held 1.8 million people's health records and protected them with whatever security it chose to implement.

The Privacy Commissioner's investigation will determine whether that security was adequate under the Privacy Act 2020. But the question that should follow is whether adequacy under current law is sufficient for a platform that functions, in practice, as critical health infrastructure - even if it is not classified as such.
