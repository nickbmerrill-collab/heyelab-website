import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List — Heyelab",
  description: "Books that shaped my thinking — engineering, business, philosophy, and life.",
};

const featuredBooks: {
  title: string;
  author: string;
  note: string;
  featured: boolean;
  url: string;
}[] = [
  {
    title: "The 4-Hour Workweek",
    author: "Tim Ferriss",
    note: "Rewired how I think about time, leverage, and what work actually needs to look like. The idea that you can design your life around outcomes rather than hours was a turning point — and it's how I ended up running multiple ventures simultaneously.",
    featured: true,
    url: "https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    note: "The original operating manual for staying grounded under pressure. When you're troubleshooting a shredder at 2 AM or navigating a $200M sales pipeline, Stoic principles aren't philosophy — they're survival skills.",
    featured: true,
    url: "https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    note: "Play iterated games with iterated people. This book crystallized what I'd been doing intuitively for years — working consistently in the same industries, with the same people, letting compound returns do their work. A universal truth.",
    featured: true,
    url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/1544514212",
  },
  {
    title: "Elon Musk",
    author: "Walter Isaacson",
    note: "Having worked on the Tesla Gigafactory, this one hit different. First-principles thinking, relentless execution, and the willingness to do what others think is impossible. Whether you agree with the man or not, the intensity is instructive.",
    featured: true,
    url: "https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281",
  },
  {
    title: "Failure Is Not an Option",
    author: "Gene Kranz",
    note: "Mission control mindset applied to everything. When you're responsible for systems where failure means real consequences — whether it's a shredder or a data center — this book teaches you what accountability actually looks like.",
    featured: true,
    url: "https://www.amazon.com/Failure-Not-Option-Mission-Control/dp/1439148813",
  },
  {
    title: "The Cuckoo's Egg",
    author: "Clifford Stoll",
    note: "The true story of an astronomer-turned-detective tracking a hacker through early computer networks using nothing but curiosity and persistence. Pure first-principles troubleshooting — the same mindset that makes you good at debugging PLCs makes you good at hunting hackers across terminals.",
    featured: true,
    url: "https://www.amazon.com/Cuckoos-Egg-Tracking-Computer-Espionage/dp/1416507787",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    note: "Pure problem-solving joy. An engineer alone in space, working through impossible challenges with nothing but first principles and creativity. If that's not a metaphor for entrepreneurship, I don't know what is.",
    featured: true,
    url: "https://www.amazon.com/Project-Hail-Mary-Andy-Weir/dp/0593135229",
  },
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    note: "Expanded my thinking about systems, game theory, and civilizational-scale challenges. The dark forest theory is the prisoner's dilemma writ large — and it changed how I think about competition and cooperation.",
    featured: true,
    url: "https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    note: "Understanding where we came from to understand where we're going. The idea that shared narratives are what hold societies together applies directly to building companies and cultures.",
    featured: true,
    url: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117",
  },
  {
    title: "The WEIRDest People in the World",
    author: "Joseph Henrich",
    note: "Why Western societies think and operate the way they do. Understanding the cultural and psychological foundations of the markets you operate in is an underrated competitive advantage.",
    featured: true,
    url: "https://www.amazon.com/WEIRDest-People-World-Psychologically-Particularly/dp/0374173222",
  },
  {
    title: "Lights Out",
    author: "Thomas Gryta & Ted Mann",
    note: "The cautionary tale of how GE went from manufacturing powerhouse to financial failure through misguided policy. A masterclass in what happens when a company abandons its engineering roots for financial engineering. Every builder should read this as a warning.",
    featured: true,
    url: "https://www.amazon.com/Lights-Out-Pride-Delusion-Americas/dp/0358250412",
  },
  {
    title: "12 Rules for Life",
    author: "Jordan Peterson",
    note: "Personal responsibility, meaning, and the importance of getting your own house in order before trying to change the world. Practical philosophy for navigating chaos — which is most of what entrepreneurship actually is.",
    featured: true,
    url: "https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021",
  },
];

export default function ReadingPage() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
          >
            heyelab<span className="text-accent">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-sm font-mono text-accent mb-2 tracking-wider uppercase">
            Reading List
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Books that shaped me
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            The best ideas come from cross-pollinating knowledge across domains.
            These are the books that have had the biggest impact on how I think
            about engineering, business, relationships, and life.
          </p>
        </div>
      </section>

      {/* Library photo */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-bg-card border border-border overflow-hidden">
            <div className="aspect-[16/9] flex items-center justify-center text-text-muted">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-3 text-border-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <p className="text-xs font-mono text-text-muted">library-photo.jpg</p>
                <p className="text-sm text-text-secondary mt-2">
                  My personal library
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-text-muted mt-4 font-mono">
            Drop your library photo into{" "}
            <code className="text-accent">/public/images/library-photo.jpg</code>
          </p>
        </div>
      </section>

      {/* Placeholder for featured books */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-mono text-accent mb-8 tracking-wider uppercase">
            Most Impactful Books
          </h2>

          {featuredBooks.length === 0 ? (
            <div className="p-12 rounded-2xl bg-bg-card border border-border border-dashed text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-border-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-text-secondary mb-2">
                Waiting for your picks
              </p>
              <p className="text-sm text-text-muted">
                Share your library photo and tell me which books were most
                powerful in your journey — I&apos;ll feature them here with your
                notes on why they mattered.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {featuredBooks.map((book, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-xl bg-bg-card border border-border hover:border-border-accent transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-14 rounded bg-accent/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{book.title}</h3>
                      <p className="text-sm text-accent mb-3">{book.author}</p>
                      <p className="text-text-secondary leading-relaxed mb-3">
                        {book.note}
                      </p>
                      <a
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-highlight hover:text-highlight/80 font-medium transition-colors"
                      >
                        View on Amazon
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back link */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-accent hover:border-accent/50 text-text-secondary hover:text-text-primary rounded-lg transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back Home
          </Link>
        </div>
      </section>
    </div>
  );
}
