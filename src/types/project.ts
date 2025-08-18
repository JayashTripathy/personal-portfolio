import { techIcons } from "@/src/config/tech-icons";

export type Project = {
  title: string;
  description: string;
  url: string;
  techStack: (keyof typeof techIcons)[];
  image?: string;
};
