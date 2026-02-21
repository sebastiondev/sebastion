---
title: "What a $6 million model taught us about the price of moving fast"
date: 2025-02-10T12:00:00+00:00
draft: false
tags:
  - security
  - ai
  - privacy
  - deepseek
  - data-breach
categories:
  - Security
  - AI
description: "DeepSeek matched OpenAI at a fraction of the cost. The security shortcuts it took to get there were just as cheap."
coverImage: /images/deepseek/DeepSeek-R1-Benchmark.webp
tier: free
contentType: research
author: Lewis
keyFindings:
  - "Wiz discovered a publicly accessible ClickHouse database at DeepSeek subdomains - no authentication, no password, full control over database operations."
  - "Over one million log entries were exposed, including plaintext chat histories, API keys, secret tokens and backend directory structures."
  - "The DeepSeek iOS app used 3DES - a deprecated 1970s-era cipher - with hardcoded keys and disabled App Transport Security entirely."
  - "Cisco found DeepSeek-R1 was 11x more likely to generate harmful content than comparable Western models, while remaining strictly censored on topics sensitive to the Chinese government."
  - "DeepSeek's privacy policy explicitly states that user data is stored on servers in the People's Republic of China, with no clear GDPR-compliant basis for international transfers."
  - "Australia banned the application from government devices in February 2025. Italy launched regulatory inquiries. Multiple nations followed."
artifacts:
  - type: reference
    url: https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak
    description: "Wiz Research - Exposed DeepSeek Database Leaking Sensitive Information"
  - type: reference
    url: https://www.theguardian.com/technology/2025/jan/27/deepseek-cyberattack-ai
    description: "The Guardian - DeepSeek hit with large-scale cyber-attack after AI chatbot tops app stores"
  - type: reference
    url: https://www.itpro.com/technology/artificial-intelligence/deepseek-r1-one-year-anniversary-what-next
    description: "ITPro - DeepSeek R1 one year anniversary: What next?"
  - type: reference
    url: https://www.darkreading.com/cyberattacks-data-breaches/deepseek-breach-opens-floodgates-dark-web
    description: "Dark Reading - DeepSeek Breach Opens Floodgates to Dark Web"
  - type: reference
    url: https://www.hornetsecurity.com/en/blog/how-safe-is-deepseek/
    description: "Hornet Security - DeepSeek Under the Microscope: Are Privacy Risks Justified?"
---

DeepSeek-R1 landed on January 20, 2025. Within a week it had topped the US App Store, wiped $593 billion from Nvidia's market cap and earned comparisons to Sputnik. A Chinese AI lab, backed by a quant hedge fund called High-Flyer, had built a reasoning model that matched OpenAI's o1 - reportedly for around $6 million. The industry spent years insisting frontier models would cost hundreds of millions to train. DeepSeek made that claim look expensive and possibly dishonest.

But the story that got less airtime - at least initially - was the security posture behind the breakthrough. Within days of the app going viral, researchers had found an open database leaking chat histories, a mobile app using encryption from the 1970s and a privacy policy that amounted to a direct pipeline to servers in Beijing.

## The database that nobody locked

On January 29, Wiz published findings that should have been front-page news for longer than they were. The security firm had mapped DeepSeek's external attack surface using standard reconnaissance techniques and found roughly 30 internet-facing subdomains. Most were unremarkable - the chatbot interface, a status page, API documentation. The interesting part was what turned up on non-standard ports.

Two hosts - `oauth2callback.deepseek.com` and `dev.deepseek.com` - were running ClickHouse, an open-source columnar database, exposed on ports 8123 and 9000. No authentication. No password. Anyone who found it could run arbitrary SQL queries through the browser.

Wiz ran a `SHOW TABLES;` query and found a table called `log_stream` containing over one million log entries dating from early January 2025. The columns told the story: timestamps, internal API endpoint references, plaintext chat histories between users and the AI, API keys and secret tokens, backend directory structures and service metadata.

This wasn't a sophisticated breach. Nobody needed to exploit a vulnerability or chain together a creative attack path. The database was simply open to the internet, waiting for someone to type a query. Wiz's CTO Ami Luttwak put it plainly:

> "The effort level to breach the data was very low and the access level we got was very high. This service is not mature for sensitive data."

More critically, the exposure allowed for full database control and potential privilege escalation within DeepSeek's environment. An attacker could have used ClickHouse's file functions to exfiltrate local files from the server itself. Wiz, to their credit, stuck to enumeration and disclosed responsibly. DeepSeek secured the exposure promptly. But the damage window - at minimum several weeks of full public access - raises uncomfortable questions about what else might have been found by someone who wasn't publishing a blog post about it.

## The app that time forgot

The server-side exposure was bad enough. The client-side story was arguably worse, because millions of people had already installed the app on their phones.

Security researchers examining the DeepSeek iOS application found it was using 3DES for encryption - Triple DES, a cipher designed in the late 1970s, deprecated by NIST and considered cryptographically inadequate for any modern application. The keys were hardcoded into the app binary, which means anyone with basic reverse-engineering skills could decrypt the traffic.

To compound matters, the app had disabled Apple's App Transport Security (ATS), a framework specifically designed to enforce encrypted connections. With ATS turned off, the app was free to send data over unencrypted or weakly encrypted channels. For an application handling user conversations with an AI model - conversations that could contain anything from casual queries to sensitive business information - this was negligent.

The combination reads like a security anti-pattern checklist. Deprecated cipher, hardcoded keys, transport security disabled. These aren't subtle architectural trade-offs. They're the kind of shortcuts that happen when shipping speed is the only metric that matters.

## Privacy as an afterthought

DeepSeek's privacy policy, for anyone who bothered to read it, was remarkably candid. User data is stored on servers in the People's Republic of China. There was no clear legal basis for processing that data under European regulations, no adequate safeguards for international transfers and no meaningful way for users outside China to exercise data rights.

Italy's data protection authority was among the first to act, launching formal inquiries. Australia went further, banning the application from government devices and systems in February 2025. The reasoning was straightforward: an application that funnels data to Chinese servers, with no transparency about how that data is processed or who can access it, has no place on government infrastructure.

Some researchers flagged a more granular concern. The mobile app's privacy terms appeared to allow collection of "keystroke patterns" - not just what you type, but how you type it. Keystroke dynamics are a biometric identifier. They can be used for authentication, behavioural profiling or surveillance. Whether DeepSeek was actively collecting this data or simply reserving the right to do so, the inclusion was enough to raise alarms.

Harmonic Security's research, published later in 2025, found that DeepSeek accounted for 25% of Chinese AI model usage among enterprise employees - but 55% of sensitive data exposure. Coders were the primary culprits, pasting proprietary code into the model without thinking about where that data was going. Andy Ward of Absolute Security described using DeepSeek at work as "printing out and handing over confidential information."

## The safety gap

If the infrastructure security was immature, the model safety was barely adolescent.

Cisco tested DeepSeek-R1 against a battery of jailbreak techniques - the kind of adversarial prompts that coax a model into generating harmful content. The results were striking: R1 was 11 times more likely to produce harmful output than comparable Western models. It would provide instructions for money laundering or malware creation using prompt techniques that OpenAI and Anthropic had patched years earlier.

The model's safety guardrails appeared to have been bolted on late and tuned lightly. Where Claude or GPT would refuse and explain, DeepSeek would comply with minimal resistance. The attack surface for misuse was wide open.

Conversely, the model was exquisitely well-trained on a different kind of safety: political censorship. Queries about Tibet, Taiwan, Tiananmen Square or other topics sensitive to the Chinese government produced immediate refusals or carefully aligned responses. The model knew exactly what it couldn't say about Beijing. It just didn't have the same clarity about what it shouldn't say about building weapons.

That asymmetry is the tell. Safety alignment had been applied, but selectively. The priorities were legible: protect the state first, protect the user second, protect the world a distant third.

## A familiar pattern

DeepSeek's exposure is not an isolated case. AI projects that move at extraordinary speed, attract massive adoption and treat security as something to be addressed after the growth curve has been established are becoming a pattern. The underlying failures are basic infrastructure problems - not zero-days or nation-state attacks, but open databases as a direct consequence of shipping before hardening.

Wiz made the point clearly in their write-up: the real security risks in AI right now aren't the futuristic threats - model poisoning, adversarial inputs or emergent deception. They're the mundane ones. Misconfigured databases. Hardcoded credentials. Transport security turned off because it was easier. The same mistakes the industry has been making for decades, replicated at AI speed.

DeepSeek's case is more geopolitically charged than most, because the data flows to China and the censorship alignment is visible. But strip away the geopolitics and the underlying failure is universal. When adoption outpaces security maturity, users pay the price. It happened with cloud platforms, it happened with IoT devices and it's happening now with AI services.

A year on, DeepSeek continues to ship models. V3.1 arrived in August with hybrid thinking modes. V3.2 followed in December. A V4 release is reportedly imminent. The technical capability keeps advancing. Whether the security posture has advanced at the same pace is harder to verify from the outside - and that's precisely the problem.

The Sputnik comparison was always more apt than the people making it realised. The original Sputnik didn't just prove the Soviets could reach orbit. It proved they could do something the Americans thought was impossible, and in doing so forced a reckoning about assumptions and complacency. DeepSeek did the same for AI economics. The part nobody talks about is that Sputnik also carried no safety features. It was a metal sphere with a radio transmitter, launched to prove a point. The hard work of making space travel safe came later, slowly, and at considerable cost.

That's where DeepSeek sits now. The point has been proved. The hard work remains.
