import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life — Heyelab",
  description: "Beyond the work — family, travel, tinkering, and everything with a motor.",
};

const interests = [
  {
    title: "New Dad",
    description:
      "The most important project I'll ever work on. Being a dad has changed how I think about everything — time, priorities, and what it means to build something that lasts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Family & Travel",
    description:
      "Spending time with family is the recharge. Traveling together — seeing new places, experiencing different cultures, and making memories that have nothing to do with work.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reading & Learning",
    description:
      "Always reading — business, engineering, history, whatever catches my interest. The best ideas come from cross-pollinating knowledge across domains. Learning never stops.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Tinkering",
    description:
      "The same instinct that made me a controls engineer makes me take things apart at home. If it's broken, I'm fixing it. If it works, I'm figuring out how to make it better. 3D printing, electronics, whatever the project demands.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Cars & Motors",
    description:
      "If it has a motor, I'm interested. Cars, trucks, engines — the mechanical engineering side of my brain never shuts off. There's something deeply satisfying about machines that move.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function LifePage() {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-sm font-mono text-accent-secondary mb-2 tracking-wider uppercase">
            Beyond the Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            In my spare time
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Engineering is what I do. But it&apos;s not all I am. Here&apos;s
            what keeps me balanced, curious, and energized outside of work.
          </p>
        </div>
      </section>

      {/* Interests grid */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {interests.map((interest, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-bg-card border border-border hover:border-border-accent transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-accent-secondary/10 text-accent-secondary shrink-0">
                    {interest.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing thought */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl bg-bg-card border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-secondary/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <p className="text-lg text-text-secondary leading-relaxed italic">
                &ldquo;The best engineers I know are curious about everything —
                not just their field. The same mindset that makes you good at
                debugging a PLC program makes you good at figuring out why your
                car makes that noise, or why your kid laughs at that one specific
                thing. Stay curious.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-24">
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
