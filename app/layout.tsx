import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "André Cauê | Front-end Developer & UI Engineer",
  description:
    "Portfólio de André Cauê. Transformo ideias em experiências digitais rápidas, belas e escaláveis usando React, Next.js e TypeScript.",
  keywords: [
    "Front-end",
    "Developer",
    "Engenheiro de UI",
    "React",
    "Next.js",
    "TypeScript",
    "André Cauê",
  ],
  openGraph: {
    title: "André Cauê | Front-end Developer",
    description:
      "Portfólio de André Cauê. Especializado em React, Next.js e design systems.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
