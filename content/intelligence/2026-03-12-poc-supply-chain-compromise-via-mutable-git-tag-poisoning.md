---
title: "Supply Chain Compromise via Mutable Git Tag Poisoning in GitHub Actions"
date: 2026-03-12T07:01:06+00:00
severity: critical
category: vulnerability
status: active
tldr: "Attackers with compromised GitHub App credentials can mutate release tags to point malicious commits, causing workflows to execute C2 implants. This PoC demonstrates tag poisoning as a scalable supply chain attack vector against Actions consumers."
tags: [poc, supply-chain, git-tag-poisoning, github-actions, c2-implant, credential-compromise, ci-cd]
cves: [CVE-2026-31976]
affected: [xygeni/xygeni-action]
sources:
  - title: "GitHub Security Advisories"
    url: https://github.com/advisories/GHSA-f8q5-h5qh-33mh
---

## Vulnerability Analysis

**Vulnerability Class & Root Cause:**
This is a **mutable reference supply chain compromise** exploiting the mutable nature of Git tags combined with GitHub App credential compromise. The root cause is insufficient access controls on tag mutation—attackers with write permissions can move semantic version tags (e.g., `v5`) to arbitrary commits without triggering the same branch protection rules that would block direct PRs. The `action.yml` manifest is then re-evaluated at the poisoned commit hash, executing obfuscated shell code designed to exfiltrate CI runner metadata and receive remote commands.

**PoC Significance:**
This disclosure proves that git tag poisoning is a reliable, low-friction attack vector in GitHub Actions ecosystems. The PoC's reliability stems from: (1) near-universal reliance on semantic versioning tags in workflow definitions, (2) branch protection rules being ineffective against tag mutation, (3) no audit trail differentiation between legitimate and malicious tag movements, and (4) the 180-second polling window providing sufficient time for command exfiltration before job completion. Preconditions are minimal—only GitHub App or user credentials with `contents:write` permission are required.

**Detection Guidance:**
- **Audit Log Signals:** Monitor `git.tag.mutation`, `git.push.force`, and `actions.workflow.job.created` events for unexpected tag movements, especially to unreviewed commits.
- **Behavioral Indicators:** Detect workflows using tag references (not commit SHAs) that spawn network connections to external C2 domains or execute `eval`/`bash -c` with dynamic payloads.
- **Log Artifacts:** Search CI runner logs for: (1) DNS queries to suspicious `.nip.io` domains or IP ranges (`91.214.78.0/24`), (2) HTTP polling patterns with 2–7 second intervals, (3) unusual `curl`/`wget` invocations with `-k` (insecure TLS), (4) base64-encoded output exfiltration.
- **YARA Signature:** Hunt for obfuscated shell patterns combining DNS resolution, eval loops, and gzip compression in action.yml or injected shell steps.

**Mitigation Steps:**
1. **Immediate:** Pin all GitHub Actions to immutable commit SHAs (e.g., `xygeni/xygeni-action@4a1b5c6d`) rather than semantic tags; audit all existing `@vX` references.
2. **Access Control:** Enforce branch protection rules on the `refs/tags/**` namespace; require pull request reviews before tag creation/mutation (GitHub Organization settings).
3. **Credential Rotation:** Revoke all GitHub App tokens and force re-authentication for users with `contents:write` access; enable commit signing verification.
4. **Monitoring:** Enable GitHub Advanced Security audit logging; configure alerts for tag mutations outside of release workflows.
5. **Validation:** Implement SBOM verification and signature validation for Action dependencies in high-security CI/CD pipelines.

**Risk Assessment:**
Likelihood of exploitation in the wild is **very high** due to widespread use of mutable tag references in GitHub Actions. Threat actors are highly interested in this vector because: (1) a single tag compromise affects all downstream consumers simultaneously, (2) minimal operational footprint is required, (3) CI runners often have privileged access to cloud credentials and secrets, and (4) the attack is difficult to attribute if logs are not properly retained. Organizations using popular Actions without SHA pinning are in immediate danger.