---
title: "CISA and NSA Release Guidance on Securing AI Systems in Critical Infrastructure"
date: 2025-06-19T10:30:00+00:00
severity: informational
category: policy
status: resolved
tldr: "CISA and NSA published joint guidance addressing security risks of AI system deployment in critical infrastructure, covering supply chain, model integrity, and adversarial attack mitigations."
tags: [cisa, nsa, artificial_intelligence, critical_infrastructure, guidance, policy]
cves: []
affected: [Critical infrastructure operators deploying AI systems]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/06/19/securing-ai-critical-infrastructure
  - title: "SecurityWeek"
    url: https://www.securityweek.com/cisa-nsa-ai-security-guidance-critical-infrastructure/
---

**What happened:** CISA and NSA jointly released comprehensive guidance for securing artificial intelligence systems deployed in critical infrastructure environments. The document addresses the unique security challenges introduced by AI models, including supply chain risks from third-party model dependencies, data poisoning attacks, prompt injection, model extraction, and the potential for adversarial manipulation of AI-driven operational decisions. The guidance builds on previous federal AI security initiatives and provides actionable recommendations for operators.

**Technical details:** The guidance covers three primary areas: securing the AI development lifecycle (training data integrity, model provenance, and supply chain validation), protecting deployed AI systems (inference-time attacks, model evasion, prompt injection in LLM-based systems), and monitoring AI systems for anomalous behavior (drift detection, output validation, and logging requirements). Specific technical recommendations include implementing model signing and verification, sandboxing AI inference workloads, establishing human-in-the-loop controls for safety-critical decisions, and maintaining the ability to fall back to non-AI operations.

**Who is affected:** Critical infrastructure operators across all 16 CISA-designated sectors, particularly those deploying AI for operational technology monitoring, anomaly detection, network defense, and automated decision-making. Energy, healthcare, financial services, and transportation sectors are highlighted as having the most immediate exposure due to rapid AI adoption.

**What defenders should do:** Review the guidance and assess current AI deployments against its recommendations. Establish AI model inventories including all third-party models and training data sources. Implement monitoring for AI model drift and unexpected output patterns. Ensure human override capability exists for all AI-driven operational decisions. Include AI-specific scenarios in incident response planning.

**Broader implications:** This guidance represents the US government's recognition that AI systems introduce novel attack surfaces that existing cybersecurity frameworks do not adequately address. As AI becomes embedded in critical infrastructure operations, the security of these systems becomes a national security concern. The guidance may foreshadow future regulatory requirements around AI security in regulated industries.
