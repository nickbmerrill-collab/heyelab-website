import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-bg-card/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-text-secondary font-mono">
            Private AI for small &amp; medium businesses
          </span>
        </div>
        <a
          href="#pilot"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/10 backdrop-blur-sm mb-8 ml-2 transition-colors"
        >
          <span className="text-xs text-accent font-mono">
            Now piloting in Port Aransas, TX →
          </span>
        </a>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-text-primary">Heyelab</span>
          <span className="text-accent">.</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto mb-6">
          A private AI lab helping small and medium businesses
          put AI to work — without handing their data to the big clouds.
        </p>

        <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12">
          We design and run AI tools on our own private infrastructure
          and operate them for you. No hardware to buy, no cloud
          provider in the middle, no per-seat SaaS tax, no frontier lab
          training on your business. You get the workflow, we handle
          the rest.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Get in Touch
          </a>
          <a
            href="#what-we-do"
            className="px-8 py-3 border border-border-accent hover:border-accent/50 text-text-secondary hover:text-text-primary rounded-lg transition-all"
          >
            What We Do
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
