import React from "react";

export type WorkExperience = {
  company: string;
  startDate: string;
  endDate?: string;
  description: React.ReactNode;
  isCurrent: boolean;
  link: string;
  logo: string;
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Plane",
    startDate: "March. 2025",
    endDate: "Present",
    description: (
      <span>
        <span className="text-foreground font-medium">
          As a Software Engineer at Intozi
        </span>
        , I worked on computer vision surveillance systems, building
        high-performance infrastructure for realtime video intelligence.I
        developed a TypeScript based image and video annotation SDK for ML
        inference workflows and built Golang microservices for realtime media
        streaming, including a lossless RTSP streaming service that reduced
        frame latency by ~98% and improved frame quality by ~90%. I also
        engineered an RTSP recording pipeline that converts live streams into
        HLS (M3U8), supports optional FFmpeg compression, and stores recordings
        for reliable playback, focusing on performance, scalability, and
        realworld reliability.
      </span>
    ),
    isCurrent: false,
    link: "https://app.plane.so/",
    logo: "https://api.plane.so/api/assets/v2/static/f815c42d-b96c-4371-8fed-82c38b9225ee/",
  },
  {
    company: "Intozi",
    startDate: "Feb. 2024",
    endDate: "March.2025",
    description: (
      <span>
        <span className="text-foreground font-medium">
          As a Software Engineer at Intozi
        </span>
        , I worked on computer vision surveillance systems, building
        high-performance infrastructure for realtime video intelligence. I
        developed a TypeScript based image and video annotation SDK for ML
        inference workflows and built Golang microservices for realtime media
        streaming, including a lossless RTSP streaming service that reduced
        frame latency by ~98% and improved frame quality by ~90%. I also
        engineered an RTSP recording pipeline that converts live streams into
        HLS (M3U8), supports optional FFmpeg compression, and stores recordings
        for reliable playback, focusing on performance, scalability, and
        realworld reliability.
      </span>
    ),
    isCurrent: false,
    link: "https://intozi.io/",
    logo: "https://intozi.io/wp-content/uploads/2024/04/logo-black-1.png",
  },
  {
    company: "Writeroo",
    startDate: "Jun. 2023",
    endDate: "Sep. 2023",
    description: (
      <span>
        <span className="text-foreground font-medium">
          As a Intern Software Engineer at Writeroo
        </span>
        , I built core UI components focused on clean, scalable, and
        maintainable frontend architecture. I designed and implemented advanced
        features such as a feature editor and intuitive gesture controls using
        Tailwind CSS, Next.js, TypeScript, and React. I also created an
        Instagram like story editor that provides a canvas based editing
        experience, allowing users to compose images with text, colors, and
        backgrounds, leveraging React Konva to deliver smooth, interactive, and
        visually rich content creation workflows.
      </span>
    ),
    isCurrent: false,
    link: "https://writeroo.net/",
    logo: "https://writeroo.net/writeroo_circle.svg",
  },
];
