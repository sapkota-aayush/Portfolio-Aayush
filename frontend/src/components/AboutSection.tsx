import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      {/* Simple matching elements */}
      <div className="absolute top-20 right-16 w-8 h-8 bg-primary/10 rounded-lg"></div>
      <div className="absolute bottom-20 right-24 w-4 h-4 bg-accent/20 rounded-full"></div>
      <div className="absolute top-1/2 right-8 w-1 h-16 bg-border/30 rotate-12"></div>
      <div className="absolute top-32 right-32 w-6 h-6 bg-muted/20 rounded-lg rotate-45"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
          <div className="border border-border/30 rounded-lg p-6 lg:p-8 bg-background/50 backdrop-blur-sm">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
                About Me
              </h2>
            </div>
            
            <div className="text-foreground/90">
              <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
                I build backend systems.
                Curious and confused.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;