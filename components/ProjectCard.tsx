"use client";

import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./3dCard";
import { AnimatedTooltip } from "./AnimatedTooltip/AnimatedTooltip";

const ProjectCard = () => {
  const people = [
    {
      id: 1,
      name: "NextJS",
      image:
        "/nextTech.svg",
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
      name: "Prisma",
      image:
        "/prisma.svg",
    },
    {
      id: 6,
      name: "PostgreSQL",
      image:
        "/postgres.svg",
    },
  ];
  return (
    <CardContainer className=" dark:shadow-[0_20px_50px_rgba(109,40,217)]">
      <div className="absolute inset-0 -z-10 blur-xl rounded-lg opacity-75 dark:hidden block"
        style={{
          background: "linear-gradient(45deg, red, blue, green, yellow)"
        }}
      />
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto sm:w-[30rem] h-auto p-6  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Maxd
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A fitness everything application that everyone needs to be using.
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
        <div className="flex items-center mt-20">
          <AnimatedTooltip items={people} />
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ProjectCard;
