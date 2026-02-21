---
title: "Critical Kubernetes Vulnerability Allows Container Escape via Volume Mount"
date: 2025-10-20T09:30:00+00:00
severity: critical
category: vulnerability
status: active
tldr: "A critical vulnerability in Kubernetes kubelet allows attackers to escape container boundaries through crafted volume mount operations, potentially compromising the underlying node and all co-located containers."
tags: [kubernetes, container_escape, kubelet, cloud_native, container_security]
cves: [CVE-2025-43012]
affected: [Kubernetes kubelet, all major Kubernetes distributions]
sources:
  - title: "Google Project Zero"
    url: https://googleprojectzero.blogspot.com/2025/10/kubernetes-kubelet-container-escape.html
  - title: "SentinelOne Labs"
    url: https://www.sentinelone.com/labs/kubernetes-container-escape-volume-mount/
---

**What happened:** A critical vulnerability was disclosed in the Kubernetes kubelet that allows container escape through manipulation of volume mount operations. The flaw exists in how kubelet handles subPath volume mounts, enabling a container with limited privileges to access the host filesystem and execute code on the underlying Kubernetes node. The Kubernetes security team released patches for all supported versions. Google Project Zero, who discovered the vulnerability, published a detailed technical analysis demonstrating full node compromise from a non-privileged container.

**Technical details:** CVE-2025-43012 is a time-of-check-to-time-of-use (TOCTOU) race condition in kubelet's volume mount preparation. When a pod specifies a subPath volume mount, kubelet validates the path and then performs the mount operation. An attacker in a container can exploit the race window by rapidly replacing a legitimate subPath target with a symlink pointing to the host root filesystem. Once the host filesystem is mounted into the container, the attacker has full read/write access to the node, including access to kubelet credentials, other container filesystems, and the ability to create privileged containers on the node.

**Who is affected:** All Kubernetes clusters running vulnerable kubelet versions, including managed Kubernetes services (GKE, EKS, AKS) and self-managed installations. The vulnerability requires the ability to create pods with subPath volume mounts, which is a common configuration. Multi-tenant Kubernetes clusters where untrusted workloads share nodes are at highest risk.

**What defenders should do:** Update kubelet to patched versions (1.28.15, 1.29.10, 1.30.6, or later). If patching is not immediately possible, restrict the use of subPath volume mounts through admission controllers like OPA Gatekeeper or Kyverno. Implement Pod Security Standards at the Restricted level to limit container capabilities. Monitor for unusual host filesystem access from container processes. Evaluate node isolation strategies for multi-tenant clusters.

**Broader implications:** Container escape vulnerabilities in Kubernetes undermine the fundamental isolation model that organizations rely on for multi-tenant workloads and security boundaries. The TOCTOU class of vulnerabilities in volume handling has produced multiple container escapes over the years, suggesting this remains a systemic area of risk in container runtimes and orchestrators. Organizations running multi-tenant Kubernetes must implement defense-in-depth strategies including network policies, runtime security monitoring, and workload identity controls rather than relying solely on container isolation.
