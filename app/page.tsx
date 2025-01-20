

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button, MovingBorder } from "@/components/ui/Border";
import WorkExperience from "@/components/WorkExperience";
import { html } from "framer-motion/client";
import { FaBriefcase, FaHome, FaMoon, FaSun } from "react-icons/fa";

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '#hero',
      icon: <FaHome />
    },
    {
      name: 'Experience',
      link: '#work-experience',
      icon: <FaBriefcase />
    },
    {
      icon: <FaSun />,
      theme: 'dark'
    }
  ]

  return (

    <main className="relative overflow-x-hidden dark:bg-black-100 bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems}></Navbar>

        <section id="hero" className="py-20 w-full h-screen">
          <Hero />
        </section>
        <section id="work-experience" className="py-20 w-full">
          <WorkExperience />
        </section>
      </div>






    </main>
  );
}
