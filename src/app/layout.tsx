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
  title: "Emmanuel Kawekwune | Software Developer & Full Stack Engineer",
  description:
    "Showcasing the projects and skills of Emmanuel Kawekwune, a passionate software developer specializing in React.js, Next.js, Node.js, and modern web technologies. Explore portfolio, experience, and contact info.",
  openGraph: {
    title: "Emmanuel Kawekwune | Software Developer Portfolio",
    description:
      "A modern developer portfolio built with Next.js. Explore projects, skills, and professional experience of Emmanuel Kawekwune.",
    url: "https://kawekwune-emmanuel.vercel.app",
    siteName: "Emmanuel Kawekwune Portfolio",
    images: [
      {
        url: "https://kawekwune-emmanuel.vercel.app/first.png", // <- Use your image name and URL here
        width: 1200,
        height: 630,
        alt: "Emmanuel Kawekwune Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Kawekwune | Software Developer Portfolio",
    description:
      "A modern portfolio built with Next.js, featuring the work of Emmanuel Kawekwune, a full stack web developer.",
    images: ["https://kawekwune-emmanuel.vercel.app/first.png"], // <- Same here
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
