// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Load DM Sans font with weights and variable
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Kawekwune | Full Stack Developer, React & Next.js Expert in Lagos State, Nigeria",
  description:
    "Emmanuel Kawekwune is a highly skilled Full Stack Software Developer with 3+ years experience, specializing in React.js, Next.js, Node.js, and modern web technologies. Browse projects, experience, and contact info.",
  keywords: [
    "Emmanuel Kawekwune",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Node.js",
    "Web Developer Nigeria",
    "JavaScript Engineer",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer"
  ],
  alternates: {
    canonical: "https://kawekwune-emmanuel.vercel.app",
  },
  openGraph: {
    title: "Emmanuel Kawekwune | Full Stack Developer Portfolio",
    description:
      "Discover the portfolio, projects, and skills of Emmanuel Kawekwune, a top React.js and Next.js engineer from Lagos State, Nigeria.",
    url: "https://kawekwune-emmanuel.vercel.app",
    siteName: "Emmanuel Kawekwune Portfolio",
    images: [
      {
        url: "https://kawekwune-emmanuel.vercel.app/first.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Emmanuel Kawekwune, Full Stack Developer in Lagos State, Nigeria",
      },
    ],
    type: "website",
    locale: "en_NG", // English/Nigeria
  },
  twitter: {
    card: "summary_large_image",
    site: "@rhealnuel", // (optional) your Twitter handle
    creator: "@rhealnuel", // (optional)
    title: "Emmanuel Kawekwune | Full Stack Developer Portfolio",
    description:
      "See the work and experience of Emmanuel Kawekwune, an expert in React.js, Next.js, and Node.js.",
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
       <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={`${dmSans.variable} w-full antialiased`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
