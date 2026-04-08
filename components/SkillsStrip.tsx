"use client";

import { motion } from "framer-motion";

const specialties = [
  "Product UI Systems",
  "Motion-Driven Interfaces",
  "Design Engineering",
  "Frontend Architecture",
  "Responsive Experience Design",
];

export function SkillsStrip() {
  return (
    <motion.section
      id="about"
      className="content-frame section-spacing"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skills-band">
        <div className="skills-band-copy">
          <p className="section-label">About / Capabilities</p>
          <h2 className="section-title max-w-2xl">
            I build polished digital products with a strong bias toward clarity,
            motion, and systems-level refinement.
          </h2>
        </div>

        <div className="skills-band-grid">
          {specialties.map((item) => (
            <div key={item} className="skill-chip">
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
