import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Melasma Logger Privacy Policy - Heyelab",
  description:
    "Privacy policy for Melasma Logger, a local-first iOS tracking app.",
};

const sections = [
  {
    title: "Information Stored By The App",
    body: "Melasma Logger may store daily photos, routine completion, medication, topical, stack and peptide notes, exposure notes, skin-signal scores, reminder settings, optional weather snapshots, approximate weather lookup location, exported CSV/review-package files, and optional private-backend connection settings on your device.",
  },
  {
    title: "Information Collected By The Developer",
    body: "Melasma Logger does not create an account, does not send your logs to Heyelab servers by default, does not use analytics, and does not include third-party advertising or tracking SDKs.",
  },
  {
    title: "Sharing And Export",
    body: "You may manually export a CSV or review package using the iOS Share sheet. When you export or share that file, your chosen destination controls the copy you send.",
  },
  {
    title: "Optional Private Backend Upload",
    body: "If you configure a private backend endpoint in Settings, Melasma Logger can upload a review package to that endpoint on demand or after a daily photo. The endpoint you provide controls the uploaded copy. Heyelab does not receive these uploads unless you intentionally configure a Heyelab-controlled destination.",
  },
  {
    title: "Photos And Camera Access",
    body: "Camera and photo-library access are used only so you can capture or import a daily photo. Imported or captured photos are stored locally by the app unless you export or upload a review package.",
  },
  {
    title: "Location And Weather Context",
    body: "If weather capture is enabled, Melasma Logger may ask for location while you use the app. Rounded approximate coordinates are sent to Open-Meteo to request weather, UV, air quality, and available pollen data. Heyelab does not receive this request or store your location.",
  },
  {
    title: "Local Network Access",
    body: "If you configure a private backend on your local network, iOS may ask for local network access so the app can reach that server.",
  },
  {
    title: "Notifications",
    body: "If enabled, notifications are scheduled locally on your device for daily check-ins and stack reminders.",
  },
  {
    title: "Medical Boundary",
    body: "Melasma Logger is for personal tracking and adherence only. It does not diagnose, prescribe, recommend treatments, or replace care from a qualified clinician.",
  },
];

export default function MelasmaLoggerPrivacyPage() {
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
            href="/melasma-logger/support"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Support
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">
          Melasma Logger
        </p>
        <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-12 max-w-2xl text-text-secondary">
          Effective date: April 24, 2026. Melasma Logger is a local-first
          personal tracking app. It is designed to keep photos and logs on your
          device unless you choose to export them or configure a private backend
          endpoint.
        </p>

        <div className="space-y-10 text-text-secondary">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-semibold text-text-primary">
                {section.title}
              </h2>
              <p className="leading-relaxed">{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-text-primary">
              Contact
            </h2>
            <p className="leading-relaxed">
              For support, visit{" "}
              <Link
                href="/melasma-logger/support"
                className="text-accent transition-colors hover:text-accent-secondary"
              >
                Melasma Logger Support
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
