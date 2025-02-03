import TechScroller from "@/components/TechScroller";
import Image from "next/image";
import styles from "../_components/WorkExperience.module.css";

export const usfwsTechStack = [
  { src: ["/reactDark.svg", "/reactBlack.svg"], name: "React" },
  { src: ["/nextTech.svg", "/nextTechBlack.svg"], name: "Next.js" },
  { src: ["/mantine.svg", "/mantineBlack.svg"], name: "Mantine" },
  {
    src: ["/amazonwebservices.svg", "/amazonwebservicesBlack.svg"],
    name: "",
  },
  { src: ["/docker.svg", "/dockerBlack.svg"], name: "Docker" },
];
export const cognizantTechStack = [
  { src: ["/angular.svg", "/angularBlack.svg"], name: "Angular" },
  { src: ["/vitest.svg", "/vitestBlack.svg"], name: "Vitest" },
  { src: ["/java.svg", "/javaBlack.svg"], name: "Java" },
  {
    src: ["/typescript.svg", "/typescriptBlack.svg"],
    name: "TypeScript",
  },
  { src: ["/postgres.svg", "/postgresBlack.svg"], name: "PostgreSQL" },
];
export const experienceData = [
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
          Tested multiple applications and wrote tests for 50+ React Components
          using Vitest and React Testing Library.
        </p>
        <p className={`${styles["headings"]} dark:text-neutral-200`}>
          Optimized API calls utilizing GraphQL utilit and improved speed by 5X.
        </p>
        <p className={`${styles["headings"]} dark:text-neutral-200`}>
          Initiated and set up a new application using Docker Dev Containers,
          ensuring a consistent and reproducible development environment.
        </p>
        <p className={`${styles["headings"]} dark:text-neutral-200`}>
          Diagnosed and fixed critical production bugs in an internal
          application, ensuring a successful and timely deployment.
        </p>
        <p className={`${styles["headings"]} dark:text-neutral-200`}>
          Integrated AWS-based PR scanning tools to automate security and code
          quality checks during the development lifecycle.
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
          Designed and implemented a Micro Frontend (MFE) architecture using
          Angular and Webpack 5 Module Federation, enabling independent
          deployment of frontend modules.
        </p>
        <p className={`${styles["headings"]} dark:text-neutral-200`}>
          Established and maintained a 90%+ test coverage threshold across all
          Angular micro frontends, ensuring high reliability and stability.
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
