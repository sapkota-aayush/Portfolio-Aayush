import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      institution: "St. Lawrence College",
      location: "Kingston, ON",
      degree: "Advanced Diploma, Computer Programming and Analysis",
      period: "Sep 2023 – Apr 2026",
      type: "Current"
    }
  ];

  return (
    <section className="py-4 lg:py-8 bg-pattern-dots bg-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              Education
            </h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 lg:p-8 bg-gradient-subtle border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg font-medium text-foreground/80">{edu.degree}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{edu.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <Badge variant={edu.type === "Current" ? "default" : "secondary"} className="self-start">
                      {edu.type}
                    </Badge>
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

export default EducationSection;
