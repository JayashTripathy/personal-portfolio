export type WorkExperience = {
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  isCurrent: boolean;
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Intozi",
    startDate: "Feb. 2024",
    endDate: "Present",
    description:
      "I worked on real-time video streaming using event streams, REST APIs, and WebSockets, contributing to the development and maintenance of the company’s core products. I led a complete rewrite of the routing logic, reducing error rates and improving page load performance by 80%, and refactored legacy code to improve the project’s architecture and overall developer experience.",
    isCurrent: true,
  },
  {
    company: "Writeroo",
    startDate: "Jun. 2023",
    endDate: "Sep. 2023",
    description:
      "Created the essential User interface (UI) components for implying SOLID principles. designed features, such as a feature editor and gesture controls, utilising Tailwind CSS, NextJS, Typescript, and ReactJS.",
    isCurrent: true,
  },
];
