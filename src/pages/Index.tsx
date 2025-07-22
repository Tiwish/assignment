import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import HowItWorks from "@/components/HowItWorks";
import TopCompanies from "@/components/TopCompanies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedJobs />
      <HowItWorks />
      <TopCompanies />
      <Footer />
    </div>
  );
};

export default Index