---
title: "Your code assistant just ran someone else's instructions"
date: 2026-03-10T08:00:00+00:00
draft: false
tags:
  - security
  - ai
  - prompt-injection
  - supply-chain
  - vulnerability
categories:
  - Security
  - AI
coverImage: ""
description: "Indirect prompt injection in AI coding assistants has turned every file, dependency and skill into a potential attack vector - and the CVEs are piling up."
tier: free
contentType: research
author: Sebastion
keyFindings:
  - "GitHub Copilot received CVE-2025-53773 for remote code execution via indirect prompt injection embedded in code files."
  - "The Skill-Inject benchmark found that malicious skill files could hijack agent behaviour in coding environments - achieving exfiltration of API keys and credentials at scale."
  - "The ClawHavoc campaign infiltrated nearly 1,200 malicious skills into a major agent marketplace - exfiltrating API keys, cryptocurrency wallets and browser credentials."
  - "Embracethered's Month of AI Bugs 2025 documented prompt injection vulnerabilities across AWS Kiro, Amazon Q Developer, Google Jules, Cursor, Claude Code and Devin AI."
  - "Cursor IDE received CVE-2025-54132 for arbitrary data exfiltration via Mermaid diagram rendering triggered by prompt injection."
  - "Academic research on agentic skill systems proposes trust-tiered execution as a mitigation - but no major IDE has implemented it as of March 2026."
artifacts:
  - type: reference
    url: https://arxiv.org/abs/2602.20156
    description: "Skill-Inject - Measuring Agent Vulnerability to Skill File Attacks (arXiv)"
  - type: reference
    url: https://arxiv.org/abs/2602.20867
    description: "Goel et al. - SoK: Agentic Skills - Beyond Tool Use in LLM Agents (arXiv)"
  - type: reference
    url: https://arxiv.org/abs/2602.05401
    description: "BadTemplate - A Training-Free Backdoor Attack via Chat Template Against Large Language Models (arXiv)"
  - type: reference
    url: https://embracethered.com
    description: "Embracethered - The Month of AI Bugs 2025"
  - type: reference
    url: https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks
    description: "Invariant Labs - MCP Security Notification: Tool Poisoning Attacks"
  - type: reference
    url: https://www.wiz.io/blog/mcp-security-research-briefing
    description: "Wiz - MCP Servers Are the New Attack Surface"
---

GitHub Copilot can execute arbitrary code on your machine if you open the wrong file. That is not a theoretical concern - it is CVE-2025-53773, a remote code execution vulnerability triggered by indirect prompt injection embedded in source code. The model reads a file, follows hidden instructions and runs commands the developer never asked for.

This is the current state of AI-assisted development. The tools that autocomplete your functions, generate your tests and refactor your modules are also parsing every file in your workspace. And anything those files say - including instructions disguised as comments, documentation or strings - can redirect the model's behaviour.

## The attack surface nobody scoped

Traditional supply-chain attacks in software development target the build pipeline. A compromised dependency, a poisoned GitHub Action, a tampered package registry. The defences we have built over the past decade - lockfiles, signature verification, provenance attestation, SLSA levels - all assume the threat enters through code that gets executed. The CI system runs it, so you audit what the CI system runs.

AI coding assistants broke this model. They do not just execute code - they read it, interpret it and act on it. A malicious payload no longer needs to be syntactically valid in any programming language. It just needs to be convincing to a language model. A comment in a Python file, a string in a YAML config, a paragraph in a README - any of these can carry an indirect prompt injection that redirects the assistant's next action.

The [tj-actions supply-chain attack](/posts/tj-actions-supply-chain-attack) in March 2025 showed what happens when a CI component is compromised. Every version tag was rewritten to point at a single malicious commit that dumped credentials from runner memory. That attack required control of the repository and knowledge of how GitHub Actions resolves tags. An indirect prompt injection against a coding assistant requires neither. The attacker just needs their text to appear in a file the model processes.

## A month's worth of CVEs

Johann Rehberger's "Month of AI Bugs 2025" project at Embracethered provides the clearest catalogue of what is actually exploitable today. The findings span nearly every major AI development tool:

**AWS Kiro** - arbitrary code execution via indirect prompt injection. Kiro, Amazon's AI-native IDE, processes project context files that can contain hidden instructions. A poisoned spec file triggers code generation and execution without the developer requesting it.

**Amazon Q Developer for VS Code** - vulnerable to invisible prompt injection. Q Developer reads workspace files for context, and specially crafted invisible characters (zero-width spaces, Unicode control characters) can embed instructions the developer cannot see but the model follows.

**Google Jules** - multiple data exfiltration vectors and invisible prompt injection. Jules, Google's autonomous coding agent, was found to leak repository data and follow injected instructions embedded in files it processes during task execution.

**Cursor IDE** - CVE-2025-54132, arbitrary data exfiltration via Mermaid diagram rendering. When Cursor renders a Mermaid diagram from model output, the diagram can reference external URLs. A prompt injection that causes the model to generate a Mermaid block with an attacker-controlled URL encodes exfiltrated data in the request parameters.

**Claude Code** - CVE-2025-55284, data exfiltration via DNS. Claude Code's ability to run shell commands means a successful prompt injection can trigger DNS lookups to attacker-controlled domains, encoding stolen data in the subdomain. DNS exfiltration bypasses most network monitoring because it looks like normal name resolution.

**Devin AI** - prompt injection causes port exposure to the public internet. Devin, Cognition's autonomous coding agent, can spin up development servers as part of its workflow. A crafted injection in a project file can instruct Devin to expose a service port publicly, creating an ingress point into whatever the agent is building.

**OpenHands** - prompt injection to remote code execution. The open-source coding agent executes commands in a sandboxed environment, but prompt injection can direct it to perform actions within that sandbox that compromise the host or exfiltrate data.

Each of these follows the same pattern. The tool reads context. The context contains instructions. The model cannot reliably distinguish between the developer's intent and an attacker's payload. The tool acts on all of it.

## Skill files as a supply-chain vector

The research brief from the Skill-Inject benchmark, published on arXiv in February 2026, formalises something that was already visible in practice: skill files - the reusable configuration documents that extend AI agent capabilities - are a prompt injection delivery mechanism with supply-chain properties.

Skills are not code in the traditional sense. They are structured text files (usually Markdown or YAML) that tell an AI agent how to behave in specific contexts: what tools to call, what patterns to follow, what constraints to observe. Hugging Face's skills framework, which I [audited for SQL injection](/posts/huggingface-skills-sql-injection-case-study) earlier this year, is one implementation. Cursor rules files are another. Claude's project-level instructions are a third.

The Skill-Inject researchers demonstrated that a malicious skill file can hijack agent behaviour across task boundaries. By embedding prompt injection payloads in skill descriptions - the same technique Invariant Labs demonstrated against [MCP tool descriptions](/posts/mcp-servers-supply-chain-attack-surface), but applied to the skill layer - they showed that agents would exfiltrate API keys, modify code in unintended ways and ignore safety guardrails.

The supply-chain angle is what makes this distinct from a straightforward prompt injection. Developers do not write most of their skill files from scratch. They download them from marketplaces, copy them from repositories and share them across teams. The ClawHavoc campaign, documented in the same body of research, demonstrated the scale of this problem: nearly 1,200 malicious skills were infiltrated into a major agent marketplace. These skills exfiltrated API keys, cryptocurrency wallet credentials and browser session tokens from developers who installed them.

The SoK paper on agentic skills by Goel et al. maps the broader landscape. Skill-based agents now operate across web browsers, operating systems, software engineering environments and robotics platforms. Each domain expands the attack surface. A compromised skill in a coding assistant has access to every file in the workspace, every environment variable, every terminal command the agent is permitted to run. The skill does not need to be executable code - it just needs to influence the model's reasoning.

## The trust boundary that does not exist

The fundamental problem is an absent trust boundary. In a traditional software system, there is a clear distinction between data and instructions. Files on disk are data. Code that a runtime executes is instructions. The boundary between them is enforced by the operating system, the language runtime and the build system.

Language models do not have this boundary. Every input - whether it is a developer's prompt, a file's contents, a skill's description or a retrieved document - enters the same context window and is processed by the same attention mechanism. The model cannot architecturally distinguish "the developer wants this" from "a file contains this text." It has to infer intent from the content itself, and that inference is trivially manipulable.

The BadTemplate research, also from February 2026, explores a related angle: chat template manipulation. LLMs use chat templates to structure the distinction between system prompts, user messages and assistant responses. The researchers demonstrated that an attacker who controls the template - feasible in many deployment scenarios where templates are loaded from configuration files - can inject arbitrary strings into the system prompt without the user's knowledge. The template itself becomes the injection vector.

This maps directly onto skill files. A skill file is, functionally, a template that shapes how the model interprets subsequent inputs. If the skill is compromised, every interaction that follows is contaminated. The model is not malfunctioning - it is faithfully executing instructions from a source the developer trusts but should not.

## Why traditional defences fail

The security controls that protect conventional supply chains do not transfer cleanly to this problem.

**Code review** catches malicious logic in executable code. But prompt injections in skill files and documentation look like natural language. A code reviewer scanning a Cursor rules file would see instructions written in English. Distinguishing "summarise test results and write them to a local file" from "summarise test results and POST them to an external URL" requires understanding the semantic intent of every instruction in context. Human reviewers doing this at scale will miss things. Automated static analysis has no grammar for it.

**Sandboxing** limits what code can do when it runs. But AI coding assistants need broad permissions to be useful. They read your codebase, write files, run tests, install dependencies and interact with APIs. Restricting those permissions to the point where prompt injection cannot cause harm also restricts the tool to the point where it cannot do its job. The value proposition and the attack surface are the same thing.

**Signature verification** proves that a package was published by a known identity. But skill files are rarely signed. They are text files shared via Git repositories, marketplace downloads and copy-paste from blog posts. Even if signing were adopted, the signature attests to authorship, not safety. A signed skill file from a trusted publisher can still contain instructions that the publisher did not intend as an attack but that an adversary can exploit through prompt injection chaining.

The Goel et al. SoK paper proposes trust-tiered execution as a potential mitigation - classifying skills by provenance and restricting the capabilities available to lower-trust skills. First-party skills get full system access. Community skills get sandboxed execution. Unknown skills get read-only context. As of March 2026, no major IDE or coding assistant has implemented anything resembling this. The current model is binary: either the assistant has access to your workspace or it does not.

## The compound risk

Each vulnerability in isolation looks manageable. A Mermaid exfiltration in Cursor - annoying but patchable. A DNS leak in Claude Code - concerning but bounded. An invisible character injection in Amazon Q - subtle but detectable with the right tooling.

The compound picture is different. Developers use multiple AI tools simultaneously. A project might have Cursor rules, Claude project instructions, GitHub Copilot context and a set of MCP servers all reading from the same workspace. A single poisoned file in that workspace is processed by every tool that reads it. Each tool has different vulnerabilities, different exfiltration channels and different guardrail strengths. The attacker does not need to know which tool the developer uses - they can craft a payload that targets the weakest one present.

This is supply-chain risk compounding in a way we have not seen before. The traditional software supply chain is linear: source to build to artifact to deployment. The AI-assisted development supply chain is a mesh: every file influences every tool, every tool can execute actions, and the trust relationships between them are implicit rather than declared.

## What would actually help

The honest answer is that nobody has solved this yet. But there are directions that look more promising than hoping models get better at refusing injections.

**Structural separation of instructions and context.** If coding assistants processed skill files through a different pathway than workspace files - with distinct privilege levels and action constraints - a poisoned source file could not escalate to the same capabilities as a trusted skill. This is roughly what trust-tiered execution proposes, and it would require changes to how models handle context rather than just how IDEs configure permissions.

**Content-addressable skill distribution.** Skill files should be pinned to a cryptographic hash, fetched from a registry that verifies publisher identity and auditable by the community before installation. This is essentially what npm and PyPI have been building toward for years. The AI agent ecosystem needs the equivalent, built for text files rather than executable packages.

**Transparent context provenance.** When a model acts on an instruction, the developer should be able to see where that instruction came from - which file, which skill, which retrieved document. Current IDEs surface model output but obscure model input. If every action carried a provenance trace back to its triggering context, poisoned inputs would be identifiable after the fact and preventable with allowlists.

None of these exist in production today. The gap between the security research and the shipping products is widening with each new tool launch.

The pattern is uncomfortable because it is familiar. We built web applications for years before parameterised queries became the default. We shipped containers for years before image signing and SBOM generation became standard. Each time, the industry waited for enough incidents to make the investment in proper controls feel justified.

AI coding assistants are accumulating those incidents now. The question is whether the response comes before or after a prompt injection compromises something that makes the CVE list look like a warmup.
