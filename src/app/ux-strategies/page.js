import Navbar from "../components/Navbar";
import StratHeader from "../components/StratHeader";
import StratServerVapt from "../components/StratServerVapt";
import StratPage from "../components/StratPage";
import StratService from "../components/StratService"; 
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <StratHeader />
        <StratServerVapt />
        <StratPage />
        <StratService />
        <AboutFooter />
    </div>
  );
}