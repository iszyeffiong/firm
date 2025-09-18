import { Button } from "@/components/ui/button";

const CulturalSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="img-placeholder aspect-[4/3] rounded-2xl">
              <span className="text-6xl">🏛️</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 text-primary-foreground">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-90">Cultural Sites</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Experiencing Traditions
                <br />
                <span className="text-primary">Cultural Immersion</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the rich heritage and vibrant cultures of your destination. 
                From ancient traditions to modern customs, immerse yourself in 
                authentic experiences that will enrich your journey.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Local guide expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Authentic experiences</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Historical insights</span>
              </div>
            </div>

            <Button className="btn-primary">
              Explore Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;