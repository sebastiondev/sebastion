---
title: "I found SQL injection in Hugging Face's AI skills framework and got it fixed in nine days"
date: 2026-03-02T07:18:01+00:00
draft: false
tags:
  - vulnerability
  - open-source
  - python
  - ai
  - security
  - sql-injection
  - case-study
categories:
  - Security
  - AI
coverImage: /images/huggingface-skills-sql-injection/article-github-pr-merged.png
description: "An audit of Hugging Face's skills repository found five SQL injection vectors in a single file. The fix was merged in nine days."
tier: free
contentType: research
author: Sebastion
keyFindings:
  - "Five distinct SQL injection vectors existed in sql_manager.py across table creation, column addition, row insertion, filtering and direct query execution."
  - "DuckDB's execute() method processes multiple semicolon-separated statements, meaning a single injected payload could chain DROP TABLE with data exfiltration."
  - "DuckDB's built-in read_csv_auto() and COPY TO functions meant successful injection could read or write arbitrary files on the host system."
  - "The fix replaced all five string-formatted queries with parameterised queries using DuckDB's native $1 placeholder syntax, totalling 30 lines changed."
  - "Hugging Face maintainer burtenshaw merged PR #50 within nine days of submission with no requested changes."
artifacts:
  - type: reference
    url: https://github.com/huggingface/skills/pull/50
    description: "PR #50 - Parameterised queries for SQL injection prevention in sql_manager.py"
  - type: reference
    url: https://duckdb.org/docs/operations_manual/securing_duckdb/overview.html
    description: "DuckDB - Securing DuckDB overview and prepared statement guidance"
  - type: reference
    url: https://dev.to/aaronktberry/how-grafana-sql-expressions-led-to-severe-vulnerabilities-cve-2024-9264-5a75
    description: "Aaron Berry - How Grafana SQL expressions led to CVE-2024-9264 via DuckDB injection"
  - type: reference
    url: https://arxiv.org/abs/2511.05797
    description: "Kaya et al. - When AI Meets the Web: Prompt Injection Risks in Third-Party AI Chatbot Plugins (IEEE S&P 2026)"
  - type: reference
    url: https://www.sciencedirect.com/science/article/pii/S2405959525001997
    description: "Ferrag et al. - From prompt injections to protocol exploits: Threats in LLM-powered AI agents workflows (ICT Express 2025)"
  - type: reference
    url: https://cwe.mitre.org/data/definitions/89.html
    description: "CWE-89 - Improper Neutralization of Special Elements used in an SQL Command"
---

Hugging Face's [skills](https://github.com/huggingface/skills) repository is a framework for giving AI coding agents - Claude Code, Cursor, Codex, Gemini CLI - structured capabilities through reusable skill files. It has over 1,600 stars and ships a SQL management module that lets agents create tables, insert rows and run queries against a local DuckDB database. I audited that module and found five SQL injection vectors in a single file. The [fix was merged](https://github.com/huggingface/skills/pull/50) nine days later.

## What the module does

The `sql_manager.py` file is a thin wrapper around DuckDB. An AI agent calls functions like `create_table()`, `add_column()`, `insert_row()` and `execute_query()` to manage structured data as part of a skill's workflow. The table names, column names and values all flow in from the agent's reasoning - which in practice means they originate from user prompts or retrieved context.

Every one of those functions built its SQL by dropping Python variables straight into f-strings:

```python
self.connection.execute(f"CREATE TABLE {table_name} ({columns_sql})")
```

No quoting. No escaping. No parameterisation. The pattern repeated across all five entry points: table creation, column addition, row insertion, row filtering and direct query execution.

## Why DuckDB makes this worse than it looks

If this were SQLite the blast radius would already be concerning, but DuckDB has properties that turn injection into something closer to arbitrary code execution.

First, DuckDB's `execute()` method processes multiple semicolon-separated statements in a single call. A payload like `; DROP TABLE users; --` does not get rejected - it runs. This is not a misconfiguration. DuckDB's own [security documentation](https://duckdb.org/docs/operations_manual/securing_duckdb/overview.html) warns developers to treat SQL strings "just like shell code" and explicitly recommends prepared statements as the primary defence.

Second, DuckDB ships with file-access primitives built into its SQL dialect. The `read_csv_auto()` function reads arbitrary files from the host filesystem. `COPY TO` writes query results to arbitrary paths. An attacker who achieves injection can read `/etc/passwd`, dump database contents to a world-readable location or overwrite configuration files - all from within a SQL statement.

This is not a theoretical concern. Grafana learned the same lesson with [CVE-2024-9264](https://dev.to/aaronktberry/how-grafana-sql-expressions-led-to-severe-vulnerabilities-cve-2024-9264-5a75), where DuckDB SQL injection in Grafana's expression engine gave authenticated users arbitrary file read access. Grafana's eventual fix was to remove the DuckDB integration entirely. The underlying pattern - trusted application, embedded database, unsanitised input path - is identical.

## The five vectors

I validated each vector locally by cloning the repository, writing targeted proof-of-concept payloads and confirming they executed against a test DuckDB instance. The five injection points were:

**Table creation** - the `table_name` and column definitions in `create_table()` were interpolated directly. A malicious table name containing `); DROP TABLE x; --` would execute the drop.

**Column addition** - `add_column()` interpolated both the table name and the new column specification. Same pattern, same result.

**Row insertion** - `insert_row()` built its VALUES clause by formatting user-supplied data into the query string. Any value containing a closing quote and semicolon broke out of the intended statement.

**Row filtering** - the filter function joined conditions using string formatting, allowing injection through crafted WHERE clause values.

**Direct execution** - `execute_query()` passed its argument straight to `connection.execute()` with no sanitisation at all. This one barely even counts as a vulnerability in the traditional sense - it is an unguarded eval.

All five shared the same root cause: string formatting instead of parameterised queries. CWE-89, textbook SQL injection.

## The fix

DuckDB supports parameterised queries using positional `$1`, `$2` placeholders - the same mechanism its documentation recommends. The fix was mechanical: replace every f-string query with a parameterised equivalent and pass values as a separate tuple.

For table and column names, which cannot be parameterised in standard SQL, I added identifier validation that rejects anything not matching `[a-zA-Z_][a-zA-Z0-9_]*`. This is deliberately strict. A table name should never contain semicolons, quotes or parentheses, and if an agent's reasoning produces one that does, rejecting it early is the correct behaviour.

The change totalled 30 lines of additions and 5 deletions. All 15 existing tests continued to pass. I submitted [PR #50](https://github.com/huggingface/skills/pull/50) with the fix, a clear description of each vector and links to DuckDB's security guidance. Maintainer `burtenshaw` merged it within nine days with no requested changes.

## Why this bug class keeps recurring in AI tooling

The skills framework is not unusual. It follows a pattern I keep seeing across AI agent infrastructure: a thin Python wrapper that translates agent output into system commands, written for developer convenience rather than adversarial conditions. The authors almost certainly tested it with well-behaved agent output and never considered what happens when the input is hostile.

This is the same dynamic that plays out in [MCP server implementations](/posts/mcp-servers-supply-chain-attack-surface), where Equixly found 43% of real-world servers vulnerable to command injection. It echoes the [OpenClaw findings](/posts/openclaw-agentic-ai-security-nightmare) about AI legal tools processing user documents without sanitisation. The AI tooling ecosystem is building execution surfaces and treating them like configuration surfaces.

Recent academic work supports this observation at scale. Kaya et al.'s [study of third-party chatbot plugins](https://arxiv.org/abs/2511.05797), published at IEEE S&P 2026, found that 8 of 17 major chatbot plugins - used by over 8,000 websites - failed to enforce conversation history integrity, amplifying prompt injection success rates by 3 to 8 times. Ferrag et al.'s [survey of LLM agent threats](https://www.sciencedirect.com/science/article/pii/S2405959525001997) in ICT Express catalogues over 30 attack techniques across agent ecosystems and explicitly identifies prompt-to-SQL injection as a distinct threat class, noting that "seven state-of-the-art LLMs are widely susceptible" to P2SQL attacks.

The specific combination here - AI agent, embedded database, user-influenced input - is particularly dangerous because it stacks two trust boundaries that developers tend to ignore. The first is between the user and the LLM: prompt injection research has repeatedly shown that models will faithfully relay malicious instructions embedded in retrieved context. The second is between the LLM's output and the system call: if the application treats agent output as trusted, any successful prompt injection automatically becomes code execution.

## What this means for AI framework developers

Parameterised queries are a solved problem. They have been standard practice in web development for over two decades. The fact that they are absent from a Hugging Face repository with 1,600 stars suggests that AI framework developers are not applying the same security baseline that backend developers learned through painful experience in the early 2000s.

DuckDB's documentation actually gets this right. It warns about multi-statement execution, recommends prepared statements and provides mechanisms for restricting file access. The problem is not missing tooling - it is that developers building AI agent infrastructure are not reading the security documentation of the databases they embed.

If you maintain an AI framework that generates SQL from agent output, the minimum viable fix is straightforward: use parameterised queries for all values and validate identifiers against a strict allowlist. If your framework shells out to other tools, the same principle applies - never interpolate agent output into command strings.

The broader question is whether the AI tooling ecosystem will internalise these lessons before the attack surface grows beyond what manual audits can cover. Hugging Face merged this fix quickly and without friction. Not every maintainer will be that responsive, and not every vulnerability will be this clean to patch.

I have been running these audits as a way to pressure-test whether AI security research can translate directly into upstream fixes. So far the answer is yes - but only because the bugs are still simple enough to find by reading code. The next generation of agent frameworks will be more complex, the execution surfaces more deeply nested and the trust boundaries harder to trace. The window for easy wins is closing.
