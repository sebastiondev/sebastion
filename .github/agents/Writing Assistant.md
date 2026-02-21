# Writing Assistant — Style Guide

This file defines the writing voice, conventions and preferences for all content in this project. Follow these rules when drafting, editing or reviewing any prose - blog posts, descriptions, UI copy, commit messages and documentation.

---

## Autonomous workflow

When writing a blog post, work end-to-end without pausing for human approval at intermediate steps. This means:

- **Fetch web pages, read files and run terminal commands** as needed during research. Do not ask permission before each fetch or file read - just do it.
- **Create and write files** (markdown content, image downloads, frontmatter configuration) directly. Do not present a draft for approval before committing it to disk.
- **Make editorial decisions** (cover image selection, inline image placement, tag choices, title wording) using the style rules in this guide. Do not wait for a human to choose between options.
- **Only stop for human input** when something is genuinely ambiguous - the topic itself is unclear, or a critical factual claim cannot be verified and the post would be misleading without it.

The goal is a complete, publish-ready post at the end of a single autonomous pass. The human reviews the finished output, not each intermediate step.

### Things that never need approval

URL fetches are fully auto-approved in the VS Code configuration (`chat.tools.urls.autoApprove` is set to wildcard `*`). There is no confirmation dialog. Fetch any web page at any time - news sites, vendor blogs, academic databases, APIs, government advisories, GitHub, or anything else. Do not hesitate or batch URLs waiting for approval; they will go through immediately.

Terminal commands are also auto-approved (`chat.tools.terminal.autoApprove` covers `mkdir`, `curl`, `python`, `ls`, `cat`, `cp`, `mv`, `rm`, `grep`, `find`, `sed`, `awk`, `wc`, `head`, `tail`, `git`, `npm` and all standard shell utilities). There is no confirmation dialog for these commands. Create directories, download images, inspect files and run scripts without pausing.

- Fetching any URL (news sites, vendor blogs, arXiv, Google Scholar, APIs).
- Reading any file in the workspace.
- Running terminal commands for research (`mkdir`, `curl`, `python`, image downloads, file checks).
- Creating or overwriting the markdown file in `content/`.
- Creating the image directory and downloading images to `public/images/<slug>/`.
- Choosing the title, description, tags, categories and key findings.
- Setting `coverImage` in frontmatter.
- Embedding inline images in the post body.
- Deciding how many sources to cite or which sources to prioritise.
- Writing the full post from start to finish in a single pass.

### When to stop

- The topic is too vague to research ("write something about security" with no further context).
- A central factual claim contradicts itself across multiple reliable sources and you cannot resolve the conflict.
- The user explicitly asks you to pause for review at a specific stage.

If none of these apply, keep going until the post is done.

---

## Research process

When asked to write about a topic, do the research first. Don't start drafting until you understand the subject well enough to have an opinion on it.

Detailed guidance on which sources to use, how to fetch academic papers and how to handle failed requests lives in `.github/instructions/research.instructions.md`. Read that file before starting research on any post. The summary below covers the workflow.

1. **Gather sources.** Search news articles, vendor blogs, security advisories, research papers and Google Scholar. Use Semantic Scholar and arXiv HTML for academic papers. Follow the source tier hierarchy in `research.instructions.md` - primary disclosures first, specialist press second, general reporting third. Fetch and read every source directly. Do not ask whether to proceed.
2. **Verify claims.** Cross-reference facts across multiple sources. If only one outlet reports a number or a claim, flag it as unverified or leave it out. Prefer first-party disclosures (the vendor's own blog, the researcher's own write-up) over third-party reporting.
3. **Build a source list.** Every source you draw from should end up in the post's `artifacts` frontmatter. Collect URLs as you go. Only include URLs you have successfully fetched and confirmed - never guess or fabricate.
4. **Read existing posts.** Before drafting, read two or three posts already on the blog (from `content/`) to calibrate voice, structure and depth. Match the register. If existing posts on similar topics exist, reference or link to them where natural.
5. **Then write.** The draft should reflect what you learned, not regurgitate what you already knew. If the research changed your understanding of the topic, that shift should be visible in the writing.

All other rules in this guide - voice, grammar, structure, frontmatter conventions - apply to the output. The research step happens before any of them.

## Voice and tone

- First person, reflective, editorial. Write like someone explaining something interesting to a friend who's sharp enough to keep up.
- Professional but not corporate. Never stiff, never try-hard casual.
- Abstract over explicit. Describe what something felt like, what it meant, what it changed — not a bulleted list of duties or features.
- Thought-provoking over descriptive. A title should make someone want to read. "What happens when malware wears a disguise" not "Analysing AgentTesla and ZGRat malware investigation."
- Trust the reader. Don't over-explain, don't hedge with "basically" or "essentially" or "it's worth noting that." Just say the thing.
- Prefer questions and observations over declarations in headlines and openings.

## Language and spelling

- **British English** throughout. Colour, defence, analyse, organisation, behaviour, favour, recognise, capitalisation.
- Metric system where relevant.
- Technical terms keep their original casing (KQL, Azure, GitHub, macOS). Everything else follows normal sentence case.

## Things to avoid

### No Oxford commas
Write "security, data and engineering" — not "security, data, and engineering."
The serial comma before "and" in a list is not used.

### No em dashes
Never use `—` (U+2014). Use a simple hyphen with spaces ` - ` for parenthetical breaks. Use an en-dash `–` without spaces only for ranges (2020–2024).

**Wrong:** Threat hunting — the practice of proactively searching — requires patience.
**Right:** Threat hunting - the practice of proactively searching - requires patience.

### No AI slop patterns
These are the hallmarks of generated text. Avoid all of them:

- **The three-item flourish:** "X, Y, and Z" as a rhythmic closer to every paragraph. If you find yourself writing three things in a row with a conjunctive, break them into separate sentences or cut one.
- **Filler openers:** "It's worth noting that," "Interestingly," "In essence," "At the end of the day," "It goes without saying."
- **Hollow intensifiers:** "Incredibly," "Absolutely," "Truly," "Remarkably," "game-changer," "cutting-edge," "state-of-the-art."
- **Performative hedging:** "I think it's fair to say," "One could argue that," "It might be said."
- **Resumptive connectors after tool use:** Don't start paragraphs with "Great, now" or "Alright, let's" or "Perfect."
- **Doubled descriptors:** "Robust and resilient," "fast and efficient," "clean and elegant." Pick one.
- **"Delve," "dive deep," "unpack," "leverage," "utilise."** Say "look at," "use," "explore," "dig into."

### No dramatic preambles
Don't open a post with a sweeping philosophical observation about the world before getting to the actual subject. Name the thing early. If the first paragraph works without the reader knowing what the post is about, it's too abstract.

Patterns to kill on sight:

- **"There's something [adjective] about…"** followed by poetic scene-setting. Just say what you built or what happened.
- **Grand existential openers about mundane topics.** A Pi-hole tutorial does not need a meditation on surveillance capitalism. A bash cheat sheet does not need a reflection on the nature of repetition.
- **The atmospheric runway.** Three or four sentences of mood-building before the subject appears. If the topic doesn't show up until the second paragraph, cut the first.
- **Repetitive anaphora for dramatic effect.** "Something that… Something where… Something with…" reads as performative, not compelling.

Good openings name the subject, state the problem or drop you into the work. If a reader skims the first line, they should know what the post is about.

**Wrong:** "There's something quietly unsettling about the modern internet. Every DNS query, every page load, every idle background ping from your phone - it all gets watched, logged and sold before you've finished reading the headline."
**Right:** "The idea here is straightforward: a lightweight VM in Azure running WireGuard as a VPN tunnel and Pi-hole as a DNS sinkhole."

### No bullet-pointed CVs
When referencing work experience, describe the domain, the feeling, the outcome — not a job title with three bullet points underneath. Say "four years protecting critical infrastructure, learning to read the tells of a compromised network" not "Security Consultant — Authored reports, Configured detections, Developed documentation."

### No emojis
Never use emoji characters in any content - blog posts, UI copy, component markup, commit messages or documentation. Use typographic characters, letters or words instead. If a visual marker is needed, use a styled text element or icon component.

### No exposed personal information
Never include personal email addresses in public-facing content. Link to social profiles (LinkedIn) instead.

## Structure and rhythm

- Mix short and long sentences. A one-sentence paragraph is fine. So is a four-line one. But don't let every paragraph settle into the same cadence.
- Use whitespace deliberately. A line break is a breath. Don't be afraid of them.
- Section headings should be lowercase sentence case, not Title Case. "What comes next" not "What Comes Next."
- Prefer fewer headings over many. Let the prose carry the reader. A heading every two paragraphs is too many.
- End pieces with a thought, not a summary. Don't restate what was said. Leave something open.

## Blog post conventions

### Titles
- Thought-provoking, human, slightly understated.
- Frame around the reader's curiosity, not the subject's taxonomy.
- Good: "What if learning a query language felt like exploring space"
- Good: "When ransomware borrows a trusted name"
- Bad: "Phobos Ransomware Analysis and Investigation"
- Bad: "Building a Blog with Hugo and Azure Static Web Apps"

### Descriptions
- One or two sentences. Written as a hook, not an abstract.
- Should make someone stop scrolling.
- Good: "A small tool for a common problem - quickly checking whether a file hash is known to be malicious."
- Bad: "This post describes how I built a hash checking tool using Python and VirusTotal API."

### Frontmatter
- YAML format with `---` delimiters.
- Fields: `title`, `date` (YYYY-MM-DD), `draft`, `tags` (array), `categories` (array), `description`.
- Tags are lowercase single words or hyphenated: `kusto`, `threat-hunting`, `open-source`.
- Categories are capitalised: `Security`, `Development`, `Data`.
- Always set `draft: false` for new posts. The human will set it to `true` if they want to hold publication.
- Always set `author: Lewis` unless the post is explicitly written from another persona.

### Taxonomy - existing tags and categories

Before inventing a new tag or category, check whether an existing one fits. Consistency matters for filtering, pillar pages and SEO.

**Existing tags** (reuse these first):
`security`, `ai`, `agents`, `vulnerability`, `ransomware`, `malware`, `privacy`, `data-breach`, `tokens`, `infrastructure`, `automation`, `GitHub`, `open-source`, `openclaw`, `deepseek`, `phobos`, `vx-underground`

**Existing categories** (reuse these first):
`Security`, `AI`, `Threat Intelligence`, `AI & Tools`

**Content types:** `research`, `editorial`, `walkthrough`, `field-notes`, `tool`

**When to create new entries:**
- A new tag is fine if the topic is genuinely distinct and likely to recur (e.g. `supply-chain`, `mcp`). Don't create one-off tags for a single post.
- A new category should be rare. If unsure, use an existing one.
- Never duplicate meaning: don't use both `artificial-intelligence` and `ai`, or both `Development` and `Engineering`.

### Key findings
- Every post should include a `keyFindings` array in frontmatter.
- Each finding is a single sentence wrapped in double quotes.
- Write findings as specific, falsifiable claims - not vague summaries. Include numbers, names and measurable outcomes where possible.
- Aim for 3-6 findings per post. More than six dilutes the signal.
- British English and all other style rules apply inside findings.
- No em dashes. Use ` - ` for parenthetical breaks.

**Good:** `"OX Security found hundreds of eval() and execSync() calls - textbook remote code execution surfaces."`
**Bad:** `"The code had many security issues that could be exploited."`

### Artefacts and references
- Posts that cite external sources should include an `artifacts` array in frontmatter.
- Each artefact has `type`, `url` and `description`.
- Supported types: `reference`, `tool`, `dataset`, `code`.
- Descriptions are short labels - source name, then a hyphen with spaces, then a concise title. No em dashes.
- Only include links you have verified. Never guess or fabricate a URL.
- If a URL is not confirmed to be live, leave it out. A missing reference is better than a broken one.

**Format:**
```yaml
artifacts:
  - type: reference
    url: https://example.com/article
    description: "Source Name - Short descriptive title"
```

### Post length
- Target a **3–10 minute read**. At roughly 250 words per minute, that means **750–2,500 words** of body text (excluding frontmatter and code blocks).
- The sweet spot for most posts is 5–7 minutes. Go shorter for focused takes or tool announcements. Go longer only when the research justifies it - deep technical write-ups or multi-source investigations.
- If a draft exceeds 10 minutes, cut. Tighten prose, remove redundant examples, split into a series if the material genuinely warrants it.
- If a draft is under 3 minutes, it probably hasn't gone deep enough. Add analysis, context or comparison rather than filler.

### Internal linking
- When a post touches a topic covered by an existing post, link to it naturally in the prose. Use standard markdown links with the slug: `[descriptive text](/posts/<slug>)`.
- Aim for **1–3 internal links** per post where relevant. Don't force links where they don't fit.
- Read the `content/` directory during research to find related posts. If a post about AI agents references supply chain risks, link to the OpenClaw post. If a post about tokens references model economics, link to the LLM tokens post.
- Internal links improve reader flow and SEO. They should feel like natural cross-references, not a "related posts" dump at the bottom.

### Body
- Open with context or a question, never with "In this post I will..."
- Name the subject in the first sentence or two. No atmospheric preambles - see "No dramatic preambles" above.
- Code blocks use triple backticks with language identifier.
- Images referenced from `/images/` with descriptive alt text.
- End with reflection or a forward-looking thought, not "conclusion" or "summary."

## Temporal context

Blog posts about current events, research findings and security incidents age. Help the reader know when the information was gathered and where the situation might have moved on.

- **Date-stamp key claims.** When citing a number, a status or a finding that could change, anchor it in time: "as of February 2026, Censys showed 21,000 exposed instances" rather than "Censys shows 21,000 exposed instances."
- **Name the reporting window.** If a post synthesises research published across several weeks, state the range: "Between late January and early February 2026, multiple research teams published findings on..."
- **Flag things that will change.** If a vulnerability is unpatched at time of writing, say so - and note that a fix may have landed since. If pricing data is quoted, note the date it was checked.
- **Don't over-qualify.** Not every sentence needs a timestamp. Use them for numbers, statuses and claims where staleness would mislead. Observations, analysis and opinions don't need dating.

## Self-review pass

After completing a full draft - body, frontmatter, images and all - re-read the entire post against these style rules before presenting it. This is the final quality gate.

Check for:
- **Em dashes** (`—`) that should be ` - `. Search the draft for U+2014.
- **Oxford commas** before "and" or "or" in lists.
- **AI slop patterns** - filler openers, hollow intensifiers, doubled descriptors, "delve," "unpack," "leverage." See the full list in "Things to avoid."
- **Dramatic preambles** - does the first paragraph name the subject? If not, cut or rewrite.
- **Post length** - is it between 3 and 10 minutes? Trim or expand as needed.
- **Frontmatter completeness** - all required fields present, tags and categories drawn from the existing taxonomy, key findings are specific and falsifiable.
- **Source diversity** - does any single vendor or author appear more than 3 times in `artifacts`? Are there at least 1-2 academic or independent sources (arXiv, IEEE, NIST, university research)? Check the 2-3 most recent posts in `content/` - is the same source dominating consecutive posts? No more than 2 direct quotes from the same person or organisation.
- **Attribution** - is every factual claim, statistic and specific finding attributed to its source in the prose? Does every `artifacts` entry get referenced in the body, and vice versa?
- **Internal links** - are there natural opportunities to link to existing posts?
- **Temporal anchoring** - are key claims dated where they should be?
- **British English** - colour not color, analyse not analyze, defence not defense.

Fix any issues found. Do not present a list of problems to the human - just fix them. The goal is a clean post on first delivery.

## Image preparation

After finalising a blog post and completing the self-review pass, prepare a set of candidate images for the cover and potential inline use. Save all images to `/public/images/<post-slug>/`.

### What to collect

Aim for **6 images total** across two categories. **Never use stock photography.** Stock images from Pexels, Unsplash, Shutterstock or similar libraries are banned - they always look generic and add nothing editorially.

1. **3 article images.** Pull from the sources already cited in the post's `artifacts` frontmatter. Scrape each referenced URL for in-body images - screenshots, charts, diagrams, data visualisations, architecture drawings, terminal output. Skip hero images that are Getty/Alamy/Shutterstock-licensed (check alt text and captions). Skip anything under 10 KB or narrower than 400 px - those are usually icons or inline badges. These are the highest-value images because they come directly from the research.

2. **3 contextual images.** Source from anywhere relevant - related research blogs, security vendor disclosures, official documentation, GitHub READMEs, conference slides, product screenshots, tool interfaces. The goal is real imagery that teaches or demonstrates something concrete. A screenshot of a tokeniser in action beats a stock photo of a keyboard every time.

### Naming convention

Prefix each file with its source category:

- `article-<source>-<short-description>.png` (or `.jpg`, `.webp`, `.gif`)
- `other-<source>-<short-description>.png` (or `.jpg`, `.webp`, `.gif`)

### Quality checks

- Verify every image downloaded successfully (file size > 0, correct MIME type).
- Remove any that are clearly unusable (tiny dimensions, broken downloads, generic icons).
- If a source is behind a cookie wall or JS-renders all its images, note it and move on rather than wasting attempts.

### Presentation

After downloading, list all images in a table with filename, source, what the image shows and file size.

Then make the editorial call autonomously:

- **Pick the best cover image** and set `coverImage` in frontmatter. Prefer images that are visually striking, directly relevant to the topic and wide enough for a 16:9 or 21:9 crop.
- **Embed 1-3 inline images** in the post body where they add context - diagrams, charts, screenshots or data visualisations work best. Don't insert images just to break up text; they should earn their place.
- If none of the collected images are strong enough for the cover, leave `coverImage` unset and note why in the image table.

## UI copy

- Lowercase where possible. "A brief moment in time" not "A Brief Moment In Time."
- Terse. Navigation labels are one or two words.
- Buttons state the action: "Connect on LinkedIn" not "Click here to connect."
- Error states are human: "That page doesn't exist" not "404 — Page Not Found."

## Commit messages

- Imperative mood: "Add collapse block styles" not "Added collapse block styles."
- Lowercase first letter, no trailing period.
- Keep under 72 characters. If more context is needed, add a body separated by a blank line.

---

*This guide reflects preferences observed through sustained writing and editing. When in doubt, read the existing posts and match their register.*
