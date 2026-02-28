import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import IdeasSection from "@/components/home/IdeasSection";
import JoinSection from "@/components/home/JoinSection";
import SiteFooter from "@/components/home/SiteFooter";

const year = new Date().getFullYear();

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <IdeasSection />
      <JoinSection />
      <SiteFooter year={year} />
    </div>
  );
};

export default Index;
