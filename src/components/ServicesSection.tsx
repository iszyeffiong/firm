import { useState } from 'react';
import ContactModal from './ContactModal';

const services = [
  {
    title: "Corporate Advisory & Transactions",
    description: "Comprehensive business legal services covering all aspects of corporate operations and growth.",
    icon: "🏢",
    features: ["Contracts", "Compliance", "Governance", "Mergers & Acquisitions"]
  },
  {
    title: "Litigation & Dispute Resolution", 
    description: "Expert representation in commercial, corporate, and criminal litigation matters.",
    icon: "⚖️",
    features: ["Commercial Litigation", "Corporate Disputes", "Criminal Defense", "Arbitration"]
  },
  {
    title: "Real Estate & Property Law",
    description: "Complete property legal services from development to conveyancing and transfers.",
    icon: "🏠",
    features: ["Development Schemes", "Conveyancing", "Land Transfers", "Mortgage Bonds"]
  },
  {
    title: "Immigration & Family Law",
    description: "Compassionate support for family matters and immigration processes.",
    icon: "👨‍👩‍👧‍👦",
    features: ["Adoption", "Custody", "Marriage Dissolution", "Expatriate Permits"]
  },
  {
    title: "Commercial & Business Law",
    description: "Tailored legal support for businesses from entrepreneurs to multinationals.",
    icon: "💼",
    features: ["Business Formation", "Commercial Contracts", "Regulatory Compliance", "Corporate Strategy"]
  },
  {
    title: "Legal Consultancy",
    description: "Strategic legal counsel and risk management solutions for complex challenges.",
    icon: "💡",
    features: ["Legal Opinions", "Risk Management", "Strategic Counsel", "Regulatory Guidance"]
  }
];

const ServicesSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Legal Services <span className="text-primary">Tailored</span>
            <br />
            To Your Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert legal counsel across diverse practice areas with personalized attention to every case
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-destination group cursor-pointer">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <div 
                  className="text-primary font-medium group-hover:text-primary-hover transition-colors cursor-pointer"
                  onClick={openContactModal}
                >
                  Talk to Our Attorneys →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};

export default ServicesSection;