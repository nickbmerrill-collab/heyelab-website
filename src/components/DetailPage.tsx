import Link from "next/link";
import GalleryImage from "@/components/GalleryImage";

interface DetailPageProps {
  name: string;
  role: string;
  period: string;
  metric?: string;
  metricLabel?: string;
  accentColor?: string;
  backHref: string;
  backLabel: string;
  overview: string;
  achievements: { title: string; description: string }[];
  challenges: { challenge: string; solution: string }[];
  processes: { title: string; description: string }[];
  lessons: string[];
  gallery: { src: string; caption: string }[];
  tags?: string[];
  pressLinks?: { label: string; url: string }[];
}

export default function DetailPage({
  name,
  role,
  period,
  metric,
  metricLabel,
  backHref,
  backLabel,
  overview,
  achievements,
  challenges,
  processes,
  lessons,
  gallery,
  tags,
  pressLinks,
}: DetailPageProps) {
  return (
    <div className="min-h-screen grid-bg">
      {/* Navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
          >
            heyelab<span className="text-accent">.</span>
          </Link>
          <Link
            href={backHref}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {backLabel}
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-sm font-mono text-accent mb-2 tracking-wider uppercase">
            {role}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
          <div className="flex items-center gap-6 text-text-secondary">
            <span className="font-mono text-sm">{period}</span>
            {metric && (
              <>
                <span className="text-border-accent">|</span>
                <span>
                  <span className="text-accent font-bold text-lg">{metric}</span>{" "}
                  <span className="text-sm text-text-muted">{metricLabel}</span>
                </span>
              </>
            )}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-bg-card border border-border rounded-full text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl bg-bg-card border border-border">
            <h2 className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
              Overview
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {overview}
            </p>
          </div>
        </div>
      </section>

      {/* Press Links */}
      {pressLinks && pressLinks.length > 0 && (
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {pressLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-card border border-border hover:border-accent/50 text-sm text-text-secondary hover:text-text-primary transition-all"
                >
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  {link.label}
                  <svg className="w-3 h-3 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-accent mb-8 tracking-wider uppercase">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-bg-card border border-border hover:border-border-accent transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{a.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed pl-11">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      {challenges.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-accent mb-8 tracking-wider uppercase">
              Challenges &amp; Solutions
            </h2>
            <div className="space-y-6">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-xl bg-bg-card border border-border"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">{c.challenge}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pl-9">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Processes */}
      {processes.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-accent mb-8 tracking-wider uppercase">
              Processes Implemented
            </h2>
            <div className="space-y-6">
              {processes.map((p, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-xl bg-bg-card border border-border hover:border-border-accent transition-colors"
                >
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                    <span className="text-accent font-mono text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed pl-9">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lessons Learned */}
      {lessons.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-8 md:p-12 rounded-2xl bg-bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px]" />
              <h2 className="text-sm font-mono text-accent mb-8 tracking-wider uppercase relative z-10">
                Lessons Learned
              </h2>
              <div className="space-y-6 relative z-10">
                {lessons.map((lesson, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-accent mt-3 shrink-0" />
                    <p className="text-text-secondary leading-relaxed italic">
                      &ldquo;{lesson}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-accent mb-8 tracking-wider uppercase">
              Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {gallery.map((photo, i) => (
                <div
                  key={i}
                  className={`group rounded-xl bg-bg-card border border-border overflow-hidden ${
                    i === 0 && gallery.length > 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <GalleryImage src={photo.src} caption={photo.caption} />
                  <div className="p-3 bg-bg-card">
                    <p className="text-sm text-text-secondary">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-accent hover:border-accent/50 text-text-secondary hover:text-text-primary rounded-lg transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {backLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
