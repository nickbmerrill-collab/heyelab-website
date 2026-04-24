import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Melasma Logger Support - Heyelab",
  description:
    "Support for Melasma Logger, a local-first iOS app for daily photos, routines, exposure context, and stack reminders.",
};

const questions = [
  {
    question: "Where is my data stored?",
    answer:
      "Photos and logs stay on your device unless you export a CSV/review package or configure a private backend endpoint.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. Open Settings, prepare a CSV or review package, then share it with the destination you choose.",
  },
  {
    question: "Can I upload to my own server?",
    answer:
      "Yes. Open Settings, enable Private Backend, and enter your endpoint and token. Use HTTPS unless you are testing on a private local network.",
  },
  {
    question: "Why does weather ask for location?",
    answer:
      "If enabled, weather capture uses location while you use the app and sends rounded approximate coordinates to Open-Meteo for weather, UV, air quality, and available pollen data.",
  },
  {
    question: "Does the app provide medical advice?",
    answer:
      "No. It is for personal tracking only and does not diagnose or recommend treatment.",
  },
];

export default function MelasmaLoggerSupportPage() {
  return (
    <main className="min-h-screen grid-bg">
      <nav className="border-b border-border bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-text-primary transition-colors hover:text-accent"
          >
            heyelab<span className="text-accent">.</span>
          </Link>
          <Link
            href="/melasma-logger/privacy"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Privacy
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">
          Melasma Logger
        </p>
        <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
          Support
        </h1>
        <p className="mb-12 max-w-2xl text-text-secondary">
          Melasma Logger is a local-first iPhone app for daily photos, optional
          weather context, routines, exposure notes, skin-signal scoring, stack
          scheduling, and reminders.
        </p>

        <div className="space-y-10 text-text-secondary">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-text-primary">
              Common Questions
            </h2>
            <div className="space-y-6">
              {questions.map((item) => (
                <div key={item.question}>
                  <h3 className="mb-1 font-semibold text-text-primary">
                    {item.question}
                  </h3>
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-text-primary">
              Before Contacting Support
            </h2>
            <p className="leading-relaxed">
              Check that camera, photo-library, location, notification, and
              local network permissions are enabled in iOS Settings if those
              features are not working.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-text-primary">
              Privacy
            </h2>
            <p className="leading-relaxed">
              Read the{" "}
              <Link
                href="/melasma-logger/privacy"
                className="text-accent transition-colors hover:text-accent-secondary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
