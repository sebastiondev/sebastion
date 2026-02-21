---
title: "Scattered Spider Members Charged in Federal Indictments"
date: 2025-05-24T16:30:00+00:00
severity: informational
category: policy
status: resolved
tldr: "The US Department of Justice announced federal charges against additional members of the Scattered Spider cybercriminal group responsible for high-profile social engineering attacks against major US corporations."
tags: [scattered_spider, law_enforcement, social_engineering, arrests, cybercrime]
cves: []
affected: [Previous Scattered Spider victims including MGM Resorts, Caesars, Coinbase]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/05/scattered-spider-members-charged/
  - title: "The Record"
    url: https://therecord.media/scattered-spider-additional-charges-doj
---

**What happened:** The US Department of Justice announced additional federal charges against members of the Scattered Spider (also known as 0ktapus, UNC3944, and Star Fraud) cybercriminal collective. The defendants face charges including wire fraud, conspiracy, and aggravated identity theft for their roles in phishing and social engineering campaigns that compromised major corporations. Multiple suspects have been arrested in both the US and UK, building on earlier arrests in late 2024.

**Technical details:** Scattered Spider is known for sophisticated social engineering attacks, particularly help desk and MFA fatigue attacks targeting corporate employees. The group typically impersonates IT staff to trick employees into providing credentials or approving MFA pushes, then uses the access to deploy ransomware or steal data. Their toolkit includes SIM swapping, phishing kits mimicking SSO portals (particularly Okta), and living-off-the-land techniques within cloud environments. Court documents reveal the group's members are predominantly young adults across the US and UK.

**Who is affected:** Previous high-profile Scattered Spider victims include MGM Resorts International, Caesars Entertainment, Twilio, Mailchimp, and numerous other technology and hospitality companies. The broader organizational ecosystem of companies using Okta and similar SSO providers has been in the threat group's targeting profile.

**What defenders should do:** Continue to invest in social engineering awareness training, particularly for help desk and IT support staff. Implement hardware-based FIDO2/WebAuthn authentication rather than push-based MFA. Deploy number-matching for MFA push notifications at minimum. Monitor for anomalous VPN and SSO logins, especially from residential proxy services that the group is known to use.

**Broader implications:** The ongoing law enforcement action against Scattered Spider demonstrates increasing international cooperation in pursuing cybercriminals. However, the decentralized and loosely affiliated nature of the group means arrests may not fully disrupt operations, as new members can be recruited through the same online communities. The prosecutions do send a clear message about the legal consequences of cybercrime, potentially deterring some participants.
