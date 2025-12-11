import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedBusinesses from "@/components/home/FeaturedBusinesses";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturedBusinesses />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
