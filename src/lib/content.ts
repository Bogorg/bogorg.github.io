import { Globe, GitCommit, Lock, Code } from "lucide-react";
import type { Idea, JoinStep, Project } from "./types";

export const projects: Project[] = [
  {
    name: "KVD",
    description:
      "A dumb Redis-compatible key-value database using Docker containers as storage",
    repoUrl: "https://github.com/bogorg/kvd",
    authors: [
      {
        username: "YungBricoCoop",
        profileUrl: "https://github.com/YungBricoCoop",
      },
    ],
    tags: ["Go", "Docker"],
  },
  {
    name: "sha1-hulud-installer",
    description:
      "One-command installer for packages touched by the sha1-hulud npm worm. Unsafe by design, for security testing/fun only.",
    repoUrl: "https://github.com/YungBricoCoop/sha1-hulud-installer",
    authors: [
      {
        username: "YungBricoCoop",
        profileUrl: "https://github.com/YungBricoCoop",
      },
    ],
    tags: ["npm", "Security", "Node.js"],
  },
  {
    name: "Shrektm32",
    description:
      "Experimental STM32 project that aims to play the full Shrek movie on an STM32F412 Discovery display.",
    repoUrl: "https://github.com/aurel-bul/Shrektm32",
    authors: [
      {
        username: "aurel-bul",
        profileUrl: "https://github.com/aurel-bul",
      },
    ],
    tags: ["C++", "STM32", "Embedded"],
  },
  {
    name: "TOWR",
    description:
      "A tower stacking game built with plain divs and CSS tricks instead of canvas or SVG game rendering.",
    repoUrl: "https://github.com/YungBricoCoop/TOWR",
    authors: [
      {
        username: "YungBricoCoop",
        profileUrl: "https://github.com/YungBricoCoop",
      },
    ],
    tags: ["CSS", "JS", "Html", "Game"],
  },
];

export const ideas: Idea[] = [
  {
    icon: Globe,
    title: "DNS as a Message Queue",
    description:
      "Use TXT records to send messages. Slow, unreliable, beautiful chaos.",
    delay: 0.1,
  },
  {
    icon: GitCommit,
    title: "Git Commits as a Chat App",
    description:
      "Every message is a commit. Conversation history is literally git history.",
    delay: 0.2,
  },
  {
    icon: Lock,
    title: "Blockchain for Todo Lists",
    description:
      "Immutable tasks. Mining required to mark as complete. Peak inefficiency.",
    delay: 0.3,
  },
  {
    icon: Code,
    title: "CSS as a Programming Language",
    description:
      "Build logic using only CSS selectors and animations. No JavaScript allowed.",
    delay: 0.4,
  },
];

export const joinSteps: JoinStep[] = [
  {
    title: "1. Have a Dumb Idea",
    description:
      'The more inefficient and absurd, the better. Bonus points for making people ask "but why?"',
    delay: 0.2,
  },
  {
    title: "2. Build It Anyway",
    description:
      "Actually make it work. It should be terrible, but it should work.",
    delay: 0.3,
  },
  {
    title: "3. Share the Horror",
    description:
      "Join the org by clicking the button below and submit your idea.",
    delay: 0.4,
  },
];
