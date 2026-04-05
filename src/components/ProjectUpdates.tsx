const GITHUB_ORG = "nickbmerrill-collab";

const projects = [
  {
    repo: "emma-web",
    name: "2MOS / EMMA",
    description: "AI assistant for the electrical industry",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500",
  },
  {
    repo: "port-a-local-co",
    name: "Port A Local Co",
    description: "Local guide & platform for Port Aransas",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500",
  },
  {
    repo: "port-a-delivery",
    name: "Port A Delivery",
    description: "Small-town delivery service",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500",
  },
  {
    repo: "Solsniper",
    name: "Solsniper",
    description: "AI agents on Solana",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500",
  },
  {
    repo: "heyelab-website",
    name: "Heyelab Website",
    description: "This site",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500",
  },
];

type Commit = {
  sha: string;
  date: string;
  message: string;
  url: string;
};

type ProjectWithCommits = (typeof projects)[0] & {
  commits: Commit[];
  lastUpdated: string | null;
};

async function getRepoCommits(repo: string): Promise<Commit[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_ORG}/${repo}/commits?per_page=5`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((c: Record<string, unknown>) => {
      const commit = c.commit as Record<string, unknown>;
      const author = commit.author as Record<string, unknown>;
      const message = (commit.message as string).split("\n")[0];
      // Filter out co-authored-by lines and merge commits
      if (message.startsWith("Merge pull request")) {
        return null;
      }
      return {
        sha: (c.sha as string).slice(0, 7),
        date: (author.date as string).slice(0, 10),
        message: message.slice(0, 120),
        url: c.html_url as string,
      };
    }).filter(Boolean) as Commit[];
  } catch {
    return [];
  }
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default async function ProjectUpdates() {
  const projectsWithCommits: ProjectWithCommits[] = await Promise.all(
    projects.map(async (p) => {
      const commits = await getRepoCommits(p.repo);
      return {
        ...p,
        commits,
        lastUpdated: commits[0]?.date ?? null,
      };
    })
  );

  // Sort by most recently updated
  projectsWithCommits.sort((a, b) => {
    if (!a.lastUpdated) return 1;
    if (!b.lastUpdated) return -1;
    return b.lastUpdated.localeCompare(a.lastUpdated);
  });

  return (
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Activity
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What we&apos;re working on
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            Live updates from our projects. All work is open source.
          </p>
        </div>

        <div className="space-y-6">
          {projectsWithCommits.map((project) => (
            <div
              key={project.repo}
              className="rounded-2xl bg-bg-card border border-border overflow-hidden"
            >
              {/* Project header */}
              <div className="px-6 py-5 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${project.accentBg}`} />
                  <div>
                    <h3 className="font-bold text-text-primary">
                      {project.name}
                    </h3>
                    <p className="text-xs text-text-muted">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {project.lastUpdated && (
                    <span className="text-xs font-mono text-text-muted">
                      {timeAgo(project.lastUpdated)}
                    </span>
                  )}
                  <a
                    href={`https://github.com/${GITHUB_ORG}/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Commits */}
              {project.commits.length > 0 ? (
                <div className="divide-y divide-border/50">
                  {project.commits.slice(0, 4).map((commit) => (
                    <a
                      key={commit.sha}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-6 py-3 hover:bg-bg-card-hover transition-colors group"
                    >
                      <code className={`text-xs font-mono ${project.accentText} mt-0.5 shrink-0`}>
                        {commit.sha}
                      </code>
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors flex-1 min-w-0">
                        {commit.message}
                      </span>
                      <span className="text-xs font-mono text-text-muted shrink-0 mt-0.5">
                        {commit.date}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-4 text-sm text-text-muted">
                  No recent activity
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-10">
          <a
            href={`https://github.com/${GITHUB_ORG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-accent hover:border-accent/50 text-text-secondary hover:text-text-primary rounded-lg transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
