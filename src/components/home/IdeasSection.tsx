import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { ideas } from "@/lib/content";

const IdeasSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionTitle>Dumb Ideas We Love</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-4">
        {ideas.map((idea, index) => (
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
  );
};

export default IdeasSection;
