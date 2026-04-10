import Navbar from "../components/Navbar";
import SecurityHero from "../components/SecurityHero";
import SecurityBlog from "../components/SecurityBlog";
import SecurityProjectContent from "../components/SecurityProjectCOntent";
import SecurityPortfolio from "../components/SecurityPortfolio";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <SecurityHero />
        <SecurityBlog />
        <SecurityProjectContent />
        <SecurityPortfolio />
        <AboutFooter />
    </div>
  );
}