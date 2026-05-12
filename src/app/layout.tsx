import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Portfolio of Rafiq Harhash — Computer Science & Engineering student focused on Java, structured programming, UI design, and problem solving.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.vercel.app",
  ),
  title: {
    default: `${site.name} · ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Rafiq Harhash",
    "Computer Science",
    "Portfolio",
    "Java",
    "C++",
    "Web development",
    "Student developer",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: `${site.name} · Portfolio`,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Portfolio`,
    description,
    creator: "@rafeeqnusr",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/guardian-emblem.svg", type: "image/svg+xml" }],
    apple: [{ url: "/guardian-emblem.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.vercel.app",
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.social.twitter,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[var(--background)] font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#041016]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
