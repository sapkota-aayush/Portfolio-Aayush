import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { PROJECT_LINKS } from "@/lib/constants";

const OpenSourceSection = () => {
  const contributions = [
    {
      project: "Numaflow",
      description: "Open source contribution to Numaflow project. Key contributions include:\n• Docker file optimization\n• gRPC server error handling\n• Documentation bug fixes\n• Python SDK improvements",
      tech: ["Python SDK", "Go", "Rust", "Kubernetes", "Docker"],
      impact: "",
      github: PROJECT_LINKS.NUMAFLOW,
      type: "Open Source"
    }
  ];


  return (
    <section className="py-4 lg:py-8 bg-pattern-grid bg-pattern relative">
      <div className="absolute inset-0 bg-gradient-muted opacity-70"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              Open Source Contributions
            </h2>
          </div>
          
          {/* Open Source Contributions */}
          <div>
            <div className="space-y-8">
              {contributions.map((contribution, index) => (
                <Card key={index} className="p-6 lg:p-8 bg-card border border-border/50 shadow-medium hover:shadow-large transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2">
                        <h4 className="text-xl lg:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                          {contribution.project}
                        </h4>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                          {contribution.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="self-start">
                          {contribution.type}
                        </Badge>
                        <Button variant="outline" size="sm" className="gap-2 hover:bg-accent transition-colors" asChild>
                          <a href={contribution.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            View Contribution
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {contribution.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
