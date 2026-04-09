"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { ProjectMedia3D } from "@/components/ProjectMedia3D";
import type { Project } from "@/lib/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

type Slot = {
  project: Project;
  offset: number;
  index: number;
};

const slotTransforms = {
  "-2": {
    x: "-88%",
    scale: 0.76,
    rotateY: 35,
    opacity: 0.18,
    zIndex: 1,
    filter: "blur(3px)",
  },
  "-1": {
    x: "-66%",
    scale: 0.9,
    rotateY: 23,
    opacity: 0.62,
    zIndex: 3,
    filter: "blur(0.8px)",
  },
  "0": {
    x: "-50%",
    scale: 1,
    rotateY: 0,
    opacity: 1,
    zIndex: 8,
    filter: "blur(0px)",
  },
  "1": {
    x: "-34%",
    scale: 0.9,
    rotateY: -23,
    opacity: 0.62,
    zIndex: 3,
    filter: "blur(0.8px)",
  },
  "2": {
    x: "-12%",
    scale: 0.76,
    rotateY: -35,
    opacity: 0.18,
    zIndex: 1,
    filter: "blur(3px)",
  },
} as const;

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const goTo = (nextIndex: number) => {
    setActiveIndex(wrapIndex(nextIndex, projects.length));
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrevious = () => goTo(activeIndex - 1);

  return (
    <div className="content-frame carousel-shell">
      <div
        className="carousel-stage"
        onWheel={(event) => {
          if (wheelLockRef.current || Math.abs(event.deltaY) < 18) {
            return;
          }

          wheelLockRef.current = true;

          if (event.deltaY > 0) {
            goNext();
          } else {
            goPrevious();
          }

          window.setTimeout(() => {
            wheelLockRef.current = false;
          }, 420);
        }}
      >
        <div className="carousel-stage-glow" />
        <div className="carousel-floor" />

        {visibleProjects.map(({ project, offset, index }) => {
          const transform =
            slotTransforms[String(offset) as keyof typeof slotTransforms];
          const isActive = offset === 0;
          const isSide = Math.abs(offset) === 1;

          return (
            <motion.article
              key={`${project.slug}-${index}-${offset}`}
              className={
                isActive
                  ? "carousel-card is-active"
                  : isSide
                    ? "carousel-card is-side"
                    : "carousel-card is-far"
              }
              initial={false}
              animate={{
                x: transform.x,
                scale: transform.scale,
                rotateY: transform.rotateY,
                opacity: transform.opacity,
                zIndex: transform.zIndex,
                filter: transform.filter,
              }}
              transition={{ type: "spring", stiffness: 170, damping: 24 }}
              style={{
                left: "50%",
                transformStyle: "preserve-3d",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div className="carousel-card-rim" />

              <div className="carousel-card-media">
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

              <div className="carousel-card-shade" />
              {!isActive ? (
                <div className="carousel-side-caption">
                  <span>{project.title}</span>
                </div>
              ) : null}

              <AnimatePresence>
                {isActive ? (
                  <motion.div
                    key={project.slug}
                    className="carousel-card-editorial"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div className="carousel-card-copy">
                      <div className="carousel-card-meta">
                        <p className="carousel-card-kicker">{project.category}</p>
                        <span className="status-pill">{project.status}</span>
                      </div>
                      <h2 className="carousel-card-title">{project.title}</h2>
                      <p className="carousel-card-description">
                        {project.description}
                      </p>
                      <div className="carousel-card-stack">
                        {project.techStack.map((item) => (
                          <span key={item} className="pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="carousel-card-actions">
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="secondary-button"
                        >
                          Visit
                        </Link>
                      ) : null}
                      {project.githubUrl ? (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="secondary-button"
                        >
                          GitHub
                        </Link>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}

        <motion.div
          className="carousel-swipe-layer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            if (info.offset.x <= -70) {
              goNext();
            } else if (info.offset.x >= 70) {
              goPrevious();
            }
          }}
        />

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            onClick={goPrevious}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="carousel-status">
            <span className="carousel-status-index">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="carousel-dots">
              {projects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  className={
                    index === activeIndex
                      ? "carousel-dot active"
                      : "carousel-dot"
                  }
                  onClick={() => goTo(index)}
                  aria-label={`Go to ${project.title}`}
                />
              ))}
            </div>
            <span className="carousel-status-total">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="carousel-status-title">{activeProject.title}</div>
          <div className="carousel-dots">
            <button
              type="button"
              className="carousel-arrow"
              onClick={goNext}
              aria-label="Next project"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
