import Navbar from "../components/Navbar";
import InteractionHeader from "../components/InteractionHeader";
import InteractionBlog from "../components/InteractionBlog";
import InteractionPage from "../components/InteractionPage";
import InteractionService from "../components/InteractionService";
import AboutFooter from "../components/AboutFooter";

export default function Page() {
  return (
    <div>
        <Navbar />
        <InteractionHeader />
        <InteractionBlog />
        <InteractionPage />
        <InteractionService />
        <AboutFooter />
    </div>
  );
}