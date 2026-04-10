import Navbar from "../components/Navbar";
import ServerHero from "../components/ServerHero";
import ServerShowcase from "../components/ServerShowcase";
import ServerProjectContent from "../components/ServerProjectContent";
import ServerPortfolio from "../components/ServerPortFolio";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <ServerHero />
        <ServerShowcase />
        <ServerProjectContent />
        <ServerPortfolio />
        <AboutFooter />
    </div>
  );
}
