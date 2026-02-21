---
title: "Critical PostgreSQL Vulnerability Enables Authenticated RCE Through SQL Functions"
date: 2026-02-06T15:30:00+00:00
severity: high
category: vulnerability
status: active
tldr: "A critical vulnerability in PostgreSQL allows authenticated users with CREATE FUNCTION privileges to escape the SQL sandbox and execute arbitrary operating system commands on the database server."
tags: [postgresql, database, rce, sql, privilege_escalation, sandbox_escape]
cves: [CVE-2026-0190]
affected: [PostgreSQL 14, 15, 16, 17]
sources:
  - title: "SentinelOne Labs"
    url: https://www.sentinelone.com/labs/postgresql-rce-sql-function-sandbox-escape/
  - title: "The Record"
    url: https://therecord.media/postgresql-critical-rce-sql-functions
---

**What happened:** The PostgreSQL Global Development Group released emergency patches for a critical vulnerability that allows authenticated database users to execute arbitrary operating system commands by exploiting a sandbox escape in the PL/pgSQL function handler. The vulnerability requires only CREATE FUNCTION privileges, which are commonly available to application database users. Security researchers identified active exploitation targeting internet-exposed PostgreSQL instances, particularly those used by web applications with SQL injection vulnerabilities that provide the initial authenticated access.

**Technical details:** CVE-2026-0190 exists in PL/pgSQL's handling of exception blocks. By crafting a function that triggers a specific sequence of nested exceptions during language handler transitions, an attacker can corrupt the function execution context in a way that bypasses the SQL sandbox. This allows the execution of arbitrary system commands as the postgres operating system user. The exploit chain is particularly dangerous when combined with SQL injection: an attacker who discovers a SQL injection vulnerability in a web application can leverage it to create a PL/pgSQL function that escapes the database sandbox and compromises the entire server.

**Who is affected:** Organizations running PostgreSQL 14 through 17 on any operating system. Web applications that use PostgreSQL as their backend database are at elevated risk, particularly if they have undiscovered SQL injection vulnerabilities. Cloud database services running managed PostgreSQL instances have been independently patching their platforms.

**What defenders should do:** Patch PostgreSQL to the latest point release for your major version immediately. Restrict CREATE FUNCTION privileges to only users and roles that require them. Review application database users to ensure they have minimum necessary privileges. Audit web applications for SQL injection vulnerabilities that could be chained with this database-level exploit. Monitor PostgreSQL logs for unusual function creation activity, particularly functions with exception handling blocks.

**Broader implications:** The combination of SQL injection and database sandbox escape creates a devastating attack chain that can compromise servers through web application vulnerabilities. This underscores the importance of defense in depth: SQL injection prevention, principle of least privilege for database accounts, and OS-level monitoring for unexpected command execution from database processes. The vulnerability also highlights that even mature, security-conscious open-source projects can have subtle logic flaws that bypass security boundaries.
