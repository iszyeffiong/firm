const testimonials = [{
  quote: "Abike Chambers saved our business during a critical contract dispute. Their expertise and dedication were unmatched.",
  author: "Sarah Johnson",
  position: "CEO, TechStart Inc.",
  avatar: "💼"
}, {
  quote: "Professional, responsive, and results-driven. I couldn't have asked for better representation in my case.",
  author: "Michael Chen",
  position: "Small Business Owner",
  avatar: "👨‍💼"
}, {
  quote: "The team's knowledge of family law helped us navigate a difficult custody case with compassion and skill.",
  author: "Jennifer Martinez",
  position: "Client",
  avatar: "👩‍💼"
}];
import { useState } from 'react';
import ContactModal from './ContactModal';

const TestimonialsSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client Success <span className="text-primary">Stories</span>
            <br />
            Speak For Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trusted us with their most important legal matters
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="card-destination">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex text-primary mb-2">
                    {'★'.repeat(5)}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
              </div>
            </div>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation to discuss your legal needs with our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={openContactModal}>Consultation</button>
              <button className="btn-outline">Call +234 806 073 9223</button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>;
};
export default TestimonialsSection;