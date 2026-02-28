import { Button } from "@/components/ui/button";
import BogorgLogo from "@/assets/BogorgLogo";
import { Github } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
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
          <Button size="lg" className="mt-4" asChild>
            <a href="https://github.com/bogorg" target="_blank" rel="noreferrer">
              <Github className="mr-2" />
              Visit our GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
