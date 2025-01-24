

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";
import { FaBriefcase, FaFolderOpen, FaHome, FaPhone, FaSun, FaUserFriends } from "react-icons/fa";

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
    <main className="relative overflow-x-hidden dark:bg-black-100 bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems}></Navbar>
        <section id="hero" className="py-20 w-full h-screen">
          <Hero />
        </section>
        <section id="projects" className="py-20 w-full">
          <Projects />
        </section>
        <section id="testimonials" className="py-20 w-full">
          <Testimonials />
        </section>
        <section id="experience" className="py-20 w-full">
          <WorkExperience />
        </section>
        <section id="contact" className="py-20 w-full">
          <Contact />
        </section>
      </div>
    </main>
  );
}
