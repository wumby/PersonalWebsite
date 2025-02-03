"use client";

import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./3dCard";
import { AnimatedTooltip } from "./AnimatedTooltip";
interface ProjectCardProps {
  title: string;
  heading: string;
  image: string;
  tech: { id: number; name: string; image: string }[];
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <CardContainer className=" dark:shadow-[0_20px_50px_rgba(109,40,217)] mx-20">
      <div
        className="absolute inset-0 -z-10 blur-xl rounded-lg opacity-75 dark:hidden block "
        style={{
          background: "linear-gradient(45deg, red, blue, green, yellow)",
        }}
      />
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto sm:w-[30rem] h-[500px] p-6  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.heading}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center mt-20">
          <AnimatedTooltip items={props.tech} />
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
