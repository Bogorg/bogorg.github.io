import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/content";

const ProjectsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <SectionTitle>Our Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
