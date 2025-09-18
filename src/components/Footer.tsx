import { useState } from 'react';
import { PolicyModals } from './PolicyModals';
const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const openPrivacyPolicy = () => setActiveModal('privacy');
  const openTermsOfService = () => setActiveModal('terms');
  const openCookiePolicy = () => setActiveModal('cookies');
  const closeModal = () => setActiveModal(null);
  return <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl">ABIKE CHAMBERS</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Your trusted legal partner providing expert counsel and strategic advocacy for all your legal needs.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <span className="text-sm">f</span>
              </div>
              
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Practice Areas</h3>
            <div className="space-y-3">
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Corporate Advisory</a>
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Litigation & Dispute Resolution</a>
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Real Estate & Property Law</a>
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Immigration & Family Law</a>
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Commercial & Business Law</a>
              <a href="#services" className="block text-background/70 hover:text-primary transition-colors">Legal Consultancy</a>
            </div>
          </div>

          {/* Legal Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal Resources</h3>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-primary transition-colors">Legal Blog</a>
              <a href="#" className="block text-background/70 hover:text-primary transition-colors">Case Studies</a>
              <a href="#" className="block text-background/70 hover:text-primary transition-colors">Legal Forms</a>
              <a href="#" className="block text-background/70 hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="text-background/70">
                <div className="font-medium">Email</div>
                <div>info@abikechambersng.com</div>
              </div>
              <div className="text-background/70">
                <div className="font-medium">Phone</div>
                <div>+234 706 564 6370</div>
                <div>+234 806 073 9223</div>
              </div>
              <div className="text-background/70">
                <div className="font-medium">Head Office</div>
                <div>No. 3 Aperin Street,<br />Off Awolowo Junction,<br />Old Bodija, Ibadan, Nigeria</div>
              </div>
              <div className="text-background/70">
                <div className="font-medium">Lagos Office</div>
                <div>C/O Motolani Akinlusi & Co.<br />66 Campbell Street,<br />Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © 2024 Abike Chambers. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button onClick={openPrivacyPolicy} className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <button onClick={openTermsOfService} className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </button>
              <button onClick={openCookiePolicy} className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      <PolicyModals activeModal={activeModal} onClose={closeModal} />
    </footer>;
};
export default Footer;