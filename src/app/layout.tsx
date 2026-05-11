import type { Metadata } from "next";
import "./globals.css";

const description =
  "Heyelab is a private AI lab helping small and medium businesses put AI to work — on their own hardware, on their own premises. No data sent to the cloud.";

export const metadata: Metadata = {
  title: "Heyelab — Private AI for small & medium businesses",
  description,
  openGraph: {
    title: "Heyelab — Private AI for small & medium businesses",
    description,
    url: "https://www.heyelab.com",
    siteName: "Heyelab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
