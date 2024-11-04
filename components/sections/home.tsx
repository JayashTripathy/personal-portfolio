import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TimelineEvent, TimelineHeader } from "../content/timeline";
import IconGithub from "../../assets/icons/icon-github";
import IconLinkedin from "../../assets/icons/icon-linkedin";
import IconTwitter from "../../assets/icons/icon-twitter";
import RetroGrid from "../ui/retroGrid";
import SectionTitle from "../ui/sectionTitle";
import { SparklesCore } from "../ui/Sparkles";
import SSHResumeCopyBlock from "../ui/ssh-resume-copy-block";
import AnimateSlideDown from "../utils/AnimatedTitle";
import AnimationContainer from "../utils/AnimationContainer";
import { calculateDuration } from "../utils/calculateDuration";
import SectionContainer from "../utils/SectionContainer";
import ContactForm from "./contact-form";
import Projects from "./projects";
import { projects } from "@/config/me";

type Props = {};

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


function HomeSection({ }: Props) {
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
                    id="tsparticlesfullpage"
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
            {/* <div className=" flex flex-col gap-2 ">
              <h4 className="scroll-m-20 text  tracking-tight text-center mb-3">
                Current Favorite Tech
              </h4>
              <div className="flex flex-row items-center justify-center  w-full">
                <AnimatedTooltip items={items} />
              </div>
            </div> */}

            {/* <div className="grid grid-cols-4 grid-rows-3 grid-flow-row gap-3 p-1   h-28 relative">
              <Badge
                className="absolute top-11 text-xs font-bold  -left-[calc(50%)]  -rotate-90  "
                variant={"outline"}
              >
                Current Favorites
              </Badge>
              {topTech.map((icon, index) => (
                <div className="h-full w-full rounded-3xl   " key={index}>
                  <FlexiIcon>{icon.icon}</FlexiIcon>
                </div>
              ))}
            </div> */}
          </AnimationContainer>
          <AnimationContainer customClassName="space-y-8">
            <p className="leading-7 text-foreground/80">
              I&apos;m a seasoned Javascript / Typescript developer with an appetite for tinkering
              and an affection of design. My playground is web development,
              where I push boundaries and explore new avenues.
            </p>
          </AnimationContainer>
          <SSHResumeCopyBlock />
        </div>

        <AnimationContainer customClassName="space-y-8">
          <SectionTitle title="Work Experience" />
          <div className="text-muted-foreground ml-5">
            <TimelineEvent active={true} last={false}>
              <div className="flex flex-col gap-4">
                <TimelineHeader>
                  Intozi{" "}
                  <span className="text-sm opacity-55">
                    Feb. 2024 - {calculateDuration("2024-02-29")}
                  </span>
                </TimelineHeader>
                {/* <p className="text-foreground/80">
                  I created user-friendly dashboards and specialized in
                  real-time technologies, including video streaming with event
                  streams, REST APIs, and websockets. Working with a team of
                  four, I revamped routing logic to boost page load speed by 80%
                  and reduced errors. I also refactored legacy code to improve
                  project architecture and the developer experience.
                </p> */}
                <p>
                  Created content-heavy dashboards while working extensively
                  with real-time tech
                </p>
                <ol className="list-disc flex flex-col pl-4">
                  <li>
                    Real-time video streaming by utilising eventstreams, REST
                    APIs, and websockets.
                  </li>
                  <li>
                    Worked with a team of 4 to develop and maintain the
                    company&apos;s core products.
                  </li>
                  <li>
                    Completely rewrote routing logic, which reduced error rates
                    and increased page load times by 80%.
                  </li>
                  <li>
                    Refactored the legacy code to improve project architecture
                    and enhance the developer experience.
                  </li>
                </ol>
              </div>
            </TimelineEvent>
            <TimelineEvent last={true}>
              <div className="flex flex-col gap-4">
                <TimelineHeader>
                  Writeroo
                  <span className="text-sm opacity-55">
                    Jun. 2023 - Sep. 2023
                  </span>
                </TimelineHeader>
                <p>
                  Created the essential User interface (UI) components for
                  implying SOLID principles. designed features, such as a
                  feature editor and gesture controls, utilising Tailwind CSS,
                  NextJS, Typescript, and ReactJS.
                </p>
                <p>
                  Worked on the Cordava ionic framework to create a mobile
                  application using ReactJS and Typescript.
                </p>
              </div>
            </TimelineEvent>
          </div>
        </AnimationContainer>

        <AnimationContainer customClassName="space-y-8">
          <SectionTitle title="Projects" />
          <Projects projects={projects} />
        </AnimationContainer>
        <AnimationContainer customClassName="space-y-8">
          <SectionTitle title="Contact Me" />

          <ContactForm />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
}

export default HomeSection;
