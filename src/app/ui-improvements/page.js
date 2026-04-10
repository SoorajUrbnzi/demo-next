import Navbar from "../components/Navbar";
import ImprovementHeader from "../components/ImprovementHeader";
import ImprovementShieldKey from "../components/ImprovementShieldKey";
import ImprovementPage from "../components/ImprovementPage";
import ImprovementtService from "../components/ImprovementService";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <ImprovementHeader />
        <ImprovementShieldKey />
        <ImprovementPage />
        <ImprovementtService />
        <AboutFooter />
    </div>
  );
}