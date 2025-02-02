import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import { Timeline } from "@/components/TimeLine";
import TechScroller from "@/components/TechScroller";
import Image from "next/image";
import styles from "./WorkExperience.module.css";

const WorkExperience = () => {
  const usfwsTechStack = [
    { src: ["/reactDark.svg", "/reactBlack.svg"], name: "React" },
    { src: ["/nextTech.svg", "/nextTechBlack.svg"], name: "Next.js" },
    { src: ["/mantine.svg", "/mantineBlack.svg"], name: "Mantine" },
    {
      src: ["/amazonwebservices.svg", "/amazonwebservicesBlack.svg"],
      name: "",
    },
    { src: ["/postgres.svg", "/postgresBlack.svg"], name: "PostgreSQL" },
  ];
  const cognizantTechStack = [
    { src: ["/reactDark.svg", "/reactBlack.svg"], name: "React" },
    { src: ["/nextTech.svg", "/nextTechBlack.svg"], name: "Next.js" },
    { src: ["/mantine.svg", "/mantineBlack.svg"], name: "Mantine" },
    {
      src: ["/amazonwebservices.svg", "/amazonwebservicesBlack.svg"],
      name: "",
    },
    { src: ["/postgres.svg", "/postgresBlack.svg"], name: "PostgreSQL" },
  ];
  const data = [
    {
      title: "Feb 2024 - Present",
      content: (
        <>
          <h1 className={`${styles["title"]} dark:text-neutral-200`}>
            Software Engineer - USWFS
          </h1>
          <p className={`${styles["headings"]} dark:text-neutral-200`}>
            Led the complete rewrite of IPaC from a grails app to modern Next.js
            and Java, improving performance, scalability, and maintainability.
          </p>
          <p className={`${styles["headings"]} dark:text-neutral-200`}>
            Tested internal applications and wrote tests for 25+ React
            Components using Vitest and React Testing Library.
          </p>
          <p className={`${styles["headings"]} dark:text-neutral-200`}>
            Optimized API calls utilizing GraphQL and improved speed by 5X.
          </p>
          <div className="grid grid-cols-1 gap-4 w-full">
            <Image
              src="/ipac.png"
              alt="startup template"
              width={480}
              height={480}
              className="rounded-lg "
            />
          </div>
          <TechScroller techStack={usfwsTechStack}></TechScroller>
        </>
      ),
    },
    {
      title: "Feb 2022 - Jan 2024",
      content: (
        <div>
          <h1 className={`${styles["title"]} dark:text-neutral-200`}>
            Full Stack Engineer - Cognizant
          </h1>
          <p className={`${styles["headings"]} dark:text-neutral-200`}>
            Front-End Lead developer on a project for equifax where we created
            pages for all taxforms.
          </p>
          <p className={`${styles["headings"]} dark:text-neutral-200`}>
            Worked with UX designers using FIGMA to design the most intuitive
            Taxform workflows.
          </p>
          <p className={`${styles["headings"]} dark:text-neutral-200`}>
            Optimized API calls utilizing GraphQL and improved speed by 5X.
          </p>
          <div className="grid grid-cols-1 gap-4 w-full">
            <Image
              src="/equifax.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg "
            />
          </div>
          <TechScroller techStack={cognizantTechStack} fast></TechScroller>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <SectionHeader text1="Work" text2="Experience" />
      <Timeline data={data} />
    </div>
  );
};

export default WorkExperience;
