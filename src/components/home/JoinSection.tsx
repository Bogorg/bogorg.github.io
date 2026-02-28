import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { joinSteps } from "@/lib/content";

const JoinSection = () => {
  return (
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
          {joinSteps.map((step, index) => (
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
          <Button size="lg" asChild>
            <a
              href="https://github.com/Bogorg/.github/issues/new?labels=JOIN%20THE%20ORG&title=I%20want%20to%20join%20bogorg&body=Write%20a%20short%20note%20about%20what%20you%20want%20to%20add!"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-2" />
              Join Us
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
