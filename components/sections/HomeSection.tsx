import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import SectionContainer from "../utils/SectionContainer";
import AnimationContainer from "../utils/AnimationContainer";

type Props = {};

function HomeSection({}: Props) {
  return (
    <SectionContainer>
      <AnimationContainer customClassName="w-full ">
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
          <div className="h-2/3 bg-secondary aspect-square rounded-3xl"></div>
        </div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">
          Jayash Tripathy
        </h1>
      </AnimationContainer>
    </SectionContainer>
  );
}

export default HomeSection;
