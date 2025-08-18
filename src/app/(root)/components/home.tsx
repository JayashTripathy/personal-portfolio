import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";
import { TimelineEvent, TimelineHeader } from "./timeline";
import IconGithub from "../../../assets/icons/icon-github";
import IconLinkedin from "../../../assets/icons/icon-linkedin";
import IconTwitter from "../../../assets/icons/icon-twitter";
import RetroGrid from "../../../components/ui/retroGrid";
import SectionTitle from "../../../components/ui/sectionTitle";
import { SparklesCore } from "../../../components/ui/Sparkles";
import AnimateSlideDown from "../../../components/utils/animated-title";
import AnimationContainer from "../../../components/utils/AnimationContainer";
import { calculateDuration } from "../../../components/utils/calculateDuration";
import SectionContainer from "../../../components/utils/SectionContainer";

import { projects } from "@/src/config/me";
import ContactForm from "./contact-form";
import Projects from "./projects";
import { WorkExperienceEntry } from "./work-experience-entry";
import { workExperience } from "@/src/shared/work-experience";

const socials = [
  {
    name: "Github",
    url: "https://github.com/JayashTripathy",
    icon: <IconGithub />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/jayash-tripathy/",
    icon: <IconLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jayash_tripathy",
    icon: <IconTwitter />,
  },
];

const FlexiIcon = ({ children }: { children: React.ReactElement }) =>
  React.cloneElement(children, {
    height: "100%",
    width: "100%",
  });

function HomeSection() {
  return (
    <SectionContainer>
      <div className=" space-y-20">
        <div className=" mx-auto relative flex flex-col gap-8 h-full w-full   items-center justify-center overflow-hidden rounded-3xl border bg-background p-8 md:shadow-xl">
          <RetroGrid />

          <AnimationContainer customClassName="w-full md:flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="flex w-20 md:w-28   aspect-square  justify-center items-center relative  ">
                <div className="absolute left-0 top-0 h-full w-full">
                  <SparklesCore
                    id={useId()}
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="h-full w-full"
                    particleColor="#FFFFFF"
                  />
                </div>
                <Image
                  src="https://res.cloudinary.com/jayash/image/upload/v1708275065/portfolio/jayash.png"
                  width={"250"}
                  height={"250"}
                  alt="Jayash Tripathy"
                  className=" w-full bg-secondary aspect-square rounded-3xl grayscale"
                ></Image>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="scroll-m-20 text-md font-bold  lg:text-2xl ">
                  Jayash Tripathy
                </h1>
                <AnimateSlideDown>
                  <h2 className=" text-sm md:text-md text-muted-foreground  w-full">
                    Software Developer
                  </h2>
                </AnimateSlideDown>

                <div className="flex gap-2 mt-2">
                  {socials.map((soc, i) => (
                    <Link href={soc.url} key={soc.name} target="__blank">
                      {soc.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimationContainer>
          <AnimationContainer customClassName="flex flex-col gap-4">
            <p className="leading-7 text-foreground/80">
              I&apos;m a seasoned Javascript / Typescript developer with an
              appetite for tinkering and an affection of design. My playground
              is web development, where I push boundaries and explore new
              avenues.
            </p>
          </AnimationContainer>
          {/* <SSHResumeCopyBlock /> */}
        </div>

        <AnimationContainer customClassName="flex flex-col gap-4">
          <SectionTitle title="Work Experience" />
          <div className="text-muted-foreground ml-5">
            {workExperience.map((work, index) => (
              <WorkExperienceEntry key={index} {...work} />
            ))}
          </div>
        </AnimationContainer>

        <AnimationContainer customClassName="flex flex-col gap-4">
          <SectionTitle title="Projects" />
          <Projects projects={projects} />
        </AnimationContainer>
        <AnimationContainer customClassName="flex flex-col gap-4">
          <SectionTitle title="Contact Me" />

          <ContactForm />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
}

export default HomeSection;
