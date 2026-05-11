const valueProps = [
  {
    stat: "20–40%",
    label: "Time recovered",
    description:
      "On the repetitive desk work — quoting, intake, reporting, scheduling — that quietly eats your team's week.",
  },
  {
    stat: "Days → Minutes",
    label: "Faster turnarounds",
    description:
      "Quotes, takeoffs, proposals, and customer responses that used to wait on one person can now move the moment they hit the inbox.",
  },
  {
    stat: "0",
    label: "Headcount required",
    description:
      "We don't sell you on hiring a data team. We deploy tools your existing staff can use on day one.",
  },
  {
    stat: "Private",
    label: "Your data, isolated",
    description:
      "Models run on our own infrastructure — not on AWS, not on OpenAI. Each customer gets a dedicated environment, and your data never trains anyone else's model.",
  },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            The Opportunity
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            AI&apos;s biggest opportunity isn&apos;t at the frontier —
            <br />
            <span className="text-accent">it&apos;s on Main Street</span>
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>
              The headlines focus on the trillion-dollar AI labs. The real
              story is what the technology can do for the
              <span className="text-text-primary font-medium">
                {" "}33 million small and medium businesses{" "}
              </span>
              that run the U.S. economy — distributors, contractors, clinics,
              law firms, shops, manufacturers.
            </p>
            <p>
              These businesses run on tribal knowledge, PDFs, spreadsheets,
              email threads, and senior employees who&apos;ve been there
              twenty years. That&apos;s exactly the kind of work modern AI
              is best at: reading messy documents, drafting structured
              responses, summarizing meetings, pulling answers out of a
              decade of files, and automating the repetitive parts of skilled
              work.
            </p>
            <p>
              The catch: most SMBs can&apos;t use the off-the-shelf cloud
              tools. Their data is sensitive, their workflows are bespoke,
              their margins don&apos;t stretch to per-seat enterprise SaaS,
              and their customers don&apos;t want their information sitting
              on a frontier lab&apos;s training pipeline. And almost none
              of them want to buy hardware or hire an AI team.
            </p>
            <p className="text-text-primary">
              That&apos;s where Heyelab fits. We host the AI on our own
              private infrastructure, tailor it to your business, and
              run it for you — for a flat monthly cost.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((v) => (
            <div
              key={v.label}
              className="p-6 rounded-2xl bg-bg-card border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {v.stat}
              </p>
              <p className="text-sm font-mono text-text-muted tracking-wider uppercase mb-3">
                {v.label}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
