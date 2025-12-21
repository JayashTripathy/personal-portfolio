import GitHubContributions from "@/components/github-calender";
import { FaBriefcase, FaGithub } from "react-icons/fa6";

interface GitHubContributionsHeatmapProps {
  username: string;
}

export default function GitHubContributionsHeatmap({
  username,
}: GitHubContributionsHeatmapProps) {
  return (
    <div className="py-10 px-8">
      <h2 className="text-xl mb-8 opacity-20 flex items-center gap-2">
        GitHub Contributions • JayashTripathy
      </h2>
      <GitHubContributions username={username} />
    </div>
  );
}
