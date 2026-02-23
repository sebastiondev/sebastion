---
title: "Weekly threat intelligence digest — 2025-W11"
date: 2025-03-16T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 3 items, 9 CVEs. 1 critical, 2 high."
tags: [malware, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W11 (March 10 – 16, 2025)

## Executive summary

This week's digest covers 3 intelligence items across 3 categories, with 3 critical or high severity items requiring immediate attention. Key themes include critical vulnerabilities requiring immediate patching, active malware campaigns and supply chain risks. Notable this week: Microsoft March 2025 Patch Tuesday Addresses Six Actively Exploited Zero-Days.

## Critical & high priority

### Microsoft March 2025 Patch Tuesday Addresses Six Actively Exploited Zero-days
**Critical** · Vulnerability · 2025-03-12

Microsoft's March 2025 Patch Tuesday is one of the most critical in recent memory, fixing six actively exploited zero-day vulnerabilities across NTFS, the Win32 kernel subsystem, and Microsoft Management Console. (CVE-2025-24983, CVE-2025-24984, CVE-2025-24985, CVE-2025-24991, CVE-2025-24993, CVE-2025-26633) Affected: Windows 10, Windows 11, Windows Server 2022.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### FBI and CISA Issue Joint Advisory on Medusa Ransomware Threat
**High** · Malware · 2025-03-13

FBI, CISA, and MS-ISAC warn that the Medusa ransomware-as-a-service operation has impacted over 300 organizations across critical infrastructure sectors since 2021. Affected: Healthcare, education, legal.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Github Actions Supply Chain Attack via Tj-actions/changed-files
**High** · Supply Chain · 2025-03-15

A supply chain attack targeting the popular tj-actions/changed-files GitHub Action compromised CI/CD secrets across thousands of repositories by injecting malicious code that exfiltrated secrets to workflow logs. (CVE-2025-30066) Affected: Repositories using tj-actions/changed-files GitHub Action.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### 1. **Critical vulnerability CVE-2025-1840**
A vulnerability was found in ESAFENET CDG 5.6.3.154.205. It has been rated as critical. Affected by this issue is some unknown functionality of the file /CDGServer3/workflowE/useractivate/updateorg...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.

### 2. **Critical vulnerability CVE-2025-1841**
A vulnerability classified as critical has been found in ESAFENET CDG 5.6.3.154.205. This affects an unknown part of the file /CDGServer3/logManagement/ClientSortLog.jsp. The manipulation of the ar...
**Impact:** High risk of exploitation leading to system compromise.
**Recommendation:** Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

This week tracked 7 unique CVEs: CVE-2025-24983, CVE-2025-24984, CVE-2025-24985, CVE-2025-24991, CVE-2025-24993.... Severity distribution: 2 high, 1 critical. The concentration of vulnerability items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Priority patching targets this week:** education, Windows 11, Repositories using tj-actions/changed-files GitHub Action, Healthcare.
3. **Hunt for malware indicators** in endpoint and network telemetry using the IOCs described in the entries above.
4. **Audit third-party dependencies** — supply chain items this week indicate active targeting of software supply chains.
5. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to March 17 – 23, 2025: monitor vendors including Windows 10, Windows 11 for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.