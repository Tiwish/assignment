import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Header = () => {
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "Login",
      description: "Login functionality coming soon!",
    });
  };

  const handleRegister = () => {
    toast({
      title: "Register",
      description: "Registration functionality coming soon!",
    });
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-red-hat">
              <span className="text-primary">Job</span>
              <span className="text-brand-orange">hunt</span>
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-outfit">
              Home
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-outfit">
              About
            </a>
            <Link to="/jobs" className="text-foreground hover:text-primary transition-colors font-outfit">
              Jobs
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-outfit">
              Services
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-outfit">
              Contact Us
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="font-outfit" onClick={handleLogin}>
              Login
            </Button>
            <Button className="bg-primary hover:bg-brand-purple-dark font-outfit" onClick={handleRegister}>
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;