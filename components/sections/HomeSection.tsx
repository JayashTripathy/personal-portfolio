import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import SectionContainer from "../utils/SectionContainer";
import AnimationContainer from "../utils/AnimationContainer";
import AnimateSlideDown from "../utils/AnimatedTitle";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
import { Framer } from "lucide-react";
import Image from "next/image";
import IconReact from "../icons/iconReact";
import IconTypescript from "../icons/iconTypescript";
import IconCloud from "../ui/iconCloud";
import RetroGrid from "../ui/retroGrid";
import IconGithub from "../icons/iconGithub";
import IconLinkedin from "../icons/iconLinkedin";
import IconTwitter from "../icons/iconTwitter";
import Link from "next/link";
import IconNextdotjs from "../icons/iconNext";
import IconPrisma from "../icons/iconPrisma";
import IconBxlAws from "../icons/iconAws";
import IconExpress from "../icons/iconExpress";
import { Badge } from "@/components/ui/badge";
import IconLogoNodejs from "../icons/iconNode";
import IconTailwind from "../icons/iconTailwind";
import IconFramer from "../icons/iconFramer";
import IconBxlPostgresql from "../icons/iconPostgres";
import IconReactquery from "../icons/iconReactQuery";
import { IconWebsocket } from "../icons/iconWebSocket";
import SectionTitle from "../ui/sectionTitle";
import { TimelineEvent, TimelineHeader } from "../content/timeline";
import { calculateDuration } from "../utils/calculateDuration";

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

const topTech = [
  {
    name: "TypeScript",
    icon: <IconTypescript />,
  },
  {
    name: "React JS",
    icon: <IconReact />,
  },
  {
    name: "Next JS",
    icon: <IconNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <IconTailwind />,
  },
  {
    name: "Framer Motion",
    icon: <IconFramer />,
  },
  {
    name: "Prisma",
    icon: <IconPrisma />,
  },
  {
    name: "AWS",
    icon: <IconBxlAws />,
  },
  {
    name: "Express",
    icon: <IconExpress />,
  },
  {
    name: "Node JS",
    icon: <IconLogoNodejs />,
  },
  {
    name: "Postgres",
    icon: <IconBxlPostgresql />,
  },
  {
    name: "React Query",
    icon: <IconReactquery />,
  },
  {
    name: "Web Socket",
    icon: <IconWebsocket />,
  },
];

function HomeSection({}: Props) {
  return (
    <SectionContainer>
      <div className=" space-y-20">
        <div className=" mx-auto relative flex h-full w-full   items-center justify-center overflow-hidden rounded-3xl border bg-background p-8 md:shadow-xl">
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
                    JavaScript Developer
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

            <div className="grid grid-cols-4 grid-rows-3 grid-flow-row gap-3 p-1   h-28 relative">
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
            </div>
          </AnimationContainer>
        </div>
        <AnimationContainer customClassName="space-y-8">
          <SectionTitle title="About Me" />
          <p className="leading-7 text-muted-foreground">
            I am a passionate dev with +2 years of work experience in
            JavaScript/TypeScript and React and love learning new technologies
            and since I discovered programming. I love what i do and help others
            with what i can
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="space-y-8">
          <SectionTitle title="Experience" />
          <div className="text-muted-foreground">
            <TimelineEvent active={true} last={false}>
              <div className="flex flex-col gap-4">
                <TimelineHeader>
                  Intozi{" "}
                  <span className="text-sm opacity-55">
                    {calculateDuration("2024-02-29")}
                  </span>
                </TimelineHeader>
                <p>
                  Created content-heavy, user-friendly dashboards while working
                  extensively with real-time front-end technologies.
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
            <TimelineEvent last={false}>fsduhd</TimelineEvent>
            <TimelineEvent last={true}>fsduhd</TimelineEvent>
          </div>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
}

export default HomeSection;
