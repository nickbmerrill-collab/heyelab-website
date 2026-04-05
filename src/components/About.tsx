export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="aspect-[4/5] rounded-2xl bg-bg-card border border-border overflow-hidden">
              <img
                src="/images/2m-team.jpg"
                alt="The 2M Electrical Reps team"
                className="w-full h-full object-cover"
              />
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
                Nick Merrill — started in the electrical industry at 19,
                working the warehouse at Hill Country Electrical Supply all
                through college. Stocking shelves, cutting wire, sweeping
                floors, building BOMs, learning to read what customers actually
                needed vs. what they put on paper.
              </p>
              <p>
                That turned into controls engineering at Riverside, then
                building businesses. Founded 2M Electrical Reps in 2012,
                joined the Power Busway team as a partner in 2018, started
                Heye Power Consultants in 2023, and in 2025 set up Heyelab
                to work on new projects across different industries.
              </p>
              <p>
                20+ years in the same industry, working with the same people.
                Most of our work sits at the intersection of{" "}
                <span className="text-text-primary font-medium">
                  technical depth
                </span>{" "}
                and{" "}
                <span className="text-text-primary font-medium">
                  long-term relationships
                </span>
                . That tends to compound.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
