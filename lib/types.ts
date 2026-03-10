export type ContentTier = "free" | "preview" | "member";
export type ContentType = "research" | "walkthrough" | "field-notes" | "tool" | "editorial";

export type IntelSeverity = "critical" | "high" | "medium" | "low" | "informational";
export type IntelCategory = "vulnerability" | "malware" | "campaign" | "supply-chain" | "policy" | "tool";
export type IntelStatus = "emerging" | "active" | "contained" | "resolved";

export interface IntelSource {
  title: string;
  url: string;
}

export interface IntelMeta {
  slug: string;
  title: string;
  date: string;
  severity: IntelSeverity;
  category: IntelCategory;
  status: IntelStatus;
  tldr: string;
  tags: string[];
  cves: string[];
  affected: string[];
  sources: IntelSource[];
}

export interface Intel extends IntelMeta {
  content: string;
}

export interface Artifact {
  type: string;
  url: string;
  description: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  categories: string[];
  readingTime: string;
  draft: boolean;
  coverImage?: string;
  tier: ContentTier;
  contentType: ContentType;
  keyFindings?: string[];
  artifacts?: Artifact[];
  author?: string;
  series?: string;
}

export interface Post extends PostMeta {
  content: string;
}

/** Content pillars for topic cluster pages */
export interface ContentPillar {
  id: string;
  label: string;
  description: string;
  longDescription: string;
  tags: string[];
}

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    id: "threat-research",
    label: "Threat Research",
    description: "Malware analysis, campaign tracking, vulnerability write-ups",
    longDescription:
      "Investigations into active threats — reverse engineering malware, tracking campaigns and documenting vulnerabilities before they become common knowledge. Every finding is backed by artefacts.",
    tags: ["malware", "vulnerability", "security", "openclaw"],
  },
  {
    id: "engineering",
    label: "Engineering",
    description: "Building tools, queries, automation and infrastructure",
    longDescription:
      "The craft of building things that work. KQL queries, automation scripts, developer tooling and the infrastructure that supports research at scale.",
    tags: ["kusto", "detection", "automation", "open-source"],
  },
  {
    id: "ai-agents",
    label: "AI & Agents",
    description: "Agentic AI, security implications, tooling",
    longDescription:
      "The intersection of artificial intelligence and security - from AI agent risks to using LLMs for automated investigation and building novel security tooling.",
    tags: ["ai", "agents", "automation", "GitHub", "security-research"],
  },
];

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
