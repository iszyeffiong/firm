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
                Abike Chambers was founded on July 17, 1995, by Isiaka Abiola Olagunju, SAN, and has since grown into one of Nigeria's most reputable law firms, with offices in Ibadan and Lagos. The firm was formally incorporated on December 4, 1997 (RC: IBZ RCI 3203259). In 2004, it entered into a strategic partnership with the Lagos-based firm of Motolani Akinlusi & Co.
              </p>
              <p>
                For nearly three decades, Abike Chambers has delivered trusted legal services to individuals, corporations, financial institutions, and government agencies, both domestic and international.
              </p>
              <p>
                Built on the core values of integrity, professionalism, and excellence, the firm combines deep legal knowledge with practical solutions to help clients achieve their goals. Our team of experienced lawyers and consultants is committed to building strong, long-term client relationships. We pride ourselves on being both highly skilled and highly approachable.
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

          {/* Right Content - Vision & Mission + Law Office Image */}
          <div className="relative">
            {/* Vision & Mission */}
            <div className="mb-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <span className="text-primary">Vision:</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create an internationally acclaimed Nigeria's leading law firm, providing world class service to our clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <span className="text-primary">Mission:</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To uphold the highest ethical standard in the practice of Law.
                </p>
              </div>
            </div>

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