import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  delay: number;
};

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="p-6 hover:shadow-lg transition-shadow h-full">
        <div className="space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-foreground">
              {project.name}
            </h3>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${project.name} repository`}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Authors: </span>
            {project.authors.map((author, index) => (
              <span key={author.username}>
                {index > 0 ? ", " : ""}
                <a
                  href={author.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @{author.username}
                </a>
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
