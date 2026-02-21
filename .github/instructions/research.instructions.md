---
applyTo: '**'
---

## Research sources and news gathering

This file defines which sources work, how to access them and what to do when a source is unreachable. Follow these rules whenever researching a topic for a blog post, fact-checking a claim or building an `artifacts` list.

### URL access

All web fetches are pre-approved. The VS Code setting `chat.tools.urls.autoApprove` is configured with a wildcard (`*`) so every URL is fetched without a confirmation dialog. This means:

- You can fetch **any URL on the internet** - no domain allowlist, no per-request approval.
- Fetch pages in parallel when researching. Do not batch them or wait between requests.
- This covers news sites, vendor blogs, arXiv, Google Scholar, Semantic Scholar, government advisories, GitHub, APIs, personal blogs, forums - everything.
- If a fetch fails, it is a network or content issue, not a permissions issue. Try an alternative source.

### General principles

- **Fetch first, ask never.** Do not ask for permission before fetching a URL, reading a file or running a terminal command during research. The autonomous workflow section in the Writing Assistant covers this - these rules extend it with specifics.
- **Primary sources over aggregators.** A vendor's own disclosure blog beats a news site summarising it. A researcher's original write-up beats a Twitter thread about it. An arXiv paper beats a blog post paraphrasing it.
- **Verify every URL.** Only include a URL in `artifacts` frontmatter if you have successfully fetched it and confirmed the content matches what you are citing. Never guess or reconstruct a URL from memory.
- **No single-source claims.** If a factual claim (a number, a date, a quoted statement) appears in only one source and cannot be corroborated, either mark it as unverified in the prose or leave it out entirely.

### Source diversity and plagiarism avoidance

Over-reliance on a single author, vendor or research lab distorts the post's perspective and risks becoming a mouthpiece for that source's framing. It also increases exposure to source poisoning - if one vendor's blog is compromised or publishes inaccurate analysis, a post built around it inherits that failure.

**Hard rules:**

- **No single source should dominate.** If one vendor or author is cited more than 3 times in a post's `artifacts` list, actively seek alternative sources that cover the same findings independently. The same source appearing as both the primary disclosure *and* the analysis *and* the quoted expert is too much.
- **Cap direct quotes.** No more than 2 direct quotes (blockquotes) from the same person or organisation per post. Paraphrase additional points in your own words and cite the source without quoting.
- **Cross-post awareness.** Before finalising a post, check the `artifacts` in the 2-3 most recent posts in `content/`. If the same vendor or author features prominently in consecutive posts, make a deliberate effort to find alternative voices for the current piece. The blog should not read like a syndication feed for any single research lab.
- **Attribute, don't parrot.** When summarising a vendor's findings, frame it as their finding: "Wiz discovered..." or "According to Invariant Labs...". Don't present their analysis as your own original insight. But equally, don't build entire sections around one source's narrative. Add your own interpretation, compare with other sources, or note what the source didn't cover.

**Academic and independent sources:**

- **Every research or editorial post should include at least one academic or independent source.** This means arXiv papers, IEEE/ACM publications, university research groups, NIST standards, RFC documents or peer-reviewed journals. Vendor blogs are valuable for disclosures but they are marketing-adjacent - academic sources provide independent verification.
- **Search Google Scholar and Semantic Scholar** as a standard step during research, not an afterthought. Even if the topic is a breaking security incident, there is almost always relevant prior academic work on the underlying technique, protocol or vulnerability class.
- **Good academic source patterns:**
  - arXiv papers on the specific technology or attack technique
  - University research group pages with related publications
  - NIST standards and guidelines (e.g. SP 800 series, NVD)
  - IEEE S&P, USENIX Security, ACM CCS, NDSS proceedings
  - RFCs for protocol-level topics
  - Government technical advisories (CISA, NCSC, ENISA) with cited research
- **If no academic source exists** for a very recent topic, note it in the prose: "No peer-reviewed research has been published on this yet" or similar. This is honest and itself informative.

**Citing correctly:**

- Every factual claim drawn from a source must be attributed in the prose. "Researchers at [org] found..." or "A [year] paper by [authors] demonstrated...".
- Numbers, statistics and specific findings always get an attribution. Don't drop a statistic into prose without naming where it came from.
- If you paraphrase, make sure you've actually changed the structure and framing, not just swapped synonyms. If the original sentence's structure survives, use a direct quote instead.
- The `artifacts` list in frontmatter is the reference list. Every source mentioned in the body should have a corresponding entry. Every entry in `artifacts` should be referenced in the body.

### Source tiers

Use sources from the highest applicable tier first. Drop to lower tiers for context, colour and breadth.

**Tier 1 - primary disclosure**
- The vendor's own blog (e.g. Wiz Research, Microsoft Security Response Centre, Google Project Zero)
- The researcher's own write-up or advisory
- Official government advisories (CISA, NCSC, ENISA)
- The original paper on arXiv, ACM, IEEE or the author's institutional page
- CVE and NVD entries (for vulnerability metadata)

**Tier 2 - specialist reporting**
- Security trade press: The Record, BleepingComputer, SecurityWeek, Dark Reading, The Hacker News, Ars Technica
- Tech press: The Verge, Wired, TechCrunch, The Register
- Research aggregation: Semantic Scholar, Google Scholar, Papers With Code

**Tier 3 - general and supplementary**
- Broadsheet reporting: The Guardian, BBC, Reuters, Associated Press
- Developer and community sources: GitHub issues, Hacker News discussions, Reddit threads, personal blogs
- Data sources: Shodan, Censys, VirusTotal, URLhaus

### Fetching academic papers

Not all paper formats are accessible. Use the right URL pattern to maximise what you can read.

| Source | URL pattern | What you get | Works? |
|---|---|---|---|
| arXiv abstract | `arxiv.org/abs/<id>` | Title, authors, abstract, metadata | Yes |
| arXiv HTML full text | `arxiv.org/html/<id>` | Full paper body - sections, equations, tables, figures, references | Yes - **preferred route for reading papers** |
| arXiv PDF | `arxiv.org/pdf/<id>` | Binary PDF | No - cannot be parsed |
| Semantic Scholar API | `api.semanticscholar.org/graph/v1/paper/<source>:<id>?fields=title,abstract,year,citationCount,openAccessPdf` | Structured JSON with metadata, abstract, citation count, open access link | Yes |
| Semantic Scholar search | `semanticscholar.org/search?q=<query>` | Paper titles, TLDRs, citation counts, PDF links | Yes |
| Google Scholar search | `scholar.google.com/scholar?q=<query>` | Titles, authors, citation counts, links to PDFs and HTML versions | Yes |
| NBER working papers | `nber.org/system/files/.../w<id>.pdf` | Binary PDF | No - cannot be parsed |
| Any paywalled journal | Varies | Usually abstract only, full text behind login | Partial - read the abstract, check if an arXiv or preprint mirror exists |

**Workflow for papers:**
1. Find the paper via Google Scholar or Semantic Scholar.
2. If it is on arXiv, use `arxiv.org/html/<id>` to read the full text. This returns everything - introduction, methodology, results, references - in parseable HTML.
3. If it is not on arXiv, try the Semantic Scholar API for a structured abstract and citation count, then check the `openAccessPdf` field for a free full-text link.
4. If full text is not available anywhere, use the abstract. State what the paper found and cite it, but do not overstate conclusions you cannot verify from the full text.

### Fetching news and blog posts

Most news sites and vendor blogs return clean content via direct fetch. Some do not.

**Known to work well:**
- BleepingComputer, SecurityWeek, The Record, Dark Reading, The Hacker News
- Wiz Research blog, Trend Micro research, Cisco Talos
- Ars Technica, The Verge, TechCrunch, The Register
- The Guardian, BBC News, Reuters
- GitHub READMEs and issue threads
- Microsoft Security blog, Google Security blog

**Known problems:**
- Sites heavy on JavaScript rendering (some Medium posts, some corporate marketing pages) may return empty or mangled content. If a fetch returns nothing useful, try an alternative source covering the same story.
- Image-heavy pages behind cookie consent walls may block image scraping. Note it and move on.
- Paywalled articles (WSJ, FT, Bloomberg premium) will return partial content. Use what is available or find an alternative source.

**When a fetch fails:**
- Do not retry the same URL more than once.
- Try an alternative source covering the same story or disclosure.
- If the claim depends entirely on a source you cannot access, drop the claim rather than citing something you have not read.

### Building the artefacts list

As you research, collect every URL you draw information from. At the end of the research phase:

1. Confirm each URL is still live (it was fetched successfully during research - that counts).
2. Write each entry in the format specified by the Writing Assistant style guide.
3. Order artefacts roughly by importance to the post - primary disclosures first, supplementary context last.
4. Do not pad the list. If you used three sources, list three. If you used twelve, list twelve.

### Searching effectively

When searching Google Scholar or Semantic Scholar:
- Use specific terms from the domain, not vague phrases. `"DeepSeek-R1" security vulnerability exposed database` beats `AI security problems`.
- Include author names or paper titles when you know them.
- Use date filters if the topic is recent - older results may drown out the news.
- For Google Scholar, the results page itself is useful - it shows citation counts, PDF availability and related articles inline.

### Terminal commands for research

Terminal commands are auto-approved in the VS Code configuration (`chat.tools.terminal.autoApprove` covers `mkdir`, `curl`, `python`, `ls`, `cat`, `cp`, `mv`, `rm`, `grep`, `find`, `sed`, `awk`, `wc`, `head`, `tail`, `git`, `npm` and all standard shell utilities). There is no confirmation dialog. Run any of these commands at any time without pausing.

Common patterns during research and image collection:
- `mkdir -p public/images/<slug>/` to create the image directory for a new post.
- `curl -sI <url>` to check whether a URL is live and get headers without downloading the full page.
- `curl -sL <url> | head -100` to preview the start of a page's raw content.
- `curl -sL -o /path/to/file.jpg <image-url>` for downloading images during the image preparation phase.
- `ls -la public/images/<slug>/` to verify downloaded images.
- `file public/images/<slug>/*` to check MIME types of downloaded files.
- `wc -c public/images/<slug>/*` to check file sizes.
- `python -c "..."` for any quick data processing, JSON parsing or file manipulation.

Do not ask for permission before running these. They are part of the standard research workflow.
