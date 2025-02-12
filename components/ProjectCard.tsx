"use client";

import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "./3dCard";
import { AnimatedTooltip } from "./AnimatedTooltip";

interface ProjectCardProps {
  title: string;
  heading: string;
  image: string;
  url?: string;
  features: string[];
  tech: { id: number; name: string; image: string }[];
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <CardContainer className=" dark:shadow-[0_20px_50px_rgba(109,40,217)] mx-0 md:mx-20">
      <div
        className="absolute inset-0 -z-10 blur-xl rounded-lg opacity-75 dark:hidden block "
        style={{
          background: "linear-gradient(45deg, red, blue, green, yellow)",
        }}
      />
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto sm:w-[30rem] h-[550px] p-6  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white text-center w-full flex justify-center"
        >
          {props.title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full flex justify-center text-center"
        >
          {props.heading}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <ul className="list-disc list-inside">
            {props.features.map((f, i) => {
              return <li key={i}>{f}</li>;
            })}
          </ul>
          <Image
            src={props.image}
            height={500}
            width={500}
            className=" h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl mt-1"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <div className="flex items-center w-[100%] justify-start gap-2 z-[200]">
            <AnimatedTooltip items={props.tech} />
          </div>
          <div>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-md font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>View</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
