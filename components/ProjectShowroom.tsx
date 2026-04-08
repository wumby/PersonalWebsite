"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { ProjectMedia3D } from "@/components/ProjectMedia3D";
import type { Project } from "@/lib/projects";

type ProjectShowroomProps = {
  projects: Project[];
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
};

type Slot = {
  project: Project;
  offset: number;
  index: number;
};

const slotTransforms = {
  "-2": {
    x: "-94%",
    scale: 0.68,
    rotateY: 42,
    opacity: 0.11,
    zIndex: 1,
    filter: "blur(5px)",
  },
  "-1": {
    x: "-71%",
    scale: 0.83,
    rotateY: 28,
    opacity: 0.5,
    zIndex: 3,
    filter: "blur(1.2px)",
  },
  "0": {
    x: "-50%",
    scale: 1.05,
    rotateY: 0,
    opacity: 1,
    zIndex: 8,
    filter: "blur(0px)",
  },
  "1": {
    x: "-29%",
    scale: 0.83,
    rotateY: -28,
    opacity: 0.5,
    zIndex: 3,
    filter: "blur(1.2px)",
  },
  "2": {
    x: "-6%",
    scale: 0.68,
    rotateY: -42,
    opacity: 0.11,
    zIndex: 1,
    filter: "blur(5px)",
  },
} as const;

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export function ProjectShowroom({
  projects,
  activeIndex,
  onPrevious,
  onNext,
  onGoTo,
}: ProjectShowroomProps) {
  const wheelLockRef = useRef(false);
  const activeProject = projects[activeIndex];

  const visibleProjects = useMemo<Slot[]>(() => {
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = wrapIndex(activeIndex + offset, projects.length);

      return {
        project: projects[index],
        offset,
        index,
      };
    });
  }, [activeIndex, projects]);

  return (
    <section className="showroom-shell" aria-label="Project showroom">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.slug}
          className="showroom-floating-info"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="showroom-info-bridge" />
          <h2 className="showroom-project-title">{activeProject.title}</h2>
          <p className="showroom-project-description">
            {activeProject.shortDescription}
          </p>
          <div className="showroom-stack">
            {activeProject.techStack.slice(0, 3).map((item) => (
              <span key={item} className="showroom-tech-pill">
                {item}
              </span>
            ))}
          </div>
          <div className="showroom-actions">
            {activeProject.liveUrl ? (
              <Link
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="home-primary-action"
              >
                Visit
              </Link>
            ) : null}
            <Link
              href={activeProject.detailsUrl}
              className="home-secondary-action"
            >
              View More
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="showroom-stage-wrap">
        <div
          className="showroom-stage"
          onWheel={(event) => {
            if (wheelLockRef.current || Math.abs(event.deltaY) < 18) {
              return;
            }

            wheelLockRef.current = true;

            if (event.deltaY > 0) {
              onNext();
            } else {
              onPrevious();
            }

            window.setTimeout(() => {
              wheelLockRef.current = false;
            }, 380);
          }}
        >
          <div className="showroom-glow" />
          <div className="showroom-floor" />

          {visibleProjects.map(({ project, offset, index }) => {
            const transform =
              slotTransforms[String(offset) as keyof typeof slotTransforms];
            const isActive = offset === 0;

            return (
              <motion.article
                key={`${project.slug}-${index}-${offset}`}
                className={isActive ? "showroom-card active" : "showroom-card"}
                initial={false}
                animate={{
                  x: transform.x,
                  scale: transform.scale,
                  rotateY: transform.rotateY,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex,
                  filter: transform.filter,
                }}
                transition={{ type: "spring", stiffness: 170, damping: 22 }}
                style={{
                  left: "50%",
                  transformStyle: "preserve-3d",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="showroom-card-rim" />

                <div className="showroom-card-media">
                  <ProjectMedia3D
                    image={project.image}
                    alt={project.title}
                    active={isActive}
                    accent={project.accent}
                    title={project.title}
                    status={project.status}
                    techStack={project.techStack}
                  />
                </div>

                {!isActive ? (
                  <div className="showroom-card-label">
                    <span>{project.title}</span>
                  </div>
                ) : null}
              </motion.article>
            );
          })}

          <motion.div
            className="showroom-swipe-layer"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.x <= -60) {
                onNext();
              } else if (info.offset.x >= 60) {
                onPrevious();
              }
            }}
          />
        </div>

        <div className="showroom-controls showroom-controls-bottom">
          <button
            type="button"
            className="showroom-arrow"
            onClick={onPrevious}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="showroom-pagination">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                className={
                  index === activeIndex ? "showroom-dot active" : "showroom-dot"
                }
                onClick={() => onGoTo(index)}
                aria-label={`Go to ${project.title}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="showroom-arrow"
            onClick={onNext}
            aria-label="Next project"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
