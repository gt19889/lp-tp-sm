import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <MethodologySection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
