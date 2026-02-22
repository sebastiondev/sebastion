---
title: "Delta Electronics ASDA-Soft Stack-Based Buffer Overflow Vulnerability (CVE-2026-1361)"
date: 2026-02-22T15:53:31+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Critical stack-based buffer overflow in Delta Electronics ASDA-Soft versions up to 7.2.0.0 could allow remote code execution via structured exception handler (SEH) corruption."
tags: [delta-electronics, asda-soft, buffer-overflow, seh-corruption]
cves: [CVE-2026-1361]
affected: [Delta Electronics ASDA-Soft <=7.2.0.0]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-048-02
---

The Delta Electronics ASDA-Soft software contains a critical stack-based buffer overflow vulnerability (CVE-2026-1361) that could allow an attacker to write arbitrary data beyond the bounds of a stack-allocated buffer, leading to SEH corruption. This vulnerability affects all versions of ASDA-Soft up to 7.2.0.0 and carries a CVSSv3 score of 7.8, indicating a high severity issue.

The exploitation of this vulnerability could lead to remote code execution (RCE), giving attackers full control over affected systems. This makes it particularly dangerous for industrial control systems (ICS) environments where Delta Electronics products are commonly used.

Defenders should immediately update ASDA-Soft to the latest version, as no patches or workarounds have been publicly disclosed yet. Given the critical nature of this vulnerability and its potential impact on ICS operations, it is likely to be targeted by sophisticated attackers seeking to disrupt or gain unauthorized access to industrial systems.

The broader implication of this vulnerability highlights the growing risk of software flaws in industrial automation systems. Organizations using Delta Electronics products must prioritize updates and implement robust security monitoring to detect and respond to potential exploitation attempts.