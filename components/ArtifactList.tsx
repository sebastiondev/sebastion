import type { Artifact } from "@/lib/types";

interface ArtifactListProps {
  artifacts: Artifact[];
}

const typeIcons: Record<string, string> = {
  github: "↗",
  reference: "📄",
  download: "⬇",
  tool: "🔧",
  yara: "🛡",
  kql: "🔍",
  pcap: "📦",
};

const typeLabels: Record<string, string> = {
  github: "Repository",
  reference: "Reference",
  download: "Download",
  tool: "Tool",
  yara: "YARA Rule",
  kql: "KQL Query",
  pcap: "PCAP File",
};

export default function ArtifactList({ artifacts }: ArtifactListProps) {
  if (!artifacts || artifacts.length === 0) return null;

  return (
    <aside className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6 mb-12">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[var(--color-text-tertiary)]">
          Artifacts &amp; Resources
        </h2>
      </div>
      <ul className="space-y-2.5">
        {artifacts.map((artifact, i) => (
          <li key={i}>
            <a
              href={artifact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-[var(--color-accent)]/5"
            >
              <span className="flex-shrink-0 text-sm mt-0.5">
                {typeIcons[artifact.type] || "📎"}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[0.875rem] font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {artifact.description}
                </span>
                <span className="block text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
                  {typeLabels[artifact.type] || artifact.type}
                </span>
              </div>
              <span className="flex-shrink-0 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors text-sm mt-1">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
