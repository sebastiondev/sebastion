---
title: "Major Cloud Provider Suffers Multi-Region Outage Due to Configuration Error"
date: 2025-12-15T16:45:00+00:00
severity: high
category: campaign
status: resolved
tldr: "A misconfigured identity management update at a major cloud provider caused a cascading multi-region outage lasting over 12 hours, affecting thousands of businesses and highlighting cloud concentration risk."
tags: [cloud, outage, availability, identity_management, incident, concentration_risk]
cves: []
affected: [Cloud service consumers, SaaS providers]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/cloud-provider-multi-region-outage/
  - title: "The Record"
    url: https://therecord.media/cloud-provider-multi-region-outage-configuration-error
---

**What happened:** A major cloud service provider experienced a multi-region outage lasting over 12 hours that was ultimately traced to a misconfigured identity and access management (IAM) update. The faulty configuration was pushed globally, causing authentication failures that prevented users, applications, and internal services from authenticating. The cascading effect disrupted compute, storage, database, and network services across multiple geographic regions simultaneously. Thousands of businesses, including major SaaS providers, were affected.

**Technical details:** The root cause was a configuration change to the cloud provider's internal IAM policy engine that introduced an overly restrictive default deny rule. The change was intended to be limited in scope but was applied globally due to a missing regional scoping parameter. As the configuration propagated, internal services began failing authentication checks, triggering cascading failures across dependent services. The global nature of the IAM system meant that regional failover mechanisms were ineffective, as they relied on the same IAM infrastructure. Recovery required manual rollback of the IAM configuration across each affected region, which was complicated by the fact that rollback tools themselves required authentication.

**Who is affected:** Thousands of businesses relying on the cloud provider's infrastructure, including SaaS companies whose applications became unavailable to their own customers, creating a multiplier effect. Financial services, healthcare, e-commerce, and media organizations reported significant business disruptions. The outage highlighted the interconnected nature of modern internet infrastructure, where a single cloud provider failure can cascade to affect seemingly unrelated services.

**What defenders should do:** Develop and test multi-cloud or hybrid cloud disaster recovery strategies that can function when a primary cloud provider is completely unavailable. Ensure critical applications have documented manual failover procedures. Implement client-side circuit breakers and caching for cloud service dependencies. Review business continuity plans to account for extended cloud provider outages. Consider architectural patterns that gracefully degrade rather than completely fail when upstream dependencies are unavailable.

**Broader implications:** The concentration of internet infrastructure on a small number of cloud providers creates systemic risk that single points of failure can have outsized impact. This incident demonstrates that even cloud providers' own internal tools and recovery mechanisms can be affected by the same failure, prolonging outage duration. The 12-hour recovery time significantly exceeds the availability SLAs that most enterprises plan around, reinforcing the need for organizations to design for cloud provider failure regardless of SLA guarantees.
