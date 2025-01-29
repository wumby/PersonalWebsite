"use client";

import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./3dCard";
import ShinyButton from "./ShinyButton";
import { AnimatedTooltip } from "./AnimatedTooltip/AnimatedTooltip";

const ProjectCard =() => {
  const people = [
    {
      id: 1,
      name: "NextJS",
      image:
        "/next.svg",
    },
    {
      id: 2,
      name: "React",
      image:
        "/react.svg",
    },
    {
      id: 3,
      name: "TypeScript",
      image:
        "/ts.svg",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      image:
        "/tail.svg",
    },
    {
      id: 5,
      name: "Sanity",
      image:
        "/next.svg",
    },
    {
      id: 6,
      name: "Dora",
      image:
        "/next.svg",
    },
  ];
  return (
    <CardContainer className="inter-var shadow-[0_20px_50px_rgba(109,40,217)]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Fitness Freaks
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          An all things fitness website for the fanatics
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/coming-soon.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
      <AnimatedTooltip items={people} />

          <ShinyButton text="Check it out" />
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ProjectCard;
