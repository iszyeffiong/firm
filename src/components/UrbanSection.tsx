const cities = [
  {
    name: "New York",
    country: "USA",
    emoji: "🗽"
  },
  {
    name: "Tokyo",
    country: "Japan",
    emoji: "🏮"
  },
  {
    name: "London",
    country: "UK",
    emoji: "🏰"
  },
  {
    name: "Paris",
    country: "France",
    emoji: "🗼"
  }
];

const UrbanSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Urban Escapes <span className="text-primary">City</span>
              <br />
              Hopping Adventures
            </h2>
          </div>
          <button className="btn-primary hidden md:block">
            View All Cities
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="card-travel group cursor-pointer">
              <div className="img-placeholder aspect-[3/4] mb-4 rounded-lg">
                <span className="text-5xl">{city.emoji}</span>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {city.name}
                </h3>
                <p className="text-muted-foreground text-sm">{city.country}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <div className="text-primary font-semibold">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <button className="btn-primary">
            View All Cities
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrbanSection;