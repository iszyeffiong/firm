import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl font-bold"
            >
              ×
            </button>
          </div>

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

            <div className="flex gap-4">
              <Button type="button" onClick={onClose} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1 btn-primary">
                Send Message
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Your information is confidential and protected by attorney-client privilege once we begin representation.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;