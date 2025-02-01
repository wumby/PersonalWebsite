import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { Timeline } from "@/components/TimeLine";

const WorkExperience =() => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⏩" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "🎭" },
    { name: "GraphQL", icon: "🔮" },
    { name: "Firebase", icon: "🔥" }
  ];
  const data = [
    {
      title: "Oct 2024 - Present",
      content: (
        <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-normal mb-8 cursor-pointer">
            Senior Software Engineer - USWFS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Oct 2024",
      content: (
        <>
        <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-normal mb-8">
            Software Developer - USWFS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Tested internal applications and wrote tests for 25+ React Components. Utilized Vitest and React Testing 
            Library to cover all user interaction cases
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implemented new find and replace component that worked across all components of the application.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           Optimized API calls utilizing GraphQL and improved speed by 5X.
          </p>
          <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Tech Stack</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techStack.map((tech) => (
          <li
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <span className="text-4xl">{tech.icon}</span>
            <span className="mt-2 text-sm font-semibold">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
          
</div>
</>
        
      ),
    },
    {
      title: "May 2022 - Jan 2024",
      content: (
        <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-3xl font-normal mb-8">
           Full Stack Engineer - Cognizant
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <SectionHeader text1='Work' text2='Experience'/>
      <Timeline data={data} />
    </div>
  );
}

export default WorkExperience;
