import CallToAction from "@/components/call-to-action";
import GitHubContributionsHeatmap from "@/components/home/github-contribution-heatmap";
import ProfessionalExperience from "@/components/home/professional-experience";
import ProfileDescription from "@/components/home/profile-description";
import ProfileHeader from "@/components/home/profile-header";
import OpenSourceContributions from "@/components/opensource-contributions";
import { Reveal } from "@/components/reveal";
import SectionBorder from "@/components/section-border";
import { Spotlight } from "@/components/ui/spotlight";
import { WORK_EXPERIENCE } from "@/constants/work-experience";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const sections = [
    <ProfileHeader />,
    <ProfileDescription />,
    <ProfessionalExperience experiences={WORK_EXPERIENCE} />,
    <GitHubContributionsHeatmap username="JayashTripathy" />,
    <OpenSourceContributions />,
    <CallToAction/>
  ];

  return (
    <>
      <Spotlight />
      <div className="min-h-screen bg-background antialiased relative max-w-3xl mx-auto py-12 sm:py-12 border-x">
        {sections.map((section, index) => (
          <>
            <Reveal key={index}>{section}</Reveal>
            <SectionBorder />
          </>
        ))}
      </div>
    </>
  );
}
