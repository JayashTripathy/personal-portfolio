import { WorkExperience } from "@/constants/work-experience";
import ContentParagraph from "../content-paragraph";

type ProfessionalExperienceProps = {
  experiences: WorkExperience[];
};

const ProfessionalExperience = ({
  experiences,
}: ProfessionalExperienceProps) => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-xl mb-6 opacity-20">Professional Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((experience) => (
          <div key={experience.company} className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <div className="size-10 rounded-lg bg-card" />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">{experience.company}</h3>
                <p className="text-sm text-muted-foreground">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </div>

            <ContentParagraph>{experience.description}</ContentParagraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
