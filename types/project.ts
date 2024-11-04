import { techIcons } from '@/config/tech-icons'



export type Project = {
    title: string;
    description: string;
    url: string;
    techStack: (keyof typeof techIcons)[];
    image?: string
}