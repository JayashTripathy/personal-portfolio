import React from "react";

export type SideProject = {
  name: string;
  tagline: string;
  description: React.ReactNode;
  link: string;
};

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: "Qlips",
    tagline: "Scroll-stopping video effects, rendered in the browser",
    description: (
      <span>
        Turn a word, photos or video clips into short effect clips for Reels,
        Shorts and TikToks: highlighted headlines, ransom-note letters, torn
        paper, film burns, light leaks and more. Everything renders{" "}
        <span className="text-foreground font-medium">
          on-device using the GPU
        </span>{" "}
        and exports straight to MP4 at up to 60 fps, with no uploads and no
        render queue.
      </span>
    ),
    link: "https://qlips.pages.dev/",
  },
];
