// Imports remain unchanged
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Building2, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// 🇮🇳 Indian Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tata Consultancy Services",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    salary: "₹12 – ₹18 LPA",
    posted: "2 days ago",
    description: "Looking for a skilled Full Stack Developer to work on enterprise applications...",
    skills: ["React", "Node.js", "TypeScript", "MySQL"]
  },
  {
    id: 2,
    title: "UI Designer",
    company: "Zoho Corporation",
    location: "Chennai, Tamil Nadu",
    type: "Contract",
    salary: "₹8 – ₹12 LPA",
    posted: "1 day ago",
    description: "Join our creative design team as a UI Designer...",
    skills: ["Figma", "Adobe XD", "Wireframing", "User Research"]
  },
  {
    id: 3,
    title: "Back-end Developer",
    company: "Infosys Ltd.",
    location: "Pune, Maharashtra",
    type: "Full-time",
    salary: "₹10 – ₹15 LPA",
    posted: "3 days ago",
    description: "Hiring experienced Back-end Developers for product-based projects...",
    skills: ["Python", "Django", "AWS", "Docker"]
  },
  {
    id: 4,
    title: "Senior Accountant",
    company: "HDFC Bank",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹6 – ₹9 LPA",
    posted: "1 week ago",
    description: "We are looking for an experienced Senior Accountant to manage financials...",
    skills: ["Tally", "Excel", "GST Filing", "Financial Analysis"]
  },
  {
    id: 5,
    title: "Lead DevOps Engineer",
    company: "Reliance Jio",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "₹18 – ₹24 LPA",
    posted: "4 days ago",
    description: "Join our cloud infrastructure team as a Lead DevOps Engineer...",
    skills: ["Kubernetes", "AWS", "Terraform", "CI/CD"]
  },
  {
    id: 6,
    title: "Graphic Designer",
    company: "Byju's",
    location: "Noida, Uttar Pradesh",
    type: "Part-time",
    salary: "₹4 – ₹6.5 LPA",
    posted: "5 days ago",
    description: "Seeking a talented Graphic Designer for digital content creation...",
    skills: ["Photoshop", "Illustrator", "Canva", "Branding"]
  }
];

const Jobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobTitle, setJobTitle] = useState(searchParams.get("title") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [company, setCompany] = useState(searchParams.get("company") || "");
  const { toast } = useToast();

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const titleMatch = !jobTitle || job.title.toLowerCase().includes(jobTitle.toLowerCase());
      const locationMatch = !location || job.location.toLowerCase().includes(location.toLowerCase());
      const companyMatch = !company || job.company.toLowerCase().includes(company.toLowerCase());
      
      return titleMatch && locationMatch && companyMatch;
    });
  }, [jobTitle, location, company]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (jobTitle) params.set("title", jobTitle);
    if (location) params.set("location", location);
    if (company) params.set("company", company);
    setSearchParams(params);
    
    toast({
      title: "Search Updated",
      description: `Found ${filteredJobs.length} jobs matching your criteria`
    });
  };

  const handleApply = (jobId: number, jobTitle: string) => {
    toast({
      title: "Application Started",
      description: `Starting application for ${jobTitle}`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-card rounded-2xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold font-red-hat mb-6">Find Your Dream Job</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Job title or keyword
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Job title or keyword"
                  className="pl-10 h-12"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Your Location"
                  className="pl-10 h-12"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Company"
                  className="pl-10 h-12"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            
            <Button 
              className="h-12 bg-primary hover:bg-primary/90 font-outfit"
              onClick={handleSearch}
            >
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold font-red-hat">
            {filteredJobs.length} Jobs Found
          </h2>
          <p className="text-muted-foreground font-outfit">
            Showing all available positions
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-red-hat mb-2">{job.title}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm font-outfit">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="font-outfit">
                    {job.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 font-outfit">{job.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="font-medium font-outfit">{job.salary}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="font-outfit">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="bg-primary hover:bg-primary/90 font-outfit"
                    onClick={() => handleApply(job.id, job.title)}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" className="font-outfit">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold font-red-hat mb-2">No jobs found</h3>
            <p className="text-muted-foreground font-outfit">
              Try adjusting your search criteria to find more opportunities.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
