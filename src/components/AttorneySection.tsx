import { TeamCarousel, TeamMember } from './TeamCarousel';
import { useState } from 'react';
import ContactModal from './ContactModal';

const attorneyMembers: TeamMember[] = [
  {
    id: "isiaka-olagunju",
    name: "Isiaka Abiola Olagunju, SAN",
    role: "Principal Partner",
    image: "/Aare.png",
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
    role: "Head of Chambers",
    image: "/Olajumoke.png",
    bio: "Over a decade of professional experience. LL.B., Obafemi Awolowo University (2010); BL, Nigerian Law School (2012); LLM, University of Ibadan. Formerly practiced with Olayinka Bolanle & Co. and Tafa Ahmed & Co. Advocate for family law, children's rights, and women's rights. Accredited agent of the Corporate Affairs Commission, handling pre- and post-incorporation matters. Specializes in Civil Litigation, Corporate Practice, Family Law, Property and Conveyancing, Arbitration, and Mediation. Recognized as a dynamic and results-oriented litigator.",
    linkedin: "https://linkedin.com/in/olajumoke-oladejo"
  },
  {
    id: "ishola-ramoni",
    name: "Ishola Ramoni, Esq",
    role: "Associate",
    image: "https://images.unsplash.com/photo-1516825513084-7a3397fcd108?w=400&h=500&fit=crop",
    bio: "Over a decade of hands-on experience. LL.B., Olabisi Onabanjo University (2008); BL, Nigerian Law School (2011); LLM, Obafemi Awolowo University (2014). Began practice with Kola Olayiwola & Co. before joining Abike Chambers in 2012. Oversees litigation strategy and case monitoring across jurisdictions. Member of the Nigerian Bar Association and Commonwealth Lawyers Association. Specializes in Litigation, Brief Writing, Property & Conveyancing, Insolvency, and General Solicitors' Work. Known for competence, passion for litigation, and effective advocacy.",
    linkedin: "https://linkedin.com/in/ishola-ramoni"
  },
  {
    id: "surajudeen-ali-musa",
    name: "Suraj Ali-Musa, Esq",
    role: "Associate",
    image: "/Suraj.png",
    bio: "10+ years of legal experience. LL.B., Ahmadu Bello University Zaria; BL, Nigerian Law School (2011). Joined Abike Chambers in 2012, building expertise in Corporate, Commercial, Property, and Criminal Law. Member of the Nigerian Bar Association and International Bar Association. Has handled extensive litigation, advisory, and corporate matters with remarkable results. Specializes in Litigation, Corporate & Commercial Law, Property & Conveyancing, Criminal Law, and General Solicitors' Work. Recognized for his diligence, ability to manage complex legal issues, and consistent courtroom success.",
    linkedin: "https://linkedin.com/in/surajudeen-ali-musa"
  },
  {
    id: "olagunju-lethf",
    name: "Aderemi Olagunju, Esq",
    role: "Associate",
    image: "/Aderemi.png",
    bio: "Over 30 years of legal and judicial experience. Began career at the Court of Appeal in 1982 and served until retirement in 2016. Diploma in Law, Kwara State Polytechnic (2001); LL.B., University of Ilorin (2005); BL, Nigerian Law School (2007). Has served as Secretary to multiple Election Petition Tribunals across states. Member of Nigerian Bar Association, International Bar Association, Muslim Lawyers Association, Rotary International, and others. Specializes in Litigation, Property, and Conveyancing. Brings judicial insight and extensive case management experience to the firm.",
    linkedin: "https://linkedin.com/in/olagunju-aderemi"
  },
  {
    id: "taiwo-ayankoso",
    name: "Taiwo Abisola Ayankoso",
    role: "Associate",
    image: "/Taiwo.png",
    bio: "Taiwo Abisola Ayankoso, Esq is a dynamic legal practitioner with a growing reputation for excellence. LL.B., University of Abuja (2018); B.L., Nigerian Law School, Lagos (2019); LL.M., University of Ibadan. She has developed practical expertise in Litigation, Debt Recovery, Corporate Practice, Property & Conveyancing, and General Solicitors’ Work. A certified member of the Nigerian Institute of Management, she is known for her diligence, legal drafting skills, and commitment to efficient legal service delivery.",
    linkedin: "https://linkedin.com/in/taiwo-ayankoso"
  },
  {
    id: "joshua-aitagbebhunu",
    name: "Joshua Aitagbebhunu",
    role: "Associate",
    image: "/Joshua.png",
    bio: "Called to the Nigerian Bar in 2021. LL.B, Ambrose Alli University (2019). Prior to joining Abike Chambers, he trained at B.A. Joshua & Associates and the Legal Aid Council. His practice areas include Litigation, Corporate Advisory, and Dispute Resolution. Recognized for his analytical skills, professionalism, and client-focused approach.",
    linkedin: "https://linkedin.com/in/joshua-aitagbebhunu"
  },
  {
    id: "farida-olagunju",
    name: "Faridah Oluwadamilola Olagunju, Esq",
    role: "Associate",
    image: "/faridah.png",
    bio: "Rising legal talent with focused expertise in corporate and commercial matters. LL.B., University of Lagos (2015); BL, Nigerian Law School (2016); LLM, Ahmadu Bello University (2019). Started career with Adekunle Adebayo & Co. before joining family practice. Actively involved in pro bono work for women's rights organizations. Member of Nigerian Bar Association, Young Lawyers Forum, and International Association of Young Lawyers. Specializes in Corporate & Commercial Law, Contract Drafting, Intellectual Property, and Family Law. Known for attention to detail, client-focused approach, and innovative legal solutions.",
    linkedin: "https://linkedin.com/in/farida-olagunju"
  }
];

const AttorneySection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

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
            <button className="btn-primary" onClick={openContactModal}>
              Meet Our Attorneys
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};

export default AttorneySection;