import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ScrollingText from "./components/ScrollingText"
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AwardsSection from "./components/AwardsSection";
import ArticleSection from "./components/ArticleSection";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <h1 className="text-white"></h1>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScrollingText />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AwardsSection />
      <ArticleSection />
      <ContactFooter />
    </main>
  );
}