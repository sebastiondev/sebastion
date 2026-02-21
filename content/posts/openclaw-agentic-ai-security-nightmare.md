---
title: "Full system access. No security model."
date: 2026-02-07T12:00:00+00:00
draft: false
tags:
  - security
  - ai
  - agents
  - vulnerability
  - openclaw
categories:
  - Security
  - AI
coverImage: /images/openclaw/thronglets.jpg
description: "OpenClaw gathered 150,000 GitHub stars and 1.5 million leaked API keys. A look at what happens when agentic AI skips the hard questions."
tier: free
contentType: research
author: Lewis
keyFindings:
  - "A single embedded key in Moltbook's frontend exposed 1.5 million API keys, 35,000 emails and private agent-human conversations."
  - "Moltbook claimed 1.5 million AI agents — leaked data showed roughly 17,000 actual humans operating bot fleets."
  - "OX Security found hundreds of eval() and execSync() calls - textbook remote code execution surfaces."
  - "CVE-2026-25253 allowed one-click token exfiltration granting full operator access to a victim's local system."
  - "Over 341 malicious skills on ClawHub exfiltrated files, API keys and attempted to drain cryptocurrency wallets."
  - "Censys found 21,000+ OpenClaw instances publicly exposed with no authentication enforced by default."
artifacts:
  - type: reference
    url: https://www.trendmicro.com/en_us/research/26/b/what-openclaw-reveals-about-agentic-assistants.html
    description: "Trend Micro - Viral AI, Invisible Risks"
  - type: reference
    url: https://www.securityweek.com/vulnerability-allows-hackers-to-hijack-openclaw-ai-assistant/
    description: "SecurityWeek - Vulnerability Allows Hackers to Hijack OpenClaw"
  - type: reference
    url: https://www.ox.security/blog/one-step-away-from-a-massive-data-breach-what-we-found-inside-moltbot/
    description: "OX Security - What We Found Inside MoltBot"
  - type: reference
    url: https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare
    description: "Cisco - Personal AI Agents Are a Security Nightmare"
---

OpenClaw - previously known as Clawdbot, then Moltbot - is an open-source AI agent designed to read your emails, run terminal commands, edit files and post to social media on your behalf. "Claude with hands" is how the community describes it, and the metaphor is apt. The trouble is nobody checked whether those hands were clean.

In the space of a few weeks, OpenClaw gathered over 150,000 GitHub stars. By early February 2026, researchers had found enough security holes to fill a textbook.

## The Moltbook exposure

The highest-profile incident centres on Moltbook - a social network built specifically for OpenClaw agents to interact with each other. The premise sounds like science fiction. The reality was more mundane and far more damaging.

Researchers at Wiz discovered a single embedded key in the site's frontend code that granted full read access to the internal data store. That one key exposed 1.5 million API keys for services like OpenAI, Anthropic and Google, alongside 35,000 user email addresses and private conversation logs between agents and their human owners.

Perhaps more revealing than the breach itself was what it uncovered about the platform's claims. Moltbook advertised 1.5 million AI agents. The leaked data showed roughly 17,000 actual humans behind them. The revolutionary agent-to-agent social network was largely people operating fleets of bots - a digital Potemkin village dressed up as emergent AI behaviour.

The platform had no mechanism to verify whether an "agent" was actually AI or just a human with a script. That gap between marketing and reality tells you something about the broader culture surrounding these tools.

## A codebase shaped by vibes

OpenClaw's security problems run deeper than one misconfigured backend. The tool itself has been described by researchers at OX Security as riddled with insecure patterns - hundreds of instances of `eval()` and `execSync()` scattered through the codebase. These are the kinds of functions that make Remote Code Execution trivially achievable if an attacker can influence the input.

This is where "vibe coding" stops being a joke and starts being a liability. Vibe coding - the practice of letting AI tools generate large sections of code based on loose intent rather than precise specification - tends to produce software that works but isn't hardened. Pull requests were flowing into the OpenClaw repository without basic input sanitisation. The project moved fast. Things broke.

CVE-2026-25253 demonstrated what that looks like in practice. A high-severity token exfiltration flaw allowed attackers to craft a malicious link that, when clicked by an authenticated user, stole their authentication token and granted operator-level access to the victim's local system. One click. Full access.

## The skills problem

OpenClaw extends its capabilities through "skills" - plugins hosted on a public repository called ClawHub. The concept is familiar to anyone who has used package managers or browser extension stores. So are the risks.

Koi Security and Cisco identified over 341 malicious skills on ClawHub. Some ran hidden `curl` commands to exfiltrate local files and API keys to external servers. Others scanned for and attempted to drain cryptocurrency wallets. The supply chain attack surface here is enormous, and the review process was clearly insufficient to catch even basic threats.

This is far from hypothetical. Trend Micro's research highlights that agents relying on external skills or tools that are insufficiently vetted open themselves up to supply chain attacks. If any of these dependencies are malicious or compromised, the outsourced component can silently influence the agent's behaviour, exfiltrate data or execute actions with the agent's permissions. Recent investigations have revealed that malicious actors on the Exploit.in forum are actively discussing the deployment of OpenClaw skills to support activities such as botnet operations.

![Discussion on the Exploit.in underground forum regarding malicious OpenClaw skills](/images/openclaw/exploit-forum-openclaw-malicious-skills.png)

Meanwhile, Censys scanning data revealed more than 21,000 OpenClaw instances publicly exposed to the internet. The software's defaults did not enforce authentication or local-only access, and many users - riding the wave of enthusiasm - never thought to configure it themselves.

## The trust architecture

What makes OpenClaw genuinely interesting as a case study isn't just the catalogue of vulnerabilities. It's the architecture of trust the tool demands.

An AI agent with permission to execute terminal commands, read private messages and interact with external services is - by design - an identity proxy. It acts as you. When that agent reads a webpage containing hidden instructions (indirect prompt injection), it might follow those instructions with your credentials and your permissions. Delete files. Forward sensitive data. The agent doesn't know the difference between a legitimate task and a planted command.

CyberArk's researchers called it "the lethal trifecta of AI agent risk" - access to private data, exposure to untrusted content and the authority to act on a user's behalf. That framing is hard to argue with.

The shadow IT dimension compounds this further. Employees have been deploying OpenClaw on corporate machines to automate their workflows, giving a non-deterministic AI agent access to internal repositories, Slack channels and credentials stores. No security team approved this. Most don't even know it's happening.

## Where this leaves things

OpenClaw is not uniquely terrible. It is, however, a sharp illustration of what happens when capability outpaces caution. The desire for autonomous AI agents is real and understandable. The security model required to support them doesn't exist yet - not in OpenClaw and not in most of the tools chasing the same vision.

The 150,000 stars on GitHub represent genuine excitement about what these tools could become. The 1.5 million leaked API keys represent the cost of not asking hard questions before handing over the keys.

Somewhere between the hype and the wreckage, there's a version of agentic AI that takes security seriously from the start. We haven't found it yet.
