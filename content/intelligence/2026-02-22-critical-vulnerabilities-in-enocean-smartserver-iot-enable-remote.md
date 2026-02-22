---
title: "Critical Vulnerabilities in EnOcean SmartServer IoT Enable Remote Code Execution"
date: 2026-02-22T15:47:43+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "EnOcean SmartServer IoT versions up to 4.60.009 contain critical vulnerabilities (CVE-2026-20761, CVE-2026-22885) allowing remote code execution and ASLR bypass, posing significant risks to smart building infrastructure."
tags: [enocean, iotsmartserver, vulnerability]
cves: [CVE-2026-20761, CVE-2026-22885]
affected: [EnOcean SmartServer IoT <=4.60.009]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-01
---

The EnOcean SmartServer IoT product is affected by two critical vulnerabilities: Command Injection and Out-of-bounds Read. These flaws enable remote code execution (RCE) and allow attackers to bypass Address Space Layout Randomization (ASLR), significantly compromising system security. The impact is severe as the device integrates smart building automation, making it a target for attacks that could disrupt operations or compromise sensitive data.

Attackers can exploit these vulnerabilities to execute arbitrary commands, leading to potential unauthorized access, data breaches, and service disruptions. Organizations using EnOcean SmartServer IoT in industrial or smart building environments are at risk, as such systems often handle critical infrastructure functions.

Immediate action is required: update the software to patched versions, disable unnecessary services, implement network segmentation, and monitor for exploit attempts. The broader implication highlights the growing threat landscape for IoT devices in critical infrastructures, underscoring the need for robust security measures in smart technologies.