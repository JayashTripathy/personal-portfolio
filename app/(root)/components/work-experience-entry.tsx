import { TimelineEvent, TimelineHeader } from "./timeline";
import { calculateDuration } from "../../../components/utils/calculateDuration";
import { WorkExperience } from "@/types/work-experience";

export function WorkExperienceEntry({
  company,
  startDate,
  endDate,
  description,
  bulletPoints,
  isActive = false,
  isLast = false,
}: WorkExperience) {
  const duration = endDate ? calculateDuration(endDate) : "Present";

  return (
    <TimelineEvent active={isActive} last={isLast}>
      <div className="flex flex-col gap-4">
        <TimelineHeader>
          {company}{" "}
          <span className="text-sm opacity-55">
            {startDate} - {duration}
          </span>
        </TimelineHeader>
        <p>{description}</p>
        {bulletPoints && (
          <ol className="list-disc flex flex-col pl-4">
            {bulletPoints.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
        )}
      </div>
    </TimelineEvent>
  );
}
