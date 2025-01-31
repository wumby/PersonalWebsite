import Contact from "@/app/_components/Contact/Contact";
import './globals.css'
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
import Projects from "./_components/Projects";
import Testimonials from "./_components/Testimonials";
import WorkExperience from "./_components/WorkExperience";
import { navItems } from "./data";
export default function Home() {
  

  return (
    <main className="page-container">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems}></Navbar>
        <section id="hero" className="section-container h-screen">
          <Hero />
        </section>
        <section id="projects" className="section-container">
          <Projects />
        </section>
        <section id="testimonials" className="section-container h-screen">
          <Testimonials />
        </section>
        <section id="experience" className="section-container">
          <WorkExperience />
        </section>
        <section id="contact" className="section-container h-screen">
          <Contact />
        </section>
      </div>
    </main>
  );
}
