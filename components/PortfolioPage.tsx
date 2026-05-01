"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { Project } from "@/lib/projects";

const ThreeGallery = dynamic(
  () => import("@/components/ThreeGallery").then((m) => m.ThreeGallery),
  { ssr: false }
);

export function PortfolioPage({ projects }: { projects: Project[] }) {
  return (
    <div className="portfolio-page">
      <div className="ambient-blob ambient-blob-a" />
      <div className="ambient-blob ambient-blob-b" />

      {/* Full-screen gallery */}
      <div className="gallery-section">
        <ThreeGallery projects={projects} />
      </div>

      {/* Header overlaid on top */}
      <motion.header
        className="portfolio-header"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="portfolio-header-inner">
          <div>
            <div className="portfolio-name">Jack Ziegler</div>
            <p className="portfolio-subtitle">My Portfolio</p>
          </div>
          <nav className="portfolio-nav">
            <Link
              href="https://www.linkedin.com/in/jack-ziegler-350447176/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-nav-link"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/wumby"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-nav-link"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </motion.header>
    </div>
  );
}
