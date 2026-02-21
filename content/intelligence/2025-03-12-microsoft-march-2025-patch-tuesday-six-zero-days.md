---
title: "Microsoft March 2025 Patch Tuesday Addresses Six Actively Exploited Zero-Days"
date: 2025-03-12T10:15:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "Microsoft's March 2025 Patch Tuesday is one of the most critical in recent memory, fixing six actively exploited zero-day vulnerabilities across NTFS, the Win32 kernel subsystem, and Microsoft Management Console."
tags: [microsoft, patch_tuesday, zero-day, ntfs, win32k]
cves: [CVE-2025-24983, CVE-2025-24984, CVE-2025-24985, CVE-2025-24991, CVE-2025-24993, CVE-2025-26633]
affected: [Windows 10, Windows 11, Windows Server 2022, Windows Server 2025]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/03/microsoft-patch-tuesday-march-2025/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/03/microsoft-march-patch-tuesday.html
---

**What happened:** Microsoft's March 2025 Patch Tuesday released fixes for approximately 57 vulnerabilities, including six that are confirmed under active exploitation. The actively exploited flaws include multiple NTFS filesystem vulnerabilities, a Win32 kernel subsystem elevation of privilege, and a security feature bypass in Microsoft Management Console (MMC).

**Technical details:** CVE-2025-24983 is a use-after-free in the Win32 kernel subsystem allowing privilege escalation to SYSTEM. CVE-2025-24984 and CVE-2025-24991 are NTFS information disclosure flaws triggered by mounting crafted VHD images. CVE-2025-24985 is an integer overflow in the Windows Fast FAT driver enabling code execution. CVE-2025-24993 is a heap-based buffer overflow in NTFS causing remote code execution through malicious VHD files. CVE-2025-26633 is a security feature bypass in MMC that allows attackers to execute code through specially crafted MSC files.

**Who is affected:** All supported Windows desktop and server platforms. The NTFS and FAT driver vulnerabilities are triggered through removable media or VHD files, making them relevant for environments where users handle external storage or virtual disk images.

**What defenders should do:** Prioritize patching all six exploited vulnerabilities immediately. Implement application control policies to restrict MSC file execution from untrusted sources. Consider restricting auto-mount of VHD files through group policy. Monitor for suspicious VHD or MSC file handling activities, particularly from email attachments or downloads.

**Broader implications:** Six simultaneously exploited zero-days in a single Patch Tuesday is exceptionally high and indicates coordinated exploitation by one or more advanced threat actors. The focus on filesystem drivers and kernel components suggests the attacks target deep system-level access, potentially for espionage or persistent compromise scenarios.
