import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building2 } from "lucide-react";

const HeroSection = () => {
  const suggestedKeywords = [
    "Full Stack Developer",
    "Back-end Developer", 
    "Graphic Designer",
    "Senior Accountant",
    "UI Designer",
    "Employer Branding Associate",
    "Lead DevOps Engineer"
  ];

  return (
    <section className="relative py-20 bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-brand-orange rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-primary rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-brand-orange rounded-full opacity-50"></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-brand-orange rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold font-red-hat mb-6 leading-tight">
            Search, Apply &<br />
            Get Your <span className="text-primary">Dream Job</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-outfit max-w-2xl mx-auto">
            Start your hunt for the best, life-changing career opportunities from here in your
            selected career community and get hired quickly.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2 text-left">
                  Job title or keyword
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Job title or keyword"
                    className="pl-10 h-12 border-border"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2 text-left">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Your Location"
                    className="pl-10 h-12 border-border"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2 text-left">
                  Company
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Company"
                    className="pl-10 h-12 border-border"
                  />
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full md:w-auto mt-6 bg-primary hover:bg-brand-purple-dark h-12 px-8 font-outfit font-medium"
            >
              Browse Jobs
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-primary hover:bg-brand-purple-dark font-outfit">
              Browse Jobs
            </Button>
            <Button variant="outline" className="font-outfit border-primary text-primary hover:bg-primary hover:text-white">
              How It Works?
            </Button>
          </div>

          {/* Suggested Keywords */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-outfit">Popular Searches:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {suggestedKeywords.map((keyword, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-border hover:border-primary hover:text-primary font-outfit"
                >
                  {keyword}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection