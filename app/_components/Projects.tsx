import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { project1Data, project1Features, project2Data, project2Features } from "../data";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <SectionHeader text1="Recent" text2="Projects" />
      <div className="flex justify-center flex-wrap">
        <ProjectCard
          title={"Maxd"}
          heading={
            "A fitness everything application that everyone needs to be using."
          }
          image={"/coming-soon.jpg"}
          tech={project1Data}
          features={project1Features}
        />
        <Link href='https://beaniesquad.mom' target="_black" rel="noopener noreferrer">
          <ProjectCard
            title={"Beanie Squad"}
            heading={"An application for the NBA 2k team Beanie Squad." }
            image={"/beaniesquad.png"}
            tech={project2Data}
            url="https://beaniesquad.mom"
            features={project2Features}
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
