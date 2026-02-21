---
title: "The cheapest way past every firewall"
date: 2025-05-19T10:00:00+00:00
draft: false
tags:
  - security
  - data-breach
  - insider-threat
  - cryptocurrency
categories:
  - Security
  - Threat Intelligence
coverImage: /images/coinbase-insider-breach-bribery/article-arxiv-insider-threat-detection-framework.png
description: "Coinbase disclosed that criminals bribed overseas support agents to steal customer data for 69,461 users. The ransom demand was $20 million. The estimated cleanup cost is $400 million. The vulnerability was human."
tier: free
contentType: research
author: Lewis
keyFindings:
  - "Criminals bribed Coinbase support agents in India to exfiltrate customer data including government ID images, account balances and transaction histories for 69,461 users."
  - "The breach began on 26 December 2024 and was not detected until 11 May 2025 - nearly five months of unmonitored access."
  - "Coinbase refused a $20 million extortion demand and instead established a $20 million reward fund for information leading to arrests."
  - "The SEC 8-K filing estimated remediation and reimbursement costs between $180 million and $400 million."
  - "The stolen data was weaponised for social engineering campaigns impersonating Coinbase to trick customers into transferring cryptocurrency."
artifacts:
  - type: reference
    url: https://www.coinbase.com/blog/protecting-our-customers-standing-up-to-extortionists
    description: "Coinbase official disclosure - Protecting Our Customers"
  - type: reference
    url: https://www.sec.gov/Archives/edgar/data/0001679788/000167978825000094/coin-20250514.htm
    description: "Coinbase SEC Form 8-K filing - Material Cybersecurity Incident"
  - type: reference
    url: https://www.theregister.com/2025/05/21/coinbase_confirms_insider_breach_affects/
    description: "The Register - Coinbase confirms insiders handed over data of 70K users"
  - type: reference
    url: https://thehackernews.com/2025/05/coinbase-agents-bribed-data-of-1-users.html
    description: "The Hacker News - Coinbase Agents Bribed, Data of ~1% Users Leaked"
  - type: reference
    url: https://politics-security.net/index.php/journal/article/view/44
    description: "Lishchynsky (2025) - The Insider Threat: A Socio-Technical Analysis"
  - type: reference
    url: https://www.verizon.com/business/resources/reports/dbir/
    description: "Verizon 2025 Data Breach Investigations Report"
---

Coinbase spent years building what is arguably one of the more mature security programmes in the cryptocurrency industry. Hardware security modules, SOC 2 compliance, a well-funded bug bounty programme. None of it mattered when someone offered a support agent cash to copy customer records from an internal tool.

On 15 May 2025, Coinbase [disclosed](https://www.coinbase.com/blog/protecting-our-customers-standing-up-to-extortionists) that criminals had bribed a group of overseas customer support agents to exfiltrate data from internal systems. The agents worked in India as part of business process outsourcing operations. The company's [SEC filing](https://www.sec.gov/Archives/edgar/data/0001679788/000167978825000094/coin-20250514.htm) placed the initial breach on 26 December 2024. It was not detected until 11 May 2025 - nearly five months of unmonitored access.

The attackers then emailed Coinbase demanding $20 million to keep quiet. Coinbase refused.

## What was taken

The stolen data reads like a phishing operator's wish list:

- Names, addresses, phone numbers and email addresses
- Last four digits of Social Security numbers
- Masked bank account numbers and some bank account identifiers
- Government ID images - passports, driving licences
- Account balance snapshots and transaction histories
- Limited internal corporate documents, training materials and support communications

Passwords, private keys and seed phrases were not exposed. Coinbase Prime accounts were untouched. But the data that was taken is exactly what you need to impersonate a financial institution convincingly. A customer's name, their ID photo, their recent transaction history and an authoritative tone is usually enough to get someone to act on a phone call they were not expecting.

That was the point. The breach was not the endgame - it was the supply chain for social engineering campaigns. Attackers used the stolen data to contact customers directly, impersonating Coinbase, and attempted to trick them into transferring cryptocurrency.

## The numbers

A [filing](https://www.maine.gov/agviewer/content/ag/985235c7-cb95-4be2-8792-a1252b4f8318/f61fae18-f669-499e-9a87-f4d323d281f8.html) with Maine's Attorney General confirmed 69,461 individuals were affected - less than 1% of Coinbase's 9.7 million monthly transacting users. The breach was classified as insider wrongdoing.

Coinbase's SEC 8-K filing estimated the total cost of remediation and customer reimbursement at between $180 million and $400 million. The company committed to making affected customers whole, including reimbursing those who had been successfully social-engineered into sending funds.

In place of the $20 million ransom, Coinbase established a $20 million reward fund for information leading to the arrest and conviction of those responsible. The compromised agents were identified and fired. CEO Brian Armstrong released a video apologising to affected customers and promising to pursue all available legal avenues.

It is worth sitting with those numbers for a moment. The breach affected less than 1% of the customer base. The cleanup could cost up to $400 million. The vulnerability was a cash bribe.

![Insider threat detection frameworks attempt to layer behavioural analysis, trust scoring and anomaly detection to catch what firewalls cannot](/images/coinbase-insider-breach-bribery/article-arxiv-insider-threat-detection-framework.png)

## The outsourcing problem

Coinbase's Chief Security Officer Philip Martin [confirmed](https://www.bloomberg.com/news/articles/2025-05-15/coinbase-says-bribed-workers-leaked-data-to-hacker-seeking-20-million-in-ransom) to Bloomberg that the compromised agents worked in India as part of business process outsourcing operations. The attackers identified support staff with legitimate access to customer data, offered them money and received exactly what they paid for.

This is not a new pattern. It is the oldest pattern in information security - the trusted insider with a financial incentive. But it gets remarkably little attention compared to zero-days, ransomware and nation-state campaigns. The Verizon [2025 Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) found that 30% of breaches now involve third-party relationships, a figure that has doubled since their previous report. Outsourced functions create access without proportional oversight, and the resulting gap is exactly where bribes land.

The same dynamic plays out in software supply chains - we saw it [with the tj-actions compromise in March](/posts/tj-actions-supply-chain-attack) - but with people, the exploit is cheaper and the patch is harder to write.

The challenge is structural. Customer support requires access to customer data - that is the job. You cannot simply revoke read access and expect agents to resolve account issues. The question is whether the monitoring and controls around that access are proportionate to the risk, and in this case they clearly were not. Nearly five months passed between the first data exfiltration and detection.

## What the research already said

![Academic research on insider threats has grown significantly but remains focused on detection rather than prevention](/images/coinbase-insider-breach-bribery/other-arxiv-research-publication-trends.png)

Lishchynsky's 2025 [analysis](https://politics-security.net/index.php/journal/article/view/44) of insider threats describes the phenomenon through a socio-technical lens, distinguishing between malicious, unintentional and compromised insiders. The Coinbase case fits the malicious category cleanly - agents who made a deliberate choice to sell access for personal gain.

The paper references the Critical Pathway to Insider Risk model developed by the CERT Division at Carnegie Mellon, which maps the progression from personal predisposition through stressors to the actual malicious act. What makes outsourced support roles particularly vulnerable is that the pathway can be shortened considerably. An agent working in a lower-wage economy with legitimate database access only needs an offer that outweighs the perceived risk of getting caught. The technical barriers are essentially zero - the access is already granted by design.

Lishchynsky advocates for Zero Trust Architecture and User and Entity Behaviour Analytics as countermeasures. Both are sensible in theory. In practice, deploying behavioural analytics across a distributed outsourced workforce adds complexity that most organisations have not budgeted for, partly because the insider threat does not generate the kind of headlines that justify security spend - until it does.

## What this changes

Coinbase responded aggressively - refusing the ransom, establishing a bounty, committing to reimbursement, firing the agents involved. The response is arguably a model for how a publicly traded company should handle this kind of incident. The SEC filing was prompt. The customer communication was specific about what was and was not compromised.

But the underlying problem remains open. The cryptocurrency industry sits on an unusual concentration of high-value identity data attached to financial accounts. Government IDs, transaction histories, account balances - this is precisely the kind of dataset that makes social engineering devastating rather than merely annoying. And the support infrastructure that handles this data is increasingly outsourced to regions where the economics of bribery are more favourable to the attacker than the defender.

The uncomfortable reality is that insider threat programmes are the least glamorous part of security spending. They do not produce impressive dashboards. They do not catch zero-days. They involve unglamorous work - access logging, behavioural baselines, separation of duties, regular access reviews. But when 69,461 customers have their government identification documents exposed because someone accepted an envelope, the gap between what we spend on perimeter defence and what we spend on watching our own people becomes difficult to ignore.

## The detection gap

Five months. That is how long the compromised agents had access before Coinbase detected the exfiltration. In an industry where cryptocurrency transactions are immutable and customer identity data cannot be rotated like a password, five months is an eternity.

The detection failure is worth examining structurally. Coinbase's internal tools presumably log access patterns - who queries which customer record, when and how often. A support agent who suddenly begins exporting customer records at a rate inconsistent with their normal workflow should surface in any behavioural analytics system. Either the monitoring was not in place, the thresholds were not calibrated for the outsourced workforce or the alerts were generated and ignored.

This is not unique to Coinbase. The Verizon DBIR consistently documents a median detection time for insider threats that dwarfs external attacks. The reason is structural: insider activity uses legitimate credentials and legitimate tools to access data the insider is authorised to see. The difference between normal work and exfiltration is often a matter of volume and pattern, not permission. Detection systems built around perimeter violations and malware signatures are blind to it.

The five-month window also raises questions about the scope of the exfiltration. The confirmed number was 69,461 users - less than one per cent of the customer base. But that figure represents the accounts that Coinbase could definitively identify as compromised during its investigation. Whether the actual number of accessed records is higher remains an open question, particularly given the length of time the agents had unfettered access to the internal tool.

The broader cryptocurrency industry should be paying attention. Coinbase is not the only exchange that outsources customer support operations, and the economics that made this attack profitable in India apply in every other region where support functions are offshored. The vulnerability is not in the code. It is in the labour model.

The question for every organisation with outsourced access to sensitive data is not whether their monitoring would catch a bribed insider. It is whether they have tested that assumption.

The cheapest way past every firewall has always been a conversation with someone who is already inside.
