import Navbar from "../components/Navbar";
import ContactHeader from "../components/ContactHeader";
import ContactMap from "../components/ContactMap";
import ContactPage from "../components/ContactPage";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <ContactHeader />
        <ContactMap />
        <ContactPage />
        <AboutFooter />
    </div>
  );
}