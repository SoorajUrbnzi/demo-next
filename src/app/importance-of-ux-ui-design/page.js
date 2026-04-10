import Navbar from "../components/Navbar";
import ImportanceHeader from "../components/ImportanceHeader";
import ImportanceServerVapt from "../components/ImportanceServerVapt";
import ImportantPage from "../components/ImportantPage";
import ImportantService from "../components/ImportantService";
import AboutFooter from "../components/AboutFooter";
export default function Page() {
  return (
    <div>
        <Navbar  />
        <ImportanceHeader />
        <ImportanceServerVapt />
        <ImportantPage />
        <ImportantService />
        <AboutFooter />
        
    </div> 
  );
}