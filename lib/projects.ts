export type ProjectAccent = "cyan" | "amber" | "violet" | "emerald";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  detailsUrl: string;
  githubUrl?: string;
  accent: ProjectAccent;
  status: "Live" | "In Progress" | "Concept" | "Archive";
  subtitle: string;
  summary: string;
  category: string;
  year: string;
  role: string;
  platform: string;
  problem: string;
  built: string;
  features: string[];
  challenges: string[];
  gallery: Array<{
    title: string;
    description: string;
    image: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: "forgetful",
    title: "Forgetful",
    shortDescription: "Memory-first capture and recall, reduced to a calm daily flow.",
    description:
      "A memory-first product that turns capture, recall, and prioritization into a calm, polished daily workflow.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/forgetful.png",
    liveUrl: "https://forgetful.website",
    detailsUrl: "/projects/forgetful",
    githubUrl: "https://github.com/wumby",
    accent: "emerald",
    status: "Live",
    subtitle:
      "A premium productivity surface designed to feel lightweight, personal, and unmistakably intentional.",
    summary:
      "Built as a product-led experience with gentle motion, tight hierarchy, and a design language that reduces noise instead of adding it.",
    category: "Productivity",
    year: "2026",
    role: "Product Design + Frontend Engineering",
    platform: "Web App",
    problem:
      "Most reminder and note products feel overloaded or transactional. The goal here was to create something calmer and more personal without sacrificing speed or clarity.",
    built:
      "I designed and implemented a premium interface system around quick capture, contextual grouping, and glanceable memory cues, with a more editorial visual rhythm than typical utility apps.",
    features: [
      "Fast capture workflow with minimal interaction cost",
      "Layered dashboard system for priority and recency",
      "Gentle motion language for transitions and feedback",
      "Responsive layout tuned for phone-first use",
    ],
    challenges: [
      "Balancing emotional visual design with practical usability",
      "Keeping density low without reducing function",
      "Making the product feel calm instead of sterile",
    ],
    gallery: [
      {
        title: "Capture Surface",
        description:
          "A focused entry point for writing and organizing thoughts without the usual productivity clutter.",
        image: "/forgetful.png",
      },
      {
        title: "Memory Dashboard",
        description:
          "Prioritized views that keep attention on what matters now instead of burying it in lists.",
        image: "/forgetful.png",
      },
    ],
  },
  {
    slug: "devkeys",
    title: "DevKeys",
    shortDescription: "A cleaner way to discover, organize, and use developer tools in one focused workspace.",
    description:
      "A polished developer platform designed to make tool discovery, workflow setup, and daily usage feel faster, clearer, and more productized.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/DevKeys.png",
    liveUrl: "https://devkeys.lol",
    detailsUrl: "/projects/devkeys",
    githubUrl: "https://github.com/wumby",
    accent: "violet",
    status: "Live",
    subtitle:
      "A premium developer-facing product where utility, speed, and polish all matter equally.",
    summary:
      "The project focuses on making a technical product feel streamlined and valuable immediately, with stronger hierarchy, cleaner onboarding, and a sharper product story.",
    category: "Developer Tools",
    year: "2026",
    role: "Frontend Engineering",
    platform: "Web Platform",
    problem:
      "Developer products often feel fragmented, dense, or purely functional. The goal with DevKeys was to create something that still feels efficient, but with much stronger clarity and finish.",
    built:
      "I built a cleaner frontend system around fast comprehension, tighter navigation, and a more premium visual language so the product feels useful and intentional from the first screen.",
    features: [
      "Focused product surfaces for browsing and usage",
      "Stronger hierarchy for fast scanning and action",
      "Reusable UI patterns for onboarding and core flows",
      "Responsive implementation with premium motion",
    ],
    challenges: [
      "Making a technical product feel premium without slowing it down",
      "Reducing complexity while preserving depth",
      "Keeping the interface crisp across desktop and mobile",
    ],
    gallery: [
      {
        title: "Product Surface",
        description:
          "A cleaner main interface that puts the most important actions and information in immediate reach.",
        image: "/DevKeys.png",
      },
      {
        title: "Tool Workflow",
        description:
          "Interaction patterns designed to make setup, navigation, and repeat use feel fast and controlled.",
        image: "/DevKeys.png",
      },
    ],
  },
  {
    slug: "beanie-squad",
    title: "Beanie Squad",
    shortDescription: "A franchise-style team site with sharper identity, energy, and polish.",
    description:
      "A franchise-style web presence for an NBA 2K team, blending roster storytelling, identity, and fan energy.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/beaniesquad.png",
    liveUrl: "https://beanie-squad.vercel.app/",
    detailsUrl: "/projects/beanie-squad",
    githubUrl: "https://github.com/wumby",
    accent: "cyan",
    status: "Live",
    subtitle:
      "A sports and community site shaped more like a media property than a basic team homepage.",
    summary:
      "This project centered on visual energy, stronger hierarchy, and a more professional digital identity for the team and its community.",
    category: "Sports / Community",
    year: "2025",
    role: "Frontend Engineering + UI Direction",
    platform: "Marketing / Community Site",
    problem:
      "The site needed to feel exciting enough for fans while still being structured enough to support roster pages, content destinations, and ongoing updates.",
    built:
      "I built a more cinematic frontend experience with layered composition, sharper transitions, and a content structure that gives the team a stronger digital presence.",
    features: [
      "Bold landing experience with layered visuals",
      "Roster and player information surfaces",
      "Fan-oriented destination pages",
      "Responsive interaction tuned for phones and desktops",
    ],
    challenges: [
      "Keeping the experience high-energy without compromising readability",
      "Balancing entertainment with navigational clarity",
      "Maintaining a premium feel inside a playful direction",
    ],
    gallery: [
      {
        title: "Franchise Hero",
        description:
          "A landing area that gives the team a more elevated, almost broadcast-like presence.",
        image: "/beaniesquad.png",
      },
      {
        title: "Roster Experience",
        description:
          "Information architecture that makes people easy to scan and content easy to revisit.",
        image: "/beaniesquad.png",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
