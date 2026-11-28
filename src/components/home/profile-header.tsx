"use client";

import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";

type ProfileHeaderProps = {
  socialLinks?: {
    github: string;
    twitter: string;
    resume: string;
    linkedin: string;
  };
};

const ProfileHeader = ({
  socialLinks = {
    github: "https://github.com/JayashTripathy",
    twitter: "https://x.com/jayash_tripathy",
    resume: "",
    linkedin: "https://www.linkedin.com/in/jayash-tripathy/",
  },
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-row gap-6  items-center pb-12 px-6">
      <img
        src="/jayash.jpg"
        width={"250"}
        height={"250"}
        alt="Jayash Tripathy"
        fetchPriority="high"
        className="size-26 bg-secondary rounded-full object-cover ring-1 ring-foreground/15 ring-offset-2 ring-offset-background"
      ></img>
      <div className="flex flex-col gap-2">
        <h1 className="inline-block tracking-tighter sm:text-4xl xl:text-5xl/none font-bold font-space-grotesk">
          Jayash Tripathy
        </h1>
        <p className="opacity-40 text-md">Software Engineer • Vision AI • VLMs</p>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              href={socialLinks.github}
              aria-label="GitHub profile"
              title="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              href={socialLinks.twitter}
              aria-label="X (Twitter) profile"
              title="X (Twitter) profile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <FaXTwitter size={18} aria-hidden="true" />
            </a>
          )}
          {socialLinks.resume && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              href={socialLinks.resume}
              aria-label="Resume"
              title="Resume"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <FaPaperclip size={18} aria-hidden="true" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              href={socialLinks.linkedin}
              aria-label="LinkedIn profile"
              title="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <FaLinkedin size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
