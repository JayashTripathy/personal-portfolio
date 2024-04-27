import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import SectionContainer from "../utils/SectionContainer";
import AnimationContainer from "../utils/AnimationContainer";
import AnimateSlideDown from "../utils/AnimatedTitle";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
import { Framer } from "lucide-react";
import Image from "next/image";

type Props = {};

const items = [
  {
    id: 1,
    name: "Framer Motion",
    designation: "Product Manager",
    icon: <Framer color="black" />,
  },
  {
    id: 2,
    name: "Framer Motion",
    designation: "Product Manager",
    icon: <Framer color="black" />,
  },
  {
    id: 3,
    name: "Framer Motion",
    designation: "Product Manager",
    icon: <Framer color="black" />,
  },
  {
    id: 4,
    name: "Framer Motion",
    designation: "Product Manager",
    icon: <Framer color="black" />,
  },
  {
    id: 5,
    name: "Framer Motion",
    designation: "Product Manager",
    icon: <Framer color="black" />,
  },
];

function HomeSection({}: Props) {
  return (
    <SectionContainer>
      <div className=" space-y-20">
        <AnimationContainer customClassName="w-full">
          <div className="flex w-56 aspect-square  justify-center items-center relative mx-auto">
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
              className=" w-3/4 bg-secondary aspect-square rounded-3xl grayscale"
            ></Image>
          </div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">
            Jayash Tripathy
          </h1>
          <AnimateSlideDown>
            <h2 className=" text-xl md:text-2xl mt-4 tracking-tight mb-8 text-muted-foreground text-center w-full">
              JavaScript Developer
            </h2>
          </AnimateSlideDown>
          <h4 className="scroll-m-20 text-xl  tracking-tight text-center mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-row items-center justify-center  w-full">
            <AnimatedTooltip items={items} />
          </div>
        </AnimationContainer>

        <AnimationContainer customClassName="space-y-8">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight ">
            About Me
          </h4>
          <p className="leading-7 text-muted-foreground">
            I am a passionate dev with +2 years of work experience in
            JavaScript/TypeScript and React and love learning new technologies
            and since I discovered programming. I love what i do and help others
            with what i can
          </p>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
}

export default HomeSection;
