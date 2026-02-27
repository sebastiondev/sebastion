---
title: "Critical Vulnerabilities in Pelco Sarix Pro 3 Series IP Cameras"
date: 2026-02-27T07:06:12+00:00
severity: critical
category: vulnerability
status: emerging
tldr: "Multiple critical vulnerabilities exist in Pelco's Sarix Pro 3 Series IP cameras, allowing attackers to gain unauthorized access and potentially compromise sensitive data and operations."
tags: [pelco, ip-cameras, iot, cves]
cves: [CVE-2026-1241]
affected: [Pelco, Inc. Sarix Pro 3 Series IP Cameras (IMP 3, IXP 3, IBP 3, IWP 3) versions <=02.52]
sources:
  - title: "CISA Advisories"
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-02
---

The Pelco, Inc. Sarix Pro 3 Series IP cameras are affected by a critical vulnerability (CVE-2026-1241), which could allow attackers to gain unauthorized access to sensitive device data, bypass surveillance controls, and expose facilities to privacy breaches, operational risks, and regulatory compliance issues. This vulnerability impacts multiple sub-series of the Pro 3 family, including IMP 3, IXP 3, IBP 3, and IWP 3, all at or below version 02.52. The potential for remote exploitation is significant, as it could lead to unauthorized access to live video feeds, configuration data, and potentially even control over the devices themselves. This would be particularly concerning for critical infrastructure sectors where these cameras are likely deployed for security monitoring.

The vulnerability's impact extends beyond mere data exposure; it could enable attackers to disrupt surveillance operations, leading to potential physical breaches of secured facilities. Organizations relying on these devices for security may face increased risk of both financial and reputational damage due to compromised system integrity. Given the nature of these devices' deployment in sensitive environments, successful exploitation could also result in regulatory scrutiny, as failure to protect such systems may be viewed as a lapse in due diligence.

Defenders should prioritize updating affected devices to newer firmware versions if available, or consider alternative solutions if no patches are forthcoming. Network segmentation and strict access controls should be implemented for any remaining vulnerable devices. Given the critical nature of this vulnerability and its potential impact on physical security systems, immediate action is strongly advised. The broader implication of this disclosure highlights the growing need for greater scrutiny of IoT devices used in critical infrastructure, as such vulnerabilities could have far-reaching consequences beyond traditional cybersecurity concerns.