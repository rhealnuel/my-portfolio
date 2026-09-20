// src/app/page.tsx
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}