import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BogorgLogo from "@/assets/BogorgLogo";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-20 md:py-28">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 text-center bg-muted/30">
            <div className="flex flex-col items-center space-y-6">
              <BogorgLogo />
              <p className="text-sm font-medium tracking-wider text-muted-foreground">
                ERROR 404
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Page not found
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                This route does not exist yet, or a weird experiment broke the
                link.
              </p>
              <p className="text-sm text-muted-foreground break-all">
                Requested path:{" "}
                <span className="font-mono">{location.pathname}</span>
              </p>
              <Button size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2" />
                  Return to Home
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default NotFound;
