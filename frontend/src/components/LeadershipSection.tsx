import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Calendar } from "lucide-react";

const LeadershipSection = () => {
  const leadership = [
    {
      organization: "Toastmasters International",
      role: "President",
      period: "Jul 2025 – Present",
      description: "Leading the local Toastmasters chapter with key responsibilities:\n• Managing people, budgets, marketing, and events\n• Developing strong leadership and public speaking skills\n• Fostering a supportive learning environment",
      icon: Award
    },
    {
      organization: "Toastmasters International",
      role: "VP of Membership & Speaker",
      period: "Oct 2024 – Jul 2025",
      description: "Previously served as VP of Membership & Speaker with focus areas:\n• Member recruitment and retention\n• Speaking development programs\n• Supporting member growth and development",
      icon: Users
    }
  ];


  return (
    <section className="py-12 lg:py-16 bg-gradient-diagonal relative">
      <div className="absolute inset-0 bg-texture-noise bg-texture opacity-30"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              Leadership
            </h2>
          </div>
          
          {/* Leadership Roles */}
          <div>
            <div className="space-y-8">
              {leadership.map((role, index) => (
                <Card key={index} className="p-6 lg:p-8 bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <role.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <h4 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                            {role.role}
                          </h4>
                          <Badge variant="outline">{role.period}</Badge>
                        </div>
                        <p className="text-lg font-medium text-foreground/80">{role.organization}</p>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                          {role.description}
                        </p>
                      </div>
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

export default LeadershipSection;
