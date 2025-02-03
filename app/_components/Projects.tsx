import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { project1Data } from "../data";

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
        />
        <ProjectCard
          title={"Beanie Squad"}
          heading={"An application for the NBA 2k team Beanie Squad"}
          image={"/coming-soon.jpg"}
          tech={project1Data}
        />
      </div>
    </div>
  );
};

export default Projects;
