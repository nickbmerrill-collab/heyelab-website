import Link from "next/link";

const ventures = [
  {
    slug: "power-busway",
    name: "Power Busway",
    role: "Partner",
    period: "2018 – Present",
    website: "https://www.legrand.us/power-bus-way",
    description:
      "Joined as a partner in 2018 and helped lead sales to $200M+ annually. Acquired by Legrand in 2024 — we retained distribution rights and territories.",
    metric: "9-Figure",
    metricLabel: "Acquisition",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    slug: "2m-electrical-reps",
    name: "2M Electrical Reps",
    role: "Founder & President",
    period: "2012 – Present",
    website: "https://2melectricalreps.com/",
    description:
      "Electrical manufacturer's representative firm we founded in 2012. Grew it to $50M+ in annual sales representing Legrand's full portfolio. We work on a lot of the major data center projects in the US.",
    metric: "$50M+",
    metricLabel: "Annual Sales",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: "heye-power-consultants",
    name: "Heye Power Consultants",
    role: "Founder",
    period: "2023 – Present",
    website: null,
    description:
      "Consulting practice focused on high-current and ampacity systems for manufacturing facilities and data centers.",
    metric: "MW+",
    metricLabel: "Scale Systems",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "heyelab",
    name: "Heyelab",
    role: "Founder",
    period: "2025 – Present",
    website: "https://heyelab.com",
    description:
      "A place for new projects — distributed AI clustering, crypto mining with flare gas, an electrical industry platform, golf cart rentals, small-town delivery, and a few more things in the works.",
    metric: "8+",
    metricLabel: "Active Projects",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Ventures
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What we&apos;re building
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((v) => (
            <Link
              key={v.name}
              href={`/work/${v.slug}`}
              className="group relative p-8 rounded-2xl bg-bg-card border border-border hover:border-border-accent transition-all duration-300 block"
            >
              <div className="mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit">
                  {v.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{v.name}</h3>
              <p className="text-sm text-accent mb-1">{v.role}</p>
              <p className="text-xs text-text-muted font-mono mb-4">
                {v.period}
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                {v.description}
              </p>

              <div className="flex items-center gap-4">
                {v.website && (
                  <span className="text-sm text-text-muted font-mono inline-flex items-center gap-1.5">
                    {v.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                )}
                <span className="text-sm text-accent font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Classified Projects */}
        <div className="mt-12">
          <p className="text-sm font-mono text-text-muted mb-6 tracking-wider uppercase text-center">
            Coming Soon
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { codename: "Project Gemini", icon: "◆" },
              { codename: "Project LLaMa", icon: "◈" },
            ].map((p) => (
              <div
                key={p.codename}
                className="group relative p-8 rounded-2xl border border-dashed border-accent/30 hover:border-accent/60 bg-gradient-to-br from-accent/[0.03] to-transparent transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Animated scan line */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-pulse" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-pulse" />
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-accent/5 border border-accent/20 text-accent text-2xl">
                    {p.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-mono text-accent/60 tracking-widest">
                      ███████
                    </p>
                    <p className="text-xs text-text-muted font-mono">CLASSIFIED</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1 text-text-primary">
                  {p.codename}
                </h3>
                <p className="text-sm text-accent/70 mb-1 font-mono">
                  Heyelab Ventures
                </p>
                <p className="text-xs text-text-muted font-mono mb-4">
                  2025 – ██████
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A large-scale venture currently in development. This project
                  represents a significant new direction for Heyelab.
                  Details under wraps — stay tuned.
                </p>

                <span className="text-sm font-mono text-accent/50 inline-flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent/60 animate-pulse" />
                  Active Development
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
