import CallToAction from "@/components/call-to-action";
import ProfessionalExperience from "@/components/home/professional-experience";
import ProfileDescription from "@/components/home/profile-description";
import ProfileHeader from "@/components/home/profile-header";
import SideProjects from "@/components/home/side-projects";
import { Reveal } from "@/components/reveal";
import SectionBorder from "@/components/section-border";
import { Spotlight } from "@/components/ui/spotlight";
import { SIDE_PROJECTS } from "@/constants/side-projects";
import { WORK_EXPERIENCE } from "@/constants/work-experience";
import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const sections = [
    <ProfileHeader />,
    <ProfileDescription />,
    <ProfessionalExperience experiences={WORK_EXPERIENCE} />,
    <SideProjects projects={SIDE_PROJECTS} />,
    <CallToAction/>
  ];

  return (
    <>
      <Spotlight />
      <div className="min-h-screen bg-background antialiased relative max-w-3xl mx-auto py-12 sm:py-12 border-x">
        {sections.map((section, index) => (
          <Fragment key={index}>
            {index < 2 ? section : <Reveal>{section}</Reveal>}
            <SectionBorder />
          </Fragment>
        ))}
      </div>
    </>
  );
}
