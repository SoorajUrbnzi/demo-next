import Navbar from "../components/Navbar"
import DesignHeader from "../components/DesignHeader";
import DesignShowcase from "../components/DesignShowcase";
import DesignPage from "../components/DesignPage";
import DesignService from "../components/DesignService";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <DesignHeader />
        <DesignShowcase />
        <DesignPage />
        <DesignService />
        <AboutFooter />
    </div>
  );
}