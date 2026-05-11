const points = [
  {
    title: "We host the AI — you just use it",
    description:
      "No servers to buy, no GPUs to babysit, no IT department required. We operate the infrastructure end-to-end, your team works through a simple interface.",
  },
  {
    title: "Off the big clouds",
    description:
      "Our models run on private infrastructure we own and control — not on AWS, Azure, or the frontier AI providers. Your data isn't joining anyone's training pipeline.",
  },
  {
    title: "Each customer is isolated",
    description:
      "Your business gets its own dedicated environment. Documents, prompts, and outputs from one customer never touch another's.",
  },
  {
    title: "Predictable monthly cost",
    description:
      "Flat pricing per business, not per token, not per seat, not per API call. You always know what AI costs next month.",
  },
];

export default function PrivateCompute() {
  return (
    <section id="private-compute" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              We run the AI.
              <br />
              <span className="text-accent">You run your business.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Most AI tools fall into two camps: either you wire your
              business into a frontier-lab API (and hand them your data),
              or you go build your own infrastructure (and hire a team to
              keep it alive). Neither one is a fit for a small or medium
              business.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Heyelab is a third option. We own the hardware, we tune the
              models, we keep them running, and we deliver a working tool
              to your team. You don&apos;t see GPUs and we don&apos;t
              touch your accounting software. Just the workflow, on a
              flat monthly cost.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl bg-bg-card border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
