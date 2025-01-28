

import Contact from "@/app/_components/Contact/Contact";
import { FaBriefcase, FaFolderOpen, FaHome, FaPhone, FaSun, FaUserFriends } from "react-icons/fa";
import './globals.css'
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
import Projects from "./_components/Projects";
import Testimonials from "./_components/Testimonials";
import WorkExperience from "./_components/WorkExperience";
export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '#hero',
      icon: <FaHome />
    },
    {
      name: 'Projects',
      link: '#projects',
      icon: <FaFolderOpen />
    },
    {
      name: 'Testimonials',
      link: '#testimonials',
      icon: <FaUserFriends />
    },
    {
      name: 'Experience',
      link: '#experience',
      icon: <FaBriefcase />
    },


    {
      name: 'Contact',
      link: '#contact',
      icon: <FaPhone />
    },
    {
      icon: <FaSun />,
      isIcon: true
    }
  ]

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
        <section id="testimonials" className="section-container">
          <Testimonials />
        </section>
        <section id="experience" className="section-container">
          <WorkExperience />
        </section>
        <section id="contact" className="section-container">
          <Contact />
        </section>
      </div>
    </main>
  );
}
