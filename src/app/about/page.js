import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import ShowCaseSection from "../components/ShowCaseSection";
import AboutCase from "../components/AboutCase";
import WorkProcessHeader from "../components/WorkProcessHeader";
import AboutTechStact from "../components/AboutTechStact";
import AboutExperience from "../components/AboutExperience.js";
import AboutService from "../components/AboutService";
import AboutHeader from "../components/AboutHeader";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
      <AboutHero />
      <ShowCaseSection />
      <AboutCase />
      <WorkProcessHeader />
      <AboutTechStact />
      <AboutExperience />
      <AboutService />
      <AboutHeader />
      <AboutFooter />
    </div>
  );
}