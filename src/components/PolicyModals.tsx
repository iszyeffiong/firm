import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const PolicyModal = ({ isOpen, onClose, title, children }: PolicyModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-4xl max-h-[80vh]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
      </DialogHeader>
      <ScrollArea className="max-h-[60vh] pr-4">
        <div className="space-y-6 text-sm leading-relaxed">
          {children}
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

interface PolicyModalsProps {
  activeModal: string | null;
  onClose: () => void;
}

export const PolicyModals = ({ activeModal, onClose }: PolicyModalsProps) => {

  return (
    <>
      {/* Privacy Policy Modal */}
      <PolicyModal
        isOpen={activeModal === 'privacy'}
        onClose={onClose}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          
          <section>
            <h3 className="font-semibold text-lg mb-2">1. Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you contact us for legal services, subscribe to our newsletter, or communicate with us through our website.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">2. How We Use Your Information</h3>
            <p>We use the information we collect to provide legal services, communicate with you about your case, send you legal updates, and improve our services.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">3. Attorney-Client Privilege</h3>
            <p>All communications between you and our attorneys are protected by attorney-client privilege and will be kept strictly confidential in accordance with professional ethics rules.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">4. Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide legal services.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">5. Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">6. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at info@abikechambersng.com or +234 706 564 6370.</p>
          </section>
        </div>
      </PolicyModal>

      {/* Terms of Service Modal */}
      <PolicyModal
        isOpen={activeModal === 'terms'}
        onClose={onClose}
        title="Terms of Service"
      >
        <div className="space-y-4">
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          
          <section>
            <h3 className="font-semibold text-lg mb-2">1. Acceptance of Terms</h3>
            <p>By accessing and using our website and services, you accept and agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">2. Legal Services</h3>
            <p>Our legal services are subject to a formal retainer agreement. Information on our website does not constitute legal advice and no attorney-client relationship is formed until a retainer agreement is signed.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">3. Professional Responsibility</h3>
            <p>We are licensed to practice law in Nigeria and are subject to the Rules of Professional Conduct of the Nigerian Bar Association.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">4. Fees and Payment</h3>
            <p>Legal fees and payment terms will be specified in your retainer agreement. All fees are earned when paid and are non-refundable except as provided by law.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">5. Limitation of Liability</h3>
            <p>Our liability is limited to the extent permitted by law and professional responsibility rules. We maintain professional liability insurance as required.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">6. Governing Law</h3>
            <p>These terms are governed by the laws of Nigeria. Any disputes will be resolved in the appropriate courts of Nigeria.</p>
          </section>
        </div>
      </PolicyModal>

      {/* Cookie Policy Modal */}
      <PolicyModal
        isOpen={activeModal === 'cookies'}
        onClose={onClose}
        title="Cookie Policy"
      >
        <div className="space-y-4">
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          
          <section>
            <h3 className="font-semibold text-lg mb-2">1. What Are Cookies</h3>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">2. How We Use Cookies</h3>
            <p>We use cookies to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve our website's functionality</li>
              <li>Ensure the security of our services</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">3. Types of Cookies We Use</h3>
            <p><strong>Essential Cookies:</strong> Required for the website to function properly.</p>
            <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
            <p><strong>Functional Cookies:</strong> Remember your preferences and improve your experience.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">4. Managing Cookies</h3>
            <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">5. Third-Party Cookies</h3>
            <p>We may use third-party services that place cookies on your device. These services have their own privacy policies and cookie practices.</p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">6. Contact Us</h3>
            <p>If you have questions about our use of cookies, please contact us at info@abikechambersng.com.</p>
          </section>
        </div>
      </PolicyModal>
    </>
  );
};