import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Globe,
  GitCommit,
  Lock,
  Code,
} from "lucide-react";
import { motion } from "motion/react";
import BogorgLogo from "@/assets/BogorgLogo";

const year = new Date().getFullYear();

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <BogorgLogo />
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bogorg
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The art of making things work in the weirdest possible way.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We build strange, inefficient, and oddly satisfying solutions that
            still get the job done.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="mt-4"
              onClick={() => window.open("https://github.com/bogorg", "_blank")}
            >
              <Github className="mr-2" />
              Visit our GitHub
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Card
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer group h-full"
              onClick={() =>
                window.open("https://github.com/bogorg/kvd", "_blank")
              }
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    KVD
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  A dumb Redis-compatible key-value database using Docker
                  containers as storage
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                    Go
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                    Docker
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Placeholder for future projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 border-dashed flex items-center justify-center min-h-[200px] h-full">
              <p className="text-muted-foreground text-center">
                More weird projects
                <br />
                coming soon...
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Ideas Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Dumb Ideas We Love
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
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
          ].map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idea.delay }}
              whileHover={{ x: 8 }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <idea.icon className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">{idea.title}</h3>
                </div>
                <p className="text-muted-foreground">{idea.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Join the Weird Side
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Got a brilliantly terrible idea? We want to see it!
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "1. Have a Dumb Idea",
                description:
                  'The more inefficient and absurd, the better. Bonus points for making people ask "but why?"',
                delay: 0.2,
              },
              {
                title: "2. Build It Anyway",
                description:
                  "Actually make it work. It should be terrible, but it should work",
                delay: 0.3,
              },
              {
                title: "3. Share the Horror",
                description:
                  "Join the org by clicking the button below and submit your idea",
                delay: 0.4,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: step.delay }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://github.com/Bogorg/.github/issues/new?labels=JOIN%20THE%20ORG&title=I%20want%20to%20join%20bogorg&body=Write%20a%20short%20note%20about%20what%20you%20want%20to%20add!",
                  "_blank"
                )
              }
            >
              <Github className="mr-2" />
              Join Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="container mx-auto px-4 py-12 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Built with questionable decisions, but at least we have fun</p>
        <p className="mt-2">© {year} Bogorg - Making things work, weirdly</p>
      </motion.footer>
    </div>
  );
};

export default Index;
