import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 2M OS — Heyelab",
  description:
    "Privacy policy for 2M OS — the internal sales operations app for 2M Electrical Representatives staff.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 font-sans">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: April 22, 2026
      </p>

      <section className="prose prose-gray max-w-none space-y-6">
        <p>
          This Privacy Policy applies to the <strong>2M OS</strong> family of
          applications (iOS, iPadOS, macOS, and tvOS) and the
          <em> emma.heyelab.com</em> web application (collectively, the
          &ldquo;App&rdquo;), all operated by 2M Electrical Representatives
          (&ldquo;2M&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </p>

        <h2 className="text-xl font-semibold mt-8">Who the App is for</h2>
        <p>
          2M OS is an internal sales-operations tool intended for use by
          authorized employees and contractors of 2M Electrical Representatives
          and 2M Lighting &amp; Controls. It is not a consumer-facing product.
          Access requires credentials issued by 2M.
        </p>

        <h2 className="text-xl font-semibold mt-8">Data we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account information:</strong> name, work email address,
            role, and authentication credentials, used to identify you within
            the App.
          </li>
          <li>
            <strong>App activity:</strong> the actions you take inside the App
            (quotes created, BOMs uploaded, AI-assistant conversations, tasks
            completed) so we can provide the service and improve it.
          </li>
          <li>
            <strong>Device identifiers:</strong> push-notification tokens and
            anonymous device identifiers used to deliver alerts to your
            device.
          </li>
          <li>
            <strong>Microphone audio</strong> (only when you explicitly start a
            voice note or meeting recording) for transcription and summary.
          </li>
          <li>
            <strong>Camera</strong> (only when you explicitly capture a
            photo) for project documentation and product identification.
          </li>
          <li>
            <strong>Calendar entries</strong> (only with your permission) for
            meeting and follow-up scheduling.
          </li>
          <li>
            <strong>Diagnostics:</strong> crash reports and performance metrics
            to keep the App working.
          </li>
        </ul>
        <p>
          We do not collect data for advertising, do not sell or rent your
          data, and do not track you across other companies&rsquo; apps and
          websites.
        </p>

        <h2 className="text-xl font-semibold mt-8">How we use your data</h2>
        <p>
          Data collected by the App is used solely to operate the App and
          support 2M&rsquo;s sales-operations workflow &mdash; for example,
          generating quotes, building bills of materials, scheduling
          follow-ups, and providing AI-assisted answers to product and
          customer questions.
        </p>

        <h2 className="text-xl font-semibold mt-8">Third-party services</h2>
        <p>
          The App uses the following service providers, each bound by their
          own confidentiality and data-protection terms:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Anthropic</strong> &mdash; processes prompts and returns
            AI-generated responses for the EMMA assistant. Conversation
            content is sent to Anthropic only when you interact with EMMA.
          </li>
          <li>
            <strong>Microsoft (Outlook / Microsoft Graph)</strong> &mdash; for
            authenticated users who connect their work mailbox, the App reads
            email metadata and content needed for the briefing and search
            features.
          </li>
          <li>
            <strong>Apple Push Notification Service</strong> &mdash; delivers
            push notifications to your device.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Data storage and security</h2>
        <p>
          Application data is stored on infrastructure operated by 2M
          Electrical Representatives. Connections between the App and our
          servers are encrypted using HTTPS / TLS. Authentication tokens are
          stored in the device keychain.
        </p>

        <h2 className="text-xl font-semibold mt-8">Data retention and deletion</h2>
        <p>
          Account data is retained for as long as your 2M account is active.
          When an employee or contractor relationship ends, account data is
          deactivated and removed from active systems within 30 days. To
          request deletion of your account, contact{" "}
          <a
            href="mailto:nick@2meli.com"
            className="text-blue-600 hover:underline"
          >
            nick@2meli.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8">Children</h2>
        <p>
          The App is not directed to children under 13 and we do not knowingly
          collect data from children.
        </p>

        <h2 className="text-xl font-semibold mt-8">Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be communicated to active users in-app or by email.
        </p>

        <h2 className="text-xl font-semibold mt-8">Contact</h2>
        <p>
          Questions about this policy or your data? Email{" "}
          <a
            href="mailto:nick@2meli.com"
            className="text-blue-600 hover:underline"
          >
            nick@2meli.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
