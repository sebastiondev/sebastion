---
title: "Apple Emergency Patches for WebKit Zero-Days Used in Targeted Spyware Attacks"
date: 2025-07-22T09:55:00+00:00
severity: high
category: vulnerability
status: contained
tldr: "Apple released emergency security updates across iOS, iPadOS, and macOS to fix two WebKit zero-day vulnerabilities actively exploited in sophisticated spyware attacks targeting journalists and activists."
tags: [apple, webkit, zero-day, spyware, ios, surveillance]
cves: [CVE-2025-31201, CVE-2025-31202]
affected: [Apple iOS, Apple iPadOS, Apple macOS, Apple Safari]
sources:
  - title: "Google Project Zero"
    url: https://googleprojectzero.blogspot.com/2025/07/webkit-zero-days-spyware.html
  - title: "The Record"
    url: https://therecord.media/apple-patches-webkit-zero-days-spyware-attacks
---

**What happened:** Apple released emergency Rapid Security Response updates and subsequent full security updates for iOS 18.6.1, iPadOS 18.6.1, macOS Sequoia 15.6.1, and Safari 18.6.1 to address two WebKit zero-day vulnerabilities. Google's Threat Analysis Group and Project Zero discovered the flaws being used in an exploit chain deployed by a commercial spyware vendor to target journalists, human rights activists, and political dissidents. The exploit required no user interaction beyond clicking a malicious link.

**Technical details:** CVE-2025-31201 is a type confusion vulnerability in WebKit's JavaScript engine that allows arbitrary read/write access to process memory when processing maliciously crafted web content. CVE-2025-31202 is a sandbox escape vulnerability in the WebKit GPU process that allows the attacker to break out of the browser sandbox and gain code execution outside the sandboxed rendering process. Chained together, these vulnerabilities enable a zero-click-adjacent attack: the victim needs only to click a link, after which the exploit chain achieves arbitrary code execution with kernel-level privileges. The spyware payload collects messages, location data, microphone recordings, and encrypted messaging app content.

**Who is affected:** All users of iPhone, iPad, and Mac running versions prior to the patched releases. While the active exploitation targeted specific high-risk individuals, the vulnerabilities could theoretically be weaponized by additional threat actors now that their existence is known. Safari users on all platforms are affected by the WebKit component.

**What defenders should do:** Update all Apple devices immediately to iOS 18.6.1, iPadOS 18.6.1, macOS 15.6.1, and Safari 18.6.1. Enable Lockdown Mode on devices used by individuals at elevated risk of targeted surveillance. Organizations managing Apple device fleets should push updates through MDM solutions. Consider deploying mobile threat detection solutions capable of identifying spyware indicators.

**Broader implications:** The continued discovery of sophisticated zero-day exploit chains targeting Apple platforms underscores that even Apple's considerable security investments cannot fully prevent targeted exploitation. The commercial spyware industry continues to develop and sell these capabilities despite increasing legal and diplomatic pressure. Google Project Zero's role in discovering and reporting these vulnerabilities highlights the importance of well-funded vulnerability research teams in protecting at-risk users worldwide.
