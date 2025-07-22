import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-red-hat mb-4">
                  <span className="text-primary">Job</span>
                  <span className="text-brand-orange">hunt</span>
                </h1>
                <p className="text-muted-foreground font-outfit leading-relaxed">
                  If you are looking for the perfect job, look no further. Presenting Jobhunt, 
                  your one-stop shop for all your job hunting needs.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-outfit">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-outfit">hello@jobhunt.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-outfit">123 Business St, City, State 12345</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg font-red-hat mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'FAQ', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-outfit">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Candidates */}
            <div>
              <h3 className="font-semibold text-lg font-red-hat mb-6">For Candidates</h3>
              <ul className="space-y-3">
                {['Browse Jobs', 'Browse Categories', 'Candidate Dashboard', 'Job Alerts', 'My Bookmarks', 'Career Advice'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-outfit">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg font-red-hat mb-6">Stay Updated</h3>
              <p className="text-muted-foreground font-outfit mb-4">
                Subscribe to our newsletter and get notified about new job opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email"
                    className="flex-1 font-outfit"
                  />
                  <Button className="bg-primary hover:bg-brand-purple-dark">
                    Subscribe
                  </Button>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm font-outfit">
              © 2024 Jobhunt. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-outfit">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-outfit">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-outfit">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer