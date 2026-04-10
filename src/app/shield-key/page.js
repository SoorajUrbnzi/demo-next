import Navbar from "../components/Navbar";
import ShieldHero from "../components/ShieldHero";
import ShieldBlog from "../components/ShieldBlog";
import ShieldProjectContent from "../components/ShieldProjectContent";
import ShieldPortfolio from "../components/ShieldPortfolio";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <ShieldHero />
        <ShieldBlog />
        <ShieldProjectContent />
        <ShieldPortfolio />
        <AboutFooter />
    </div>
  );
}