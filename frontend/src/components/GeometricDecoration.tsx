const GeometricDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-border rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-muted-foreground/20 rounded-full"></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-12 bg-border/50 rotate-45"></div>
      
      {/* Large background circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-muted/20 rounded-full"></div>
    </div>
  );
};

export default GeometricDecoration;