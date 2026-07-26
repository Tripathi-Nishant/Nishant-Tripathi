import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";
import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { NekoCat } from "@/components/neko-cat";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ojasvi Marwari - Full Stack Developer | Portfolio",
  description:
    "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "India",
    "Ojasvi Marwari",
    "Stealth Startup",
    "Founding Engineer",
    "Enable Hackathon",
    "BitBash",
    "MUJ",
    "NIT",
    "KIET Group of institution",
    "Best Portfolio",
    "Minimalist Portfolio",
    "Ojasvi Marwari",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Ojasvi Marwari" }],
  creator: "Ojasvi Marwari",
  publisher: "Ojasvi Marwari",
  generator: "Next.js",
  applicationName: "Ojasvi Marwari Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ojasvi Marwari Portfolio",
    title: "Ojasvi Marwari - Full Stack Developer",
    description:
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
    images: [
      {
        url: "/data-engineering-semantics.png",
        width: 1536,
        height: 1024,
        alt: "Ojasvi Marwari - Full Stack Developer Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon?v=1",
    shortcut: "/favicon?v=1",
    apple: "/favicon?v=1",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "ojasvi.0108@gmail.com",
    "contact:phone_number": "+91-9369215072",
    "contact:country_name": "India",
    "contact:region": "Ghaziabad",
    "contact:locality": "Ghaziabad",
    "og:image:width": "1536",
    "og:image:height": "1024",
    "og:image:type": "image/png",
    "og:image:alt": "Ojasvi Marwari - Full Stack Developer Portfolio",
    "og:site_name": "Ojasvi Marwari Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": siteUrl,
    "og:title": "Ojasvi Marwari - Full Stack Developer",
    "og:description":
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
    "og:image": "/data-engineering-semantics.png",
    "whatsapp:image": "/data-engineering-semantics.png",
    "whatsapp:title": "Ojasvi Marwari - Full Stack Developer",
    "whatsapp:description":
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisSmoothScroll />
            <NekoCat />
            <div className="min-h-dvh">
              {children}
            </div>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
