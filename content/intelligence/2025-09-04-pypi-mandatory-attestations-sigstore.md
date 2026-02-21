---
title: "Python Package Index Implements Mandatory Attestations for All Published Packages"
date: 2025-09-04T10:00:00+00:00
severity: informational
category: policy
status: resolved
tldr: "PyPI now requires all newly published packages to include build provenance attestations using Sigstore, marking a major milestone in supply chain security for the Python ecosystem."
tags: [pypi, python, supply_chain, sigstore, attestations, open_source]
cves: []
affected: [Python package maintainers, Python developers]
sources:
  - title: "SecurityWeek"
    url: https://www.securityweek.com/pypi-mandatory-attestations-sigstore/
  - title: "The Record"
    url: https://therecord.media/pypi-mandatory-build-provenance-attestations
---

**What happened:** The Python Package Index (PyPI) announced and began enforcing mandatory build provenance attestations for all newly published packages. Using Sigstore's infrastructure, package maintainers must now cryptographically prove that their published package was built from a specific source code commit in a trusted CI/CD environment. This requirement aims to prevent supply chain attacks where attackers upload malicious packages using compromised maintainer credentials or typosquatting techniques.

**Technical details:** The attestation system leverages Sigstore's keyless signing and transparency log. When a package is built in a supported CI/CD environment (GitHub Actions, GitLab CI, CircleCI), the build system generates an attestation binding the package artifact to the source repository, commit hash, build configuration, and builder identity. This attestation is verified by PyPI during upload and made publicly queryable. Package consumers can use pip's new verification mode to validate attestations before installation. Existing packages are grandfathered but encouraged to adopt attestations.

**Who is affected:** Python package maintainers publishing new packages or new versions to PyPI. Package consumers benefit from increased confidence in package authenticity. CI/CD pipelines used for package publishing need to be updated to generate attestations. Maintainers building packages locally rather than in CI/CD will need to adjust their workflows to use supported build environments.

**What defenders should do:** Python package maintainers should update publishing workflows to use GitHub Actions or another supported CI/CD environment that generates Sigstore attestations. Organizations consuming Python packages should enable pip's attestation verification mode in their dependency management workflows. Update internal documentation and developer guidelines to reflect the new requirements. Audit existing packages for compliance and plan migration timelines.

**Broader implications:** PyPI's mandatory attestation requirement represents the most significant supply chain security improvement in a major package ecosystem to date. It directly addresses the root cause of numerous supply chain attacks by cryptographically linking packages to their source code and build environment. The move is expected to influence other package ecosystems (npm, RubyGems, Maven) to implement similar requirements, potentially establishing a new industry standard for software supply chain integrity.
