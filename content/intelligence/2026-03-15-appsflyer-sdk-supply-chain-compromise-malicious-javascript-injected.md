---
title: "AppsFlyer SDK Supply-Chain Compromise: Malicious JavaScript Injected at Distribution Point"
date: 2026-03-15T07:00:33+00:00
severity: critical
category: supply-chain
status: contained
tldr: "AppsFlyer's Web SDK was compromised and served malicious JavaScript designed to steal cryptocurrency from end-users. This supply-chain attack affected all downstream applications integrating the SDK until remediation."
tags: [appsflyer, supply-chain, javascript, crypto-stealer, sdk-compromise, web-security]
cves: []
affected: [AppsFlyer Web SDK, Applications using AppsFlyer Web SDK]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/appsflyer-web-sdk-used-to-spread-crypto-stealer-javascript-code/
---

## Incident Overview
AppsFlyer, a major mobile and web attribution platform used by thousands of applications, experienced a temporary compromise of its Web SDK distribution mechanism. Attackers injected malicious JavaScript code into the SDK, which was then served to all applications relying on AppsFlyer's Web SDK for analytics and attribution tracking. This represents a textbook supply-chain attack where the attacker targets infrastructure rather than individual applications.

## Technical Attack Vector
The compromise appears to have exploited either inadequate access controls on AppsFlyer's SDK distribution systems, a vulnerability in their deployment pipeline, or potentially compromised credentials. Once injected, the malicious code ran in the context of every website embedding the compromised SDK, giving the attacker access to page content, user interactions, and critically—cryptocurrency wallet interactions and sensitive form inputs. The crypto-stealing payload specifically targeted users performing blockchain transactions or accessing cryptocurrency services through affected websites.

## Scope and Impact
The blast radius of this attack is exceptionally broad given AppsFlyer's market position. Thousands of applications across e-commerce, finance, gaming, and web platforms embed this SDK. Any user visiting a website using the compromised SDK during the active window was exposed. However, the attack duration appears limited, suggesting either detection systems functioned or AppsFlyer responded quickly to remediation.

## Defensive Implications
Organizations using AppsFlyer Web SDK should immediately: (1) verify they updated to patched versions; (2) audit user activity logs during the compromise window for suspicious behavior; (3) notify affected users, particularly those engaging in cryptocurrency transactions; (4) implement Content Security Policy (CSP) headers to restrict SDK injection vectors; (5) evaluate third-party SDK dependencies and consider implementing sub-resource integrity (SRI) checks. This incident underscores the critical importance of dependency management and supply-chain security in modern web applications.

## Broader Assessment
This attack demonstrates that even well-established, trusted vendors are viable targets for sophisticated threat actors. The targeting of cryptocurrency transactions suggests organized threat groups with specific financial motivations. Organizations must adopt zero-trust principles toward third-party SDKs, implement robust monitoring for script injection, and maintain rapid incident response capabilities. The web ecosystem's dependency on external JavaScript libraries remains a persistent and exploitable vulnerability surface.