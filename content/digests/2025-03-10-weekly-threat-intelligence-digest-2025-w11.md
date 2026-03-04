---
title: "Weekly threat intelligence digest — 2025-W11"
date: 2025-03-16T18:00:00+00:00
author: sebastion
description: "Weekly security intelligence digest covering 8 items, 11 CVEs. 1 critical, 2 high."
tags: [campaign, malware, supply-chain, threat-intelligence, vulnerability, weekly-digest]
series: "Weekly Digest"
---

# Weekly threat intelligence digest: March 10 - 16, 2025

## Executive summary
This week, cybersecurity threats reached a critical level with multiple high-impact vulnerabilities and active exploitation campaigns. Microsoft's Patch Tuesday addressed six actively exploited zero-day vulnerabilities across Windows systems, including privilege escalation and kernel subsystem flaws. The FBI and CISA issued a joint advisory on the Medusa ransomware, which has targeted over 300 organizations since 2021. Additionally, a supply chain attack compromised GitHub Actions, exposing CI/CD secrets in thousands of repositories. Other notable vulnerabilities included critical flaws in Apache Tomcat, Keras models, and PlotAI, with several high-severity CVEs added to the NVD.

## Critical & high priority
### [CRITICAL] Microsoft March 2025 Patch Tuesday Addresses Six Actively Exploited Zero-Days
**What happened:**  
Microsoft's March 2025 Patch Tuesday was one of the most critical updates in recent memory, addressing six actively exploited zero-day vulnerabilities across Windows systems. The patches were released alongside fixes for approximately 57 other vulnerabilities. The actively exploited flaws include:
- **CVE-2025-24983**: A use-after-free vulnerability in the Win32 kernel subsystem that allows privilege escalation to SYSTEM.
- **CVE-2025-24984**: A remote code execution (RCE) vulnerability in the NTFS filesystem, enabling arbitrary code execution.
- **CVE-2025-24985**: Another NTFS-related flaw that could lead to information disclosure or denial of service.
- **CVE-2025-24991**: A security feature bypass in Microsoft Management Console (MMC), allowing attackers to circumvent restrictions on script execution.
- **CVE-2025-24993**: An elevation of privilege vulnerability in the Win32 kernel subsystem.
- **CVE-2025-26633**: A directory traversal flaw in a Windows component, leading to potential file overwrite attacks.

**Who's affected:**  
Windows 10, Windows 11, Windows Server 2022, and Windows Server 2025 are all impacted by these vulnerabilities. Organizations running these operating systems are strongly advised to deploy the patches immediately.

**What to do:**  
- Apply Microsoft's March 2025 Patch Tuesday updates without delay.
- Monitor for any additional exploitation attempts targeting these vulnerabilities.
- Conduct a thorough review of system logs to detect potential compromise.

---

### [HIGH] FBI and CISA Issue Joint Advisory on Medusa Ransomware Threat
**What happened:**  
The FBI, CISA, and MS-ISAC released a joint cybersecurity advisory warning organizations about the Medusa ransomware-as-a-service (RaaS) operation. Since its emergence in June 2021, Medusa has targeted over 300 organizations across critical infrastructure sectors, including healthcare, education, legal, insurance, technology, and manufacturing.

**Technical details:**  
Medusa actors typically gain initial access through phishing campaigns or exploiting vulnerabilities in third-party software. Once inside a network, they deploy the ransomware to encrypt sensitive data and demand payment for decryption keys. The advisory highlights the following Medusa tactics:
- **Initial Access**: Phishing emails with malicious links or attachments.
- **Lateral Movement**: Use of legitimate tools like RDP and PowerShell for internal network traversal.
- **Data Exfiltration**: Stealing credentials and exfiltrating data before encryption.

**Who's affected:**  
Critical infrastructure sectors are at highest risk, but any organization could fall victim to Medusa's operations.

**What to do:**  
- Implement robust email filtering and endpoint detection solutions to block phishing attempts.
- Regularly update software and systems to mitigate known vulnerabilities.
- Conduct regular backups of critical data and isolate them from network access.
- Consider deploying ransomware detection tools and incident response playbooks.

---

### [HIGH] GitHub Actions Supply Chain Attack via tj-actions/changed-files
**What happened:**  
A supply chain attack targeting the popular `tj-actions/changed-files` GitHub Action compromised CI/CD secrets across thousands of repositories. The attacker modified the action's code to inject malicious scripts that dumped sensitive information, including AWS keys, GitHub tokens, npm tokens, and private SSH keys, into publicly accessible workflow logs.

**Technical details:**  
The attack exploited a lack of code verification in the `tj-actions/changed-files` repository. By modifying the action's source code, the attacker gained unauthorized access to workflow runner memory, enabling the exfiltration of sensitive data. The malicious changes were pushed to the repository on March 15, 2025.

**Who's affected:**  
Any organization or developer using the `tj-actions/changed-files` action in their GitHub repositories is at risk. Over 23,000 repositories are known to have used this action.

**What to do:**  
- Immediately remove and block the compromised GitHub Action from all workflows.
- Review workflow logs for any signs of unauthorized data exposure.
- Rotate all CI/CD secrets and tokens associated with affected repositories.
- Implement code verification processes for third-party actions and dependencies.

---

## Notable developments
### [MEDIUM] Additional Critical CVEs Added to NVD
The National Vulnerability Database (NVD) added several high-severity vulnerabilities this week, including:
- **CVE-2025-1945 (CVSS: 9.8)**: A flaw in `picklescan` before version 0.0.23 that allows attackers to embed malicious pickle files within PyTorch model archives. These files bypass detection and execute arbitrary code during model loading.
- **CVE-2025-1456 (CVSS: 9.8)**: A remote code execution vulnerability in Apache Tomcat versions 9.0.0 to 9.0.73, enabling attackers to take full control of affected servers.
- **CVE-2025-1789 (CVSS: 9.5)**: A directory traversal flaw in Keras models that could allow attackers to overwrite arbitrary files during model serialization.
- **CVE-2025-1634 (CVSS: 9.0)**: A cross-site scripting (XSS) vulnerability in PlotAI's web interface, allowing attackers to inject malicious scripts into victim browsers.

**What to do:**  
- Apply patches for Apache Tomcat and Keras as they become available.
- Sanitize inputs and outputs in AI/ML workflows to prevent directory traversal attacks.
- Monitor for updates to `picklescan` and adopt version 0.0.23 or later.

---

### [LOW] Increased Activity from Ransomware-as-a-Service (RaaS) Operators
This week's Medusa ransomware advisory highlights the growing threat of RaaS operations, which allow even less-skilled attackers to launch sophisticated ransomware campaigns. Security researchers predict an increase in RaaS activity targeting critical infrastructure and healthcare sectors.

**What to do:**  
- Strengthen incident response plans to handle potential ransomware incidents.
- Regularly test backup systems to ensure data can be restored quickly in case of encryption.
- Educate employees on phishing prevention and suspicious email activity.

---

## Vulnerability landscape
This week, the NVD added 7 new CVEs, with 6 classified as critical and 1 as high severity. The total number of vulnerabilities reported this week is slightly above average, reflecting the ongoing exploitation of Microsoft products and supply chain risks.

### Severity Distribution:
- **Critical (CVSS 9.0-10.0):** 6 vulnerabilities
- **High (CVSS 7.0-8.9):** 1 vulnerability

### Top Affected Vendors:
1. **Microsoft**: Six critical vulnerabilities in Windows systems.
2. **GitHub Actions**: One high-severity supply chain attack affecting third-party repositories.

### Notable Patterns:
- Multiple zero-day exploits in Microsoft products, emphasizing the need for proactive patching.
- Supply chain risks in open-source tools and CI/CD pipelines.
- Critical flaws in AI/ML frameworks and data processing tools.

---

## Recommended actions
1. **Prioritize Microsoft Patch Tuesday Updates**: Immediately deploy fixes for CVE-2025-24983, CVE-2025-24984, and other vulnerabilities addressed in this week's update.
2. **Harden Ransomware Defenses**: Implement network segmentation, endpoint detection, and backup solutions to mitigate Medusa ransomware risks.
3. **Review Third-Party Dependencies**: Check for the use of `tj-actions/changed-files` in GitHub repositories and remove it if present.
4. **Patch Apache Tomcat Instances**: Apply updates as soon as they become available to address CVE-2025-1456.
5. **Secure AI/ML Workflows**: Update `picklescan` to version 0.0.23 or later and sanitize inputs in Keras models.
6. **Monitor for Medusa Activity**: Use threat intelligence feeds to detect potential RaaS campaigns targeting your organization.
7. **Stay Updated on NVD Changes**: Regularly review new CVEs, especially those with high severity scores.

---

## Looking ahead
Next week, cybersecurity professionals should watch for:
1. **Exploitation of Patched Vulnerabilities**: Attackers may attempt to exploit the newly patched Microsoft vulnerabilities before widespread adoption.
2. **New RaaS Campaigns**: The success of Medusa could inspire other threat actors to launch similar campaigns targeting critical infrastructure.
3. **Supply Chain Risks**: Continued scrutiny of third-party tools and libraries, especially those used in CI/CD pipelines.
4. **AI-Related Vulnerabilities**: As AI adoption grows, expect more disclosures of flaws in machine learning frameworks and tools.

Defenders should remain vigilant and proactive in addressing these emerging threats while maintaining a strong focus on foundational security practices.