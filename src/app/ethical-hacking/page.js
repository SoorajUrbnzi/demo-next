import Navbar from "../components/Navbar";
import EthicalHeader from "../components/EthicalHeader";
import EthicalServerVapt from "../components/EthicalServerVapt";
import EthicalProjectContent from "../components/EthicalProjectContent";
import EthicalPortfolio from "../components/EthicalPortfolio";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <EthicalHeader />
        <EthicalServerVapt />
        <EthicalProjectContent />
        <EthicalPortfolio />
        <AboutFooter />
        
    </div>
  );
}