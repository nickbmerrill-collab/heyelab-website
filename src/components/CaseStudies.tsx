const industries = [
  {
    name: "Real Estate",
    description:
      "Listing intake, comp research, automated showing summaries, contract Q&A, lead follow-up. Turn a stack of inquiries into a prioritized list overnight.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Property Management",
    description:
      "Maintenance ticket triage, tenant communication, vendor coordination, lease and inspection summaries. The repetitive 70% of the job, automated.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Restaurants &amp; Hospitality",
    description:
      "Reservation handling, review responses, menu and inventory analysis, staff scheduling support, multilingual customer service after hours.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    name: "Electrical &amp; Trades",
    description:
      "Plan takeoffs, quoting, project intake, BOM generation. The proven model behind EMMA at 2M Electrical Reps — now offered as a service.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Local Services &amp; Retail",
    description:
      "Rental coordination, scheduling, intake, recurring customer comms. The kind of work that ties up a front-desk person all morning.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    name: "Professional Services",
    description:
      "Document review, client intake, scheduling, drafting standard correspondence. For firms where time literally is the product.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

export default function CaseStudies() {
  return (
    <section id="in-action" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Pilot banner */}
        <div className="mb-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-accent/[0.08] to-bg-card border border-accent/30">
          <p className="text-sm font-mono text-accent mb-3 tracking-wider uppercase">
            Now Piloting · Port Aransas, TX
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Starting where we live
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            We&apos;re launching Heyelab as a hands-on pilot with small
            businesses in Port Aransas — realtors, property managers,
            restaurants, rental shops, and the local service operators
            who keep the island running. The plan is to embed with a few
            businesses, learn what actually moves the needle, and turn
            that into a repeatable offering for SMBs everywhere.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mt-3">
            If you run a business on the island and want a seat at the
            table early, get in touch below.
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Where We Help
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for the businesses that
            <br />
            actually make Main Street work
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We start with the workflows you already do every day — and
            quietly take the repetitive parts off your team&apos;s plate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i) => (
            <div
              key={i.name}
              className="p-6 rounded-2xl bg-bg-card border border-border hover:border-border-accent transition-all"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent w-fit mb-4">
                {i.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                dangerouslySetInnerHTML={{ __html: i.name }}
              />
              <p
                className="text-sm text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: i.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
