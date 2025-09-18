import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
            <br />
            We're Here to Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your legal matter? Contact us today for a free consultation and let us help you find the best path forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+234 706 564 6370</p>
                  <p className="text-muted-foreground">+234 806 073 9223</p>
                  <p className="text-sm text-muted-foreground">Available for legal consultations</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@abikechambersng.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Head Office (Ibadan)</h4>
                  <p className="text-muted-foreground">
                    No. 3 Aperin Street,<br />
                    Off Awolowo Junction,<br />
                    Old Bodija, Ibadan, Nigeria
                  </p>
                </div>
              </div>

              {/* Lagos Office */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Lagos Office</h4>
                  <p className="text-muted-foreground">
                    C/O Motolani Akinlusi & Co.<br />
                    66 Campbell Street,<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Postal Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📮</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Postal Address</h4>
                  <p className="text-muted-foreground">
                    P.O. Box 3081,<br />
                    Mapo Post Office,<br />
                    Post Code 200001,<br />
                    Ibadan, Nigeria
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="img-placeholder aspect-video w-full bg-muted/50 rounded-xl">
                <span className="text-4xl">🗺️</span>
                <p className="text-sm text-muted-foreground mt-2">Interactive Map</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card-destination">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your legal needs.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john.doe@email.com" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Legal Matter Type
                  </label>
                  <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground">
                    <option value="">Select a practice area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="family">Family Law</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="estate-planning">Estate Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please describe your legal matter and how we can help you..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to Abike Chambers collecting and storing my information to respond to my inquiry. 
                    This does not create an attorney-client relationship.
                  </label>
                </div>

                <Button className="w-full btn-primary">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is confidential and protected by attorney-client privilege once we begin representation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;