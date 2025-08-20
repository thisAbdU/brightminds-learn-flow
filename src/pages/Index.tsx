import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import UniqueValueSection from "@/components/sections/UniqueValueSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <UniqueValueSection />
    </Layout>
  );
};

export default Index;

