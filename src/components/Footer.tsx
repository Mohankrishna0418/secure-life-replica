import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-xl font-heading uppercase tracking-wide">
                Safety Nets
              </span>
            </div>
            <p className="text-background/70">
              Professional safety net installation for homes, apartments, and
              sports facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:7760181757" className="text-background/70 hover:text-primary transition-colors">
                  +91 7760181757
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@safetynets.com" className="text-background/70 hover:text-primary transition-colors">
                  info@safetynets.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Safety Nets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
