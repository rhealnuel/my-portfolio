import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

export default function Home() {
  return (
   <div className="w-full ">
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <Experience/>
    <Work/>
    <Contact/>
   </div>
  );
}
