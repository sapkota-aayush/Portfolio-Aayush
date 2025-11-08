import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Intern (Co-op)",
      company: "Empire Life",
      location: "Kingston, ON (Hybrid)",
      period: "Aug 2025 – Present",
      description: `Modernized legacy Pentaho ETL workflows for annual tax slip generation (T4, T3, etc.) by converting them into containerized Spring Boot microservices on Docker, enhancing automation, portability, and scalability.
      Automated job execution using container orchestration, reducing manual effort, execution time, and risk of errors.
      Migrated data pipelines and storage to GCP (Cloud Storage, Cloud SQL, Pub/Sub) to enable cloud-native ETL processing.`,
          type: "Internship"
          },
    {
      title: "Peer Tutor",
      company: "Self-Employed",
      location: "Remote",
      period: "Oct 2024 – Present",
      description: "Tutored students in Arduino and programming fundamentals, assisted in project\ndevelopment and troubleshooting.",
      type: "Freelance"
    },
    {
      title: "Website Coordinator",
      company: "Sustainable Kingston",
      location: "Hybrid",
      period: "Aug 2024 – Apr 2025",
      description: "Managed website content, design, technical issues, analytics, and community\nengagement for environmental organization.",
      type: "Contract"
    }
  ];

  return (
    <section className="py-4 lg:py-8 bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      {/* Simple matching elements */}
      <div className="absolute top-20 right-16 w-8 h-8 bg-primary/10 rounded-lg"></div>
      <div className="absolute bottom-20 right-24 w-4 h-4 bg-accent/20 rounded-full"></div>
      <div className="absolute top-1/2 right-8 w-1 h-16 bg-border/30 rotate-12"></div>
      <div className="absolute top-32 right-32 w-6 h-6 bg-muted/20 rounded-lg rotate-45"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              Professional Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 lg:p-8 bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg font-medium text-foreground/80">{exp.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
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

export default ExperienceSection;
