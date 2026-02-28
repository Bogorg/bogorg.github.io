import { motion } from "motion/react";

type SiteFooterProps = {
  year: number;
};

const SiteFooter = ({ year }: SiteFooterProps) => {
  return (
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
  );
};

export default SiteFooter;
