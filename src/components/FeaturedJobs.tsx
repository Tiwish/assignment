import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeaturedJobs = () => {
  const { toast } = useToast();

  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tata Consultancy Services (TCS)",
      location: "Bangalore, India",
      type: "Full Time",
      experience: "5 Years",
      salary: "₹18,00,000/Year",
      positions: "7 Positions",
      logo: "💼",
      isWfo: true
    },
    {
      id: 2,
      title: "Python Developer",
      company: "Infosys",
      location: "Hyderabad, India",
      type: "Full Time",
      experience: "4-8 Years",
      salary: "₹20,00,000/Year",
      positions: "5 Positions",
      logo: "🐍",
      isWfo: true
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Zomato",
      location: "Gurgaon, India",
      type: "Full Time",
      experience: "5 Years",
      salary: "₹16,00,000/Year",
      positions: "4 Positions",
      logo: "🍽️",
      isWfo: false
    },
    {
      id: 4,
      title: "Project Manager",
      company: "Reliance Jio",
      location: "Mumbai, India",
      type: "Full Time",
      experience: "6 Years",
      salary: "₹22,00,000/Year",
      positions: "2 Positions",
      logo: "📶",
      isWfo: true
    },
    {
      id: 5,
      title: "Lead DevOps Engineer",
      company: "Flipkart",
      location: "Bangalore, India",
      type: "Full Time",
      experience: "5+ Years",
      salary: "₹24,00,000/Year",
      positions: "3 Positions",
      logo: "🚚",
      isWfo: false
    },
    {
      id: 6,
      title: "ReactJS Developer",
      company: "Amazon India",
      location: "Hyderabad, India",
      type: "Full Time",
      experience: "4 Years",
      salary: "₹20,00,000/Year",
      positions: "6 Positions",
      logo: "🛒",
      isWfo: true
    },
    {
      id: 7,
      title: "AngularJS Developer",
      company: "Wipro",
      location: "Pune, India",
      type: "Full Time",
      experience: "3 Years",
      salary: "₹15,00,000/Year",
      positions: "3 Positions",
      logo: "🌐",
      isWfo: false
    },
    {
      id: 8,
      title: "Team Lead - AWS",
      company: "Capgemini India",
      location: "Chennai, India",
      type: "Full Time",
      experience: "6+ Years",
      salary: "₹25,00,000/Year",
      positions: "2 Positions",
      logo: "☁️",
      isWfo: true
    },
    {
      id: 9,
      title: "Back-end Developer",
      company: "Zoho Corp",
      location: "Chennai, India",
      type: "Full Time",
      experience: "2 Years",
      salary: "₹12,00,000/Year",
      positions: "5 Positions",
      logo: "🔧",
      isWfo: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat mb-4">
            Latest and Top <span className="text-primary">Job Openings</span>
          </h2>
          <p className="text-lg text-muted-foreground font-outfit max-w-2xl mx-auto">
            Explore exciting career opportunities across top Indian companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg font-red-hat">{job.title}</h3>
                      <p className="text-sm text-muted-foreground font-outfit">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => toast({ title: "Bookmark", description: `${job.title} saved to bookmarks!` })}>
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="font-outfit">{job.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="font-outfit">{job.type}</span>
                    </div>
                    <span className="text-primary font-medium font-outfit">{job.experience}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold font-outfit">{job.salary}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-outfit">{job.positions}</span>
                    <div className="flex space-x-2">
                      {job.isWfo && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-outfit">
                          WFO
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1 font-outfit" onClick={() => toast({ title: "Job Details", description: `Viewing details for ${job.title} at ${job.company}` })}>
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-brand-purple-dark font-outfit" onClick={() => toast({ title: "Application Started", description: `Applying for ${job.title} at ${job.company}...` })}>
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="font-outfit" onClick={() => toast({ title: "All Jobs", description: "Loading all available jobs..." })}>
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
