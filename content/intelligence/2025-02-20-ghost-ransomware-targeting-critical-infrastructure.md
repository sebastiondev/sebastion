---
title: "CISA FBI and MS-ISAC Warn of Ghost Ransomware Targeting Critical Infrastructure"
date: 2025-02-20T08:20:00+00:00
severity: high
category: malware
status: active
tldr: "A joint advisory warns that the Ghost (Cring) ransomware group, operating from China, has compromised organizations across 70 countries by exploiting known vulnerabilities in internet-facing services."
tags: [ghost, cring, ransomware, critical_infrastructure, china]
cves: [CVE-2018-13379, CVE-2021-34473, CVE-2021-34523, CVE-2021-31207]
affected: [Critical infrastructure, healthcare, government, education, technology sectors]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-050a
  - title: "The Record"
    url: https://therecord.media/ghost-cring-ransomware-advisory-cisa-fbi
---

**What happened:** CISA, the FBI, and the Multi-State Information Sharing and Analysis Center (MS-ISAC) released a joint advisory warning about Ghost ransomware, also known as Cring, which has been active since early 2021. The China-based group has compromised organizations across more than 70 countries by exploiting publicly known vulnerabilities in internet-facing appliances and services rather than using phishing.

**Technical details:** Ghost actors exploit N-day vulnerabilities including Fortinet FortiOS path traversal (CVE-2018-13379), Microsoft Exchange ProxyShell chain (CVE-2021-34473, CVE-2021-34523, CVE-2021-31207), and Adobe ColdFusion vulnerabilities. Post-exploitation involves deploying Cobalt Strike beacons, disabling security tools, encrypting files using variants named Cring.exe, Ghost.exe, ElysiumO.exe, and Locker.exe. The group demands cryptocurrency ransoms and has been known to abandon attacks quickly if they encounter hardened environments.

**Who is affected:** Organizations across critical infrastructure, healthcare, government, education, and technology sectors in over 70 countries. The group specifically targets organizations that have not patched known vulnerabilities in internet-facing services, making unpatched legacy systems the primary risk factor.

**What defenders should do:** Prioritize patching the specific CVEs listed in the advisory. Audit internet-facing services for known vulnerabilities. Implement network segmentation to limit lateral movement. Maintain offline backups that are tested regularly. Monitor for Cobalt Strike beacon indicators and PowerShell-based post-exploitation activity. Implement phishing-resistant MFA on all administrative accounts.

**Broader implications:** Ghost's success using years-old vulnerabilities demonstrates that many organizations continue to lag in basic patch management for internet-facing infrastructure. This advisory serves as a stark reminder that adversaries do not need zero-days when known vulnerabilities from 2018-2021 remain unpatched across thousands of organizations worldwide.
