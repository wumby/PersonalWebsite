import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { MovingTestominials } from "@/components/MovingTestominials";

const Testimonials = () => {
  return (
    <div className="w-full h-full">
      <SectionHeader text1="Team" text2="Testimonials" />
      <div className="flex flex-col justify-evenly h-full">
        <div className="flex flex-col items-center">
          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative">
            <MovingTestominials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
