"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project, ProjectAccent } from "@/lib/projects";

const accentMap: Record<ProjectAccent, { bar: string; dot: string }> = {
  emerald: {
    bar: "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.65), transparent)",
    dot: "#34d399",
  },
  violet: {
    bar: "linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.65), transparent)",
    dot: "#a78bfa",
  },
  cyan: {
    bar: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.65), transparent)",
    dot: "#22d3ee",
  },
  amber: {
    bar: "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.65), transparent)",
    dot: "#fbbf24",
  },
};

export const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = accentMap[project.accent];

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
      className="pcard"
    >
      <div className="pcard-accent-bar" style={{ background: accent.bar }} />

      <div className="pcard-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="pcard-img"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        <div className="pcard-image-fade" />
      </div>

      <div className="pcard-body">
        <div className="pcard-meta">
          <span className="pcard-category">{project.category}</span>
          <span className="pcard-status">
            <span className="pcard-status-dot" style={{ background: accent.dot }} />
            {project.status}
          </span>
        </div>

        <h2 className="pcard-title">{project.title}</h2>
        <p className="pcard-desc">{project.shortDescription}</p>

        <div className="pcard-stack">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="pcard-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="pcard-actions">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard-btn pcard-btn-primary"
            >
              Visit ↗
            </Link>
          ) : null}
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard-btn"
            >
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
