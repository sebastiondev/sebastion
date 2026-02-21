---
title: "GitHub Actions Supply Chain Attack via tj-actions/changed-files"
date: 2025-03-15T14:30:00+00:00
severity: high
category: supply-chain
status: contained
tldr: "A supply chain attack targeting the popular tj-actions/changed-files GitHub Action compromised CI/CD secrets across thousands of repositories by injecting malicious code that exfiltrated secrets to workflow logs."
tags: [github_actions, supply_chain, ci_cd, secrets_exfiltration]
cves: [CVE-2025-30066]
affected: [Repositories using tj-actions/changed-files GitHub Action]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/github-actions-supply-chain-attack-compromised-ci-cd-secrets/
  - title: "The Record"
    url: https://therecord.media/github-actions-supply-chain-attack-tj-actions
---

**What happened:** A supply chain attack targeted the widely-used tj-actions/changed-files GitHub Action, which is used by over 23,000 repositories. The attacker modified the action's code to dump CI/CD secrets, access tokens, and authentication credentials from workflow runner memory to the publicly visible workflow logs. This potentially exposed secrets including AWS keys, GitHub tokens, npm tokens, and private SSH keys across all repositories running the compromised action.

**Technical details:** The attacker initially compromised a GitHub Personal Access Token belonging to a maintainer of the reviewdog organization, which was used as a stepping stone to compromise the tj-actions/changed-files action. The malicious payload was injected by modifying git tags to point to a commit containing a modified entrypoint script. This script used a base64-encoded Python payload to extract environment variables and secrets from the runner's memory, then wrote them to the workflow log output where they could be scraped.

**Who is affected:** Any repository that used the tj-actions/changed-files action and ran workflows during the window of compromise. Organizations using GitHub Actions for CI/CD pipelines in open-source or private repositories are affected. The attack is particularly dangerous because workflow logs may be publicly visible on open-source repositories.

**What defenders should do:** Pin all GitHub Actions to specific commit SHAs rather than version tags. Audit workflow runs during the compromise window for unexpected log output containing secrets. Rotate any potentially exposed credentials immediately. Implement the GitHub Actions permissions model with minimal required permissions. Review workflow logs for base64-encoded content or unusual Python execution.

**Broader implications:** This incident demonstrates the significant supply chain risk inherent in the GitHub Actions ecosystem, where maintainer account compromise can cascade to thousands of downstream repositories. The attack emphasizes the critical importance of pinning dependencies to immutable references and treating CI/CD pipelines with the same security rigor as production infrastructure.
