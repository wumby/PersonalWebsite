"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import type { Project } from "@/lib/projects";

type HeroProps = {
  projects: Project[];
};

export function Hero({ projects }: HeroProps) {
  return (
    <>
      <section id="top" className="hero-shell">
        <div className="content-frame hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Portfolio / Product-Focused Frontend</p>
            <h1 className="hero-title">
              Building polished digital products that feel engineered, not just
              assembled.
            </h1>
            <p className="hero-subtitle">
              I design and ship premium interfaces with strong hierarchy, motion,
              and product-level finish. The work is the centerpiece.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="premium-button">
                View Projects
              </a>
              <Link
                href="mailto:jackzieg@gmail.com"
                className="secondary-button"
              >
                Contact
              </Link>
              <Link
                href="https://github.com/wumby"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-aside"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-object">
              <div className="hero-object-core" />
              <div className="hero-object-panel hero-object-panel-a" />
              <div className="hero-object-panel hero-object-panel-b" />
              <div className="hero-object-panel hero-object-panel-c" />
              <div className="hero-object-floor" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="gallery-shell">
        <div className="content-frame hero-intro">
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title max-w-4xl">
            A horizontal showroom built to let each project read like a product
            on display.
          </h2>
          <p className="section-copy max-w-2xl">
            Swipe, drag, or use the controls. Each active project is elevated,
            layered, and treated like a featured object rather than a flat card.
          </p>
        </div>
        <ProjectCarousel projects={projects} />
      </section>
    </>
  );
}
