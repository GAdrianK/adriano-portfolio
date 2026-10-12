import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { siteConfig } from "@/content/site";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl ?? "http://localhost:3000"),
  ...(siteConfig.siteUrl
    ? {
        alternates: { canonical: "/" },
      }
    : {}),
  title: {
    default: `${siteConfig.name} — Carnet d’ingénierie IA, Vision & Langage`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} — Carnet de recherche`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: `${siteConfig.name} — Carnet d’ingénierie IA, Vision & Langage`,
    description: siteConfig.description,
    siteName: `${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Carnet d’ingénierie IA, Vision & Langage`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F3EDE2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
      >
        <div className="site-background" aria-hidden="true" />
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
