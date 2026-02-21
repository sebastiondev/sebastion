---
title: "Critical GitLab Vulnerability Allows Account Takeover via Password Reset"
date: 2025-08-28T13:50:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical vulnerability in GitLab CE/EE allows attackers to hijack any account by manipulating the password reset flow, with exploitation already observed targeting internet-facing instances."
tags: [gitlab, authentication, account_takeover, password_reset, devops]
cves: [CVE-2025-39821]
affected: [GitLab Community Edition, GitLab Enterprise Edition]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/gitlab-account-takeover-password-reset/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/08/gitlab-critical-account-takeover.html
---

**What happened:** GitLab released critical security patches for a vulnerability that allows unauthenticated attackers to take over any user account by exploiting a flaw in the password reset mechanism. The vulnerability received a CVSS score of 10.0. Security researchers and honeypot operators have already observed exploitation attempts targeting internet-facing GitLab instances. Successful exploitation gives attackers full access to the victim's repositories, CI/CD pipelines, and any connected infrastructure.

**Technical details:** CVE-2025-39821 allows an attacker to initiate a password reset for any GitLab account and receive the reset token by manipulating the email delivery mechanism. Specifically, the vulnerability involves sending a password reset request with a specially crafted HTTP header that causes the reset email to be delivered to an additional attacker-controlled address alongside the legitimate account email. The attacker then uses the reset token to set a new password and gain full access to the account. No prior authentication is required.

**Who is affected:** All self-managed GitLab CE and EE instances running vulnerable versions with internet-facing access. GitLab.com (the SaaS platform) was patched proactively. Organizations using self-managed GitLab for source code management and CI/CD are at risk of complete code repository compromise, supply chain attacks through modified CI/CD pipelines, and credential theft from CI/CD variable stores.

**What defenders should do:** Patch GitLab immediately to the latest version. If patching is not possible, restrict access to the GitLab instance to trusted networks via VPN or firewall. Enable two-factor authentication for all GitLab accounts, which provides an additional layer of protection even if the password is reset. Audit recent password reset activity and login events for signs of compromise. Review CI/CD pipeline configurations and secrets for unauthorized modifications.

**Broader implications:** GitLab's central role in software development pipelines makes account takeover vulnerabilities particularly dangerous. An attacker who compromises a developer or administrator account gains the ability to modify source code, alter build pipelines to inject backdoors, and access deployment credentials — enabling sophisticated supply chain attacks. This vulnerability follows similar critical authentication flaws in GitLab from 2024, raising concerns about recurring vulnerability patterns in the platform's authentication subsystem.
