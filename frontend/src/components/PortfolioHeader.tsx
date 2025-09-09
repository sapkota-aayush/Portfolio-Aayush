import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const PortfolioHeader = () => {
  return (
    <header className="relative bg-gradient-subtle border-b border-border overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-muted/50 rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-20 bg-border rotate-12"></div>
      
      {/* Fun geometric elements */}
      <div className="absolute top-32 right-12 w-12 h-12 bg-primary/10 rounded-lg rotate-12 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-accent/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-8 w-1 h-20 bg-border/30 rotate-45"></div>
      <div className="absolute top-48 right-24 w-8 h-8 bg-muted/30 rounded-lg animate-pulse delay-1000"></div>
      
      {/* Additional fun elements */}
      <div className="absolute top-16 right-40 w-4 h-4 bg-primary/15 rounded-full animate-ping"></div>
      <div className="absolute bottom-16 right-36 w-10 h-10 bg-accent/10 rounded-lg rotate-45 animate-pulse delay-500"></div>
      <div className="absolute top-2/3 right-12 w-2 h-2 bg-muted/40 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-1/4 right-28 w-6 h-6 bg-primary/20 rounded-lg animate-bounce delay-300"></div>
      
      {/* Floating dots pattern */}
      <div className="absolute top-20 right-32 space-y-2">
        <div className="w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="w-1 h-1 bg-accent/30 rounded-full animate-pulse delay-200"></div>
        <div className="w-1 h-1 bg-muted/30 rounded-full animate-pulse delay-400"></div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-8 relative z-10">
        <div className="max-w-6xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="space-y-12">
            {/* Name, Photo, and Description all aligned */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              {/* Photo Section */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 border-border overflow-hidden">
                  <img 
                    src="/IMG_0267.jpg" 
                    alt="Aayush Sapkota" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              {/* Name and Title */}
              <div className="space-y-2 flex-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight">
                  Aayush Sapkota
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light">
                  Backend Developer
                </p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                  Canada • Kingston • St. Lawrence College
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button variant="outline" size="sm" className="gap-2 hover:bg-accent transition-colors" asChild>
                <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 hover:bg-accent transition-colors" asChild>
                <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 hover:bg-accent transition-colors" asChild>
                <a href={`mailto:${SOCIAL_LINKS.EMAIL}`}>
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </Button>
              <Button variant="default" size="sm" className="gap-2 hover:bg-primary/90 transition-colors">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;