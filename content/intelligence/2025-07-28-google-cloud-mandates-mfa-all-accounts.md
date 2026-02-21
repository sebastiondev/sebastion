---
title: "Google Cloud Mandates Multi-Factor Authentication for All Accounts"
date: 2025-07-28T10:15:00+00:00
severity: informational
category: policy
status: resolved
tldr: "Google Cloud began enforcing mandatory multi-factor authentication for all user accounts, completing a phased rollout that started in late 2024 and affecting millions of cloud platform users worldwide."
tags: [google_cloud, mfa, authentication, cloud_security, policy]
cves: []
affected: [Google Cloud Platform users]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/google-cloud-mandatory-mfa-enforcement/
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/google-cloud-enforces-mandatory-mfa/
---

**What happened:** Google Cloud completed its mandatory multi-factor authentication enforcement for all user accounts accessing Google Cloud Platform services. The requirement, which was announced in late 2024 and rolled out in phases, now affects all Google Cloud users including those who previously only used password-based authentication. Users who have not enrolled in MFA are prompted to set it up at their next login and will be blocked from accessing cloud resources until MFA is configured.

**Technical details:** Google Cloud supports multiple MFA methods including FIDO2 security keys, Google Authenticator TOTP codes, Google Prompts via the Google app, and phone-based verification. The enforcement applies to the Google Cloud Console, gcloud CLI, and API access using user credentials. Service accounts and workload identity federation are not affected by the requirement, as they use non-interactive authentication methods. Google recommends FIDO2 passkeys as the strongest option and has integrated passkey support directly into the Cloud Console login flow.

**Who is affected:** All individual users accessing Google Cloud Platform services globally, estimated at millions of developers, administrators, and operators. Organizations that have not yet standardized on MFA for cloud access will need to ensure all team members comply. Legacy integrations using long-lived user credentials for automation will need to transition to service accounts or workload identity federation.

**What defenders should do:** Ensure all Google Cloud users in your organization have enrolled in MFA before enforcement blocks access. Audit existing automation that uses user credentials and migrate to service accounts. Standardize on FIDO2 security keys or passkeys for highest security. Update organizational security policies to reflect the new mandatory MFA baseline. Use this as an opportunity to implement similar requirements across other cloud providers.

**Broader implications:** Google Cloud joins Azure (which implemented similar requirements) in making MFA non-optional for cloud platform access. This industry shift recognizes that credential-based attacks remain the number one initial access vector for cloud breaches. The move toward mandatory MFA and passkeys represents a fundamental evolution in how cloud platforms handle identity, and may pressure remaining holdouts to follow suit.
