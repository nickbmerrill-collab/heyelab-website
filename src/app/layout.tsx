import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heyelab — Nick Merrill",
  description:
    "Engineer, entrepreneur, and builder. High-current power systems, electro-mechanical expertise, and venture building.",
  openGraph: {
    title: "Heyelab — Nick Merrill",
    description:
      "Engineer, entrepreneur, and builder. High-current power systems, electro-mechanical expertise, and venture building.",
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
