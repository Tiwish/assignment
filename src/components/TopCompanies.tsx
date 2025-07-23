import { Card, CardContent } from "@/components/ui/card";

const TopCompanies = () => {
  const companies = [
    {
      id: 1,
      name: "Tata Consultancy Services",
      logo: "💼",
      openings: "300+ Jobs",
      description: "IT Services & Consulting"
    },
    {
      id: 2,
      name: "Infosys",
      logo: "🌐",
      openings: "250+ Jobs",
      description: "Technology & Outsourcing"
    },
    {
      id: 3,
      name: "Reliance Industries",
      logo: "🏭",
      openings: "180+ Jobs",
      description: "Energy & Retail"
    },
    {
      id: 4,
      name: "Wipro",
      logo: "🖥️",
      openings: "200+ Jobs",
      description: "IT & Business Services"
    },
    {
      id: 5,
      name: "HCLTech",
      logo: "🔧",
      openings: "170+ Jobs",
      description: "Engineering & R&D Services"
    },
    {
      id: 6,
      name: "Mahindra Group",
      logo: "🚙",
      openings: "90+ Jobs",
      description: "Automotive & Manufacturing"
    },
    {
      id: 7,
      name: "Adani Group",
      logo: "🌾",
      openings: "110+ Jobs",
      description: "Infrastructure & Logistics"
    },
    {
      id: 8,
      name: "Zomato",
      logo: "🍽️",
      openings: "60+ Jobs",
      description: "Food Delivery & Tech"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat mb-4">
            Top <span className="text-primary">Indian Companies</span> Hiring Now
          </h2>
          <p className="text-lg text-muted-foreground font-outfit max-w-2xl mx-auto">
            Explore job opportunities with leading Indian companies across Bengaluru, Mumbai, Hyderabad, Pune and more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Card 
              key={company.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border border-border hover:border-primary/20 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:bg-primary/20 transition-colors">
                  {company.logo}
                </div>
                
                <h3 className="text-lg font-semibold font-red-hat mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                
                <p className="text-sm text-muted-foreground font-outfit mb-3">
                  {company.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium font-outfit">
                  {company.openings}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-outfit mb-6">
            Join thousands of Indian professionals landing top jobs across metro cities
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-4xl">💼</div>
            <div className="text-4xl">🌐</div>
            <div className="text-4xl">🏭</div>
            <div className="text-4xl">🖥️</div>
            <div className="text-4xl">🔧</div>
            <div className="text-4xl">🚙</div>
            <div className="text-4xl">🌾</div>
            <div className="text-4xl">🍽️</div>
            <div className="text-4xl">📡</div>
            <div className="text-4xl">📈</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
