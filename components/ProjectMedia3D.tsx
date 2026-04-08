"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectAccent } from "@/lib/projects";

type ProjectMedia3DProps = {
  image: string;
  alt: string;
  active: boolean;
  accent: ProjectAccent;
  title: string;
  status: string;
  techStack: string[];
};

const accentMap: Record<ProjectAccent, string> = {
  cyan: "from-cyan-200/42 via-sky-300/18 to-transparent",
  amber: "from-violet-200/36 via-fuchsia-300/16 to-transparent",
  emerald: "from-cyan-200/34 via-teal-200/16 to-transparent",
  violet: "from-violet-200/42 via-fuchsia-300/18 to-transparent",
};

export function ProjectMedia3D({
  image,
  alt,
  active,
  accent,
  title,
  status,
  techStack,
}: ProjectMedia3DProps) {
  return (
    <motion.div
      className="showroom-media"
      animate={{
        rotateX: active ? 0 : 7,
        rotateY: active ? 0 : -10,
        y: active ? -6 : 8,
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`showroom-media-glow bg-gradient-to-br ${accentMap[accent]}`} />
      <div className="showroom-media-backplate" />
      <div className="showroom-media-shell">
        <div className="showroom-media-topline">
          <span>{title}</span>
          <span>{status}</span>
        </div>

        <div className="showroom-media-frame">
          <div className="showroom-media-image-wrap">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 80vw, 36rem"
              className="object-cover brightness-[1.04] contrast-[1.04] saturate-[1.03]"
              priority={active}
            />
          </div>
          {active ? (
            <motion.div
              className="showroom-media-sweep"
              initial={{ opacity: 0, x: "-120%" }}
              animate={{ opacity: [0, 0.32, 0], x: ["-120%", "25%", "140%"] }}
              transition={{
                duration: 3.6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1.8,
              }}
            />
          ) : null}
          <div className="showroom-media-reflection" />
        </div>

        <div className="showroom-media-meta">
          {techStack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="showroom-media-shadow" />
    </motion.div>
  );
}
