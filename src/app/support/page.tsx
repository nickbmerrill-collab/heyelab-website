import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — 2M OS — Heyelab",
  description: "Support for 2M OS — the internal sales operations app for 2M Electrical Representatives.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 font-sans">
      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-sm text-gray-500 mb-8">2M OS &mdash; iOS, iPadOS, macOS, tvOS</p>

      <section className="prose prose-gray max-w-none space-y-6">
        <p>
          2M OS is the internal sales-operations app for staff of 2M Electrical
          Representatives and 2M Lighting &amp; Controls. If you need help
          using the App, reach out using the channels below.
        </p>

        <h2 className="text-xl font-semibold mt-8">Get in touch</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:nick@2meli.com"
              className="text-blue-600 hover:underline"
            >
              nick@2meli.com
            </a>
          </li>
          <li>Response time: typically within one business day.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Common topics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Sign-in problems</strong> &mdash; if your credentials are
            not working, contact the email above to have your account reset.
          </li>
          <li>
            <strong>App stuck on a loading indicator</strong> &mdash; confirm
            you have an active internet connection. The App requires access to
            our public backend at{" "}
            <a
              href="https://emma.heyelab.com"
              className="text-blue-600 hover:underline"
            >
              emma.heyelab.com
            </a>
            .
          </li>
          <li>
            <strong>Notifications not appearing</strong> &mdash; check your
            device&rsquo;s Notification settings for 2M OS and ensure
            notifications are enabled for the App.
          </li>
          <li>
            <strong>Reporting bugs or requesting features</strong> &mdash;
            email the address above with a short description and, if possible,
            a screenshot.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Privacy</h2>
        <p>
          Our Privacy Policy is available at{" "}
          <a
            href="/privacy"
            className="text-blue-600 hover:underline"
          >
            heyelab.com/privacy
          </a>
          .
        </p>
      </section>
    </main>
  );
}
