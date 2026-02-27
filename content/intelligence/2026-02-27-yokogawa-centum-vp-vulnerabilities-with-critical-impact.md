---
title: "Yokogawa CENTUM VP Vulnerabilities with Critical Impact"
date: 2026-02-27T07:04:39+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Multiple critical vulnerabilities in Yokogawa's CENTUM VP R6 and R7 versions could allow attackers to execute arbitrary code or cause denial-of-service, posing significant risks to industrial control systems."
tags: [yokogawa, centum-vp, ics]
cves: [CVE-2025-1924, CVE-2025-48019, CVE-2025-48020, CVE-2025-48021, CVE-2025-48022, CVE-2025-48023]
affected: [Yokogawa CENTUM VP R6, Yokogawa CENTUM VP R7]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-09
---

The vulnerabilities in Yokogawa's CENTUM VP software versions R6 and R7, specifically within the Vnet/IP Interface Package, are critical due to their potential for arbitrary code execution and denial-of-service conditions. These issues affect both VP6C3300 and VP7C3300 packages up to version R1.07.00. The exploitation could lead to severe consequences in industrial settings where these systems are deployed, potentially disrupting operations or allowing attackers to gain unauthorized control over critical infrastructure. Immediate action is required by organizations using these versions to mitigate risks, including patching and network segmentation. Given the nature of these vulnerabilities, they represent a significant threat to industrial control systems (ICS) and highlight the need for robust security measures in such environments.