

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button, MovingBorder } from "@/components/ui/Border";
import WorkExperience from "@/components/WorkExperience";
import { FaHome, FaMoon, FaSun } from "react-icons/fa";

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <FaHome />
    },
    {
      icon: <FaSun />,
      theme:'dark'
    }
  ]
  
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar navItems={navItems}></Navbar>
      
      
      <div className="max-w-7xl w-full">
      <Hero />
        <WorkExperience></WorkExperience>
        
      </div>
    </main>
  );
}
