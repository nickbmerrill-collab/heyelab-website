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
            I discovered Bitcoin in 2011 — early enough to watch the entire
            ecosystem take shape from the ground up. Within a year I was mining,
            running hardware and diving deep into how the protocol actually works.
            What started as curiosity from an electrical engineer who understood
            computation and energy became a conviction that has only deepened with time.
          </p>
          <p>
            Bitcoin resonates with the same first-principles thinking I apply to
            power systems: it&apos;s a protocol built on physics and math, not trust in
            institutions. The proof-of-work mechanism — converting energy into
            immutable history — is elegant engineering. The fixed supply schedule
            is predictable in a way that no central bank policy ever can be.
          </p>
          <p>
            Over 15 years I&apos;ve watched Bitcoin survive every imaginable attack —
            technical, regulatory, and narrative. Each cycle, the fundamentals
            get stronger. I remain deeply involved in the space: following
            development, holding convictions, and watching the network effect
            compound exactly the way I&apos;ve seen it work in business.
          </p>
        </div>
      </div>
    </section>
  );
}
