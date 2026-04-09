export type ProjectAccent = "cyan" | "amber" | "violet" | "emerald";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  accent: ProjectAccent;
  status: "Live" | "In Progress" | "Concept" | "Archive";
  category: string;
};

export const projects: Project[] = [
  {
    slug: "forgetful",
    title: "Forgetful",
    shortDescription: "Short term Memento polaroid app.",
    description:
      "A memory-first product that turns capture, recall, and prioritization into a calm, polished daily workflow.",
    techStack: ["Swift", "SwiftUI", "iOS", "Xcode"],
    image: "/forgetful.png",
    liveUrl: "https://forgetful.website",
    githubUrl: "https://github.com/wumby",
    accent: "emerald",
    status: "Live",
    category: "Productivity",
  },
  {
    slug: "devkeys",
    title: "DevKeys",
    shortDescription: "A way to discover, and use developer key shortcuts in one focused workspace.",
    description:
      "A polished developer platform designed to make tool discovery, workflow setup, and daily usage feel faster, clearer, and more productized.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/DevKeys.png",
    liveUrl: "https://devkeys.lol",
    githubUrl: "https://github.com/wumby",
    accent: "violet",
    status: "Live",
    category: "Developer Tools",
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
    githubUrl: "https://github.com/wumby",
    accent: "cyan",
    status: "Live",
    category: "Sports / Community",
  },
];
