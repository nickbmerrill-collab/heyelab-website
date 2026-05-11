import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="p-10 md:p-14 rounded-2xl bg-bg-card border border-border">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A small team with deep operating experience
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Heyelab was founded in 2025 by Nick Merrill — a 6th-generation
              Texan, electrical engineer, and operator with 20+ years building
              businesses in the electrical industry. We are headquartered in
              Texas and work with customers across the U.S.
            </p>
            <p>
              We&apos;re not a typical AI consultancy. Our team has actually
              run the kinds of companies we build for — from $2M to $200M+,
              from warehouse floor to data center deployment. That&apos;s the
              perspective we bring to every engagement.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
            >
              Read the founder&apos;s story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
