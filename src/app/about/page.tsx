import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nick Merrill — Heyelab",
  description:
    "6th generation Texan, engineer, entrepreneur. From Port Aransas to building companies that power data centers and factories across America.",
};

const milestones = [
  {
    period: "Roots",
    title: "6th Generation Texan",
    description:
      "Descendant of both the American and Texas Revolutions. The Heye family is known for saddle craftsmanship, and our family has continued the entrepreneurial spirit — working and building in the South Texas economy for over 200 years.",
  },
  {
    period: "Port Aransas",
    title: "Growing Up Building",
    description:
      "Grew up in Port Aransas, Texas — the oldest of four to a single mother. Always building things: LEGOs, Erector sets, radios. Then found computers and was hooked. That curiosity never stopped.",
  },
  {
    period: "Age 10",
    title: "Duke TIP Program",
    description:
      "Admitted to the Duke Talent Identification Program after high-scoring SATs at age 10. Many times entered into advanced classes where I was given the opportunity to explore and learn. Taught to think outside the box from the start.",
  },
  {
    period: "College",
    title: "UTSA — Electrical Engineering",
    description:
      "Studied electrical engineering at the University of Texas at San Antonio. While in school, worked in the warehouse at Hill Country Electric Supply — learning distribution from the bottom up. That ground-floor experience in how electrical products actually move through the supply chain became foundational.",
  },
  {
    period: "First Career",
    title: "Riverside Engineering",
    description:
      "Dove straight into controls work after college. Co-invented the first non-derivative cruise control system for car shredders, recognized as an expert by the US and Canadian governments, and built the engineering foundation for everything that followed.",
  },
  {
    period: "2012",
    title: "Founded 2M Electrical Reps",
    description:
      "Legrand approached me for the Austin territory. Hit the 7-year buyout target in 2. Grew from $2M to $50M+ by going directly to the engineers instead of doing donut runs. 90%+ market share, 40%+ of US data center deployments.",
  },
  {
    period: "2018",
    title: "Joined Power Busway",
    description:
      "Joined as a partner, drove the company from $5M to $200M+, then led the negotiation of a 9-figure acquisition — while keeping exclusive distribution rights.",
  },
  {
    period: "2023",
    title: "Founded Heye Power Consultants",
    description:
      "Born on the Tesla Gigafactory. Spun off from 2M to consult on high-current power systems for the biggest names in data centers and manufacturing.",
  },
  {
    period: "2025",
    title: "Founded Heyelab",
    description:
      "An incubator for the next generation of projects — distributed AI, crypto mining, industry software, consumer apps, and whatever comes next.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
          >
            heyelab<span className="text-accent">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-sm font-mono text-accent mb-2 tracking-wider uppercase">
            About Me
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nick Merrill</h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            6th generation Texan. Son of both the American and Texas Revolutions.
            Descendant of the Heye family, known for saddle craftsmanship. 200+
            years of entrepreneurial spirit in South Texas — and I&apos;m just
            getting started.
          </p>
        </div>
      </section>

      {/* Portrait placeholder */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-bg-card border border-border overflow-hidden">
              <div className="aspect-[4/5] flex items-center justify-center text-text-muted">
                <div className="text-center p-6">
                  <svg className="w-16 h-16 mx-auto mb-3 text-border-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm font-mono">nick-portrait.jpg</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-text-secondary leading-relaxed mb-4">
                I grew up in Port Aransas, Texas — the oldest of four to a single
                mother. I was always building things: LEGOs, Erector sets, radios.
                Then I found computers and was hooked.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                I was admitted to the{" "}
                <span className="text-text-primary font-medium">
                  Duke TIP Program
                </span>{" "}
                after high-scoring SATs at age 10. Throughout school I was placed
                in advanced classes where I was given the freedom to explore and
                learn — taught to think outside the box from the start.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I studied electrical engineering at{" "}
                <span className="text-text-primary font-medium">UTSA</span>,
                and while in college worked in the warehouse at Hill Country
                Electric Supply — learning the electrical distribution business
                from the ground up. That combination of engineering theory and
                hands-on supply chain knowledge became the launchpad for
                everything.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                I read voraciously — science, space, history, religion, business,
                engineering. No topic is outside my interests. The best ideas
                come from cross-pollinating knowledge across domains, and I
                never stop feeding that curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-mono text-accent mb-12 tracking-wider uppercase">
            The Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-accent to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 w-9 h-9 rounded-full bg-bg-card border border-border-accent flex items-center justify-center">
                    <span className="text-xs font-mono text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-text-muted">
                    {m.period}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{m.title}</h3>
                  <p className="text-text-secondary leading-relaxed mt-2">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* To be continued */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-bg-card border border-border border-dashed text-center">
            <p className="text-text-secondary italic">
              More to come — this story is still being written.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-accent hover:border-accent/50 text-text-secondary hover:text-text-primary rounded-lg transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back Home
          </Link>
        </div>
      </section>
    </div>
  );
}
