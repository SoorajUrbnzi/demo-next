import Navbar from "../components/Navbar";
import SmartHeader from "../components/SmartHeader";
import SmartShowcase from "../components/SmartShowcase";
import SmartPage from "../components/SmartPage";
import SmartService from "../components/SmartService";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <SmartHeader />
        <SmartShowcase /> 
        <SmartPage />
        <SmartService />
        <AboutFooter />
    </div>
  );
}