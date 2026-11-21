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

const INTOZI_LOGO =
  "https://intozi.io/wp-content/uploads/2023/10/cropped-cropped-cropped-logo_icon-removebg-preview-192x192.png";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Intozi",
    startDate: "Apr 2026",
    endDate: "Present",
    description: (
      <span>
        <span className="text-foreground font-medium">
          Back at Intozi as a Software Development Engineer
        </span>
        , I work on vision AI and VLM-powered systems end to end: the pipelines
        that run the models, the evaluation that checks what they produce, and
        the product features built on top of them.
        <span className="mt-3 flex flex-col gap-1.5">
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Designed the new infrastructure for Intozi&apos;s vision
              pipeline, bringing{" "}
              <span className="text-foreground font-medium">
                130 analytics applications
              </span>{" "}
              into a single repository on shared infrastructure and
              significantly cutting development time.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built vision pipelines for a wide range of use cases, including
              camera-tampering detection, PPE detection and vehicle analytics.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Worked extensively with modern NVIDIA GPUs, including the L4
              and RTX PRO 4500 Blackwell, on large-scale video decoding,
              processing and analytics, with pipelines running across up
              to{" "}
              <span className="text-foreground font-medium">300 cameras</span>.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built an NGINX video-on-demand service that cut CPU load by{" "}
              <span className="text-foreground font-medium">~90%</span>. It is
              now the default video layer in every product deployment.
            </span>
          </span>
        </span>
      </span>
    ),
    isCurrent: true,
    link: "https://intozi.io/",
    logo: INTOZI_LOGO,
  },
  {
    company: "Plane",
    startDate: "Mar 2025",
    endDate: "Mar 2026",
    description: (
      <span>
        <span className="text-foreground font-medium">
          As a Software Engineer at Plane
        </span>
        , I built core features of the product and its marketing website.
        <span className="mt-3 flex flex-col gap-1.5">
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built analytics for data visualization, custom dashboards and
              rich filtering for fine-grained data exploration.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Migrated the codebase from{" "}
              <span className="text-foreground font-medium">
                Next.js to Vite
              </span>{" "}
              and Tailwind CSS from{" "}
              <span className="text-foreground font-medium">v3 to v4</span>,
              improving build performance.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built the website&apos;s CMS on Payload and MongoDB with reusable
              blocks, so the marketing team can publish new pages in{" "}
              <span className="text-foreground font-medium">minutes</span>.
            </span>
          </span>
        </span>
      </span>
    ),
    isCurrent: false,
    link: "https://app.plane.so/",
    logo: "https://api.plane.so/api/assets/v2/static/f815c42d-b96c-4371-8fed-82c38b9225ee/",
  },
  {
    company: "Intozi",
    startDate: "Feb 2024",
    endDate: "Mar 2025",
    description: (
      <span>
        <span className="text-foreground font-medium">
          As a Software Engineer at Intozi
        </span>
        , I worked on computer-vision surveillance systems and the real-time
        video infrastructure behind them.
        <span className="mt-3 flex flex-col gap-1.5">
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built a lossless RTSP streaming service in Go that cut frame
              latency by{" "}
              <span className="text-foreground font-medium">~98%</span> and
              improved frame quality by{" "}
              <span className="text-foreground font-medium">~90%</span>.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built an RTSP-to-HLS recording pipeline in Go, with optional
              FFmpeg compression.
            </span>
          </span>
          <span className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>
              Built a TypeScript SDK for annotating images and video in ML
              inference workflows.
            </span>
          </span>
        </span>
      </span>
    ),
    isCurrent: false,
    link: "https://intozi.io/",
    logo: INTOZI_LOGO,
  },
  {
    company: "Writeroo",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    description: (
      <span>
        <span className="text-foreground font-medium">
          As a Software Engineer Intern at Writeroo
        </span>
        , I built core UI components for a clean, scalable frontend. I designed
        a feature editor and gesture controls, and an Instagram-style canvas
        story editor with React Konva.
      </span>
    ),
    isCurrent: false,
    link: "https://writeroo.net/",
    logo: "https://writeroo.net/writeroo_circle.svg",
  },
];
