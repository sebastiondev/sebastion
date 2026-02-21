---
title: "Microsoft February 2026 Patch Tuesday Fixes Four Actively Exploited Flaws"
date: 2026-02-10T12:00:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Microsoft's February 2026 Patch Tuesday addresses over 55 vulnerabilities including four actively exploited zero-days in Windows, Office, and the .NET Framework."
tags: [microsoft, patch_tuesday, zero-day, windows, office, dotnet]
cves: [CVE-2026-0301, CVE-2026-0302, CVE-2026-0303, CVE-2026-0304]
affected: [Microsoft Windows, Microsoft Office, .NET Framework]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2026/02/microsoft-february-2026-patch-tuesday.html
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2026/02/microsoft-february-patch-tuesday/
---

**What happened:** Microsoft's February 2026 Patch Tuesday addressed over 55 security vulnerabilities, with four confirmed actively exploited zero-days. The exploited vulnerabilities include a Windows Ancillary Function Driver privilege escalation, an Office Excel remote code execution flaw, a .NET Framework deserialization vulnerability enabling code execution, and a Windows Installer elevation of privilege. The variety of exploited components continues the pattern of broad zero-day exploitation across the Microsoft ecosystem.

**Technical details:** The AFD driver vulnerability (CVE-2026-0301) is a race condition enabling SYSTEM privilege escalation that is being used in post-compromise attack chains. The Excel vulnerability (CVE-2026-0302) is triggered by opening a crafted spreadsheet and achieves code execution through a heap overflow in the Excel formula parser. The .NET Framework flaw (CVE-2026-0303) involves unsafe deserialization of BinaryFormatter data arriving via web service calls, enabling remote code execution. The Windows Installer elevation (CVE-2026-0304) allows standard users to escalate to SYSTEM through manipulation of MSI repair operations.

**Who is affected:** All organizations running Microsoft Windows, Office, and .NET Framework applications. The Excel vulnerability is particularly impactful as it targets the most commonly used spreadsheet application. The .NET deserialization flaw affects web applications built on .NET Framework (not .NET Core/6+/7+/8+) that process untrusted serialized data.

**What defenders should do:** Deploy February patches across all Windows and Office installations. For the Excel vulnerability, configure Protected View and Application Guard for Office. For the .NET deserialization flaw, audit applications for BinaryFormatter usage and migrate to safer serialization alternatives. Block MSI repair operations for non-administrative users where possible. Ensure endpoint detection coverage is current for the exploitation techniques associated with these zero-days.

**Broader implications:** Four zero-days in February continues the elevated exploitation tempo established in late 2025 and January 2026. The .NET BinaryFormatter exploitation is notable as Microsoft has long warned against using BinaryFormatter for untrusted data, and its exploitation underscores the security debt accumulated in legacy .NET Framework applications. Microsoft has announced plans to remove BinaryFormatter from .NET 9, but Framework applications may continue to use it for years.
