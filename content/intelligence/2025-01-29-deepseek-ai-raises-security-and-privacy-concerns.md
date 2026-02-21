---
title: "DeepSeek AI Raises Security and Privacy Concerns After Rapid Adoption"
date: 2025-01-29T11:05:00+00:00
severity: medium
category: tool
status: emerging
tldr: "The rapid rise of Chinese AI lab DeepSeek's open-source models has sparked significant security and data privacy concerns, with researchers identifying exposed databases and questionable data handling practices."
tags: [deepseek, ai_security, data_privacy, china, llm]
cves: []
affected: [DeepSeek API users, DeepSeek mobile app users]
sources:
  - title: "The Record"
    url: https://therecord.media/deepseek-ai-security-privacy-concerns
  - title: "SecurityWeek"
    url: https://www.securityweek.com/deepseek-database-leak/
---

**What happened:** Following the viral launch of DeepSeek R1, security researchers discovered an exposed ClickHouse database belonging to DeepSeek that contained chat histories, API keys, backend operational data, and other sensitive information. The exposed database required no authentication and allowed full control over database operations. Separately, privacy analyses of the DeepSeek mobile app revealed data being transmitted to servers in China with potential implications for user privacy.

**Technical details:** Researchers at Wiz identified the exposed database at oauth2callback.deepseek.com on ports 8123 and 9000, containing over one million log entries with chat history in plaintext, API secrets, and internal metadata. The lack of authentication on this database meant anyone with the URL could read, query, and potentially modify the data. The DeepSeek iOS app was also found to transmit data to ByteDance-owned infrastructure and use deprecated encryption methods.

**Who is affected:** Developers and organizations that integrated the DeepSeek API or used the cloud-hosted service during the exposure window. Users of the DeepSeek mobile applications who may have shared sensitive information through chat interactions. The broader AI community relying on DeepSeek's open-source models is affected by the trust implications.

**What defenders should do:** Rotate any API keys used with DeepSeek services immediately. Audit logs for any sensitive data shared through DeepSeek chat interfaces. Organizations should evaluate their AI tool usage policies and consider whether third-party AI services meet their data residency and privacy requirements. Self-hosted deployments of the open-source models are not affected by the cloud security issues.

**Broader implications:** The DeepSeek incident highlights the tension between the rapid adoption of AI tools and proper security due diligence. As organizations race to integrate LLMs into their workflows, this serves as a cautionary tale about the importance of evaluating the security posture and data handling practices of AI service providers, particularly those with cross-border data transfer implications.
