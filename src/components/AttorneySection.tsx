import { TeamCarousel, TeamMember } from './TeamCarousel';

const attorneyMembers: TeamMember[] = [
  {
    id: "isiaka-olagunju",
    name: "Isiaka Abiola Olagunju, SAN",
    role: "Founder and Principal Partner",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "25+ years of distinguished practice. LL.B., University of Lagos (1992); BL, Nigerian Law School (1993). Former General Secretary of the Nigerian Bar Association (2016–2018) and Chairman of Oyo State Independent Electoral Commission. Called to the Inner Bar as Senior Advocate of Nigeria (SAN) in 2020. Specializes in Commercial Litigation, Labour Law, Arbitration, Mediation, Electoral Matters, and Regulatory Compliance. Widely recognized in the legal community and frequently invited to advise on complex legal and policy issues.",
    linkedin: "https://linkedin.com/in/isiaka-olagunju-san"
  },
  {
    id: "motolani-akinlusi",
    name: "Motolani Akinlusi-Hamid, Esq",
    role: "Associate Partner",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Overseeing the Lagos office with 20+ years in practice. LL.B., University of Lagos (1988); BL, Nigerian Law School (1989). Former Principal Partner at Motolani Akinlusi & Co. Heads Immigration and International Franchise Department. Member of the International Bar Association and Assistant Legal Adviser of the Nigeria-International Franchise Association. She has represented major Nigerian banks in high-value receivership claims. Specializes in Immigration Law, International Franchise, Corporate Advisory, and Commercial Disputes.",
    linkedin: "https://linkedin.com/in/motolani-akinlusi"
  },
  {
    id: "olajumoke-oladejo",
    name: "Olajumoke Oladejo, Esq",
    role: "Managing Partner and Head of Chambers",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Over a decade of professional experience. LL.B., Obafemi Awolowo University (2010); BL, Nigerian Law School (2012); LLM, University of Ibadan. Formerly practiced with Olayinka Bolanle & Co. and Tafa Ahmed & Co. Advocate for family law, children's rights, and women's rights. Accredited agent of the Corporate Affairs Commission, handling pre- and post-incorporation matters. Specializes in Civil Litigation, Corporate Practice, Family Law, Property and Conveyancing, Arbitration, and Mediation. Recognized as a dynamic and results-oriented litigator.",
    linkedin: "https://linkedin.com/in/olajumoke-oladejo"
  },
  {
    id: "ishola-ramoni",
    name: "Ishola Ramoni, Esq",
    role: "Partner and Head of Litigation",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Over a decade of hands-on experience. LL.B., Olabisi Onabanjo University (2008); BL, Nigerian Law School (2011); LLM, Obafemi Awolowo University (2014). Began practice with Kola Olayiwola & Co. before joining Abike Chambers in 2012. Oversees litigation strategy and case monitoring across jurisdictions. Member of the Nigerian Bar Association and Commonwealth Lawyers Association. Specializes in Litigation, Brief Writing, Property & Conveyancing, Insolvency, and General Solicitors' Work. Known for competence, passion for litigation, and effective advocacy.",
    linkedin: "https://linkedin.com/in/ishola-ramoni"
  },
  {
    id: "surajudeen-ali-musa",
    name: "Surajudeen Ali-Musa, Esq",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "10+ years of legal experience. LL.B., Ahmadu Bello University Zaria; BL, Nigerian Law School (2011). Joined Abike Chambers in 2012, building expertise in Corporate, Commercial, Property, and Criminal Law. Member of the Nigerian Bar Association and International Bar Association. Has handled extensive litigation, advisory, and corporate matters with remarkable results. Specializes in Litigation, Corporate & Commercial Law, Property & Conveyancing, Criminal Law, and General Solicitors' Work. Recognized for his diligence, ability to manage complex legal issues, and consistent courtroom success.",
    linkedin: "https://linkedin.com/in/surajudeen-ali-musa"
  },
  {
    id: "olagunju-lethf",
    name: "Olagunju Lethf Aderemi, Esq",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Over 30 years of legal and judicial experience. Began career at the Court of Appeal in 1982 and served until retirement in 2016. Diploma in Law, Kwara State Polytechnic (2001); LL.B., University of Ilorin (2005); BL, Nigerian Law School (2007). Has served as Secretary to multiple Election Petition Tribunals across states. Member of Nigerian Bar Association, International Bar Association, Muslim Lawyers Association, Rotary International, and others. Specializes in Litigation, Property, and Conveyancing. Brings judicial insight and extensive case management experience to the firm.",
    linkedin: "https://linkedin.com/in/olagunju-aderemi"
  },
  {
    id: "taiwo-oyewole",
    name: "Taiwo Bisola Oyewole, Esq",
    role: "Counsel",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Strong academic and professional grounding. LL.B., University of Abuja (2018); BL, Nigerian Law School (2019); LLM (in view), University of Ibadan. Began legal career during NYSC at Maritus Legal Consult, prosecuting criminal matters and drafting processes. Further practice with Enos Jacob & Co. (Vine Chamber), handling ADR, Corporate, Property, and Conveyancing. Member of Nigerian Bar Association, Christian Lawyers Fellowship of Nigeria, and Nigerian Institute of Management (Chartered). Specializes in Debt Recovery, Corporate Law, Litigation, and Property & Conveyancing. Known for reliability, creativity, and professional diligence.",
    linkedin: "https://linkedin.com/in/taiwo-oyewole"
  },
  {
    id: "ayotunde-ogundare",
    name: "Ayotunde Ogundare, Esq",
    role: "Counsel",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Unique legal and human resource management expertise. LL.B., University of Ibadan; BL, Nigerian Law School, Yenagoa; M.A., Communication and Language Arts, University of Ibadan; B.A., English, Obafemi Awolowo University. Former Head of Human Resources at Marsh FJC Int'l Insurance Brokers, where she led post-merger restructuring and compliance. Member of Nigerian Bar Association, Chartered Institute of Personnel Management of Nigeria, and Nigerian Institute of Management. Specializes in Litigation, Corporate & Commercial Law, Property & Conveyancing, Labour Law, Insurance Law, and Mediation & Arbitration. Combines legal practice with organizational leadership experience.",
    linkedin: "https://linkedin.com/in/ayotunde-ogundare"
  },
  {
    id: "farida-olagunju",
    name: "Farida Oluwadamilola Olagunju, Esq",
    role: "Associate Counsel",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Dedicated legal professional with growing expertise in various areas of law. Member of the Nigerian Bar Association. Currently developing specialization in corporate and commercial law matters.",
    linkedin: "https://linkedin.com/in/farida-olagunju"
  }
];

const AttorneySection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Legal Team</span>
            <br />
            Experience You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our accomplished attorneys bring decades of combined experience and proven track records of success
          </p>
        </div>

        <TeamCarousel 
          members={attorneyMembers}
          title="Meet Our Legal Team"
          titleColor="hsl(var(--primary))"
          cardWidth={300}
          cardHeight={400}
          showArrows={true}
          showDots={true}
          autoPlay={0}
          pauseOnHover={true}
          infoPosition="bottom"
          infoTextColor="hsl(var(--foreground))"
          className="bg-secondary/30"
        />

        {/* Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Schedule a Meeting with Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized legal counsel from attorneys who understand your unique needs and challenges.
            </p>
            <button className="btn-primary">
              Meet Our Attorneys
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneySection;