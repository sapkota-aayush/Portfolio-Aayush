import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECT_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Portfolio",
      description: "Interactive portfolio website with AI chat integration. Features intelligent conversation\nabout my background, projects, and experience using RAG (Retrieval Augmented Generation)\nwith vector embeddings and function calling for contact form automation.",
      tech: ["React", "TypeScript", "FastAPI", "OpenAI", "LangChain", "Pinecone", "AWS", "SMTP"],
      github: PROJECT_LINKS.PORTFOLIO,
      demo: "#"
    },
    {
      title: "Folderly-Prototype",
      description: "Console Python package for AI-powered file organization using natural language.\nUses OpenAI function calling, threading, and OS file management for intelligent\nfile path handling and organization.",
      tech: ["Python", "OpenAI GPT-3", "Poetry", "Threading", "OS File Management"],
      github: PROJECT_LINKS.FOLDERLY,
      demo: "#"
    },
    {
      title: "JobTrackerMaster",
      description: "Web-based job application tracking system that tracks job applications and their\nstages. Built with modern web technologies for efficient job search management.",
      tech: ["Django", "DRF", "JWT", "OAuth2.0", "Celery", "Throttling"],
      github: SOCIAL_LINKS.GITHUB,
      demo: "#"
    }
  ];

  return (
    <section className="py-4 lg:py-8 bg-pattern-grid bg-pattern relative">
      <div className="absolute inset-0 bg-gradient-muted opacity-70"></div>
      
      {/* Fun project-themed elements */}
      <div className="absolute top-20 right-16 w-8 h-8 bg-primary/10 rounded-lg animate-pulse"></div>
      <div className="absolute bottom-20 right-24 w-4 h-4 bg-accent/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-8 w-1 h-16 bg-border/30 rotate-12"></div>
      <div className="absolute top-32 right-32 w-6 h-6 bg-muted/20 rounded-lg rotate-45 animate-pulse delay-500"></div>
      
      {/* Additional fun elements */}
      <div className="absolute top-16 right-40 w-3 h-3 bg-primary/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-16 right-36 w-10 h-10 bg-accent/10 rounded-lg rotate-12 animate-pulse delay-300"></div>
      <div className="absolute top-2/3 right-12 w-2 h-2 bg-muted/40 rounded-full animate-ping delay-700"></div>
      
      {/* Project-themed icons */}
      <div className="absolute top-24 right-28 text-sm text-muted-foreground/20">
        <div className="space-y-2">
          <div className="animate-bounce delay-100">🚀</div>
          <div className="animate-bounce delay-300">💡</div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="mb-2 sm:mb-4 lg:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-foreground tracking-tight">
              Featured Projects
            </h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {projects.map((project, index) => (
              <Card key={index} className="p-3 sm:p-4 lg:p-6 bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="gap-2 hover:bg-accent transition-colors" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 hover:bg-accent transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground text-sm lg:text-base rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
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
    </section>
  );
};

export default ProjectsSection;