---
title: "ClawJacked Flaw in OpenClaw AI Gateway Allows Malicious Sites to Hijack Local AI Agents"
date: 2026-03-01T07:06:02+00:00
severity: critical
category: vulnerability
status: resolved
tldr: "A high-severity vulnerability in OpenClaw's core gateway allowed malicious websites to hijack locally running AI agents via WebSocket connections. The issue has been fixed, but highlights risks of unsecured AI systems."
tags: [openclaw, websocket, ai-agent, vulnerability]
cves: []
affected: [OpenClaw AI Gateway]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2026/02/clawjacked-flaw-lets-malicious-sites.html
---

The ClawJacked vulnerability in OpenClaw's core gateway system represents a critical security flaw that could have enabled malicious websites to establish unauthorized control over local AI agents. This issue underscores the risks associated with exposed WebSocket interfaces, which were designed for legitimate communication but exploited for malicious purposes. The fact that the vulnerability existed in the bare OpenClaw gateway, without relying on plugins or user-installed extensions, indicates a fundamental flaw in the system's design and security assumptions. While the issue has been resolved by OpenClaw, the incident serves as a stark reminder of the potential risks posed by exposed AI systems and the importance of securing such technologies against unauthorized access.

Defenders should immediately update their OpenClaw installations to the patched version and review network configurations to ensure WebSocket connections are properly secured. Additionally, organizations using OpenClaw or similar AI gateways should implement strict access controls and monitoring to detect any异常 activity that could indicate a potential exploitation attempt. This incident also highlights the need for greater scrutiny of AI systems' communication protocols and the importance of adopting zero-trust principles when exposing services to external networks.

The broader implications of this vulnerability extend beyond OpenClaw, as it raises questions about the security practices of other AI platforms that expose similar interfaces. As AI adoption grows, such vulnerabilities could become more common, making it essential for developers and organizations to prioritize robust security measures from the outset. The resolution of this issue by OpenClaw demonstrates the importance of maintaining proactive security practices and being responsive to reported flaws.