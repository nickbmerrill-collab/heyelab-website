const services = [
  {
    title: "Workflow Automation",
    description:
      "We map your highest-friction processes — quoting, takeoffs, intake, scheduling, reporting — and replace the repetitive parts with AI that runs in the background. Less clicking, more closing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Custom Internal Tools",
    description:
      "Purpose-built software for the way your business actually runs — not a forced fit into someone else's SaaS. Built with your team, deployed on your infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Private AI Infrastructure",
    description:
      "We host and operate AI models on our own private infrastructure — not OpenAI, not the big clouds. You get the benefits of modern AI without buying GPUs, hiring an MLOps team, or sending your data to a third party.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Document &amp; Data Intelligence",
    description:
      "Make your PDFs, drawings, spreadsheets, and historical records searchable, queryable, and useful. Decades of institutional knowledge become a tool your whole team can use.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="what-we-do" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI that works for your business,
            <br />
            <span className="text-accent">not the other way around</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Small and medium businesses are sitting on years of expertise,
            relationships, and process knowledge. We build the tools that
            let your team move faster — without handing your business over
            to a SaaS company or a frontier AI lab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-2xl bg-bg-card border border-border hover:border-border-accent transition-all"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-5">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
