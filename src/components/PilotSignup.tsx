"use client";

import { useState } from "react";

const industryOptions = [
  "Real Estate",
  "Property Management",
  "Restaurant / Hospitality",
  "Electrical / Trades",
  "Retail / Rentals",
  "Professional Services",
  "Other",
];

export default function PilotSignup() {
  const [business, setBusiness] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState(industryOptions[0]);
  const [workflow, setWorkflow] = useState("");

  const mailtoHref = (() => {
    const subject = `Port Aransas Pilot — ${business || "[business name]"}`;
    const body = [
      `Business: ${business}`,
      `Contact: ${name}`,
      `Email: ${email}`,
      `Industry: ${industry}`,
      "",
      "Workflow we'd most like help with:",
      workflow,
    ].join("\n");
    return `mailto:nick@heyelab.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  })();

  const ready = business.trim() && name.trim() && email.trim();

  return (
    <section id="pilot" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-accent font-mono tracking-wider uppercase">
              Pilot Cohort · Limited Spots
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Join the Port Aransas pilot
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We&apos;re working hands-on with a small group of island
            businesses to deploy private AI into real workflows. Tell us
            about your business and we&apos;ll be in touch within a couple
            of days.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action={mailtoHref}
          method="post"
          encType="text/plain"
          className="p-8 md:p-10 rounded-2xl bg-bg-card border border-border space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-mono text-text-muted mb-2 tracking-wider uppercase">
                Business Name
              </label>
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent focus:outline-none text-text-primary placeholder:text-text-muted transition-colors"
                placeholder="Island Realty Co."
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-text-muted mb-2 tracking-wider uppercase">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent focus:outline-none text-text-primary transition-colors"
              >
                {industryOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-mono text-text-muted mb-2 tracking-wider uppercase">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent focus:outline-none text-text-primary placeholder:text-text-muted transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-text-muted mb-2 tracking-wider uppercase">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent focus:outline-none text-text-primary placeholder:text-text-muted transition-colors"
                placeholder="you@business.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-mono text-text-muted mb-2 tracking-wider uppercase">
              What workflow eats your team&apos;s time?
            </label>
            <textarea
              value={workflow}
              onChange={(e) => setWorkflow(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent focus:outline-none text-text-primary placeholder:text-text-muted resize-none transition-colors"
              placeholder="e.g. We spend hours each week answering the same rental questions, triaging maintenance requests, or drafting listing descriptions..."
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href={ready ? mailtoHref : undefined}
              aria-disabled={!ready}
              className={`px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                ready
                  ? "bg-accent hover:bg-accent/90 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  : "bg-accent/30 text-white/70 cursor-not-allowed pointer-events-none"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Apply to the Pilot
            </a>
            <p className="text-sm text-text-muted">
              Opens your email client with the details filled in.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
