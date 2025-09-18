import { Button } from "@/components/ui/button";

const destinations = [
  {
    title: "Mountain Adventures",
    location: "Swiss Alps",
    rating: "4.9",
    reviews: "1,234",
    emoji: "🏔️"
  },
  {
    title: "Tropical Paradise",
    location: "Maldives",
    rating: "4.8",
    reviews: "892",
    emoji: "🏝️"
  },
  {
    title: "Safari Experience",
    location: "Kenya",
    rating: "4.9",
    reviews: "567",
    emoji: "🦁"
  }
];

const NatureSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Nature's <span className="text-primary">Playground</span>
            <br />
            Exploring the Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience breathtaking natural wonders and outdoor adventures 
            that will leave you with unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div key={index} className="card-destination">
              <div className="img-placeholder aspect-[4/3] mb-6 rounded-xl">
                <span className="text-6xl">{destination.emoji}</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-muted-foreground">{destination.location}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-foreground">{destination.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({destination.reviews} reviews)</span>
                </div>

                <Button variant="outline" className="w-full btn-outline">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary">
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;