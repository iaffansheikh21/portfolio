import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Muhammad Affan Sheikh",
  description:
    "Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Building fast, scalable, and user-focused digital experiences.",

  keywords: [
    "Muhammad Affan Sheikh",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
    "MERN Stack Developer",
    "MERN Stack AI Integrated Developer",
  ],

  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/favicon-180x180.png",
  },

  // ✅ OPEN GRAPH SETUP 
  openGraph: {
    title: "Muhammad Affan Sheikh — Full Stack Developer",
    description:
      "A modern portfolio showcasing expertise in React, Next.js, TypeScript, Tailwind, and full-stack development.",
    url: "https://dev-affan-portfolio.vercel.app/",
    siteName: "Muhammad Affan Sheikh Portfolio",
    images: [
      {
        url: "/OG.png", // Relative path from public folder
        width: 1200,
        height: 630,
        alt: "Muhammad Affan Sheikh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ TWITTER CARD SETUP
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Affan Sheikh — Full Stack Developer",
    description:
      "A modern portfolio showcasing expertise in React, Next.js, TypeScript, Tailwind, and full-stack development.",
    images: ["/OG.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://dev-affan-portfolio.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-serif: ${spaceGrotesk.variable};
}
        `}</style>
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
