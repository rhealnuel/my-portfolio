// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Kawekwune | IT Product Manager",
  description:
    "Emmanuel Kawekwune is a software engineer transitioning into Product Management. 3+ years building full-stack products with React, Next.js and Node.js, now focused on product strategy, discovery and delivery.",
  keywords: [
    "Emmanuel Kawekwune",
    "Product Manager",
    "Product Management",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Product Discovery",
    "Lagos Nigeria",
  ],
  alternates: {
    canonical: "https://kawekwune-emmanuel.vercel.app",
  },
  openGraph: {
    title: "Emmanuel Kawekwune | Product Manager",
    description:
      "Software engineer moving into Product Management — hands-on experience building real digital products with React, Next.js and Node.js.",
    url: "https://kawekwune-emmanuel.vercel.app",
    siteName: "Emmanuel Kawekwune",
    images: [
      {
        url: "https://kawekwune-emmanuel.vercel.app/first.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Kawekwune — Product Manager",
      },
    ],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rhealnuel",
    creator: "@rhealnuel",
    title: "Emmanuel Kawekwune | Product Manager",
    description:
      "Software engineer moving into Product Management — hands-on experience building real digital products.",
    images: ["https://kawekwune-emmanuel.vercel.app/first.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} w-full bg-paper text-ink antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}