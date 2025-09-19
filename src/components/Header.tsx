import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="bg-white border-b border-border/50 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Logo.svg" alt="Abike Chambers Logo" className="w-14 h-14 object-contain" />
            <span className="font-bold text-xl text-foreground">ABIKE CHAMBERS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <Button className="btn-primary hidden md:block">Consultation</Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>;
};
export default Header;