"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const entries = [
  {
    slug: "riverside-engineering",
    index: "01",
    year: "Early Career",
    title: "Controls & Automation Engineer",
    org: "Riverside Engineering",
    metric: "200+",
    metricLabel: "tons/hour throughput",
    description:
      "Our team co-developed a cruise control system for car shredders that improved throughput from 80 to 200+ tons/hour. Also did PLC programming and controls work across several facilities.",
    highlights: [
      "Novel cruise control system",
      "PLC & controls programming",
      "2 co-authored industry papers",
    ],
    accentFrom: "from-cyan-500",
    accentTo: "to-cyan-400",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500",
    accentBorder: "border-cyan-500/30",
    accentGlow: "shadow-cyan-500/20",
  },
  {
    slug: "2m-electrical-reps",
    index: "02",
    year: "2012",
    title: "Founder & President",
    org: "2M Electrical Reps",
    metric: "$50M+",
    metricLabel: "annual sales",
    description:
      "Electrical manufacturer's representative firm founded in 2012. We represent Legrand's portfolio and work on a lot of the major data center projects in the US.",
    highlights: [
      "Grew from $2M to $50M+",
      "Major data center focus",
      "Legrand full portfolio rep",
    ],
    accentFrom: "from-blue-500",
    accentTo: "to-blue-400",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500",
    accentBorder: "border-blue-500/30",
    accentGlow: "shadow-blue-500/20",
  },
  {
    slug: "power-busway",
    index: "03",
    year: "2018",
    title: "Partner",
    org: "Power Busway",
    metric: "$200M+",
    metricLabel: "annual sales",
    description:
      "Joined as a partner in 2018. The company grew from $5M to over $200M in annual sales and was acquired by Legrand in 2024.",
    highlights: [
      "$5M to $200M+ in sales",
      "4,000+ installations",
      "Acquired by Legrand (2024)",
    ],
    accentFrom: "from-violet-500",
    accentTo: "to-violet-400",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500",
    accentBorder: "border-violet-500/30",
    accentGlow: "shadow-violet-500/20",
  },
  {
    slug: "heye-power-consultants",
    index: "04",
    year: "2023",
    title: "Founder",
    org: "Heye Power Consultants",
    metric: "MW+",
    metricLabel: "scale systems",
    description:
      "Consulting practice focused on high-current and ampacity systems for manufacturing facilities and data centers.",
    highlights: [
      "High-current ampacity systems",
      "Data center & manufacturing",
      "First-principles approach",
    ],
    accentFrom: "from-amber-500",
    accentTo: "to-amber-400",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500",
    accentBorder: "border-amber-500/30",
    accentGlow: "shadow-amber-500/20",
  },
  {
    slug: "heyelab",
    index: "05",
    year: "2025",
    title: "Founder",
    org: "Heyelab",
    metric: "8+",
    metricLabel: "active projects",
    description:
      "A place for new projects — AI clustering, crypto mining with flare gas, golf cart rentals, small-town delivery, and a few other things.",
    highlights: [
      "AI clustering",
      "Flare gas mining",
      "Multiple active projects",
    ],
    accentFrom: "from-emerald-500",
    accentTo: "to-emerald-400",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500",
    accentBorder: "border-emerald-500/30",
    accentGlow: "shadow-emerald-500/20",
  },
];

function AccordionItem({
  entry,
  isOpen,
  onToggle,
}: {
  entry: (typeof entries)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div
      className={`group relative border-b border-border transition-colors duration-300 ${
        isOpen ? "bg-bg-card/50" : "hover:bg-bg-card/30"
      }`}
    >
      {/* Left accent line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b ${entry.accentFrom} ${entry.accentTo} transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-40"
        }`}
      />

      {/* Toggle button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left px-6 md:px-10 py-6 md:py-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-inset"
      >
        <div className="flex items-center gap-4 md:gap-8">
          {/* Index number */}
          <span
            className={`text-2xl md:text-4xl font-mono font-bold transition-colors duration-300 ${
              isOpen ? entry.accentText : "text-border-accent"
            } group-hover:${entry.accentText} select-none shrink-0 w-12 md:w-16`}
          >
            {entry.index}
          </span>

          {/* Title area */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
              <h3
                className={`text-lg md:text-2xl font-bold transition-colors duration-300 truncate ${
                  isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                }`}
              >
                {entry.org}
              </h3>
              <span className="text-sm font-mono text-text-muted shrink-0">
                {entry.title} · {entry.year}
              </span>
            </div>
          </div>

          {/* Metric badge */}
          <div
            className={`hidden md:flex items-baseline gap-1.5 px-4 py-2 rounded-full border transition-all duration-500 shrink-0 ${
              isOpen
                ? `${entry.accentBorder} bg-bg-card shadow-lg ${entry.accentGlow}`
                : "border-border bg-transparent"
            }`}
          >
            <span
              className={`text-lg md:text-xl font-bold font-mono transition-colors duration-300 ${
                isOpen ? entry.accentText : "text-text-muted"
              }`}
            >
              {entry.metric}
            </span>
            <span className="text-xs text-text-muted hidden lg:inline">
              {entry.metricLabel}
            </span>
          </div>

          {/* Chevron */}
          <div
            className={`w-5 h-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen ? entry.accentText : "text-text-muted"
              }`}
              strokeWidth={1.5}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ height: isOpen ? height : 0 }}
      >
        <div ref={contentRef}>
          <div className="px-6 md:px-10 pb-8 md:pb-10">
            <div className="pl-16 md:pl-24">
              {/* Mobile metric */}
              <div
                className={`md:hidden flex items-baseline gap-2 mb-4 px-3 py-2 rounded-lg border w-fit ${entry.accentBorder} bg-bg-card`}
              >
                <span className={`text-xl font-bold font-mono ${entry.accentText}`}>
                  {entry.metric}
                </span>
                <span className="text-xs text-text-muted">{entry.metricLabel}</span>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed max-w-2xl mb-6">
                {entry.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {entry.highlights.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-bg-card border border-border`}
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${entry.accentBg} shrink-0`} />
                    <span className="text-sm text-text-secondary">{h}</span>
                  </div>
                ))}
              </div>

              {/* Read more link */}
              <Link
                href={`/career/${entry.slug}`}
                className={`inline-flex items-center gap-2 text-sm font-medium ${entry.accentText} hover:opacity-80 transition-opacity`}
              >
                Deep dive
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareerAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="timeline" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Career
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            The path so far
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-border rounded-2xl overflow-hidden bg-bg/50 backdrop-blur-sm">
          {entries.map((entry, i) => (
            <AccordionItem
              key={entry.slug}
              entry={entry}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-xs font-mono text-text-muted mt-6 opacity-50">
          Click to expand · All roles active & ongoing
        </p>
      </div>
    </section>
  );
}
