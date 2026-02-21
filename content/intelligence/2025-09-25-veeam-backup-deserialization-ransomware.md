---
title: "Critical Vulnerability in Veeam Backup and Replication Enables Full System Compromise"
date: 2025-09-25T14:30:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical deserialization vulnerability in Veeam Backup & Replication allows unauthenticated attackers to gain remote code execution, with ransomware groups actively targeting backup infrastructure."
tags: [veeam, backup, deserialization, ransomware, data_protection]
cves: [CVE-2025-40115]
affected: [Veeam Backup & Replication]
sources:
  - title: "SentinelOne Labs"
    url: https://www.sentinelone.com/labs/veeam-backup-deserialization-exploitation/
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/alerts/2025/09/25/veeam-backup-vulnerability
---

**What happened:** Veeam released an emergency patch for a critical deserialization vulnerability in Backup & Replication that enables unauthenticated remote code execution. CISA added the flaw to its Known Exploited Vulnerabilities catalog after confirming that multiple ransomware groups are targeting Veeam servers to destroy backups before deploying encryption payloads. Compromising backup infrastructure is a critical step in ransomware operations, as it eliminates the victim's ability to recover without paying the ransom.

**Technical details:** CVE-2025-40115 is an unsafe deserialization vulnerability in the Veeam Backup Service (TCP port 9401). An unauthenticated attacker can send specially crafted serialized objects to the service, which are deserialized without proper validation, leading to arbitrary code execution in the context of the Veeam service account (typically SYSTEM or a highly privileged domain account). Post-exploitation activity observed includes deletion of backup files and configurations, destruction of Veeam configuration database backups, modification of backup job schedules, and credential harvesting from stored backup repository credentials.

**Who is affected:** Organizations using Veeam Backup & Replication for data protection across VMware, Hyper-V, cloud, and physical environments. Veeam is one of the most widely deployed backup solutions in enterprise environments, with particular prevalence in mid-market organizations. The targeting of backup infrastructure directly undermines ransomware recovery strategies.

**What defenders should do:** Patch Veeam Backup & Replication immediately. Restrict network access to the Veeam Backup Service port (9401) to authorized management systems only. Implement immutable backup repositories using object storage with object lock or Linux hardened repositories. Ensure backup infrastructure is on a separate network segment from production systems. Maintain offline or air-gapped backup copies that cannot be reached from the Veeam server. Test backup restoration procedures regularly.

**Broader implications:** The deliberate targeting of backup infrastructure by ransomware groups has become a standard tactic, and vulnerabilities in backup products are now among the highest-value targets for ransomware affiliates. The security of backup infrastructure must be treated as a tier-one priority, not an afterthought. Organizations should implement the 3-2-1-1-0 backup rule (three copies, two different media, one offsite, one immutable, zero errors) to ensure resilience against attacks that compromise backup servers.
