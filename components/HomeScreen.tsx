"use client";

import Link from "next/link";
import { useState } from "react";
import { ProjectShowroom } from "@/components/ProjectShowroom";
import type { Project } from "@/lib/projects";

type HomeScreenProps = {
  projects: Project[];
};

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export function HomeScreen({ projects }: HomeScreenProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (nextIndex: number) => {
    setActiveIndex(wrapIndex(nextIndex, projects.length));
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrevious = () => goTo(activeIndex - 1);

  return (
    <main className="home-screen">
      <div className="home-ambient-grid" />
      <div className="home-ambient home-ambient-cyan" />
      <div className="home-ambient home-ambient-amber" />

      <header className="identity-strip">
        <div className="identity-strip-name">Jack Ziegler</div>
        <div className="identity-strip-links">
          <Link
            href="https://www.linkedin.com/in/jackziegler"
            target="_blank"
            rel="noopener noreferrer"
            className="identity-link"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/wumby"
            target="_blank"
            rel="noopener noreferrer"
            className="identity-link"
          >
            GitHub
          </Link>
        </div>
      </header>

      <ProjectShowroom
        projects={projects}
        activeIndex={activeIndex}
        onPrevious={goPrevious}
        onNext={goNext}
        onGoTo={goTo}
      />
    </main>
  );
}
