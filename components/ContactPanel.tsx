"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/wumby",
    value: "github.com/wumby",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    value: "linkedin.com/in/jack-ziegler-350447176",
  },
  {
    label: "Email",
    href: "mailto:jackzieg@gmail.com",
    value: "jackzieg@gmail.com",
  },
];

export function ContactPanel() {
  return (
    <motion.section
      id="contact"
      className="content-frame pb-16 pt-10 sm:pb-24"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="contact-panel">
        <div className="contact-panel-copy">
          <p className="section-label">Contact</p>
          <h2 className="section-title max-w-2xl">
            Looking for a product-focused frontend engineer who obsesses over
            finish.
          </h2>
          <p className="section-copy max-w-xl">
            If the project needs stronger visual execution, cleaner interaction,
            and a sharper product story, I&apos;m interested.
          </p>
        </div>

        <div className="contact-console">
          <div className="contact-console-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="contact-console-body">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-row"
              >
                <span className="contact-row-label">{link.label}</span>
                <span className="contact-row-value">{link.value}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
