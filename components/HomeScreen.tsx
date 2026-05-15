"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

type HomeScreenProps = {
  projects: Project[];
};

export function HomeScreen({ projects }: HomeScreenProps) {
  return (
    <main className="home-screen">
      <div className="home-ambient-grid" />
      <div className="home-ambient home-ambient-cyan" />
      <div className="home-ambient home-ambient-amber" />

      <header className="identity-strip">
        <Link
          href="https://www.linkedin.com/in/jack-ziegler-350447176/"
          target="_blank"
          rel="noopener noreferrer"
          className="identity-link"
        >
          LinkedIn
        </Link>
        <div className="identity-strip-copy">
          <div className="identity-strip-name">Jack Ziegler</div>
          <p className="identity-strip-subtitle">My projects</p>
        </div>
        <Link
          href="https://github.com/wumby"
          target="_blank"
          rel="noopener noreferrer"
          className="identity-link"
        >
          GitHub
        </Link>
      </header>

      <motion.div
        className="project-grid"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </main>
  );
}
