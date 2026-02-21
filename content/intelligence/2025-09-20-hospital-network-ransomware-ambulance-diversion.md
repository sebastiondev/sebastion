---
title: "Ransomware Attack Disrupts Major US Hospital Network Operations"
date: 2025-09-20T07:45:00+00:00
severity: high
category: campaign
status: active
tldr: "A ransomware attack forced a major US hospital network to divert ambulances and revert to paper records across multiple facilities, the largest healthcare disruption since the Change Healthcare incident."
tags: [ransomware, healthcare, hospital, patient_safety, incident_response]
cves: []
affected: [US hospital network, healthcare patients]
sources:
  - title: "BleepingComputer"
    url: https://www.bleepingcomputer.com/news/security/hospital-network-ransomware-ambulance-diversion/
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/09/hospital-network-ransomware-disruption/
---

**What happened:** A ransomware attack targeted a major US hospital network operating multiple medical facilities across several states, forcing emergency departments to divert ambulances and clinical staff to revert to paper-based record keeping. The attack encrypted critical clinical and administrative systems, including electronic health records (EHR), imaging systems, and laboratory information systems. The hospital network invoked its operational continuity protocols and the HHS Health Sector Cybersecurity Coordination Center (HC3) issued an alert to the broader healthcare sector.

**Technical details:** Initial access was achieved through a compromised VPN credential that lacked multi-factor authentication. The attackers maintained persistent access for approximately two weeks before deploying ransomware, during which time they exfiltrated patient data including protected health information (PHI). The ransomware deployed was a variant associated with a well-known ransomware-as-a-service operation. The attack was timed for a weekend when IT staffing was reduced. Encrypted systems included VMware ESXi hypervisors hosting clinical applications, Windows domain controllers, and NAS appliances storing medical imaging data.

**Who is affected:** Patients and staff across the hospital network's facilities in multiple states. Ambulance diversions force patients to be transported to more distant hospitals, potentially affecting patient outcomes for time-sensitive emergencies. Surgical procedures were postponed, outpatient appointments cancelled, and pharmacy operations degraded to manual systems. The data exfiltration potentially exposes PHI for hundreds of thousands of patients.

**What defenders should do:** Healthcare organizations should audit VPN access and enforce MFA on all remote access points. Implement network segmentation between clinical and administrative systems. Ensure offline backups of EHR and other critical clinical systems are maintained and regularly tested. Develop and drill paper-based continuity procedures. Engage with HHS HC3 for sector-specific threat intelligence and CISA for critical infrastructure security assessments.

**Broader implications:** Healthcare ransomware attacks with direct patient care impact continue despite increased regulatory attention and industry initiatives. The two-week dwell time before ransomware deployment demonstrates that detection capabilities in many healthcare organizations remain insufficient. The ongoing challenge of securing healthcare networks is compounded by legacy systems, numerous connected medical devices, and the priority placed on clinical operations over security investments. Calls for mandatory minimum cybersecurity standards in healthcare are growing louder following this incident.
