---
title: "Microsoft July 2025 Patch Tuesday Addresses Critical Hyper-V Escape"
date: 2025-07-08T11:30:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Microsoft's July Patch Tuesday fixes over 60 vulnerabilities including a critical Hyper-V guest-to-host escape being exploited by nation-state actors for cloud infrastructure attacks."
tags: [microsoft, patch_tuesday, hyper_v, hypervisor_escape, zero-day]
cves: [CVE-2025-33654, CVE-2025-33671]
affected: [Microsoft Windows, Microsoft Hyper-V, Azure]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/07/microsoft-july-patch-tuesday-hyper-v/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/07/microsoft-july-2025-patch-tuesday.html
---

**What happened:** Microsoft released its July 2025 Patch Tuesday updates addressing over 60 security vulnerabilities. The most critical fix resolves a Hyper-V guest-to-host escape vulnerability that Microsoft acknowledged is under active exploitation. The company attributed the exploitation to a nation-state threat actor targeting cloud service provider infrastructure. A second zero-day in the Windows MSHTML platform was also patched, which was being used in phishing campaigns to bypass Mark-of-the-Web protections.

**Technical details:** CVE-2025-33654 is a critical vulnerability in the Hyper-V virtual machine bus (VMBus) that allows an authenticated attacker within a guest virtual machine to send specially crafted VMBus messages to the host, resulting in arbitrary code execution in the root partition. The exploitation chain requires initial access to a guest VM but can compromise the entire Hyper-V host and all co-located virtual machines. CVE-2025-33671 is a security feature bypass in the Windows MSHTML platform that allows crafted HTML files to evade Mark-of-the-Web tagging when downloaded, enabling subsequent macro execution without security warnings.

**Who is affected:** Organizations running Hyper-V for on-premises virtualization and cloud service providers using Hyper-V-based infrastructure. The MSHTML vulnerability affects all Windows users who may receive malicious HTML files via email or web downloads. Azure customers benefit from Microsoft's accelerated patching of their own infrastructure.

**What defenders should do:** Prioritize the Hyper-V patch for all hosts running Hyper-V role. Cloud service providers should apply emergency maintenance windows. Apply all July updates through standard channels. For the MSHTML bypass, ensure email gateways are scanning HTML attachments and endpoint protection is configured to block suspicious macro execution regardless of Mark-of-the-Web status.

**Broader implications:** Hypervisor escape vulnerabilities affecting cloud infrastructure represent an existential threat to the shared responsibility security model. When a guest VM can compromise its host, the isolation boundaries that underpin multi-tenant cloud computing are broken. This incident reinforces why cloud providers must maintain extremely aggressive patching cycles and why organizations should factor hypervisor security into their cloud provider evaluation criteria.
