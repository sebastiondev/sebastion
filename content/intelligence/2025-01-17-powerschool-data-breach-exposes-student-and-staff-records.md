---
title: "PowerSchool Data Breach Exposes Student and Staff Records Across School Districts"
date: 2025-01-17T14:18:00+00:00
severity: high
category: campaign
status: active
tldr: "Education technology giant PowerSchool suffered a major data breach exposing personal information of students and staff across numerous K-12 school districts in North America."
tags: [powerschool, data_breach, education, k12]
cves: []
affected: [PowerSchool SIS customers, K-12 school districts in US and Canada]
sources:
  - title: "The Record"
    url: https://therecord.media/powerschool-data-breach-k12-students-teachers
  - title: "Krebs on Security"
    url: https://krebsonsecurity.com/2025/01/powerschool-hacked-k-12-student-teacher-data-exposed/
---

**What happened:** PowerSchool, one of the largest education technology providers in North America, confirmed a data breach that compromised its PowerSchool SIS (Student Information System) platform. Attackers gained access using compromised credentials to a customer support portal, then used a data export tool to exfiltrate student and teacher records from connected school districts.

**Technical details:** The breach occurred through unauthorized access to PowerSchool's PowerSource customer support portal using stolen credentials. The attacker leveraged the "export data manager" tool within the SIS platform to extract database tables containing student and staff information. The stolen data reportedly includes names, addresses, Social Security numbers, medical information, grades, and other personally identifiable information. PowerSchool stated the breach was not a ransomware attack but that the threat actor demanded a ransom to delete the stolen data.

**Who is affected:** Potentially millions of current and former students and staff across K-12 school districts throughout the United States and Canada that use PowerSchool SIS. PowerSchool serves over 60 million students and operates in over 90 countries, though the full scope of affected districts is still being determined.

**What defenders should do:** School districts should contact PowerSchool for specific guidance on whether their data was involved. Enable multi-factor authentication on all administrative portals. Review and restrict access to data export tools. Monitor for unauthorized data access in student information systems and implement data loss prevention controls.

**Broader implications:** This breach highlights the massive concentration of sensitive data in education technology platforms and the risks of single-credential access to powerful data export capabilities. The targeting of educational institutions, which often have limited cybersecurity budgets, continues to be a growing concern for the sector.
