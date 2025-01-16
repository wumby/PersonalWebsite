'use client';

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";

export default function Home() {
  
  const { setTheme } = useTheme()
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
      
      <div className="max-w-7xl w-full">
        <Hero />
        
      </div>
      <div><Navbar></Navbar></div>
    </main>
  );
}
