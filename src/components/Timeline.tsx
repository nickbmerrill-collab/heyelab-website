import Link from "next/link";

const events = [
  {
    slug: "riverside-engineering",
    year: "Early Career",
    title: "Controls & Automation Engineer",
    org: "Riverside Engineering",
    description:
      "Co-invented the first non-derivative cruise control system for car shredders, taking throughput from 80 to 200+ tons/hour. Recognized as an expert by US and Canadian governments. Co-authored two industry papers.",
    tags: ["PLC Programming", "Cruise Control Inventor", "RSLogix 5000", "Government Expert"],
    accent: "bg-cyan-500",
  },
  {
    slug: "2m-electrical-reps",
    year: "2012",
    title: "Founder & President",
    org: "2M Electrical Reps",
    description:
      "Founded an electrical manufacturer's representative firm. Still serve as President, managing key relationships and driving growth across the electrical industry.",
    tags: ["Electrical Sales", "Manufacturer Rep", "Business Development"],
    accent: "bg-blue-500",
  },
  {
    slug: "power-busway",
    year: "2018",
    title: "Partner",
    org: "Power Busway",
    description:
      "Joined as a partner and led the company from $5M to over $200M in annual sales. Responsible for the majority of all sales, implemented new processes for the American market, and innovated on product along the way.",
    tags: ["Power Distribution", "Sales Growth", "Product Innovation", "Market Strategy"],
    accent: "bg-violet-500",
  },
  {
    slug: "heye-power-consultants",
    year: "2023",
    title: "Founder",
    org: "Heye Power Consultants",
    description:
      "Launched a consulting practice specializing in high-current and ampacity systems for manufacturing facilities and data centers. Bringing deep technical expertise to the most demanding power challenges.",
    tags: ["High Current", "Ampacity", "Data Centers", "Manufacturing"],
    accent: "bg-amber-500",
  },
  {
    slug: "heyelab",
    year: "2025",
    title: "Founder",
    org: "Heyelab",
    description:
      "Created an incubator for personal projects and external ventures. A lab for building, experimenting, and helping others bring ambitious ideas to life across all domains.",
    tags: ["Incubator", "Venture Building", "Innovation"],
    accent: "bg-emerald-500",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Career
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            The path so far
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-accent to-transparent md:-translate-x-px" />

          <div className="space-y-16">
            {events.map((event, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-bg bg-border-accent -translate-x-[7px] md:-translate-x-[8px] mt-1">
                  <div
                    className={`absolute inset-1 rounded-full ${event.accent}`}
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2" />
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div
                    className={`${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="text-sm font-mono text-text-muted">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                    <p className="text-accent text-sm font-medium mt-0.5">
                      {event.org}
                    </p>
                    <p className="text-text-secondary mt-3 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-bg-card border border-border rounded-full text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/career/${event.slug}`}
                      className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
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
