---
title: "Weekly threat intelligence digest — 2025-W18"
date: 2025-05-04T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 2 items, 2 CVEs. 2 high."
tags: [malware, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: 2025-W18 (April 28 – May 4, 2025)

## Executive summary

This week's digest covers 2 intelligence items across 1 categories, with 2 critical or high severity items requiring immediate attention. Key themes include active malware campaigns. Notable this week: Marks and Spencer Hit by Major Cyberattack Disrupting Operations.

## Critical & high priority

### Marks and Spencer Hit By Major Cyberattack Disrupting Operations
**High** · Malware · 2025-04-28

UK retail giant Marks & Spencer suffered a significant cyberattack that disrupted contactless payments, click-and-collect services, and online ordering, attributed to the DragonForce ransomware operation working with Scattered Spider affiliates. Affected: Marks and Spencer UK operations.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Co-op Forced To Shut Down IT Systems After Cyberattack
**High** · Malware · 2025-05-02

UK retailer Co-op shut down parts of its IT infrastructure after detecting unauthorized access, becoming the second major British retailer hit by cyberattack in weeks following Marks & Spencer. Affected: Co-op UK retail and food supply operations.

**Recommended action:** Apply available patches immediately. Monitor for indicators of active exploitation in your environment.

### Critical vulnerability CVE-2025-43961
- **What happened**: In LibRaw before 0.21.4, metadata/tiff.cpp has an out-of-bounds read in the Fujifilm 0xf00c tag parser.
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.

### Critical vulnerability CVE-2025-43962
- **What happened**: In LibRaw before 0.21.4, phase_one_correct in decoders/load_mfbacks.cpp has out-of-bounds reads for tag 0x412 processing, related to large w0 or w1 values or the frac and mult calculations.
- **Who's affected**: Systems running the vulnerable software.
- **What to do**: Apply vendor patches immediately and monitor for indicators of compromise.


## Notable developments

No medium or low severity items to highlight this week.

## Vulnerability landscape

No CVE identifiers were linked to this week's items. Severity distribution: 2 high. The concentration of malware items continues to underline the importance of timely patch management and continuous monitoring.

## Recommended actions

1. **Review and apply patches** for all items listed above, prioritising critical and high severity findings.
2. **Hunt for malware indicators** in endpoint and network telemetry using the IOCs described in the entries above.
3. **Update threat intelligence feeds** and ensure your SIEM/SOAR rules reflect this week's CVEs and TTPs.

## Looking ahead

Looking ahead to May 5 – 11, 2025: monitor vendors including Marks and Spencer UK operations for follow-up patches or exploitation reports. When active exploitation is confirmed on critical items, expect increased attacker interest and copycat campaigns within 7–14 days.