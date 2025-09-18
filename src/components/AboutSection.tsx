import legalExpertiseTeam from "@/assets/legal-expertise-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              About <span className="text-primary">Abike Chambers</span>
              <br />
              Your Trusted Legal Partner
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 1995 by Isiaka Abiola Olagunju, SAN, Abike Chambers has grown into one of Nigeria's most reputable law firms with offices in Ibadan and Lagos. For nearly three decades, we have provided trusted legal services to individuals, corporations, financial institutions, and government bodies.
              </p>
              <p>
                Our firm is built on integrity, professionalism, and excellence. We pride ourselves not just on our legal expertise, but also on building strong client relationships. With a team of seasoned lawyers and consultants, Abike Chambers combines deep legal knowledge with practical solutions to help clients achieve their goals.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm">⚖️</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Integrity</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ethical practice and honest communication in every client relationship.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🎯</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Excellence</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pursuit of the highest standards in legal representation and client service.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🤝</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Commitment</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dedicated advocacy and unwavering support for every client's legal needs.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💡</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Innovation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Modern legal strategies combined with cutting-edge technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Law Office Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img 
                src={legalExpertiseTeam} 
                alt="Professional legal team representing the trusted legal partnership and expertise of Abike Chambers"
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

export default AboutSection;