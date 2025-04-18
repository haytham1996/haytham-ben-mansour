import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haytham Ben Mansour | Fullstack Developer & Software Engineer",
  description:
    "Portfolio of Haytham Ben Mansour, a Fullstack JavaScript Developer and Software Engineer specializing in React, Next.js, and Node.js.",
  keywords: [
    "Haytham Ben Mansour",
    "Fullstack Developer",
    "Software Engineer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Haytham Ben Mansour" }],
  creator: "Haytham Ben Mansour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haytham-ben-mansour-si4f.vercel.app",
    title: "Haytham Ben Mansour | Fullstack Developer & Software Engineer",
    description:
      "Portfolio of Haytham Ben Mansour, a Fullstack JavaScript Developer and Software Engineer specializing in React, Next.js, and Node.js.",
    siteName: "Haytham Ben Mansour Portfolio",
    images: [
      {
        url: "https://haytham-ben-mansour-si4f.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haytham Ben Mansour - Fullstack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haytham Ben Mansour | Fullstack Developer & Software Engineer",
    description:
      "Portfolio of Haytham Ben Mansour, a Fullstack JavaScript Developer and Software Engineer specializing in React, Next.js, and Node.js.",
    images: ["https://haytham-ben-mansour-si4f.vercel.app/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://haytham-ben-mansour-si4f.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
