import IconReact from "@/assets/icons/icon-react";
import IconTypescript from "@/assets/icons/icon-typescript";
import IconCloud from "@/components/ui/iconCloud";
import RetroGrid from "@/components/ui/retroGrid";
import IconGithub from "@/assets/icons/icon-github";
import IconLinkedin from "@/assets/icons/icon-linkedin";
import IconTwitter from "@/assets/icons/icon-twitter";
import IconNextdotjs from "@/assets/icons/icon-next";
import IconPrisma from "@/assets/icons/icon-prisma";
import IconBxlAws from "@/assets/icons/icon-aws";
import IconExpress from "@/assets/icons/icon-express";
import IconLogoNodejs from "@/assets/icons/icon-node";
import IconTailwind from "@/assets/icons/icon-tailwind";
import IconFramer from "@/assets/icons/icon-framer";
import IconBxlPostgresql from "@/assets/icons/icon-postgres";
import IconReactquery from "@/assets/icons/icon-react-query";
import { IconWebsocket } from "@/assets/icons/icon-web-socket";
import { Project } from "@/types/project";
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
];


export const projects: Project[] = [
    {
        title: "SSH Resume",
        description: "Resume served in the terminal over SSH",
        url: "https://github.com/JayashTripathy/terminal-resume",
        techStack: ["golang"],
    }
]