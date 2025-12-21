import { WorkExperience } from "@/constants/work-experience";
import ContentParagraph from "../content-paragraph";
import { FaBriefcase } from "react-icons/fa6";

type ProfessionalExperienceProps = {
  experiences: WorkExperience[];
};

const ProfessionalExperience = ({
  experiences,
}: ProfessionalExperienceProps) => {
  return (
    <div className="py-10 px-8">
      <h2 className="text-xl mb-8 opacity-20 flex items-center gap-2">
        Professional Experience
      </h2>
      <div className="flex flex-col gap-12">
        {experiences.map((experience) => (
          <div key={experience.company} className="flex flex-col gap-3">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 touch-manipulation active:opacity-75 flex gap-4 items-center "
            >
              <img
                src={experience.logo}
                alt={experience.company}
                className="size-10 rounded-lg object-contain flex items-center justify-center"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-medium">{experience.company}</h3>
                <p className="text-sm text-muted-foreground">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </a>
            <ContentParagraph>{experience.description}</ContentParagraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
