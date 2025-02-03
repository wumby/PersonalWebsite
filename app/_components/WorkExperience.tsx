import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { Timeline } from "@/components/TimeLine";
import { experienceData } from "../data";

const WorkExperience = () => {
  return (
    <div className="w-full overflow-hidden">
      <SectionHeader text1="Work" text2="Experience" />
      <Timeline data={experienceData} />
    </div>
  );
};

export default WorkExperience;
