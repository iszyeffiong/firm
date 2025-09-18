import { Button } from "@/components/ui/button";
import { DotBackground } from "@/components/ui/background-patterns";
import goldenScalesImage from "@/assets/golden-scales-justice.jpg";

const HeroSection = () => {
  return (
    <DotBackground 
      className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5"
      dotSize={1.5}
      dotColor="hsl(var(--primary) / 0.2)"
      darkDotColor="hsl(var(--primary) / 0.1)"
      spacing={24}
      showFade={true}
      fadeIntensity={25}
    >
      <section id="home" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Legal Excellence
                  <br />
                  <span className="text-primary">For Your Rights</span>
                  <br />
                  And Justice
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Protect your interests with experienced legal counsel and strategic advocacy for successful outcomes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  Get Legal Help
                </Button>
                <Button variant="outline" className="btn-outline">
                  Our Services
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Cases Won</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl">
                <img 
                  src={goldenScalesImage} 
                  alt="Golden scales of justice symbolizing fairness, balance, and legal excellence in legal representation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </DotBackground>
  );
};

export default HeroSection;