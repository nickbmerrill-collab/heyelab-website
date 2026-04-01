export default function Bitcoin() {
  return (
    <section id="bitcoin" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Bitcoin
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            15 years in the
            <br />
            <span className="text-accent">hardest money</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-bg-card border border-border">
            <p className="text-3xl font-bold text-accent">2011</p>
            <p className="text-sm text-text-muted mt-1">First acquired Bitcoin</p>
          </div>
          <div className="p-6 rounded-2xl bg-bg-card border border-border">
            <p className="text-3xl font-bold text-accent">2012</p>
            <p className="text-sm text-text-muted mt-1">Started mining</p>
          </div>
          <div className="p-6 rounded-2xl bg-bg-card border border-border">
            <p className="text-3xl font-bold text-accent">15+</p>
            <p className="text-sm text-text-muted mt-1">Years of involvement</p>
          </div>
        </div>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            We came across Bitcoin in 2011 and started mining the following year.
            With an electrical engineering background, the proof-of-work
            mechanism made immediate sense — converting energy into immutable
            history is an interesting engineering problem.
          </p>
          <p>
            The protocol appeals to us for the same reasons power systems do:
            it&apos;s built on physics and math, not on trust in institutions.
            The fixed supply schedule is predictable in a way that monetary
            policy isn&apos;t.
          </p>
          <p>
            We&apos;ve stayed involved over the years — following protocol
            development, running infrastructure, and more recently exploring
            mining operations powered by flare gas through Heyelab.
          </p>
        </div>
      </div>
    </section>
  );
}
