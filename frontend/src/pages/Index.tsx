import PortfolioHeader from "@/components/PortfolioHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import LeadershipSection from "@/components/LeadershipSection";
import ChatSection from "@/components/ChatSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <OpenSourceSection />
      <LeadershipSection />
      <ChatSection />
      <Footer />
    </div>
  );
};

export default Index;
