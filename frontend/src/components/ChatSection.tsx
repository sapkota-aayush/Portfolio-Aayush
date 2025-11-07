import ChatInterface from "./ChatInterface";
import GeometricDecoration from "./GeometricDecoration";

const ChatSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-24 bg-gradient-diagonal relative">
      <GeometricDecoration />
      <div className="absolute inset-0 bg-texture-noise bg-texture opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4 sm:mb-6">
              AI-Powered Portfolio Assistant
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Have questions about my experience, projects, or skills? 
              Ask the AI assistant below for detailed insights and information.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px]">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;