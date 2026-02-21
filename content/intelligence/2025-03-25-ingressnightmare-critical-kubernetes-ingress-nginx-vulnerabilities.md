---
title: "IngressNightmare: Critical Kubernetes Ingress-NGINX Vulnerabilities Expose Clusters"
date: 2025-03-25T09:30:00+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Four critical vulnerabilities in the Kubernetes ingress-nginx controller, collectively dubbed IngressNightmare, could allow unauthenticated attackers to take over Kubernetes clusters hosting 40% of cloud workloads."
tags: [kubernetes, ingress_nginx, cloud_security, container_security]
cves: [CVE-2025-1097, CVE-2025-1098, CVE-2025-24514, CVE-2025-1974]
affected: [Kubernetes clusters using ingress-nginx controller]
sources:
  - title: "The Hacker News"
    url: https://thehackernews.com/2025/03/critical-ingress-nginx-vulnerabilities.html
  - title: "SecurityWeek"
    url: https://www.securityweek.com/ingressnightmare-kubernetes-vulnerabilities/
---

**What happened:** Researchers at Wiz disclosed four critical vulnerabilities in the ingress-nginx controller for Kubernetes, collectively dubbed "IngressNightmare." The most severe flaw, CVE-2025-1974 (CVSS 9.8), allows unauthenticated remote code execution within the ingress controller's network context, potentially enabling full Kubernetes cluster takeover. The ingress-nginx controller is used by approximately 40% of all Kubernetes clusters.

**Technical details:** The vulnerabilities exploit the admission controller component of ingress-nginx, which validates incoming Ingress objects before they are applied. CVE-2025-1097, CVE-2025-1098, and CVE-2025-24514 allow injection of arbitrary NGINX configuration directives through manipulated Ingress annotations. CVE-2025-1974 chains these with the admission controller's configuration testing process to achieve remote code execution. The admission controller endpoint is typically accessible to any pod in the cluster without authentication, meaning any compromised pod could escalate to cluster-level access.

**Who is affected:** Organizations running Kubernetes clusters with ingress-nginx controller versions prior to 1.12.1 or 1.11.5. Over 6,500 clusters were found to have admission controllers exposed to the public internet, creating an immediate external attack surface. Cloud-managed Kubernetes services using ingress-nginx are also affected.

**What defenders should do:** Update ingress-nginx controller to version 1.12.1 or 1.11.5 immediately. Apply network policies to restrict access to the admission webhook endpoint to only the Kubernetes API server. If updating is not immediately possible, temporarily disable the admission controller validating webhook. Audit ingress resources for suspicious annotations that may indicate exploitation attempts.

**Broader implications:** IngressNightmare illustrates the systemic risk of widely-deployed Kubernetes components that handle untrusted input. The prevalence of ingress-nginx across cloud environments means this vulnerability class has one of the largest blast radiuses of any Kubernetes security issue to date, and it reinforces the need for Kubernetes-specific security monitoring and network segmentation practices.
