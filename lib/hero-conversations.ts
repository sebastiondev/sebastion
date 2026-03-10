/* ─── Seed types from server ─────────────────────────────── */

export interface SeedIntel {
  title: string;
  slug: string;
  severity: string;
  category: string;
  cves: string[];
  affected: string[];
  tags: string[];
}

export interface SeedPost {
  title: string;
  slug: string;
  tags: string[];
  description: string;
}

export interface HeroSeed {
  recentIntel: SeedIntel[];
  recentPosts: SeedPost[];
  intelCount: number;
  postCount: number;
  randomSeed: number;
}

/* ─── Chat line / conversation types ─────────────────────── */

export interface ChatLine {
  type: "action" | "speech" | "finding";
  icon?: "shield" | "brain" | "search" | "terminal";
  text: string;
  typeSpeed?: number;
  pauseAfter?: number;
}

export interface Conversation {
  id: string;
  prompt: string;
  topic: string;
  topicLabel: string;
  tag: string;
  href: string;
  lines: ChatLine[];
}

/* ─── Seeded PRNG (mulberry32) ───────────────────────────── */

function createRng(seed: number) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ─── Module-level seeded RNG ────────────────────────────── */

let _rng: () => number = Math.random;

function pick<T>(arr: T[]): T {
  return arr[Math.floor(_rng() * arr.length)];
}

function randInt(min: number, max: number): number {
  return Math.floor(_rng() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(_rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let _idCounter = 0;

/* ─── Template-based conversation generators ─────────────── */

function makeSupplyChainConvo(seed: HeroSeed): Conversation {
  const supplyIntel = seed.recentIntel.find(
    (i) => i.category === "supply-chain"
  );
  const depCount = randInt(8, 23);
  const hours = randInt(3, 48);
  const hookCount = randInt(2, 6);
  const matchedCount = randInt(1, 3);

  const pkg = pick(["npm", "PyPI", "crates.io", "Go module"]);
  const action = pick([
    "obfuscated post-install script",
    "minified preinstall hook",
    "encoded lifecycle callback",
  ]);
  const payload = pick([
    "reverse shell that phones home to a freshly registered domain",
    "credential exfiltration routine targeting CI environment variables",
    "crypto-miner that activates after a two-hour delay",
  ]);
  const mitre = pick(["T1195.002", "T1195.001"]);

  return {
    id: `supply-chain-${++_idCounter}`,
    prompt: supplyIntel
      ? `Investigate this: ${supplyIntel.title.slice(0, 60)}`
      : `Analyse this ${pkg} package for supply-chain risk`,
    topic: "supply-chain",
    topicLabel: "Supply chain",
    tag: "threat-research",
    href: supplyIntel ? `/intelligence/${supplyIntel.slug}` : "/intelligence",
    lines: [
      {
        type: "action",
        icon: "search",
        text: pick([
          "Cloning package repo and checking git log...",
          "Fetching package metadata and scanning contributor history...",
          `Pulling ${pkg} registry data and verifying signatures...`,
        ]),
        typeSpeed: 34,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "terminal",
        text: `Diffing dependency tree against known-good hashes across ${depCount} deps...`,
        typeSpeed: 30,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "action",
        icon: "search",
        text: `Grepping post-install hooks across ${depCount} transitive deps. ${hookCount} flagged...`,
        typeSpeed: 32,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "speech",
        text: `There's a new maintainer on this package. They pushed an ${action} ${hours} hours ago. The payload decodes to a ${payload}.`,
        typeSpeed: 22,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "action",
        icon: "terminal",
        text: pick([
          "Forking repo and drafting advisory PR...",
          `Opening ${matchedCount} issue${matchedCount > 1 ? "s" : ""} on affected downstream repos...`,
          "Submitting package-analysis report and drafting advisory...",
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "finding",
        icon: "shield",
        text: `Supply-chain injection via lifecycle hook - ${mitre}. Advisory drafted with MITRE ATT&CK mappings and IOCs.`,
        typeSpeed: 26,
        pauseAfter: 600,
      },
    ],
  };
}

function makeAISecurityConvo(seed: HeroSeed): Conversation {
  const aiPost = seed.recentPosts.find(
    (p) =>
      p.tags.some((t) =>
        ["ai-agents", "ai-security", "llm", "prompt-injection", "mcp"].includes(
          t.toLowerCase()
        )
      )
  );
  const repoCount = randInt(3, 8);
  const vulnCount = randInt(2, 5);
  const confirmedCount = Math.min(randInt(1, 4), repoCount);

  const framework = pick([
    "agentic framework",
    "tool-calling pipeline",
    "MCP server implementation",
    "RAG pipeline",
  ]);
  const attackVector = pick([
    "a webpage, a document or an API response",
    "a crafted PDF, a user-submitted form or an API callback",
    "an email body, a code comment or a scraped web page",
  ]);
  const outcome = pick([
    "smuggle instructions back through the retrieval layer",
    "override system prompts via tool-output injection",
    "exfiltrate context window contents to an external endpoint",
  ]);

  return {
    id: `ai-security-${++_idCounter}`,
    prompt: aiPost
      ? `Review this: ${aiPost.title.slice(0, 55)}`
      : `How vulnerable are agentic frameworks to indirect prompt injection?`,
    topic: "ai-security",
    topicLabel: "AI security",
    tag: "ai-agents",
    href: aiPost ? `/posts/${aiPost.slug}` : "/tags/ai-agents",
    lines: [
      {
        type: "action",
        icon: "search",
        text: pick([
          `Searching GitHub for ${framework} repos...`,
          `Scanning registry for popular ${framework} packages...`,
          `Pulling starred ${framework} repos from watchlist...`,
        ]),
        typeSpeed: 32,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "terminal",
        text: `Cloning top ${repoCount} by stars. Grepping for tool-call trust boundaries...`,
        typeSpeed: 30,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "speech",
        text: `Most frameworks trust tool outputs implicitly. If an attacker controls a data source - ${attackVector} - they can ${outcome}.`,
        typeSpeed: 22,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "action",
        icon: "terminal",
        text: pick([
          "Building proof-of-concept in sandboxed fork...",
          "Spinning up isolated test harness with instrumented tool calls...",
          `Constructing ${vulnCount} PoC payloads against different trust boundaries...`,
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "action",
        icon: "search",
        text: pick([
          "Opening responsible disclosure issues on affected repos...",
          `Filing ${confirmedCount} security advisories via GitHub...`,
          "Drafting disclosure timeline and coordinating with maintainers...",
        ]),
        typeSpeed: 32,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "finding",
        icon: "shield",
        text: `Indirect prompt injection confirmed across ${confirmedCount} of ${repoCount} ${framework}s. Severity High. PoC and mitigations submitted as PRs.`,
        typeSpeed: 26,
        pauseAfter: 600,
      },
    ],
  };
}

function makeCVETriageConvo(seed: HeroSeed): Conversation {
  const cveIntel = seed.recentIntel.filter((i) => i.cves.length > 0);
  const featured = cveIntel.length > 0 ? pick(cveIntel) : null;
  const realCve = featured?.cves[0];

  const totalCves = randInt(38, 94);
  const matchedCount = randInt(2, 7);
  const criticalCount = randInt(1, Math.min(3, matchedCount));
  const mediumCount = matchedCount - criticalCount;
  const serviceCount = randInt(3, 12);

  return {
    id: `cve-triage-${++_idCounter}`,
    prompt: realCve
      ? `What's our exposure to ${realCve}?`
      : "Triage today's CVE disclosures against our stack",
    topic: "engineering",
    topicLabel: "Vulnerability triage",
    tag: "automation",
    href: featured ? `/intelligence/${featured.slug}` : "/tags/automation",
    lines: [
      {
        type: "action",
        icon: "search",
        text: pick([
          "Pulling latest CVE disclosures from NVD feed...",
          "Fetching today's advisories from NVD and GitHub Security...",
          "Syncing CVE database with upstream NVD and OSV feeds...",
        ]),
        typeSpeed: 34,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "terminal",
        text: pick([
          `Cloning ${serviceCount} service repos and parsing lockfiles...`,
          `Scanning dependency manifests across ${serviceCount} repositories...`,
          `Running sbom-gen against ${serviceCount} production services...`,
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "speech",
        text: `${totalCves} new CVEs published today.${realCve ? ` ${realCve} affects ${featured!.affected[0] || "a core dependency"}.` : ""} Cross-referencing against the dependency graph and running reachability analysis.`,
        typeSpeed: 24,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "terminal",
        text: `Running static reachability analysis on ${matchedCount} matched CVEs...`,
        typeSpeed: 32,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "action",
        icon: "search",
        text: pick([
          "Forking affected repos and submitting patch PRs...",
          `Opening ${matchedCount} patch PRs with pinned dependency bumps...`,
          "Generating remediation PRs with full diff context...",
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "finding",
        icon: "shield",
        text: `${matchedCount} of ${totalCves} reachable in production. ${criticalCount} critical${mediumCount > 0 ? `, ${mediumCount} medium` : ""}. Patches applied. PRs opened with full context for each team.`,
        typeSpeed: 24,
        pauseAfter: 600,
      },
    ],
  };
}

function makeResearchConvo(seed: HeroSeed): Conversation {
  const post =
    seed.recentPosts.length > 0
      ? pick(seed.recentPosts)
      : null;
  const sourceCount = randInt(12, 40);
  const articleCount = randInt(3, 8);

  return {
    id: `research-${++_idCounter}`,
    prompt: post
      ? `Research and write up: ${post.title.slice(0, 55)}`
      : "Draft a briefing on this week's threat landscape",
    topic: "research",
    topicLabel: "Research",
    tag: post?.tags[0] || "threat-research",
    href: post ? `/posts/${post.slug}` : "/posts",
    lines: [
      {
        type: "action",
        icon: "search",
        text: pick([
          `Pulling ${sourceCount} sources from RSS feeds and threat intel APIs...`,
          `Scanning ${sourceCount} feeds for related disclosures and write-ups...`,
          `Fetching vendor advisories and searching GitHub for related commits...`,
        ]),
        typeSpeed: 32,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "terminal",
        text: pick([
          `Cloning ${articleCount} referenced repos to verify claims...`,
          `Cross-referencing ${articleCount} public PoCs against known-good baselines...`,
          `Diffing ${articleCount} vendor patches to extract root cause...`,
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "speech",
        text: post?.description
          ? `${post.description.slice(0, 160)}${post.description.length > 160 ? "..." : ""}`
          : `Found ${articleCount} significant developments worth writing up. Correlating timelines and verifying technical claims against source code.`,
        typeSpeed: 22,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "action",
        icon: "terminal",
        text: pick([
          `Drafting analysis with inline citations...`,
          `Compiling findings into structured briefing...`,
          `Writing technical breakdown. ${articleCount} code samples extracted and annotated...`,
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "search",
        text: pick([
          "Pushing draft to blog repo and opening review PR...",
          "Committing write-up and generating social summaries...",
          "Submitting analysis to editorial queue with source links...",
        ]),
        typeSpeed: 32,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "finding",
        icon: "shield",
        text: post
          ? `Analysis published: "${post.title.slice(0, 50)}". PR opened with sources and technical appendix.`
          : `Weekly briefing drafted with ${articleCount} key findings. PR opened for editorial review.`,
        typeSpeed: 24,
        pauseAfter: 600,
      },
    ],
  };
}

function makeMalwareConvo(seed: HeroSeed): Conversation {
  const malwareIntel = seed.recentIntel.find(
    (i) => i.category === "malware" || i.category === "campaign"
  );
  const sampleCount = randInt(2, 6);
  const iocCount = randInt(8, 32);
  const c2Count = randInt(1, 4);

  const technique = pick([
    "DLL side-loading via signed binary",
    "process hollowing in svchost.exe",
    "reflective loader injecting into explorer.exe",
    "COM hijack persisting through registry modification",
  ]);

  return {
    id: `malware-${++_idCounter}`,
    prompt: malwareIntel
      ? `Analyse: ${malwareIntel.title.slice(0, 55)}`
      : "Reverse-engineer this suspicious binary from the honeypot",
    topic: "malware",
    topicLabel: "Malware analysis",
    tag: "threat-research",
    href: malwareIntel
      ? `/intelligence/${malwareIntel.slug}`
      : "/intelligence",
    lines: [
      {
        type: "action",
        icon: "terminal",
        text: pick([
          `Detonating ${sampleCount} samples in isolated sandbox...`,
          `Spinning up analysis VM and loading ${sampleCount} samples...`,
          `Unpacking binary. ${sampleCount} stages detected...`,
        ]),
        typeSpeed: 32,
        pauseAfter: randInt(700, 1000),
      },
      {
        type: "action",
        icon: "search",
        text: pick([
          `Extracting strings and scanning against YARA ruleset...`,
          `Running ${sampleCount} samples through dynamic analysis pipeline...`,
          `Cross-referencing hashes against VirusTotal and MalwareBazaar...`,
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "speech",
        text: `Execution chain uses ${technique}. Identified ${c2Count} C2 endpoint${c2Count > 1 ? "s" : ""} and ${iocCount} network IOCs. The infrastructure overlaps with previously tracked campaigns.`,
        typeSpeed: 22,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "action",
        icon: "terminal",
        text: pick([
          `Generating YARA signatures and Snort rules for ${iocCount} IOCs...`,
          `Writing detection rules. ${iocCount} indicators catalogued...`,
          `Mapping kill chain to MITRE ATT&CK. ${c2Count} C2 domains flagged...`,
        ]),
        typeSpeed: 30,
        pauseAfter: randInt(600, 900),
      },
      {
        type: "action",
        icon: "search",
        text: pick([
          "Pushing IOC bundle to threat-intel repo...",
          "Committing YARA rules and opening PR to detection-eng...",
          "Submitting samples and write-up to community feed...",
        ]),
        typeSpeed: 32,
        pauseAfter: randInt(500, 800),
      },
      {
        type: "finding",
        icon: "shield",
        text: `${sampleCount}-stage loader identified with ${c2Count} active C2 endpoint${c2Count > 1 ? "s" : ""}. ${iocCount} IOCs extracted. Detection rules pushed and blocking in place.`,
        typeSpeed: 24,
        pauseAfter: 600,
      },
    ],
  };
}

/** Generate a shuffled set of conversations seeded with real content */
export function generateConversations(seed: HeroSeed): Conversation[] {
  _rng = createRng(seed.randomSeed);
  _idCounter = 0;
  const generators = [
    makeSupplyChainConvo,
    makeAISecurityConvo,
    makeCVETriageConvo,
    makeResearchConvo,
    makeMalwareConvo,
  ];
  return shuffle(generators).slice(0, 4).map((gen) => gen(seed));
}
