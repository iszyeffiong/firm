import legalTeamPhoto from "@/assets/legal-team-photo.jpg";

const approachSteps = [
  {
    step: "01",
    title: "Case Assessment",
    description: "We take time to understand the client's needs, evaluate all legal issues, and determine the most effective pathway.",
    icon: "🔍"
  },
  {
    step: "02", 
    title: "Strategic Planning",
    description: "Tailoring solutions for each case, we design a legal strategy that aligns with both immediate needs and long-term objectives.",
    icon: "📋"
  },
  {
    step: "03",
    title: "Expert Execution", 
    description: "With skilled advocacy, diligent follow-up, and transparent communication, we pursue the best outcomes for our clients.",
    icon: "⚡"
  }
];

const ApproachSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Legal Consultation */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-2xl">
              <img 
                src={legalTeamPhoto} 
                alt="Professional legal team photo demonstrating our systematic approach to client service and case management"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary/20 rounded-full"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-accent/15 rounded-full"></div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Our Proven <span className="text-primary">Legal</span>
              <br />
              Methodology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              At Abike Chambers, we believe every case deserves careful strategy and meticulous execution. Our approach is structured in three key phases:
            </p>

            <div className="space-y-8">
              {approachSteps.map((item, index) => (
                <div key={index} className="flex space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;