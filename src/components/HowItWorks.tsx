import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Upload, Search, Send } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Create an Account",
      description: "Sign up for job openings profile. maintain your qualifications, post experience, and expertise. Your level up to find your dream job."
    },
    {
      id: 2,
      icon: Upload,
      title: "Upload CV/Resume",
      description: "From numerous job openings, shortlist the right match regarding to your profile and apply right after by uploading your CV/ Resume and hit send."
    },
    {
      id: 3,
      icon: Search,
      title: "Search Job",
      description: "Once you set your job-hunting preferences, you'll find many openings matched to your expertise criteria. Let the advanced algorithm matching."
    },
    {
      id: 4,
      icon: Send,
      title: "Get Job",
      description: "After applying wait for some time, schedule online/offline. Work everything, send final report quickly, from background hiring methods."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat mb-4">
            Get Hired in <span className="text-primary">4 Quick Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground font-outfit max-w-2xl mx-auto">
            The quickest and most effective way to get hired by the top firm working in your career interest area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-border">
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold font-red-hat mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-outfit text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connecting Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks