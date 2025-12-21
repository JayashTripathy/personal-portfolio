import { createServerFn } from "@tanstack/react-start";
import { fetchUserPullRequests } from "@/lib/github";

export const getGitHubContributionServerFn = createServerFn().handler(async () => {
  const contributions = await fetchUserPullRequests("JayashTripathy", 50);
  return contributions;
});
