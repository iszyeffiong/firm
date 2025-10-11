import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  legalMatterType: string;
  message: string;
  consent: boolean;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    legalMatterType: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.consent) {
      alert('Please fill in all required fields and accept the consent agreement.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For now, we'll simulate success
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          legalMatterType: '',
          message: '',
          consent: false
        });
        setSubmitStatus('idle');
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-green-600 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                  <p className="text-green-700 text-sm">
                    Thank you! Your submission has been received. We'll get back to you shortly. If urgent, please call us at +234-8060739223.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-red-600 text-xl">✗</span>
                <div>
                  <h4 className="font-semibold text-red-800">Submission Failed</h4>
                  <p className="text-red-700 text-sm">
                    We're sorry, but there was an error sending your message. Please try again or contact us directly at 
                    <a href="mailto:info@abikechambersng.com" className="underline ml-1">info@abikechambersng.com</a> or 
                    <a href="tel:+2348060739223" className="underline ml-1">+234 806 073 9223</a>.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <Input 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John" 
                  className="w-full"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <Input 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe" 
                  className="w-full"
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@email.com" 
                className="w-full"
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567" 
                className="w-full" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Legal Matter Type
              </label>
              <select 
                name="legalMatterType"
                value={formData.legalMatterType}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
              >
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
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your legal matter and how we can help you..."
                className="w-full min-h-[120px]"
                required
              />
            </div>

            <div className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="consent" 
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1"
                required 
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                I consent to Abike Chambers collecting and storing my information to respond to my inquiry. 
                This does not create an attorney-client relationship.
              </label>
            </div>

            <div className="flex gap-4">
              <Button type="button" onClick={onClose} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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