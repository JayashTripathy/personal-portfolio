import { WorkExperience } from "@/types/work-experience";

export const workExperience: WorkExperience[] = [
  {
    company: "Intozi",
    startDate: "Feb. 2024",
    endDate: "2024-02-29",
    description:
      "Created content-heavy dashboards while working extensively with real-time tech",
    bulletPoints: [
      "Real-time video streaming by utilising eventstreams, REST APIs, and websockets.",
      "Worked with a team of 4 to develop and maintain the company's core products.",
      "Completely rewrote routing logic, which reduced error rates and increased page load times by 80%.",
      "Refactored the legacy code to improve project architecture and enhance the developer experience.",
    ],
    isActive: true,
  },
  {
    company: "Writeroo",
    startDate: "Jun. 2023",
    endDate: "Sep. 2023",
    description:
      "Created the essential User interface (UI) components for implying SOLID principles. designed features, such as a feature editor and gesture controls, utilising Tailwind CSS, NextJS, Typescript, and ReactJS.",
    isLast: true,
  },
];
