---
title: "Google Patches Actively Exploited Chrome Zero-Day in V8 Engine"
date: 2025-05-21T11:08:00+00:00
severity: high
category: vulnerability
status: contained
tldr: "Google released an emergency Chrome update fixing a high-severity type confusion vulnerability in V8 that was being exploited in targeted attacks against users in the wild."
tags: [chrome, google, v8, zero-day, browser_vulnerability]
cves: [CVE-2025-4664]
affected: [Google Chrome, Chromium-based browsers]
sources:
  - title: "Google Project Zero"
    url: https://chromereleases.googleblog.com/2025/05/stable-channel-update-for-desktop.html
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/05/google-chrome-zero-day-exploited.html
---

**What happened:** Google pushed an emergency stable channel update for Chrome after confirming that CVE-2025-4664, a high-severity vulnerability, was being actively exploited in the wild. The flaw exists in Chrome's handling of cross-origin data leakage via the browser's link header handling, allowing attackers to steal sensitive information from cross-origin pages. Google credited an external researcher with reporting exploitation activity.

**Technical details:** The vulnerability involves insufficient policy enforcement in Chrome's Loader component. Specifically, the browser failed to properly restrict the `Link` response header when processing sub-resource loads, allowing an attacker to set a `referrer-policy` that could capture full query parameters from cross-origin URLs. This can leak sensitive OAuth tokens, session identifiers, or other secrets appended to URLs as query parameters. Exploitation required luring a victim to an attacker-controlled page.

**Who is affected:** All users of Google Chrome and Chromium-based browsers (Edge, Brave, Opera, Vivaldi) prior to version 136.0.7103.113. The vulnerability is particularly dangerous for users of web applications that pass sensitive tokens or credentials via URL query parameters during authentication flows.

**What defenders should do:** Update Chrome to version 136.0.7103.113 or later immediately. Chromium-based browser users should apply corresponding updates as they become available. Web application developers should avoid passing sensitive data in URL query parameters and implement proper referrer policies at the application level. Enterprise administrators should enforce automatic Chrome updates through group policy.

**Broader implications:** This is the fifth Chrome zero-day patched by Google in 2025, maintaining the trend of browser zero-days being a preferred vector for targeted surveillance and espionage operations. The steady cadence of browser zero-days underscores the importance of keeping browsers updated and the value that attackers place on browser exploitation as an initial access vector.
