---
title: "Microsoft September 2025 Patch Tuesday Addresses Critical Windows TCP/IP Flaw"
date: 2025-09-09T11:30:00+00:00
severity: critical
category: vulnerability
status: contained
tldr: "Microsoft's September Patch Tuesday patches a wormable remote code execution vulnerability in the Windows TCP/IP stack along with two actively exploited privilege escalation zero-days."
tags: [microsoft, patch_tuesday, tcp_ip, wormable, zero-day, windows]
cves: [CVE-2025-37810, CVE-2025-37811, CVE-2025-37812]
affected: [Microsoft Windows]
sources:
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/09/microsoft-september-patch-tuesday-wormable/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/09/microsoft-september-2025-patch-tuesday.html
---

**What happened:** Microsoft's September 2025 Patch Tuesday addressed over 70 vulnerabilities, headlined by a critical wormable remote code execution vulnerability in the Windows TCP/IP stack. The flaw can be exploited by sending specially crafted IPv6 packets to a target system without any user interaction or authentication. Additionally, two Windows kernel privilege escalation vulnerabilities were patched that Microsoft confirmed are being actively exploited in targeted attacks.

**Technical details:** CVE-2025-37810 is a critical integer overflow in the Windows TCP/IP driver that occurs during processing of IPv6 extension headers. A remote unauthenticated attacker can trigger the overflow by sending malformed IPv6 packets, leading to a heap corruption condition that enables arbitrary code execution at the kernel level. The vulnerability is wormable because it requires no user interaction and can propagate across networks automatically. The two exploited privilege escalation flaws (CVE-2025-37811 and CVE-2025-37812) exist in the Windows Common Log File System and the kernel's process management, respectively.

**Who is affected:** All Windows systems with IPv6 enabled are vulnerable to the TCP/IP flaw, which includes virtually all modern Windows installations. The wormable nature means internal networks could see rapid propagation if any system is compromised. The privilege escalation zero-days affect all supported Windows versions and are being used in post-compromise attack chains.

**What defenders should do:** Prioritize this patch deployment as critical across all Windows systems. If immediate patching is not possible, consider disabling IPv6 on systems where it is not required as a temporary mitigation for the TCP/IP vulnerability. Ensure network segmentation can limit worm-like propagation between network zones. Deploy IDS/IPS signatures for the malformed IPv6 packet patterns. Monitor for unusual IPv6 traffic patterns and unexpected SYSTEM-level process creation.

**Broader implications:** Wormable vulnerabilities in core network stack components are among the most dangerous classes of security flaws, as they enable automated mass exploitation without user interaction. The comparison to EternalBlue and historical TCP/IP stack vulnerabilities is apt. This vulnerability underscores the attack surface that IPv6 introduces, particularly in environments where it is enabled by default but not actively monitored or managed by security teams.
