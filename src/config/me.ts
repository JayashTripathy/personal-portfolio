import IconReact from "@/src/assets/icons/icon-react";
import IconTypescript from "@/src/assets/icons/icon-typescript";
import IconCloud from "@/src/components/ui/iconCloud";
import RetroGrid from "@/src/components/ui/retroGrid";
import IconGithub from "@/src/assets/icons/icon-github";
import IconLinkedin from "@/src/assets/icons/icon-linkedin";
import IconTwitter from "@/src/assets/icons/icon-twitter";
import IconNextdotjs from "@/src/assets/icons/icon-next";
import IconPrisma from "@/src/assets/icons/icon-prisma";
import IconBxlAws from "@/src/assets/icons/icon-aws";
import IconExpress from "@/src/assets/icons/icon-express";
import IconLogoNodejs from "@/src/assets/icons/icon-node";
import IconTailwind from "@/src/assets/icons/icon-tailwind";
import IconFramer from "@/src/assets/icons/icon-framer";
import IconBxlPostgresql from "@/src/assets/icons/icon-postgres";
import IconReactquery from "@/src/assets/icons/icon-react-query";
import { IconWebsocket } from "@/src/assets/icons/icon-web-socket";
import { Project } from "@/src/types/project";
export const topTech = [
  {
    name: "TypeScript",
    icon: IconTypescript,
  },
  {
    name: "React JS",
    icon: IconReact,
  },
  {
    name: "Next JS",
    icon: IconNextdotjs,
  },
  {
    name: "Tailwind CSS",
    icon: IconTailwind,
  },
  {
    name: "Framer Motion",
    icon: IconFramer,
  },
  {
    name: "Prisma",
    icon: IconPrisma,
  },
  {
    name: "AWS",
    icon: IconBxlAws,
  },
  {
    name: "Express",
    icon: IconExpress,
  },
  {
    name: "Node JS",
    icon: IconLogoNodejs,
  },
  {
    name: "Postgres",
    icon: IconBxlPostgresql,
  },
  {
    name: "React Query",
    icon: IconReactquery,
  },
  {
    name: "Web Socket",
    icon: IconWebsocket,
  },
  {
    name: "Node JS",
    icon: IconLogoNodejs,
  },
];

export const projects: Project[] = [
  {
    title: "SSH Resume",
    description:
      "An SSH-based terminal profile viewer built with Go and Charmbracelet CLI. Connect remotely for an interactive, elegantly rendered profile experience directly in the terminal.",
    url: "https://github.com/JayashTripathy/terminal-resume",
    techStack: ["golang"],
  },
  {
    title: "Pretty Count",
    description:
      "Javascript library to format numbers in a pretty human readable format",
    url: "https://prettycount.jayash.space/",
    techStack: ["typescript", "nodejs", "npm"],
  },
];
