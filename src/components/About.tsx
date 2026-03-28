export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-bg-card border border-border overflow-hidden">
              {/* Replace with actual photo: public/images/nick-portrait.jpg */}
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-border-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm font-mono">nick-portrait.jpg</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-accent-secondary/20 rounded-lg -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engineering meets
              <br />
              <span className="text-accent">entrepreneurship</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m Nick Merrill — an electrical engineer by training who discovered
                that building businesses is just another form of systems design.
                My career started on the factory floor: programming PLCs, designing
                controls systems, and building HMI interfaces for metal recycling
                centers using RSLogix 5000.
              </p>
              <p>
                That hands-on foundation became the launchpad for everything that
                followed. I founded 2M Electrical Reps in 2012, joined Power Busway
                as a partner in 2018 and helped drive it from $5M to over $200M in
                annual sales, launched Heye Power Consultants in 2023 to consult
                on high-current ampacity systems, and in 2025 created Heyelab as
                an incubator for the next generation of projects.
              </p>
              <p>
                My edge comes from two things:{" "}
                <span className="text-text-primary font-medium">
                  deep electro-mechanical expertise
                </span>{" "}
                — I&apos;m a 10x engineer when it comes to power systems — and an
                unwavering belief in the{" "}
                <span className="text-text-primary font-medium">
                  power of relationships
                </span>
                . The network effect is real, and I&apos;ve built my career on it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">14+</p>
                <p className="text-sm text-text-muted mt-1">
                  Years in business
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">$200M+</p>
                <p className="text-sm text-text-muted mt-1">Revenue driven</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">40x</p>
                <p className="text-sm text-text-muted mt-1">
                  Growth at Power Busway
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
