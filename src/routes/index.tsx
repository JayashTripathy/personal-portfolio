import ProfessionalExperience from "@/components/home/professional-experience";
import ProfileDescription from "@/components/home/profile-description";
import ProfileHeader from "@/components/home/profile-header";
import PatternBlock from "@/components/pattern-block";
import { Reveal } from "@/components/reveal";
import SectionBorder from "@/components/section-border";
import { WORK_EXPERIENCE } from "@/constants/work-experience";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const sections = [
    <ProfileHeader />,
    <ProfileDescription />,
    <ProfessionalExperience experiences={WORK_EXPERIENCE} />,
  ];

  return (
    <div className="min-h-screen bg-background antialiased relative max-w-5xl mx-auto py-12 sm:py-12 px-15">
      <PatternBlock side="right" pattern="hex" />
      <PatternBlock side="left" pattern="hex" />
      {sections.map((section, index) => (
        <>
          <Reveal key={index}>{section}</Reveal>
          <SectionBorder />
        </>
      ))}
    </div>
  );
}
