import type { LucideIcon } from "lucide-react";

export type ProjectAuthor = {
  username: string;
  profileUrl: string;
};

export type Project = {
  name: string;
  description: string;
  repoUrl: string;
  authors: ProjectAuthor[];
  tags: string[];
};

export type Idea = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
};

export type JoinStep = {
  title: string;
  description: string;
  delay: number;
};
