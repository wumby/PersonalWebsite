

import Hero from "@/components/Hero";
import Navbar1 from "@/components/Navbar";
import { Navbar } from "@/components/ui/Navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <FaHome />
    }
  ]
  
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar1></Navbar1>
      <Navbar navItems={navItems}></Navbar>
      
      <div className="max-w-7xl w-full">
      <Hero />
        
        
      </div>
      <div></div>
    </main>
  );
}
