import { SideProject } from "@/constants/side-projects";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ContentParagraph from "../content-paragraph";

type SideProjectsProps = {
  projects: SideProject[];
};

const SideProjects = ({ projects }: SideProjectsProps) => {
  return (
    <div className="py-10 px-8">
      <h2 className="text-xl mb-8 opacity-20 flex items-center gap-2">
        Side Projects
      </h2>
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 touch-manipulation active:opacity-75 flex flex-col group"
            >
              <h3 className="text-xl font-medium flex items-center gap-2">
                {project.name}
                <FaArrowUpRightFromSquare className="size-3 opacity-40 group-hover:opacity-80 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">{project.tagline}</p>
            </a>
            <ContentParagraph>{project.description}</ContentParagraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideProjects;
