import { Heart, Mail, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-heading font-bold text-xl">
                Flo<span className="text-primary">Care</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering women with knowledge about menstrual health, wellness, and self-care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calculator" className="text-muted-foreground hover:text-primary transition-colors">Period Calculator</Link></li>
              <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Learn About Periods</Link></li>
              <li><Link to="/nutrition" className="text-muted-foreground hover:text-primary transition-colors">Food & Nutrition</Link></li>
              <li><Link to="/hygiene" className="text-muted-foreground hover:text-primary transition-colors">Hygiene Tips</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/wellness" className="text-muted-foreground hover:text-primary transition-colors">Mental Wellness</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ & Myths</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Disclaimer</h4>
            <p className="text-sm text-muted-foreground">
              This app provides educational information only and is not a substitute for professional medical advice. Always consult a healthcare provider for medical concerns.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FloCare. Made with{" "}
            <Heart className="w-3 h-3 inline text-primary fill-current" /> for women everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};
