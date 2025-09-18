import legalWorkPhoto from "@/assets/legal-work-photo.jpg";

const expertiseAreas = [
  {
    title: "Litigation",
    description: "Civil and criminal cases, commercial disputes, and advocacy before the Supreme Court, Court of Appeal, High Courts, and tribunals.",
    icon: "🏛️",
    stats: "Supreme Court Ready"
  },
  {
    title: "Corporate & Commercial Law",
    description: "Telecommunications, oil & gas, securities, construction, insolvency, labour, and general business law.",
    icon: "🏢",
    stats: "Multi-Sector Expertise"
  },
  {
    title: "Property & Conveyancing",
    description: "Real estate transactions, property development, conveyancing, and mortgage registrations.",
    icon: "🏠", 
    stats: "Seamless Transactions"
  },
  {
    title: "Immigration & Family Law",
    description: "Custody, adoption, matrimonial causes, expatriate quotas, and residence permits.",
    icon: "👨‍👩‍👧‍👦",
    stats: "Compassionate Counsel"
  },
  {
    title: "Arbitration & Mediation",
    description: "Alternative dispute resolution to achieve faster and cost-effective settlements.",
    icon: "🤝",
    stats: "Swift Resolutions"
  }
];

const ExpertiseSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Deep Legal <span className="text-primary">Expertise</span>
              <br />
              Across All Areas
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our team combines decades of experience with cutting-edge legal strategies to deliver exceptional results for our clients.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{area.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{area.title}</h3>
                      <div className="text-sm text-primary font-medium">{area.stats}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Legal Books */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img 
                src={legalWorkPhoto} 
                alt="Senior legal counsel at work demonstrating deep legal expertise across all practice areas"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;