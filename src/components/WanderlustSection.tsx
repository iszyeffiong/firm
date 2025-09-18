import { Button } from "@/components/ui/button";

const WanderlustSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Wanderlust Chronicles
                <br />
                <span className="opacity-90">Tales from Around</span>
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Discover inspiring stories from travelers who turned their dreams 
                into reality. Real experiences, honest insights, and practical 
                advice for your own adventure.
              </p>
            </div>

            {/* Story highlights */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">📖</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personal Travel Stories</h4>
                  <p className="text-sm opacity-80">Authentic experiences from real travelers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Tips & Insights</h4>
                  <p className="text-sm opacity-80">Practical advice for better travel</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">🌟</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hidden Gems</h4>
                  <p className="text-sm opacity-80">Discover places off the beaten path</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-xl font-medium">
                Read Stories
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-xl font-medium">
                Share Your Story
              </Button>
            </div>
          </div>

          {/* Right Content - Placeholder */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 aspect-square flex items-center justify-center">
              <span className="text-8xl opacity-50">📚</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WanderlustSection;