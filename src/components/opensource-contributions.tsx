"use client";

import { getGitHubContributionServerFn } from "@/api/github/contributions";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { PiArrowUpRightBold } from "react-icons/pi";
import { IoIosGitPullRequest } from "react-icons/io";

export default function OpenSourceContributions() {
  const [showAll, setShowAll] = useState(false);
  const getGitHubContributions = useServerFn(getGitHubContributionServerFn);
  const { data: contributions, isLoading: loading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => await getGitHubContributions(),
  });

  const displayedContributions = showAll
    ? contributions
    : contributions?.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-8 py-10"
    >
      <h2 className="text-xl mb-8 opacity-20 flex items-center gap-2">
        Recent Open Source Contributions
      </h2>
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12"></div>
                  </div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-2"></div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
                </div>
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
              </div>
              {i < 3 && (
                <div className="mt-4 border-b border-neutral-300 dark:border-[#2E2E2E]" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {displayedContributions?.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <IoIosGitPullRequest className="text-violet-500 " />
                    <h4 className="text-md text-foreground transition-colors duration-200  ">
                      {contribution.title}
                      <span className="text-xs ml-2">{contribution.date}</span>
                    </h4>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {contribution.description}
                  </p>
                </div>

                <Link
                  to={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 rounded-lg hover:bg-secondary transition-all duration-200"
                >
                  <PiArrowUpRightBold size={16} className="text-foreground" />
                </Link>
              </div>

              {index < displayedContributions?.length - 1 && (
                <div className="mt-4 border-b border-neutral-300 dark:border-[#2E2E2E]" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Show More/Less Toggle */}
      {!loading && contributions?.length && contributions?.length > 3 && (
        <div className="mt-4 pt-4 border-t border-neutral-300 dark:border-[#2E2E2E]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200 group"
          >
            <span>
              {showAll
                ? "Show less"
                : `Show all ${contributions?.length} contributions`}
            </span>
            {showAll ? (
              <FaChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            ) : (
              <FaChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
}
