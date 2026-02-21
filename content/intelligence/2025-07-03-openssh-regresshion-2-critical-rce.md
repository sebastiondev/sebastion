---
title: "Critical OpenSSH Vulnerability Allows Remote Code Execution on Linux Servers"
date: 2025-07-03T07:40:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical signal handler race condition in OpenSSH server allows unauthenticated remote code execution on affected Linux systems, dubbed 'regreSSHion 2' as a follow-up to last year's CVE-2024-6387."
tags: [openssh, linux, rce, race_condition, remote_access]
cves: [CVE-2025-31890]
affected: [OpenSSH server on glibc-based Linux distributions]
sources:
  - title: "SentinelOne Labs"
    url: https://www.sentinelone.com/labs/regresshion-2-openssh-rce-vulnerability/
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/07/openssh-critical-rce-regresshion-2.html
---

**What happened:** Security researchers disclosed a critical remote code execution vulnerability in OpenSSH server, informally dubbed "regreSSHion 2" as it shares similarities with the CVE-2024-6387 signal handler race condition disclosed in 2024. The vulnerability allows an unauthenticated attacker to achieve remote code execution as root on affected Linux systems running glibc-based distributions. Given that OpenSSH is the most widely deployed remote access tool on Linux servers, the vulnerability has an enormous potential attack surface.

**Technical details:** CVE-2025-31890 is a race condition in the OpenSSH server's authentication timeout handler. Similar to its predecessor, it involves unsafe function calls within a signal handler context. The vulnerability was introduced as a regression in a code refactoring effort. Exploitation requires sending a specific sequence of authentication requests to trigger the race condition, which corrupts data structures in a way that can be leveraged for arbitrary code execution. While exploitation is non-trivial and may require thousands of attempts, researchers have demonstrated reliable exploitation within several hours against default configurations.

**Who is affected:** Linux servers running vulnerable versions of OpenSSH with sshd exposed to the network. Major distributions including Ubuntu, Debian, RHEL, and Fedora have released patched packages. Servers with SSH exposed to the internet are at highest risk, and Shodan data indicates over 25 million OpenSSH instances are publicly accessible. BSD-based systems and those using musl libc appear unaffected.

**What defenders should do:** Update OpenSSH to the patched version provided by your distribution immediately. If patching is not possible, reduce exposure by restricting SSH access to known IP addresses using firewall rules or VPN. Review SSH configuration to reduce the LoginGraceTime setting, which decreases the exploitation window. Monitor for unusual SSH authentication patterns indicating exploitation attempts, specifically high volumes of connections that timeout without completing authentication.

**Broader implications:** A second critical OpenSSH vulnerability in as many years raises questions about the security of one of the most fundamental pieces of internet infrastructure. While the OpenSSH project has an outstanding security track record, the complexity of signal handling in C code continues to produce subtle, exploitable flaws. This vulnerability will accelerate discussions about memory-safe SSH implementations and the broader push toward memory-safe languages for critical infrastructure software.
